import { rivalClaims, rulers, throneIntro } from '../data/realm'
import { LoreImage, Ornament, PageShell, Reveal, SectionHead } from '../components/chrome'
import { Avatar } from '../components/Avatar'

const HOUSE_MARK: Record<string, { label: string; dot: string }> = {
  dragon: { label: 'House Targaryen', dot: 'bg-[var(--oxblood)]' },
  stag: { label: 'House Baratheon', dot: 'bg-[var(--gold)]' },
  lion: { label: 'House Lannister', dot: 'bg-[#b03a2e]' },
}

export default function Throne() {
  return (
    <PageShell
      kicker="The Seat of Kings"
      title="The Iron Throne"
      intro="A thousand blades fused by dragonfire into a chair no man sits comfortably — the chronicle of every reign it recognized, and of every claim it cut down."
    >
      <Reveal>
        <LoreImage
          src="/img/iron-throne.jpg"
          alt="The Iron Throne of Westeros, a jagged seat of a thousand swords in a dark torchlit hall"
          framed
          className="w-full aspect-[21/9] object-cover"
        />
      </Reveal>

      <div className="prose-lore max-w-3xl mx-auto mt-10 space-y-5">
        {throneIntro.map((p) => (
          <Reveal key={p.slice(0, 24)}>
            <p>{p}</p>
          </Reveal>
        ))}
      </div>

      {/* The line of reigns */}
      <SectionHead kicker="Three Centuries of Reigns" title="The Kings Who Sat It" />
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-[27px] md:left-[31px] top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-[var(--gold)]/50 to-transparent" />
        <ol className="space-y-4">
          {rulers.map((r, i) => {
            const mark = HOUSE_MARK[r.house]
            return (
              <Reveal key={r.name} delay={Math.min(i * 30, 240)}>
                <li className="relative flex gap-4 md:gap-6 items-start">
                  <span className="relative z-10 mt-1 grid place-items-center w-[54px] h-[54px] md:w-[62px] md:h-[62px] shrink-0 rounded-full card-parchment border border-[var(--gold)]/60 shadow-sm">
                    <Avatar name={r.name} size={44} />
                  </span>
                  <div className="flex-1 card-parchment rounded-sm px-5 py-4 hover:border-[var(--gold)] transition-colors">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <span className="font-display text-[10px] tracking-[0.3em] text-[var(--gold-deep)]">{String(i + 1).padStart(2, '0')}</span>
                      <h3 className="font-display text-base md:text-lg tracking-[0.06em] uppercase text-[var(--ink)]">{r.name}</h3>
                      {r.epithet && <span className="text-sm italic text-[var(--oxblood)]">“{r.epithet}”</span>}
                      <span className="ml-auto flex items-center gap-2 font-display text-[10px] tracking-[0.2em] uppercase text-[var(--ink-faint)]">
                        <span className={`w-2 h-2 rotate-45 ${mark.dot}`} />
                        {r.reign}
                      </span>
                    </div>
                    <p className="text-[15px] leading-relaxed text-[var(--ink-soft)] mt-1.5">{r.note}</p>
                    <p className="mt-2 text-sm italic text-[var(--ink-faint)] border-t border-[var(--line)] pt-2">How it ended — {r.end}</p>
                  </div>
                </li>
              </Reveal>
            )
          })}
        </ol>
      </div>

      <Ornament glyph="✦" className="max-w-[200px] mx-auto my-14" />

      {/* Rival claims */}
      <SectionHead
        kicker="The Blades It Drew"
        title="The Claims It Never Recognized"
        intro="For every king the throne accepted, another bled for it in vain. Six claims that history recorded and the chair refused."
      />
      <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto items-stretch">
        {rivalClaims.map((c, i) => (
          <Reveal key={c.name} delay={i * 50} className="h-full">
            <div className="h-full card-parchment rounded-sm p-5 flex gap-4 items-start hover:border-[var(--gold)] transition-colors">
              <Avatar name={c.name} size={48} />
              <div className="min-w-0">
                <h3 className="font-display text-sm md:text-base tracking-[0.08em] uppercase text-[var(--ink)]">{c.name}</h3>
                <p className="text-[14px] leading-relaxed text-[var(--ink-soft)] mt-1">{c.claim}</p>
                <p className="mt-2 text-sm italic text-[var(--oxblood)]">{c.fate}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-14 text-center">
        <p className="prose-lore max-w-2xl mx-auto">
          “Have you ever seen the Iron Throne? The barbs along the back, the ribbons of twisted steel? It is not a
          comfortable seat. <strong>Aerys cut himself so often men took to calling him King Scab.</strong>”
        </p>
        <p className="font-display text-[10px] tracking-[0.3em] uppercase text-[var(--gold-deep)] mt-3">— Stannis Baratheon</p>
      </Reveal>
    </PageShell>
  )
}
