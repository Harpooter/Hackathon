import { PatientForm } from "@/components/forms/patient-form";

export default function NewPatientPage() {
  return (
    <div className="p-4 md:p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-900">
          Add New Patient
        </h1>
        <p className="text-sm text-slate-500">
          Create a new patient profile and assign care details.
        </p>
      </div>

      <PatientForm />
    </div>
  );
}