"use client";

import { useEffect, useMemo, useState } from "react";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { differenceInDays } from "date-fns";
import { toast } from "sonner";

import { db } from "@/lib/firestore";
import { Alert } from "@/types/alert";
import { Medicine } from "@/types/medicine";

export function useMedicines() {
  const [medicines, setMedicines] = useState<Medicine[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMedicines = async () => {
      try {
        const snapshot = await getDocs(collection(db, "medicines"));

        const data = snapshot.docs.map((document) => ({
          id: document.id,
          ...document.data(),
        })) as Medicine[];

        setMedicines(data);
      } catch (error) {
        toast.error("Failed to load medicines");
      } finally {
        setLoading(false);
      }
    };

    fetchMedicines();
  }, []);

  const removeMedicine = async (id: string) => {
    try {
      await deleteDoc(doc(db, "medicines", id));

      setMedicines((prev) =>
        prev.filter((medicine) => medicine.id !== id),
      );

      toast.success("Medicine removed");
    } catch (error) {
      toast.error("Failed to remove medicine");
    }
  };

  const updateMedicineStock = async (
    id: string,
    stock: number,
  ) => {
    try {
      await updateDoc(doc(db, "medicines", id), {
        stock,
      });

      setMedicines((prev) =>
        prev.map((medicine) =>
          medicine.id === id
            ? { ...medicine, stock }
            : medicine,
        ),
      );

      toast.success("Stock updated");
    } catch (error) {
      toast.error("Failed to update stock");
    }
  };

  const lowStockMedicines = useMemo(
    () =>
      medicines.filter((medicine) => medicine.stock < 10),
    [medicines],
  );

  const expiringMedicines = useMemo(
    () =>
      medicines.filter((medicine) => {
        const expiry = new Date(medicine.expiryDate);

        return differenceInDays(expiry, new Date()) <= 30;
      }),
    [medicines],
  );

  const alerts: Alert[] = useMemo(() => {
    const lowStockAlerts: Alert[] = lowStockMedicines.map(
      (medicine) => ({
        id: low-${medicine.id},
        title: "Low Stock Warning",
        description: ${medicine.name} stock is below threshold,
        severity: "high",
        createdAt: new Date().toISOString(),
      }),
    );

    const expiryAlerts: Alert[] = expiringMedicines.map(
      (medicine) => ({
        id: expiry-${medicine.id},
        title: "Expiry Reminder",
        description: ${medicine.name} expires soon,
        severity: "medium",
        createdAt: new Date().toISOString(),
      }),
    );

    return [...lowStockAlerts, ...expiryAlerts];
  }, [expiringMedicines, lowStockMedicines]);

  return {
    medicines,
    alerts,
    loading,
    lowStockMedicines,
    expiringMedicines,
    removeMedicine,
    updateMedicineStock,
  };
}