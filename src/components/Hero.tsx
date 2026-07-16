import { activities } from '../data/content'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-cream-50 pt-28 pb-20 sm:pt-36 sm:pb-32">
      {/* Background gradient orbs */}
      <div className="pointer-events-none absolute -right-32 -top-20 h-96 w-96 rounded-full bg-gradient-to-br from-sunrise-300/40 to-amarillo-300/30 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 top-40 h-96 w-96 rounded-full bg-gradient-to-br from-red-200/30 to-terracota-200/30 blur-3xl" />

      <div className="container-x relative grid items-center gap-12 lg:grid-cols-2">
        {/* Left: copy */}
        <div className="animate-fade-up">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-red-600" />
            Suplemento alimenticio · Energía diaria
          </span>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] text-ink-900 sm:text-5xl lg:text-6xl">
            Activa tu <span className="text-gradient">cuerpo y mente</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-600">
            Vitacap G ayuda a combatir el cansancio físico y mental para que sigas disfrutando cada momento de tu día.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#cta" className="btn-primary">
              Inclúyelo en tu rutina
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#donde" className="btn-ghost">¿Dónde comprar?</a>
          </div>

          {/* Activities strip */}
          <div className="mt-10">
            <p className="text-xs font-bold uppercase tracking-wider text-ink-400">Cuando tienes energía, todo fluye</p>
            <div className="mt-3 flex flex-wrap gap-3">
              {activities.map((a) => (
                <span
                  key={a.label}
                  className="inline-flex items-center gap-2 rounded-full border border-ink-100 bg-white px-4 py-2 text-sm font-medium text-ink-600 shadow-sm transition-all hover:-translate-y-0.5 hover:border-red-200 hover:text-red-600"
                >
                  <span className="text-lg">{a.emoji}</span>
                  {a.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: visual with energy halo */}
        <div className="relative animate-fade-in [animation-delay:200ms]">
          <div className="relative mx-auto max-w-md">
            {/* Energy halo rings */}
            <div className="absolute inset-0 -z-10 grid place-items-center">
              <div className="h-80 w-80 animate-halo-pulse rounded-full bg-gradient-to-br from-sunrise-300/50 to-amarillo-300/30 blur-2xl" />
            </div>
            <div className="absolute inset-0 -z-10 grid place-items-center">
              <div className="h-72 w-72 animate-spin-slow rounded-full border-2 border-dashed border-sunrise-300/40" />
            </div>

            {/* Main image card */}
            <div className="relative overflow-hidden rounded-[2.5rem] border-4 border-white bg-white shadow-2xl shadow-red-900/15">
              <img
                src="https://images.pexels.com/photos/3762940/pexels-photo-3762940.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Persona activa llena de energía con Vitacap G"
                className="h-[440px] w-full object-cover sm:h-[500px]"
                loading="eager"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-vino-700/30 via-transparent to-sunrise-300/10" />

              {/* Floating product badge */}
              <div className="absolute right-4 top-4 animate-float rounded-2xl bg-white/90 px-4 py-3 shadow-xl backdrop-blur">
                <div className="flex items-center gap-2">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-energy text-lg font-extrabold text-white">G</span>
                  <div>
                    <p className="text-xs font-bold text-ink-900">Vitacap G</p>
                    <p className="text-[10px] text-ink-500">Cápsulas · 30 días</p>
                  </div>
                </div>
              </div>

              {/* Bottom energy stat */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
                <div className="rounded-2xl bg-white/90 px-4 py-2.5 shadow-xl backdrop-blur">
                  <p className="text-xs font-semibold text-ink-500">Energía diaria</p>
                  <p className="text-lg font-extrabold text-gradient">100%</p>
                </div>
                <div className="rounded-2xl bg-white/90 px-4 py-2.5 shadow-xl backdrop-blur">
                  <p className="text-xs font-semibold text-ink-500">Cansancio</p>
                  <p className="text-lg font-extrabold text-red-600">↓ reducido</p>
                </div>
              </div>
            </div>

            {/* Floating particles */}
            <div className="absolute -left-3 top-20 h-3 w-3 animate-float rounded-full bg-sunrise-400 shadow-lg" />
            <div className="absolute -right-2 top-32 h-2 w-2 animate-float [animation-delay:1s] rounded-full bg-terracota-400 shadow-lg" />
            <div className="absolute left-8 -bottom-2 h-2.5 w-2.5 animate-float [animation-delay:2s] rounded-full bg-amarillo-400 shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}
