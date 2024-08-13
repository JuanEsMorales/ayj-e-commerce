import CarouselProducts from "../components/ui/Carousel"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { CardProduct } from "../components/Card";

const mockCollections = [
  {
    id: 1,
    name: "Anillos",
    description: "coleccion de anillos hechos a mano",
    products: [
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
      }
    ]
  },
  {
    id: 2,
    name: "Aretes",
    description: "coleccion de aretes hechos a mano",
    products: [
      {
        id: "1",
        name: "Arete de acero dorado",
        price: 2000,
        image: "https://bisuteriacoketa.wordpress.com/wp-content/uploads/2018/11/12438ab35899583ebf24d20a0eb2584301.jpg?w=640"
      },
      {
        id: "2",
        name: "Arete de acero azul",
        price: 5000,
        image: "https://bisuteriacoketa.wordpress.com/wp-content/uploads/2018/11/12438ab35899583ebf24d20a0eb2584301.jpg?w=640"
      },
      {
        id: "3",
        name: "Arete de acero rojo",
        price: 20000,
        image: "https://bisuteriacoketa.wordpress.com/wp-content/uploads/2018/11/12438ab35899583ebf24d20a0eb2584301.jpg?w=640"
      },
      {
        id: "4",
        name: "Arete de acero dorado",
        price: 2000,
        image: "https://bisuteriacoketa.wordpress.com/wp-content/uploads/2018/11/12438ab35899583ebf24d20a0eb2584301.jpg?w=640"
      },
      {
        id: "5",
        name: "Arete de acero azul",
        price: 5000,
        image: "https://bisuteriacoketa.wordpress.com/wp-content/uploads/2018/11/12438ab35899583ebf24d20a0eb2584301.jpg?w=640"
      },
      {
        id: "6",
        name: "Arete de acero rojo",
        price: 20000,
        image: "https://bisuteriacoketa.wordpress.com/wp-content/uploads/2018/11/12438ab35899583ebf24d20a0eb2584301.jpg?w=640"
      }
    ]
  },
  {
    id: 3,
    name: "Pulseras",
    description: "coleccion de pulseras hechas a mano",
    products: [
      {
        id: "1",
        name: "Pulsera de acero",
        price: 2000,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9sppMPWw2LJmDAfJK5asifV1SiEWeB6ugFsluFCjcc6sUS3bX8qzjdQFTgNAFofkMN04&usqp=CAU"
      },
      {
        id: "2",
        name: "Pulsera de hierro",
        price: 2500,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9sppMPWw2LJmDAfJK5asifV1SiEWeB6ugFsluFCjcc6sUS3bX8qzjdQFTgNAFofkMN04&usqp=CAU"
      },
      {
        id: "3",
        name: "Pulsera de plata",
        price: 3000,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9sppMPWw2LJmDAfJK5asifV1SiEWeB6ugFsluFCjcc6sUS3bX8qzjdQFTgNAFofkMN04&usqp=CAU"
      },
      {
        id: "4",
        name: "Pulsera de acero",
        price: 2000,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9sppMPWw2LJmDAfJK5asifV1SiEWeB6ugFsluFCjcc6sUS3bX8qzjdQFTgNAFofkMN04&usqp=CAU"
      },
      {
        id: "5",
        name: "Pulsera de hierro",
        price: 2500,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9sppMPWw2LJmDAfJK5asifV1SiEWeB6ugFsluFCjcc6sUS3bX8qzjdQFTgNAFofkMN04&usqp=CAU"
      },
      {
        id: "6",
        name: "Pulsera de plata",
        price: 3000,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9sppMPWw2LJmDAfJK5asifV1SiEWeB6ugFsluFCjcc6sUS3bX8qzjdQFTgNAFofkMN04&usqp=CAU"
      }
    ]
  }
]

export default function CollectionsPage() {
  return (
    <main>
      <h1 className="text-4xl md:text-5xl font-bold text-center">Colecciones</h1>
      {mockCollections.map((collection) => (
        <section key={collection.id} className="flex flex-col gap-10 w-[90%] items-center justify-center p-4 text-rich mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center">{collection.name}</h2>
          <h3 className="text-xl md:text-2xl font-semibold text-center">{collection.description}</h3>
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {collection.products.map((product) => (
                <CarouselItem className="md:basis-1/2 lg:basis-1/3 pl-2 md:pl-4" key={product.id}>
                  <CardProduct product={product} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>
      ))}
    </main>
  )
}