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
        scrolled ? 'bg-white/90 shadow-md backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between sm:h-20">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-600 font-display text-lg font-extrabold text-white">
            G
          </span>
          <span className={`font-display text-xl font-extrabold tracking-tight ${scrolled ? 'text-ink-900' : 'text-ink-900'}`}>
            Vitacap <span className="text-brand-600">G</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-ink-600 transition-colors hover:text-brand-700"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a href="#cta" className="btn-primary !px-5 !py-2.5 !text-sm">
            Quiero mi frasco
          </a>
        </div>

        <button
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg text-ink-700 md:hidden"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-ink-100 bg-white px-5 py-4 md:hidden">
          <ul className="flex flex-col gap-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm font-medium text-ink-700"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#cta" onClick={() => setOpen(false)} className="btn-primary mt-2 w-full">
                Quiero mi frasco
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
