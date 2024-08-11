import Image from "next/image"

export default function Hero() {
  return (
    <section className="flex justify-center gap-10 w-full items-center p-4 text-rich">
      <div className="flex flex-col gap-3 items-start">
        <h1 className="text-4xl font-bold">
          Luce tu <span className="text-primary text-wrap">esencia</span> con nuestra bisutería artesanal.
        </h1>
        <button className="bg-primary text-rich text-xl font-bold px-8 py-4 rounded-lg">
          Ir a la tienda
        </button>
      </div>
      <div className="flex flex-col gap-3 items-start">
        <Image src={"https://m.media-amazon.com/images/I/61P1y4UO9UL.jpg"} alt="imagen" width={500} height={500} />
      </div>
    </section>
  )
}