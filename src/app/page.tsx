import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Hours } from "@/components/hours";
import { Modalities } from "@/components/modalities";
import { Plans } from "@/components/plans";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-zinc-950 text-zinc-50">
      <Header />
      <main className="flex-1">
        <Hero />
        <Modalities />
        <Plans />
        <Hours />
      </main>
      <Footer />
    </div>
  );
}
