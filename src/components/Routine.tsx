import { routineSteps } from '../data/content'
import { useReveal } from '../hooks/useReveal'

export default function Routine() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section id="rutina" className="bg-white py-20 sm:py-28">
      <div ref={ref} className={`container-x reveal ${visible ? 'is-visible' : ''}`}>
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Rutina diaria</span>
          <h2 className="section-title mt-5">
            Una <span className="text-gradient">cápsula al día</span>
          </h2>
          <p className="mt-4 text-lg text-ink-600">
            Tan simple como incorporarlo en tu mañana. Vitacap G hace el resto.
          </p>
        </div>

        {/* Timeline */}
        <div className="mt-16">
          {/* Horizontal line on desktop */}
          <div className="relative">
            <div className="absolute left-0 right-0 top-7 hidden h-0.5 bg-gradient-to-r from-red-600 via-terracota-400 to-sunrise-500 lg:block" />

            <div className="grid gap-8 lg:grid-cols-4 lg:gap-4">
              {routineSteps.map((s, i) => (
                <div
                  key={s.step}
                  className="relative flex flex-col items-center text-center"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  {/* Node */}
                  <div className="relative z-10 grid h-14 w-14 place-items-center rounded-full bg-gradient-energy text-2xl shadow-xl shadow-red-600/20 ring-4 ring-white">
                    {s.icon}
                  </div>
                  {/* Arrow on mobile */}
                  {i < routineSteps.length - 1 && (
                    <div className="my-2 h-6 w-0.5 bg-gradient-to-b from-red-300 to-sunrise-300 lg:hidden" />
                  )}
                  <div className="mt-4 lg:mt-6">
                    <span className="font-display text-sm font-extrabold text-red-600">{s.step}</span>
                    <h3 className="mt-1 text-lg font-bold text-ink-900">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-600">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
