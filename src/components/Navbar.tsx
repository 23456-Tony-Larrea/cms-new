import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#problema', label: 'El problema' },
    { href: '#que-es', label: 'Qué es' },
    { href: '#beneficios', label: 'Beneficios' },
    { href: '#ingredientes', label: 'Ingredientes' },
    { href: '#faq', label: 'FAQ' },
  ]

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 shadow-lg shadow-red-900/5 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between sm:h-20">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-energy font-display text-xl font-extrabold text-white shadow-lg shadow-red-600/30">
            G
          </span>
          <span className="font-display text-xl font-extrabold tracking-tight text-ink-900">
            Vitacap <span className="text-gradient">G</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-semibold text-ink-600 transition-colors hover:text-red-600"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a href="#cta" className="btn-primary !px-6 !py-3 !text-sm">
            Inclúyelo en tu rutina
          </a>
        </div>

        <button
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg text-ink-700 lg:hidden"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-ink-100 bg-white px-5 py-4 lg:hidden">
          <ul className="flex flex-col gap-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm font-semibold text-ink-700"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#cta" onClick={() => setOpen(false)} className="btn-primary mt-2 w-full">
                Inclúyelo en tu rutina
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
