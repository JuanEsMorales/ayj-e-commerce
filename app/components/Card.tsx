import { Collection, Product } from "@/app/types";
import Image from "next/image";
import Link from "next/link";
import CartAddIcon from "./icons/CartAddIcon";

export function CardProduct({ product }: { product: Product }) {
  const { id, name, price, image } = product;
  return (
    <div className="flex flex-col gap-3 items-start justify-end p-4 relative card-item shadow-xl hover:shadow-2xl transition mx-auto">
      <Image src={image} alt="imagen" width={300} height={300} className="absolute top-0 left-0 w-full h-full object-cover" />
      <h1 className="text-xl font-bold z-10">{name}</h1>
      <div className="z-10 detail-info">
        <p className="text-sm mb-3 font-bold">${price}</p>
        <div className="flex gap-3">
          <Link href={`/products/${id}`} className="bg-primaryPage flex justify-center items-center text-rich text-sm font-bold px-4 py-2 rounded-lg z-10">
            Ver producto
          </Link>
          <Link href={`/cart/add/${id}`} className="bg-primaryPage flex justify-center items-center text-rich text-sm font-bold px-4 py-2 rounded-lg z-10">
            <CartAddIcon /> Agregar al carrito
          </Link>
        </div>
      </div>
    </div>
  )
}

export function CardCollection({ collection }: { collection: Collection }) {
  const { id, name, description, image } = collection;
  return (
    <div className="flex flex-col gap-3 items-start justify-end p-4 relative card-item shadow-xl hover:shadow-2xl transition mx-auto">
      <Image src={image} alt="imagen" width={300} height={300} className="absolute top-0 left-0 w-full h-full object-cover" />
      <h1 className="text-xl font-bold z-10">{name}</h1>
      <div className="z-10 detail-info">
        <p className="text-sm mb-3 font-bold">{description}</p>
        <Link href={`/collections/${id}`} className="bg-primaryPage text-rich text-sm font-bold px-4 py-2 rounded-lg z-10">
          Ver coleccion
        </Link>
      </div>
    </div>
  )
}