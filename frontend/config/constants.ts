import type { OrderStatus } from "../types";

// ─── API ─────────────────────────────────────────────────────────────────────
export const API_BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:8000/api";

// ─── Pagination ───────────────────────────────────────────────────────────────
export const PAGINATION_LIMIT = 12;

// ─── Order statuses ───────────────────────────────────────────────────────────
export const ORDER_STATUS_LABELS: Record<OrderStatus, string> = {
  pending: "Függőben",
  processing: "Feldolgozás alatt",
  shipped: "Szállítás alatt",
  delivered: "Kézbesítve",
  cancelled: "Törölve",
};

export const ORDER_STATUS_VARIANTS: Record<
  OrderStatus,
  "default" | "info" | "warning" | "success" | "danger"
> = {
  pending: "default",
  processing: "info",
  shipped: "warning",
  delivered: "success",
  cancelled: "danger",
};

// ─── Misc ─────────────────────────────────────────────────────────────────────
export const SITE_NAME = "Webshop";
export const CURRENCY = "HUF";
