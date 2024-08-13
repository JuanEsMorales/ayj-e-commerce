import Collections from "./components/Collections";
import Hero from "./components/Hero";



export default function Home() {
  return (
    <main className={`flex flex-col w-[90%] mx-auto bg-ghost`}>
      <Hero />
      <Collections />
    </main>
  );
}
