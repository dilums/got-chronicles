import { useEffect, useMemo, useRef, useState } from 'react'
import { battles, faiths, myths, regions, timeline, type Page } from '../data/lore'
import { allCharacters, allHouses, creatures } from '../data/more'
import { orders, peoples, weapons } from '../data/realm'
import { CompassRose, LoreImage, Ornament, Reveal, SectionHead, useNav, WaxSeal } from '../components/chrome'

// ── Global search index ───────────────────────────────────────────────────────

interface SearchEntry {
  label: string
  sub: string
  page: Page
  id?: string
}

function useSearchIndex(): SearchEntry[] {
  return useMemo(
    () => [
      ...allCharacters.map((c) => ({ label: c.name, sub: c.house, page: 'characters' as Page, id: c.id })),
      ...allHouses.map((h) => ({ label: h.name, sub: h.words, page: 'houses' as Page, id: h.id })),
      ...creatures.map((c) => ({ label: c.name, sub: c.kind, page: 'creatures' as Page, id: c.id })),
      ...faiths.map((f) => ({ label: f.name, sub: f.aka, page: 'gods' as Page, id: f.id })),
      ...myths.map((m) => ({ label: m.title, sub: m.era, page: 'myths' as Page, id: m.id })),
      ...battles.map((b) => ({ label: b.name, sub: b.year, page: 'battles' as Page, id: b.id })),
      ...regions.map((r) => ({ label: r.name, sub: r.house, page: 'map' as Page, id: r.id })),
      ...peoples.map((p) => ({ label: p.name, sub: p.aka, page: 'cultures' as Page, id: p.id })),
      ...orders.map((o) => ({ label: o.name, sub: o.aka, page: 'orders' as Page, id: o.id })),
      ...weapons.map((w) => ({ label: w.name, sub: w.kind, page: 'weapons' as Page, id: w.id })),
    ],
    []
  )
}

