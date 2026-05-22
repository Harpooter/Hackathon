"use client";

import {
  BellRing,
  TriangleAlert,
} from "lucide-react";

import { ReminderCard } from "@/components/cards/reminder-card";
import { useMedicines } from "@/hooks/use-medicines";

export default function AlertsPage() {
  const { alerts, loading } = useMedicines();

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Active Alerts
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Monitor inventory warnings and reminders.
          </p>
        </div>

        <div className="rounded-2xl border border-blue-100 bg-blue-50 p-4">
          <div className="flex items-center gap-3">
            <BellRing className="h-5 w-5 text-blue-600" />

            <div>
              <p className="text-sm font-semibold text-slate-900">
                {alerts.length} Active Alerts
              </p>

              <p className="text-xs text-slate-500">
                Real-time monitoring
              </p>
            </div>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="h-44 animate-pulse rounded-2xl border border-blue-100 bg-white"
            />
          ))}
        </div>
      ) : alerts.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-blue-200 bg-blue-50 p-12 text-center">
          <TriangleAlert className="mx-auto h-12 w-12 text-blue-600" />

          <h2 className="mt-4 text-xl font-semibold text-slate-900">
            No active alerts
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Notifications will appear here.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {alerts.map((alert) => (
            <ReminderCard
              key={alert.id}
              alert={alert}
            />
          ))}
        </div>
      )}
    </div>
  );
}