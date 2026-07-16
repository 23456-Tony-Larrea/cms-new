export default function Footer() {
  return (
    <footer className="bg-ink-900 text-ink-300">
      <div className="container-x py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <a href="#top" className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-600 font-display text-lg font-extrabold text-white">G</span>
              <span className="font-display text-xl font-extrabold text-white">Vitacap <span className="text-brand-500">G</span></span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-400">
              El suplemento 3-en-1 diseñado para mujeres después de los 40. Energía, equilibrio hormonal y metabolismo en una sola cápsula diaria.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white">Navegación</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#que-es" className="hover:text-brand-400">Qué es</a></li>
              <li><a href="#beneficios" className="hover:text-brand-400">Beneficios</a></li>
              <li><a href="#ingredientes" className="hover:text-brand-400">Ingredientes</a></li>
              <li><a href="#faq" className="hover:text-brand-400">Preguntas frecuentes</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white">Contacto</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>hola@vitacapg.com</li>
              <li>Lun-Vie · 9h-18h</li>
              <li className="pt-2">
                <a href="#cta" className="btn-primary !px-5 !py-2.5 !text-sm">Comprar ahora</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ink-800 pt-6 text-xs text-ink-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Vitacap G. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-400">Aviso legal</a>
            <a href="#" className="hover:text-brand-400">Privacidad</a>
            <a href="#" className="hover:text-brand-400">Términos</a>
          </div>
        </div>

        <p className="mt-6 text-xs leading-relaxed text-ink-600">
          * Estos productos no están destinados a diagnosticar, tratar, curar o prevenir ninguna enfermedad. Consulta a tu médico antes de usar suplementos, especialmente si estás embarazada, lactando o bajo tratamiento médico.
        </p>
      </div>
    </footer>
  )
}
