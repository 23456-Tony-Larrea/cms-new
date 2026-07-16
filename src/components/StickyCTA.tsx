import { useEffect, useState } from 'react'

export default function StickyCTA() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 800)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 transition-all duration-300 ${
        show ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      <div className="container-x pb-4">
        <div className="flex items-center justify-between gap-4 rounded-2xl border border-ink-100 bg-white/95 px-5 py-3.5 shadow-2xl backdrop-blur">
          <div className="hidden sm:block">
            <p className="text-sm font-bold text-ink-900">Activa tu cuerpo y mente</p>
            <p className="text-xs text-ink-500">1 cápsula al día · Energía diaria</p>
          </div>
          <a href="#cta" className="btn-primary flex-1 sm:flex-none">
            Inclúyelo en tu rutina
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
