// components/patients/PatientRecommendations.jsx
import React from 'react';

const recomendaciones = {
  Crítico: [
    'Mantenga la calma y comuníquese con el equipo médico.',
    'Evite visitas prolongadas, pero asegure presencia emocional.',
    'Prepare documentos importantes por si se requieren decisiones rápidas.'
  ],
  Observación: [
    'Pregunte al personal sobre signos de mejora o alerta.',
    'Acompañe al paciente con palabras tranquilas y gestos suaves.',
    'Evite sobreinformación que pueda generar ansiedad.'
  ],
  Estable: [
    'Fomente el descanso y la alimentación saludable.',
    'Celebre pequeñas mejoras con palabras positivas.',
    'Mantenga contacto con el profesional para seguimiento.'
  ]
};

const PatientRecommendations = ({ estado }) => {
  const tips = recomendaciones[estado] || [];

  return (
    <div className="mt-6 p-4 bg-blue-50 rounded">
      <h3 className="text-lg font-semibold text-blue-800 mb-2">
        Recomendaciones para familiares
      </h3>
      <ul className="list-disc ml-6 text-sm text-blue-900">
        {tips.map((tip, i) => (
          <li key={i}>{tip}</li>
        ))}
      </ul>
    </div>
  );
};

export default PatientRecommendations;
