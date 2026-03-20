import { useQuery } from "@tanstack/react-query";
import { productApi } from "../lib/productApi";

export function useProducts(params?: Record<string, string | number>) {
  return useQuery({
    queryKey: ["products", params],
    queryFn: () => productApi.getAll(params),
  });
}

export function useProduct(slug: string) {
  return useQuery({
    queryKey: ["product", slug],
    queryFn: () => productApi.getBySlug(slug),
    enabled: !!slug,
  });
}

export function useCategories() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: productApi.getCategories,
  });
}
