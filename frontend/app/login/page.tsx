import Link from "next/link";
export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
      <div className="bg-slate-800 p-8 rounded-xl w-96">
        <h1 className="text-3xl font-bold mb-6">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded mb-4 bg-slate-700"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded mb-4 bg-slate-700"
        />

        <button className="w-full bg-blue-600 p-3 rounded">
          Login
        </button>

        <p className="mt-4 text-center">
            Don't have an account?{" "}
            <Link href="/register" className="text-blue-400">
                Register
            </Link>
        </p>
      </div>
    </main>
  );
}