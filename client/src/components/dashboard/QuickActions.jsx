import { Link } from "react-router-dom";
import {
  CalendarPlus,
  HeartPulse,
  Stethoscope,
  FileText,
  ArrowRight,
} from "lucide-react";

const actions = [
  {
    title: "Book Appointment",
    description: "Schedule a consultation with a doctor.",
    icon: CalendarPlus,
    to: "/appointment",
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "AI Emergency Triage",
    description: "Start an emergency health assessment.",
    icon: HeartPulse,
    to: "/emergency",
    color: "bg-red-50 text-red-600",
  },
  {
    title: "Find Doctors",
    description: "Browse specialists and departments.",
    icon: Stethoscope,
    to: "/doctors",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    title: "Medical Records",
    description: "View your health records and reports.",
    icon: FileText,
    to: "/profile",
    color: "bg-purple-50 text-purple-600",
  },
];

const QuickActions = () => {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900">
          Quick Actions
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Frequently used MediQueue features.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.title}
              to={action.to}
              className="group rounded-2xl border border-slate-200 p-5 transition-all duration-300 hover:border-blue-500 hover:shadow-lg"
            >
              <div className="flex items-start justify-between">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${action.color}`}
                >
                  <Icon size={28} />
                </div>

                <ArrowRight
                  size={18}
                  className="text-slate-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-blue-600"
                />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                {action.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                {action.description}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default QuickActions;