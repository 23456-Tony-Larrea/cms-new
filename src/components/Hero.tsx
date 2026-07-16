export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-brand-200/50 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-leaf-400/20 blur-3xl" />

      <div className="container-x relative grid items-center gap-12 lg:grid-cols-2">
        <div className="animate-fade-up">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            Fórmula 3-en-1 · Mujeres 40+
          </span>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.1] text-ink-900 sm:text-5xl lg:text-6xl">
            Recupera tu energía, equilibra tus hormonas y acelera tu metabolismo
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-600">
            Vitacap G reúne <strong className="text-ink-800">Shilajit, Ashwagandha y 16 nutrientes esenciales</strong> en una sola cápsula diaria. Diseñado para mujeres que quieren sentirse jóvenes, fuertes y plenas después de los 40.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#cta" className="btn-primary">
              Empezar hoy
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#que-es" className="btn-ghost">Conoce la fórmula</a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-ink-500">
            <div className="flex items-center gap-2">
              <span className="text-leaf-600">✓</span> 100% natural
            </div>
            <div className="flex items-center gap-2">
              <span className="text-leaf-600">✓</span> Sin OMG
            </div>
            <div className="flex items-center gap-2">
              <span className="text-leaf-600">✓</span> Vegano friendly
            </div>
            <div className="flex items-center gap-2">
              <span className="text-leaf-600">✓</span> +10.000 mujeres
            </div>
          </div>
        </div>

        <div className="relative animate-fade-in [animation-delay:200ms]">
          <div className="relative mx-auto max-w-md">
            <div className="absolute inset-0 -rotate-6 rounded-[2.5rem] bg-gradient-to-tr from-brand-500 to-brand-300 opacity-20 blur-xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/70 shadow-2xl shadow-brand-900/10 backdrop-blur">
              <img
                src="https://images.pexels.com/photos/3820468/pexels-photo-3820468.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Mujer madura con vitalidad y energía"
                className="h-[420px] w-full object-cover sm:h-[480px]"
                loading="eager"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-900/70 to-transparent p-6">
                <p className="text-white/90 text-sm font-medium">
                  "A los 47 me sentía de 60. Hoy vuelvo a tener energía para todo."
                </p>
                <p className="mt-1 text-xs text-white/70">Marta R. · Madrid</p>
              </div>
            </div>

            <div className="absolute -left-6 top-10 hidden animate-float rounded-2xl bg-white px-4 py-3 shadow-xl sm:block">
              <p className="text-xs font-semibold text-ink-500">Energía</p>
              <p className="text-lg font-extrabold text-leaf-600">+82%</p>
            </div>
            <div className="absolute -right-6 bottom-24 hidden animate-float [animation-delay:1.5s] rounded-2xl bg-white px-4 py-3 shadow-xl sm:block">
              <p className="text-xs font-semibold text-ink-500">Sofocos</p>
              <p className="text-lg font-extrabold text-brand-600">-74%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
