export function Hero() {
  return (
    <section
      id="home"
      className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-20 sm:py-28"
    >
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-lime-400">
        Academia em São Paulo
      </p>
      <h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-6xl">
        Treine. Evolua. Supere seus limites.
      </h1>
      <p className="max-w-xl text-lg leading-8 text-zinc-400">
        Estrutura completa, treinos objetivos e um time pronto para te
        acompanhar do primeiro dia até o próximo recorde.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <a
          href="#plans"
          className="inline-flex h-12 items-center justify-center rounded-full bg-lime-400 px-6 font-semibold text-zinc-950 hover:bg-lime-300"
        >
          Ver planos
        </a>
        <a
          href="#hours"
          className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-700 px-6 font-medium text-zinc-100 hover:border-zinc-500"
        >
          Horários e endereço
        </a>
      </div>
    </section>
  );
}
