// ─────────────────────────────────────────────────────────────────────────────
// The Realm — the Iron Throne's kings, famous weapons, Valyrian steel,
// the peoples of the known world, and the orders that bind it
// ─────────────────────────────────────────────────────────────────────────────

// ── The Iron Throne: every reign & rival claim ───────────────────────────────

export interface Ruler {
  name: string // matched against chronicle portraits when possible
  epithet?: string
  reign: string
  house: 'dragon' | 'stag' | 'lion'
  end: string
  note?: string
}

export const throneIntro = [
  'Aegon the Conqueror forged it from the swords of his beaten enemies — a thousand blades, the songs say, though the maesters count nearer two hundred — fused by Balerion’s fire into a chair of jagged steel. Aegon meant it to be uncomfortable, for he held that a king should never sit easy upon a throne.',
  'For three centuries it cut the careless and the unworthy alike. Kings have bled on its blades, died at its foot, and burned worlds to keep it. What follows is the chronicle of every reign it recognized — and of the claims it never did.',
]

export const rulers: Ruler[] = [
  { name: 'Aegon I Targaryen', epithet: 'The Conqueror', reign: '1–37 AC', house: 'dragon', end: 'Died in his chair at Dragonstone, six kingdoms kneeling', note: 'Forged the throne itself; united six of the seven kingdoms by dragonfire.' },
  { name: 'Aenys I Targaryen', epithet: 'The Weak', reign: '37–42 AC', house: 'dragon', end: 'Died amid the Faith Militant’s uprising', note: 'A gentle heir crushed between the Faith and his half-brother’s ambition.' },
  { name: 'Maegor I Targaryen', epithet: 'The Cruel', reign: '42–48 AC', house: 'dragon', end: 'Found dead upon the Iron Throne, its blades in his wrists', note: 'The throne itself is said to have judged him.' },
  { name: 'Jaehaerys I Targaryen', epithet: 'The Conciliator', reign: '48–103 AC', house: 'dragon', end: 'Died old, the realm’s longest and best peace behind him', note: 'Fifty-five years of law, roads, and dragons at their height.' },
  { name: 'Viserys I Targaryen', epithet: 'The Peaceful', reign: '103–129 AC', house: 'dragon', end: 'Died in his sleep — and his death lit the Dance', note: 'Named a daughter heir and married a second ambition; the realm paid.' },
  { name: 'Aegon III Targaryen', epithet: 'The Dragonbane', reign: '131–157 AC', house: 'dragon', end: 'Died at thirty-six, having outlived the last dragon', note: 'A broken boy who ruled a broken house with strange competence.' },
  { name: 'Daeron I Targaryen', epithet: 'The Young Dragon', reign: '157–161 AC', house: 'dragon', end: 'Dead in Dorne at eighteen, under a peace banner', note: 'Conquered Dorne at fourteen; could not hold it a year.' },
  { name: 'Baelor I Targaryen', epithet: 'The Blessed', reign: '161–171 AC', house: 'dragon', end: 'Starved himself in piety', note: 'The septon-king who walked the Boneway barefoot and locked his sisters in a vault.' },
  { name: 'Aegon IV Targaryen', epithet: 'The Unworthy', reign: '172–184 AC', house: 'dragon', end: 'Died glutted — legitimizing all his bastards on his deathbed', note: 'One sentence birthed the Blackfyre rebellions that bled five generations.' },
  { name: 'Daeron II Targaryen', epithet: 'The Good', reign: '184–209 AC', house: 'dragon', end: 'Carried off by the Great Spring Sickness', note: 'Beat the Blackfyres at Redgrass Field and brought Dorne into the realm by marriage.' },
  { name: 'Aerys II Targaryen', epithet: 'The Mad King', reign: '262–283 AC', house: 'dragon', end: 'Slain by his own Kingsguard, Jaime Lannister, above a city rigged to burn', note: 'The dragons’ line ended in wildfire and a whispered “burn them all”.' },
  { name: 'Robert I Baratheon', epithet: 'The Usurper', reign: '283–298 AC', house: 'stag', end: 'Gored by a boar on a hunt, wine-dark and laughing', note: 'Won the throne with a hammer at the Trident; lost interest in it by winter.' },
  { name: 'Joffrey I Baratheon', epithet: 'The Illborn', reign: '298–300 AC', house: 'lion', end: 'Poisoned at his own wedding feast', note: 'A king by a lie of blood; the realm’s cruelest boy.' },
  { name: 'Tommen I Baratheon', epithet: 'The Boy King', reign: '300–303 AC', house: 'lion', end: 'Fell from a Red Keep window as the Great Sept burned', note: 'A sweet child ruled by everyone who came near him.' },
  { name: 'Cersei I Lannister', epithet: 'The Lioness', reign: '303–305 AC', house: 'lion', end: 'Died beneath the Red Keep as the city fell', note: 'Took by wildfire what no Lannister had ever held — and held it alone.' },
]

