import PatientForm from "../patients/PatientForm";
import PatientList from "../patients/PatientList";

const ProfessionalDashboard = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <PatientForm />
      <PatientList />
    </div>
  );
};

export default ProfessionalDashboard;
