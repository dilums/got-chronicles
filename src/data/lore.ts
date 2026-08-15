// ─────────────────────────────────────────────────────────────────────────────
// The Chronicle — all lore content for the archive
// ─────────────────────────────────────────────────────────────────────────────

export type Page =
  | 'home'
  | 'characters'
  | 'houses'
  | 'creatures'
  | 'gods'
  | 'myths'
  | 'timeline'
  | 'map'
  | 'battles'
  | 'throne'
  | 'weapons'
  | 'valyrian'
  | 'cultures'
  | 'orders'

export interface Route {
  page: Page
  id?: string
}

// ── Characters ────────────────────────────────────────────────────────────────

export interface Character {
  id: string
  name: string
  aliases: string[]
  house: string
  houseId?: string
  status: string
  culture: string
  image: string
  quote: string
  summary: string
  bio: string[]
  facts: { label: string; value: string }[]
}

export const characters: Character[] = [
  {
    id: 'jon-snow',
    name: 'Jon Snow',
    aliases: ['The White Wolf', 'Lord Snow', 'The Bastard of Winterfell', '998th Lord Commander'],
    house: 'House Stark · The Night’s Watch',
    houseId: 'stark',
    status: 'Alive — beyond the Wall',
    culture: 'Northman',
    image: '/img/char-jon.jpg',
    quote: 'The Long Night is coming, and the dead come with it.',
    summary:
      'Raised as the bastard son of Eddard Stark, Jon took the black and rose to lead the Night’s Watch against the returning darkness.',
    bio: [
      'Jon Snow grew up at Winterfell forever half a step outside the family he loved — fed at the same table, taught by the same masters, yet always “the bastard”. At fourteen he rode north to take the black, trading a name that was never truly his for a purpose that was.',
      'Among the sworn brothers he learned that the real enemy was not the wildlings beyond the Wall but the cold thing that had slept eight thousand years and woken hungry. He treated with Mance Rayder, let the free folk through the gates, and paid for it with his brothers’ knives — and still returned.',
      'The old songs whisper that his blood is not what the realm believes: that the quiet boy of Winterfell carries the mingled line of wolf and dragon. Jon himself never sought a crown. He sought only to keep the living alive.',
    ],
    facts: [
      { label: 'Allegiance', value: 'Night’s Watch, later King in the North' },
      { label: 'Sword', value: 'Longclaw — Valyrian steel, gift of Jeor Mormont' },
      { label: 'Companion', value: 'Ghost, an albino direwolf' },
      { label: 'Titles held', value: 'Lord Commander; King in the North; Warden of the North' },
    ],
  },
  {
    id: 'daenerys-targaryen',
    name: 'Daenerys Targaryen',
    aliases: ['Stormborn', 'The Unburnt', 'Mother of Dragons', 'Breaker of Chains', 'Khaleesi'],
    house: 'House Targaryen',
    houseId: 'targaryen',
    status: 'Fell in the war for the throne',
    culture: 'Valyrian',
    image: '/img/char-daenerys.jpg',
    quote: 'I am the blood of the dragon. I will take what is mine, with fire and blood.',
    summary:
      'Last daughter of a fallen dynasty, hatched three dragons from stone eggs and carved an army out of the slave cities of Essos.',
    bio: [
      'Born in the storm that smashed the Targaryen fleet, Daenerys was smuggled across the Narrow Sea and sold in marriage to Khal Drogo for the promise of an army. When the khal died she walked into his funeral pyre — and walked out of the ashes unburnt, with three dragons at her breast.',
      'She broke the slave trade in Astapor, took Meereen, and ruled a foreign city that both worshipped and hated her. Every victory asked the same question of her: liberator or conqueror?',
      'When she finally sailed west with dragon, fleet and Unsullied, she came as the last scion of the Conqueror — determined to reclaim the Iron Throne her family forged, whatever the cost.',
    ],
    facts: [
      { label: 'Dragons', value: 'Drogon, Rhaegal, Viserion' },
      { label: 'Titles held', value: 'Queen of Meereen; Khaleesi of the Great Grass Sea' },
      { label: 'Sigil carried west', value: 'The three-headed red dragon on black' },
      { label: 'Claim', value: 'Daughter of Aerys II, the Mad King' },
    ],
  },
  {
    id: 'tyrion-lannister',
    name: 'Tyrion Lannister',
    aliases: ['The Imp', 'Halfman', 'Hugor Hill', 'The Little Lion'],
    house: 'House Lannister',
    houseId: 'lannister',
    status: 'Alive — Hand of the King',
    culture: 'Westerman',
    image: '/img/char-tyrion.jpg',
    quote: 'A mind needs books as a sword needs a whetstone.',
    summary:
      'The dwarf son of Tywin Lannister — scholar, strategist, and survivor, who fought his wars with wit where swords availed him nothing.',
    bio: [
      'Born a dwarf to the richest house in the realm, blamed for a mother’s death he did not cause, Tyrion Lannister armed himself the only way he could: with books, observation, and a tongue sharper than any Valyrian blade.',
      'As acting Hand he saved King’s Landing at the Blackwater with chain and wildfire — and was rewarded with a cell. Condemned for a nephew’s murder he did not commit, he fled across the narrow sea, leaving a crossbow bolt in his father’s belly.',
      'In exile he wagered his counsel on a dragon queen. Whatever else the histories debate, none deny it: when the game of thrones was played, the Halfman played it better than lords twice his size.',
    ],
    facts: [
      { label: 'Offices', value: 'Acting Hand of the King; Master of Coin; Hand of the Queen' },
      { label: 'Signature victory', value: 'Defense of King’s Landing, 299 AC' },
      { label: 'Weapon of choice', value: 'Wit — and when pressed, a crossbow' },
      { label: 'Parents', value: 'Tywin Lannister and Joanna Lannister' },
    ],
  },
  {
    id: 'arya-stark',
    name: 'Arya Stark',
    aliases: ['Arya Underfoot', 'Arya Horseface', 'No One', 'The Night Wolf'],
    house: 'House Stark',
    houseId: 'stark',
    status: 'Alive — west of Westeros',
    culture: 'Northman',
    image: '/img/char-arya.jpg',
    quote: 'A girl is Arya Stark of Winterfell. And I’m going home.',
    summary:
      'The wild younger daughter of Winterfell who crossed the world to learn the faceless art, and brought a list of names home to the North.',
    bio: [
      'Arya never wanted a husband, a castle, or a needle that sewed. She wanted the other kind of needle — the slim Braavosi blade Jon Snow had made for her — and a world wider than any septa’s song.',
      'Harrenhal, the Twins, the Vale, the House of Black and White: she survived them all by becoming other people, collecting deaths like coin. In Braavos she learned that a face is a tool and a name can be taken off like a glove.',
      'Yet the pack survives. Returning to Winterfell she turned the faceless art on the enemies of her family — and when the Long Night came for the living, it was Arya Stark who answered for the world of men.',
    ],
    facts: [
      { label: 'Weapon', value: 'Needle — a Braavosi blade, gift of Jon Snow' },
      { label: 'Training', value: 'Water dancing of Braavos; the Faceless Men' },
      { label: 'Direwolf', value: 'Nymeria, running wild in the riverlands' },
      { label: 'Final voyage', value: 'Sailed west of the maps’ end' },
    ],
  },
  {
    id: 'cersei-lannister',
    name: 'Cersei Lannister',
    aliases: ['The Lioness', 'Queen Cersei', 'The Queen Regent'],
    house: 'House Lannister · Baratheon by marriage',
    houseId: 'lannister',
    status: 'Fell in the ruins of the Red Keep',
    culture: 'Westerman',
    image: '/img/char-cersei.jpg',
    quote: 'When you play the game of thrones, you win or you die.',
    summary:
      'Queen, regent, and finally crowned sovereign in her own right — who loved three things in this world: her children, her brother, and power.',
    bio: [
      'Golden child of Casterly Rock, married to a king who never loved her, Cersei learned early that a woman’s weapons in a man’s game are patience, secrets, and the willingness to go further than anyone expects.',
      'As regent she outplayed Eddard Stark, armed the Faith, and watched her children die one by one — each loss burning away another mercy. Her walk of atonement through King’s Landing did not break her; it annealed her.',
      'Crowned herself with her enemies circling, she answered siege with wildfire and diplomacy with silence. The Wheel she swore to break outlasted her — buried, in the end, beneath the keep her family built.',
    ],
    facts: [
      { label: 'Titles held', value: 'Queen Consort; Queen Regent; Queen of the Seven Kingdoms' },
      { label: 'Children', value: 'Joffrey, Myrcella, Tommen' },
      { label: 'Prophecy', value: 'The valonqar — foretold by Maggy the Frog' },
      { label: 'Sigil', value: 'The golden lion, rampant on crimson' },
    ],
  },
  {
    id: 'jaime-lannister',
    name: 'Jaime Lannister',
    aliases: ['The Kingslayer', 'The Young Lion', 'The Man Without Honor'],
    house: 'House Lannister · The Kingsguard',
    houseId: 'lannister',
    status: 'Fell in the ruins of the Red Keep',
    culture: 'Westerman',
    image: '/img/char-jaime.jpg',
    quote: 'There are no men like me. Only me.',
    summary:
      'The finest sword of his generation, who saved a city with one unforgivable act and spent a lifetime paying for the name it earned him.',
    bio: [
      'At fifteen the youngest knight ever raised to the Kingsguard; at seventeen he put his sword through the Mad King’s back rather than let King’s Landing burn. The realm named him Kingslayer and never asked what it cost.',
      'The loss of his sword hand to the Bloody Mummers unmanned everything he thought he was — and, strangely, began to remake him. On the road with Brienne of Tarth, the gilded lion learned the weight of the vows he had worn as decoration.',
      'He died as he lived: a knight of contradictions, riding back into a burning city for the only person who ever knew all of him.',
    ],
    facts: [
      { label: 'Office', value: 'Lord Commander of the Kingsguard' },
      { label: 'Defining act', value: 'Slaying Aerys II at the foot of the Iron Throne' },
      { label: 'Sword', value: 'Oathkeeper — forged from the greatsword Ice' },
      { label: 'Golden hand', value: 'Lost his sword hand at the Trident’s fords' },
    ],
  },
  {
    id: 'bran-stark',
    name: 'Bran Stark',
    aliases: ['The Winged Wolf', 'The Three-Eyed Raven', 'Bran the Broken', 'The Broken Heir'],
    house: 'House Stark',
    houseId: 'stark',
    status: 'Crowned King of the Six Kingdoms',
    culture: 'Northman',
    image: '/img/char-bran.jpg',
    quote: 'I can see things that happened long ago. I can see things happening now, all over the world.',
    summary:
      'The fallen boy who lost his legs and gained the sight — last heir of the greenseers, and keeper of the world’s whole memory.',
    bio: [
      'A fall from a tower took Bran Stark’s legs and opened his third eye. Carried beyond the Wall through a kingdom at war, he found the cave of the last greenseer and took root among the weirwoods.',
      'In the heart trees he saw everything: the First Men and the Children, the forging of the Night King, the truth of Jon Snow’s birth in the Tower of Joy. He ceased, by degrees, to be only Bran Stark — becoming the memory of the world itself.',
      'When the wars of ice and fire ended, it was the broken boy of Winterfell whom the lords chose to rule — a king who cannot walk, but can see the whole board.',
    ],
    facts: [
      { label: 'Gift', value: 'Greensight and skinchanging' },
      { label: 'Teacher', value: 'The last greenseer, the Three-Eyed Raven' },
      { label: 'Witnessed', value: 'The Tower of Joy; the creation of the Night King' },
      { label: 'Crowned', value: 'Elected king by the Great Council' },
    ],
  },
  {
    id: 'the-night-king',
    name: 'The Night King',
    aliases: ['The Great Other', 'The Cold God', 'Death Itself'],
    house: 'The White Walkers',
    status: 'Shattered at Winterfell',
    culture: 'The Others',
    image: '/img/char-nightking.jpg',
    quote: 'The enemy always wins. And we still need to fight him.',
    summary:
      'A weapon forged by the Children of the Forest in the Dawn Age — dragonglass driven through a captive’s heart — that outgrew its makers.',
    bio: [
      'Eight thousand years before the Conquest, the Children of the Forest were losing their war against the First Men. Their answer was a captive bound to a heart tree and a blade of dragonglass through the heart — the first White Walker.',
      'The thing they made did not stay a weapon. It became a sovereign of cold, raising the dead of every battle into its host, binding blizzards to its will. The Long Night it brought nearly ended the world of men.',
      'Twice the living broke it: once at the dawn of history, when the Wall was raised against it, and once at Winterfell, when a girl with a Valyrian dagger proved that even death can die.',
    ],
    facts: [
      { label: 'Origin', value: 'Created by the Children of the Forest' },
      { label: 'Power', value: 'Raises the dead; commands winter itself' },
      { label: 'Weakness', value: 'Dragonglass and Valyrian steel' },
      { label: 'End', value: 'Destroyed by Arya Stark in the godswood' },
    ],
  },
]

