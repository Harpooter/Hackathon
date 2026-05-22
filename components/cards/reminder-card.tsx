import {
  AlertTriangle,
  BellRing,
} from "lucide-react";

import { Alert } from "@/types/alert";

interface ReminderCardProps {
  alert: Alert;
}

const severityStyles = {
  low: "bg-blue-50 text-blue-700 border-blue-100",
  medium:
    "bg-yellow-50 text-yellow-700 border-yellow-100",
  high: "bg-red-50 text-red-700 border-red-100",
};

export function ReminderCard({
  alert,
}: ReminderCardProps) {
  return (
    <div
      className={rounded-2xl border p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md ${severityStyles[alert.severity]}}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-white/80 p-3">
            {alert.severity === "high" ? (
              <AlertTriangle className="h-5 w-5" />
            ) : (
              <BellRing className="h-5 w-5" />
            )}
          </div>

          <div>
            <h3 className="font-semibold">
              {alert.title}
            </h3>

            <p className="mt-1 text-sm opacity-80">
              {alert.description}
            </p>
          </div>
        </div>

        <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide">
          {alert.severity}
        </span>
      </div>

      {alert.createdAt && (
        <p className="mt-4 text-xs opacity-70">
          Created {alert.createdAt}
        </p>
      )}
    </div>
  );
}