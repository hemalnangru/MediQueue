import DashboardHeader from "../../components/dashboard/DashboardHeader";
import StatsCards from "../../components/dashboard/StatsCards";
import QuickActions from "../../components/dashboard/QuickActions";
import UpcomingAppointments from "../../components/dashboard/UpcomingAppointments";
import EmergencyStatus from "../../components/dashboard/EmergencyStatus";
import HealthSummary from "../../components/dashboard/HealthSummary";

const Dashboard = () => {
  // Temporary data until backend integration
  const appointments = [];

  const healthSummary = {
    bloodGroup: "Not Available",
    allergies: "None",
    height: "Not Available",
    weight: "Not Available",
    bmi: "Not Available",
    lastCheckup: "Not Available",
    primaryDoctor: "Not Assigned",
  };

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <DashboardHeader />

        <div className="mt-8">
          <StatsCards />
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            <UpcomingAppointments appointments={appointments} />

            <EmergencyStatus
              status="No Active Emergency"
              priority="Normal"
              lastAssessment={null}
            />
          </div>

          <div className="space-y-8">
            <QuickActions />

            <HealthSummary
              bloodGroup={healthSummary.bloodGroup}
              allergies={healthSummary.allergies}
              height={healthSummary.height}
              weight={healthSummary.weight}
              bmi={healthSummary.bmi}
              lastCheckup={healthSummary.lastCheckup}
              primaryDoctor={healthSummary.primaryDoctor}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;