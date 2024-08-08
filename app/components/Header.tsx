import Link from "next/link";
import SearchIcon from "@/app/components/icons/SearchIcon";
import CartIcon from "@/app/components/icons/CartIcon";
import UserIcon from "@/app/components/icons/UserIcon";

export default function Header() {
  return (
    <header className="flex justify-between gap-3 w-full items-center p-4 text-primary font-bold">
      <h1 className="text-2xl font-bold">
        <Link href="/">A&J Bisutería</Link>
      </h1>
      <ul className="flex gap-4">
        <li><Link href={"/collections"}>Colecciones</Link></li>
        <li><Link href={"/products"}>Productos</Link></li>
        <li><Link href={"/contact"}>Contacto</Link></li>
      </ul>
      <ul className="flex gap-4">
        <li><button><SearchIcon /></button></li>
        <li><Link href={"/cart"}><CartIcon /></Link></li>
        <li><Link href={"/user"}><UserIcon /></Link></li>
      </ul>
    </header>
  )
}