// ── Great Houses & family trees ───────────────────────────────────────────────

export interface TreePerson {
  name: string
  note?: string
  children?: TreePerson[]
}

export interface House {
  id: string
  name: string
  words: string
  sigil: string
  seat: string
  region: string
  image: string
  colors: string
  summary: string
  history: string[]
  tree: TreePerson[]
  members: { name: string; role: string }[]
}

export const houses: House[] = [
  {
    id: 'stark',
    name: 'House Stark',
    words: 'Winter Is Coming',
    sigil: 'A grey direwolf on a field of white',
    seat: 'Winterfell',
    region: 'The North',
    image: '/img/house-stark.jpg',
    colors: 'Grey on white',
    summary:
      'Eight thousand years unbroken in the male line — the oldest and coldest of the great houses, keepers of the old gods and the old ways.',
    history: [
      'Descended from Bran the Builder, who raised Winterfell and — the singers claim — the Wall itself, the Starks were Kings in the North for eight thousand years. They bent the knee only to Aegon the Conqueror and his dragons, and even then as Wardens, never as conquered.',
      'The words of the house are not a boast but a warning: winter is coming, and the North remembers. Where southern houses play at courtesy, the Starks keep the First Men’s law — the man who passes the sentence swings the sword.',
      'Betrayed at the Red Wedding and scattered to the winds, the pack returned: the North rose for the White Wolf, and when the dead came south at last it was Winterfell that stood between the living and the Long Night.',
    ],
    tree: [
      {
        name: 'Rickard Stark',
        note: 'Executed by the Mad King',
        children: [
          { name: 'Brandon Stark', note: 'Heir; died with his father' },
          {
            name: 'Eddard “Ned” Stark',
            note: 'm. Catelyn Tully',
            children: [
              { name: 'Robb Stark', note: 'The Young Wolf' },
              { name: 'Sansa Stark', note: 'Queen in the North' },
              { name: 'Arya Stark', note: 'The Night Wolf' },
              { name: 'Bran Stark', note: 'The Three-Eyed Raven' },
              { name: 'Rickon Stark', note: 'Youngest son' },
            ],
          },
          { name: 'Lyanna Stark', note: 'The Knight of the Laughing Tree' },
          { name: 'Benjen Stark', note: 'First Ranger of the Watch' },
        ],
      },
      { name: 'Jon Snow', note: 'Raised as Ned’s bastard — in truth Lyanna’s son by Rhaegar Targaryen' },
    ],
    members: [
      { name: 'Eddard Stark', role: 'Warden of the North; Hand of the King' },
      { name: 'Catelyn Stark', role: 'Lady of Winterfell, born Tully' },
      { name: 'Robb Stark', role: 'King in the North, the Young Wolf' },
      { name: 'Sansa Stark', role: 'Queen in the North' },
      { name: 'Jon Snow', role: 'King in the North; Lord Commander' },
      { name: 'Arya Stark', role: 'Slayer of the Night King' },
    ],
  },
  {
    id: 'targaryen',
    name: 'House Targaryen',
    words: 'Fire and Blood',
    sigil: 'A three-headed red dragon on black',
    seat: 'Dragonstone, then the Red Keep',
    region: 'The Crownlands',
    image: '/img/house-targaryen.jpg',
    colors: 'Red on black',
    summary:
      'The blood of old Valyria, who came west before the Doom with dragons and conquered six of the seven kingdoms with three.',
    history: [
      'The Targaryens were one of forty dragonlord families of the Valyrian Freehold — the only one to survive the Doom, warned by a daughter’s dream to flee to Dragonstone. A century later Aegon and his sister-wives landed at the Blackwater with three dragons and forged a realm.',
      'For nearly three hundred years the dragon kings ruled from the Iron Throne: through the Dance of the Dragons, when dragon fought dragon and the house devoured itself; through Blackfyre rebellions and defenestrations; through prophecy-obsessed kings who saw the Long Night coming in their dreams.',
      'Robert’s Rebellion broke the line in all but blood: the Mad King slain by his own Kingsguard, the heirs scattered across the narrow sea. But fire and blood endured — in a silver-haired girl in the Dothraki sea, and in a bastard of Winterfell who did not know his name.',
    ],
    tree: [
      {
        name: 'Aegon I Targaryen',
        note: 'The Conqueror — m. his sisters Visenya & Rhaenys',
        children: [
          { name: 'Aenys I', note: 'Son of Rhaenys' },
          { name: 'Maegor the Cruel', note: 'Son of Visenya' },
        ],
      },
      {
        name: 'Jaehaerys I',
        note: 'The Conciliator — 55 years of peace',
        children: [{ name: 'The line of the dragon…', note: 'Two centuries of kings' }],
      },
      {
        name: 'Aerys II Targaryen',
        note: 'The Mad King — m. Rhaella, his sister',
        children: [
          {
            name: 'Rhaegar Targaryen',
            note: 'Prince of Dragonstone — m. Elia Martell; loved Lyanna Stark',
            children: [
              { name: 'Rhaenys & Aegon', note: 'Slain in the Sack of King’s Landing' },
              { name: 'Aegon VI “Jon Snow”', note: 'Hidden son of Lyanna Stark' },
            ],
          },
          { name: 'Viserys Targaryen', note: 'The Beggar King' },
          { name: 'Daenerys Targaryen', note: 'Stormborn, Mother of Dragons' },
        ],
      },
    ],
    members: [
      { name: 'Aegon the Conqueror', role: 'First King of the Seven Kingdoms' },
      { name: 'Jaehaerys the Conciliator', role: 'Longest-reigning Targaryen king' },
      { name: 'Rhaegar Targaryen', role: 'The last Prince of Dragonstone' },
      { name: 'Daenerys Targaryen', role: 'The last dragon' },
      { name: 'Jon Snow', role: 'The hidden heir, Aegon VI' },
    ],
  },
  {
    id: 'lannister',
    name: 'House Lannister',
    words: 'Hear Me Roar!',
    sigil: 'A golden lion rampant on crimson',
    seat: 'Casterly Rock',
    region: 'The Westerlands',
    image: '/img/house-lannister.jpg',
    colors: 'Gold on crimson',
    summary:
      'The richest house in the realm, gold from the Rock and gold from the mint — and, as every court knows, a Lannister always pays his debts.',
    history: [
      'Legend says Lann the Clever tricked the Casterlys out of their great rock in the Age of Heroes. Whether by wit or by gold, the Lannisters have held the west for six thousand years, and their unofficial motto — a Lannister always pays his debts — is the more feared of the two.',
      'Under Tywin Lannister the house reached its apex: daughter wed to a king, grandsons on the throne, the realm’s debts flowing through Lannisport. The Rains of Castamere drowned every lord who doubted Lannister reach.',
      'Yet gold buys soldiers, not love. Parricide, incest and civil war hollowed the lion’s pride within a single generation, until the debts came due at last — and the Rock paid them in full.',
    ],
    tree: [
      {
        name: 'Tywin Lannister',
        note: 'The Great Lion — m. Joanna Lannister, his cousin',
        children: [
          {
            name: 'Cersei Lannister',
            note: 'm. King Robert Baratheon',
            children: [
              { name: 'Joffrey Baratheon', note: 'In truth Jaime’s son' },
              { name: 'Myrcella Baratheon', note: 'In truth Jaime’s daughter' },
              { name: 'Tommen Baratheon', note: 'In truth Jaime’s son' },
            ],
          },
          { name: 'Jaime Lannister', note: 'The Kingslayer' },
          { name: 'Tyrion Lannister', note: 'The Imp — Hand of the King' },
        ],
      },
      { name: 'Kevan Lannister', note: 'Tywin’s brother and right hand' },
    ],
    members: [
      { name: 'Tywin Lannister', role: 'Hand to three kings; the true power of the realm' },
      { name: 'Cersei Lannister', role: 'Queen of the Seven Kingdoms' },
      { name: 'Jaime Lannister', role: 'Lord Commander of the Kingsguard' },
      { name: 'Tyrion Lannister', role: 'Hand of the King, twice over' },
    ],
  },
  {
    id: 'baratheon',
    name: 'House Baratheon',
    words: 'Ours Is the Fury',
    sigil: 'A crowned black stag on gold',
    seat: 'Storm’s End',
    region: 'The Stormlands',
    image: '/img/house-baratheon.jpg',
    colors: 'Black on gold',
    summary:
      'Youngest of the great houses, born of a storm lord’s daughter and a Targaryen bastard — and raised to kingship by Robert’s warhammer.',
    history: [
      'Orys Baratheon, rumored bastard brother of Aegon the Conqueror, slew the last Storm King and took his castle, his sigil, his words, and his daughter. The Baratheons have been the fury of the stormlands ever since.',
      'When the Mad King burned Rickard Stark and demanded the heads of Robert’s friends, it was Robert Baratheon who raised the banners, smashed Rhaegar Targaryen at the Trident with one blow of his warhammer, and took the Iron Throne by right of conquest and Targaryen blood.',
      'The stag’s reign died with its king in a kingswood, gored by a boar and betrayed by a cupbearer. His brothers’ quarrels fed the War of the Five Kings — and in the end the last true Baratheon line was spent against the storm it was born from.',
    ],
    tree: [
      {
        name: 'Steffon Baratheon',
        note: 'Lord of Storm’s End',
        children: [
          {
            name: 'Robert Baratheon',
            note: 'The Usurper — m. Cersei Lannister',
            children: [
              { name: 'Joffrey, Myrcella, Tommen', note: 'Named his heirs — in truth Lannisters' },
              { name: 'Gendry', note: 'Bastard; legitimized, Lord of Storm’s End' },
            ],
          },
          { name: 'Stannis Baratheon', note: 'The Iron King — m. Selyse Florent' },
          { name: 'Renly Baratheon', note: 'Lord Paramount of the Stormlands' },
        ],
      },
    ],
    members: [
      { name: 'Robert Baratheon', role: 'King of the Seven Kingdoms' },
      { name: 'Stannis Baratheon', role: 'Claimant; the Mannis' },
      { name: 'Renly Baratheon', role: 'Claimant; the King in Highgarden' },
      { name: 'Gendry Baratheon', role: 'Last of the line, legitimized' },
    ],
  },
  {
    id: 'greyjoy',
    name: 'House Greyjoy',
    words: 'We Do Not Sow',
    sigil: 'A golden kraken on black',
    seat: 'Pyke',
    region: 'The Iron Islands',
    image: '/img/house-greyjoy.jpg',
    colors: 'Gold on black',
    summary:
      'Lords of the Iron Islands, heirs of the grey kings who ruled by driftwood crown — reavers who pay the iron price.',
    history: [
      'The ironborn claim descent from the Grey King, who slew the sea dragon Nagga and ruled a thousand years from a throne of driftwood. They kept the old way when all Westeros forgot it: what is taken by strength is yours; what is bought with gold is shame.',
      'Balon Greyjoy twice crowned himself King of the Iron Islands and twice lost nearly everything — his elder sons to Robert’s war, his younger son to Winterfell as a hostage who came home a stranger in his own halls.',
      'The kraken’s reach was ever longer than its grasp. Between the Ironborn’s drowned god and the greenlanders’ game, House Greyjoy spent itself on reaving — until a kingsmoot and a red star called it to a greater war.',
    ],
    tree: [
      {
        name: 'Balon Greyjoy',
        note: 'Lord Reaper of Pyke',
        children: [
          { name: 'Rodrik Greyjoy', note: 'Fell at Seagard' },
          { name: 'Maron Greyjoy', note: 'Fell at Pyke' },
          { name: 'Asha Greyjoy', note: 'Captain of the Black Wind' },
          { name: 'Theon Greyjoy', note: 'Ward of Winterfell — “Reek”' },
        ],
      },
      { name: 'Euron Greyjoy', note: 'The Crow’s Eye — Balon’s brother' },
      { name: 'Aeron Greyjoy', note: 'Damphair, priest of the Drowned God' },
    ],
    members: [
      { name: 'Balon Greyjoy', role: 'Twice-crowned King of the Iron Islands' },
      { name: 'Theon Greyjoy', role: 'Prince of Winterfell, briefly; redeemed' },
      { name: 'Asha Greyjoy', role: 'The kraken’s daughter' },
      { name: 'Euron Greyjoy', role: 'The Crow’s Eye' },
    ],
  },
  {
    id: 'tyrell',
    name: 'House Tyrell',
    words: 'Growing Strong',
    sigil: 'A golden rose on green',
    seat: 'Highgarden',
    region: 'The Reach',
    image: '/img/house-tyrell.jpg',
    colors: 'Gold on green',
    summary:
      'Stewards raised to lords of the Reach after the Field of Fire — whose thorns, in the person of Olenna the Queen of Thorns, were sharper than most swords.',
    history: [
      'When the last Gardener king burned on the Field of Fire, his steward Harlen Tyrell opened Highgarden’s gates to Aegon and was raised from servant to overlord — a promotion the older houses of the Reach never quite forgot.',
      'The Tyrells ruled the richest and most populous of the kingdoms with pageantry, tourneys, and marriages. Their strength was grain: starve a realm, and crowns fall. They fed King’s Landing and named their price in thrones.',
      'Ambition flowered highest with Margaery, thrice-queen, and ended in wildfire: the Great Sept’s destruction took the bloom off the rose, and the Queen of Thorns drank her last cup with a famous confession on her lips.',
    ],
    tree: [
      {
        name: 'Luthor Tyrell',
        note: 'Lord of Highgarden — m. Olenna Redwyne',
        children: [
          {
            name: 'Mace Tyrell',
            note: 'Lord of Highgarden — m. Alerie Hightower',
            children: [
              { name: 'Willas Tyrell', note: 'Heir; the crippled scholar' },
              { name: 'Garlan Tyrell', note: 'Garlan the Gallant' },
              { name: 'Loras Tyrell', note: 'The Knight of Flowers' },
              { name: 'Margaery Tyrell', note: 'Thrice Queen' },
            ],
          },
        ],
      },
      { name: 'Olenna Tyrell', note: 'The Queen of Thorns — born Redwyne' },
    ],
    members: [
      { name: 'Olenna Tyrell', role: 'The Queen of Thorns' },
      { name: 'Margaery Tyrell', role: 'Queen to three kings' },
      { name: 'Loras Tyrell', role: 'The Knight of Flowers' },
      { name: 'Mace Tyrell', role: 'Lord of Highgarden' },
    ],
  },
]

export const minorHouses = [
  { name: 'House Tully', words: 'Family, Duty, Honor', seat: 'Riverrun', sigil: 'A leaping silver trout' },
  { name: 'House Arryn', words: 'As High as Honor', seat: 'The Eyrie', sigil: 'A falcon and moon' },
  { name: 'House Martell', words: 'Unbowed, Unbent, Unbroken', seat: 'Sunspear', sigil: 'A spear-pierced sun' },
  { name: 'House Bolton', words: 'Our Blades Are Sharp', seat: 'The Dreadfort', sigil: 'A flayed man' },
  { name: 'House Mormont', words: 'Here We Stand', seat: 'Bear Island', sigil: 'A black bear' },
  { name: 'House Frey', words: '—', seat: 'The Twins', sigil: 'Twin towers' },
  { name: 'House Tarly', words: 'First in Battle', seat: 'Horn Hill', sigil: 'A striding huntsman' },
  { name: 'House Hightower', words: 'We Light the Way', seat: 'Oldtown', sigil: 'A white tower' },
  { name: 'House Reed', words: '—', seat: 'Greywater Watch', sigil: 'A black lizard-lion' },
  { name: 'House Clegane', words: '—', seat: 'Clegane’s Keep', sigil: 'Three black dogs' },
]

// ── Gods & faiths ─────────────────────────────────────────────────────────────