function SearchBar() {
  const index = useSearchIndex()
  const { nav } = useNav()
  const [q, setQ] = useState('')
  const [focus, setFocus] = useState(false)
  const boxRef = useRef<HTMLDivElement>(null)

  const results = useMemo(() => {
    const t = q.trim().toLowerCase()
    if (t.length < 2) return []
    return index.filter((e) => `${e.label} ${e.sub}`.toLowerCase().includes(t)).slice(0, 7)
  }, [q, index])

  return (
    <div ref={boxRef} className="relative max-w-2xl mx-auto">
      <div className="flex items-center gap-3 bg-[var(--paper-card)] border border-[var(--line)] rounded-full px-5 py-3.5 shadow-[0_14px_40px_-18px_rgba(70,52,22,0.5)] focus-within:border-[var(--gold)] transition-colors">
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-[var(--gold-deep)] shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21 L16.2 16.2" />
        </svg>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          onFocus={() => setFocus(true)}
          onBlur={() => setTimeout(() => setFocus(false), 180)}
          placeholder="Search characters, houses, gods, battles…"
          className="flex-1 bg-transparent outline-none text-lg placeholder:text-[var(--ink-faint)] placeholder:italic text-[var(--ink)]"
        />
        {q && (
          <button onClick={() => setQ('')} className="text-[var(--ink-faint)] hover:text-[var(--ink)] text-sm">
            ✕
          </button>
        )}
      </div>
      {focus && results.length > 0 && (
        <div className="absolute z-30 mt-2 inset-x-0 max-h-[min(60vh,360px)] overflow-y-auto card-parchment rounded-lg divide-y divide-[var(--line-soft)] shadow-[0_24px_50px_-18px_rgba(70,52,22,0.55)]">
          {results.map((r, i) => (
            <button
              key={`${r.page}-${r.label}-${i}`}
              onMouseDown={() => {
                nav(r.page, r.id)
                setQ('')
              }}
              className="w-full flex items-baseline gap-3 px-5 py-3 text-left hover:bg-loregold/10 transition-colors"
            >
              <span className="font-display text-sm tracking-[0.08em] text-[var(--ink)]">{r.label}</span>
              <span className="text-sm italic text-[var(--ink-faint)] truncate">{r.sub}</span>
              <span className="ml-auto font-display text-[9px] tracking-[0.25em] uppercase text-[var(--gold-deep)] shrink-0">{r.page}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

// ── Category tiles ────────────────────────────────────────────────────────────

function CategoryTile({ img, label, sub, onClick, delay }: { img: string; label: string; sub: string; onClick: () => void; delay: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <button
        onClick={onClick}
        className="group w-full h-full card-parchment rounded-sm overflow-hidden flex flex-col text-left hover:-translate-y-1.5 hover:shadow-[0_24px_44px_-18px_rgba(70,52,22,0.55)] transition-all duration-400"
      >
        <div className="relative overflow-hidden">
          <LoreImage
            src={img}
            alt={label}
            className="w-full aspect-[16/9] object-cover group-hover:scale-[1.06] transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(43,33,24,0.35)] to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
        </div>
        <div className="flex-1 flex flex-col items-center gap-2.5 px-4 py-4 md:py-5 text-center">
          <span className="font-display text-[11px] md:text-[13px] tracking-[0.2em] uppercase text-[var(--ink)] group-hover:text-[var(--oxblood)] transition-colors">
            {label}
          </span>
          <span className="w-8 h-px bg-[var(--gold)]" />
          <span className="text-[13px] italic text-[var(--ink-faint)] leading-snug">{sub}</span>
        </div>
      </button>
    </Reveal>
  )
}

// ── Voices of the Realm (quotes carousel) ────────────────────────────────────

const QUOTE_IDS = [
  'tyrion-lannister',
  'daenerys-targaryen',
  'eddard-stark',
  'cersei-lannister',
  'arya-stark',
  'petyr-baelish',
  'sandor-clegane',
  'ramsay-bolton',
]

function VoicesOfTheRealm() {
  const { nav } = useNav()
  const quoted = useMemo(
    () => QUOTE_IDS.map((id) => allCharacters.find((c) => c.id === id)).filter((c): c is NonNullable<typeof c> => !!c?.quote),
    []
  )
  const [idx, setIdx] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused || quoted.length < 2) return
    const t = setInterval(() => setIdx((i) => (i + 1) % quoted.length), 6500)
    return () => clearInterval(t)
  }, [paused, quoted.length])

  const c = quoted[idx]
  if (!c) return null

  return (
    <section
      className="border-y border-[var(--line)] bg-parchment-deep/45"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-4xl mx-auto px-5 md:px-8 py-16 md:py-20 text-center">
        <SectionHead kicker="Voices of the Realm" title="Words That Outlived Their Speakers" />
        <div className="relative min-h-[190px] md:min-h-[170px] flex flex-col items-center justify-center">
          <span className="font-display text-5xl text-loregold/50 leading-none select-none">“</span>
          <blockquote key={c.id} className="quote-in">
            <p className="text-xl md:text-2xl italic leading-relaxed text-[var(--ink)] max-w-2xl mx-auto">
              {c.quote}
            </p>
            <footer className="mt-6 flex items-center justify-center gap-3">
              <img
                src={c.image}
                alt={c.name}
                className="w-10 h-10 rounded-full object-cover ring-1 ring-loregold/60"
              />
              <button
                onClick={() => nav('characters', c.id)}
                className="lore-link font-display text-xs tracking-[0.25em] uppercase text-[var(--gold-deep)]"
              >
                {c.name} · {c.house}
              </button>
            </footer>
          </blockquote>
        </div>
        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            onClick={() => setIdx((idx - 1 + quoted.length) % quoted.length)}
            title="An earlier voice"
            className="w-8 h-8 grid place-items-center rounded-full border border-[var(--line)] text-[var(--gold-deep)] hover:border-[var(--gold)] hover:bg-loregold/10 transition-colors font-display text-sm"
          >
            ⟨
          </button>
          <div className="flex gap-2">
            {quoted.map((q, i) => (
              <button
                key={q.id}
                onClick={() => setIdx(i)}
                title={q.name}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === idx ? 'w-7 bg-[var(--gold)]' : 'w-1.5 bg-[var(--line)] hover:bg-loregold/50'
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => setIdx((idx + 1) % quoted.length)}
            title="A later voice"
            className="w-8 h-8 grid place-items-center rounded-full border border-[var(--line)] text-[var(--gold-deep)] hover:border-[var(--gold)] hover:bg-loregold/10 transition-colors font-display text-sm"
          >
            ⟩
          </button>
        </div>
      </div>
    </section>
  )
}

// ── Home page ─────────────────────────────────────────────────────────────────

export default function Home() {
  const { nav } = useNav()
  const [heroLoaded, setHeroLoaded] = useState(false)

  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] md:min-h-screen flex flex-col justify-end">
        {/* Only the artwork layer clips — the section itself stays visible so the search results can overflow */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/img/hero-castle4.jpg"
            alt="A white castle with blue rooftops above the sea, two distant dragons crossing a bright golden sky"
            onLoad={() => setHeroLoaded(true)}
            className={`lore-img ${heroLoaded ? 'loaded' : ''} w-full h-full object-cover object-center`}
          />
          {/* The painting's left half is bright sky — only gentle parchment veils are needed */}
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(243,236,218,0.55)] via-[rgba(243,236,218,0.12)] to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-[38%] bg-gradient-to-t from-[var(--paper)] via-[rgba(243,236,218,0.55)] to-transparent" />
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[rgba(243,236,218,0.5)] to-transparent" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8 w-full pt-32 pb-16 md:pb-24">
          <Reveal>
            <p className="font-display text-[11px] md:text-xs tracking-[0.5em] uppercase text-[var(--gold-deep)] mb-5">
              An Illuminated Archive of Ice &amp; Fire
            </p>
            <h1 className="font-display uppercase text-[var(--ink)] leading-[0.95]">
              <span className="block text-lg md:text-2xl tracking-[0.35em] font-medium">The Complete</span>
              <span className="block text-5xl md:text-8xl font-bold tracking-[0.04em]">Chronicle</span>
              <span className="block text-2xl md:text-4xl tracking-[0.22em] font-medium mt-2">of the Seven Kingdoms</span>
            </h1>
            <Ornament className="max-w-xs mt-6 mb-6" glyph="❧" />
            <p className="prose-lore max-w-xl mb-8">
              Houses and their family trees, the souls who shaped the age, gods old and new, the deep myths, and every
              battle that decided the realm — gathered in one chronicle, illuminated for the curious.
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <button onClick={() => nav('characters')} className="btn-gold rounded-sm px-8 py-4 text-xs flex items-center gap-3">
                <CompassRose className="w-4 h-4" /> Open the Chronicle
              </button>
              <button onClick={() => nav('map')} className="btn-ghost-lore rounded-sm px-8 py-4 text-xs bg-parchment-card/70">
                Consult the Map
              </button>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <SearchBar />
          </Reveal>
        </div>
      </section>

      {/* ── Category tiles ───────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <SectionHead
          kicker="The Volumes of the Archive"
          title="Choose Your Path"
          intro="Fourteen volumes lie open. Each begins a different road through eight thousand years of history."
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 items-stretch">
          <CategoryTile img="/img/house-arryn.jpg" label="Great Houses" sub="Sigils, seats & family trees" onClick={() => nav('houses')} delay={0} />
          <CategoryTile img="/img/char-jon.jpg" label="Characters" sub="The souls who shaped the age" onClick={() => nav('characters')} delay={60} />
          <CategoryTile img="/img/creature-dragons.jpg" label="Beasts & Beings" sub="Dragons, direwolves & worse" onClick={() => nav('creatures')} delay={120} />
          <CategoryTile img="/img/battle-field-of-fire.jpg" label="Battles" sub="The clashes that decided all" onClick={() => nav('battles')} delay={180} />
          <CategoryTile img="/img/god-weirwood.jpg" label="Gods & Faiths" sub="Old gods and new, and stranger" onClick={() => nav('gods')} delay={240} />
          <CategoryTile img="/img/myth-longnight.jpg" label="Myths" sub="Legends of the deep past" onClick={() => nav('myths')} delay={300} />
          <CategoryTile img="/img/myth-doom.jpg" label="Timeline" sub="Twelve thousand years" onClick={() => nav('timeline')} delay={360} />
          <CategoryTile img="/img/map-westeros.jpg" label="The Map" sub="Nine regions of the realm" onClick={() => nav('map')} delay={420} />
          <CategoryTile img="/img/iron-throne.jpg" label="The Iron Throne" sub="Every reign & rival claim" onClick={() => nav('throne')} delay={480} />
          <CategoryTile img="/img/weapons-banner.jpg" label="Weapons & Valyrian Steel" sub="Ice, Longclaw, Needle & the lost art" onClick={() => nav('weapons')} delay={540} />
          <CategoryTile img="/img/culture-dothraki.jpg" label="Peoples & Cultures" sub="Dothraki, Dornish, free folk" onClick={() => nav('cultures')} delay={600} />
          <CategoryTile img="/img/order-nights-watch.jpg" label="Orders & Oaths" sub="The Watch, the White Cloaks & more" onClick={() => nav('orders')} delay={660} />
        </div>
      </section>

      {/* ── Featured lore ────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 pb-16 md:pb-24">
        <div className="flex items-end justify-between mb-8">
          <SectionHead kicker="Featured Volumes" title="Most Read by Candlelight" />
          <button onClick={() => nav('houses')} className="lore-link text-xs hidden md:block shrink-0 mb-14">
            View all volumes
          </button>
        </div>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {[
            {
              img: '/img/house-stark.jpg',
              seal: 'S',
              title: 'House Stark of Winterfell',
              text: 'Eight thousand years of wolves, winter, and unbroken memory — with the full family tree.',
              go: () => nav('houses', 'stark'),
            },
            {
              img: '/img/house-targaryen.jpg',
              seal: 'T',
              title: 'The Targaryen Dynasty',
              text: 'Fire and blood: from Aegon’s Conquest through the Dance of the Dragons to the last dragon.',
              go: () => nav('houses', 'targaryen'),
            },
            {
              img: '/img/myth-longnight.jpg',
              seal: 'L',
              title: 'The Long Night',
              text: 'The generation-long winter when the dead marched — and the warning the North never forgot.',
              go: () => nav('myths', 'the-long-night'),
            },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 90} className="h-full">
              <button onClick={c.go} className="group w-full h-full text-left card-parchment rounded-sm overflow-hidden flex flex-col hover:-translate-y-1.5 hover:shadow-[0_26px_50px_-20px_rgba(70,52,22,0.6)] transition-all duration-400">
                <div className="relative shrink-0">
                  <LoreImage src={c.img} alt={c.title} className="w-full aspect-[3/2] object-cover group-hover:scale-[1.04] transition-transform duration-700" />
                  <WaxSeal label={c.seal} className="w-11 h-11 absolute -bottom-4 left-4 drop-shadow-lg" />
                </div>
                <div className="p-5 pt-7 flex-1 flex flex-col">
                  <h3 className="font-display text-base md:text-lg tracking-[0.1em] uppercase text-[var(--ink)] group-hover:text-[var(--oxblood)] transition-colors">
                    {c.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-[var(--ink-soft)] mt-2 line-clamp-3">{c.text}</p>
                  <span className="lore-link text-[10px] inline-block mt-auto pt-4">Read the volume</span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Voices of the Realm ──────────────────────────── */}
      <VoicesOfTheRealm />

      {/* ── Chronicles of War teaser ─────────────────────── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="flex items-end justify-between mb-8">
          <SectionHead
            kicker="Chronicles of War"
            title="Fields Where the Realm Was Decided"
            intro="Eight battles carry their own illuminated accounts — with the muster rolls of every host, as the maesters reckon them."
          />
          <button onClick={() => nav('battles')} className="lore-link text-xs hidden md:block shrink-0 mb-14">
            All fields of battle
          </button>
        </div>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-stretch">
          {battles
            .filter((b) => b.image)
            .slice(0, 2)
            .map((b, i) => (
              <Reveal key={b.id} delay={i * 100} className="h-full">
                <button
                  onClick={() => nav('battles', b.id)}
                  className="group w-full h-full text-left card-parchment rounded-sm overflow-hidden flex flex-col hover:-translate-y-1.5 hover:shadow-[0_26px_50px_-20px_rgba(70,52,22,0.6)] transition-all duration-400"
                >
                  <div className="relative shrink-0">
                    <LoreImage src={b.image!} alt={b.name} className="w-full aspect-[16/8] object-cover group-hover:scale-[1.04] transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(43,33,24,0.45)] to-transparent" />
                    <span className="absolute bottom-3 left-4 font-display text-[10px] tracking-[0.3em] uppercase text-[#f3ecda] drop-shadow">
                      {b.year} · {b.location}
                    </span>
                  </div>
                  <div className="p-5 md:p-6 flex-1 flex flex-col">
                    <h3 className="font-display text-lg md:text-xl tracking-[0.08em] uppercase text-[var(--ink)] group-hover:text-[var(--oxblood)] transition-colors">
                      {b.name}
                    </h3>
                    <p className="text-[15px] leading-relaxed text-[var(--ink-soft)] mt-2 line-clamp-2">{b.text[0]}</p>
                    <span className="lore-link text-[10px] inline-block mt-auto pt-4">Read the account</span>
                  </div>
                </button>
              </Reveal>
            ))}
        </div>
        <div className="mt-6 text-center md:hidden">
          <button onClick={() => nav('battles')} className="lore-link text-xs">All fields of battle</button>
        </div>
      </section>

      {/* ── Bestiary teaser ──────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 pb-16 md:pb-24">
        <div className="flex items-end justify-between mb-8">
          <SectionHead
            kicker="The Bestiary"
            title="Beasts & Beings of Legend"
            intro="Dragons and direwolves, giants and the walking dead — eighteen entries in the archive’s bestiary, each with its own page."
          />
          <button onClick={() => nav('creatures')} className="lore-link text-xs hidden md:block shrink-0 mb-14">
            Open the bestiary
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6 items-stretch">
          {[
            { id: 'dragons', img: '/img/creature-dragons.jpg' },
            { id: 'direwolves', img: '/img/creature-direwolves.jpg' },
            { id: 'giants', img: '/img/creature-giants.jpg' },
          ].map((t, i) => {
            const cr = creatures.find((x) => x.id === t.id)
            if (!cr) return null
            return (
              <Reveal key={t.id} delay={i * 90} className="h-full">
                <button
                  onClick={() => nav('creatures', cr.id)}
                  className="group w-full h-full text-left card-parchment rounded-sm overflow-hidden flex flex-col hover:-translate-y-1.5 hover:shadow-[0_24px_44px_-18px_rgba(70,52,22,0.55)] transition-all duration-400"
                >
                  <div className="relative shrink-0">
                    <LoreImage src={t.img} alt={cr.name} className="w-full aspect-[4/3] object-cover group-hover:scale-[1.05] transition-transform duration-700" />
                    <span className="absolute bottom-2 right-3 font-display text-[9px] tracking-[0.25em] uppercase text-[#f3ecda] drop-shadow bg-[rgba(43,33,24,0.55)] px-2 py-0.5 rounded-sm">
                      {cr.kind}
                    </span>
                  </div>
                  <div className="p-4 md:p-5 flex-1 flex flex-col">
                    <h3 className="font-display text-base tracking-[0.1em] uppercase text-[var(--ink)] group-hover:text-[var(--oxblood)] transition-colors">{cr.name}</h3>
                    <p className="text-sm leading-relaxed text-[var(--ink-soft)] mt-2 line-clamp-3">{cr.summary}</p>
                  </div>
                </button>
              </Reveal>
            )
          })}
        </div>
        <div className="mt-6 text-center md:hidden">
          <button onClick={() => nav('creatures')} className="lore-link text-xs">Open the bestiary</button>
        </div>
      </section>

      {/* ── March of Ages (timeline teaser) ──────────────── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 pb-16 md:pb-24">
        <Reveal>
          <div className="card-parchment rounded-sm p-7 md:p-10">
            <div className="flex flex-wrap items-end justify-between gap-4 mb-7">
              <div>
                <p className="font-display text-[11px] tracking-[0.45em] uppercase text-[var(--gold-deep)] mb-3">The Long Timeline</p>
                <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-[0.06em] uppercase text-[var(--ink)] leading-tight">
                  Twelve Thousand Years, Eight Ages
                </h2>
              </div>
              <button onClick={() => nav('timeline')} className="lore-link text-xs shrink-0">Walk the whole timeline</button>
            </div>
            <div className="relative">
              <div className="absolute left-0 right-0 top-[15px] h-px bg-loregold/40" />
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-x-3 gap-y-6">
                {timeline.map((era) => (
                  <button key={era.age} onClick={() => nav('timeline')} className="group relative text-left">
                    <span className="relative z-10 block h-[9px] w-[9px] rotate-45 bg-[var(--gold)] ring-4 ring-[var(--paper-card)] group-hover:bg-[var(--oxblood)] group-hover:scale-125 transition-all" />
                    <span className="mt-3 block font-display text-[10px] tracking-[0.12em] uppercase text-[var(--ink)] leading-snug group-hover:text-[var(--oxblood)] transition-colors">
                      {era.age}
                    </span>
                    <span className="mt-1 block text-[10px] italic text-[var(--ink-faint)]">{era.span}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── Map banner ───────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 pb-16 md:pb-24">
        <Reveal>
          <div className="grid md:grid-cols-[1fr_1.6fr] card-parchment rounded-sm overflow-hidden">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <p className="font-display text-[11px] tracking-[0.45em] uppercase text-[var(--gold-deep)] mb-4">Cartographer’s Table</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-[0.06em] uppercase text-[var(--ink)] leading-tight">
                Journey the Seven Kingdoms
              </h2>
              <Ornament className="max-w-[140px] mt-5 mb-5" />
              <p className="prose-lore mb-8">
                Nine regions from the haunted North to the sands of Dorne, marked upon the archive’s great map. Touch a
                seal to read the land’s history, its seat, and its ruling house.
              </p>
              <div>
                <button onClick={() => nav('map')} className="btn-gold rounded-sm px-8 py-4 text-xs flex items-center gap-3">
                  <CompassRose className="w-4 h-4" /> Unroll the Map
                </button>
              </div>
            </div>
            <button onClick={() => nav('map')} className="relative block group border-t md:border-t-0 md:border-l border-[var(--line)]">
              <LoreImage src="/img/map-westeros.jpg" alt="The antique map of Westeros" className="w-full h-full object-cover min-h-[280px] group-hover:scale-[1.02] transition-transform duration-700" />
              <span className="absolute inset-0 bg-loregold/0 group-hover:bg-loregold/10 transition-colors" />
            </button>
          </div>
        </Reveal>
      </section>

      {/* ── Trending ─────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 pb-20 md:pb-28">
        <div className="flex items-end justify-between mb-8">
          <SectionHead kicker="Trending in Westeros" title="Spoken of in Every Sept" />
          <button onClick={() => nav('myths')} className="lore-link text-xs hidden md:block shrink-0 mb-14">
            All the whispers
          </button>
        </div>
        <div className="space-y-3">
          {[
            {
              n: 'I',
              img: '/img/iron-throne.jpg',
              title: 'The Iron Throne',
              text: 'A thousand swords of Aegon’s enemies, fused by dragonfire — the seat no one sits comfortably.',
              go: () => nav('battles', 'field-of-fire'),
            },
            {
              n: 'II',
              img: '/img/char-nightking.jpg',
              title: 'The White Walkers',
              text: 'The ancient enemy from beyond the Wall, made by the Children and unmade at Winterfell.',
              go: () => nav('characters', 'the-night-king'),
            },
            {
              n: 'III',
              img: '/img/char-cersei.jpg',
              title: 'Queens of Power',
              text: 'Cersei Lannister and Daenerys Targaryen — the two crowns that closed an age.',
              go: () => nav('characters', 'cersei-lannister'),
            },
          ].map((t, i) => (
            <Reveal key={t.title} delay={i * 80}>
              <button
                onClick={t.go}
                className="group w-full card-parchment rounded-sm p-4 md:p-5 flex items-center gap-5 text-left hover:-translate-y-1 hover:shadow-[0_20px_40px_-18px_rgba(70,52,22,0.55)] transition-all duration-400"
              >
                <span className="font-display text-2xl md:text-3xl font-bold text-[var(--gold-deep)] w-10 text-center shrink-0">{t.n}</span>
                <div className="frame-chamfer w-20 h-20 md:w-24 md:h-24 shrink-0">
                  <div className="frame-inner w-full h-full">
                    <LoreImage src={t.img} alt={t.title} className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-base md:text-lg tracking-[0.1em] uppercase text-[var(--ink)] group-hover:text-[var(--oxblood)] transition-colors truncate">
                    {t.title}
                  </h3>
                  <p className="text-[15px] text-[var(--ink-soft)] leading-relaxed line-clamp-2">{t.text}</p>
                </div>
                <span className="ml-auto text-[var(--gold-deep)] shrink-0 font-display hidden sm:block">❧</span>
              </button>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  )
}