export const rivalClaims: { name: string; claim: string; fate: string }[] = [
  { name: 'Rhaenyra Targaryen', claim: 'Named heir of Viserys I, 129 AC — held King’s Landing half a year', fate: 'Fed to her brother’s dragon before her son’s eyes' },
  { name: 'Daemon Blackfyre', claim: 'The legitimized bastard, bearer of the sword Blackfyre, 196 AC', fate: 'Died on Redgrass Field with his twin sons beneath him' },
  { name: 'Renly Baratheon', claim: 'The beloved younger brother, crowned on charm and the Reach’s spears, 298 AC', fate: 'Slain in his tent by a shadow with his brother’s face' },
  { name: 'Stannis Baratheon', claim: 'The rightful heir by law — Robert’s brother, iron and uncompromising', fate: 'Broke his host in the snows before Winterfell' },
  { name: 'Daenerys Targaryen', claim: 'The dragon’s daughter, last scion of the old line, stormborn', fate: 'Took King’s Landing with one dragon; died within days of her victory' },
  { name: 'Jon Snow', claim: 'The hidden heir — Aegon Targaryen, Sixth of His Name, by right of blood', fate: 'Never pressed it; chose the Watch and the lands beyond the Wall' },
]

// ── Famous weapons ────────────────────────────────────────────────────────────

export interface Weapon {
  id: string
  name: string
  kind: string
  wielder: string
  steel: 'valyrian' | 'steel' | 'legend' | 'other'
  status: string
  text: string
}

