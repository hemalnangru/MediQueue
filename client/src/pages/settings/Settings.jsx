import { Bell, Lock, ShieldCheck, UserCog } from "lucide-react";

const settings = [
  {
    title: "Account",
    description: "Manage your personal account information.",
    icon: UserCog,
  },
  {
    title: "Security",
    description: "Update your password and security settings.",
    icon: Lock,
  },
  {
    title: "Notifications",
    description: "Configure email and appointment notifications.",
    icon: Bell,
  },
  {
    title: "Privacy",
    description: "Review your privacy and data preferences.",
    icon: ShieldCheck,
  },
];

const Settings = () => {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-slate-900">
            Settings
          </h1>

          <p className="mt-3 text-slate-600">
            Manage your MediQueue account preferences.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {settings.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                  <Icon size={28} />
                </div>

                <h2 className="text-xl font-semibold text-slate-900">
                  {item.title}
                </h2>

                <p className="mt-2 text-slate-500">
                  {item.description}
                </p>

                <button className="mt-6 rounded-xl bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700">
                  Open
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Settings;