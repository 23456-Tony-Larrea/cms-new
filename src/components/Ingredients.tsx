import { ingredients } from '../data/content'
import { useReveal } from '../hooks/useReveal'

export default function Ingredients() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section id="ingredientes" className="bg-white py-20 sm:py-28">
      <div ref={ref} className={`container-x reveal ${visible ? 'is-visible' : ''}`}>
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Ingredientes</span>
          <h2 className="section-title mt-5">
            18 ingredientes que tu cuerpo <span className="text-brand-600">sí necesita</span>
          </h2>
          <p className="mt-4 text-lg text-ink-600">
            Cada uno con una función clara. Nada de rellenos ni cantidades mínimas disfrazadas de marketing.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ingredients.map((ing) => (
            <article
              key={ing.name}
              className="group rounded-2xl border border-ink-100 bg-ink-50/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:bg-white hover:shadow-md"
            >
              <span className="inline-block rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-700">
                {ing.tag}
              </span>
              <h3 className="mt-3 text-base font-bold text-ink-900">{ing.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{ing.desc}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm text-ink-500">
          <span className="flex items-center gap-2"><span className="text-leaf-600">✓</span> Sin azúcar</span>
          <span className="flex items-center gap-2"><span className="text-leaf-600">✓</span> Sin OMG</span>
          <span className="flex items-center gap-2"><span className="text-leaf-600">✓</span> Sin gluten</span>
          <span className="flex items-center gap-2"><span className="text-leaf-600">✓</span> Sin colorantes</span>
          <span className="flex items-center gap-2"><span className="text-leaf-600">✓</span> Libre de lactosa</span>
        </div>
      </div>
    </section>
  )
}
