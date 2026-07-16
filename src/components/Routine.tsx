import { routineSteps } from '../data/content'
import { useReveal } from '../hooks/useReveal'

export default function Routine() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section id="rutina" className="bg-brand-50 py-20 sm:py-28">
      <div ref={ref} className={`container-x reveal ${visible ? 'is-visible' : ''}`}>
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Tu rutina diaria</span>
          <h2 className="section-title mt-5">Tan fácil como <span className="text-brand-600">una cápsula al día</span></h2>
          <p className="mt-4 text-lg text-ink-600">
            Sin horarios complicados ni múltiples tomas. Solo necesitas 5 segundos cada mañana.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {routineSteps.map((s) => (
            <article
              key={s.step}
              className="relative rounded-2xl border border-ink-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="font-display text-5xl font-extrabold text-brand-100">{s.step}</span>
              <h3 className="mt-2 text-lg font-bold text-ink-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{s.desc}</p>
              <span className="mt-4 inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                {s.time}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
