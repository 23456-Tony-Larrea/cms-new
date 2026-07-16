export default function Footer() {
  const socials = [
    { name: 'Instagram', href: '#', icon: 'M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.3-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2-.1-1.2-.1-1.6-.1-4.8s0-3.6.1-4.8c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4 1.2-.1 1.6-.1 4.8-.1zm0 4.9a4.9 4.9 0 1 0 0 9.8 4.9 4.9 0 0 0 0-9.8zm0 8.1a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4zm6.3-8.3a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0z' },
    { name: 'Facebook', href: '#', icon: 'M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z' },
    { name: 'YouTube', href: '#', icon: 'M23 12s0-3.3-.4-4.9c-.2-.9-.9-1.6-1.8-1.8C19 5 12 5 12 5s-7 0-8.8.3c-.9.2-1.6.9-1.8 1.8C1 8.7 1 12 1 12s0 3.3.4 4.9c.2.9.9 1.6 1.8 1.8 1.8.3 8.8.3 8.8.3s7 0 8.8-.3c.9-.2 1.6-.9 1.8-1.8.4-1.6.4-4.9.4-4.9zM9.8 15.3V8.7l5.7 3.3-5.7 3.3z' },
  ]

  return (
    <footer id="donde" className="bg-ink-900 text-ink-300">
      <div className="container-x py-16">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#top" className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-energy font-display text-xl font-extrabold text-white shadow-lg shadow-red-600/30">G</span>
              <span className="font-display text-xl font-extrabold text-white">Vitacap <span className="text-gradient">G</span></span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-400">
              El suplemento alimenticio con ginseng coreano, aloe, vitaminas y minerales que ayuda a combatir el cansancio físico y mental.
            </p>

            {/* Social */}
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 text-ink-400 transition-all hover:bg-red-600 hover:text-white"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d={s.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-bold text-white">Navegación</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#que-es" className="hover:text-red-400">Qué es</a></li>
              <li><a href="#beneficios" className="hover:text-red-400">Beneficios</a></li>
              <li><a href="#ingredientes" className="hover:text-red-400">Ingredientes</a></li>
              <li><a href="#rutina" className="hover:text-red-400">Rutina diaria</a></li>
              <li><a href="#faq" className="hover:text-red-400">Preguntas frecuentes</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-bold text-white">Legal</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" className="hover:text-red-400">Términos y condiciones</a></li>
              <li><a href="#" className="hover:text-red-400">Política de privacidad</a></li>
              <li><a href="#" className="hover:text-red-400">Aviso legal</a></li>
              <li><a href="#" className="hover:text-red-400">Política de cookies</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ink-800 pt-6 text-xs text-ink-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Vitacap G. Todos los derechos reservados.</p>
          <p>Suplemento alimenticio · No sustituye una dieta equilibrada</p>
        </div>

        <p className="mt-6 text-xs leading-relaxed text-ink-600">
          * Este producto es un suplemento alimenticio y no está destinado a diagnosticar, tratar, curar o prevenir ninguna enfermedad. Consulta a tu médico antes de consumirlo si estás embarazada, lactando o bajo tratamiento médico. No exceder la dosis diaria recomendada.
        </p>
      </div>
    </footer>
  )
}
