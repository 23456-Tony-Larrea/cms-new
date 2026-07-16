import { symptoms } from '../data/content'
import { useReveal } from '../hooks/useReveal'
import Icon from './Icon'

export default function Problem() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section id="problema" className="bg-white py-20 sm:py-28">
      <div ref={ref} className={`container-x reveal ${visible ? 'is-visible' : ''}`}>
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow bg-ink-100 text-ink-600">¿Te suena familiar?</span>
          <h2 className="section-title mt-5">
            ¿Sientes <span className="text-gradient">cansancio físico y mental</span>?
          </h2>
          <p className="mt-4 text-lg text-ink-600">
            Las rutinas exigentes nos desgastan. Si reconoces estas señales, es momento de actuar.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {symptoms.map((s, i) => (
            <article
              key={s.title}
              className="group relative overflow-hidden rounded-3xl border border-ink-100 bg-cream-50 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-red-200 hover:shadow-xl hover:shadow-red-600/10"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gradient-to-br from-red-50 to-sunrise-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-red-50 to-sunrise-100 text-red-600 transition-transform duration-300 group-hover:scale-110">
                <Icon name={s.icon} className="h-7 w-7" />
              </div>
              <h3 className="relative mt-5 text-lg font-bold text-ink-900">{s.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-ink-600">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
