import { Star, CalendarDays } from "lucide-react";
import DoctorBadge from "./DoctorBadge";

const DoctorCard = ({ doctor }) => {
  return (
    <div
      className="
        group
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-cyan-500
        hover:shadow-2xl
      "
    >
      <div className="overflow-hidden">
      <img
      src={doctor.image || "https://placehold.co/600x700/e2e8f0/475569?text=Doctor"}
      alt={doctor.name}
      className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      </div>

      <div className="flex flex-col p-6">
        <DoctorBadge available={doctor.available} />

        <h3 className="mt-4 text-2xl font-bold text-slate-900">
          {doctor.name}
        </h3>

        <p className="mt-1 font-semibold text-cyan-600">
          {doctor.specialization}
        </p>

        <p className="mt-2 text-sm text-slate-500">
          {doctor.qualification}
        </p>

        <div className="mt-5 flex items-center justify-between text-sm">
          <div className="flex items-center gap-1">
            <Star
              size={18}
              className="fill-yellow-400 text-yellow-400"
            />
            <span className="font-semibold">{doctor.rating}</span>
          </div>

          <span className="text-slate-600">
            {doctor.experience}
          </span>
        </div>

        <button
          className="
            mt-6
            flex
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-cyan-600
            px-5
            py-3
            font-semibold
            text-white
            transition-all
            duration-300
            hover:bg-cyan-700
          "
        >
          <CalendarDays size={18} />
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default DoctorCard;