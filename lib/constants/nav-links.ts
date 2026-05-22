import {
  LayoutDashboard,
  Users,
  Pill,
  Bell,
  Bot,
  Settings,
} from "lucide-react";

export const navLinks = [
  {
    label: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    label: "Patients",
    href: "/patients",
    icon: Users,
  },
  {
    label: "Medicines",
    href: "/medicines",
    icon: Pill,
  },
  {
    label: "Alerts",
    href: "/alerts",
    icon: Bell,
  },
  {
    label: "AI Assistant",
    href: "/assistant",
    icon: Bot,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: Settings,
  },
];