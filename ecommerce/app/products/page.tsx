"use client";
import { GetAllProducts } from "@/api/Products";
import { useQuery } from "@tanstack/react-query";
import { Product } from "../products";
import ProductCard from "@/components/ProductCard";

export default function Products() {
  const { data, isLoading, error } = useQuery<Product[] | null>({
    queryKey: ["products"],
    queryFn: () => GetAllProducts(),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading products</div>;
  }
  return (
    <div className="flex flex-col m-4 ">
      <p className="text-4xl font-semibold mb-6 text-center">Products Page</p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
