import Collections from "./components/Collections";
import Header from "./components/Header";
import Hero from "./components/Hero";
import lora from "./fonts/Lora";



export default function Home() {
  return (
    <main className={`flex flex-col w-[90%] mx-auto bg-ghost ${lora.className}`}>
      <Header />
      <Hero />
      <Collections />
    </main>
  );
}
