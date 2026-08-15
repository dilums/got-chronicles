import { peoples } from '../data/realm'
import { LoreImage, Ornament, PageShell, Reveal } from '../components/chrome'

export default function Cultures() {
  return (
    <PageShell
      kicker="The Smallfolk & the Strange"
      title="Peoples & Cultures"
      intro="The Iron Throne is one story; the peoples beneath and beyond it are a hundred. Six cultures of the known world — their creeds, their customs, and the words they live by."
    >
      <div className="space-y-16 md:space-y-24 max-w-6xl mx-auto">
        {peoples.map((p, i) => {
          const flip = i % 2 === 1
          return (
            <Reveal key={p.id}>
              <article className={`grid md:grid-cols-2 gap-6 md:gap-10 items-center`}>
                <div className={flip ? 'md:order-2' : ''}>
                  <LoreImage
                    src={p.image}
                    alt={`Painting of ${p.name} — ${p.aka}`}
                    framed
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>
                <div className={flip ? 'md:order-1' : ''}>
                  <p className="font-display text-[10px] tracking-[0.35em] uppercase text-[var(--gold-deep)]">{p.realm}</p>
                  <h2 className="font-display text-2xl md:text-4xl tracking-[0.06em] uppercase text-[var(--ink)] mt-2">{p.name}</h2>
                  <p className="text-sm md:text-base italic text-[var(--ink-faint)] mt-1">{p.aka}</p>
                  <blockquote className="mt-4 border-l-2 border-[var(--gold)] pl-4 text-base md:text-lg italic text-[var(--oxblood)]">“{p.quote}”</blockquote>
                  <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-[var(--ink-soft)]">
                    {p.body.map((para) => (
                      <p key={para.slice(0, 24)}>{para}</p>
                    ))}
                  </div>
                </div>
                <div className={`md:col-span-2 grid sm:grid-cols-2 lg:grid-cols-4 gap-3 ${flip ? '' : ''}`}>
                  {p.traits.map((t) => (
                    <div key={t.name} className="card-parchment rounded-sm px-4 py-3.5 hover:border-[var(--gold)] transition-colors">
                      <p className="font-display text-[11px] tracking-[0.18em] uppercase text-[var(--gold-deep)]">{t.name}</p>
                      <p className="mt-1 text-sm leading-relaxed text-[var(--ink-soft)]">{t.text}</p>
                    </div>
                  ))}
                </div>
              </article>
              {i < peoples.length - 1 && <Ornament glyph="❦" className="max-w-[220px] mx-auto mt-16 md:mt-24" />}
            </Reveal>
          )
        })}
      </div>
    </PageShell>
  )
}
