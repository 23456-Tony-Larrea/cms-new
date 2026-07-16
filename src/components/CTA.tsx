import { useReveal } from '../hooks/useReveal'

const plans = [
  {
    name: '1 frasco',
    subtitle: 'Para probar',
    price: '34,90€',
    perDay: '1,16€/día',
    duration: '30 días',
    features: ['1 frasco · 30 cápsulas', 'Envío estándar', 'Garantía 30 días'],
    highlight: false,
    cta: 'Empezar',
  },
  {
    name: '3 frascos',
    subtitle: 'El más elegido',
    price: '79,90€',
    perDay: '0,88€/día',
    duration: '90 días',
    features: ['3 frascos · 90 cápsulas', 'Envío GRATIS', 'Ahorra 25%', 'Garantía 60 días', 'Guía nutricional GRATIS'],
    highlight: true,
    cta: 'Quiero el más elegido',
  },
  {
    name: '6 frascos',
    subtitle: 'Tratamiento completo',
    price: '139,90€',
    perDay: '0,77€/día',
    duration: '180 días',
    features: ['6 frascos · 180 cápsulas', 'Envío GRATIS', 'Ahorra 33%', 'Garantía 90 días', 'Guía + Recetario GRATIS'],
    highlight: false,
    cta: 'Tratamiento completo',
  },
]

export default function CTA() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section id="cta" className="relative overflow-hidden bg-gradient-to-b from-brand-600 to-brand-700 py-20 text-white sm:py-28">
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-ink-900/20 blur-3xl" />

      <div ref={ref} className={`container-x relative reveal ${visible ? 'is-visible' : ''}`}>
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-100">
            Oferta de lanzamiento
          </span>
          <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
            Empieza hoy. Tu cuerpo te lo va a agradecer.
          </h2>
          <p className="mt-4 text-lg text-brand-100">
            Elige el plan que mejor se adapta a ti. Todos incluyen garantía de satisfacción.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <article
              key={p.name}
              className={`relative flex flex-col rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 ${
                p.highlight
                  ? 'bg-white text-ink-900 shadow-2xl lg:scale-105'
                  : 'bg-white/10 text-white backdrop-blur hover:bg-white/15'
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-600 px-4 py-1 text-xs font-bold text-white shadow-lg">
                  MÁS POPULAR
                </span>
              )}
              <p className={`text-xs font-semibold uppercase tracking-wider ${p.highlight ? 'text-brand-600' : 'text-brand-200'}`}>
                {p.subtitle}
              </p>
              <h3 className="mt-1 font-display text-2xl font-extrabold">{p.name}</h3>
              <div className="mt-4 flex items-end gap-2">
                <span className="font-display text-4xl font-extrabold">{p.price}</span>
                <span className={`mb-1 text-sm ${p.highlight ? 'text-ink-500' : 'text-brand-200'}`}>{p.perDay}</span>
              </div>
              <p className={`mt-1 text-sm ${p.highlight ? 'text-ink-500' : 'text-brand-200'}`}>Tratamiento de {p.duration}</p>

              <ul className="mt-6 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={p.highlight ? '#16a34a' : '#fff'} strokeWidth="2.5">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`mt-7 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-base font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
                  p.highlight
                    ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/30 hover:bg-brand-700'
                    : 'bg-white text-brand-700 hover:bg-brand-50'
                }`}
              >
                {p.cta}
              </a>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-brand-100">
          🔒 Pago seguro · 🚚 Envío en 24-48h · ↩️ Garantía de devolución · 🌿 100% natural
        </p>
      </div>
    </section>
  )
}
