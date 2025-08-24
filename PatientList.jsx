import usePatients from "../../hooks/usePatients";
import PatientCard from "../../components/patients/PatientCard";

const PatientList = () => {
  const { patients, loading } = usePatients();

  if (loading) return <p className="text-center">Cargando pacientes...</p>;

  return (
    <div className="grid gap-4">
      {patients.map(p => (
        <PatientCard key={p.id} patient={p} />
      ))}
    </div>
  );
};

export default PatientList;
