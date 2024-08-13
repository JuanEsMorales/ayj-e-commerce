import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row justify-center gap-10 w-full items-center p-4 text-rich">
      <div className="flex flex-col gap-3 items-center md:items-start max-w-[630px]">
        <h1 className="text-3xl md:text-4xl text-center md:text-left font-bold">
          Luce tu <span className="text-primary text-wrap">esencia</span> con nuestra bisutería artesanal.
        </h1>
        <Link href={"/products"} className="bg-primaryPage text-rich text-xl font-bold px-8 py-4 rounded-lg">
          Ir a la tienda
        </Link>
      </div>
      <div className="flex flex-col gap-3 items-start">
        <Image src={"https://m.media-amazon.com/images/I/61P1y4UO9UL.jpg"} alt="imagen" width={500} height={500} />
      </div>
    </section>
  )
}