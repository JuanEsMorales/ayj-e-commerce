"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Link, useTransitionRouter } from 'next-view-transitions'
import { BackLinkContext } from '@/app/context/backlink'
import { useContext } from "react";
import { mockProducts } from "../../mocks";

export default function ProductPage() {
  const { id } = useParams();
  const router = useTransitionRouter();
  const { backLink } = useContext(BackLinkContext);
  const product = mockProducts.find(product => product.id === id);
  return (
    <main className="flex flex-col gap-3 items-center justify-center">
      {product && <h1>{product.name}</h1>}
      <div className="flex flex-col gap-3 items-start justify-end relative card-item shadow-xl hover:shadow-2xl transition mx-auto image-product">
        {product && <Image src={product.image} alt="imagen" width={300} height={300} className="size-full object-cover" />}
      </div>
      <Link href={backLink} onClick={(e) => {e.preventDefault(); router.back()}} className="bg-primaryPage text-rich text-sm font-bold px-4 py-2 rounded-lg z-10">
        Volver
      </Link>
    </main>
  )
}