export interface Faith {
  id: string
  name: string
  aka: string
  origin: string
  image?: string
  symbol: string
  quote: string
  overview: string
  body: string[]
  tenets: { name: string; text: string }[]
}

export const faiths: Faith[] = [
  {
    id: 'old-gods',
    name: 'The Old Gods',
    aka: 'The gods of the First Men',
    origin: 'Worshipped by the Children of the Forest, then the First Men; still kept in the North',
    image: '/img/god-weirwood.jpg',
    symbol: 'The weirwood — white bark, blood-red leaves, a carved watching face',
    quote: 'The old gods are nameless and numberless — the spirits of wood and stream and stone.',
    overview:
      'The oldest faith of Westeros has no sept, no book, no priest — only the godswood, the heart tree, and the silence between the leaves.',
    body: [
      'Before the First Men came with bronze and fire, the Children of the Forest prayed to nameless gods in the groves of the deep wood, and carved faces into the pale weirwoods so their gods could watch. The First Men took up the worship when they made peace with the Children, and in the North they never set it down.',
      'The old gods give no commandments and promise no paradise. Oaths sworn before a heart tree cannot be unsaid; the gods see through the red eyes of the weirwood, and the greenseers — one in a thousand born with the gift — see through them in turn.',
      'Every true northern castle keeps its godswood: a walled acre of wild forest at the heart of the castle, where lords go to think, to judge, and to be judged.',
    ],
    tenets: [
      { name: 'The Heart Tree', text: 'A weirwood with a carved face, the seat of the gods’ sight in every godswood.' },
      { name: 'Greensight', text: 'The gift of dream and vision granted to the rare greenseers, who see through the trees themselves.' },
      { name: 'Skinchanging', text: 'The slipping of a human spirit into wolf, raven, or other beast — the warg’s art.' },
      { name: 'Guest Right', text: 'Bread and salt make sacred law; the old gods curse the host who harms a guest beneath his roof.' },
    ],
  },
  {
    id: 'the-seven',
    name: 'The Faith of the Seven',
    aka: 'The New Gods · The Seven Who Are One',
    origin: 'Brought to Westeros by the Andals six thousand years ago; the faith of most of the realm',
    image: '/img/god-seven.jpg',
    symbol: 'The seven-pointed star — one god with seven faces',
    quote: 'Seven blessings upon you — Father, Mother, Warrior, Maiden, Smith, Crone, and Stranger.',
    overview:
      'One god with seven faces — Father, Mother, Warrior, Maiden, Smith, Crone, and Stranger — prayed to in septs from the Wall to Dorne.',
    body: [
      'When the Andals crossed the narrow sea, they brought steel, the seven-pointed star, and a god of seven aspects who could be all things to all people. The old gods kept the North; the Seven took everything else.',
      'The Faith is a church of structure: septs and septas, septons and septries, the Silent Sisters for the dead, and the Most Devout who once crowned kings. Aegon the Conqueror was anointed by the High Septon, and every king after him ruled by the Seven’s grace — until the dragons’ line fell and the alliance of throne and altar turned to open war.',
      'In the War of the Five Kings the smallfolk’s suffering birthed the Faith Militant reborn: the Sparrows, who reminded the gilded court that the Seven watch the powerful most closely of all.',
    ],
    tenets: [
      { name: 'The Father', text: 'Judge of the living; invoked for justice and fair judgment.' },
      { name: 'The Mother', text: 'Giver of mercy; invoked for protection, fertility, and peace.' },
      { name: 'The Warrior', text: 'God of strength; invoked before battle and for courage.' },
      { name: 'The Maiden', text: 'Keeper of innocence; invoked to protect young girls and virtue.' },
      { name: 'The Smith', text: 'Mender of broken things; invoked for craft, labor, and healing.' },
      { name: 'The Crone', text: 'Bearer of the lamp; invoked for wisdom and guidance.' },
      { name: 'The Stranger', text: 'The face of death and the unknown — never sung of, seldom prayed to.' },
    ],
  },
  {
    id: 'drowned-god',
    name: 'The Drowned God',
    aka: 'The god of the ironborn',
    origin: 'The Iron Islands, older than memory — the faith of the reavers',
    image: '/img/god-drowned.jpg',
    symbol: 'The kraken; the driftwood crown; the seawater blessing',
    quote: 'What is dead may never die, but rises again, harder and stronger.',
    overview:
      'The ironborn drown their faithful and breathe them back to life — for their god is a god of the sea, and the sea takes before it gives.',
    body: [
      'The Drowned God made the ironborn to reave and rape, to carve out kingdoms and write their names in blood and salt — so the priests of the grey shore preach, staff of driftwood in hand. His enemy is the Storm God, whose winds batter the islands; between the two, the ironborn sail.',
      'Baptism is drowning: seawater poured over an infant’s head, or for the truly faithful, full submersion to the edge of death and the kiss of life after. What is dead may never die — the drowned men rise harder and stronger, and fear neither water nor grave.',
      'Every ironborn king once ruled from a driftwood throne, chosen by kingsmoot. The Greyjoys keep the liturgy still: we do not sow. The iron price, or nothing.',
    ],
    tenets: [
      { name: 'The Iron Price', text: 'What you take by strength is yours; what you buy with coin is shamed.' },
      { name: 'The Drowning', text: 'Death by water and return from it is the faith’s central sacrament.' },
      { name: 'The Storm God', text: 'The eternal enemy, who raises the winds against the ironborn.' },
      { name: 'The Kingsmoot', text: 'The captains’ ancient right to choose their king from the salt and rock kings.' },
    ],
  },
  {
    id: 'rhllor',
    name: 'R’hllor, the Lord of Light',
    aka: 'The Red God · The Heart of Fire',
    origin: 'Asshai and the Free Cities of Essos; carried west by red priests',
    image: '/img/god-rhllor.jpg',
    symbol: 'A flaming heart; the nightfire',
    quote: 'For the night is dark and full of terrors.',
    overview:
      'The dualist faith of fire and shadow: one god of light locked in eternal war with the Great Other, the god of ice and death.',
    body: [
      'In the temples of Volantis and the shadowed streets of Asshai, red priests keep fires burning night and day against the darkness that is coming. R’hllor is the Lord of Light, the Heart of Fire — and his enemy has no name but the Great Other.',
      'The faith teaches that an ancient war will decide the world: Azor Ahai reborn, the prince that was promised, will wake dragons from stone and draw Lightbringer from the fire. Red priests read prophecy in flame — and in King’s Landing and at Dragonstone, kings listened.',
      'The red god gives true power, say his priests: shadow-binding, flame-sight, and — at a price no one names twice — the return of the dead to life. Every gift of fire casts a shadow.',
    ],
    tenets: [
      { name: 'The Nightfire', text: 'Sacred flames lit at sunset, kept until dawn, in which priests read visions.' },
      { name: 'Azor Ahai Reborn', text: 'The promised champion who will wake the stone dragon and stand against the darkness.' },
      { name: 'The Great Other', text: 'The nameless god of cold and death — the Night King, to those who have seen.' },
      { name: 'The Last Kiss', text: 'The red priests’ rite that has, more than once, called the dead back to life.' },
    ],
  },
  {
    id: 'many-faced-god',
    name: 'The Many-Faced God',
    aka: 'Him of Many Faces · The god of death',
    origin: 'The House of Black and White, Braavos — worshipped by the Faceless Men',
    image: '/img/god-manyfaced.jpg',
    symbol: 'The black pool; the coin that opens every door',
    quote: 'Valar morghulis — all men must die. Valar dohaeris — all men must serve.',
    overview:
      'In Braavos they teach that every god of death — the Stranger, the Black Goat, the Lion of Night — is one god with many faces, and his gift is release.',
    body: [
      'The first Faceless Man was a slave in the fire-mines of Valyria who gave the gift — death — first to a fellow sufferer, then to a master. The order he founded serves the god whom all faiths unknowingly worship: death himself, in his thousand faces.',
      'The House of Black and White is temple and tomb. Supplicants drink from the black pool and are granted peace; the Faceless Men, who give up name, face, and self to become no one, carry the gift to those named in prayer — for the price is always paid, and the prayer is always answered.',
      'To serve, an acolyte must unmake identity itself: learn the lie of faces, wear the dead, and forget they were ever anyone. A girl who kept her own name could not stay — but she took the art with her into the world.',
    ],
    tenets: [
      { name: 'The Gift', text: 'Death as mercy and release, granted to those who suffer or are named.' },
      { name: 'No One', text: 'The servant surrenders name, face, and past — becoming an instrument only.' },
      { name: 'The Price', text: 'Every death granted has a price measured by the giver’s means, never by the target’s worth.' },
      { name: 'Valar Morghulis', text: 'All men must die — answered by valar dohaeris: all men must serve.' },
    ],
  },
]

