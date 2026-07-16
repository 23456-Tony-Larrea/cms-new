import { problems } from '../data/content'
import { useReveal } from '../hooks/useReveal'

export default function Problem() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section id="problema" className="bg-ink-50 py-20 sm:py-28">
      <div ref={ref} className={`container-x reveal ${visible ? 'is-visible' : ''}`}>
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow bg-ink-100 text-ink-600">¿Te sientes identificada?</span>
          <h2 className="section-title mt-5">
            Después de los 40, tu cuerpo <span className="text-brand-600">ya no responde igual</span>
          </h2>
          <p className="mt-4 text-lg text-ink-600">
            No es tu imaginación. Los cambios hormonales, la caída de energía y el metabolismo lento son reales. Pero tienen solución.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((p, i) => (
            <article
              key={p.title}
              className="group rounded-2xl border border-ink-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-2xl transition-transform duration-300 group-hover:scale-110">
                {p.emoji}
              </div>
              <h3 className="mt-4 text-lg font-bold text-ink-900">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{p.desc}</p>
            </article>
          ))}
        </div>

        <p className="mt-12 text-center text-ink-500">
          Si reconoces <strong className="text-ink-800">2 o más</strong> de estas señales, tu cuerpo te está pidiendo ayuda.
        </p>
      </div>
    </section>
  )
}
