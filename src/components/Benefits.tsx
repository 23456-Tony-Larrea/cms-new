import { benefits } from '../data/content'
import { useReveal } from '../hooks/useReveal'
import Icon from './Icon'

export default function Benefits() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section id="beneficios" className="relative overflow-hidden bg-ink-900 py-20 text-white sm:py-28">
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-red-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-sunrise-500/15 blur-3xl" />

      <div ref={ref} className={`container-x relative reveal ${visible ? 'is-visible' : ''}`}>
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-sunrise-400">
            Beneficios
          </span>
          <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
            Cinco beneficios que <span className="text-gradient">transforman tu día</span>
          </h2>
          <p className="mt-4 text-lg text-ink-300">
            Cada cápsula está formulada para trabajar en los cinco frentes que más importan cuando llevas una rutina exigente.
          </p>
        </div>

        {/* Grid: 5 cards — first row 3, second row 2 centered */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.slice(0, 3).map((b) => (
            <BenefitCard key={b.title} benefit={b} />
          ))}
        </div>
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:max-w-4xl lg:mx-auto">
          {benefits.slice(3).map((b) => (
            <BenefitCard key={b.title} benefit={b} />
          ))}
        </div>
      </div>
    </section>
  )
}

function BenefitCard({ benefit: b }: { benefit: typeof benefits[number] }) {
  return (
    <article className="group glass-card relative overflow-hidden p-7 text-white transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/10">
      <div className={`absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br ${b.gradient} opacity-20 blur-xl transition-opacity duration-300 group-hover:opacity-40`} />
      <div className={`relative grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${b.gradient} text-2xl shadow-lg transition-transform duration-300 group-hover:scale-110`}>
        {b.emoji}
      </div>
      <h3 className="relative mt-5 text-xl font-bold text-white">{b.title}</h3>
      <p className="relative mt-2 text-sm leading-relaxed text-ink-300">{b.desc}</p>
    </article>
  )
}
