import { ArrowUpRight } from "lucide-react";

const DepartmentCard = ({ department }) => {
  const Icon = department.icon;

  return (
    <div
      className="
        group
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-8
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-2xl
      "
    >
      <div
        className="
          mb-6
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-cyan-100
          text-cyan-600
          transition-all
          duration-300
          group-hover:bg-cyan-600
          group-hover:text-white
        "
      >
        <Icon size={32} />
      </div>

      <h3 className="mb-3 text-2xl font-bold text-slate-900">
        {department.title}
      </h3>

      <p className="mb-6 text-slate-600 leading-relaxed">
        {department.description}
      </p>

      <button
        className="
          flex
          items-center
          gap-2
          font-semibold
          text-cyan-600
          transition-all
          group-hover:gap-3
        "
      >
        Learn More
        <ArrowUpRight size={18} />
      </button>
    </div>
  );
};

export default DepartmentCard;