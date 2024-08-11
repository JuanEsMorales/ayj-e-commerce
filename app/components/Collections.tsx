"use client"
import Image from "next/image"
import { useState } from "react"
import "./Collections.css"
import Link from "next/link"

const mockCollections = [
  {
    id: 1,
    name: "Anillos",
    description: "coleccion de anillos hechos a mano",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9sppMPWw2LJmDAfJK5asifV1SiEWeB6ugFsluFCjcc6sUS3bX8qzjdQFTgNAFofkMN04&usqp=CAU"
  },
  {
    id: 2,
    name: "Aretes",
    description: "coleccion de aretes hechos a mano",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9sppMPWw2LJmDAfJK5asifV1SiEWeB6ugFsluFCjcc6sUS3bX8qzjdQFTgNAFofkMN04&usqp=CAU"
  },
  {
    id: 3,
    name: "Pulseras",
    description: "coleccion de pulseras hechas a mano",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9sppMPWw2LJmDAfJK5asifV1SiEWeB6ugFsluFCjcc6sUS3bX8qzjdQFTgNAFofkMN04&usqp=CAU"
  },
  {
    id: 4,
    name: "Collares",
    description: "coleccion de collares hechos a mano",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9sppMPWw2LJmDAfJK5asifV1SiEWeB6ugFsluFCjcc6sUS3bX8qzjdQFTgNAFofkMN04&usqp=CAU"
  }
]

export default function Collections() {
  const [collections, setCollections] = useState(mockCollections)
  return (
    <section className="flex flex-col gap-10 w-full items-center justify-center p-4 text-rich">
      <h2 className="text-3xl font-bold">Explora nuestras nuevas colecciones</h2>
      <h3 className="text-2xl font-semibold">Descubre la mejor pieza para complementar tu estilo.</h3>
      <div className="collection-grid">
        {collections.map((collection) => (
          <div key={collection.id} className="flex flex-col gap-3 items-start justify-end p-4 relative collection-item shadow-xl hover:shadow-2xl transition">
            <Image src={collection.image} alt="imagen" width={300} height={300} className="absolute top-0 left-0 w-full h-full object-cover" />
            <h1 className="text-xl font-bold z-10">{collection.name}</h1>
            <div className="z-10 detail-info">
              <p className="text-sm mb-3 font-bold">{collection.description}</p>
              <Link href={`/collections/${collection.id}`} className="bg-primary text-rich text-sm font-bold px-4 py-2 rounded-lg z-10">
                Ver coleccion
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}