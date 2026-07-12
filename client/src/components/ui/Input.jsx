import { forwardRef } from "react";

const Input = forwardRef(
  (
    {
      id,
      type = "text",
      placeholder = "",
      error = "",
      className = "",
      disabled = false,
      ...props
    },
    ref
  ) => {
    return (
      <div className="w-full">
        <input
          ref={ref}
          id={id}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          className={`
            w-full
            rounded-xl
            border
            bg-white
            px-4
            py-3
            text-slate-900
            placeholder:text-slate-400
            transition-all
            duration-300
            outline-none

            ${
              error
                ? "border-red-500 focus:border-red-500 focus:ring-4 focus:ring-red-100"
                : "border-slate-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
            }

            disabled:cursor-not-allowed
            disabled:bg-slate-100
            disabled:text-slate-500

            ${className}
          `}
          {...props}
        />

        {error && (
          <p className="mt-2 text-sm font-medium text-red-500">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;