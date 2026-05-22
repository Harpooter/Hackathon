"use client";

import Link from "next/link";

import { MedicineCard } from "@/components/cards/medicine-card";
import { StockAlertCard } from "@/components/cards/stock-alert-card";
import { useMedicines } from "@/hooks/use-medicines";

export default function MedicinesPage() {
  const {
    medicines,
    loading,
    removeMedicine,
    updateMedicineStock,
    lowStockMedicines,
    expiringMedicines,
  } = useMedicines();

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Medicine Inventory
          </h1>

          <p className="text-sm text-slate-500">
            Track stock levels and expiry alerts.
          </p>
        </div>

        <Link
          href="/medicines/new"
          className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          Add Medicine
        </Link>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <StockAlertCard
          title="Low Stock Alerts"
          medicines={lowStockMedicines}
          type="low"
        />

        <StockAlertCard
          title="Expiry Warnings"
          medicines={expiringMedicines}
          type="expiry"
        />
      </div>

      {loading ? (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="h-64 animate-pulse rounded-2xl border border-blue-100 bg-white"
            />
          ))}
        </div>
      ) : medicines.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-blue-200 bg-blue-50 p-12 text-center">
          <h2 className="text-xl font-semibold text-slate-900">
            No medicines found
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Add medicines to start tracking inventory.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {medicines.map((medicine) => (
            <MedicineCard
              key={medicine.id}
              medicine={medicine}
              onDelete={removeMedicine}
              onStockUpdate={updateMedicineStock}
            />
          ))}
        </div>
      )}
    </div>
  );
}