"use client";
import { productQueries } from "@/api/Products";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "@/components/ProductCard";
import { useRouter, useSearchParams } from "next/navigation";
import { Categorize } from "@/utils/Categorize";

export default function Products() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryUrl = searchParams?.get("category") ?? "";

  const { data: categories } = useQuery(productQueries.useCategories());
  const { data, isLoading, error } = useQuery(productQueries.useProducts());
  const filtered = Categorize(categoryUrl, data);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;
  return (
    <div className="flex flex-col m-4 ">
      <p className="text-4xl font-semibold mb-6 text-center">Products Page</p>
      <div className="flex justify-end mb-4">
        <select
          value={categoryUrl}
          onChange={(e) => {
            const value = e.target.value;
            const url = value
              ? `/products?category=${encodeURIComponent(value)}`
              : "/products";
            router.push(url);
          }}
          className="text-center border p-1 rounded-2xl border-gray-300"
        >
          <option value="">All categories</option>
          {categories?.map((category: string) => (
            <option key={category} value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filtered.length === 0 ? (
          <div>No products from this category !</div>
        ) : (
          filtered.map((product) => (
            <div key={product.id} className="w-full">
              <ProductCard
                product={product}
                onClick={() => router.push(`/products/${product.id}`)}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
