import { Stethoscope, Users, Ambulance } from "lucide-react";

const stats = [
  {
    number: "150+",
    label: "Expert Doctors",
    icon: Stethoscope,
  },
  {
    number: "50K+",
    label: "Happy Patients",
    icon: Users,
  },
  {
    number: "24/7",
    label: "Emergency Care",
    icon: Ambulance,
  },
];

const HeroStats = () => {
  return (
    <div className="mt-12 grid gap-5 sm:grid-cols-3">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.label}
            className="group rounded-2xl border border-blue-100 bg-white/80 p-5 shadow-md backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
              <Icon size={24} />
            </div>

            <h3 className="text-3xl font-bold text-slate-900">
              {item.number}
            </h3>

            <p className="mt-2 text-sm font-medium text-gray-600">
              {item.label}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default HeroStats;