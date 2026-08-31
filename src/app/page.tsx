import { Header } from "@/components/header";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-zinc-950 text-zinc-50">
      <Header />
      <main className="flex-1" />
    </div>
  );
}
