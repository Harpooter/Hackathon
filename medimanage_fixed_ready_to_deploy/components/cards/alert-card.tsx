import { AlertTriangle } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface AlertCardProps {
  title: string;
  description: string;
  severity: "high" | "medium" | "low";
  className?: string;
}

export function AlertCard({
  title,
  description,
  severity,
  className,
}: AlertCardProps) {
  return (
    <Card
      className={cn(
        "rounded-2xl border border-slate-200 shadow-sm transition-all hover:shadow-md",
        className
      )}
    >
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div
            className={cn(
              "rounded-xl p-3",
              severity === "high"
                ? "bg-red-50"
                : severity === "medium"
                ? "bg-amber-50"
                : "bg-blue-50"
            )}
          >
            <AlertTriangle
              className={cn(
                "h-5 w-5",
                severity === "high"
                  ? "text-red-500"
                  : severity === "medium"
                  ? "text-amber-500"
                  : "text-blue-500"
              )}
            />
          </div>

          <div className="space-y-1">
            <h3 className="font-semibold text-slate-900">{title}</h3>

            <p className="text-sm text-slate-500">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}