import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { regions } from '../data/lore'
import { Reveal, WaxSeal } from '../components/chrome'

const ASPECT = 1536 / 1024 // map image width / height
const Z_MAX = 5

interface View { z: number; tx: number; ty: number }
interface Geo { sw: number; sh: number }

function clampView(v: View, geo: Geo, fs: number, lh: number): View {
  const S = fs * v.z
  const W = geo.sw * S
  const H = lh * S
  let { tx, ty } = v
  if (W <= geo.sw) tx = (geo.sw - W) / 2
  else tx = Math.min(0, Math.max(geo.sw - W, tx))
  if (H <= geo.sh) ty = (geo.sh - H) / 2
  else ty = Math.min(0, Math.max(geo.sh - H, ty))
  return { z: v.z, tx, ty }
}

function zoomAt(v: View, px: number, py: number, factor: number): View {
  const z2 = Math.min(Z_MAX, Math.max(1, v.z * factor))
  const k = z2 / v.z
  return { z: z2, tx: px - (px - v.tx) * k, ty: py - (py - v.ty) * k }
}

export default function MapPage({ selectedId }: { selectedId?: string }) {
  const [activeId, setActiveId] = useState<string>(selectedId ?? 'the-north')
  const active = regions.find((r) => r.id === activeId) ?? regions[0]

  const stageRef = useRef<HTMLDivElement>(null)
  const [geo, setGeo] = useState<Geo>({ sw: 0, sh: 0 })
  const [view, setView] = useState<View>({ z: 1, tx: 0, ty: 0 })
  const [dragging, setDragging] = useState(false)
  const viewRef = useRef(view)
  viewRef.current = view
  const pointers = useRef(new Map<number, { x: number; y: number }>())
  const gesture = useRef<{
    mode: 'pan' | 'pinch'
    sx: number; sy: number; tx: number; ty: number; z: number; dist: number; moved: number
  } | null>(null)
  const suppressClick = useRef(false)

  useLayoutEffect(() => {
    const el = stageRef.current
    if (!el) return
    const measure = () => setGeo({ sw: el.clientWidth, sh: el.clientHeight })
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const lh = geo.sw / ASPECT
  // Fill the stage at 100%: scale so the map covers both dimensions (never letterboxed)
  const fs = geo.sw ? Math.max(1, geo.sh / lh) : 1
  const S = fs * view.z

  // Re-clamp once the stage has been measured so the view starts centered/covered
  useEffect(() => {
    if (geo.sw) setView((v) => clampView(v, geo, fs, lh))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [geo.sw, geo.sh])

  const apply = (fn: (v: View) => View) =>
    setView((v) => clampView(fn(v), geo, fs, lh))

  // No wheel zoom — the page must scroll normally; zoom lives on the +/− buttons and pinch.

  const onPointerDown = (e: React.PointerEvent) => {
    if ((e.target as HTMLElement).closest('button, a, input, [data-dossier]')) return
    stageRef.current?.setPointerCapture?.(e.pointerId)
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY })
    if (pointers.current.size === 1) {
      const v = viewRef.current
      gesture.current = { mode: 'pan', sx: e.clientX, sy: e.clientY, tx: v.tx, ty: v.ty, z: v.z, dist: 0, moved: 0 }
      setDragging(true)
    } else if (pointers.current.size === 2) {
      const [a, b] = [...pointers.current.values()]
      const v = viewRef.current
      gesture.current = {
        mode: 'pinch', sx: 0, sy: 0, tx: v.tx, ty: v.ty, z: v.z,
        dist: Math.hypot(a.x - b.x, a.y - b.y), moved: 99,
      }
    }
  }

  const onPointerMove = (e: React.PointerEvent) => {
    if (!pointers.current.has(e.pointerId)) return
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY })
    const g = gesture.current
    if (!g || !stageRef.current) return
    const rect = stageRef.current.getBoundingClientRect()
    if (g.mode === 'pan') {
      const dx = e.clientX - g.sx
      const dy = e.clientY - g.sy
      g.moved = Math.max(g.moved, Math.hypot(dx, dy))
      setView((v) => clampView({ z: v.z, tx: g.tx + dx, ty: g.ty + dy }, geo, fs, lh))
    } else if (pointers.current.size >= 2) {
      const [a, b] = [...pointers.current.values()]
      const d = Math.hypot(a.x - b.x, a.y - b.y) || 1
      const mx = (a.x + b.x) / 2 - rect.left
      const my = (a.y + b.y) / 2 - rect.top
      setView(() =>
        clampView(zoomAt({ z: g.z, tx: g.tx, ty: g.ty }, mx, my, d / g.dist), geo, fs, lh),
      )
    }
  }

  const onPointerUp = (e: React.PointerEvent) => {
    const g = gesture.current
    if (g && g.moved > 6) suppressClick.current = true
    pointers.current.delete(e.pointerId)
    if (pointers.current.size === 0) {
      gesture.current = null
      setDragging(false)
    } else if (pointers.current.size === 1) {
      const [p] = [...pointers.current.values()]
      const v = viewRef.current
      gesture.current = { mode: 'pan', sx: p.x, sy: p.y, tx: v.tx, ty: v.ty, z: v.z, dist: 0, moved: 99 }
    }
  }

  const flyTo = (id: string) => {
    setActiveId(id)
    const r = regions.find((x) => x.id === id)
    if (!r?.pin || !geo.sw) return
    const zT = Math.max(viewRef.current.z, 2.6)
    const target: View = {
      z: zT,
      tx: geo.sw / 2 - (r.pin.x / 100) * geo.sw * fs * zT,
      ty: geo.sh / 2 - (r.pin.y / 100) * lh * fs * zT,
    }
    setView(clampView(target, geo, fs, lh))
  }

  const zoomBtn = (factor: number) =>
    apply((v) => zoomAt(v, geo.sw / 2, geo.sh / 2, factor))

  const reset = () => setView(clampView({ z: 1, tx: 0, ty: 0 }, geo, fs, lh))

  const [selectorOpen, setSelectorOpen] = useState(true)

  const selectorItem = (r: (typeof regions)[number], compact = false) => (
    <button
      key={r.id}
      onClick={() => flyTo(r.id)}
      className={`w-full rounded-sm text-left transition-colors ${
        compact ? 'px-2.5 py-2' : 'px-3 py-2.5'
      } ${
        activeId === r.id
          ? 'bg-loregold/20 ring-1 ring-[--gold]'
          : 'hover:bg-loregold/10'
      }`}
    >
      <span className="flex items-center gap-2">
        <span
          className={`block h-2 w-2 rotate-45 shrink-0 ${
            activeId === r.id ? 'bg-[--gold-bright] shadow-[0_0_6px_rgba(201,168,76,0.9)]' : 'bg-loregold/70'
          }`}
        />
        <span className={`font-display uppercase tracking-[0.12em] text-[--ink] ${compact ? 'text-[9px]' : 'text-[10px]'}`}>
          {r.name}
        </span>
      </span>
      {!compact && <span className="mt-0.5 block pl-4 text-[10px] italic text-[--ink-faint]">{r.seat}</span>}
    </button>
  )

  return (
    <div className="px-4 pb-16 pt-24 sm:px-6 lg:px-8 lg:pt-28">
      <div className="mx-auto max-w-[1600px]">
        {/* Header */}
        <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-display text-[11px] uppercase tracking-[0.4em] text-[--gold]">Volume VI · Cartography</p>
            <h1 className="mt-1 font-display text-3xl tracking-[0.06em] text-[--ink] sm:text-4xl">The Map of Westeros</h1>
          </div>
          <p className="text-sm italic text-[--ink-faint]">Drag to pan · the + and − lenses (or a pinch) zoom · press a golden seal to fly to a realm</p>
        </div>

        {/* Stage */}
        <Reveal>
          <div
            ref={stageRef}
            className={`frame-chamfer relative h-[68vh] min-h-[460px] select-none overflow-hidden lg:h-[calc(100vh-12rem)] ${
              dragging ? 'cursor-grabbing' : 'cursor-grab'
            }`}
            style={{ touchAction: 'pan-y' }}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
          >
            {/* Transform layer */}
            <div
              className="absolute left-0 top-0"
              style={{
                width: geo.sw || '100%',
                height: lh || '100%',
                transform: `translate(${view.tx}px, ${view.ty}px) scale(${S})`,
                transformOrigin: '0 0',
                transition: dragging ? 'none' : 'transform 0.5s cubic-bezier(0.22, 0.8, 0.3, 1)',
              }}
            >
              <img
                src="/img/map-westeros.jpg"
                alt="Antique map of Westeros"
                className="block h-full w-full"
                draggable={false}
              />
              {regions
                .filter((r) => r.pin)
                .map((r) => (
                  <button
                    key={r.id}
                    onClick={() => {
                      if (suppressClick.current) { suppressClick.current = false; return }
                      flyTo(r.id)
                    }}
                    className="group absolute -translate-x-1/2 -translate-y-1/2"
                    style={{
                      left: `${r.pin!.x}%`,
                      top: `${r.pin!.y}%`,
                      transform: `translate(-50%, -50%) scale(${1 / S})`,
                    }}
                    aria-label={r.name}
                  >
                    <span
                      className={`mx-auto block h-3.5 w-3.5 rotate-45 border transition-all duration-300 ${
                        activeId === r.id
                          ? 'scale-125 border-[--gold-deep] bg-[--gold-bright] shadow-[0_0_0_4px_rgba(201,168,76,0.35),0_2px_10px_rgba(43,33,24,0.5)]'
                          : 'border-[--gold-deep] bg-[--gold] shadow-[0_0_0_3px_rgba(201,168,76,0.25),0_2px_8px_rgba(43,33,24,0.45)] group-hover:scale-110 group-hover:bg-[--gold-bright]'
                      }`}
                    />
                    <span
                      className={`mt-2 block whitespace-nowrap rounded-sm border px-2.5 py-1 font-display text-[11px] font-semibold uppercase tracking-[0.14em] shadow-[0_2px_8px_rgba(43,33,24,0.35)] transition-colors ${
                        activeId === r.id
                          ? 'border-[--gold] bg-[--ink] text-[--gold-bright]'
                          : 'border-loregold-deep/60 bg-[--paper-card] text-[--ink] group-hover:border-[--gold] group-hover:bg-[--gold-bright]'
                      }`}
                    >
                      {r.name}
                    </span>
                  </button>
                ))}
            </div>

            {/* Region selector — desktop: collapsible left strip */}
            <div data-dossier className="absolute left-3 top-3 z-10 hidden lg:block">
              {selectorOpen ? (
                <div className="w-[190px] overflow-hidden rounded-sm border border-loregold/70 bg-parchment-card/95 shadow-[0_10px_30px_rgba(43,33,24,0.35)]">
                  <div className="flex items-center justify-between border-b border-[--line] px-3 py-2">
                    <span className="font-display text-[9px] uppercase tracking-[0.3em] text-[--gold-deep]">Choose a realm</span>
                    <button
                      onClick={() => setSelectorOpen(false)}
                      title="Fold away the index"
                      className="font-display text-[11px] text-[--ink-faint] hover:text-[--gold-deep]"
                    >
                      ⟨
                    </button>
                  </div>
                  <div className="max-h-[calc(68vh-6rem)] space-y-0.5 overflow-y-auto p-1.5 lg:max-h-[calc(100vh-19rem)]">
                    {regions.map((r) => selectorItem(r))}
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => setSelectorOpen(true)}
                  title="Open the index of realms"
                  className="flex h-24 w-8 flex-col items-center justify-center gap-1 rounded-sm border border-loregold/60 bg-parchment-card/85 shadow-lg backdrop-blur-[3px] hover:bg-loregold/20"
                >
                  <span className="font-display text-[10px] text-[--gold-deep]">⟩</span>
                  <span className="font-display text-[8px] uppercase tracking-[0.25em] text-[--ink-soft] [writing-mode:vertical-rl]">
                    Realms
                  </span>
                </button>
              )}
            </div>

            {/* Region selector — mobile: compact chips at top */}
            <div data-dossier className="absolute inset-x-3 top-3 z-10 lg:hidden">
              <div className="flex flex-wrap gap-1.5">
                {regions.map((r) => (
                  <button
                    key={r.id}
                    onClick={() => flyTo(r.id)}
                    className={`rounded-sm border px-2 py-1 font-display text-[9px] uppercase tracking-[0.1em] backdrop-blur-[2px] transition-colors ${
                      activeId === r.id
                        ? 'border-[--gold] bg-loreink/85 text-[--gold-bright]'
                        : 'border-[--line] bg-parchment-card/80 text-[--ink]'
                    }`}
                  >
                    {r.name.replace('The ', '')}
                  </button>
                ))}
              </div>
            </div>

            {/* Zoom controls */}
            <div className="absolute bottom-4 right-4 z-10 flex flex-col gap-2">
              {[
                {
                  key: 'in',
                  act: () => zoomBtn(1.6),
                  title: 'Zoom in',
                  icon: (
                    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M10 3 V17 M3 10 H17" />
                    </svg>
                  ),
                },
                {
                  key: 'out',
                  act: () => zoomBtn(1 / 1.6),
                  title: 'Zoom out',
                  icon: (
                    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 10 H17" />
                    </svg>
                  ),
                },
                {
                  key: 'reset',
                  act: reset,
                  title: 'Reset view',
                  icon: (
                    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M3 7 V3 H7 M13 3 H17 V7 M17 13 V17 H13 M7 17 H3 V13" />
                    </svg>
                  ),
                },
              ].map((b) => (
                <button
                  key={b.key}
                  onClick={b.act}
                  title={b.title}
                  className="flex h-10 w-10 items-center justify-center rounded-sm border border-[--gold] bg-[--paper-card] text-[--gold-deep] shadow-[0_4px_14px_rgba(43,33,24,0.4)] transition-colors hover:bg-[--gold] hover:text-[--paper-card]"
                >
                  {b.icon}
                </button>
              ))}
            </div>

            {/* Zoom readout */}
            <div className="absolute bottom-4 left-4 z-10 rounded-sm border border-[--line] bg-parchment-card/90 px-3 py-1.5 font-display text-[10px] uppercase tracking-[0.25em] text-[--ink-soft]">
              {Math.round(view.z * 100)}%
            </div>
          </div>
        </Reveal>

        {/* Dossier — below the map */}
        <Reveal className="mt-6">
          <div className="card-parchment p-6 md:p-8">
            <div className="grid items-start gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.6fr)_minmax(0,1.3fr)] md:gap-10">
              <div>
                <div className="flex items-center gap-4">
                  <WaxSeal label={active.name.replace('The ', '')[0]} className="h-14 w-14 shrink-0" />
                  <div>
                    <p className="font-display text-[10px] uppercase tracking-[0.35em] text-[--gold-deep]">{active.house}</p>
                    <h2 className="font-display text-2xl font-bold uppercase leading-tight tracking-[0.06em] text-[--ink]">
                      {active.name}
                    </h2>
                  </div>
                </div>
                <div className="mt-4 space-y-2 border-t border-[--line] pt-4">
                  <p className="text-[13px] text-[--ink-soft]">
                    <span className="font-display text-[9px] uppercase tracking-[0.25em] text-[--gold-deep]">Seat — </span>
                    {active.seat}
                  </p>
                  <p className="text-[13px] text-[--ink-soft]">
                    <span className="font-display text-[9px] uppercase tracking-[0.25em] text-[--gold-deep]">Ruled by — </span>
                    {active.house}
                  </p>
                </div>
              </div>
              <p className="prose-lore md:border-l md:border-[--line] md:pl-10">{active.desc}</p>
              <p className="border-l-2 border-[--gold] pl-4 text-[15px] italic leading-relaxed text-[--oxblood] md:border-l md:border-[--line] md:pl-10">
                {active.lore}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  )
}
