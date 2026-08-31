const plans = [
  {
    name: "Essencial",
    price: "R$ 99",
    period: "/mês",
    features: ["Musculação livre", "Horário comercial", "Avaliação inicial"],
    highlight: false,
  },
  {
    name: "Força",
    price: "R$ 149",
    period: "/mês",
    features: ["Acesso 7 dias", "Aulas coletivas", "Acompanhamento mensal"],
    highlight: true,
  },
  {
    name: "Elite",
    price: "R$ 219",
    period: "/mês",
    features: [
      "Tudo do plano Força",
      "Personal 2x por mês",
      "Área VIP e vestiário premium",
    ],
    highlight: false,
  },
];

export function Plans() {
  return (
    <section id="plans" className="mx-auto w-full max-w-5xl px-6 py-20">
      <h2 className="text-3xl font-semibold tracking-tight">Planos</h2>
      <p className="mt-3 max-w-lg text-zinc-400">
        Sem fidelidade complicada. Escolha o plano e comece quando quiser.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className={`flex flex-col rounded-2xl border p-6 ${
              plan.highlight
                ? "border-lime-400 bg-zinc-900"
                : "border-zinc-800 bg-zinc-900/50"
            }`}
          >
            <h3 className="text-lg font-semibold">{plan.name}</h3>
            <p className="mt-4 text-3xl font-semibold">
              {plan.price}
              <span className="text-base font-normal text-zinc-400">
                {plan.period}
              </span>
            </p>
            <ul className="mt-6 flex flex-1 flex-col gap-2 text-sm text-zinc-300">
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <a
              href="#contact"
              className={`mt-8 inline-flex h-11 items-center justify-center rounded-full text-sm font-semibold ${
                plan.highlight
                  ? "bg-lime-400 text-zinc-950 hover:bg-lime-300"
                  : "border border-zinc-700 hover:border-zinc-500"
              }`}
            >
              Quero este plano
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
