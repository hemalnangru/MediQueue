import DepartmentCard from "./DepartmentCard";
import { departments } from "../../constants/departments";

console.log(departments);

const DepartmentsSection = () => {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
            Our Departments
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Specialized Healthcare Services
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Our hospital offers comprehensive medical services across multiple
            specialties, ensuring world-class treatment with experienced doctors
            and advanced medical technology.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {departments.map((department) => (
            <DepartmentCard
              key={department.id}
              department={department}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DepartmentsSection;