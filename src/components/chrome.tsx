import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from 'react'
import { navIndex, type Page, type Route } from '../data/lore'

// ── Navigation context ────────────────────────────────────────────────────────

export const NavContext = createContext<{ route: Route; nav: (page: Page, id?: string) => void }>({
  route: { page: 'home' },
  nav: () => {},
})

export function useNav() {
  return useContext(NavContext)
}

// ── Scroll reveal wrapper ─────────────────────────────────────────────────────

export function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add('is-visible')
          obs.disconnect()
        }
      },
      { threshold: 0.12 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} className={`reveal ${className}`} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </div>
  )
}

// ── Image with fade-in ────────────────────────────────────────────────────────

export function LoreImage({ src, alt, className = '', framed = false }: { src: string; alt: string; className?: string; framed?: boolean }) {
  const [loaded, setLoaded] = useState(false)
  const img = (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onLoad={() => setLoaded(true)}
      className={`lore-img ${loaded ? 'loaded' : ''} ${className}`}
    />
  )
  if (!framed) return img
  return (
    <div className="frame-chamfer">
      <div className="frame-inner">{img}</div>
    </div>
  )
}

// ── Ornaments ─────────────────────────────────────────────────────────────────

export function Ornament({ glyph = '✦', className = '' }: { glyph?: string; className?: string }) {
  return (
    <div className={`ornament-line ${className}`}>
      <span className="text-[var(--gold)] text-sm tracking-widest">{glyph} ✦ {glyph}</span>
    </div>
  )
}

export function CompassRose({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="1.4">
      <circle cx="24" cy="24" r="20" />
      <circle cx="24" cy="24" r="13" strokeOpacity="0.55" />
      <path d="M24 2 L27.5 20.5 L24 24 L20.5 20.5 Z" fill="currentColor" stroke="none" />
      <path d="M24 46 L27.5 27.5 L24 24 L20.5 27.5 Z" fill="currentColor" stroke="none" opacity="0.55" />
      <path d="M2 24 L20.5 20.5 L24 24 L20.5 27.5 Z" fill="currentColor" stroke="none" opacity="0.8" />
      <path d="M46 24 L27.5 20.5 L24 24 L27.5 27.5 Z" fill="currentColor" stroke="none" opacity="0.8" />
    </svg>
  )
}

export function SectionHead({ kicker, title, intro }: { kicker: string; title: string; intro?: string }) {
  return (
    <Reveal className="mb-10 md:mb-14">
      <p className="font-display text-[11px] md:text-xs tracking-[0.45em] uppercase text-[var(--gold-deep)] mb-3">{kicker}</p>
      <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-[0.08em] uppercase text-[var(--ink)] leading-tight">{title}</h2>
      <Ornament className="max-w-xs mt-5" />
      {intro && <p className="prose-lore mt-6 max-w-2xl">{intro}</p>}
    </Reveal>
  )
}

// ── Page shell with chapter header ────────────────────────────────────────────

export function PageShell({ kicker, title, intro, children }: { kicker: string; title: string; intro: string; children: ReactNode }) {
  return (
    <main className="max-w-6xl mx-auto px-5 md:px-8 pt-28 md:pt-36 pb-28">
      <header className="mb-12 md:mb-16 text-center">
        <Reveal>
          <p className="font-display text-[11px] md:text-xs tracking-[0.5em] uppercase text-[var(--gold-deep)] mb-4">{kicker}</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-[0.06em] uppercase text-[var(--ink)]">{title}</h1>
          <Ornament className="max-w-sm mx-auto mt-6" glyph="❧" />
          <p className="prose-lore max-w-3xl mx-auto mt-6">{intro}</p>
        </Reveal>
      </header>
      {children}
    </main>
  )
}

// ── Detail page navigation (back / prev / next) ───────────────────────────────

