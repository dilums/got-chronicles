import { orders } from '../data/realm'
import { LoreImage, Ornament, PageShell, Reveal, WaxSeal } from '../components/chrome'

export default function Orders() {
  return (
    <PageShell
      kicker="The Sworn & the Secret"
      title="Orders & Oaths"
      intro="Between the great houses stand the sworn brotherhoods and secret societies that actually keep the realm — the watch on the Wall, the white cloaks, the grey chains, and the ones who serve stranger masters."
    >
      <div className="space-y-16 md:space-y-24 max-w-6xl mx-auto">
        {orders.map((o, i) => {
          const flip = i % 2 === 1
          return (
            <Reveal key={o.id}>
              <article className="grid md:grid-cols-2 gap-6 md:gap-10 items-center">
                <div className={flip ? 'md:order-2' : ''}>
                  <LoreImage
                    src={o.image}
                    alt={`Painting of ${o.name} — ${o.aka}`}
                    framed
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>
                <div className={flip ? 'md:order-1' : ''}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-display text-[10px] tracking-[0.35em] uppercase text-[var(--gold-deep)]">{o.seat}</p>
                      <h2 className="font-display text-2xl md:text-4xl tracking-[0.06em] uppercase text-[var(--ink)] mt-2">{o.name}</h2>
                      <p className="text-sm md:text-base italic text-[var(--ink-faint)] mt-1">{o.aka}</p>
                    </div>
                    <WaxSeal label={o.name.split(' ').filter((w) => w.toLowerCase() !== 'the').map((w) => w[0]).slice(0, 2).join('')} className="hidden sm:block shrink-0" />
                  </div>
                  <p className="mt-3 font-display text-[10px] tracking-[0.22em] uppercase text-[var(--ink-faint)]">Founded — {o.founded}</p>
                  <blockquote className="mt-3 border-l-2 border-[var(--gold)] pl-4 text-base md:text-lg italic text-[var(--oxblood)]">“{o.quote}”</blockquote>
                  <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-[var(--ink-soft)]">
                    {o.body.map((para) => (
                      <p key={para.slice(0, 24)}>{para}</p>
                    ))}
                  </div>
                </div>
                <div className="md:col-span-2 card-parchment rounded-sm px-5 py-4">
                  <p className="font-display text-[10px] tracking-[0.3em] uppercase text-[var(--gold-deep)] mb-3">The oath binds them to</p>
                  <div className="flex flex-wrap gap-2">
                    {o.vows.map((v) => (
                      <span key={v} className="rounded-sm border border-[var(--line)] bg-[var(--paper-deep)] px-3 py-1.5 text-sm italic text-[var(--ink-soft)]">
                        {v}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
              {i < orders.length - 1 && <Ornament glyph="⚔" className="max-w-[220px] mx-auto mt-16 md:mt-24" />}
            </Reveal>
          )
        })}
      </div>
    </PageShell>
  )
}
