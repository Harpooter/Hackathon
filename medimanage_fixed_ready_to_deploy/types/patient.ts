export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: string;
  condition: string;
  status: "stable" | "critical" | "recovering";
  assignedDoctor: string;
  medicines: string[];
  vitals: {
    heartRate: number;
    bloodPressure: string;
    temperature: number;
  };
  createdAt?: string;
}
