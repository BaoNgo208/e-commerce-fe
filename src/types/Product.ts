import type { UniqueIdentifier } from "@dnd-kit/core";

export type Product = {
  id: UniqueIdentifier;
  product_name: string;
  regular_price: number;
  discount_price: number | null;
  quantity: number;
  short_description: string | null;
  product_description: string | null;
  images: any[];
  coupons: any[];
};
