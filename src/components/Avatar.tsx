import { allCharacters } from '../data/more'
import type { Character } from '../data/lore'
import { useNav } from './chrome'

// ── Portrait matching — resolve any display name to a chronicle portrait ─────

const tokens = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z\s]/g, ' ')
    .split(/\s+/)
    .filter(Boolean)

// Character ids whose display names differ from their chronicle names
const PORTRAIT_ALIASES: Record<string, string[]> = {
  'ned-stark': ['eddard'],
  'catelyn-stark': ['catelyn'],
  'bran-stark': ['bran'],
  'tommen-baratheon': ['tommen'],
  'rhaegar-targaryen': ['rhaegar'],
  'robert-baratheon': ['robert'],
  'stannis-baratheon': ['stannis'],
  'balon-greyjoy': ['balon'],
  'theon-greyjoy': ['theon'],
  'yara-greyjoy': ['asha'],
  'euron-greyjoy': ['euron'],
  'mace-tyrell': ['mace'],
  'olenna-tyrell': ['olenna'],
  'margaery-tyrell': ['margaery'],
  'roose-bolton': ['roose'],
  'ramsay-bolton': ['ramsay'],
  'brynden-tully': ['blackfish', 'brynden'],
  'sandor-clegane': ['sandor', 'hound'],
}

export function portraitFor(name: string): Character | undefined {
  const personTokens = tokens(name)
  return allCharacters.find((c) => {
    const ct = tokens(c.name)
    if (ct.length > 0 && ct.every((t) => personTokens.includes(t))) return true
    const aliases = PORTRAIT_ALIASES[c.id] ?? []
    return aliases.some((a) => tokens(a).every((t) => personTokens.includes(t)))
  })
}

const initialsOf = (name: string) =>
  tokens(name)
    .slice(0, 2)
    .map((t) => t[0]?.toUpperCase() ?? '')
    .join('') || '✦'

export function Avatar({ name, size = 30 }: { name: string; size?: number }) {
  const { nav } = useNav()
  const c = portraitFor(name)
  if (c?.image) {
    return (
      <button
        onClick={(e) => {
          e.stopPropagation()
          nav('characters', c.id)
        }}
        title={`Open the chronicle of ${c.name}`}
        className="shrink-0 rounded-full ring-1 ring-loregold/60 overflow-hidden hover:ring-[var(--gold)] hover:scale-110 transition-all cursor-pointer"
        style={{ width: size, height: size }}
      >
        <img src={c.image} alt={c.name} style={{ width: size, height: size }} className="object-cover" />
      </button>
    )
  }
  return (
    <span
      className="shrink-0 grid place-items-center rounded-full bg-[var(--paper-deep)] ring-1 ring-loregold/40 font-display text-[var(--gold-deep)]"
      style={{ width: size, height: size, fontSize: size * 0.36 }}
    >
      {initialsOf(name)}
    </span>
  )
}
