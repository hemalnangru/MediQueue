const Badge = ({
    children,
    color = "blue",
  }) => {
    const colors = {
      blue: "bg-blue-100 text-blue-700",
      red: "bg-red-100 text-red-700",
      green: "bg-green-100 text-green-700",
      yellow: "bg-yellow-100 text-yellow-700",
    };
  
    return (
      <span
        className={`
          inline-block
          rounded-full
          px-4
          py-1
          text-sm
          font-semibold
          ${colors[color]}
        `}
      >
        {children}
      </span>
    );
  };
  
  export default Badge;