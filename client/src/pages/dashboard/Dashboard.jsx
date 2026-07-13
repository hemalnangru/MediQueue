import { Activity, Calendar, Clock, FileText, HeartPulse, Stethoscope } from "lucide-react";

import { useAuth } from "../../context/useAuth";

const statCards = [
  {
    title: "Upcoming Appointments",
    value: "0",
    icon: Calendar,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Medical Records",
    value: "0",
    icon: FileText,
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    title: "Emergency Requests",
    value: "0",
    icon: HeartPulse,
    color: "bg-red-100 text-red-600",
  },
  {
    title: "Recent Visits",
    value: "0",
    icon: Activity,
    color: "bg-purple-100 text-purple-600",
  },
];

const quickActions = [
  {
    title: "Book Appointment",
    icon: Calendar,
  },
  {
    title: "Emergency Triage",
    icon: HeartPulse,
  },
  {
    title: "Find Doctors",
    icon: Stethoscope,
  },
];

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* Header */}
        <div className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 p-8 text-white shadow-xl">
          <p className="text-sm uppercase tracking-widest opacity-90">
            Welcome Back
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            {user?.fullName}
          </h1>

          <p className="mt-3 max-w-xl text-blue-100">
            Manage appointments, medical records, emergency requests and
            monitor your healthcare journey from one place.
          </p>
        </div>

        {/* Stats */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {statCards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div
                  className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${card.color}`}
                >
                  <Icon size={28} />
                </div>

                <h3 className="text-3xl font-bold text-slate-900">
                  {card.value}
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  {card.title}
                </p>
              </div>
            );
          })}
        </div>

        {/* Two Column Layout */}
        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {/* Quick Actions */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-xl font-semibold text-slate-900">
              Quick Actions
            </h2>

            <div className="space-y-4">
              {quickActions.map((action) => {
                const Icon = action.icon;

                return (
                  <button
                    key={action.title}
                    className="flex w-full items-center gap-4 rounded-2xl border border-slate-200 p-4 text-left transition hover:border-blue-500 hover:bg-blue-50"
                  >
                    <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
                      <Icon size={22} />
                    </div>

                    <span className="font-medium text-slate-700">
                      {action.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Activity */}
          <div className="lg:col-span-2 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-slate-900">
                Recent Activity
              </h2>

              <Clock className="text-slate-400" />
            </div>

            <div className="flex h-72 items-center justify-center rounded-2xl border-2 border-dashed border-slate-200">
              <div className="text-center">
                <Activity
                  size={44}
                  className="mx-auto mb-4 text-slate-300"
                />

                <h3 className="text-lg font-semibold text-slate-700">
                  No Recent Activity
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Your appointments, emergency requests and medical updates
                  will appear here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;