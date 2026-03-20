import { useData } from "vike-react/useData";
import { useCartStore } from "../../../stores/cartStore.js";
import type { Data } from "./+data.js";

export default function Page() {
  const { product } = useData<Data>();
  const addItem = useCartStore((s) => s.addItem);

  return (
    <div className="py-10 max-w-2xl">
      <img src={product.image} alt={product.name} className="w-full h-72 object-cover rounded-xl mb-6" />
      <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <p className="text-2xl font-semibold mb-6">{product.price.toLocaleString("hu-HU")} Ft</p>
      <button
        onClick={() => addItem(product)}
        className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition"
      >
        Kosárba 🛒
      </button>
    </div>
  );
}
