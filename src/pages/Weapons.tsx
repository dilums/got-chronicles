import { weapons } from '../data/realm'
import { LoreImage, PageShell, Reveal, useNav } from '../components/chrome'

const STEEL_CHIP: Record<string, { label: string; cls: string }> = {
  valyrian: { label: 'Valyrian steel', cls: 'text-[var(--oxblood)] border-[var(--oxblood)]/50' },
  legend: { label: 'Of legend', cls: 'text-[var(--gold-deep)] border-[var(--gold)]/60' },
  steel: { label: 'Castle steel', cls: 'text-[var(--ink-faint)] border-[var(--line)]' },
  other: { label: 'Singular', cls: 'text-[var(--ink-faint)] border-[var(--line)]' },
}

export default function Weapons() {
  const { nav } = useNav()
  return (
    <PageShell
      kicker="The Arsenal of the Age"
      title="Famous Weapons"
      intro="Kings are chronicled; so are their blades. The named swords and singular weapons of the known world — who bore them, and where they lie."
    >
      <Reveal>
        <LoreImage
          src="/img/weapons-banner.jpg"
          alt="Famous swords of Westeros laid upon an aged parchment map — a dark greatsword, a wolf-pommel blade, and a slender rapier"
          framed
          className="w-full aspect-[21/9] object-cover"
        />
      </Reveal>

      <div className="grid md:grid-cols-2 gap-6 mt-12 items-stretch">
        {weapons.map((w, i) => {
          const chip = STEEL_CHIP[w.steel]
          return (
            <Reveal key={w.id} delay={(i % 2) * 60} className="h-full">
              <article className="h-full card-parchment rounded-sm p-6 flex flex-col hover:border-[var(--gold)] hover:shadow-[0_18px_40px_-20px_rgba(70,52,22,0.5)] transition-all">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-display text-lg md:text-xl tracking-[0.08em] uppercase text-[var(--ink)]">{w.name}</h3>
                  <span className={`rounded-sm border px-2 py-0.5 font-display text-[9px] tracking-[0.22em] uppercase ${chip.cls}`}>{chip.label}</span>
                </div>
                <p className="mt-1 font-display text-[10px] tracking-[0.28em] uppercase text-[var(--gold-deep)]">{w.kind}</p>
                <p className="mt-1 text-sm italic text-[var(--ink-faint)]">{w.wielder}</p>
                <p className="mt-3 text-[15px] leading-relaxed text-[var(--ink-soft)]">{w.text}</p>
                <p className="mt-auto pt-4 text-sm italic text-[var(--oxblood)] border-t border-[var(--line)] mt-4">{w.status}</p>
              </article>
            </Reveal>
          )
        })}
      </div>

      {/* Cross-link to Valyrian steel */}
      <Reveal className="mt-14">
        <button
          onClick={() => nav('valyrian')}
          className="group w-full card-parchment rounded-sm overflow-hidden text-left hover:border-[var(--gold)] transition-colors cursor-pointer"
        >
          <div className="relative h-44 md:h-56">
            <LoreImage
              src="/img/valyrian-banner.jpg"
              alt="A dark rippled Valyrian steel blade glowing faintly with dragonfire"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[rgba(43,33,24,0.78)] via-[rgba(43,33,24,0.35)] to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-center px-7 md:px-10">
              <p className="font-display text-[10px] tracking-[0.35em] uppercase text-[var(--gold-bright)]">The lost art</p>
              <p className="font-display text-xl md:text-3xl tracking-[0.08em] uppercase text-[var(--paper-card)] mt-1">Valyrian Steel →</p>
              <p className="text-sm md:text-base italic text-[var(--paper)]/90 mt-1 max-w-md">The known blades, their keepers, and their fates — fourteen of two hundred twenty-seven.</p>
            </div>
          </div>
        </button>
      </Reveal>
    </PageShell>
  )
}
