"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Link, useTransitionRouter } from 'next-view-transitions'
import { BackLinkContext } from '@/app/context/backlink'
import { useContext } from "react";

const mockProducts = [
  {
    id: "1",
    name: "Anillo fino",
    price: 3000,
    image: "https://i.ytimg.com/vi/m1lOLWWjlcE/maxresdefault.jpg"
  },
  {
    id: "2",
    name: "Anillo de flores",
    price: 2000,
    image: "https://i.ytimg.com/vi/m1lOLWWjlcE/maxresdefault.jpg"
  },
  {
    id: "3",
    name: "Anillo de murano",
    price: 10000,
    image: "https://i.ytimg.com/vi/m1lOLWWjlcE/maxresdefault.jpg"
  },
  {
    id: "4",
    name: "Anillo fino",
    price: 3000,
    image: "https://i.ytimg.com/vi/m1lOLWWjlcE/maxresdefault.jpg"
  },
  {
    id: "5",
    name: "Anillo de flores",
    price: 2000,
    image: "https://i.ytimg.com/vi/m1lOLWWjlcE/maxresdefault.jpg"
  },
  {
    id: "6",
    name: "Anillo de murano",
    price: 10000,
    image: "https://i.ytimg.com/vi/m1lOLWWjlcE/maxresdefault.jpg"
  },
  {
    id: "7",
    name: "Arete de acero dorado",
    price: 2000,
    image: "https://bisuteriacoketa.wordpress.com/wp-content/uploads/2018/11/12438ab35899583ebf24d20a0eb2584301.jpg?w=640"
  },
  {
    id: "8",
    name: "Arete de acero azul",
    price: 5000,
    image: "https://bisuteriacoketa.wordpress.com/wp-content/uploads/2018/11/12438ab35899583ebf24d20a0eb2584301.jpg?w=640"
  },
  {
    id: "9",
    name: "Arete de acero rojo",
    price: 20000,
    image: "https://bisuteriacoketa.wordpress.com/wp-content/uploads/2018/11/12438ab35899583ebf24d20a0eb2584301.jpg?w=640"
  },
  {
    id: "10",
    name: "Arete de acero dorado",
    price: 2000,
    image: "https://bisuteriacoketa.wordpress.com/wp-content/uploads/2018/11/12438ab35899583ebf24d20a0eb2584301.jpg?w=640"
  },
  {
    id: "11",
    name: "Arete de acero azul",
    price: 5000,
    image: "https://bisuteriacoketa.wordpress.com/wp-content/uploads/2018/11/12438ab35899583ebf24d20a0eb2584301.jpg?w=640"
  },
  {
    id: "12",
    name: "Arete de acero rojo",
    price: 20000,
    image: "https://bisuteriacoketa.wordpress.com/wp-content/uploads/2018/11/12438ab35899583ebf24d20a0eb2584301.jpg?w=640"
  },
  {
    id: "13",
    name: "Pulsera de acero",
    price: 2000,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9sppMPWw2LJmDAfJK5asifV1SiEWeB6ugFsluFCjcc6sUS3bX8qzjdQFTgNAFofkMN04&usqp=CAU"
  },
  {
    id: "14",
    name: "Pulsera de hierro",
    price: 2500,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9sppMPWw2LJmDAfJK5asifV1SiEWeB6ugFsluFCjcc6sUS3bX8qzjdQFTgNAFofkMN04&usqp=CAU"
  },
  {
    id: "15",
    name: "Pulsera de plata",
    price: 3000,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9sppMPWw2LJmDAfJK5asifV1SiEWeB6ugFsluFCjcc6sUS3bX8qzjdQFTgNAFofkMN04&usqp=CAU"
  },
  {
    id: "16",
    name: "Pulsera de acero",
    price: 2000,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9sppMPWw2LJmDAfJK5asifV1SiEWeB6ugFsluFCjcc6sUS3bX8qzjdQFTgNAFofkMN04&usqp=CAU"
  },
  {
    id: "17",
    name: "Pulsera de hierro",
    price: 2500,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9sppMPWw2LJmDAfJK5asifV1SiEWeB6ugFsluFCjcc6sUS3bX8qzjdQFTgNAFofkMN04&usqp=CAU"
  },
  {
    id: "18",
    name: "Pulsera de plata",
    price: 3000,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9sppMPWw2LJmDAfJK5asifV1SiEWeB6ugFsluFCjcc6sUS3bX8qzjdQFTgNAFofkMN04&usqp=CAU"
  }
]

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