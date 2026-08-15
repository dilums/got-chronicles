import { battles } from '../data/lore'
import type { Battle, BattleForce } from '../data/lore'
import { DetailNav, LoreImage, Ornament, PageShell, Reveal, useNav } from '../components/chrome'

const FORCE_COLORS: Record<string, { bar: string; chip: string }> = {
  gold: { bar: 'linear-gradient(90deg,#83651f,#c9a84c)', chip: '#a8852f' },
  oxblood: { bar: 'linear-gradient(90deg,#5c1d19,#9a352c)', chip: '#7c2a24' },
  steel: { bar: 'linear-gradient(90deg,#4e5560,#8b93a1)', chip: '#6b7280' },
}

const fmt = (n: number) => n.toLocaleString('en-US')

function OrderOfBattle({ forces }: { forces: BattleForce[] }) {
  const max = Math.max(...forces.map((f) => f.soldiers ?? 0), 1)
  const totalDragons = forces.reduce((s, f) => s + (f.dragons ?? 0), 0)
  return (
    <Reveal className="mt-10">
      <div className="card-parchment rounded-sm p-6 sm:p-8">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h3 className="font-display text-xs uppercase tracking-[0.35em] text-[--gold-deep]">The Order of Battle</h3>
          {totalDragons > 0 && (
            <p className="font-display text-[10px] uppercase tracking-[0.25em] text-[--oxblood] border border-oxblood/40 rounded-sm px-2.5 py-1">
              {totalDragons} dragon{totalDragons > 1 ? 's' : ''} upon the field
            </p>
          )}
        </div>
        <div className="mt-6 space-y-5">
          {forces.map((f) => {
            const c = FORCE_COLORS[f.color ?? 'gold']
            const pct = Math.max(3, ((f.soldiers ?? 0) / max) * 100)
            return (
              <div key={f.side}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <p className="font-display text-[11px] uppercase tracking-[0.18em] text-[--ink]">{f.side}</p>
                  <p className="font-display text-[11px] tracking-[0.1em] text-[--ink-faint]">
                    {f.soldiers != null && <span className="text-[--ink-soft]">{fmt(f.soldiers)} swords</span>}
                    {(f.dragons ?? 0) > 0 && (
                      <span className="ml-3 rounded-sm border border-oxblood/40 px-1.5 py-0.5 text-[9px] uppercase tracking-[0.2em] text-[--oxblood]">
                        {f.dragons} dragon{(f.dragons ?? 0) > 1 ? 's' : ''}
                      </span>
                    )}
                  </p>
                </div>
                <div className="mt-2 h-3.5 w-full overflow-hidden rounded-sm border border-[--line] bg-parchment-deep/70">
                  <div
                    className="h-full rounded-sm transition-[width] duration-1000 ease-out"
                    style={{ width: `${pct}%`, background: c.bar }}
                  />
                </div>
                {f.label && <p className="mt-1.5 text-[13px] italic leading-snug text-[--ink-faint]">{f.label}</p>}
              </div>
            )
          })}
        </div>
        <p className="mt-6 border-t border-[--line] pt-4 text-[12px] italic text-[--ink-faint]">
          Numbers as the maesters reckon them — songs inflate, chronicles disagree, and the dead keep no muster rolls.
        </p>
      </div>
    </Reveal>
  )
}

