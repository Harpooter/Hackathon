"use client";

import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { addDoc, collection } from "firebase/firestore";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { db } from "@/lib/firestore";
import {
  medicineSchema,
  MedicineSchemaValues,
} from "@/lib/validators/medicine";

export function MedicineForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<MedicineSchemaValues>({
    resolver: zodResolver(medicineSchema),
  });

  const onSubmit = async (
    values: MedicineSchemaValues,
  ) => {
    try {
      await addDoc(collection(db, "medicines"), {
        name: values.name,
        dosage: values.dosage,
        stock: values.stock,
        expiryDate: values.expiryDate,
        category: values.category,
        manufacturer: values.manufacturer,
        assignedPatients: values.patientsInput
          ? values.patientsInput
              .split(",")
              .map((patient) => patient.trim())
          : [],
      });

      toast.success("Medicine added successfully");

      router.push("/medicines");
    } catch (error) {
      toast.error("Failed to add medicine");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">
            Medicine Name
          </label>

          <Input
            placeholder="Paracetamol"
            {...register("name")}
          />

          {errors.name && (
            <p className="text-sm text-red-500">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">
            Dosage
          </label>

          <Input
            placeholder="500mg"
            {...register("dosage")}
          />

          {errors.dosage && (
            <p className="text-sm text-red-500">
              {errors.dosage.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">
            Stock
          </label>

          <Input
            type="number"
            placeholder="25"
            {...register("stock", {
              valueAsNumber: true,
            })}
          />

          {errors.stock && (
            <p className="text-sm text-red-500">
              {errors.stock.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">
            Expiry Date
          </label>

          <Input
            type="date"
            {...register("expiryDate")}
          />

          {errors.expiryDate && (
            <p className="text-sm text-red-500">
              {errors.expiryDate.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">
            Category
          </label>

          <Input
            placeholder="Pain Relief"
            {...register("category")}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">
            Manufacturer
          </label>

          <Input
            placeholder="MediCare Labs"
            {...register("manufacturer")}
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <label className="text-sm font-medium text-slate-700">
            Assigned Patients
          </label>

          <Input
            placeholder="patient-1, patient-2"
            {...register("patientsInput")}
          />

          <p className="text-xs text-slate-500">
            Separate patient IDs with commas.
          </p>
        </div>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 w-full rounded-xl bg-blue-600 hover:bg-blue-700"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Saving...
          </>
        ) : (
          "Save Medicine"
        )}
      </Button>
    </form>
  );
}

