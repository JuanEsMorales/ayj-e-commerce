import "./Collections.css"
import { CardCollection } from "./Card"
import { mockCollectionsCards } from "../mocks"


export default function Collections() {
  return (
    <section className="flex flex-col gap-10 w-full items-center justify-center p-4 text-rich">
      <h2 className="text-2xl md:text-3xl font-bold text-center">Explora nuestras nuevas colecciones</h2>
      <h3 className="text-xl md:text-2xl font-semibold text-center">Descubre la mejor pieza para complementar tu estilo.</h3>
      <div className="list-grid w-full">
        {mockCollectionsCards.map((collection) => (
          <CardCollection key={collection.id} collection={collection} />
        ))}
      </div>
    </section>
  )
}