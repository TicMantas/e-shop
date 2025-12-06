"use client";
import { productQueries } from "@/api/Products";
import { Product } from "@/app/products";
import ProductCard from "@/components/ProductCard";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useMemo } from "react";

const MainPageClient = () => {
  const { data: categories } = useQuery(productQueries.useCategories());
  const { data: products } = useQuery(productQueries.useProducts());

  const featured: Product[] = useMemo(() => {
    const list = products ?? [];
    if (list.length <= 8) return list.slice();
    return list.sort(() => Math.random() - 0.5).slice(0, 8);
  }, [products]);

  return (
    <main className="min-h-screen p-6">
      <header className="max-w-6xl mx-auto">
        <div className="text-center py-8 [&_p]:py-3">
          <p className="text-5xl font-bold">Welcome to the store</p>
          <p>
            Discover our curated selection of products. Browse by category or
            check out featured items below.
          </p>
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <Link
            href={"/products"}
            className="border rounded-2xl px-2 py-1 border-gray-300 text-gray-500 font-semibold"
          >
            All products
          </Link>
          {categories?.map((category: string) => (
            <Link
              key={category}
              href={`/products/category=${encodeURIComponent(category)}`}
              className="border rounded-2xl px-2 py-1 border-gray-300 text-gray-500 font-semibold "
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Link>
          ))}
        </div>
      </header>
      <section className="mt-8">
        <p className="text-2xl font-semibold mb-4">Featured Products</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featured.map((product: Product) => (
            <div key={product.id} className="w-full">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default MainPageClient;
