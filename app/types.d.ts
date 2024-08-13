export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
}

export type Collection = {
  id: number;
  name: string;
  description: string;
  image: string;
  products?: Product[];
}