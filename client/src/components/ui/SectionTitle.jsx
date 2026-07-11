const SectionTitle = ({
    title,
    subtitle,
    center = true,
  }) => {
    return (
      <div
        className={`mb-14 ${
          center ? "text-center" : "text-left"
        }`}
      >
        <h2 className="text-4xl font-bold text-slate-900">
          {title}
        </h2>
  
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            {subtitle}
          </p>
        )}
      </div>
    );
  };
  
  export default SectionTitle;