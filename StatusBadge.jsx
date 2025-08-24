const StatusBadge = ({ estado }) => {
  const estilos = {
    estable: "bg-green-200 text-green-800",
    crítico: "bg-red-200 text-red-800",
    observación: "bg-yellow-200 text-yellow-800",
  };

  return (
    <span className={`px-2 py-1 rounded text-xs font-bold ${estilos[estado] || "bg-gray-200 text-gray-800"}`}>
      {estado}
    </span>
  );
};

export default StatusBadge;
