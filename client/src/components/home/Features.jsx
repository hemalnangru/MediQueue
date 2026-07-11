import {
    CalendarCheck,
    ShieldCheck,
    HeartPulse,
    FileText,
    Users,
    Siren,
  } from "lucide-react";
  
  import Container from "../ui/Container";
  import SectionTitle from "../ui/SectionTitle";
  import FeatureCard from "./FeatureCard";
  
  const features = [
    {
      icon: CalendarCheck,
      title: "Online Appointment",
      description:
        "Book appointments with specialists in seconds through an easy online system.",
    },
    {
      icon: Siren,
      title: "AI Emergency Triage",
      description:
        "Prioritize emergency patients intelligently to reduce waiting time.",
    },
    {
      icon: HeartPulse,
      title: "Smart Queue",
      description:
        "Live queue management improves patient flow and hospital efficiency.",
    },
    {
      icon: Users,
      title: "Expert Doctors",
      description:
        "Consult experienced doctors across multiple medical specialties.",
    },
    {
      icon: FileText,
      title: "Digital Records",
      description:
        "Securely manage patient history, reports and prescriptions.",
    },
    {
      icon: ShieldCheck,
      title: "Secure Platform",
      description:
        "Built with modern security practices to protect patient information.",
    },
  ];
  
  const Features = () => {
    return (
      <section className="py-24">
        <Container>
  
          <SectionTitle
            badge="Why Choose Us"
            title="Why Choose MediQueue"
            subtitle="A modern hospital management platform designed to simplify healthcare operations and improve patient experiences."
          />
  
          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
  
            {features.map((feature) => (
              <FeatureCard
                key={feature.title}
                {...feature}
              />
            ))}
  
          </div>
  
        </Container>
      </section>
    );
  };
  
  export default Features;