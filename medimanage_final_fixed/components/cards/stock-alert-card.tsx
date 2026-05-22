import { AlertCircle } from "lucide-react";

import { Medicine } from "@/types/medicine";

interface StockAlertCardProps {
  title: string;
  medicines: Medicine[];
  type: "low" | "expiry";
}

export function StockAlertCard({
  title,
  medicines,
  type,
}: StockAlertCardProps) {
  return (
    <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-blue-50 p-3">
          <AlertCircle className="h-5 w-5 text-blue-600" />
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            {title}
          </h2>

          <p className="text-sm text-slate-500">
            {medicines.length} active notifications
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        {medicines.length === 0 ? (
          <div className="rounded-xl bg-blue-50 p-4 text-sm text-slate-500">
            No active alerts.
          </div>
        ) : (
          medicines.map((medicine) => (
            <div
              key={medicine.id}
              className="flex items-center justify-between rounded-xl border border-blue-100 p-4"
            >
              <div>
                <p className="font-medium text-slate-900">
                  {medicine.name}
                </p>

                <p className="text-sm text-slate-500">
                  {type === "low"
                    ? ${medicine.stock} units remaining
                    : Expires on ${medicine.expiryDate}}
                </p>
              </div>

              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  type === "low"
                    ? "bg-red-100 text-red-600"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {type === "low"
                  ? "Low"
                  : "Expiry"}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}