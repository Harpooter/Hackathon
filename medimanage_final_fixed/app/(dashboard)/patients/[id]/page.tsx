"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Activity, HeartPulse, Thermometer } from "lucide-react";
import { toast } from "sonner";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { PatientForm } from "@/components/forms/patient-form";
import { deletePatient, getPatientById } from "@/lib/firestore";
import { Patient } from "@/types/patient";

export default function PatientDetailPage() {
  const params = useParams();
  const router = useRouter();

  const [patient, setPatient] = useState<Patient | null>(null);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const data = await getPatientById(params.id as string);
        setPatient(data);
      } catch (error) {
        toast.error("Failed to load patient.");
      } finally {
        setLoading(false);
      }
    };

    fetchPatient();
  }, [params.id]);

  const handleDelete = async () => {
    if (!patient) return;

    try {
      setDeleting(true);
      await deletePatient(patient.id);
      toast.success("Patient deleted successfully.");
      router.push("/patients");
    } catch (error) {
      toast.error("Failed to delete patient.");
    } finally {
      setDeleting(false);
    }
  };

  if (loading) {
    return (
      <div className="space-y-6 p-4 md:p-6">
        <Skeleton className="h-40 rounded-2xl" />
        <Skeleton className="h-[500px] rounded-2xl" />
      </div>
    );
  }

  if (!patient) {
    return (
      <div className="p-4 md:p-6">
        <Card className="rounded-2xl border border-slate-200 shadow-sm">
          <CardContent className="p-10 text-center">
            <h2 className="text-xl font-semibold text-slate-900">
              Patient not found
            </h2>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6 p-4 md:p-6">
      <Card className="rounded-2xl border border-slate-200 bg-[#eff6ff] shadow-sm">
}