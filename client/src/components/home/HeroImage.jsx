import heroImage from "../../assets/images/hero.png";

const HeroImage = () => {
  return (
    <div className="relative flex items-center justify-center">
      <img
        src={heroImage}
        alt="MediQueue Healthcare"
        className="w-full max-w-3xl object-contain transition-transform duration-500 hover:scale-105"
      />
    </div>
  );
};

export default HeroImage;