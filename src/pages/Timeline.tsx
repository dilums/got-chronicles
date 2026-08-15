import { battles, timeline } from '../data/lore'
import { LoreImage, Ornament, PageShell, Reveal, useNav } from '../components/chrome'

export default function Timeline() {
  const { nav } = useNav()
  return (
    <PageShell
      kicker="Volume V"
      title="The Long Timeline"
      intro="Twelve thousand years in eight ages — from the coming of the First Men to the second Long Night. Years before Aegon’s Conquest are marked with the old reckoning; after it, in the years of the Throne."
    >
      <div className="relative">
        <div className="timeline-spine hidden md:block" />
        <div className="space-y-14 md:space-y-20">
          {timeline.map((era, ei) => (
            <div key={era.age} className="relative">
              {/* Era marker on the spine */}
              <Reveal className="text-center mb-8">
                <span className="inline-block card-parchment border-2 border-loregold/60 rounded-sm px-6 py-3 relative z-10">
                  <span className="font-display text-base md:text-xl tracking-[0.18em] uppercase text-[var(--ink)]">{era.age}</span>
                  <span className="block font-display text-[10px] tracking-[0.3em] uppercase text-[var(--gold-deep)] mt-1">{era.span}</span>
                </span>
              </Reveal>
              <div className="space-y-6 md:space-y-0">
                {era.events.map((ev, i) => {
                  const left = i % 2 === 0
                  return (
                    <Reveal key={ev.title} delay={i * 60} className={`md:grid md:grid-cols-2 md:gap-16 ${i > 0 ? 'md:mt-[-8px]' : ''}`}>
                      <div className={left ? '' : 'md:col-start-2'}>
                        <div className={`relative card-parchment rounded-sm p-5 md:p-6 ${left ? 'md:text-right' : ''}`}>
                          {/* spine dot */}
                          <span
                            className={`hidden md:block absolute top-7 w-3 h-3 rounded-full bg-[var(--gold)] shadow-[0_0_0_4px_var(--paper),0_0_12px_rgba(168,133,47,0.7)] ${
                              left ? '-right-[2.42rem]' : '-left-[2.42rem]'
                            }`}
                          />
                          {ev.image && (
                            <div className="mb-3 -mt-1 overflow-hidden rounded-sm border border-[var(--line)]">
                              <LoreImage
                                src={ev.image}
                                alt={`Illumination for ${ev.title}`}
                                className="w-full aspect-[16/8] object-cover hover:scale-105 transition-transform duration-700"
                              />
                            </div>
                          )}
                          <p className="font-display text-[11px] tracking-[0.35em] text-[var(--oxblood)]">{ev.year}</p>
                          <h3 className="font-display text-base md:text-lg tracking-[0.08em] uppercase text-[var(--ink)] mt-1">{ev.title}</h3>
                          <p className="text-[15px] leading-relaxed text-[var(--ink-soft)] mt-2">{ev.text}</p>
                          {ev.battleIds && ev.battleIds.length > 0 && (
                            <div className={`mt-4 flex flex-wrap gap-2 ${left ? 'md:justify-end' : ''}`}>
                              {ev.battleIds.map((bid) => {
                                const b = battles.find((x) => x.id === bid)
                                if (!b) return null
                                return (
                                  <button
                                    key={bid}
                                    onClick={() => nav('battles', bid)}
                                    className="lore-link font-display text-[10px] tracking-[0.22em] uppercase cursor-pointer"
                                  >
                                    ⚔ {b.name} →
                                  </button>
                                )
                              })}
                            </div>
                          )}
                        </div>
                      </div>
                    </Reveal>
                  )
                })}
              </div>
              {ei < timeline.length - 1 && <Ornament glyph="✦" className="max-w-[160px] mx-auto mt-12 md:mt-16" />}
            </div>
          ))}
        </div>
      </div>
      <Reveal className="mt-16 text-center">
        <p className="prose-lore max-w-2xl mx-auto">
          The maesters caution that the oldest dates are tallied from songs, not ledgers — yet every age agrees on the
          shape of the whole: <strong>the world has ended before, and the realm that survives is the one that remembers.</strong>
        </p>
      </Reveal>
    </PageShell>
  )
}
