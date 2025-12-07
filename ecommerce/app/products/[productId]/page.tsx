import ProductPageClient from "@/app/containers/ProductPage/ProductPageClient";
import { notFound } from "next/navigation";

export default async function Product({
  params,
}: {
  params: Promise<{ productId: string }> | { productId: string };
}) {
  const { productId } = await params;
  const id = Number(productId);
  if (!Number.isFinite(id) || id <= 0) return notFound();

  return <ProductPageClient id={id} />;
}
