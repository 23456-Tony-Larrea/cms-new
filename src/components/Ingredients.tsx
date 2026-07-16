import { ingredients } from '../data/content'
import { useReveal } from '../hooks/useReveal'

export default function Ingredients() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section id="ingredientes" className="relative overflow-hidden bg-cream-50 py-20 sm:py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-gradient-to-br from-sunrise-200/30 to-terracota-200/20 blur-3xl" />

      <div ref={ref} className={`container-x relative reveal ${visible ? 'is-visible' : ''}`}>
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Ingredientes</span>
          <h2 className="section-title mt-5">
            15 nutrientes que <span className="text-gradient">tu cuerpo necesita</span>
          </h2>
          <p className="mt-4 text-lg text-ink-600">
            Una fórmula completa con ginseng coreano, aloe, vitaminas y minerales de origen natural.
          </p>
        </div>

        {/* Infographic: central product with orbiting ingredients */}
        <div className="mt-16 flex flex-col items-center">
          {/* Central capsule */}
          <div className="relative z-10 grid place-items-center">
            <div className="absolute h-40 w-40 animate-halo-pulse rounded-full bg-gradient-to-br from-red-600/20 to-sunrise-400/20 blur-2xl" />
            <div className="relative grid h-28 w-28 place-items-center rounded-full bg-gradient-energy shadow-2xl shadow-red-600/30">
              <span className="font-display text-4xl font-extrabold text-white">G</span>
            </div>
          </div>

          {/* Ingredient grid */}
          <div className="mt-12 grid w-full gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {ingredients.map((ing, i) => (
              <div
                key={ing.name}
                className="group flex items-center gap-3 rounded-2xl border border-ink-100 bg-white p-3.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ transitionDelay: `${i * 30}ms` }}
              >
                <span
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-xl text-xs font-bold text-white"
                  style={{ backgroundColor: ing.color }}
                >
                  {ing.name[0]}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-bold text-ink-900">{ing.name}</p>
                  <p className="truncate text-xs text-ink-500">{ing.category}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Connector note */}
          <p className="mt-10 text-center text-sm text-ink-500">
            <span className="font-bold text-ink-700">Sinérgicos:</span> cada ingrediente potencia el efecto de los demás para un resultado completo.
          </p>
        </div>
      </div>
    </section>
  )
}
