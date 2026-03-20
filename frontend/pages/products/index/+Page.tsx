import { useData } from "vike-react/useData";
import type { Data } from "./+data.js";

export default function Page() {
  const { products } = useData<Data>();

  return (
    <div className="py-10">
      <h1 className="text-2xl font-bold mb-6">Termékek</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <a key={p.id} href={`/products/${p.slug}`} className="border rounded-xl p-4 hover:shadow-md transition">
            <img src={p.image} alt={p.name} className="w-full h-48 object-cover rounded-lg mb-3" />
            <h2 className="font-semibold text-lg">{p.name}</h2>
            <p className="text-gray-500 text-sm mt-1">{p.price.toLocaleString("hu-HU")} Ft</p>
          </a>
        ))}
      </div>
    </div>
  );
}
