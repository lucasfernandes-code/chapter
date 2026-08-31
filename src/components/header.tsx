export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-zinc-800/80 bg-zinc-950/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-lg font-semibold tracking-tight">
          Força<span className="text-lime-400">.</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-zinc-300 sm:flex">
          <a href="#modalities" className="hover:text-white">
            Modalidades
          </a>
          <a href="#plans" className="hover:text-white">
            Planos
          </a>
          <a href="#hours" className="hover:text-white">
            Horários
          </a>
        </nav>
        <a
          href="#plans"
          className="rounded-full bg-lime-400 px-4 py-2 text-sm font-semibold text-zinc-950 hover:bg-lime-300"
        >
          Começar agora
        </a>
      </div>
    </header>
  );
}
