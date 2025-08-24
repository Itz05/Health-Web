import React from 'react';
import { useNavigate } from 'react-router-dom';
import StatusBadge from './StatusBadge';

const PatientCard = ({ paciente }) => {
  const navigate = useNavigate();

  const fechaIngreso = paciente.ingreso?.seconds
    ? new Date(paciente.ingreso.seconds * 1000).toLocaleDateString()
    : paciente.ingreso;

  const handleEdit = () => {
    navigate(`/pacientes/${paciente.id}/editar`);
  };

  return (
    <div className="mt-6 p-4 border rounded bg-gray-50">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center text-blue-900 font-bold text-xl">
          {paciente.nombre.charAt(0)}
        </div>
        <h3 className="ml-4 text-lg font-semibold text-blue-900">{paciente.nombre}</h3>
      </div>

      <p><strong>DNI:</strong> {paciente.dni}</p>
      <p><strong>Estado:</strong> <StatusBadge estado={paciente.estado} /></p>

      {paciente.estado === 'Crítico' && (
        <p className="text-red-600 font-medium mt-2">
          Este paciente requiere atención prioritaria. Contacte al profesional a cargo.
        </p>
      )}

      <p><strong>Ingreso:</strong> {fechaIngreso}</p>
      <p><strong>Procedimientos:</strong></p>
      <ul className="list-disc ml-6">
        {paciente.procedimientos.map((proc, i) => (
          <li key={i}>{proc}</li>
        ))}
      </ul>

      {/* Botón Editar */}
      <div className="mt-4 text-right">
        <button
          onClick={handleEdit}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Editar
        </button>
      </div>
    </div>
  );
};

export default PatientCard;
