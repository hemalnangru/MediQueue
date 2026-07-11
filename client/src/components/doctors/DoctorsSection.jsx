import DoctorCard from "./DoctorCard";
import { doctors } from "../../constants/doctors";

const DoctorsSection = () => {
  return (
    <section id="doctors" className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
            Our Specialists
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Meet Our Expert Doctors
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Our experienced specialists are committed to providing exceptional
            healthcare with compassion, expertise, and the latest medical
            technology.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;