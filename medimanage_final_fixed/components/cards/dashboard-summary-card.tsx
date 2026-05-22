import { Card, CardContent } from "@/components/ui/card";

interface DashboardSummaryCardProps {
  label: string;
  value: string;
}

export function DashboardSummaryCard({
  label,
  value,
}: DashboardSummaryCardProps) {
  return (
    <Card className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-blue-50 shadow-sm transition-all hover:shadow-md">
      <CardContent className="p-6">
        <p className="text-sm text-slate-500">{label}</p>

        <h3 className="mt-2 text-3xl font-bold text-slate-900">{value}</h3>
      </CardContent>
    </Card>
  );
}