export const weapons: Weapon[] = [
  {
    id: 'ice', name: 'Ice', kind: 'Greatsword', wielder: 'House Stark of Winterfell', steel: 'valyrian',
    status: 'Reforged by the Lannisters into Oathkeeper & Widow’s Wail',
    text: 'Four hundred years the Stark greatsword stood as tall as the men who bore it, spell-forged in Valyria before the Doom. Eddard Stark used it to take the heads of deserters — and a false one, in the end. After his death the Lannisters melted it into two smaller blades: a theft the North has not forgotten.',
  },
  {
    id: 'longclaw', name: 'Longclaw', kind: 'Bastard sword · wolf pommel', wielder: 'Jeor Mormont → Jon Snow', steel: 'valyrian',
    status: 'Carried by Jon Snow beyond the Wall',
    text: 'Five centuries in Bear Island’s keeping until Jeor Mormont had a wolf’s head set upon the pommel and gave it to the bastard who saved his life from a wight. With it Jon Snow has cut wildling, wight, and the lie of his own death — the Old Bear’s judgment proved at every pass.',
  },
  {
    id: 'needle', name: 'Needle', kind: 'Braavosi blade · slender rapier', wielder: 'Arya Stark', steel: 'steel',
    status: 'With its owner — where she wills',
    text: 'Jon Snow’s parting gift: “stick them with the pointy end.” Nine years a Stark girl carried the slim blade through Harrenhal, the riverlands, and the House of Black and White — buried in the earth of Braavos when she tried to become no one, dug up when she remembered she was Arya. Small, sharp, and never once set aside.',
  },
  {
    id: 'oathkeeper', name: 'Oathkeeper', kind: 'Longsword — half of Ice', wielder: 'Brienne of Tarth', steel: 'valyrian',
    status: 'Carried by the Maid of Tarth, sworn to her vow',
    text: 'One of the two blades the Lannisters made from stolen Ice, given by Jaime Lannister to Brienne with a charge: find the Stark girls and keep them safe. She named it for the oath, not the giver, and has kept both longer than any knight of the realm kept theirs.',
  },
  {
    id: 'widows-wail', name: 'Widow’s Wail', kind: 'Longsword — half of Ice', wielder: 'Joffrey Baratheon', steel: 'valyrian',
    status: 'Unused, in the Red Keep’s vaults',
    text: 'The twin of Oathkeeper, named with a boy-king’s idea of wit. Joffrey swung it at a book at his wedding feast and died at the same table; the blade has tasted nothing but its sheath. Half of the North’s honor sits gathering dust in a Lannister vault.',
  },
  {
    id: 'heartsbane', name: 'Heartsbane', kind: 'Greatsword', wielder: 'House Tarly → Samwell Tarly', steel: 'valyrian',
    status: 'Taken by Sam Tarly from Horn Hill',
    text: 'Five hundred years in Tarly hands, carried by the fiercest soldier of his age — Randyll Tarly, who judged his gentle son unworthy of it. Samwell Tarly judged otherwise, took it from Horn Hill in the night, and at Winterfell a Tarly blade finally stood against the dead.',
  },
  {
    id: 'dawn', name: 'Dawn', kind: 'Greatsword of pale milkglass stone', wielder: 'The Sword of the Morning — Ser Arthur Dayne last', steel: 'legend',
    status: 'Returned to Starfall after the Tower of Joy',
    text: 'Not Valyrian at all — forged, the Daynes say, from the heart of a fallen star, pale as milkglass and sharp as any steel made since. It is not inherited but earned: only the knight deemed worthy may carry it and be called the Sword of the Morning. Arthur Dayne was the last, and there has been none since.',
  },
  {
    id: 'dark-sister', name: 'Dark Sister', kind: 'Longsword', wielder: 'The warrior women of House Targaryen → Brynden Rivers', steel: 'valyrian',
    status: 'Lost with Bloodraven beyond the Wall',
    text: 'The slim sister-sword of Blackfyre, made for a woman’s hand — Visenya wielded it, then the Dragonknight’s rival and namesake. Its last known bearer was Brynden Rivers, called Bloodraven, who took it into exile at the Wall and then beyond it, where the songs run out.',
  },
  {
    id: 'blackfyre', name: 'Blackfyre', kind: 'Hand-and-a-half sword', wielder: 'The Conqueror → the Blackfyre pretenders', steel: 'valyrian',
    status: 'Vanished after Redgrass Field — some say across the narrow sea',
    text: 'Aegon the Conqueror’s own blade, passed king to king until Aegon the Unworthy gave it to his bastard Daemon instead of his heir — and with it, a claim. Five Blackfyre rebellions were fought for that sword’s line. Where it lies now, no maester can say.',
  },
  {
    id: 'lightbringer', name: 'Lightbringer', kind: 'The sword of legend', wielder: 'Azor Ahai — and his promised rebirth', steel: 'legend',
    status: 'Awaited; the prophecy unfulfilled',
    text: 'The red priests tell it: Azor Ahai labored a hundred days and nights, tempered the blade in water and in a lion’s heart, and it broke — until he drove it through the breast of Nissa Nissa, and her soul made it Lightbringer, the Red Sword of Heroes. When the darkness gathers, the promised prince will draw it from the fire again. So they say.',
  },
  {
    id: 'warhammer', name: 'Robert’s Warhammer', kind: 'Warhammer, spiked and massive', wielder: 'Robert Baratheon', steel: 'other',
    status: 'Laid aside with the warrior who bore it',
    text: 'Ned Stark could scarcely lift it; Robert swung it one-handed. At the Trident it met Rhaegar Targaryen’s breastplate and caved it in, scattering the rubies of the dragon prince into the ford that bears their name. No sword decided the war. This did.',
  },
  {
    id: 'dragonglass', name: 'Dragonglass & the Dagger', kind: 'Obsidian — and one Valyrian dagger', wielder: 'The Children → the living at Winterfell', steel: 'other',
    status: 'The dagger that killed the Night King rests with Arya Stark',
    text: 'Frozen fire kills the Others where steel shatters — the Children taught it, the Night’s Watch relearned it, and a catspaw’s Valyrian steel dagger, the blade that began a war when it was meant for Bran Stark, ended the Long Night in Arya Stark’s hand in the godswood of Winterfell.',
  },
]

// ── Valyrian steel ────────────────────────────────────────────────────────────

