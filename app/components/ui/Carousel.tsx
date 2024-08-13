import { Product } from "@/app/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { CardProduct } from "../Card";


export default function CarouselProducts({ products }: { products: Product[] }) {
  return (
    <Carousel>
      <CarouselContent className="-ml-2 md:-ml-4">
        {products.map((product) => (
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 pl-2 md:pl-4" key={product.id}>
            <CardProduct product={product} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}