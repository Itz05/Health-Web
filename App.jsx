import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RoleSelector from './components/RoleSelector';
import ProfessionalDashboard from './pages/professional/ProfessionalDashboard';
import PatientSearch from './components/patients/PatientSearch';
import Login from './pages/auth/Login';
import PatientDashboard from './components/PatientDashboard';
import PrivateRoute from './routes/PrivateRoute';
import PatientDetail from './pages/patients/PatientDetail';
import Glossary from './pages/glossary/Glossary';
import EditPatient from './pages/patients/EditPatient';
import ErrorBoundary from './components/ErrorBoundary';

const App = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <div className="min-h-screen bg-blue-50 p-4">
          <h1 className="text-3xl font-bold text-center text-blue-900 mb-6">
            EsSalud App - Portal de Pacientes
          </h1>

          {/* Banner condicional para versión publicada */}
          {window.location.hostname.includes("github.io") && (
            <div className="bg-green-100 border border-green-400 text-green-800 px-4 py-2 rounded mb-6 text-center">
              Estás viendo la versión publicada en línea de la app.
            </div>
          )}

          {/* Ficha de paciente de ejemplo */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6 max-w-md mx-auto">
            <h2 className="text-xl font-semibold text-blue-800 mb-2">Paciente: María López</h2>
            <p className="text-gray-700">Edad: 42 años</p>
            <p className="text-gray-700">Diagnóstico: Hipertensión</p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
              Ver historial
            </button>
          </div>

          {/* Rutas principales */}
          <Routes>
            <Route path="/" element={<RoleSelector />} />
            <Route path="/pacientes/:id/editar" element={<EditPatient />} />
            <Route path="/glosario" element={<Glossary />} />
            <Route path="/familiar" element={<PatientSearch />} />
            <Route path="/pacientes/:id" element={<PatientDetail />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <PatientDashboard />
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;