export const valyrianHistory = [
  'In the Freehold’s five thousand years, the smiths of Valyria learned to fold spells into steel: blades lighter than any castle-forged iron, harder, sharper, and holding their edge forever — dark rippled metal that drinks the light. No blade has been forged since the Doom. The art died with Valyria in a single night of fire.',
  'Perhaps ten thousand Valyrian steel blades survive in all the world, most of them in Essos; two hundred and twenty-seven are counted in Westeros by the Citadel’s tally, nearly all treasured as house heirlooms with names and histories of their own. The smiths of Qohor alone claim the secret of reworking existing steel — a darker art, done with blood, they whisper.',
  'And there is the property the maesters set down last and believed least: Valyrian steel does not shatter against the Others. Dragonglass and dragonsteel, the old annals say — and at Winterfell, in the second Long Night, the annals proved true.',
]

export const valyrianTraits = [
  { name: 'Lighter & Stronger', text: 'Half the weight of castle steel at twice the strength; a Valyrian blade in a knight’s hands is worth a mailed dozen.' },
  { name: 'Ever Sharp', text: 'The edge does not dull. Blades drawn after five centuries in a crypt shave a hair laid across the steel.' },
  { name: 'Spell-Forged', text: 'Folded a thousand times with sorcery in the metal — the dark ripples in the steel are the mark no smith can counterfeit.' },
  { name: 'Dragonsteel', text: 'The one forged metal that slays the Others, as the First Men’s annals named it: dragonsteel.' },
]

export interface ValyrianBlade {
  blade: string
  keeper: string
  fate: string
  fateKind: 'lost' | 'held' | 'reforged' | 'unknown'
}

export const valyrianBlades: ValyrianBlade[] = [
  { blade: 'Blackfyre', keeper: 'House Targaryen, kings of Westeros', fate: 'Vanished after the Blackfyre line broke', fateKind: 'lost' },
  { blade: 'Dark Sister', keeper: 'Visenya Targaryen; last, Brynden Rivers', fate: 'Carried beyond the Wall; never seen again', fateKind: 'lost' },
  { blade: 'Brightroar', keeper: 'House Lannister', fate: 'Lost when King Tommen II sailed into the Doom’s ruin', fateKind: 'lost' },
  { blade: 'Lamentation', keeper: 'House Royce of Runestone', fate: 'Lost at the Storming of the Dragonpit', fateKind: 'lost' },
  { blade: 'Orphan-Maker', keeper: 'House Roxton', fate: 'Last drawn in the Dance of the Dragons', fateKind: 'unknown' },
  { blade: 'Ice', keeper: 'House Stark of Winterfell', fate: 'Melted down into Oathkeeper & Widow’s Wail', fateKind: 'reforged' },
  { blade: 'Oathkeeper', keeper: 'Brienne of Tarth', fate: 'In service of the Stark vow', fateKind: 'held' },
  { blade: 'Widow’s Wail', keeper: 'House Lannister', fate: 'Idle in the Red Keep’s vaults', fateKind: 'held' },
  { blade: 'Longclaw', keeper: 'House Mormont → Jon Snow', fate: 'Gone with him, north of the Wall', fateKind: 'held' },
  { blade: 'Heartsbane', keeper: 'House Tarly → Samwell Tarly', fate: 'Stood against the dead at Winterfell', fateKind: 'held' },
  { blade: 'Red Rain', keeper: 'House Drumm of Old Wyk', fate: 'Won with a clever hand and a cudgel, the Drumms boast', fateKind: 'held' },
  { blade: 'Nightfall', keeper: 'House Harlaw of Harlaw', fate: 'Kept at the Ten Towers', fateKind: 'held' },
  { blade: 'Lady Forlorn', keeper: 'House Corbray of Heart’s Home', fate: 'Drawn for the Vale in every age', fateKind: 'held' },
  { blade: 'The Catspaw Dagger', keeper: 'Arya Stark', fate: 'The blade that ended the Long Night', fateKind: 'held' },
]

// ── Peoples & cultures ────────────────────────────────────────────────────────

export interface People {
  id: string
  name: string
  aka: string
  image: string
  realm: string
  quote: string
  body: string[]
  traits: { name: string; text: string }[]
}

