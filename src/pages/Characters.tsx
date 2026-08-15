import { useMemo, useState } from 'react'
import { allCharacters } from '../data/more'
import type { Character } from '../data/lore'
import { DetailNav, LoreImage, Ornament, PageShell, Reveal, useNav, WaxSeal } from '../components/chrome'

// ── Character detail page ─────────────────────────────────────────────────────

function CharacterPage({ c }: { c: Character }) {
  const { nav } = useNav()
  const idx = allCharacters.findIndex((x) => x.id === c.id)
  const prev = allCharacters[idx - 1]
  const next = allCharacters[idx + 1]

  return (
    <main className="max-w-6xl mx-auto px-5 md:px-8 pt-24 md:pt-32 pb-28">
      <DetailNav
        backLabel="Return to the Chronicle of Characters"
        onBack={() => nav('characters')}
        prev={prev ? { label: prev.name, go: () => nav('characters', prev.id) } : undefined}
        next={next ? { label: next.name, go: () => nav('characters', next.id) } : undefined}
      />

      <div className="grid md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-8 md:gap-12 items-start">
        {/* Portrait */}
        <div className="md:sticky md:top-28">
          <LoreImage src={c.image} alt={`Portrait of ${c.name}`} framed className="w-full aspect-square object-cover" />
          <div className="flex items-center justify-between mt-4">
            <p className="font-display text-[10px] tracking-[0.35em] uppercase text-[var(--gold-deep)]">{c.culture}</p>
            <WaxSeal label={c.name[0]} className="w-12 h-12" />
          </div>
        </div>

        {/* The chronicle entry */}
        <div>
          <p className="font-display text-[11px] tracking-[0.4em] uppercase text-[var(--gold-deep)]">{c.house}</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold tracking-[0.05em] uppercase text-[var(--ink)] mt-2 leading-tight">
            {c.name}
          </h1>
          <p className="text-base italic text-[var(--ink-faint)] mt-3">{c.aliases.join(' · ')}</p>
          <Ornament className="max-w-[200px] my-6" glyph="❧" />
          <blockquote className="border-l-2 border-[var(--oxblood)] pl-5 text-xl md:text-2xl italic text-[var(--oxblood)] leading-relaxed">
            “{c.quote}”
          </blockquote>
          <div className="prose-lore mt-8 space-y-5">
            {c.bio.map((p, i) => (
              <p key={i} className={i === 0 ? 'dropcap' : ''}>
                {p}
              </p>
            ))}
          </div>

          <div className="mt-10 card-parchment rounded-sm divide-y divide-[var(--line-soft)]">
            <div className="flex gap-4 px-5 py-3 bg-loregold/10">
              <span className="font-display text-[10px] tracking-[0.25em] uppercase text-[var(--gold-deep)] w-28 shrink-0 pt-1">Fate</span>
              <span className="text-[15px] text-[var(--ink)] font-medium">{c.status}</span>
            </div>
            {c.facts.map((f) => (
              <div key={f.label} className="flex gap-4 px-5 py-3">
                <span className="font-display text-[10px] tracking-[0.25em] uppercase text-[var(--gold-deep)] w-28 shrink-0 pt-1">{f.label}</span>
                <span className="text-[15px] text-[var(--ink-soft)]">{f.value}</span>
              </div>
            ))}
          </div>

          {c.houseId && (
            <div className="mt-8">
              <button onClick={() => nav('houses', c.houseId)} className="btn-ghost-lore rounded-sm px-7 py-3.5 text-xs">
                Visit the family tree of {c.house.split('·')[0].trim()}
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}

// ── Gallery ───────────────────────────────────────────────────────────────────

function GalleryCard({ c, delay }: { c: Character; delay: number }) {
  const { nav } = useNav()
  return (
    <Reveal delay={delay}>
      <button
        onClick={() => nav('characters', c.id)}
        className="group w-full text-left frame-chamfer hover:-translate-y-1.5 transition-transform duration-400"
      >
        <div className="frame-inner relative aspect-[3/4] bg-[var(--paper-deep)]">
          <LoreImage src={c.image} alt={`Portrait of ${c.name}`} className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(25,16,6,0.85)] via-transparent to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-4">
            <p className="font-display text-[#f3ecda] text-sm md:text-base tracking-[0.12em] uppercase leading-tight">{c.name}</p>
            <p className="text-[#d9c9a0] text-xs italic mt-0.5">{c.aliases[0]}</p>
          </div>
        </div>
      </button>
    </Reveal>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

const HOUSES_FILTER = [
  { key: 'all', label: 'All Souls' },
  { key: 'stark', label: 'The North' },
  { key: 'lannister', label: 'Lannisters & Court' },
  { key: 'targaryen', label: 'The Dragon’s Circle' },
  { key: 'beyond', label: 'Beyond the Wall' },
  { key: 'essos', label: 'Across the Narrow Sea' },
]

function groupOf(c: Character): string {
  const h = `${c.house} ${c.culture}`.toLowerCase()
  if (h.includes('stark') || h.includes('north') || h.includes('tully') || h.includes('tarth') || h.includes('tarly') || h.includes('clegane') || h.includes('seaworth') || h.includes('crown') || h.includes('flea')) {
    if (h.includes('lannister')) return 'lannister'
    return 'stark'
  }
  if (h.includes('lannister') || h.includes('westerman') || h.includes('baratheon') || h.includes('crown') || h.includes('fingerman') || h.includes('essosi') || h.includes('r’hllor')) return 'lannister'
  if (h.includes('targaryen') || h.includes('valyrian')) return 'targaryen'
  if (h.includes('free folk') || h.includes('night') || h.includes('others') || h.includes('greyjoy') || h.includes('ironborn')) return 'beyond'
  if (h.includes('dothraki') || h.includes('mormont') || h.includes('myr')) return 'essos'
  if (h.includes('martell') || h.includes('dornish')) return 'lannister'
  return 'stark'
}

export default function Characters({ selectedId }: { selectedId?: string }) {
  const [filter, setFilter] = useState('all')
  const selected = allCharacters.find((c) => c.id === selectedId)

  const list = useMemo(
    () => (filter === 'all' ? allCharacters : allCharacters.filter((c) => groupOf(c) === filter)),
    [filter]
  )

  if (selected) return <CharacterPage c={selected} />

  return (
    <PageShell
      kicker="Volume II"
      title="Chronicle of Characters"
      intro="Thirty-two souls in whose hands the age was held — wolf, lion, dragon, kraken, and the cold thing that hunted them all. Press any portrait to open the full chronicle."
    >
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {HOUSES_FILTER.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`font-display text-[10px] tracking-[0.22em] uppercase rounded-full px-4 py-2 transition-all duration-300 ${
              filter === f.key
                ? 'bg-loregold/20 border border-[var(--gold)] text-[var(--ink)]'
                : 'border border-[var(--line)] text-[var(--ink-faint)] hover:border-[var(--gold)] hover:text-[var(--ink)]'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {list.map((c, i) => (
          <GalleryCard key={c.id} c={c} delay={(i % 4) * 60} />
        ))}
      </div>
    </PageShell>
  )
}