export function DetailNav({
  backLabel,
  onBack,
  prev,
  next,
}: {
  backLabel: string
  onBack: () => void
  prev?: { label: string; go: () => void }
  next?: { label: string; go: () => void }
}) {
  return (
    <div className="flex items-center justify-between gap-4 mb-8 md:mb-10">
      <button onClick={onBack} className="lore-link text-xs">
        ← {backLabel}
      </button>
      <div className="flex gap-5">
        {prev && (
          <button onClick={prev.go} className="lore-link text-xs hidden sm:block max-w-[140px] truncate">
            ⟨ {prev.label}
          </button>
        )}
        {next && (
          <button onClick={next.go} className="lore-link text-xs hidden sm:block max-w-[140px] truncate text-right">
            {next.label} ⟩
          </button>
        )}
      </div>
    </div>
  )
}

// ── Wax seal ──────────────────────────────────────────────────────────────────

export function WaxSeal({ label, className = '' }: { label: string; className?: string }) {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 80 80" className="w-full h-full">
        <defs>
          <radialGradient id="wax" cx="38%" cy="32%">
            <stop offset="0%" stopColor="#a03830" />
            <stop offset="70%" stopColor="#6d231d" />
            <stop offset="100%" stopColor="#4a140f" />
          </radialGradient>
        </defs>
        <path
          d="M40 4 C50 2, 62 8, 68 18 C74 28, 78 38, 74 50 C70 62, 58 72, 44 74 C30 76, 16 70, 10 58 C4 46, 4 32, 12 20 C18 10, 30 6, 40 4 Z"
          fill="url(#wax)"
        />
        <circle cx="40" cy="40" r="24" fill="none" stroke="#e9d5a8" strokeOpacity="0.35" strokeWidth="1.5" />
        <text x="40" y="48" textAnchor="middle" fontFamily="Cinzel, serif" fontWeight="700" fontSize="22" fill="#e9d5a8" opacity="0.9">
          {label}
        </text>
      </svg>
    </div>
  )
}

// ── Top bar ───────────────────────────────────────────────────────────────────

export function TopBar({ onMenu }: { onMenu: () => void }) {
  const { nav, route } = useNav()
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
        scrolled ? 'bg-[rgba(243,236,218,0.92)] backdrop-blur-md shadow-[0_1px_0_var(--line),0_10px_30px_-18px_rgba(70,52,22,0.5)]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
        <button onClick={() => nav('home')} className="flex items-center gap-3 group">
          <CompassRose className="w-7 h-7 md:w-8 md:h-8 text-[var(--gold-deep)] group-hover:rotate-45 transition-transform duration-700" />
          <span className="font-display text-sm md:text-base font-semibold tracking-[0.3em] uppercase text-[var(--ink)]">
            Chronicles of Westeros
          </span>
        </button>
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-6">
            {(
              [
                ['characters', 'Characters'],
                ['houses', 'Houses'],
                ['creatures', 'Creatures'],
                ['gods', 'Gods'],
                ['myths', 'Myths'],
                ['map', 'Map'],
              ] as [Page, string][]
            ).map(([p, label]) => (
              <button
                key={p}
                onClick={() => nav(p)}
                className={`font-display text-[11px] tracking-[0.25em] uppercase transition-colors ${
                  route.page === p ? 'text-[var(--oxblood)]' : 'text-[var(--ink-soft)] hover:text-[var(--ink)]'
                }`}
              >
                {label}
              </button>
            ))}
          </nav>
          <button
            onClick={onMenu}
            aria-label="Open the index"
            className="w-10 h-10 flex flex-col items-center justify-center gap-[5px] rounded-full border border-[var(--gold)] bg-parchment-card/80 hover:bg-loregold/15 transition-colors"
          >
            <span className="block w-4 h-px bg-[var(--ink)]" />
            <span className="block w-4 h-px bg-[var(--ink)]" />
            <span className="block w-4 h-px bg-[var(--ink)]" />
          </button>
        </div>
      </div>
    </header>
  )
}

