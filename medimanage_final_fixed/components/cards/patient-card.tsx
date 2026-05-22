"use client";

import Link from "next/link";
import { useState } from "react";
import {
  CalendarDays,
  ShieldAlert,
  Stethoscope,
  Trash2,
} from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { deletePatient } from "@/lib/firestore";
import { cn } from "@/lib/utils";
import { Patient } from "@/types/patient";

interface PatientCardProps {
  patient: Patient;
  onDelete?: (id: string) => void;
}

const statusStyles: Record<Patient["status"], string> = {
  stable:
    "border border-emerald-200 bg-emerald-100 text-emerald-700",
  critical:
    "border border-red-200 bg-red-100 text-red-700",
  recovering:
    "border border-amber-200 bg-amber-100 text-amber-700",
};

export function PatientCard({
  patient,
  onDelete,
}: PatientCardProps) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    try {
      setIsDeleting(true);

      await deletePatient(patient.id);

      onDelete?.(patient.id);

      toast.success("Patient deleted successfully.");
    } catch (error) {
      toast.error("Failed to delete patient.");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <Card className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="h-1 w-full bg-[#2563eb]" />

      <CardContent className="space-y-6 p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0 flex-1">
            <h2 className="truncate text-xl font-bold text-slate-900">
              {patient.name}
            </h2>

            <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">
              <CalendarDays className="h-4 w-4" />
              <span>{patient.age} years old</span>
            </div>
          </div>

          <div
            className={cn(
              "rounded-full px-3 py-1 text-xs font-semibold capitalize",
              statusStyles[patient.status]
            )}
          >
            {patient.status}
          </div>
        </div>

        <div className="rounded-2xl bg-[#eff6ff] p-4">
          <div className="mb-2 flex items-center gap-2 text-sm font-medium text-[#2563eb]">
            <ShieldAlert className="h-4 w-4" />
            Current Condition
          </div>

          <p className="text-sm leading-relaxed text-slate-700">
            {patient.condition}
          </p>
        </div>

        <div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4">
          <div className="rounded-xl bg-white p-2 shadow-sm">
            <Stethoscope className="h-5 w-5 text-[#2563eb]" />
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
              Assigned Doctor
            </p>

            <p className="text-sm font-semibold text-slate-800">
              {patient.assignedDoctor}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Link href={`/patients/${patient.id}`}>
            <Button className="w-full bg-[#2563eb] font-medium hover:bg-[#1d4ed8]">
              View Details
            </Button>
          </Link>

          <Button
            type="button"
            variant="outline"
            disabled={isDeleting}
            onClick={handleDelete}
            className="border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700"
          >
            <Trash2 className="mr-2 h-4 w-4" />

            {isDeleting ? "Deleting..." : "Delete"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}