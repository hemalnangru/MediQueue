const Card = ({ children, className = "" }) => {
    return (
      <div
        className={`
          rounded-3xl
          bg-white
          p-6
          shadow-lg
          transition-all
          duration-300
          hover:-translate-y-2
          hover:shadow-2xl
          ${className}
        `}
      >
        {children}
      </div>
    );
  };
  
  export default Card;