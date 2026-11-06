export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold mb-6">
        InsightAI
      </h1>

      <p className="text-xl text-slate-300 mb-8">
        Transform Raw Data Into Actionable Insights
      </p>

      <div className="flex gap-4">
        <button className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700">
          Upload Dataset
        </button>

        <button className="bg-slate-700 px-6 py-3 rounded-lg hover:bg-slate-600">
          View Dashboard
        </button>
      </div>
    </main>
  );
}