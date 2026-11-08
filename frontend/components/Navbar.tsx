import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 border-b border-slate-700">
      <Link
        href="/"
        className="text-2xl font-bold text-blue-500"
      >
        InsightAI
      </Link>

      <div className="flex gap-5 items-center">
        <Link href="/">
          Home
        </Link>

        <Link href="/dashboard">
          Dashboard
        </Link>

        <Link
          href="/login"
          className="bg-blue-600 px-4 py-2 rounded-lg"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}