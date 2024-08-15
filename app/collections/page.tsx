import CarouselProducts from "../components/ui/Carousel"

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
      }
    ]
  },
  {
    id: 3,
    name: "Pulseras",
    description: "coleccion de pulseras hechas a mano",
    products: [
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
  }
]

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