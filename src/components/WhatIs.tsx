import { useReveal } from '../hooks/useReveal'

const pillars = [
  {
    tag: 'Energía',
    title: 'Recarga celular',
    desc: 'El Shilajit y las vitaminas B reactivan tus mitocondrias para que produzcan energía constante, sin picos ni caídas.',
    color: 'from-brand-500 to-brand-300',
  },
  {
    tag: 'Hormonal',
    title: 'Equilibrio natural',
    desc: 'Ashwagandha y Dong Quai modulan cortisol y estrógenos para reducir sofocos, irritabilidad y cambios de humor.',
    color: 'from-leaf-500 to-leaf-400',
  },
  {
    tag: 'Metabolismo',
    title: 'Quema natural',
    desc: 'Yodo, zinc y cromo activan tu tiroides y estabilizan el azúcar para que tu cuerpo queme grasa sin esfuerzo extra.',
    color: 'from-ink-700 to-ink-500',
  },
]

export default function WhatIs() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section id="que-es" className="bg-white py-20 sm:py-28">
      <div ref={ref} className={`container-x reveal ${visible ? 'is-visible' : ''}`}>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="relative">
            <div className="relative overflow-hidden rounded-[2rem] shadow-2xl shadow-ink-900/10">
              <img
                src="https://images.pexels.com/photos/3683107/pexels-photo-3683107.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Vitacap G cápsulas naturales"
                className="h-[460px] w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 rounded-2xl bg-brand-600 px-6 py-4 text-white shadow-xl sm:-right-6">
              <p className="font-display text-3xl font-extrabold">3-en-1</p>
              <p className="text-xs text-brand-100">Una sola cápsula</p>
            </div>
          </div>

          <div>
            <span className="eyebrow">Qué es Vitacap G</span>
            <h2 className="section-title mt-5">
              Una sola cápsula que trabaja en <span className="text-brand-600">3 frentes</span> a la vez
            </h2>
            <p className="mt-4 text-lg text-ink-600">
              No necesitas 5 frascos distintos. Vitacap G combina lo mejor de la naturaleza y la ciencia en una fórmula sinérgica que ataca las 3 causas raíz del deterioro después de los 40.
            </p>

            <div className="mt-8 space-y-5">
              {pillars.map((p) => (
                <div
                  key={p.tag}
                  className="flex gap-4 rounded-2xl border border-ink-100 bg-ink-50/60 p-5 transition-colors hover:border-brand-200 hover:bg-white"
                >
                  <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${p.color} text-white`}>
                    <span className="text-sm font-extrabold">{p.tag[0]}</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-600">{p.tag}</span>
                      <span className="h-px flex-1 bg-ink-200" />
                    </div>
                    <h3 className="mt-1 text-lg font-bold text-ink-900">{p.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-600">{p.desc}</p>
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
