import { CardProduct } from "../components/Card"

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