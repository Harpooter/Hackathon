export interface Medicine {
  id: string;
  name: string;
  dosage: string;
  stock: number;
  expiryDate: string;
  assignedPatients: string[];
  category?: string;
  manufacturer?: string;
}
