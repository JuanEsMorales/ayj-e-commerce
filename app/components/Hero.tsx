import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row justify-center gap-10 w-full relative items-center p-4 text-rich">
      <div className="flex flex-col gap-3 items-center absolute md:static top-[calc(50%-140px)] md:items-start max-w-[630px] z-10">
        <h1 className="text-3xl md:text-4xl text-center md:text-left font-bold">
          Luce tu <span className="text-primary text-wrap">esencia</span> con nuestra bisutería artesanal.
        </h1>
        <Link href={"/products"} className="bg-primaryPage text-rich text-lg md:text-xl font-bold px-6 md:px-8 py-3 md:py-4 rounded-lg">
          Ir a la tienda
        </Link>
      </div>
      <div className="flex opacity-90 md:opacity-100 flex-col gap-3 items-start">
        <Image src={"https://m.media-amazon.com/images/I/61P1y4UO9UL.jpg"} alt="imagen" width={500} height={500} />
      </div>
    </section>
  )
}