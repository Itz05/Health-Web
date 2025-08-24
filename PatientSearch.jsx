import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import PatientCard from "./PatientCard";

const PatientSearch = () => {
  const [dni, setDni] = useState('');
  const [result, setResult] = useState(null);

  const navigate = useNavigate();
  const handleSearch = async () => {
  if (!dni) return;

  try {
    const found = await getPatientByDni(dni);
    if (found && found.id) {
      setResult(found);
      navigate(`/pacientes/dni/${found.dni}`);
    } else {
      setResult(null);
    }
  } catch (error) {
    console.error("Error al buscar paciente:", error);
    setResult(null);
  }
};


  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4 text-blue-800">Buscar paciente por DNI</h2>
      <input
        type="text"
        value={dni}
        onChange={(e) => setDni(e.target.value)}
        placeholder="Ingrese DNI"
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />
      <button
        onClick={handleSearch}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Buscar
      </button>

      {result ? (
        <PatientCard paciente={result} />
      ) : dni && (
        <p className="mt-4 text-red-500">Paciente no encontrado</p>
      )}
    </div>
  );
};

export default PatientSearch;