import SearchIcon from "@/app/components/icons/SearchIcon";
import CartIcon from "@/app/components/icons/CartIcon";
import UserIcon from "@/app/components/icons/UserIcon";
import { Link } from 'next-view-transitions'
import "./Header.css";

export default function Header() {
  return (
    <header className="flex justify-between gap-3 items-center p-4 text-primaryPage font-bold sticky top-0 z-50 bg-white/70 backdrop-blur-sm w-[90%] mx-auto">
      <h1 className="text-2xl font-bold">
        <Link href="/">A<span className="text-rich">&</span>J Bisutería</Link>
      </h1>
      <ul className="gap-4 nav-links hidden md:flex">
        <li><Link href={"/"}>Inicio</Link></li>
        <li><Link href={"/collections"}>Colecciones</Link></li>
        <li><Link href={"/products"}>Productos</Link></li>
        <li><Link href={"/contact"}>Contacto</Link></li>
      </ul>
      <ul className="gap-4 nav-icons hidden md:flex">
        <li><button><SearchIcon /></button></li>
        <li className="relative"><Link href={"/cart"}><CartIcon /><span className="absolute bottom-0 right-0 text-[10px] font-bold bg-rich text-primaryPage flex items-center justify-center w-4 h-4 rounded-[100%]">+9</span></Link></li>
        <li className="rounded-full text-rich bg-primaryPage p-1"><Link href={"/user"}><UserIcon /></Link></li>
      </ul>
      <label htmlFor="hamburger-menu" className="hamburger-menu flex flex-col md:hidden">
        <input type="checkbox" name="hamburger-menu" id="hamburger-menu" />
      </label>
      <nav className="nav-responsive fixed w-full top-0 left-0 gap-4 nav-links bg-white/90 backdrop-blur-xl md:hidden pb-4">
        <ul className="flex flex-col justify-center items-center gap-4 text-xl mt-4">
          <li><Link href={"/"}>Inicio</Link></li>
          <li><Link href={"/collections"}>Colecciones</Link></li>
          <li><Link href={"/products"}>Productos</Link></li>
          <li><Link href={"/contact"}>Contacto</Link></li>
        </ul>
        <ul className="flex justify-center gap-4 mt-4">
          <li><button><SearchIcon /></button></li>
          <li className="relative"><Link href={"/cart"}><CartIcon /><span className="absolute bottom-0 right-0 text-[10px] font-bold bg-rich text-primaryPage flex items-center justify-center w-4 h-4 rounded-[100%]">+9</span></Link></li>
          <li className="rounded-full text-rich bg-primaryPage p-1"><Link href={"/user"}><UserIcon /></Link></li>
        </ul>
      </nav>
    </header>
  )
}