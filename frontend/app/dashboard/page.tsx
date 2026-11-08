export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white p-10">
      <h1 className="text-4xl font-bold mb-8">
        Dashboard
      </h1>

      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-slate-800 p-6 rounded-xl">
          Total Datasets
        </div>

        <div className="bg-slate-800 p-6 rounded-xl">
          AI Insights
        </div>

        <div className="bg-slate-800 p-6 rounded-xl">
          SQL Queries
        </div>

        <div className="bg-slate-800 p-6 rounded-xl">
          Reports
        </div>
      </div>
    </main>
  );
}