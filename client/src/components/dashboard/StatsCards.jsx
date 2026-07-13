import {
    CalendarDays,
    FileText,
    HeartPulse,
    Bell,
  } from "lucide-react";
  
  const stats = [
    {
      title: "Appointments",
      value: 0,
      icon: CalendarDays,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Medical Records",
      value: 0,
      icon: FileText,
      color: "bg-emerald-100 text-emerald-600",
    },
    {
      title: "Emergency Requests",
      value: 0,
      icon: HeartPulse,
      color: "bg-red-100 text-red-600",
    },
    {
      title: "Notifications",
      value: 0,
      icon: Bell,
      color: "bg-amber-100 text-amber-600",
    },
  ];
  
  const StatsCards = () => {
    return (
      <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
  
          return (
            <div
              key={stat.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${stat.color}`}
              >
                <Icon size={28} />
              </div>
  
              <h2 className="text-3xl font-bold text-slate-900">
                {stat.value}
              </h2>
  
              <p className="mt-2 text-sm font-medium text-slate-500">
                {stat.title}
              </p>
            </div>
          );
        })}
      </section>
    );
  };
  
  export default StatsCards;