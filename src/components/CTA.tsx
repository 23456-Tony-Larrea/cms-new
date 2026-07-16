import { useReveal } from '../hooks/useReveal'

export default function CTA() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section id="cta" className="relative overflow-hidden bg-gradient-to-br from-red-600 via-terracota-400 to-sunrise-500 py-20 text-white sm:py-28">
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-amarillo-400/30 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-vino-700/30 blur-3xl" />

      {/* Floating particles */}
      <div className="pointer-events-none absolute left-1/4 top-10 h-3 w-3 animate-float rounded-full bg-white/40" />
      <div className="pointer-events-none absolute right-1/3 top-20 h-2 w-2 animate-float [animation-delay:1s] rounded-full bg-white/30" />
      <div className="pointer-events-none absolute left-1/3 bottom-12 h-2.5 w-2.5 animate-float [animation-delay:2s] rounded-full bg-white/40" />

      <div ref={ref} className={`container-x relative reveal ${visible ? 'is-visible' : ''}`}>
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-6 grid h-20 w-20 animate-float place-items-center rounded-full bg-white/15 backdrop-blur">
            <span className="font-display text-4xl font-extrabold text-white">G</span>
          </div>
          <h2 className="font-display text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
            Activa tu cuerpo y mente cada día
          </h2>
          <p className="mt-5 text-lg text-white/90">
            Cuando tienes energía, todo fluye. Inclúyelo en tu rutina y siente la diferencia desde la primera semana.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#donde"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-red-600 shadow-2xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-cream-50"
            >
              Inclúyelo en tu rutina
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#donde"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/60 px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
            >
              ¿Dónde comprar?
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/80">
            <span className="flex items-center gap-2">🌿 100% natural</span>
            <span className="flex items-center gap-2">🧪 15 ingredientes activos</span>
            <span className="flex items-center gap-2">💊 1 cápsula al día</span>
          </div>
        </div>
      </div>
    </section>
  )
}
