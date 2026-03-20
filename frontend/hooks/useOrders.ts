import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { orderApi } from "../lib/orderApi";
import { useCartStore } from "../stores/cartStore";

export function useOrders() {
  return useQuery({
    queryKey: ["orders"],
    queryFn: orderApi.getMyOrders,
  });
}

export function useOrder(id: number) {
  return useQuery({
    queryKey: ["order", id],
    queryFn: () => orderApi.getById(id),
    enabled: !!id,
  });
}

export function usePlaceOrder() {
  const queryClient = useQueryClient();
  const clearCart = useCartStore((s) => s.clearCart);

  return useMutation({
    mutationFn: orderApi.create,
    onSuccess: () => {
      clearCart();
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
  });
}
