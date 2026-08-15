import { useEffect, useRef, useState } from 'react'
import { myths } from '../data/lore'
import { LoreImage, Ornament, PageShell, Reveal } from '../components/chrome'

function MythChapter({ id, defaultOpen, index }: { id: string; defaultOpen: boolean; index: number }) {
  const m = myths.find((x) => x.id === id)!
  const [open, setOpen] = useState(defaultOpen)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    if (defaultOpen) ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [defaultOpen])

  return (
    <Reveal>
      <article ref={ref} className="scroll-mt-28 relative">
        {/* Chapter header */}
        <div className="flex items-baseline gap-4 md:gap-6 mb-5">
          <span className="font-display text-4xl md:text-6xl font-bold text-loregold/45 leading-none shrink-0 w-12 md:w-20 text-center">
            {['I', 'II', 'III', 'IV', 'V', 'VI'][index]}
          </span>
          <div className="min-w-0">
            <p className="font-display text-[10px] tracking-[0.4em] uppercase text-[var(--gold-deep)]">{m.era}</p>
            <h2 className="font-display text-2xl md:text-4xl font-bold tracking-[0.06em] uppercase text-[var(--ink)] leading-tight">
              {m.title}
            </h2>
          </div>
        </div>

        {m.image ? (
          <LoreImage src={m.image} alt={`Illumination for ${m.title}`} framed className="w-full aspect-[3/2] md:aspect-[21/9] object-cover" />
        ) : (
          <div className="frame-chamfer">
            <div className="frame-inner bg-[var(--paper-deep)] aspect-[21/5] flex items-center justify-center">
              <Ornament glyph="❦" className="max-w-md w-full px-8" />
            </div>
          </div>
        )}

        <div className="max-w-3xl mx-auto mt-8">
          <p className="text-xl md:text-2xl leading-relaxed text-[var(--ink)] font-medium text-center italic">{m.excerpt}</p>
          <Ornament className="max-w-[180px] mx-auto my-6" glyph="✦" />
          <div className="prose-lore space-y-4">
            {(open ? m.body : m.body.slice(0, 1)).map((p, i) => (
              <p key={i} className={i === 0 ? 'dropcap' : ''}>
                {p}
              </p>
            ))}
          </div>
          <div className="text-center mt-7">
            <button onClick={() => setOpen((o) => !o)} className={open ? 'btn-ghost-lore rounded-sm px-7 py-3 text-[10px]' : 'btn-gold rounded-sm px-7 py-3 text-[10px]'}>
              {open ? 'Rest the Tale' : 'Hear the Whole Tale'}
            </button>
          </div>
          {open && (
            <div className="flex flex-wrap justify-center gap-2 mt-7">
              {m.motifs.map((t) => (
                <span key={t} className="font-display text-[10px] tracking-[0.18em] uppercase text-[var(--gold-deep)] border border-loregold/60 rounded-full px-4 py-1.5 bg-[var(--paper-card)]">
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
        <Ornament glyph="❧" className="max-w-sm mx-auto mt-12" />
      </article>
    </Reveal>
  )
}

export default function Myths({ selectedId }: { selectedId?: string }) {
  return (
    <PageShell
      kicker="Volume IV"
      title="Myths & Legends"
      intro="Six tales from before the maesters’ records — half history, half song, and wholly true in the ways that matter. The North remembers; so does the archive."
    >
      <div className="space-y-14 md:space-y-20">
        {myths.map((m, i) => (
          <MythChapter key={m.id} id={m.id} index={i} defaultOpen={selectedId === m.id} />
        ))}
      </div>
    </PageShell>
  )
}