export const peoples: People[] = [
  {
    id: 'dothraki',
    name: 'The Dothraki',
    aka: 'The Horselords of the Great Grass Sea',
    image: '/img/culture-dothraki.jpg',
    realm: 'Essos — the Dothraki Sea',
    quote: 'It is known.',
    body: [
      'East of the Free Cities stretches a grass ocean five hundred leagues wide, and across it ride the Dothraki: a people with no cities, no walls, no written word — only the horse. A khalasar is a nation in the saddle, tens of thousands of screamers following a khal whose strength is the only law they recognize.',
      'Their god is the Great Stallion, their temple the open sky, their bible a prophecy: that one day the stallion who mounts the world will unite all khalasars into one, and ride to the ends of the earth. They fear the poison water their horses will not cross, and their braids — never cut while a man remains undefeated — tell the story of every victory in bells.',
      'Westeros knew them only as rumor until a khaleesi of the dragon’s line crossed the poison water with a khalasar at her back, and the realm learned what the Free Cities had paid tribute for centuries to avoid.',
    ],
    traits: [
      { name: 'The Khalasar', text: 'A horde-nation of riders, ruled by a khal whose blood may not be spilled.' },
      { name: 'The Braid', text: 'Hair grown with every victory, cut only in defeat — hung with bells so the enemy hears glory coming.' },
      { name: 'The Arakh', text: 'The curved half-sword, half-scythe blade of the horselords, swung from the saddle.' },
      { name: 'The Dosh Khaleen', text: 'The widows of dead khals who rule sacred Vaes Dothrak and speak the prophecies.' },
    ],
  },
  {
    id: 'freefolk',
    name: 'The Free Folk',
    aka: 'The wildlings · the people beyond the Wall',
    image: '/img/culture-freefolk.jpg',
    realm: 'Beyond the Wall — the haunted forest and the Frostfangs',
    quote: 'We do not kneel.',
    body: [
      'When Bran the Builder raised the Wall, he left a hundred tribes on the wrong side of it — and eight thousand years later they still call the kneelers’ side the side of slaves. The free folk bend to no king, hold no titles, and pay no taxes; they choose their leaders, speak a dozen tongues, and count wealth in what can be carried through the snow.',
      'They are not one people but hundreds: spearwives and skinchangers, the giants’ friends of the Milkwater, the cannibal Thenns of the ice rivers, the cave people who paint their faces blue. What unites them is the cold, the word “free,” and — when the dead began to walk — the crow they chose to kneel to nothing: Mance Rayder, the King-Beyond-the-Wall.',
      'The Watch named them enemies for eight thousand years. Then the Long Night returned, and the realms of men learned that the free folk had been holding the door the whole time — and dying at it.',
    ],
    traits: [
      { name: 'No Kneeling', text: 'They choose their chiefs and may unchoose them; no one is born above another.' },
      { name: 'Spearwives', text: 'Women fight beside men as equals, and raise daughters who do the same.' },
      { name: 'The Giants', text: 'The last giants ride with the free folk, mammoth-mounted, speaking the Old Tongue.' },
      { name: 'The Old Tongue', text: 'The language of the First Men, still spoken where the Andals never came.' },
    ],
  },
  {
    id: 'ironborn',
    name: 'The Ironborn',
    aka: 'The iron men of the Iron Islands',
    image: '/img/culture-ironborn.jpg',
    realm: 'The Iron Islands — the Sunset Sea',
    quote: 'What is dead may never die, but rises again, harder and stronger.',
    body: [
      'On the grey rocks off the western coast, where nothing grows worth the name, a people grew as hard as their islands. The ironborn took what the sea denied them from those who had it: reaving was not their crime but their creed, and the longship their plow. Their god drowned for them; they drown and rise for him.',
      'Their economy has two prices: the gold price, paid in coin, which shames a man — and the iron price, paid in blood, which makes him. Their women may captain ships; their kings were once chosen by the captains at a kingsmoot on the grey shore, crowned with driftwood.',
      'Three centuries ago they ruled everything the sunset sea touched, from the Arbor to Bear Island — “everywhere men can smell salt water or hear the crash of waves.” The dragons took it back. The ironborn have been planning their return ever since, and a kraken does not forget.',
    ],
    traits: [
      { name: 'The Iron Price', text: 'Take it by strength or be shamed by it; coin is for lesser men.' },
      { name: 'The Kingsmoot', text: 'The ancient election of kings by ship’s captains, older than the Iron Throne.' },
      { name: 'The Drowned God', text: 'Baptism by drowning; the faithful fear no water, for they have already died once.' },
      { name: 'Thralls & Salt Wives', text: 'The old way’s dark underside — the reaving economy’s captives.' },
    ],
  },
  {
    id: 'dornish',
    name: 'The Dornish',
    aka: 'The unbowed, unbent, unbroken',
    image: '/img/culture-dornish.jpg',
    realm: 'Dorne — the southern deserts',
    quote: 'Dorne has never been conquered. Ask the dragons.',
    body: [
      'South of the Red Mountains the sun writes different laws. The Dornish are descended of the Rhoynar, the river-people who fled Valyria’s dragons in ten thousand ships and taught Westeros that women inherit, paramours have names, and a land can be a weapon. When Aegon’s sisters flew their dragons over Dorne, the Dornish simply vanished into the sands — and the dragons had nothing to burn.',
      'Dorne stayed out of the Seven Kingdoms for two hundred years, the only realm to break a Targaryen conquest: the Young Dragon took it at fourteen and died holding it, fifty thousand dead for a desert that quietly unmade itself. Dorne joined the realm by marriage instead, as equals — princes, not lords, in their own capital at Sunspear.',
      'Hot-blooded, the rest of the realm calls them; the Dornish call it honest. They remember every injury — and the name Elia Martell is not spoken at the Water Gardens without oaths following it.',
    ],
    traits: [
      { name: 'Equal Inheritance', text: 'The eldest child inherits, daughter or son — Rhoynish law, kept a thousand years.' },
      { name: 'Unconquered', text: 'The only kingdom never taken by dragon; joined by marriage, not fire.' },
      { name: 'The Water Gardens', text: 'Sunspear’s pleasure palace of fountains and orange trees, the Dornish soul in stone.' },
      { name: 'The Red Mountains', text: 'The stony wall between Dorne and the realm, held by marcher lords and grudges.' },
    ],
  },
  {
    id: 'northmen',
    name: 'The Northmen',
    aka: 'The heirs of the First Men',
    image: '/img/culture-northmen.jpg',
    realm: 'The North — from the Neck to the Wall',
    quote: 'The North remembers.',
    body: [
      'The North is as large as the other six kingdoms together and thinly peopled across all of it — a land where winter can last a decade and the word “southron” covers everyone below the Neck. The Northmen descend from the First Men who never knelt to the Andals, and they keep the old gods still: nameless, faceless, watching from the weirwoods.',
      'Their code is older than chivalry and colder: the man who passes the sentence swings the sword; oaths are iron; guest right is sacred; and winter is not a season but a judgment that separates the prepared from the dead. A Northman’s honor is not ceremony — it is survival discipline hardened into faith.',
      'The south calls them grim, savage, wolf-blooded. The south also called, twice, when it needed saving — and the North came down the Kingsroad both times, and buried more sons than it ever complained about.',
    ],
    traits: [
      { name: 'The Old Gods', text: 'Weirwood faces in every godswood; no sept north of the Neck was ever truly rooted.' },
      { name: 'Winter Judgment', text: 'Stores, honor, and hard truth — a culture shaped by ten-year winters.' },
      { name: 'The Lord’s Justice', text: 'The lord who sentences carries out the sentence himself.' },
      { name: 'Barrowland & Bog', text: 'Barrow kings, crannogmen, mountain clans — the North is stranger than the south believes.' },
    ],
  },
  {
    id: 'valyrians',
    name: 'The Valyrians',
    aka: 'The dragonlords of the Freehold — a fallen people',
    image: '/img/culture-valyrians.jpg',
    realm: 'The Valyrian peninsula, Essos — until the Doom',
    quote: 'The blood of the dragon must remain pure.',
    body: [
      'Five thousand years ago they were shepherds on a volcanic peninsula who found something in the Fourteen Flames — dragons, or the way to bind them — and became the lords of most of the world. The Freehold had no kings: forty families of dragonlords ruled from Valyria, silver-haired and purple-eyed, marrying brother to sister to keep the blood that answered dragons.',
      'Their roads were fused stone that has not cracked in four centuries. Their steel was spell-forged and cannot be made today. Their wars melted Ghis five times and drove the Rhoynar across the sea. And in one night — the Doom — the Fourteen Flames erupted at once, the peninsula shattered into the Smoking Sea, and every dragon in Valyria died screaming.',
      'What remains: the Targaryens, forewarned by a daughter’s dream; the Celtigars and Velaryons of the narrow sea; the drowned arrogance of a dozen free cities speaking corrupted High Valyrian; and the prophecy the dragonlords left the world like a curse — that the blood of the dragon will return to claim what was lost.',
    ],
    traits: [
      { name: 'The Forty Families', text: 'Dragonlord houses who ruled the Freehold together — no kings, only blood.' },
      { name: 'Dragonriders', text: 'The silver-haired scions bonded to dragons in ways no one now understands.' },
      { name: 'High Valyrian', text: 'The language of dragons and spells, mother-tongue of half of Essos.' },
      { name: 'The Doom', text: 'Their end in fire — and the world’s warning about pride that outreaches wisdom.' },
    ],
  },
]

