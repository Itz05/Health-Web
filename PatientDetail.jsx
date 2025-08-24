import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getPatientById } from "../../services/patientService";
import StatusBadge from "../../components/patients/StatusBadge";
import PatientRecommendations from "../../components/patients/PatientRecommendations";

const PatientDetail = () => {
  const { id } = useParams();
  console.log("ID recibido en detalle:", id);
  const [paciente, setPaciente] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  if (!id) {
    return (
      <p className="text-center text-red-600 mt-6">
        No se encontró el paciente. ¿Ingresaste un DNI válido?
      </p>
    );
  }

useEffect(() => {
  const fetch = async () => {
    try {
      const data = await getPatientById(id);
      console.log("ID recibido:", id);
      console.log("Datos del paciente recibidos:", data);

      setPaciente(data);
    } catch (err) {
      console.error("Error al cargar paciente:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  fetch();
}, [id]);

if (loading) {
  return <p className="text-center">Cargando información del paciente...</p>;
}

if (error) {
  return (
    <p className="text-center text-red-600 mt-6">
      Ocurrió un error al cargar los datos. Intenta nuevamente más tarde.
    </p>
  );
}

if (paciente === null) {
  return (
    <div className="text-center mt-6">
      <p className="text-red-600 mb-4">Este paciente no está registrado.</p>
      <button
        onClick={() => navigate("/agregar")}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
      >
        ➕ Agregar nuevo paciente
      </button>
    </div>
  );
}

  const fechaIngreso = paciente.ingreso?.seconds
    ? new Date(paciente.ingreso.seconds * 1000).toLocaleDateString()
    : paciente.ingreso;

return (
  <div className="max-w-xl mx-auto bg-white p-6 rounded shadow-md mt-6">
    <div className="flex items-center mb-4">
      <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center text-blue-900 font-bold text-xl">
        {paciente.nombre.charAt(0)}
      </div>
      <h2 className="ml-4 text-2xl font-bold text-blue-900">{paciente.nombre}</h2>
    </div>

    <p className="text-sm text-gray-600 mb-4">DNI: {paciente.dni}</p>
    <p><strong>Estado:</strong> <StatusBadge estado={paciente.estado} /></p>
    <p><strong>Ingreso:</strong> {fechaIngreso}</p>

    <p className="mt-4"><strong>Procedimientos realizados:</strong></p>
    <ul className="list-disc ml-6 text-sm">
      {paciente.procedimientos.map((proc, i) => (
        <li key={i}>{proc}</li>
      ))}
    </ul>

    <p className="mt-4 text-xs text-gray-400">
      Última actualización: {new Date(paciente.lastUpdate?.seconds * 1000).toLocaleString()}
    </p>

    <PatientRecommendations estado={paciente.estado} />
<button
  onClick={() => navigate("/familiar")}
  className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
>
  ← Volver al buscador
</button>
<button
  onClick={() => navigate("/glosario")}
  className="mt-2 w-full bg-gray-100 text-blue-700 py-2 rounded hover:bg-gray-200 transition-colors"
>
  📘 Ver glosario médico
</button>
  </div>
);
};

export default PatientDetail;
