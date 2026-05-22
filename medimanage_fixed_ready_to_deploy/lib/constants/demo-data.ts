import {
  Activity,
  AlertTriangle,
  Pill,
  Users,
  UserRound,
} from "lucide-react";

export const stats = [
  {
    title: "Total Patients",
    value: "2,847",
    change: "+12.5%",
    trend: "up",
    icon: Users,
    description: "Compared to last month",
  },
  {
    title: "Low Stock Medicines",
    value: "18",
    change: "-4.3%",
    trend: "down",
    icon: Pill,
    description: "Needs immediate refill",
  },
  {
    title: "Active Alerts",
    value: "7",
    change: "+2 alerts",
    trend: "up",
    icon: AlertTriangle,
    description: "Critical notifications",
  },
  {
    title: "Staff Online",
    value: "64",
    change: "+8%",
    trend: "up",
    icon: UserRound,
    description: "Currently active",
  },
];

export const patientTrendData = [
  { month: "Jan", patients: 240 },
  { month: "Feb", patients: 320 },
  { month: "Mar", patients: 290 },
  { month: "Apr", patients: 410 },
  { month: "May", patients: 460 },
  { month: "Jun", patients: 520 },
  { month: "Jul", patients: 610 },
];

export const medicineUsageData = [
  { name: "Antibiotics", usage: 420 },
  { name: "Painkillers", usage: 310 },
  { name: "Vaccines", usage: 260 },
  { name: "Insulin", usage: 190 },
  { name: "Supplements", usage: 140 },
];

export const recentActivities = [
  {
    id: 1,
    title: "New patient admitted",
    description: "Emily Johnson admitted to Cardiology",
    time: "5 mins ago",
    type: "patient",
  },
  {
    id: 2,
    title: "Low stock alert",
    description: "Paracetamol stock below threshold",
    time: "18 mins ago",
    type: "alert",
  },
  {
    id: 3,
    title: "Medicine dispensed",
    description: "Insulin issued to Room 204",
    time: "35 mins ago",
    type: "medicine",
  },
  {
    id: 4,
    title: "Emergency alert resolved",
    description: "ICU emergency resolved successfully",
    time: "1 hour ago",
    type: "success",
  },
];

export const dashboardSummary = [
  {
    label: "Appointments Today",
    value: "148",
  },
  {
    label: "Emergency Cases",
    value: "12",
  },
  {
    label: "Pending Reports",
    value: "31",
  },
  {
    label: "Available Beds",
    value: "54",
  },
];

export const alerts = [
  {
    title: "Critical Medicine Shortage",
    description: "Antibiotics inventory below safe limit.",
    severity: "high",
  },
  {
    title: "Server Maintenance",
    description: "Scheduled maintenance tonight at 11 PM.",
    severity: "medium",
  },
];