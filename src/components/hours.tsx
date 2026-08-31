export function Hours() {
  return (
    <section id="hours" className="border-t border-zinc-800/80 bg-zinc-900/40">
      <div className="mx-auto grid w-full max-w-5xl gap-10 px-6 py-20 sm:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight">Horários</h2>
          <dl className="mt-6 space-y-3 text-zinc-300">
            <div className="flex justify-between gap-4 border-b border-zinc-800 py-2">
              <dt>Segunda a sexta</dt>
              <dd>06h às 22h</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-zinc-800 py-2">
              <dt>Sábado</dt>
              <dd>08h às 18h</dd>
            </div>
            <div className="flex justify-between gap-4 py-2">
              <dt>Domingo</dt>
              <dd>08h às 14h</dd>
            </div>
          </dl>
        </div>
        <div id="contact">
          <h2 className="text-3xl font-semibold tracking-tight">
            Venha treinar
          </h2>
          <p className="mt-4 leading-7 text-zinc-400">
            Rua das Palmeiras, 120 — Vila Madalena, São Paulo.
            <br />
            Agende uma aula experimental gratuita.
          </p>
          <a
            href="mailto:contato@forca.academia"
            className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-lime-400 px-6 font-semibold text-zinc-950 hover:bg-lime-300"
          >
            Falar com a academia
          </a>
        </div>
      </div>
    </section>
  );
}
