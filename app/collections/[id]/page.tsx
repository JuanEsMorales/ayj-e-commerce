import { CardProduct } from "../../components/Card"
import { mockCollections } from "../../mocks"

export default function CollectionPage({params} : {params: {id: string}}) {
  const { id } = params;
  const collection = mockCollections.find(collection => collection.id === id);
  
  return (
    <main>
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-3">{collection?.name}</h1>
      <h3 className="text-xl md:text-2xl font-semibold text-center mb-3">{collection?.description}</h3>
      <section className="list-grid w-[90%] gap-10 mx-auto">
        {
          collection?.products.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))
        }
      </section>
    </main>
  )
}