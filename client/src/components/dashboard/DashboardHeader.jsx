import { CalendarDays, Clock } from "lucide-react";
import { useAuth } from "../../context/useAuth";

const DashboardHeader = () => {
  const { user } = useAuth();

  const now = new Date();

  const currentDate = now.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const currentTime = now.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const initials =
    user?.fullName
      ?.split(" ")
      .map((name) => name[0])
      .join("")
      .toUpperCase() || "U";

  return (
    <section className="mb-8 overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 p-8 text-white shadow-xl">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        {/* Left */}
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-blue-100">
            Patient Dashboard
          </p>

          <h1 className="mt-3 text-4xl font-bold">
            Welcome back, {user?.fullName}
          </h1>

          <p className="mt-4 max-w-2xl text-blue-100">
            Manage appointments, monitor your medical records, check AI
            emergency assessments, and stay connected with your healthcare
            journey through MediQueue.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <div className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 backdrop-blur">
              <CalendarDays size={18} />
              <span>{currentDate}</span>
            </div>

            <div className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 backdrop-blur">
              <Clock size={18} />
              <span>{currentTime}</span>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4 rounded-3xl bg-white/10 p-5 backdrop-blur-md">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-2xl font-bold text-blue-600 shadow-lg">
            {initials}
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              {user?.fullName}
            </h2>

            <span className="mt-2 inline-flex rounded-full bg-green-500/20 px-3 py-1 text-sm font-medium text-green-100">
              {user?.role}
            </span>

            <p className="mt-3 text-sm text-blue-100">
              Logged in successfully
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardHeader;