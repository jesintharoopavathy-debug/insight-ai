export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 border-b border-slate-700">
      <h1 className="text-2xl font-bold text-blue-500">
        InsightAI
      </h1>

      <div className="flex gap-5">
        <button>Features</button>
        <button>Dashboard</button>

        <button className="bg-blue-600 px-4 py-2 rounded-lg">
          Login
        </button>
      </div>
    </nav>
  );
}