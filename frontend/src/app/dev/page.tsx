// app/dev-docs/colors/page.tsx
export default function ColorsPage() {
  const customColors = [
    { name: "indigo-950", class: "bg-indigo-950" },
    { name: "indigo-900", class: "bg-indigo-900" },
    { name: "indigo-800", class: "bg-indigo-800" },
    { name: "#1c1c4e", class: "bg-[#1c1c4e]" },
  ];

  const textColors = [
    { name: "text-emerald-400", class: "bg-emerald-400" },
    { name: "text-emerald-500", class: "bg-emerald-500" },
    { name: "text-gray-50", class: "bg-gray-50 text-black" },
    { name: "text-gray-100", class: "bg-gray-100 text-black" },
    { name: "text-gray-200", class: "bg-gray-200 text-black" },
    { name: "text-gray-300", class: "bg-gray-300 text-black" },
    { name: "text-gray-400", class: "bg-gray-400 text-black" },
    { name: "text-gray-500", class: "bg-gray-500 text-white" },
    { name: "text-gray-600", class: "bg-gray-600 text-white" },
    { name: "text-gray-700", class: "bg-gray-700 text-white" },
    { name: "text-gray-800", class: "bg-gray-800 text-white" },
    { name: "text-gray-900", class: "bg-gray-900 text-white" },
    { name: "text-indigo-300", class: "bg-indigo-300 text-black" },
    { name: "text-indigo-400", class: "bg-indigo-400 text-black" },
    { name: "text-indigo-500", class: "bg-indigo-500 text-white" },
    { name: "text-indigo-600", class: "bg-indigo-600 text-white" },
    { name: "text-slate-600", class: "bg-slate-600 text-white" },
    { name: "text-slate-800", class: "bg-slate-800 text-white" },
    { name: "text-slate-900", class: "bg-slate-900 text-white" },
    { name: "text-white", class: "bg-white text-black border" },
    { name: "text-zinc-100", class: "bg-zinc-100 text-black" },
    { name: "text-zinc-300", class: "bg-zinc-300 text-black" },
    { name: "text-zinc-400", class: "bg-zinc-400 text-black" },
  ];

  return (
    <main className="p-8 space-y-12">
      {/* Section 1: Custom BG Colors */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Custom Background Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {customColors.map((c) => (
            <div
              key={c.name}
              className={`${c.class} h-20 rounded-lg flex items-center justify-center text-white font-medium`}
            >
              {c.name}
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Text Colors as BG Colors */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Text Colors (Shown as Backgrounds)</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {textColors.map((c) => (
            <div
              key={c.name}
              className={`${c.class} h-20 rounded-lg flex items-center justify-center font-medium`}
            >
              {c.name}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
