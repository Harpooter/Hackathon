import {
  ActivityCard,
} from "@/components/cards/activity-card";
import { AlertCard } from "@/components/cards/alert-card";
import { DashboardSummaryCard } from "@/components/cards/dashboard-summary-card";
import { StatCard } from "@/components/cards/stat-card";

import { DashboardChart } from "@/components/charts/dashboard-chart";
import { MedicineChart } from "@/components/charts/medicine-chart";
import { PatientChart } from "@/components/charts/patient-chart";

import {
  alerts,
  dashboardSummary,
  medicineUsageData,
  patientTrendData,
  recentActivities,
  stats,
} from "@/lib/constants/demo-data";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="space-y-8 p-4 md:p-6">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900">
              Dashboard Overview
            </h1>

            <p className="mt-2 text-slate-500">
              Monitor hospital operations, analytics, and system activity.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.title} {...stat} />
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {dashboardSummary.map((item) => (
            <DashboardSummaryCard
              key={item.label}
              label={item.label}
              value={item.value}
            />
          ))}
        </div>

        <div className="grid gap-6 xl:grid-cols-3">
          <Card className="col-span-2 rounded-2xl border border-slate-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                Patient Admission Trends
              </CardTitle>
            </CardHeader>

            <CardContent>
              <DashboardChart data={patientTrendData} />
            </CardContent>
          </Card>

          <Card className="rounded-2xl border border-slate-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                Medicine Usage
              </CardTitle>
            </CardHeader>

            <CardContent>
              <MedicineChart data={medicineUsageData} />
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="rounded-2xl border border-slate-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                Patient Analytics
              </CardTitle>
            </CardHeader>

            <CardContent>
              <PatientChart data={patientTrendData} />
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="rounded-2xl border border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  Active Alerts
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                {alerts.map((alert) => (
                  <AlertCard
                    key={alert.title}
                    title={alert.title}
                    description={alert.description}
                    severity={
                      alert.severity as "high" | "medium" | "low"
                    }
                  />
                ))}
              </CardContent>
            </Card>

            <Card className="rounded-2xl border border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  Recent Activity
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                {recentActivities.map((activity) => (
                  <ActivityCard
                    key={activity.id}
                    title={activity.title}
                    description={activity.description}
                    time={activity.time}
                    type={
                      activity.type as
                        | "patient"
                        | "alert"
                        | "medicine"
                        | "success"
                    }
                  />
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}