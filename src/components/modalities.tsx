const modalities = [
  {
    title: "Musculação",
    description:
      "Equipamentos completos e acompanhamento para você treinar com segurança.",
  },
  {
    title: "Funcional",
    description:
      "Aulas dinâmicas para ganhar força, mobilidade e condicionamento.",
  },
  {
    title: "Aulas coletivas",
    description:
      "HIIT, alongamento e treinos em grupo para manter a motivação alta.",
  },
];

export function Modalities() {
  return (
    <section
      id="modalities"
      className="border-t border-zinc-800/80 bg-zinc-900/40"
    >
      <div className="mx-auto grid w-full max-w-5xl gap-8 px-6 py-20 sm:grid-cols-3">
        {modalities.map((item) => (
          <article key={item.title} className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="leading-7 text-zinc-400">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
