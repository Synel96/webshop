import { useState } from "react";
import api from "../../../lib/api.js";

export default function Page() {
  const [form, setForm] = useState({ email: "", first_name: "", last_name: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      await api.post("/auth/register/", form);
      window.location.href = "/auth/login";
    } catch {
      setError("Regisztráció sikertelen.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  return (
    <div className="py-10 max-w-sm mx-auto">
      <h1 className="text-2xl font-bold mb-6">Regisztráció</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input name="first_name" placeholder="Keresztnév" value={form.first_name} onChange={handleChange} className="border rounded-lg px-4 py-2" required />
        <input name="last_name" placeholder="Vezetéknév" value={form.last_name} onChange={handleChange} className="border rounded-lg px-4 py-2" required />
        <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} className="border rounded-lg px-4 py-2" required />
        <input name="password" type="password" placeholder="Jelszó" value={form.password} onChange={handleChange} className="border rounded-lg px-4 py-2" required />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button type="submit" className="bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
          Regisztráció
        </button>
      </form>
      <p className="mt-4 text-sm text-gray-500">
        Van már fiókod? <a href="/auth/login" className="text-blue-600 hover:underline">Jelentkezz be</a>
      </p>
    </div>
  );
}
