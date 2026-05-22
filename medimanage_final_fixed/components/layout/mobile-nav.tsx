"use client";

import { Menu } from "lucide-react";

export function MobileNav() {
  return (
    <button className="rounded-xl border border-slate-200 p-2 lg:hidden">
      <Menu className="h-5 w-5" />
    </button>
  );
}