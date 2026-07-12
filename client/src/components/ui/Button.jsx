const Button = ({
  children,
  type = "button",
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  className = "",
  ...props
}) => {
  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-200",

    secondary:
      "bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-4 focus:ring-blue-100",

    outline:
      "border border-slate-300 bg-white text-slate-700 hover:bg-slate-100",

    ghost:
      "bg-transparent text-slate-700 hover:bg-slate-100",

    emergency:
      "bg-red-600 text-white hover:bg-red-700",

    success:
      "bg-emerald-600 text-white hover:bg-emerald-700",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={`
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-xl
        font-semibold
        transition-all
        duration-300
        shadow-md
        hover:shadow-lg
        disabled:cursor-not-allowed
        disabled:opacity-60
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {loading ? (
        <>
          <svg
            className="h-5 w-5 animate-spin"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              className="opacity-25"
            />
            <path
              fill="currentColor"
              className="opacity-75"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            />
          </svg>

          <span>Please wait...</span>
        </>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;