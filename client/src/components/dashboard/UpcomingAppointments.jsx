import { CalendarDays, Clock, UserRound } from "lucide-react";

const UpcomingAppointments = ({ appointments = [] }) => {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Upcoming Appointments
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Your scheduled consultations.
          </p>
        </div>

        <CalendarDays className="text-blue-600" size={26} />
      </div>

      {appointments.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 py-16">
          <CalendarDays
            size={48}
            className="mb-4 text-slate-300"
          />

          <h3 className="text-lg font-semibold text-slate-700">
            No Upcoming Appointments
          </h3>

          <p className="mt-2 max-w-sm text-center text-sm text-slate-500">
            Your future appointments will appear here after booking.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {appointments.map((appointment) => (
            <div
              key={appointment._id}
              className="flex flex-col gap-4 rounded-2xl border border-slate-200 p-5 transition hover:border-blue-500 hover:shadow-md md:flex-row md:items-center md:justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Dr. {appointment.doctorName}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {appointment.department}
                </p>
              </div>

              <div className="flex flex-wrap gap-5 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <CalendarDays size={18} />
                  {appointment.date}
                </div>

                <div className="flex items-center gap-2">
                  <Clock size={18} />
                  {appointment.time}
                </div>

                <div className="flex items-center gap-2">
                  <UserRound size={18} />
                  {appointment.status}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default UpcomingAppointments;