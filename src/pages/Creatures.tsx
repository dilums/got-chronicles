import { creatures } from '../data/more'
import type { Creature } from '../data/more'
import { DetailNav, LoreImage, Ornament, PageShell, Reveal, useNav, WaxSeal } from '../components/chrome'

// ── Creature detail page ──────────────────────────────────────────────────────

function CreaturePage({ c }: { c: Creature }) {
  const { nav } = useNav()
  const idx = creatures.findIndex((x) => x.id === c.id)
  const prev = creatures[idx - 1]
  const next = creatures[idx + 1]

  return (
    <main className="pb-28">
      {c.image ? (
        <div className="relative h-[44vh] md:h-[58vh] min-h-[300px]">
          <LoreImage src={c.image} alt={`Painting of ${c.name}`} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--paper)] via-[rgba(243,236,218,0.25)] to-[rgba(243,236,218,0.35)]" />
          <div className="absolute bottom-6 inset-x-0 max-w-6xl mx-auto px-5 md:px-8 flex items-end gap-5">
            <WaxSeal label={c.name[0]} className="w-16 h-16 drop-shadow-xl shrink-0" />
            <div className="pb-1">
              <p className="font-display text-[11px] tracking-[0.4em] uppercase text-[var(--gold-deep)]">{c.kind}</p>
              <h1 className="font-display text-3xl md:text-5xl font-bold tracking-[0.06em] uppercase text-[var(--ink)] drop-shadow-sm">{c.name}</h1>
            </div>
          </div>
        </div>
      ) : (
        <div className="pt-28 md:pt-36 pb-4 text-center">
          <Ornament glyph="❦" className="max-w-xs mx-auto mb-6" />
          <p className="font-display text-[11px] tracking-[0.4em] uppercase text-[var(--gold-deep)]">{c.kind}</p>
          <h1 className="font-display text-3xl md:text-5xl font-bold tracking-[0.06em] uppercase text-[var(--ink)] mt-2">{c.name}</h1>
          <Ornament glyph="❦" className="max-w-xs mx-auto mt-6" />
        </div>
      )}

      <div className="max-w-4xl mx-auto px-5 md:px-8 mt-8">
        <DetailNav
          backLabel="Return to Beasts & Beings"
          onBack={() => nav('creatures')}
          prev={prev ? { label: prev.name, go: () => nav('creatures', prev.id) } : undefined}
          next={next ? { label: next.name, go: () => nav('creatures', next.id) } : undefined}
        />

        <div className="card-parchment rounded-sm px-5 py-3 mb-8 flex gap-4">
          <span className="font-display text-[10px] tracking-[0.25em] uppercase text-[var(--gold-deep)] shrink-0 pt-1">Status</span>
          <span className="text-[15px] text-[var(--ink)] font-medium">{c.status}</span>
        </div>

        {c.quote && (
          <blockquote className="border-l-2 border-[var(--oxblood)] pl-5 mb-8 text-xl md:text-2xl italic text-[var(--oxblood)] leading-relaxed">
            “{c.quote}”
          </blockquote>
        )}

        <div className="prose-lore space-y-5">
          {c.body.map((p, i) => (
            <p key={i} className={i === 0 ? 'dropcap' : ''}>
              {p}
            </p>
          ))}
        </div>

        <div className="mt-10 card-parchment rounded-sm divide-y divide-[var(--line-soft)]">
          {c.facts.map((f) => (
            <div key={f.label} className="flex gap-4 px-5 py-3">
              <span className="font-display text-[10px] tracking-[0.25em] uppercase text-[var(--gold-deep)] w-28 shrink-0 pt-1">{f.label}</span>
              <span className="text-[15px] text-[var(--ink-soft)]">{f.value}</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

const KINDS: { key: Creature['kind']; label: string; note: string }[] = [
  { key: 'Dragon', label: 'Dragons', note: 'Fire made flesh' },
  { key: 'Direwolf', label: 'Direwolves', note: 'The pack of the North' },
  { key: 'Race & Beings', label: 'Races & Beings', note: 'Elder peoples and the dead' },
  { key: 'Legend', label: 'Legends of the Deep', note: 'What the songs insist is true' },
]

export default function Creatures({ selectedId }: { selectedId?: string }) {
  const { nav } = useNav()
  const selected = creatures.find((c) => c.id === selectedId)
  if (selected) return <CreaturePage c={selected} />

  return (
    <PageShell
      kicker="Volume III"
      title="Beasts & Beings"
      intro="Dragons and direwolves, the elder races of the dawn, the dead that walk, and the legends the maesters file away. Press any entry to open its page in the bestiary."
    >
      <div className="space-y-14">
        {KINDS.map((kind) => {
          const list = creatures.filter((c) => c.kind === kind.key)
          return (
            <section key={kind.key}>
              <Reveal>
                <div className="flex items-baseline gap-4 mb-6">
                  <h2 className="font-display text-xl md:text-2xl tracking-[0.15em] uppercase text-[var(--ink)]">{kind.label}</h2>
                  <span className="text-sm italic text-[var(--ink-faint)]">{kind.note}</span>
                  <span className="flex-1 border-t border-[var(--line)]" />
                </div>
              </Reveal>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 items-stretch">
                {list.map((c, i) => (
                  <Reveal key={c.id} delay={(i % 4) * 60} className="h-full">
                    <button onClick={() => nav('creatures', c.id)} className="group w-full h-full text-left card-parchment rounded-sm overflow-hidden flex flex-col hover:-translate-y-1.5 hover:shadow-[0_22px_44px_-18px_rgba(70,52,22,0.55)] transition-all duration-400">
                      {c.image ? (
                        <LoreImage src={c.image} alt={`Painting of ${c.name}`} className="w-full aspect-[3/2] object-cover shrink-0 group-hover:scale-[1.05] transition-transform duration-700" />
                      ) : (
                        <div className="aspect-[3/2] shrink-0 bg-[var(--paper-deep)] flex items-center justify-center border-b border-[var(--line)]">
                          <span className="font-display text-5xl text-loregold/45">
                            {c.kind === 'Dragon' ? '🐉'.replace('🐉', '✦') : c.kind === 'Direwolf' ? '❦' : c.kind === 'Legend' ? '♆' : '✦'}
                          </span>
                        </div>
                      )}
                      <div className="p-4 flex-1">
                        <p className="font-display text-[9px] tracking-[0.3em] uppercase text-[var(--gold-deep)]">{c.kind}</p>
                        <h3 className="font-display text-sm md:text-base tracking-[0.08em] uppercase text-[var(--ink)] mt-1 group-hover:text-[var(--oxblood)] transition-colors leading-tight">
                          {c.name}
                        </h3>
                        <p className="text-[13px] text-[var(--ink-soft)] leading-snug mt-2 line-clamp-2">{c.summary}</p>
                      </div>
                    </button>
                  </Reveal>
                ))}
              </div>
            </section>
          )
        })}
      </div>
    </PageShell>
  )
}
