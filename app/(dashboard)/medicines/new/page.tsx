import { MedicineForm } from "@/components/forms/medicine-form";

export default function NewMedicinePage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Add New Medicine
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Create medicine inventory records.
        </p>
      </div>

      <MedicineForm />
    </div>
  );
}