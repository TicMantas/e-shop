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
      className="relative flex flex-col rounded-lg items-center hover:scale-105 duration-700"
    >
      <div
        key={product.id}
        className="flex flex-2 w-full bg-gray-400/40 justify-center items-center border-gray-400/30 border-t border-l border-r rounded-t-lg"
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
          className="object-contain hover:scale-120 duration-900 h-40 p-3"
        />
      </div>
      <div className="flex flex-1 w-full border-gray-400/30 p-4 border-b border-l border-r rounded-b-lg">
        <div className="flex gap-4 flex-col items-center w-full">
          <div className="flex justify-between gap-5 w-full">
            <p className="truncate font-semibold">{product.title}</p>
            <p className="font-bold ">${product.price}</p>
          </div>
          <div>
            <button
              className="relative overflow-hidden group rounded-md"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              <span className="absolute inset-0 bg-gray-400/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
              <span className="relative z-10 px-3 py-1 flex items-center cursor-pointer">
                {addToCart ? (
                  <span className="relative px-25 text-black flex items-center">
                    Add to cart
                  </span>
                ) : (
                  <BiCart className="text-2xl text-gray-800 duration-1000" />
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
