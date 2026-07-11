const FloatingCard = ({
    title,
    value,
    className = "",
  }) => {
    return (
      <div
        className={`absolute rounded-2xl bg-white p-4 shadow-xl ${className}`}
      >
        <p className="text-sm text-gray-500">
          {title}
        </p>
  
        <h3 className="mt-1 text-xl font-bold text-gray-900">
          {value}
        </h3>
      </div>
    );
  };
  
  export default FloatingCard;