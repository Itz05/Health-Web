import React from 'react';

const terms = [
  {
    term: 'Observación',
    definition: 'Estado en el que el paciente está siendo monitoreado por posibles cambios clínicos.'
  },
  {
    term: 'Procedimiento invasivo',
    definition: 'Intervención médica que requiere penetrar el cuerpo, como cirugías o cateterismos.'
  },
  {
    term: 'Alta médica',
    definition: 'Momento en que el paciente puede dejar el centro médico por haber estabilizado su condición.'
  }
];

const Glossary = () => {
  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">Glosario Médico</h2>
      {terms.map((item, i) => (
        <div key={i} className="mb-4 p-4 bg-blue-50 rounded">
          <h3 className="font-semibold text-blue-900">{item.term}</h3>
          <p className="text-sm text-gray-700">{item.definition}</p>
        </div>
      ))}
    </div>
  );
};

export default Glossary;
