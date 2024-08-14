import "./Collections.css"
import { CardCollection } from "./Card"

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
  return (
    <section className="flex flex-col gap-10 w-full items-center justify-center p-4 text-rich">
      <h2 className="text-2xl md:text-3xl font-bold text-center">Explora nuestras nuevas colecciones</h2>
      <h3 className="text-xl md:text-2xl font-semibold text-center">Descubre la mejor pieza para complementar tu estilo.</h3>
      <div className="list-grid w-full">
        {mockCollections.map((collection) => (
          <CardCollection key={collection.id} collection={collection} />
        ))}
      </div>
    </section>
  )
}