import { useCartStore } from "../../stores/cartStore.js";

export default function Page() {
  const { items, removeItem, updateQuantity, totalPrice } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="py-10">
        <h1 className="text-2xl font-bold mb-4">Kosár 🛒</h1>
        <p className="text-gray-500">A kosarad üres.</p>
      </div>
    );
  }

  return (
    <div className="py-10">
      <h1 className="text-2xl font-bold mb-6">Kosár 🛒</h1>
      <div className="flex flex-col gap-4">
        {items.map(({ product, quantity }) => (
          <div key={product.id} className="flex items-center gap-4 border rounded-xl p-4">
            <img src={product.image} alt={product.name} className="w-20 h-20 object-cover rounded-lg" />
            <div className="flex-1">
              <p className="font-semibold">{product.name}</p>
              <p className="text-sm text-gray-500">{product.price.toLocaleString("hu-HU")} Ft</p>
            </div>
            <input
              type="number"
              min={1}
              value={quantity}
              onChange={(e) => updateQuantity(product.id, Number(e.target.value))}
              className="w-16 border rounded-lg p-1 text-center"
            />
            <button onClick={() => removeItem(product.id)} className="text-red-500 hover:text-red-700">✕</button>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-between items-center">
        <p className="text-xl font-bold">Összesen: {totalPrice().toLocaleString("hu-HU")} Ft</p>
        <a href="/checkout" className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition">
          Megrendelés →
        </a>
      </div>
    </div>
  );
}
