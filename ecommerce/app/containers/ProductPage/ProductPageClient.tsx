"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import Rating from "@/components/Rating";
import { BiArrowBack } from "react-icons/bi";
import { productQueries } from "@/api/Products";
import { useState } from "react";

export default function ProductPageClient({ id: propId }: { id?: number }) {
  const [descOpen, setDescOpen] = useState(false);
  const params = useParams();
  const productId = propId ?? params?.productId ?? "";
  const id = Number(productId);
  const maxWords = 50;

  const {
    data: product,
    isLoading,
    error,
  } = useQuery(productQueries.useProductById(id));

  if (isLoading) return <div>Loading…</div>;
  if (error || !product) return <div>Product not found</div>;

  const words =
    product.description?.toString().trim().split(/\s+/).filter(Boolean) ?? [];
  const preview =
    words.length <= maxWords
      ? product.description
      : words.slice(0, maxWords).join(" ");

  return (
    <div className="min-h-screen flex flex-col md:flex-row justify-center p-4 gap-4">
      <div className="relative rounded-2xl m-2 flex justify-center items-center shadow-lg md:flex-2">
        <div className="hover:scale-110 duration-700 w-full h-64 md:h-[520px] flex items-center">
          <Image
            src={product.image}
            alt={product.title}
            width={400}
            height={0}
            className="object-contain w-full h-full p-3"
          />
        </div>
      </div>

      <div className="flex relative flex-1 flex-col p-4 md:p-6 rounded-2xl m-2 justify-between bg-gray-500/10 md:flex-1">
        <div className="flex flex-col">
          <div className=" absolute top-3 right-5 text-5xl">
            <Rating rating={product.rating?.rate ?? 0} size={20} />
            <p className="text-sm text-gray-600 mt-1 text-right">
              {product.rating?.count ?? 0} reviews
            </p>
          </div>

          <Link
            href={"/products"}
            className="absolute top-5 left-5 cursor-pointer"
          >
            <BiArrowBack size={30} />
          </Link>

          <div className="p-6 md:p-8" />
          <p className="text-center md:text-left font-semibold text-2xl md:text-4xl py-3">
            {product.title}
          </p>
          <p className="text-end md:text-left font-bold text-xl md:text-2xl">
            Price: ${product.price}
          </p>
          <p className="mt-2 text-end">Category: {product.category}</p>
        </div>

        <div className="mt-3">
          <p className="text-base md:text-lg">
            {descOpen ? product.description : preview}
            {!descOpen && words.length > maxWords && (
              <button
                onClick={() => setDescOpen(true)}
                className="ml-2 hover:underline cursor-pointer"
                aria-label="Show full description"
              >
                ...
              </button>
            )}
            {descOpen && words.length > maxWords && (
              <button
                onClick={() => setDescOpen(false)}
                className="ml-3 text-base text-gray-500 hover:underline cursor-pointer"
                aria-label="Show less"
              >
                show less
              </button>
            )}
          </p>
        </div>

        <button className="mt-4 self-center md:self-stretch bg-black/70 rounded-2xl text-white py-2 px-2 text-lg md:text-2xl font-bold hover:scale-102 duration-200 cursor-pointer">
          ADD TO CART
        </button>
      </div>
    </div>
  );
}
