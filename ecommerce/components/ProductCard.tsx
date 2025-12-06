"use client";
import { Product } from "@/app/products";
import Image from "next/image";
import Rating from "./Rating";
import { BiCart } from "react-icons/bi";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

type ProductCardProps = {
  product: Product;
  onClick?: () => void;
};

export default function ProductCard({ product, onClick }: ProductCardProps) {
  const [addToCart, setAddToCart] = useState(false);
  const hideTimer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (hideTimer.current) {
        clearTimeout(hideTimer.current);
      }
    };
  }, []);

  const handleMouseOver = () => {
    if (hideTimer.current) {
      clearTimeout(hideTimer.current);
      hideTimer.current = null;
    }
    setAddToCart(true);
  };

  const handleMouseOut = () => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = window.setTimeout(() => {
      setAddToCart(false);
      hideTimer.current = null;
    }, 300);
  };
  return (
    <Link
      href={`/products/${product.id}`}
      className="relative flex flex-col rounded-lg items-center md:hover:scale-105 md:duration-700 md:w-full"
    >
      <div
        key={product.id}
        className="flex w-full bg-gray-400/40 justify-center items-center border-gray-400/30 border-t border-l border-r rounded-t-lg"
        onClick={onClick}
      >
        <div className="absolute top-2 right-2">
          <Rating rating={product.rating.rate} />
        </div>
        <Image
          src={product.image}
          alt={product.title}
          width={200}
          height={0}
          className="object-contain transform transition-transform duration-300 sm:h-40 p-3"
        />
      </div>
      <div className="flex w-full border-gray-400/30 p-3 sm:p-4 border-b border-l border-r rounded-b-lg">
        <div className="flex gap-3 flex-col w-full">
          <div className="flex md:items-center md:flex md:justify-between gap-3 w-full">
            <p className="truncate font-semibold flex-1 min-w-0 text-sm sm:text-base">
              {product.title}
            </p>
            <p className="font-bold text-sm">${product.price}</p>
          </div>
          <div className="w-full">
            <button
              className="relative overflow-hidden group rounded-md w-full sm:w-auto"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              <span className="absolute inset-0 bg-gray-400/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <span className="relative z-10 md:px-3 py-2 flex items-center justify-center w-full sm:w-auto">
                {addToCart ? (
                  <span className="text-black font-medium">Add to cart</span>
                ) : (
                  <BiCart className="text-2xl text-gray-800 transition-colors duration-200" />
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
