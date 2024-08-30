import CarouselProducts from "../components/ui/Carousel"
import { mockCollections } from "../mocks"


export default function CollectionsPage() {
  return (
    <main>
      {mockCollections.map((collection) => (
        <section key={collection.id} className="flex flex-col gap-5 w-[90%] items-center justify-center p-4 text-rich mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center">{collection.name}</h2>
          <h3 className="text-xl md:text-2xl font-semibold text-center">{collection.description}</h3>
          <CarouselProducts products={collection.products} />
        </section>
      ))}
    </main>
  )
}