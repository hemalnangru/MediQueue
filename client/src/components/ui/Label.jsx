const Label = ({
    htmlFor,
    children,
    required = false,
    className = "",
  }) => {
    return (
      <label
        htmlFor={htmlFor}
        className={`mb-2 block text-sm font-semibold text-slate-700 ${className}`}
      >
        {children}
  
        {required && (
          <span className="ml-1 text-red-500">*</span>
        )}
      </label>
    );
  };
  
  export default Label;