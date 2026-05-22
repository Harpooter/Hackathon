"use client";

import { Pill, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Medicine } from "@/types/medicine";

interface MedicineCardProps {
  medicine: Medicine;
  onDelete: (id: string) => Promise<void>;
  onStockUpdate: (
    id: string,
    stock: number,
  ) => Promise<void>;
  className?: string;
}

export function MedicineCard({
  medicine,
  onDelete,
  onStockUpdate,
  className,
}: MedicineCardProps) {
  const lowStock = medicine.stock < 10;

  return (
    <div
      className={cn(
        "rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-blue-50 p-3">
            <Pill className="h-5 w-5 text-blue-600" />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              {medicine.name}
            </h3>

            <p className="text-sm text-slate-500">
              {medicine.dosage}
            </p>
          </div>
        </div>

        {lowStock && (
          <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-600">
            Low Stock
          </span>
        )}
      </div>

      <div className="mt-6 space-y-4">
        <div>
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="text-slate-500">
              Inventory
            </span>

            <span className="font-semibold text-slate-900">
              {medicine.stock} units
            </span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-blue-100">
            <div
              className={cn(
                "h-full rounded-full",
                lowStock ? "bg-red-500" : "bg-blue-600",
              )}
              style={{
                width: ${Math.min(medicine.stock, 100)}%,
              }}
            />
          </div>
        </div>

        <div className="grid gap-3 text-sm text-slate-600">
          <div className="flex items-center justify-between">
            <span>Expiry Date</span>

            <span className="font-medium text-slate-900">
              {medicine.expiryDate}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span>Assigned Patients</span>

            <span className="font-medium text-slate-900">
              {medicine.assignedPatients.length}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-3">
        <Button
          type="button"
          variant="outline"
          className="flex-1 rounded-xl border-blue-200"
          onClick={() =>
            onStockUpdate(
              medicine.id,
              medicine.stock + 5,
            )
          }
        >
          Add Stock
        </Button>

        <Button
          type="button"
          variant="destructive"
          size="icon"
          className="rounded-xl"
          onClick={() => onDelete(medicine.id)}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}