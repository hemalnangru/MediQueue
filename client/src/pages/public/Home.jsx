import Hero from "../../components/home/Hero";
import Features from "../../components/home/Features";
import DepartmentsSection from "../../components/departments/DepartmentsSection";
import DoctorsSection from "../../components/doctors/DoctorsSection";
import TestimonialsSection from "../../components/testimonials/TestimonialsSection";
import EmergencyCTA from "../../components/emergency/EmergencyCTA";

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <DepartmentsSection />
      <DoctorsSection />
      <TestimonialsSection />
      <EmergencyCTA />
    </>
  );
};

export default Home;