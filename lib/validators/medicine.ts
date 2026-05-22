import { z } from "zod";

export const medicineSchema = z.object({
  name: z.string().min(2, "Medicine name is required"),
  dosage: z.string().min(1, "Dosage is required"),
  stock: z.number().min(0, "Stock cannot be negative"),
  expiryDate: z.string().min(1, "Expiry date is required"),
  category: z.string().optional(),
  manufacturer: z.string().optional(),
  patientsInput: z.string().optional(),
});

export type MedicineSchemaValues = z.infer<typeof medicineSchema>;