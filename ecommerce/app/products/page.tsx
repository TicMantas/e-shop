"use client";
import { productQueries } from "@/hooks/Products";
import { useQuery } from "@tanstack/react-query";
import { Product } from "../products";
import ProductCard from "@/components/ProductCard";
import { useRouter } from "next/navigation";

export default function Products() {
  const router = useRouter();

  const { data, isLoading, error } = useQuery(productQueries.useProducts());

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading products</div>;
  }
  return (
    <div className="flex flex-col m-4 ">
      <p className="text-4xl font-semibold mb-6 text-center">Products Page</p>
      <div className="flex flex-col md:grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2  gap-4">
        {data?.map((product: Product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => router.push(`/products/${product.id}`)}
          />
        ))}
      </div>
    </div>
  );
}