// ── Myths & legends ───────────────────────────────────────────────────────────

export interface Myth {
  id: string
  title: string
  era: string
  image?: string
  excerpt: string
  body: string[]
  motifs: string[]
}

export const myths: Myth[] = [
  {
    id: 'the-long-night',
    title: 'The Long Night',
    era: 'The Age of Heroes — eight thousand years before the Conquest',
    image: '/img/myth-longnight.jpg',
    excerpt:
      'A generation of winter, when the Others came down out of the uttermost north and the dead marched under a starless sky.',
    body: [
      'In the midst of the Age of Heroes, a winter fell that lasted a generation. The sun hid its face for years; crops froze in the field, and in that darkness came the Others — pale riders from the Land of Always Winter, whose touch turned the slain to soldiers.',
      'Old Nan’s tales say the Others hunted men through the forests of the North, that they raised the dead to hunt the living, and that all of Westeros would have been a silent, frozen grave had one hero not risen: the Last Hero, who sought the Children of the Forest when all hope was gone.',
      'What ended the Long Night, no maester can say — the tales name the Last Hero, the sword Lightbringer, the first Storm God’s defeat, and the building of the Wall. What the histories agree on is the warning: the Others were defeated, not destroyed. Winter is coming.',
    ],
    motifs: ['The Others', 'The Last Hero', 'A generation of winter', 'The raising of the Wall'],
  },
  {
    id: 'azor-ahai',
    title: 'Azor Ahai & Lightbringer',
    era: 'The Long Night',
    image: '/img/myth-azor.jpg',
    excerpt:
      'The warrior who forged a hero’s sword three times — twice in fire, once in the heart of the woman he loved.',
    body: [
      'The sacred texts of Asshai tell of Azor Ahai, the champion of R’hllor, who labored to forge a blade worthy of the war against the darkness. His first sword broke in water; his second, driven through a lion’s heart, shattered in the beast’s body.',
      'The third forging took a hundred days and nights. This time Azor Ahai called for his wife, Nissa Nissa, and drove the blade through her living heart — and her soul and strength and courage passed into the steel. Lightbringer, the Red Sword of Heroes, has burned ever since in prophecy and dream.',
      'The priests promise he will come again: born beneath a bleeding star, amid smoke and salt, to wake dragons out of stone. Stannis, Daenerys, Jon — every generation finds its candidate. The prophecy keeps its own counsel.',
    ],
    motifs: ['Nissa Nissa', 'The bleeding star', 'The prince that was promised', 'Dragons woken from stone'],
  },
  {
    id: 'the-doom',
    title: 'The Doom of Valyria',
    era: '114 years before the Conquest',
    image: '/img/myth-doom.jpg',
    excerpt:
      'In a single night the greatest civilization the world has known — forty dragonlord families, sorcery, roads of fused stone — burned, drowned, and vanished.',
    body: [
      'For five thousand years the Valyrian Freehold ruled the known world from a peninsula of fire: dragonlords who shaped stone with spell and flame, whose sorcerers made steel no forge since has matched, whose roads run unbroken to this day.',
      'Then, in a single night, the Fourteen Flames erupted. The earth split, the sea swallowed the cities, and ash choked the sky for a generation. Of forty dragonlord families, only one escaped — the Targaryens, warned twelve years before by the prophetic dreams of Daenys the Dreamer.',
      'The Smoking Sea and the ruins of Valyria remain the world’s great forbidden place. Ships that sail in do not sail out. And every Valyrian steel blade still in the world — Ice, Longclaw, Oathkeeper — is an inheritance from the grave of an empire.',
    ],
    motifs: ['The Fourteen Flames', 'Daenys the Dreamer', 'Valyrian steel', 'The Smoking Sea'],
  },
  {
    id: 'bran-the-builder',
    title: 'Bran the Builder',
    era: 'The Age of Heroes',
    excerpt:
      'The first Stark, who raised Winterfell, helped build the Wall, and founded the oldest bloodline in the Seven Kingdoms.',
    body: [
      'Brandon Stark, called the Builder, stands at the head of the longest pedigree in Westeros. The singers credit him with Winterfell, the Wall, Storm’s End, and the Hightower of Oldtown — an improbable geography that the maesters explain as legend accreting around many Brandons, not one.',
      'The tales are stubborn, though: they say the Builder raised the Wall with giants and the Children’s magic after the Long Night, and bound it with spells older than any written word. The Wall has stood eight thousand years. Something holds it up.',
      'House Stark’s unbroken descent from the Builder — through eight thousand years, long nights, and kings without number — is the North’s own proof that memory is stronger than any crown.',
    ],
    motifs: ['The founding of House Stark', 'The Wall’s enchantment', 'Winterfell’s crypts', 'Giants and the Children'],
  },
  {
    id: 'hammer-of-the-waters',
    title: 'The Hammer of the Waters',
    era: 'The wars of the First Men and the Children',
    excerpt:
      'Twice the Children of the Forest shattered the earth itself — once to break the land bridge of Dorne, once to drown the Neck.',
    body: [
      'When the First Men crossed from Essos across the Arm of Dorne and cut down the Children’s weirwoods, the greenseers gathered in desperation and worked their greatest sorcery: the Hammer of the Waters, which broke the land bridge and drowned it beneath the narrow sea. The Stepstones are its bones.',
      'The First Men came anyway, in ships. So the Children struck again — this time at the Neck, to cut the North from the south — and though the hammer fell, it only half-succeeded: the Neck drowned into a vast impassable marsh, guarded ever since by the crannogmen of Greywater Watch.',
      'The cost of such sorcery was ruin. The Children faded from the world into the deep forests, and were half a legend before the Wall was finished — but their hammer is remembered wherever men look at the broken islands of the Stepstones and remember that the earth itself was once a weapon.',
    ],
    motifs: ['The broken Arm of Dorne', 'The drowned Neck', 'Greenseer sorcery', 'The crannogmen'],
  },
  {
    id: 'children-of-the-forest',
    title: 'The Children & the Pact',
    era: 'The Dawn Age, twelve thousand years before the Conquest',
    excerpt:
      'The little dark people of the deep woods, who sang the songs of the earth, taught men to worship the old gods, and made the weapon that became the Night King.',
    body: [
      'Before men, Westeros belonged to the Children of the Forest — small, dark, beautiful, and bound to the weirwoods in ways no maester has ever mapped. They hunted with dragonglass, spoke to beasts, and their greenseers saw through the eyes of every carved tree in the world.',
      'The First Men’s coming meant two thousand years of war, ended at last by the Pact of the Isle of Faces: the open lands to men, the deep forest to the Children, and the weirwoods spared forever. On that isle every tree still bears a face.',
      'Their last great act was their ruin: in the war against men they forged the Night King, and in the Long Night that followed, the Children nearly vanished from the earth helping men undo what they had made. Their last greenseer kept the world’s memory in a cave beyond the Wall — until a broken boy from Winterfell came to claim it.',
    ],
    motifs: ['The Pact of the Isle of Faces', 'Greenseers and wargs', 'Dragonglass', 'The last of the Children'],
  },
]

