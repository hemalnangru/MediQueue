const DoctorBadge = ({ available }) => {
    return (
      <span
        className={`rounded-full px-3 py-1 text-xs font-semibold ${
          available
            ? "bg-green-100 text-green-700"
            : "bg-red-100 text-red-700"
        }`}
      >
        {available ? "Available Today" : "Unavailable"}
      </span>
    );
  };
  
  export default DoctorBadge;