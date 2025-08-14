import type { UniqueIdentifier } from "@dnd-kit/core";
import type { Product } from "./Product.ts";

export type ProductSection = {
  id: UniqueIdentifier;
  title: string;
  // products: Product[];
  product_section_products: ProductSectionProduct[];
  description: string;
  is_active: boolean;
  display_order: number;
};

export type ProductSectionProduct = {
  section_id: string;
  product_id: string;
  products: Product;
};