// ── Timeline of the ages ──────────────────────────────────────────────────────

export interface TimelineEra {
  age: string
  span: string
  events: { year: string; title: string; text: string; battleIds?: string[]; image?: string }[]
}

export const timeline: TimelineEra[] = [
  {
    age: 'The Dawn Age',
    span: 'Before −12,000 AC',
    events: [
      {
        year: '−12,000',
        title: 'The First Men cross the Arm of Dorne',
        text: 'Men come to Westeros from Essos across the land bridge, bringing bronze, horses, and axes to the weirwoods.',
      },
      {
        year: '−12,000',
        title: 'The Hammer of the Waters',
        text: 'The Children of the Forest shatter the Arm of Dorne, creating the Stepstones. The war rages on regardless.',
      },
      {
        year: '−10,000',
        title: 'The Pact of the Isle of Faces',
        text: 'Four hundred years of peace begin between the First Men and the Children; men take up the old gods.',
        image: '/img/god-weirwood.jpg',
      },
    ],
  },
  {
    age: 'The Age of Heroes',
    span: '−10,000 to −8,000 AC',
    events: [
      {
        year: '−8,000',
        title: 'The Long Night falls',
        text: 'A winter that lasts a generation; the Others descend with armies of the dead. The Last Hero seeks the Children.',
        image: '/img/myth-longnight.jpg',
      },
      {
        year: '−8,000',
        title: 'The Battle for the Dawn',
        text: 'The Others are broken and driven back into the uttermost north. The Night’s Watch is founded.',
      },
      {
        year: '−8,000',
        title: 'The Wall is raised',
        text: 'Bran the Builder raises Winterfell and — with giants and magic, the tales say — the seven-hundred-foot Wall.',
        image: '/img/order-nights-watch.jpg',
      },
    ],
  },
  {
    age: 'The Andal Invasion',
    span: '−6,000 to −4,000 AC',
    events: [
      {
        year: '−6,000',
        title: 'The Andals land',
        text: 'Steel-armed invaders bearing the seven-pointed star conquer every kingdom but the North, which holds at Moat Cailin.',
      },
      {
        year: '−4,000',
        title: 'The Faith of the Seven spreads',
        text: 'The old gods retreat to the North; septs rise across the southern kingdoms.',
      },
    ],
  },
  {
    age: 'The Rise & Fall of Valyria',
    span: '−5,000 to −114 AC',
    events: [
      {
        year: '−5,000',
        title: 'The Valyrians tame the dragons',
        text: 'Shepherds of the Fourteen Flames become the lords of the world’s only dragons, and the Freehold rises.',
        image: '/img/creature-dragons.jpg',
      },
      {
        year: '−114',
        title: 'The Doom',
        text: 'Valyria is destroyed in a night of fire. Only the Targaryens, forewarned, survive on Dragonstone with five dragons.',
        image: '/img/myth-doom.jpg',
      },
    ],
  },
  {
    age: 'The Conquest',
    span: '−2 to 37 AC',
    events: [
      {
        year: '1 AC',
        title: 'Aegon lands at the Blackwater',
        text: 'Aegon Targaryen and his sister-wives begin the conquest with three dragons. The first year of the new calendar.',
      },
      {
        year: '1 AC',
        title: 'The Field of Fire',
        text: 'Three dragons burn four thousand men of the Reach and the Rock; Highgarden yields; the Iron Throne is forged.',
        image: '/img/battle-field-of-fire.jpg',
        battleIds: ['field-of-fire'],
      },
      {
        year: '37 AC',
        title: 'The Conqueror dies',
        text: 'Six of seven kingdoms kneel; Dorne alone remains unbowed, joining only by marriage two centuries later.',
      },
    ],
  },
  {
    age: 'The Dance of the Dragons',
    span: '129–131 AC',
    events: [
      {
        year: '129',
        title: 'Succession war between Rhaenyra and Aegon II',
        text: 'The Targaryens devour themselves; dragon fights dragon over King’s Landing.',
      },
      {
        year: '131',
        title: 'The dragons’ decline',
        text: 'The war ends with most of the world’s dragons dead. Within two decades the last dragon dies, and the magic begins to leave the world.',
      },
    ],
  },
  {
    age: 'Robert’s Rebellion',
    span: '282–283 AC',
    events: [
      {
        year: '282',
        title: 'Rhaegar takes Lyanna',
        text: 'The Dragon Prince’s abduction — or rescue — of Lyanna Stark lights the fuse of the realm.',
      },
      {
        year: '283',
        title: 'The Battle of the Trident',
        text: 'Robert Baratheon kills Rhaegar with one blow of his warhammer. The Mad King falls to Jaime Lannister’s sword; the stag takes the throne.',
        image: '/img/char-rhaegar.jpg',
        battleIds: ['battle-of-the-trident'],
      },
    ],
  },
  {
    age: 'The War of the Five Kings',
    span: '298–300 AC',
    events: [
      {
        year: '298',
        title: 'King Robert dies; Eddard Stark is executed',
        text: 'Five kings rise: Joffrey, Stannis, Renly, Robb Stark, and Balon Greyjoy. At the Whispering Wood, the Young Wolf takes the Kingslayer in the dark. The realm burns.',
        battleIds: ['whispering-wood'],
      },
      {
        year: '299',
        title: 'The Blackwater; the Red Wedding',
        text: 'Stannis breaks against King’s Landing’s wildfire; the Young Wolf is murdered at his uncle’s wedding.',
        image: '/img/battle-blackwater.jpg',
        battleIds: ['the-blackwater', 'the-red-wedding'],
      },
      {
        year: '300',
        title: 'The dead fall upon Hardhome',
        text: 'Beyond the Wall, the Night King’s host harvests the free folk at Hardhome while the Watch rows for the ships. The realm below goes on arguing about kings.',
        battleIds: ['hardhome'],
      },
      {
        year: '300',
        title: 'The dragons return',
        text: 'Daenerys Targaryen sails west; the dead walk beyond the Wall. The Long Night comes again.',
        image: '/img/creature-drogon.jpg',
      },
      {
        year: '303',
        title: 'The bastards’ field at Winterfell',
        text: 'Jon Snow and Ramsay Bolton meet before Winterfell’s walls; the Vale’s knights arrive at the last light, and the direwolf flies over the castle again.',
        battleIds: ['battle-of-the-bastards'],
      },
      {
        year: '305',
        title: 'The Long Night returns to Winterfell',
        text: 'The living make their stand against the Night King’s whole host in a single night of storm — and Arya Stark ends it in the godswood with a Valyrian steel dagger.',
        image: '/img/creature-wights.jpg',
        battleIds: ['the-long-night-battle'],
      },
    ],
  },
]

