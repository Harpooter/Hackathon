import { Inbox } from "lucide-react";

interface EmptyStateProps {
  title?: string;
  description?: string;
}

export function EmptyState({
  title = "No data available",
  description = "There is currently no information to display.",
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center">
      <div className="rounded-full bg-blue-50 p-4">
        <Inbox className="h-8 w-8 text-[#2563eb]" />
      </div>

      <h3 className="mt-4 text-lg font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 max-w-md text-sm text-slate-500">
        {description}
      </p>
    </div>
  );
}