import { useState } from "react";
import { addPatient } from "../../services/patientService";

const PatientForm = () => {
  const [form, setForm] = useState({
    nombre: "",
    dni: "",
    estado: "estable",
    ingreso: "",
    procedimientos: [""],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleProcedimientoChange = (index, value) => {
    const nuevos = [...form.procedimientos];
    nuevos[index] = value;
    setForm(prev => ({ ...prev, procedimientos: nuevos }));
  };

  const agregarProcedimiento = () => {
    setForm(prev => ({ ...prev, procedimientos: [...prev.procedimientos, ""] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ingresoDate = new Date(form.ingreso);
    await addPatient({ ...form, ingreso: ingresoDate });
    alert("Paciente agregado correctamente");
    setForm({
      nombre: "",
      dni: "",
      estado: "estable",
      ingreso: "",
      procedimientos: [""],
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md max-w-xl mx-auto">
      <h2 className="text-xl font-bold text-blue-900 mb-4">Agregar Paciente</h2>

      <label className="block mb-2">
        Nombre:
        <input type="text" name="nombre" value={form.nombre} onChange={handleChange} required className="w-full p-2 border rounded" />
      </label>

      <label className="block mb-2">
        DNI:
        <input type="text" name="dni" value={form.dni} onChange={handleChange} required className="w-full p-2 border rounded" />
      </label>

      <label className="block mb-2">
        Estado:
        <select name="estado" value={form.estado} onChange={handleChange} className="w-full p-2 border rounded">
          <option value="estable">Estable</option>
          <option value="crítico">Crítico</option>
          <option value="observación">Observación</option>
        </select>
      </label>

      <label className="block mb-2">
        Fecha de ingreso:
        <input type="date" name="ingreso" value={form.ingreso} onChange={handleChange} required className="w-full p-2 border rounded" />
      </label>

      <label className="block mb-2">
        Procedimientos:
        {form.procedimientos.map((proc, i) => (
          <input
            key={i}
            type="text"
            value={proc}
            onChange={(e) => handleProcedimientoChange(i, e.target.value)}
            className="w-full p-2 border rounded mb-1"
          />
        ))}
        <button type="button" onClick={agregarProcedimiento} className="text-sm text-blue-600 mt-2">+ Agregar procedimiento</button>
      </label>

      <button type="submit" className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Guardar paciente
      </button>
    </form>
  );
};

export default PatientForm;
