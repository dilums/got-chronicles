import { valyrianBlades, valyrianHistory, valyrianTraits } from '../data/realm'
import { LoreImage, PageShell, Reveal, SectionHead } from '../components/chrome'

const FATE_DOT: Record<string, { label: string; dot: string }> = {
  held: { label: 'Still held', dot: 'bg-[var(--gold)]' },
  lost: { label: 'Lost', dot: 'bg-[var(--oxblood)]' },
  reforged: { label: 'Reforged', dot: 'bg-[var(--ink-soft)]' },
  unknown: { label: 'Unknown', dot: 'bg-[var(--ink-faint)]' },
}

export default function Valyrian() {
  return (
    <PageShell
      kicker="The Lost Art"
      title="Valyrian Steel"
      intro="Spell-forged in the Freehold, unrepeatable since the Doom — lighter, stronger, ever-sharp, and the one metal that answers the Others. The history, the properties, and the tally of the known blades."
    >
      <Reveal>
        <LoreImage
          src="/img/valyrian-banner.jpg"
          alt="A Valyrian steel blade with smoky folded ripples, faintly lit by dragonfire"
          framed
          className="w-full aspect-[21/9] object-cover"
        />
      </Reveal>

      {/* Properties */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 items-stretch">
        {valyrianTraits.map((t, i) => (
          <Reveal key={t.name} delay={i * 60} className="h-full">
            <div className="h-full card-parchment rounded-sm p-5 text-center">
              <p className="font-display text-xs md:text-sm tracking-[0.14em] uppercase text-[var(--gold-deep)]">{t.name}</p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)]">{t.text}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* History */}
      <div className="prose-lore max-w-3xl mx-auto mt-14 space-y-5">
        {valyrianHistory.map((p) => (
          <Reveal key={p.slice(0, 24)}>
            <p>{p}</p>
          </Reveal>
        ))}
      </div>

      {/* The known blades */}
      <SectionHead
        kicker="The Citadel's Tally"
        title="The Known Blades"
        intro="Two hundred twenty-seven Valyrian steel blades are counted in Westeros — these fourteen the songs remember by name."
      />
      <Reveal>
        <div className="card-parchment rounded-sm overflow-hidden max-w-5xl mx-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b-2 border-[var(--gold)]/50">
                <th className="font-display text-[10px] tracking-[0.3em] uppercase text-[var(--gold-deep)] px-5 py-3.5">Blade</th>
                <th className="font-display text-[10px] tracking-[0.3em] uppercase text-[var(--gold-deep)] px-5 py-3.5 hidden sm:table-cell">Last Keepers</th>
                <th className="font-display text-[10px] tracking-[0.3em] uppercase text-[var(--gold-deep)] px-5 py-3.5">Where It Lies</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--line-soft)]">
              {valyrianBlades.map((b) => {
                const f = FATE_DOT[b.fateKind]
                return (
                  <tr key={b.blade} className="hover:bg-loregold/10 transition-colors align-top">
                    <td className="px-5 py-3.5 font-display text-sm tracking-[0.06em] uppercase text-[var(--ink)]">{b.blade}</td>
                    <td className="px-5 py-3.5 text-sm text-[var(--ink-soft)] hidden sm:table-cell">{b.keeper}</td>
                    <td className="px-5 py-3.5 text-sm text-[var(--ink-soft)]">
                      <span className="inline-flex items-center gap-2">
                        <span className={`w-2 h-2 rotate-45 shrink-0 ${f.dot}`} title={f.label} />
                        <span className="italic">{b.fate}</span>
                      </span>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          <p className="px-5 py-3 border-t border-[var(--line)] text-xs italic text-[var(--ink-faint)] flex flex-wrap gap-x-5 gap-y-1">
            <span className="inline-flex items-center gap-1.5"><span className="w-2 h-2 rotate-45 bg-[var(--gold)]" /> still held</span>
            <span className="inline-flex items-center gap-1.5"><span className="w-2 h-2 rotate-45 bg-[var(--oxblood)]" /> lost to history</span>
            <span className="inline-flex items-center gap-1.5"><span className="w-2 h-2 rotate-45 bg-[var(--ink-soft)]" /> reforged anew</span>
            <span className="inline-flex items-center gap-1.5"><span className="w-2 h-2 rotate-45 bg-[var(--ink-faint)]" /> whereabouts unknown</span>
          </p>
        </div>
      </Reveal>

      <Reveal className="mt-14 text-center">
        <p className="prose-lore max-w-2xl mx-auto">
          The maesters set the last fact down in their driest hand, as if that could make it less strange:
          <strong> dragonglass and dragonsteel — and the dead do not argue with either.</strong>
        </p>
      </Reveal>
    </PageShell>
  )
}
