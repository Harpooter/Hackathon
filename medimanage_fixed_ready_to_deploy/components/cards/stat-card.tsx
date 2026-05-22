import { LucideIcon, TrendingDown, TrendingUp } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  description: string;
  icon: LucideIcon;
  className?: string;
}

export function StatCard({
  title,
  value,
  change,
  trend,
  description,
  icon: Icon,
  className,
}: StatCardProps) {
  return (
    <Card
      className={cn(
        "rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
        className
      )}
    >
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium text-slate-500">{title}</p>

            <h3 className="text-3xl font-bold tracking-tight text-slate-900">
              {value}
            </h3>

            <div className="flex items-center gap-2">
              <span
                className={cn(
                  "flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium",
                  trend === "up"
                    ? "bg-emerald-50 text-emerald-600"
                    : "bg-red-50 text-red-500"
                )}
              >
                {trend === "up" ? (
                  <TrendingUp className="h-3 w-3" />
                ) : (
                  <TrendingDown className="h-3 w-3" />
                )}

                {change}
              </span>

              <span className="text-xs text-slate-400">{description}</span>
            </div>
          </div>

          <div className="rounded-2xl bg-blue-50 p-3">
            <Icon className="h-6 w-6 text-[#2563eb]" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}