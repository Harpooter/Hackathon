"use client";

import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

import { logoutUser } from "@/lib/auth";

import { MobileNav } from "./mobile-nav";

export function Navbar() {
  const router = useRouter();

  async function handleLogout() {
    await logoutUser();
    router.push("/login");
  }

  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6">
      <div className="flex items-center gap-4">
        <MobileNav />

        <div>
          <h2 className="text-lg font-semibold">
            MediManage
          </h2>

          <p className="text-sm text-slate-500">
            Hospital Management Dashboard
          </p>
        </div>
      </div>

      <button
        onClick={handleLogout}
        className="flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 text-sm transition hover:bg-slate-50"
      >
        <LogOut className="h-4 w-4" />
        Logout
      </button>
    </header>
  );
}