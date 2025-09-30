"use client";
import { useState } from "react";

export default function ColorsPage() {
  const finalizedColors = [
    { name: "text-gray-900", class: "text-gray-900", hex: "#111827", role: "Light mode — Primary text" },
    { name: "text-gray-600", class: "text-gray-600", hex: "#4B5563", role: "Light mode — Secondary text" },
    { name: "text-gray-50", class: "text-gray-50", hex: "#F9FAFB", role: "Dark mode — Primary text" },
    { name: "text-gray-400", class: "text-gray-400", hex: "#9CA3AF", role: "Dark mode — Secondary text" },
    { name: "bg-gray-50", class: "bg-gray-50", hex: "#F9FAFB", role: "Light mode — Background" },
    { name: "bg-slate-900", class: "bg-slate-900", hex: "#0F172A", role: "Dark mode — Background" },
    { name: "bg-indigo-600", class: "bg-indigo-600", hex: "#4F46E5", role: "Primary CTA" },
    { name: "bg-indigo-700", class: "bg-indigo-700", hex: "#4338CA", role: "Primary CTA Hover" },
    { name: "bg-gray-200", class: "bg-gray-200", hex: "#E5E7EB", role: "Secondary CTA Background" },
    { name: "bg-gray-300", class: "bg-gray-300", hex: "#D1D5DB", role: "Card Border / Surface" },
    { name: "bg-white", class: "bg-white", hex: "#FFFFFF", role: "Light mode Card Background" },
    { name: "bg-slate-800", class: "bg-slate-800", hex: "#1E293B", role: "Dark mode Card Background" },
    { name: "bg-emerald-400", class: "bg-emerald-400", hex: "#34D399", role: "Success notification" },
    { name: "bg-blue-400", class: "bg-blue-400", hex: "#60A5FA", role: "Info notification" },
    { name: "bg-yellow-400", class: "bg-yellow-400", hex: "#FACC15", role: "Warning notification" },
    { name: "bg-red-600", class: "bg-red-600", hex: "#DC2626", role: "Error notification" },
    { name: "bg-orange-300", class: "bg-orange-300", hex: "#FDBA74", role: "Reserved accent — Orange" },
    { name: "bg-orange-400", class: "bg-orange-400", hex: "#FB923C", role: "Reserved accent — Orange" },
    { name: "bg-blue-300", class: "bg-blue-300", hex: "#93C5FD", role: "Reserved accent — Blue" },
    { name: "bg-yellow-300", class: "bg-yellow-300", hex: "#FDE68A", role: "Reserved accent — Yellow" },
  ];

  const unusedColors = [
    { name: "bg-indigo-950", class: "bg-indigo-950", hex: "#312E81" },
    { name: "bg-indigo-900", class: "bg-indigo-900", hex: "#1E40AF" },
    { name: "bg-indigo-800", class: "bg-indigo-800", hex: "#3730A3" },
    { name: "#1c1c4e", class: "bg-[#1c1c4e]", hex: "#1C1C4E" },
    { name: "text-emerald-400", class: "text-emerald-400", hex: "#34D399" },
    { name: "text-emerald-500", class: "text-emerald-500", hex: "#10B981" },
    { name: "text-gray-100", class: "text-gray-100", hex: "#F3F4F6" },
    { name: "text-gray-200", class: "text-gray-200", hex: "#E5E7EB" },
    { name: "text-gray-300", class: "text-gray-300", hex: "#D1D5DB" },
    { name: "text-gray-500", class: "text-gray-500", hex: "#6B7280" },
    { name: "text-gray-700", class: "text-gray-700", hex: "#374151" },
    { name: "text-gray-800", class: "text-gray-800", hex: "#1F2937" },
    { name: "text-indigo-300", class: "text-indigo-300", hex: "#A5B4FC" },
    { name: "text-indigo-400", class: "text-indigo-400", hex: "#818CF8" },
    { name: "text-indigo-500", class: "text-indigo-500", hex: "#6366F1" },
    { name: "text-indigo-600", class: "text-indigo-600", hex: "#4F46E5" },
    { name: "text-slate-600", class: "text-slate-600", hex: "#475569" },
    { name: "text-slate-800", class: "text-slate-800", hex: "#1E293B" },
    { name: "text-white", class: "text-white", hex: "#FFFFFF" },
    { name: "text-zinc-100", class: "text-zinc-100", hex: "#F4F4F5" },
    { name: "text-zinc-300", class: "text-zinc-300", hex: "#D4D4D8" },
    { name: "text-zinc-400", class: "text-zinc-400", hex: "#A1A1AA" },
  ];

  const jsonColors = {
    light: finalizedColors.filter(c => c.class.startsWith("text") || c.class.startsWith("bg")),
    dark: finalizedColors.filter(c => c.class.startsWith("text") || c.class.startsWith("bg"))
  };

  // 👉 State for background color
  const [bgClass, setBgClass] = useState("bg-white");

  return (
    <main className={`p-8 space-y-12 min-h-screen transition-colors duration-300 ${bgClass}`}>
      {/* Section 1: Finalized Colors */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Finalized Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {finalizedColors.map((c) => (
            <div
              key={c.name}
              onClick={() => setBgClass(c.class)} // ✅ update background
              className={`${c.class} h-20 rounded-lg flex flex-col items-center justify-center font-medium cursor-pointer`}
            >
              <span>{c.name}</span>
              <small className="text-xs">{c.role}</small>
              <small className="text-xs">{c.hex}</small>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Unused Colors */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Unused Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {unusedColors.map((c) => (
            <div
              key={c.name}
              onClick={() => setBgClass(c.class)} // ✅ update background
              className={`${c.class} h-20 rounded-lg flex flex-col items-center justify-center font-medium cursor-pointer`}
            >
              <span>{c.name}</span>
              <small className="text-xs">{c.hex}</small>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Color Palette JSON */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Color Palette JSON</h2>
        <pre className="bg-gray-800 text-white p-6 rounded-lg overflow-x-auto">
          {JSON.stringify(jsonColors, null, 2)}
        </pre>
      </section>
    </main>
  );
}
