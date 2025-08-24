import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPatientById, updatePatient } from "../../services/patientService";

const EditPatient = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState(null);

  useEffect(() => {
  const fetchPatient = async () => {
    try {
      const data = await getPatientById(id);
      setForm({
        ...data,
        ingreso: data.ingreso?.seconds
          ? new Date(data.ingreso.seconds * 1000).toISOString().split("T")[0]
          : "",
      });
    } catch (error) {
      console.error("Error al cargar paciente:", error);
      alert("No se pudo cargar el paciente.");
    }
  };
  fetchPatient();
}, [id]);

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

  // Filtrar procedimientos vacíos
  const procedimientosFiltrados = form.procedimientos.filter(p => p.trim() !== "");

  try {
    await updatePatient(id, { ...form, ingreso: ingresoDate, procedimientos: procedimientosFiltrados });
    alert("Paciente actualizado");
    navigate("/dashboard");
  } catch (error) {
    console.error("Error al actualizar:", error);
    alert("Hubo un problema al guardar los cambios.");
  }
};

  if (!form) return <p className="text-center">Cargando datos...</p>;

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md max-w-xl mx-auto">
      <h2 className="text-xl font-bold text-blue-900 mb-4">Editar Paciente</h2>

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
        Actualizar paciente
      </button>
    </form>
  );
};

export default EditPatient;
