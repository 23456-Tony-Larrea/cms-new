import { testimonials } from '../data/content'
import { useReveal } from '../hooks/useReveal'

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5 text-brand-500">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={i < n ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2l3 6.5 7 .9-5 4.8 1.2 7L12 17.8 5.8 21.2 7 14.2 2 9.4l7-.9z" strokeLinejoin="round" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section id="testimonios" className="bg-ink-50 py-20 sm:py-28">
      <div ref={ref} className={`container-x reveal ${visible ? 'is-visible' : ''}`}>
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Testimonios</span>
          <h2 className="section-title mt-5">
            +10.000 mujeres ya <span className="text-brand-600">recuperaron su versión mejor</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="flex flex-col rounded-2xl border border-ink-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <Stars n={t.rating} />
              <p className="mt-4 flex-1 text-base leading-relaxed text-ink-700">"{t.text}"</p>
              <div className="mt-6 flex items-center gap-3 border-t border-ink-100 pt-4">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-brand-100 font-bold text-brand-700">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-sm font-bold text-ink-900">{t.name}</p>
                  <p className="text-xs text-ink-500">{t.age} años · {t.city}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
