import { useEffect, useState } from "react";
import { getAllPatients } from "../services/patientService";

const usePatients = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const data = await getAllPatients();
      setPatients(data);
      setLoading(false);
    };
    fetch();
  }, []);

  return { patients, loading };
};

export default usePatients;
