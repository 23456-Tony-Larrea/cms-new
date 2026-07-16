type IconProps = {
  name: string
  className?: string
}

const paths: Record<string, React.ReactNode> = {
  'battery-low': (
    <>
      <rect x="2" y="7" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
      <line x1="22" y1="10" x2="22" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="6" y1="10" x2="6" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </>
  ),
  'brain-fog': (
    <>
      <path d="M12 4a3 3 0 0 0-3 3v1a3 3 0 0 0-3 3v1a3 3 0 0 0 1 5.83V20a2 2 0 0 0 4 0v-1a3 3 0 0 0 4 0v1a2 2 0 0 0 4 0v-2.17A3 3 0 0 0 20 12v-1a3 3 0 0 0-3-3V7a3 3 0 0 0-3-3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M9 10h6M9 14h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    </>
  ),
  stress: (
    <>
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
    </>
  ),
  focus: (
    <>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </>
  ),
  energy: (
    <>
      <path d="M13 2L4.5 13.5h7L10 22l8.5-11.5h-7L13 2z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </>
  ),
  memory: (
    <>
      <path d="M9 3a3 3 0 0 0-3 3v1a3 3 0 0 0-1 5.83V15a2 2 0 0 0 4 0v-1a3 3 0 0 0 4 0v1a2 2 0 0 0 4 0v-2.17A3 3 0 0 0 20 9V8a3 3 0 0 0-3-3 3 3 0 0 0-3-3 3 3 0 0 0-3 0z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M9 9h6M9 13h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),
  immunity: (
    <>
      <path d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  antioxidant: (
    <>
      <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
    </>
  ),
  cognitive: (
    <>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      <line x1="12" y1="1" x2="12" y2="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="12" y1="19" x2="12" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </>
  ),
}

export default function Icon({ name, className = 'h-7 w-7' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      {paths[name] || null}
    </svg>
  )
}
