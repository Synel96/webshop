import { useCartStore } from "../../stores/cartStore.js";
import { orderApi } from "../../lib/orderApi.js";
import { useState } from "react";

export default function Page() {
  const { items, totalPrice, clearCart } = useCartStore();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleOrder = async () => {
    setLoading(true);
    try {
      await orderApi.create({
        items: items.map((i) => ({ product_id: i.product.id, quantity: i.quantity })),
      });
      clearCart();
      setSuccess(true);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="py-10">
        <h1 className="text-2xl font-bold mb-4">✅ Rendelés leadva!</h1>
        <a href="/" className="text-blue-600 hover:underline">Vissza a főoldalra</a>
      </div>
    );
  }

  return (
    <div className="py-10 max-w-lg">
      <h1 className="text-2xl font-bold mb-6">Pénztár</h1>
      {items.map(({ product, quantity }) => (
        <div key={product.id} className="flex justify-between py-2 border-b">
          <span>{product.name} × {quantity}</span>
          <span>{(product.price * quantity).toLocaleString("hu-HU")} Ft</span>
        </div>
      ))}
      <p className="text-xl font-bold mt-4 mb-6">Összesen: {totalPrice().toLocaleString("hu-HU")} Ft</p>
      <button
        onClick={handleOrder}
        disabled={loading || items.length === 0}
        className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition disabled:opacity-50"
      >
        {loading ? "Feldolgozás..." : "Megrendelem"}
      </button>
    </div>
  );
}
