// src/components/RoleSelector.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const RoleSelector = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-xl font-semibold text-blue-800">¿Quién eres?</h2>
      <button
        onClick={() => navigate("/familiar")}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Familiar
      </button>
      <button
        onClick={() => navigate("/login")}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Profesional
      </button>
    </div>
  );
};

export default RoleSelector;
