import Container from "../ui/Container";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import HeroImage from "./HeroImage";
import HeroStats from "./HeroStats";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 lg:py-28">

      {/* Background Decoration */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />

      <div className="absolute right-0 top-0 h-[450px] w-[450px] rounded-full bg-cyan-200/20 blur-3xl" />

      <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-blue-100/20 blur-3xl" />

      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">

          {/* Left Content */}

          <div className="relative z-10">

            <Badge>
              🚑 AI Powered Emergency Triage
            </Badge>

            <h1 className="mt-6 text-5xl font-extrabold leading-tight text-slate-900 lg:text-7xl">
              AI-Powered Hospital

              <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Management &
              </span>

              Emergency Triage
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Empowering hospitals with intelligent appointment scheduling,
              emergency prioritization, patient management, digital health
              records, and seamless healthcare operations — all from one secure
              platform.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <Button size="lg">
                Book an Appointment
              </Button>

              <Button variant="outline" size="lg">
                Emergency Triage
              </Button>

            </div>

            <HeroStats />

          </div>

          {/* Right Illustration */}

          <div className="relative flex justify-center lg:justify-end">
            <HeroImage />
          </div>

        </div>
      </Container>

    </section>
  );
};

export default Hero;