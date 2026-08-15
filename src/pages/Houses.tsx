import { allHouses } from '../data/more'
import { minorHouses, type House, type TreePerson } from '../data/lore'
import { DetailNav, LoreImage, Ornament, PageShell, Reveal, useNav, WaxSeal } from '../components/chrome'
import { Avatar } from '../components/Avatar'

// ── Recursive family tree ─────────────────────────────────────────────────────

function TreeNode({ p }: { p: TreePerson }) {
  return (
    <li>
      <div className="tree-box">
        <span className="flex items-center gap-2 text-left">
          <Avatar name={p.name} size={30} />
          <span className="flex flex-col">
            <span className="tree-name">{p.name}</span>
            {p.note && <span className="tree-note">{p.note}</span>}
          </span>
        </span>
      </div>
      {p.children && p.children.length > 0 && (
        <ul>
          {p.children.map((c, i) => (
            <TreeNode key={i} p={c} />
          ))}
        </ul>
      )}
    </li>
  )
}

function FamilyTree({ tree }: { tree: TreePerson[] }) {
  return (
    <div className="family-tree overflow-x-auto pb-4">
      <ul className="root">
        {tree.map((p, i) => (
          <TreeNode key={i} p={p} />
        ))}
      </ul>
    </div>
  )
}

// ── House detail page ─────────────────────────────────────────────────────────

function HousePage({ h }: { h: House }) {
  const { nav } = useNav()
  const idx = allHouses.findIndex((x) => x.id === h.id)
  const prev = allHouses[idx - 1]
  const next = allHouses[idx + 1]

  return (
    <main className="pb-28">
      {/* Banner hero */}
      <div className="relative h-[46vh] md:h-[62vh] min-h-[320px]">
        <LoreImage src={h.image} alt={`The sigil painting of ${h.name}`} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--paper)] via-[rgba(243,236,218,0.25)] to-[rgba(243,236,218,0.3)]" />
        <div className="absolute bottom-6 inset-x-0 max-w-6xl mx-auto px-5 md:px-8 flex items-end gap-5">
          <WaxSeal label={h.name.replace('House ', '')[0]} className="w-16 h-16 md:w-20 md:h-20 drop-shadow-xl shrink-0" />
          <div className="pb-1">
            <h1 className="font-display text-3xl md:text-5xl font-bold tracking-[0.06em] uppercase text-[var(--ink)] drop-shadow-sm">{h.name}</h1>
            <p className="font-display text-sm md:text-base tracking-[0.3em] uppercase text-[var(--oxblood)] mt-1">“{h.words}”</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-5 md:px-8 mt-8">
        <DetailNav
          backLabel="Return to the Great Houses"
          onBack={() => nav('houses')}
          prev={prev ? { label: prev.name, go: () => nav('houses', prev.id) } : undefined}
          next={next ? { label: next.name, go: () => nav('houses', next.id) } : undefined}
        />

        {/* Heraldry strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 card-parchment rounded-sm divide-x divide-[var(--line-soft)] mb-10">
          {[
            ['Sigil', h.sigil],
            ['Seat', h.seat],
            ['Region', h.region],
            ['Colors', h.colors],
          ].map(([k, v]) => (
            <div key={k} className="px-4 py-4 text-center">
              <p className="font-display text-[9px] tracking-[0.3em] uppercase text-[var(--gold-deep)] mb-1">{k}</p>
              <p className="text-sm text-[var(--ink-soft)] leading-snug">{v}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="font-display text-lg tracking-[0.2em] uppercase text-[var(--ink)] mb-4">The House’s History</h2>
            <div className="prose-lore space-y-4">
              {h.history.map((p, i) => (
                <p key={i} className={i === 0 ? 'dropcap' : ''}>
                  {p}
                </p>
              ))}
            </div>
            <h2 className="font-display text-lg tracking-[0.2em] uppercase text-[var(--ink)] mt-10 mb-4">Notable Names</h2>
            <div className="card-parchment rounded-sm divide-y divide-[var(--line-soft)]">
              {h.members.map((m) => (
                <div key={m.name} className="flex items-center gap-3 px-5 py-3">
                  <Avatar name={m.name} size={34} />
                  <span className="font-display text-sm tracking-[0.08em] text-[var(--ink)] shrink-0">{m.name}</span>
                  <span className="flex-1 border-b border-dotted border-loreink-faint/50 -translate-y-1" />
                  <span className="text-sm italic text-[var(--ink-faint)] text-right">{m.role}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-display text-lg tracking-[0.2em] uppercase text-[var(--ink)] mb-4">The Family Tree</h2>
            <div className="card-parchment rounded-sm p-5">
              <FamilyTree tree={h.tree} />
            </div>
            <p className="text-xs italic text-[var(--ink-faint)] mt-3 text-center">
              The line as the maesters record it — with the truths the songs keep.
            </p>
            <div className="mt-8 text-center">
              <button onClick={() => nav('map')} className="btn-ghost-lore rounded-sm px-8 py-3.5 text-xs">
                Find {h.region} upon the map
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Houses({ selectedId }: { selectedId?: string }) {
  const { nav } = useNav()
  const selected = allHouses.find((h) => h.id === selectedId)
  if (selected) return <HousePage h={selected} />

  return (
    <PageShell
      kicker="Volume I"
      title="The Great Houses"
      intro="Ten houses whose banners decided the fate of the realm — their sigils, their seats, their words, and the family trees the maesters keep. Press any banner to open the house’s dossier."
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
        {allHouses.map((h, i) => (
          <Reveal key={h.id} delay={(i % 4) * 80}>
            <button onClick={() => nav('houses', h.id)} className="group w-full text-left">
              <div className="banner-shape relative overflow-hidden shadow-[0_20px_40px_-18px_rgba(70,52,22,0.6)] group-hover:-translate-y-2 transition-transform duration-500">
                <LoreImage src={h.image} alt={`Banner painting of ${h.name}`} className="w-full aspect-[4/5] object-cover group-hover:scale-[1.05] transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(25,16,6,0.9)] via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 pb-[16%] px-3 text-center">
                  <p className="font-display text-[#f3ecda] text-xs md:text-sm tracking-[0.12em] uppercase leading-tight">{h.name}</p>
                  <p className="font-display text-[#d9c9a0] text-[8px] md:text-[10px] tracking-[0.24em] uppercase mt-1">{h.words}</p>
                </div>
              </div>
              <div className="text-center mt-3">
                <p className="text-sm italic text-[var(--ink-soft)]">
                  {h.seat} · {h.region}
                </p>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-16 md:mt-20">
        <Ornament glyph="❦" className="mb-8" />
        <h3 className="font-display text-xl md:text-2xl tracking-[0.15em] uppercase text-center text-[var(--ink)] mb-8">
          The Lesser Banners
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {minorHouses
            .filter((m) => !['House Tully', 'House Arryn', 'House Martell', 'House Bolton'].includes(m.name))
            .map((m) => (
              <div key={m.name} className="card-parchment rounded-sm px-4 py-4 text-center">
                <p className="font-display text-xs tracking-[0.14em] uppercase text-[var(--ink)]">{m.name}</p>
                <p className="text-[11px] italic text-[var(--ink-faint)] mt-1">{m.sigil}</p>
                <p className="text-[11px] text-[var(--ink-soft)] mt-1">{m.seat}</p>
                {m.words !== '—' && (
                  <p className="font-display text-[9px] tracking-[0.2em] uppercase text-[var(--oxblood)] mt-2">“{m.words}”</p>
                )}
              </div>
            ))}
        </div>
      </Reveal>
    </PageShell>
  )
}
