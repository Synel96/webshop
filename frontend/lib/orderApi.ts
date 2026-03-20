import api from "../lib/api";
import type { Order } from "../types";

export const orderApi = {
  getMyOrders: () =>
    api.get<Order[]>("/orders/").then((r) => r.data),

  getById: (id: number) =>
    api.get<Order>(`/orders/${id}/`).then((r) => r.data),

  create: (payload: { items: { product_id: number; quantity: number }[] }) =>
    api.post<Order>("/orders/", payload).then((r) => r.data),
};
