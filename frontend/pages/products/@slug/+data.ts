import type { Product } from "../../../types";
import api from "../../../lib/api";
import type { PageContextServer } from "vike/types";

export type Data = Awaited<ReturnType<typeof data>>;

export async function data(pageContext: PageContextServer) {
  const { data } = await api.get<Product>(`/products/${pageContext.routeParams.slug}/`);
  return { product: data };
}
