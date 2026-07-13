import {
    Droplets,
    HeartPulse,
    Ruler,
    Weight,
    UserRound,
    CalendarClock,
  } from "lucide-react";
  
  const Item = ({ icon: Icon, label, value }) => (
    <div className="flex items-start gap-4 rounded-2xl border border-slate-200 p-4">
      <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
        <Icon size={22} />
      </div>
  
      <div>
        <p className="text-sm text-slate-500">{label}</p>
        <p className="mt-1 font-semibold text-slate-900">
          {value || "Not Available"}
        </p>
      </div>
    </div>
  );
  
  const HealthSummary = ({
    bloodGroup,
    allergies,
    height,
    weight,
    bmi,
    lastCheckup,
    primaryDoctor,
  }) => {
    return (
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-900">
            Health Summary
          </h2>
  
          <p className="mt-2 text-sm text-slate-500">
            Quick overview of your health profile.
          </p>
        </div>
  
        <div className="grid gap-5 md:grid-cols-2">
          <Item
            icon={Droplets}
            label="Blood Group"
            value={bloodGroup}
          />
  
          <Item
            icon={HeartPulse}
            label="Allergies"
            value={allergies}
          />
  
          <Item
            icon={Ruler}
            label="Height"
            value={height}
          />
  
          <Item
            icon={Weight}
            label="Weight"
            value={weight}
          />
  
          <Item
            icon={HeartPulse}
            label="BMI"
            value={bmi}
          />
  
          <Item
            icon={CalendarClock}
            label="Last Checkup"
            value={lastCheckup}
          />
  
          <Item
            icon={UserRound}
            label="Primary Doctor"
            value={primaryDoctor}
          />
        </div>
      </section>
    );
  };
  
  export default HealthSummary;