// ── Regions of Westeros ───────────────────────────────────────────────────────

export interface Region {
  id: string
  name: string
  seat: string
  house: string
  desc: string
  lore: string
  pin?: { x: number; y: number }
}

export const regions: Region[] = [
  {
    id: 'the-north',
    name: 'The North',
    seat: 'Winterfell',
    house: 'House Stark',
    desc: 'Vast as all the other kingdoms combined — cold, honor-bound, and ruled from the heated walls of Winterfell.',
    lore: 'The North keeps the old gods, the old laws, and the old grudges. Its people say the Others were defeated there once, and will be again.',
    pin: { x: 46.5, y: 12 },
  },
  {
    id: 'the-vale',
    name: 'The Vale',
    seat: 'The Eyrie',
    house: 'House Arryn',
    desc: 'Mountain fastness behind the Bloody Gate, where the Arryns rule from a castle impregnable in the sky.',
    lore: 'No army has ever taken the Eyrie. The Vale’s knights are the proudest in the realm — “as high as honor” is both motto and altitude.',
    pin: { x: 58, y: 29 },
  },
  {
    id: 'the-riverlands',
    name: 'The Riverlands',
    seat: 'Riverrun',
    house: 'House Tully',
    desc: 'The green heart of the continent, watered by the Trident — and the battlefield of every war ever fought in Westeros.',
    lore: 'Family, Duty, Honor. The Tully words read like a truism until you learn the order is the point — and the tragedy.',
    pin: { x: 46, y: 43 },
  },
  {
    id: 'the-westerlands',
    name: 'The Westerlands',
    seat: 'Casterly Rock',
    house: 'House Lannister',
    desc: 'Hills of gold — literally: the Rock’s mines made the Lannisters the richest family in the known world.',
    lore: 'Beneath Casterly Rock run tunnels older than the castle above them, where the sea thunders in the dark. The lion sleeps above a drowning cave.',
    pin: { x: 27.5, y: 54 },
  },
  {
    id: 'the-reach',
    name: 'The Reach',
    seat: 'Highgarden',
    house: 'House Tyrell',
    desc: 'The realm’s breadbasket and its chivalric heart — tourneys, roses, and more swords than any other kingdom.',
    lore: 'Oldtown, the oldest city in Westeros, stands at the Reach’s edge: seat of the maesters’ Citadel and the Hightower that lit the way before Valyria rose.',
    pin: { x: 33, y: 67 },
  },
  {
    id: 'the-crownlands',
    name: 'The Crownlands',
    seat: 'King’s Landing',
    house: 'The Crown',
    desc: 'The lands ruled directly from the Iron Throne — King’s Landing, Dragonstone, and the Blackwater Rush.',
    lore: 'A million souls live in King’s Landing, the city Aegon founded at his landing place. It smells, said one visitor, of the whole realm’s ambition.',
    pin: { x: 61.5, y: 55 },
  },
  {
    id: 'the-stormlands',
    name: 'The Stormlands',
    seat: 'Storm’s End',
    house: 'House Baratheon',
    desc: 'Rain-lashed cliffs and shipbreaker bays, ruled from a castle that has never fallen to storm or siege.',
    lore: 'Storm’s End has withstood a thousand years of the narrow sea’s fury. The Baratheons took their words from the weather itself: ours is the fury.',
    pin: { x: 60, y: 70 },
  },
  {
    id: 'dorne',
    name: 'Dorne',
    seat: 'Sunspear',
    house: 'House Martell',
    desc: 'Desert principality of the far south — unbowed by dragons, unbent by conquest, joined to the realm only by marriage.',
    lore: 'Dorne alone defied Aegon: when dragons burned their castles, the Dornish simply vanished into the sands and waited. Unbowed, unbent, unbroken.',
    pin: { x: 47, y: 85 },
  },
  {
    id: 'iron-islands',
    name: 'The Iron Islands',
    seat: 'Pyke',
    house: 'House Greyjoy',
    desc: 'Bare black rocks in the Sunset Sea, where men do not sow and the drowned god rules the waves.',
    lore: 'The ironborn were once the terror of every coast from the Arbor to Bear Island. The old way sleeps lightly.',
    pin: { x: 11.5, y: 35 },
  },
  {
    id: 'beyond-the-wall',
    name: 'Beyond the Wall',
    seat: 'The Haunted Forest',
    house: 'The Free Folk',
    desc: 'Everything north of the Wall: the Haunted Forest, the Frostfangs, the Land of Always Winter — where the dead first walked.',
    lore: 'The Free Folk kneel to no one and name themselves free. They were the first to learn what the Long Night means, and the first to flee it.',
  },
]

// ── Great battles ─────────────────────────────────────────────────────────────

export interface BattleForce {
  side: string
  soldiers?: number
  label?: string
  dragons?: number
  color?: 'gold' | 'oxblood' | 'steel'
}

export interface Battle {
  id: string
  name: string
  aka?: string
  year: string
  location: string
  image?: string
  belligerents: string
  outcome: string
  forces?: BattleForce[]
  text: string[]
}

