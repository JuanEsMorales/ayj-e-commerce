import { CardProduct } from "../components/Card"
import { mockProducts } from "../mocks"

export default function ProductsPage() {
  return (
    <main>
      <section className="list-grid w-[90%] gap-10 mx-auto">
        {mockProducts.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </section>
    </main>
  )
}