// ── Slide-in index panel ──────────────────────────────────────────────────────

export function IndexPanel({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { nav } = useNav()
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])
  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-[rgba(30,20,8,0.45)] backdrop-blur-[2px] transition-opacity duration-500 ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      />
      <aside
        className={`index-panel fixed top-0 right-0 z-50 h-full w-full sm:w-[380px] bg-[var(--paper-deep)] border-l-2 border-loregold/60 shadow-[-30px_0_60px_-20px_rgba(40,28,8,0.5)] ${open ? 'open' : ''}`}
      >
        <div className="h-full flex flex-col p-8 overflow-y-auto">
          <div className="flex items-center justify-between mb-8">
            <p className="font-display text-xs tracking-[0.4em] uppercase text-[var(--gold-deep)]">The Index</p>
            <button onClick={onClose} aria-label="Close the index" className="w-9 h-9 rounded-full border border-[var(--gold)] text-[var(--ink)] hover:bg-loregold/15 transition-colors">
              ✕
            </button>
          </div>
          <Ornament glyph="❦" className="mb-8" />
          <nav className="flex-1 space-y-1">
            {navIndex.map((item, i) => (
              <button
                key={item.page}
                onClick={() => {
                  nav(item.page)
                  onClose()
                }}
                className="index-item w-full text-left py-3 group"
              >
                <span className="font-display text-[10px] tracking-[0.2em] text-[var(--gold-deep)] w-6">{String(i + 1).padStart(2, '0')}</span>
                <span className="font-display text-sm tracking-[0.12em] uppercase text-[var(--ink)] group-hover:text-[var(--oxblood)] transition-colors">
                  {item.label}
                </span>
                <span className="dots" />
                <span className="text-[10px] italic text-[var(--ink-faint)] max-w-[90px] text-right leading-tight">{item.note}</span>
              </button>
            ))}
          </nav>
          <Ornament glyph="❦" className="mt-8 mb-6" />
          <p className="text-center text-xs italic text-[var(--ink-faint)] leading-relaxed">
            “A reader lives a thousand lives before he dies. The man who never reads lives only one.”
            <span className="block mt-2 not-italic font-display text-[10px] tracking-[0.3em] uppercase text-[var(--gold-deep)]">— Jojen Reed</span>
          </p>
        </div>
      </aside>
    </>
  )
}

// ── Mobile bottom nav ─────────────────────────────────────────────────────────

export function BottomNav() {
  const { nav, route } = useNav()
  const items: { page: Page; label: string; icon: ReactNode }[] = [
    {
      page: 'home',
      label: 'Hall',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M3 11 L12 4 L21 11" />
          <path d="M5 10 V20 H19 V10" />
          <path d="M10 20 V14 H14 V20" />
        </svg>
      ),
    },
    {
      page: 'characters',
      label: 'Souls',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.6">
          <circle cx="12" cy="8" r="3.4" />
          <path d="M4.5 20 C5.5 15.5 8.5 13.5 12 13.5 C15.5 13.5 18.5 15.5 19.5 20" />
        </svg>
      ),
    },
    {
      page: 'houses',
      label: 'Houses',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M12 3 L21 8 V21 H3 V8 Z" />
          <path d="M12 8 V14" />
          <path d="M8 12 H16" />
        </svg>
      ),
    },
    {
      page: 'map',
      label: 'Map',
      icon: <CompassRose className="w-5 h-5" />,
    },
    {
      page: 'creatures',
      label: 'Beasts',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 17 C3 11 7.5 6.5 13.5 6.5 C18 6.5 21 9.5 21 13.5 C21 16.5 18.8 19 15.8 19 C13.2 19 11.5 17.4 11.5 15 C11.5 13 13 11.8 14.5 11.8" />
          <path d="M13.5 6.5 L15 2.5 L16.5 6.5 M6 17 L3 20" />
        </svg>
      ),
    },
  ]
  return (
    <nav className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-[rgba(243,236,218,0.95)] backdrop-blur-md border-t border-[var(--line)]">
      <div className="grid grid-cols-5">
        {items.map((item) => {
          const active = route.page === item.page
          return (
            <button
              key={item.page}
              onClick={() => nav(item.page)}
              className={`flex flex-col items-center gap-1 py-2.5 transition-colors ${active ? 'text-[var(--gold-deep)]' : 'text-[var(--ink-faint)]'}`}
            >
              <span className={active ? 'drop-shadow-[0_0_6px_rgba(168,133,47,0.6)]' : ''}>{item.icon}</span>
              <span className="font-display text-[9px] tracking-[0.2em] uppercase">{item.label}</span>
              {active && <span className="absolute bottom-0 w-8 h-[2px] bg-[var(--gold)]" />}
            </button>
          )
        })}
      </div>
    </nav>
  )
}

