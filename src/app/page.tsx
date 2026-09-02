import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Modalities } from "@/components/modalities";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-zinc-950 text-zinc-50">
      <Header />
      <main className="flex-1">
        <Hero />
        <Modalities />
      </main>
    </div>
  );
}
