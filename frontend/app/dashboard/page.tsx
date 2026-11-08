const cards = [
  "Total Datasets",
  "AI Insights",
  "SQL Queries",
  "Reports",
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white p-10">
      <h1 className="text-4xl font-bold mb-8">
        Dashboard
      </h1>

      <div className="grid md:grid-cols-4 gap-6">
        {cards.map((card) => (
          <div
            key={card}
            className="bg-slate-800 p-8 rounded-xl"
          >
            {card}
          </div>
        ))}
      </div>
    </main>
  );
}