import { useAuthStore } from "../../stores/authStore.js";
import { useQuery } from "@tanstack/react-query";
import { orderApi } from "../../lib/orderApi.js";

export default function Page() {
  const { user, logout, isAuthenticated } = useAuthStore();

  const { data: orders } = useQuery({
    queryKey: ["orders"],
    queryFn: orderApi.getMyOrders,
    enabled: isAuthenticated,
  });

  if (!isAuthenticated) {
    return (
      <div className="py-10">
        <p className="text-gray-500">Előbb <a href="/auth/login" className="text-blue-600 hover:underline">jelentkezz be</a>.</p>
      </div>
    );
  }

  return (
    <div className="py-10">
      <h1 className="text-2xl font-bold mb-2">Fiókom</h1>
      <p className="text-gray-600 mb-6">{user?.first_name} {user?.last_name} — {user?.email}</p>
      <button onClick={logout} className="mb-8 text-sm text-red-500 hover:underline">Kijelentkezés</button>

      <h2 className="text-xl font-semibold mb-4">Rendeléseim</h2>
      {orders?.length === 0 && <p className="text-gray-400">Még nincs rendelésed.</p>}
      <div className="flex flex-col gap-3">
        {orders?.map((order) => (
          <div key={order.id} className="border rounded-xl p-4">
            <p className="font-medium">#{order.id} — {order.status}</p>
            <p className="text-sm text-gray-500">{order.total.toLocaleString("hu-HU")} Ft · {new Date(order.created_at).toLocaleDateString("hu-HU")}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
