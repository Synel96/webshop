import api from "../lib/api";
import type { PaginatedResponse, Product, Category } from "../types";

export const productApi = {
  getAll: (params?: Record<string, string | number>) =>
    api
      .get<PaginatedResponse<Product>>("/products/", { params })
      .then((r) => r.data),

  getBySlug: (slug: string) =>
    api.get<Product>(`/products/${slug}/`).then((r) => r.data),

  getCategories: () =>
    api.get<Category[]>("/products/categories/").then((r) => r.data),
};
