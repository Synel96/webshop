import type { PaginatedResponse, Product } from "../../../types";
import api from "../../../lib/api";

export type Data = Awaited<ReturnType<typeof data>>;

export async function data() {
  const { data } = await api.get<PaginatedResponse<Product>>("/products/");
  return { products: data.results };
}
