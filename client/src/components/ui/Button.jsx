const Button = ({
    children,
    type = "button",
    variant = "primary",
    className = "",
    ...props
  }) => {
    const variants = {
      primary:
        "bg-blue-600 text-white hover:bg-blue-700",
  
      secondary:
        "bg-white border border-blue-600 text-blue-600 hover:bg-blue-50",
  
      emergency:
        "bg-red-600 text-white hover:bg-red-700",
  
      success:
        "bg-emerald-600 text-white hover:bg-emerald-700",
    };
  
    return (
      <button
        type={type}
        className={`
          rounded-xl
          px-6
          py-3
          font-semibold
          transition-all
          duration-300
          shadow-md
          hover:shadow-lg
          ${variants[variant]}
          ${className}
        `}
        {...props}
      >
        {children}
      </button>
    );
  };
  
  export default Button;