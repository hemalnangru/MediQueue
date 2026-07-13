import { Mail, Phone, User, ShieldCheck } from "lucide-react";
import { useAuth } from "../../context/useAuth";

const Profile = () => {
  const { user } = useAuth();

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <div className="overflow-hidden rounded-3xl bg-white shadow-lg">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-10 text-white">
            <div className="flex items-center gap-6">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white text-3xl font-bold text-blue-600">
                {user?.fullName
                  ?.split(" ")
                  .map((name) => name[0])
                  .join("")
                  .toUpperCase()}
              </div>

              <div>
                <h1 className="text-3xl font-bold">{user?.fullName}</h1>

                <p className="mt-2 capitalize text-blue-100">
                  {user?.role}
                </p>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="grid gap-6 p-8 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-6">
              <div className="mb-4 flex items-center gap-3">
                <User className="text-blue-600" />
                <h2 className="text-lg font-semibold">Personal Information</h2>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-slate-500">Full Name</p>
                  <p className="font-medium">{user?.fullName}</p>
                </div>

                <div>
                  <p className="text-sm text-slate-500">Role</p>
                  <p className="capitalize font-medium">{user?.role}</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <div className="mb-4 flex items-center gap-3">
                <Mail className="text-blue-600" />
                <h2 className="text-lg font-semibold">Contact</h2>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <p className="font-medium">{user?.email}</p>
                </div>

                <div>
                  <p className="text-sm text-slate-500">Phone</p>
                  <p className="font-medium">
                    {user?.phone || "Not Provided"}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6 md:col-span-2">
              <div className="mb-4 flex items-center gap-3">
                <ShieldCheck className="text-green-600" />
                <h2 className="text-lg font-semibold">Account Status</h2>
              </div>

              <div className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
                Verified Account
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;