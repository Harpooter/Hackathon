import {
  Activity,
  AlertTriangle,
  CheckCircle2,
  Pill,
  UserPlus,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

interface ActivityCardProps {
  title: string;
  description: string;
  time: string;
  type: "patient" | "alert" | "medicine" | "success";
}

const icons = {
  patient: UserPlus,
  alert: AlertTriangle,
  medicine: Pill,
  success: CheckCircle2,
};

export function ActivityCard({
  title,
  description,
  time,
  type,
}: ActivityCardProps) {
  const Icon = icons[type] || Activity;

  return (
    <Card className="rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md">
      <CardContent className="flex items-start gap-4 p-5">
        <div className="rounded-xl bg-blue-50 p-3">
          <Icon className="h-5 w-5 text-[#2563eb]" />
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-between gap-3">
            <h4 className="font-semibold text-slate-900">{title}</h4>

            <span className="text-xs text-slate-400">{time}</span>
          </div>

          <p className="mt-1 text-sm text-slate-500">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}