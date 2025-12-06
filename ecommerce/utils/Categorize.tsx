import { Product } from "@/app/products";

export const Categorize = (selectedCategory: string, products: Product[]) => {
  if (!selectedCategory) return products ?? [];
  return (products ?? []).filter(
    (p) => p.category?.toString().toLowerCase() === selectedCategory
  );
};
