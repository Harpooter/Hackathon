"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navLinks } from "@/lib/constants/nav-links";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-72 border-r border-slate-200 bg-white lg:flex lg:flex-col">
      <div className="border-b border-slate-200 p-6">
        <h1 className="text-2xl font-bold text-blue-600">
          MediManage
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Smart Healthcare Platform
        </p>
      </div>

      <nav className="flex-1 space-y-2 p-4">
        {navLinks.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition",
                pathname === item.href
                  ? "bg-blue-50 text-blue-700"
                  : "text-slate-600 hover:bg-slate-100"
              )}
            >
              <Icon className="h-5 w-5" />

              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}