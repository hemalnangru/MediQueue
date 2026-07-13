import {
    Activity,
    AlertTriangle,
    CheckCircle2,
    Clock,
  } from "lucide-react";
  
  const EmergencyStatus = ({
    status = "No Active Emergency",
    priority = "Normal",
    lastAssessment = null,
  }) => {
    const priorityStyles = {
      Critical: "bg-red-100 text-red-700",
      High: "bg-orange-100 text-orange-700",
      Medium: "bg-yellow-100 text-yellow-700",
      Normal: "bg-green-100 text-green-700",
    };
  
    return (
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Emergency Status
            </h2>
  
            <p className="mt-1 text-sm text-slate-500">
              AI emergency triage overview.
            </p>
          </div>
  
          <Activity
            size={28}
            className="text-red-500"
          />
        </div>
  
        <div className="rounded-2xl border border-slate-200 p-5">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                {status}
              </h3>
  
              <p className="mt-2 text-sm text-slate-500">
                Current emergency assessment.
              </p>
            </div>
  
            <span
              className={`rounded-full px-4 py-2 text-sm font-semibold ${
                priorityStyles[priority] ||
                priorityStyles.Normal
              }`}
            >
              {priority}
            </span>
          </div>
  
          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3 text-slate-700">
              <CheckCircle2
                size={20}
                className="text-green-600"
              />
  
              <span>
                AI Triage Engine Available
              </span>
            </div>
  
            <div className="flex items-center gap-3 text-slate-700">
              <AlertTriangle
                size={20}
                className="text-orange-500"
              />
  
              <span>
                Emergency Queue Ready
              </span>
            </div>
  
            <div className="flex items-center gap-3 text-slate-700">
              <Clock
                size={20}
                className="text-blue-600"
              />
  
              <span>
                Last Assessment:{" "}
                {lastAssessment || "Not Available"}
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default EmergencyStatus;