export const battles: Battle[] = [
  {
    id: 'field-of-fire',
    name: 'The Field of Fire',
    year: '1 AC',
    location: 'The Reach',
    image: '/img/battle-field-of-fire.jpg',
    belligerents: 'Aegon Targaryen vs. the Kings of the Rock and the Reach',
    outcome: 'Four thousand men burned; Highgarden and the Rock yielded; the Targaryen conquest became unstoppable',
    forces: [
      { side: 'The Targaryen host', soldiers: 11000, dragons: 3, color: 'gold', label: 'Aegon, Rhaenys & Visenya — with Balerion, Meraxes & Vhagar' },
      { side: 'The Lannister–Gardener host', soldiers: 55000, dragons: 0, color: 'oxblood', label: 'King Loren of the Rock & King Mern of the Reach' },
    ],
    text: [
      'King Loren of the Rock and King Mern of the Reach joined fifty-five thousand men against Aegon’s eleven thousand — and against Balerion, Meraxes, and Vhagar. It was the only time all three dragons took the field together.',
      'The dragons struck with the wind, and the wind blew the fire through the dry wheat. Four thousand men died in an afternoon; King Mern died with all his sons, ending the Gardener line. Harlen Tyrell opened Highgarden’s gates and was made lord for it.',
    ],
  },
  {
    id: 'battle-of-the-trident',
    name: 'The Battle of the Trident',
    year: '283 AC',
    location: 'The Ruby Ford, the Riverlands',
    belligerents: 'Robert Baratheon’s rebels vs. the royal host of Rhaegar Targaryen',
    outcome: 'Rhaegar slain by Robert’s warhammer; the Targaryen dynasty doomed',
    forces: [
      { side: 'The rebel host', soldiers: 40000, dragons: 0, color: 'gold', label: 'Robert Baratheon — Stark, Arryn, Tully & Baratheon banners' },
      { side: 'The royal host', soldiers: 42000, dragons: 0, color: 'oxblood', label: 'Rhaegar Targaryen — with Dornish spears & royalist lords' },
    ],
    text: [
      'The decisive battle of Robert’s Rebellion was decided by a duel in the fording water: the Usurper and the Dragon Prince, hammer against sword, in sight of both armies.',
      'Robert’s blow caved in Rhaegar’s breastplate and scattered the rubies of his armor into the river — the ford bears the name still. The royal army broke, the road to King’s Landing lay open, and three hundred years of dragon kings ended within the year.',
    ],
  },
  {
    id: 'the-blackwater',
    name: 'The Battle of the Blackwater',
    year: '299 AC',
    location: 'Blackwater Bay, King’s Landing',
    image: '/img/battle-blackwater.jpg',
    belligerents: 'Stannis Baratheon’s fleet vs. the defenders of King’s Landing',
    outcome: 'Stannis’s armada destroyed by wildfire; the city held; the war turned',
    forces: [
      { side: 'Stannis Baratheon’s host', soldiers: 21000, dragons: 0, color: 'oxblood', label: 'With some two hundred ships of sail' },
      { side: 'The garrison of King’s Landing', soldiers: 6500, dragons: 0, color: 'gold', label: 'Gold cloaks & sellswords — plus wildfire and the harbor chain' },
      { side: 'The Lannister–Tyrell relief host', soldiers: 70000, dragons: 0, color: 'steel', label: 'Tywin Lannister & Mace Tyrell, arriving at dusk' },
    ],
    text: [
      'Stannis Baratheon came against King’s Landing with two hundred ships. Tyrion Lannister answered with a harbor chain and the alchemists’ oldest secret: wildfire, the green flame that cannot be quenched.',
      'One ship — the emptied hulk Swordfish, drifting full of the green jars — turned Blackwater Bay into a furnace. When the Lannister-Tyrell host fell on Stannis’s flank at dusk, the siege was over. The Halfman had saved the city; the city gave the credit elsewhere.',
    ],
  },
  {
    id: 'the-red-wedding',
    name: 'The Red Wedding',
    aka: 'The Massacre at the Twins',
    year: '299 AC',
    location: 'The Twins, the Riverlands',
    belligerents: 'Houses Frey and Bolton vs. the guests of House Stark',
    outcome: 'Robb Stark, his mother, and his host murdered under guest right; the northern war ended in an hour',
    forces: [
      { side: 'The Stark–Tully guests', soldiers: 3500, dragons: 0, color: 'gold', label: 'Unarmed at table, under guest right' },
      { side: 'The Frey–Bolton host', soldiers: 3400, dragons: 0, color: 'oxblood', label: 'Armed men among the musicians' },
    ],
    text: [
      'Guest right — bread and salt, sacred for six thousand years — was the shield under which Walder Frey and Roose Bolton struck. At the wedding of Edmure Tully, the musicians drew crossbows.',
      'The Young Wolf died with his direwolf’s head sewn to his shoulders; his mother’s throat was opened; his bannermen died at their tables. The North remembers. The Freys have not dined easily since.',
    ],
  },
  {
    id: 'battle-of-the-bastards',
    name: 'The Battle of the Bastards',
    year: '303 AC',
    location: 'Winterfell, the North',
    belligerents: 'Jon Snow’s free folk and loyalists vs. Ramsay Bolton’s host',
    outcome: 'Winterfell retaken; House Bolton extinguished; the Stark banners raised again',
    forces: [
      { side: 'The Stark–Free Folk host', soldiers: 2400, dragons: 0, color: 'gold', label: 'Jon Snow — wildlings, Mormonts & northern loyalists' },
      { side: 'The Knights of the Vale', soldiers: 2000, dragons: 0, color: 'steel', label: 'Arriving at the last light, at Sansa’s word' },
      { side: 'The Bolton–Umber–Karstark host', soldiers: 6000, dragons: 0, color: 'oxblood', label: 'Ramsay Bolton — the Dreadfort’s full strength' },
    ],
    text: [
      'Two bastards for a castle: Jon Snow with the wildlings and a handful of northern loyalists, Ramsay Bolton with the Dreadfort’s full strength and Rickon Stark as bait.',
      'The battle was nearly lost in the crush of the shield-wall when the Knights of the Vale arrived at the last light. Ramsay died in his own kennels. The direwolf flew over Winterfell again.',
    ],
  },
  {
    id: 'the-long-night-battle',
    name: 'The Battle of Winterfell',
    aka: 'The Long Night Returned',
    year: '305 AC',
    location: 'Winterfell, the North',
    belligerents: 'The living of Westeros vs. the army of the dead',
    outcome: 'The Night King destroyed by Arya Stark; the Long Night ended in a single night',
    forces: [
      { side: 'The living of Westeros', soldiers: 50000, dragons: 2, color: 'gold', label: 'Unsullied, Dothraki & the North — with Drogon & Rhaegal' },
      { side: 'The army of the dead', soldiers: 100000, dragons: 1, color: 'oxblood', label: 'Wights beyond counting — with dead Viserion' },
    ],
    text: [
      'The combined strength of the living — dragon and direwolf, Unsullied and Dothraki, knight and wildling — made its stand in the dark before Winterfell, against every dead thing the Night King had gathered in eight thousand years.',
      'The dead fell with their master when Arya Stark came out of the night in the godswood with a Valyrian steel dagger. Melisandre’s old words to her proved true: brown eyes, blue eyes, green eyes — eyes she would shut forever.',
    ],
  },
  {
    id: 'whispering-wood',
    name: 'The Whispering Wood',
    year: '298 AC',
    location: 'The Whispering Wood, the Riverlands',
    belligerents: 'Robb Stark’s northern host vs. Jaime Lannister’s siege army',
    outcome: 'Jaime Lannister captured; the siege of Riverrun broken; the Young Wolf’s legend born',
    forces: [
      { side: 'The Stark–Tully host', soldiers: 6000, dragons: 0, color: 'gold', label: 'Robb Stark — northmen & riverlords, with Grey Wind' },
      { side: 'Jaime Lannister’s siege army', soldiers: 15000, dragons: 0, color: 'oxblood', label: 'Three camps strung round Riverrun' },
    ],
    text: [
      'Fifteen years old and untested, Robb Stark split his army at the Twins, bought Frey swords with a betrothal, and fell on the Lannister siege lines around Riverrun in a night ambush. Grey Wind led the van; the Kingslayer woke to find his army dead around him.',
      'The victory unmade the Lannister war in a single night: three armies defeated in detail, the Kingslayer in chains, and the northmen so drunk on the impossible that they crowned a boy king. Every later disaster of the war is written in the shadow of this triumph.',
    ],
  },
  {
    id: 'hardhome',
    name: 'The Massacre of Hardhome',
    year: '300 AC',
    location: 'Hardhome, beyond the Wall',
    belligerents: 'The Night’s Watch and the free folk vs. the army of the dead',
    outcome: 'The free folk host overrun; thousands raised into the dead; the Long Night’s coming proven',
    forces: [
      { side: 'The free folk & the Watch', soldiers: 5000, dragons: 0, color: 'gold', label: 'Jon Snow — eleven ships and those who reached them' },
      { side: 'The dead at the shore', soldiers: 50000, dragons: 0, color: 'oxblood', label: 'Falling out of the mist in waves' },
    ],
    text: [
      'Jon Snow sailed to Hardhome to bring the free folk through the Wall before the cold took them. The cold arrived first: a mist rolled down from the heights, and with it the Night King’s host — dead men falling on the living in the surf.',
      'The Watch saved perhaps five thousand of sixty thousand. The rest rose with blue eyes behind the rescuers as the ships pulled away. Hardhome was not a battle but a harvest — and it ended every southern argument about whether the dead were real.',
    ],
  },
]

// ── Navigation index ──────────────────────────────────────────────────────────

export const navIndex: { page: Page; label: string; note: string }[] = [
  { page: 'home', label: 'The Great Hall', note: 'Begin here' },
  { page: 'characters', label: 'Chronicle of Characters', note: 'The souls who shaped the age' },
  { page: 'houses', label: 'The Great Houses', note: 'Ten houses & their family trees' },
  { page: 'creatures', label: 'Beasts & Beings', note: 'Dragons, direwolves & elder races' },
  { page: 'gods', label: 'Gods Old & New', note: 'Five faiths of the known world' },
  { page: 'myths', label: 'Myths & Legends', note: 'Six tales from the deep past' },
  { page: 'timeline', label: 'The Long Timeline', note: 'From the Dawn Age to the Long Night' },
  { page: 'map', label: 'The Map of Westeros', note: 'Nine regions of the Seven Kingdoms' },
  { page: 'battles', label: 'Fields of Battle', note: 'Eight battles that decided the realm' },
  { page: 'throne', label: 'The Iron Throne', note: 'Every reign & every rival claim' },
  { page: 'weapons', label: 'Famous Weapons', note: 'Ice, Longclaw, Needle & more' },
  { page: 'valyrian', label: 'Valyrian Steel', note: 'The known blades & their fates' },
  { page: 'cultures', label: 'Peoples & Cultures', note: 'Dothraki, Dornish, free folk & more' },
  { page: 'orders', label: 'Orders & Oaths', note: 'The Watch, the White Cloaks & stranger' },
]