function BattlePage({ battle }: { battle: Battle }) {
  const { nav } = useNav()
  const idx = battles.findIndex((b) => b.id === battle.id)
  const prev = battles[idx - 1]
  const next = battles[idx + 1]
  const facts = [
    { label: 'Year', value: battle.year },
    { label: 'Field', value: battle.location },
    { label: 'Belligerents', value: battle.belligerents },
    { label: 'Outcome', value: battle.outcome },
  ]
  return (
    <main className="mx-auto max-w-4xl px-5 pb-28 pt-24 md:px-8 md:pt-32">
      <DetailNav
        backLabel="Return to the Chronicles of War"
        onBack={() => nav('battles')}
        prev={prev ? { label: prev.name, go: () => nav('battles', prev.id) } : undefined}
        next={next ? { label: next.name, go: () => nav('battles', next.id) } : undefined}
      />

      <div className="text-center">
        <p className="font-display text-[11px] uppercase tracking-[0.45em] text-[--gold-deep]">{battle.year} · {battle.location}</p>
        <h1 className="mt-3 font-display text-3xl font-bold uppercase leading-tight tracking-[0.06em] text-[--ink] sm:text-5xl">
          {battle.name}
        </h1>
        {battle.aka && (
          <p className="mt-3 font-display text-xs uppercase tracking-[0.22em] text-[--ink-soft]">{battle.aka}</p>
        )}
        <Ornament className="mx-auto mt-6 max-w-sm" glyph="❧" />
      </div>

      {battle.image && (
        <Reveal className="mt-10">
          <LoreImage framed src={battle.image} alt={battle.name} className="aspect-[21/9] w-full object-cover" />
        </Reveal>
      )}

      <Reveal className="mt-10">
        <div className="grid gap-px border border-[--line] bg-[--line] sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((f) => (
            <div key={f.label} className="bg-[--paper-card] p-5">
              <p className="font-display text-[10px] uppercase tracking-[0.3em] text-[--gold-deep]">{f.label}</p>
              <p className="mt-2 text-[15px] leading-snug text-[--ink-soft]">{f.value}</p>
            </div>
          ))}
        </div>
      </Reveal>

      {battle.forces && battle.forces.length > 0 && <OrderOfBattle forces={battle.forces} />}

      <div className="prose-lore mt-10 space-y-6">
        {battle.text.map((p, i) => (
          <Reveal key={i} delay={i * 60}>
            <p className={i === 0 ? 'dropcap' : ''}>{p}</p>
          </Reveal>
        ))}
      </div>

      <Ornament className="mt-14" />
    </main>
  )
}

export default function Battles({ selectedId }: { selectedId?: string }) {
  const { nav } = useNav()
  const sel = battles.find((b) => b.id === selectedId)
  if (sel) return <BattlePage battle={sel} />

  return (
    <PageShell
      kicker="Chronicles of War"
      title="Battles & Slaughters"
      intro="From the Field of Fire to the Battle of the Bastards — the clashes that decided who would sit the throne, and who would feed the crows."
    >
      <div className="space-y-6">
        {battles.map((b, i) => (
          <Reveal key={b.id} delay={i * 50}>
            <button
              onClick={() => nav('battles', b.id)}
              className="card-parchment group w-full p-0 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(43,33,24,0.18)]"
            >
              <div className="grid md:grid-cols-[280px_1fr]">
                <div className="relative border-b border-[--line] md:border-b-0 md:border-r">
                  {b.image ? (
                    <div className="aspect-[16/10] overflow-hidden md:absolute md:inset-0 md:aspect-auto">
                      <LoreImage src={b.image} alt={b.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                    </div>
                  ) : (
                    <div className="flex h-full min-h-[120px] items-center justify-center bg-[--paper-deep] p-6">
                      <span className="font-display text-5xl text-loregold/40">⚔</span>
                    </div>
                  )}
                </div>
                <div className="p-6 sm:p-8">
                  <p className="font-display text-[10px] uppercase tracking-[0.3em] text-[--gold]">{b.year} · {b.location}</p>
                  <h3 className="mt-2 font-display text-xl tracking-wide text-[--ink] transition-colors group-hover:text-[--gold-deep] sm:text-2xl">
                    {b.name}
                  </h3>
                  <p className="mt-1 font-display text-[11px] uppercase tracking-[0.15em] text-[--ink-faint]">{b.belligerents}</p>
                  <p className="mt-3 line-clamp-3 text-[15px] leading-relaxed text-[--ink-soft]">{b.text[0]}</p>
                  <p className="lore-link mt-4 inline-block font-display text-[11px] uppercase tracking-[0.25em] text-[--gold-deep]">
                    Read the account
                  </p>
                </div>
              </div>
            </button>
          </Reveal>
        ))}
      </div>
    </PageShell>
  )
}
