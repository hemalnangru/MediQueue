import Hero from "../../components/home/Hero";
import Features from "../../components/home/Features";
import DepartmentsSection from "../../components/departments/DepartmentsSection";
import DoctorsSection from "../../components/doctors/DoctorsSection";

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <DepartmentsSection />
      <DoctorsSection />
    </>
  );
};

export default Home;