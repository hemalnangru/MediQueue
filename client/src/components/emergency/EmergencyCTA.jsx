import { PhoneCall, Ambulance, ArrowRight } from "lucide-react";

const EmergencyCTA = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-red-700 via-red-600 to-red-500 py-24">
      {/* Background Glow */}
      <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-red-400/20 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-14 px-6 lg:flex-row">
        {/* Left */}
        <div className="max-w-2xl text-center lg:text-left">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
            <Ambulance size={20} />
            <span className="text-sm font-semibold tracking-wide uppercase">
              24/7 Emergency Service
            </span>
          </div>

          <h2 className="mb-6 text-4xl font-extrabold leading-tight text-white md:text-5xl">
            Immediate Medical Assistance When Every Second Counts
          </h2>

          <p className="mb-10 text-lg leading-relaxed text-red-100">
            Our emergency specialists and ambulance team are available around
            the clock to provide rapid medical care for critical situations.
          </p>

          <div className="flex flex-col gap-5 sm:flex-row">
            <a
              href="tel:+911234567890"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 font-semibold text-red-700 transition hover:scale-105 hover:shadow-2xl"
            >
              <PhoneCall size={20} />
              Call +91 12345 67890
            </a>

            <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-white px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-red-700">
              Book Emergency Appointment
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="flex justify-center">
          <div className="flex h-72 w-72 animate-pulse items-center justify-center rounded-full bg-white/10 backdrop-blur-lg">
            <div className="flex h-56 w-56 items-center justify-center rounded-full bg-white/20">
              <Ambulance
                size={130}
                strokeWidth={1.5}
                className="text-white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyCTA;