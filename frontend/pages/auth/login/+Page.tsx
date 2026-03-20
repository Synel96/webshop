import { useState } from "react";
import { useAuthStore } from "../../../stores/authStore.js";

export default function Page() {
  const login = useAuthStore((s) => s.login);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      await login(email, password);
      window.location.href = "/";
    } catch {
      setError("Hibás email vagy jelszó.");
    }
  };

  return (
    <div className="py-10 max-w-sm mx-auto">
      <h1 className="text-2xl font-bold mb-6">Bejelentkezés</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border rounded-lg px-4 py-2"
          required
        />
        <input
          type="password"
          placeholder="Jelszó"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border rounded-lg px-4 py-2"
          required
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button type="submit" className="bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
          Bejelentkezés
        </button>
      </form>
      <p className="mt-4 text-sm text-gray-500">
        Még nincs fiókod? <a href="/auth/register" className="text-blue-600 hover:underline">Regisztrálj</a>
      </p>
    </div>
  );
}
