import { useReveal } from '../hooks/useReveal'

export default function WhatIs() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section id="que-es" className="relative overflow-hidden bg-gradient-to-b from-cream-50 to-white py-20 sm:py-28">
      <div className="pointer-events-none absolute -right-20 top-20 h-72 w-72 rounded-full bg-sunrise-200/20 blur-3xl" />

      <div ref={ref} className={`container-x relative reveal ${visible ? 'is-visible' : ''}`}>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-sm">
              {/* Halo behind product */}
              <div className="absolute inset-0 -z-10 grid place-items-center">
                <div className="h-64 w-64 animate-halo-pulse rounded-full bg-gradient-to-br from-sunrise-300/40 to-terracota-200/30 blur-2xl" />
              </div>

              {/* Product image card */}
              <div className="relative overflow-hidden rounded-[2.5rem] border-4 border-white shadow-2xl shadow-red-900/15">
                <img
                  src="https://images.pexels.com/photos/3683107/pexels-photo-3683107.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Vitacap G cápsulas con ginseng coreano y vitaminas"
                  className="h-[440px] w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-vino-700/20 via-transparent to-transparent" />
              </div>

              {/* Floating ingredient badges */}
              <div className="absolute -left-4 top-12 animate-float rounded-2xl bg-white px-4 py-2.5 shadow-xl">
                <p className="text-xs font-bold text-red-600">🌿 Ginseng Coreano</p>
              </div>
              <div className="absolute -right-4 bottom-16 animate-float [animation-delay:1.5s] rounded-2xl bg-white px-4 py-2.5 shadow-xl">
                <p className="text-xs font-bold text-durazno-600">🧪 Vitaminas + Minerales</p>
              </div>
              <div className="absolute -right-2 top-6 animate-float [animation-delay:0.8s] rounded-2xl bg-white px-3 py-2 shadow-xl">
                <p className="text-xs font-bold text-terracota-500">🌵 Aloe</p>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="order-1 lg:order-2">
            <span className="eyebrow">Qué es Vitacap G</span>
            <h2 className="section-title mt-5">
              Un suplemento que <span className="text-gradient">te impulsa</span> cada día
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-600">
              Vitacap G es un suplemento alimenticio en cápsulas elaborado con <strong className="text-ink-800">ginseng coreano natural</strong>, <strong className="text-ink-800">extracto de aloe</strong>, <strong className="text-ink-800">vitaminas y minerales</strong>.
            </p>
            <p className="mt-3 text-lg leading-relaxed text-ink-600">
              Una fórmula pensada para adultos activos que necesitan mantener su energía, enfoque y bienestar durante toda la jornada.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="rounded-2xl border border-ink-100 bg-white p-4 text-center">
                <p className="font-display text-3xl font-extrabold text-gradient">15</p>
                <p className="mt-1 text-xs font-medium text-ink-500">Ingredientes activos</p>
              </div>
              <div className="rounded-2xl border border-ink-100 bg-white p-4 text-center">
                <p className="font-display text-3xl font-extrabold text-gradient">1</p>
                <p className="mt-1 text-xs font-medium text-ink-500">Cápsula al día</p>
              </div>
              <div className="rounded-2xl border border-ink-100 bg-white p-4 text-center">
                <p className="font-display text-3xl font-extrabold text-gradient">100%</p>
                <p className="mt-1 text-xs font-medium text-ink-500">Natural</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