// ── Footer ────────────────────────────────────────────────────────────────────

export function Footer() {
  const { nav } = useNav()
  const links = navIndex.filter((n) => n.page !== 'home')
  const half = Math.ceil(links.length / 2)
  const cols = [links.slice(0, half), links.slice(half)]
  return (
    <footer className="relative mt-24 border-t-2 border-loregold/40 bg-[var(--paper-deep)]">
      {/* top ornament ribbon */}
      <div className="absolute -top-[13px] inset-x-0 flex justify-center">
        <span className="bg-[var(--paper)] px-4 font-display text-[var(--gold)] text-sm tracking-widest">❧ ✦ ❧</span>
      </div>
      <div className="max-w-6xl mx-auto px-5 md:px-8 pt-16 pb-10">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr] lg:gap-16">
          {/* brand column */}
          <div>
            <div className="flex items-center gap-4">
              <CompassRose className="w-11 h-11 text-[var(--gold-deep)] shrink-0" />
              <div>
                <p className="font-display text-lg tracking-[0.24em] uppercase text-[var(--ink)] leading-tight">Chronicles of Westeros</p>
                <p className="font-display text-[10px] tracking-[0.3em] uppercase text-[var(--gold-deep)] mt-1">An illuminated archive</p>
              </div>
            </div>
            <p className="mt-5 text-[15px] leading-relaxed text-[var(--ink-soft)] max-w-sm">
              Fourteen volumes of the known world — its houses and their trees, its gods and myths, its battles and its
              beasts, its peoples and its oaths — gathered by candlelight for any traveler who would know the realm before they walk it.
            </p>
            <p className="mt-5 border-l-2 border-loregold/60 pl-4 text-sm italic text-[var(--ink-faint)] max-w-sm">
              “A reader lives a thousand lives before he dies. The man who never reads lives only one.”
            </p>
          </div>
          {/* link columns */}
          {cols.map((col, ci) => (
            <div key={ci}>
              <p className="font-display text-[10px] tracking-[0.35em] uppercase text-[var(--oxblood)] mb-4">
                {ci === 0 ? 'The First Shelf' : 'The Second Shelf'}
              </p>
              <ul className="space-y-2.5">
                {col.map((n) => (
                  <li key={n.page}>
                    <button onClick={() => nav(n.page)} className="lore-link text-[12px] tracking-[0.14em] uppercase">
                      {n.label}
                    </button>
                    <p className="text-[11px] italic text-[var(--ink-faint)] mt-0.5">{n.note}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col items-center gap-3 border-t border-[var(--line)] pt-6 sm:flex-row sm:justify-between">
          <p className="text-[11px] italic text-[var(--ink-faint)]">
            An unofficial illuminated archive of the world of ice and fire.
          </p>
          <Ornament className="w-40 hidden sm:block" glyph="❦" />
          <p className="text-[11px] italic text-[var(--ink-faint)]">
            All illustrations painted by the archive’s own hand.
          </p>
        </div>
      </div>
    </footer>
  )
}