// ── Orders & oaths ────────────────────────────────────────────────────────────

export interface Order {
  id: string
  name: string
  aka: string
  image: string
  seat: string
  founded: string
  quote: string
  body: string[]
  vows: string[]
}

export const orders: Order[] = [
  {
    id: 'nights-watch',
    name: 'The Night’s Watch',
    aka: 'The black brothers · the crows',
    image: '/img/order-nights-watch.jpg',
    seat: 'Castle Black — the Wall',
    founded: 'At the end of the Long Night, eight thousand years ago',
    quote: 'Night gathers, and now my watch begins.',
    body: [
      'When the Others were driven back into the uttermost north, the men who had fought them raised a brotherhood to watch the Wall they would never leave: no lands, no wives, no crowns — life for the realm, sworn at a heart tree or a sept, and black for all of it.',
      'Eight thousand years shrank it from legend to punishment. The noble order that turned back the Long Night became the realm’s midden for bastards, poachers, and the inconvenient — nineteen castles dwindled to three, ten thousand swords to under a thousand, and the memory of what they were watching for faded to nursemaids’ tales.',
      'Then the dead came back. A steward from Winterfell and a bastard called Snow dragged the Watch back into the oldest war, and the brothers died at the Fist, at the Bridge of Skulls, at Hardhome — the realm’s forgotten shield, holding again. The vows never changed. The world remembered why they were sworn.',
    ],
    vows: ['No fathering of children', 'No lands, no titles', 'The watch until death', 'The shield that guards the realms of men'],
  },
  {
    id: 'kingsguard',
    name: 'The Kingsguard',
    aka: 'The White Swords · the White Cloaks',
    image: '/img/order-kingsguard.jpg',
    seat: 'The White Sword Tower, the Red Keep',
    founded: '10 AC — by Visenya Targaryen, who cut the Conqueror’s cheek to prove the need',
    quote: 'The finest knights in the realm — and the most bound.',
    body: [
      'Seven knights, chosen for life, swearing lands, wives, and family away to wear the white: the royal bodyguard, modeled on the Night’s Watch and gilded. The Book of Brothers in the White Sword Tower records four centuries of them — the Dragonknight, Aemon Targaryen; Ser Arthur Dayne, the Sword of the Morning; Barristan the Bold.',
      'And it records the others. The Kingsguard’s honor is only ever as good as the king it serves: the same white cloaks stood guard for the Mad King while he burned men, and one of them — the youngest ever raised, Jaime Lannister — ended it with a sword in the king’s back, and has been called Kingslayer by men who should have thanked him.',
      'Seven white cloaks, for the seven faces of god. The office outlasts every judgment passed on the men who held it.',
    ],
    vows: ['Seven, no more, no fewer', 'Service for life', 'No wives, no lands', 'The king’s life before every other duty'],
  },
  {
    id: 'faceless-men',
    name: 'The Faceless Men',
    aka: 'The servants of the Many-Faced God',
    image: '/img/order-faceless.jpg',
    seat: 'The House of Black and White, Braavos',
    founded: 'In the fire-mines of Valyria, by the first man to give the gift',
    quote: 'Valar morghulis. Valar dohaeris.',
    body: [
      'The first of them was a slave who prayed in the dark of Valyria’s mines to a god with no name — and understood that the gods of death of every people were one god, wearing faces. He gave the gift of death to the slaves, then to the masters, and founded an order that serves death as other faiths serve life.',
      'A Faceless Man gives up everything a person is: name, face, history, want. They wear the faces of the dead, perfect as skin; they kill only those the god has named through the prayers of the desperate; and the price is measured by the means of the one who prays — a pauper gives all he has, a king likewise.',
      'They are the most feared assassins in the world, and they consider themselves a mercy. At the House of Black and White the suffering drink from a black pool and find peace; the servants who grant it were once people — a girl from Winterfell among them — until no one remained.',
    ],
    vows: ['Become no one', 'The gift only to the named', 'The price always paid', 'All men must serve'],
  },
  {
    id: 'maesters',
    name: 'The Maesters of the Citadel',
    aka: 'The knights of the mind',
    image: '/img/order-maesters.jpg',
    seat: 'The Citadel of Oldtown, beneath the Hightower',
    founded: 'Before the Conquest — by Peremore the Twisted, they say',
    quote: 'A maester forges his chain link by link — and is forged by it.',
    body: [
      'In Oldtown, where the Hightower’s beacon has burned since before the Seven Kingdoms had a name, the Citadel trains the realm’s scholars: healing and history, ravens and ravenry, sums, weather, and the hundred other sciences a lord cannot live without. Each subject mastered is a link of a different metal — black iron for ravens, gold for sums, silver for healing, and Valyrian steel, which almost none take, for magic.',
      'When a novice’s chain is complete he becomes a maester, sets aside his house name, and serves whatever castle he is sent to — counselor, physician, teacher, and the realm’s only reliable post service, all in one grey robe. Kings rise and fall; the chain of the Citadel is what actually carries knowledge through the wreckage.',
      'And the Citadel keeps its secrets: the maesters’ conspiracy against magic is whispered wherever glass candles burn — for the grey sheep watched dragons die out once, and some say they helped.',
    ],
    vows: ['The chain before the self', 'No house name, no inheritance', 'Serve where sent', 'Magic mistrusted — the Valyrian steel link worn by one in a hundred'],
  },
  {
    id: 'brotherhood',
    name: 'The Brotherhood Without Banners',
    aka: 'The lightning lord’s outlaws',
    image: '/img/order-brotherhood.jpg',
    seat: 'None — the hollow hills and the inn at the crossroads',
    founded: '298 AC, from the remnants of Beric Dondarrion’s doomed command',
    quote: 'The realm’s broken men, sworn to protect the smallfolk who feed it.',
    body: [
      'When Eddard Stark sent Beric Dondarrion to bring the Mountain to justice, the Mountain killed the sent men and the war swallowed the survivors. What remained re-formed into something the Seven Kingdoms had never quite had: an outlaw band sworn to no king, protecting the smallfolk from every army equally — knights, hunters, a sept-smith, and a dead man who would not stay dead.',
      'For Beric Dondarrion was kissed back to life by a red priest not once but six times, each return leaving less of him — memory, self, the taste of food — and the Brotherhood followed its fire-lit lord through the riverlands’ nightmare with a flaming sword and a strange rough justice: the Kingslayer’s captors hanged as fairly as the Mountain’s men.',
      'They ended as they began, the last of them giving his life’s fire to another — and the Brotherhood’s light passed north, to one final war against the dark.',
    ],
    vows: ['No banners — no king', 'Protect the smallfolk', 'Pay for what is taken', 'The fire gives; the fire takes'],
  },
  {
    id: 'golden-company',
    name: 'The Golden Company',
    aka: 'The last of the Blackfyre swords',
    image: '/img/order-golden-company.jpg',
    seat: 'Wherever the contract is — the Disputed Lands, most often',
    founded: '212 AC, by Aegor Rivers — Bittersteel, a Blackfyre bastard',
    quote: 'Beneath the gold, the bitter steel.',
    body: [
      'When the Blackfyre rebellions failed, their last great captain took the surviving swords across the narrow sea and forged them into a sellsword company with one rule: the Golden Company has never broken a contract. Ten thousand men, the finest discipline in the Free Cities, war elephants from the south — and banners of gold.',
      'Bittersteel’s command never died: the skulls of its captains-general are gilded and borne before the company, so that even dead they lead. And through four generations the company kept its founder’s deeper purpose — one day to put a Blackfyre on the Iron Throne.',
      'The word of the Golden Company is its legend; its prices are ruinous; its record is unblemished. In the long game of the dragon’s line, they are the piece that has never been captured.',
    ],
    vows: ['The contract is sacred — never broken', 'The gilded skulls march first', 'Beneath the gold, the bitter steel', 'The dragon’s line, one day restored'],
  },
]

// ── Nav additions ─────────────────────────────────────────────────────────────

export const realmStats = {
  rulerCount: rulers.length,
  claimCount: rivalClaims.length,
  weaponCount: weapons.length,
  bladeCount: valyrianBlades.length,
  peopleCount: peoples.length,
  orderCount: orders.length,
}
