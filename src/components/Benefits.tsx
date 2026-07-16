import { benefits } from '../data/content'
import { useReveal } from '../hooks/useReveal'

export default function Benefits() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section id="beneficios" className="relative overflow-hidden bg-ink-900 py-20 text-white sm:py-28">
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-brand-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-leaf-600/20 blur-3xl" />

      <div ref={ref} className={`container-x relative reveal ${visible ? 'is-visible' : ''}`}>
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-200">
            Beneficios reales
          </span>
          <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
            Lo que sientes cuando tu cuerpo vuelve a <span className="text-brand-400">funcionar</span>
          </h2>
          <p className="mt-4 text-lg text-ink-300">
            No es magia. Es nutrición inteligente que le da a tu cuerpo lo que necesita en esta nueva etapa.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <article
              key={b.title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/40 hover:bg-white/10"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-500/20 text-2xl transition-transform duration-300 group-hover:scale-110">
                {b.icon}
              </div>
              <h3 className="mt-4 text-lg font-bold text-white">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-300">{b.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
