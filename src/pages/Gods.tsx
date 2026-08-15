import { useEffect, useRef, useState } from 'react'
import { faiths } from '../data/lore'
import { LoreImage, Ornament, PageShell, Reveal } from '../components/chrome'

function FaithChapter({ id, defaultOpen }: { id: string; defaultOpen: boolean }) {
  const f = faiths.find((x) => x.id === id)!
  const [open, setOpen] = useState(defaultOpen)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (defaultOpen) ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [defaultOpen])

  const idx = faiths.findIndex((x) => x.id === id)
  const flip = idx % 2 === 1

  return (
    <Reveal>
      <article ref={ref} className="scroll-mt-28 card-parchment rounded-sm overflow-hidden">
        <div className={`grid md:grid-cols-2 ${flip ? 'md:[&>*:first-child]:order-2' : ''}`}>
          {f.image ? (
            <div className="relative min-h-[260px]">
              <LoreImage src={f.image} alt={`Painting of ${f.name}`} className="absolute inset-0 w-full h-full object-cover" />
              <div className={`absolute inset-0 ${flip ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-transparent to-[rgba(243,236,218,0.25)]`} />
            </div>
          ) : (
            <div className="relative min-h-[260px] bg-[var(--paper-deep)] flex items-center justify-center">
              <span className="font-display text-8xl text-loregold/40">✦</span>
            </div>
          )}
          <div className="p-6 md:p-10 flex flex-col">
            <p className="font-display text-[10px] tracking-[0.4em] uppercase text-[var(--gold-deep)]">{f.aka}</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-[0.08em] uppercase text-[var(--ink)] mt-2">{f.name}</h2>
            <p className="text-xs italic text-[var(--ink-faint)] mt-2">{f.origin}</p>
            <blockquote className="border-l-2 border-[var(--gold)] pl-4 mt-5 text-[17px] italic text-[var(--oxblood)] leading-relaxed">
              “{f.quote}”
            </blockquote>
            <p className="prose-lore mt-5 flex-1">{f.overview}</p>
            <div className="mt-6">
              <button onClick={() => setOpen((o) => !o)} className={open ? 'btn-ghost-lore rounded-sm px-6 py-3 text-[10px]' : 'btn-gold rounded-sm px-6 py-3 text-[10px]'}>
                {open ? 'Close the Liturgy' : 'Open the Liturgy'}
              </button>
            </div>
          </div>
        </div>

        {open && (
          <div className="border-t border-[var(--line)] px-6 md:px-10 py-8">
            <div className="grid lg:grid-cols-2 gap-10">
              <div className="prose-lore space-y-4">
                {f.body.map((p, i) => (
                  <p key={i} className={i === 0 ? 'dropcap' : ''}>
                    {p}
                  </p>
                ))}
              </div>
              <div>
                <h3 className="font-display text-sm tracking-[0.3em] uppercase text-[var(--ink)] mb-4">
                  Rites &amp; Faces
                </h3>
                <div className="space-y-3">
                  {f.tenets.map((t) => (
                    <div key={t.name} className="card-parchment rounded-sm px-5 py-4">
                      <p className="font-display text-xs tracking-[0.18em] uppercase text-[var(--gold-deep)]">{t.name}</p>
                      <p className="text-[15px] text-[var(--ink-soft)] mt-1.5 leading-relaxed">{t.text}</p>
                    </div>
                  ))}
                </div>
                <p className="text-xs italic text-[var(--ink-faint)] mt-5">
                  Symbol of the faith: {f.symbol}.
                </p>
              </div>
            </div>
          </div>
        )}
      </article>
    </Reveal>
  )
}

export default function Gods({ selectedId }: { selectedId?: string }) {
  return (
    <PageShell
      kicker="Volume III"
      title="Gods Old & New"
      intro="Nameless gods in the trees, a god with seven faces, a drowned god beneath the waves, a lord of fire, and the god all men meet in the end. Five faiths divide the souls of the known world."
    >
      <div className="space-y-8 md:space-y-12">
        {faiths.map((f) => (
          <FaithChapter key={f.id} id={f.id} defaultOpen={selectedId === f.id} />
        ))}
      </div>
      <Reveal className="mt-14 text-center">
        <Ornament glyph="❦" className="max-w-sm mx-auto mb-6" />
        <p className="prose-lore max-w-2xl mx-auto">
          Beyond these lie stranger altars: the Great Stallion of the Dothraki, the Shepherd of the Lhazareen, the
          Lion of Night in Yi Ti — and the nameless terror the red priests call only <em>the Great Other</em>.
        </p>
      </Reveal>
    </PageShell>
  )
}
