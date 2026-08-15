import { characters, houses, type Character, type House } from './lore'

// ─────────────────────────────────────────────────────────────────────────────
// The Chronicle Expanded — additional characters, houses, and creatures
// ─────────────────────────────────────────────────────────────────────────────

export const extraCharacters: Character[] = [
  {
    id: 'eddard-stark',
    name: 'Eddard Stark',
    aliases: ['Ned', 'The Quiet Wolf', 'Lord of Winterfell'],
    house: 'House Stark',
    houseId: 'stark',
    status: 'Executed in King’s Landing, 298 AC',
    culture: 'Northman',
    image: '/img/char-eddard.jpg',
    quote: 'The man who passes the sentence should swing the sword.',
    summary:
      'Warden of the North and the most honorable man of his age — whose honor, carried south, proved fatal in a city that plays by other rules.',
    bio: [
      'Second son of Winterfell, raised beside Robert Baratheon in the Eyrie, Eddard became lord when his father and brother were burned by the Mad King. He helped win a rebellion, buried a sister beneath a promise, and came home to the North to rule it quietly for fifteen years.',
      'Called to King’s Landing as Hand, he found a court of whispers, a queen’s secret written in her children’s golden hair, and a game he refused to play. He offered mercy to Cersei Lannister; she offered none to his daughter’s swordmaster. His head fell on the steps of the Great Sept — and the realm has not stopped bleeding since.',
      'His legacy is paradox: the realm despises his naivety, yet every faction claims his memory. The North rose for his son, his daughter, his name. Honor lost Ned Stark everything, and made him the only player in the game everyone still believes.',
    ],
    facts: [
      { label: 'Offices', value: 'Warden of the North; Hand of the King; Protector of the Realm' },
      { label: 'Sword', value: 'Ice — the greatsword of House Stark, four hundred years in the family' },
      { label: 'The promise', value: 'Kept at the Tower of Joy, at the price of his honor' },
      { label: 'End', value: 'Beheaded on the steps of Baelor’s Sept' },
    ],
  },
  {
    id: 'catelyn-stark',
    name: 'Catelyn Stark',
    aliases: ['Cat', 'Lady of Winterfell', 'Lady Stoneheart'],
    house: 'House Tully · Stark by marriage',
    houseId: 'tully',
    status: 'Murdered at the Red Wedding; what returned is not her',
    culture: 'Riverwoman',
    image: '/img/char-catelyn.jpg',
    quote: 'Family, Duty, Honor. I would have it the other way around, but the gods made me a Tully.',
    summary:
      'Born a Tully, wed a Stark, and spent the war trying to hold her family together with both houses’ words — and losing them one child at a time.',
    bio: [
      'Eldest daughter of Riverrun, promised to one Stark and married to his brother, Catelyn built a life on duty and loved a husband who never stopped grieving his dead sister. When the realm broke, she rode south for answers and came home with Tyrion Lannister as her prisoner — the first stone of the avalanche.',
      'She was her son’s wisest counselor and his least-heard one. She freed Jaime Lannister for her daughters’ sake and watched it hollow Robb’s cause. At the Twins she saw the knives come out, begged for her son’s life, and died with her hair in her hands and grief where reason had been.',
      'The Brotherhood found her three days dead in the Green Fork. What Beric Dondarrion’s kiss woke in her wears Catelyn’s face and answers only to vengeance. The smallfolk call her Lady Stoneheart.',
    ],
    facts: [
      { label: 'Born', value: 'Eldest daughter of Hoster Tully of Riverrun' },
      { label: 'Children', value: 'Robb, Sansa, Arya, Bran, Rickon' },
      { label: 'Defining act', value: 'Seizing Tyrion at the inn at the crossroads' },
      { label: 'After', value: 'Lady Stoneheart, who hangs every Frey she finds' },
    ],
  },
  {
    id: 'sansa-stark',
    name: 'Sansa Stark',
    aliases: ['The Little Bird', 'Alayne Stone', 'Queen in the North'],
    house: 'House Stark',
    houseId: 'stark',
    status: 'Crowned Queen in the North',
    culture: 'Northman',
    image: '/img/char-sansa.jpg',
    quote: 'I’m a slow learner, it’s true. But I learn.',
    summary:
      'The daughter raised on songs of gallant knights, who survived them all — and learned to play the game better than its masters.',
    bio: [
      'Sansa began the story as the only person in Winterfell who believed the songs: knights were gallant, queens were kind, and Joffrey was her golden prince. King’s Landing cured her of every one of those beliefs at the cost of her direwolf, her father, and her innocence.',
      'Hostage to the Lannisters, beaten on Joffrey’s whims, married to Tyrion, stolen by Littlefinger — she studied each of them the way her sister studied swordplay. By the Vale she was Alayne Stone, learning the game from its subtlest player.',
      'Home again, she fed Ramsay Bolton to his own hounds, saw through Littlefinger’s last ladder of chaos, and pronounced his sentence herself. When the wars ended the North chose its own crown, and placed it on the head of the little bird who had learned to sing in a cage.',
    ],
    facts: [
      { label: 'Direwolf', value: 'Lady — killed at the Trident on Cersei’s word' },
      { label: 'Teachers', value: 'Cersei Lannister, Margaery Tyrell, Petyr Baelish' },
      { label: 'Justice', value: 'Sentenced both Ramsay Bolton and Littlefinger' },
      { label: 'Crowned', value: 'Queen in the North, of an independent kingdom' },
    ],
  },
  {
    id: 'robb-stark',
    name: 'Robb Stark',
    aliases: ['The Young Wolf', 'The King in the North', 'The King Who Lost the North'],
    house: 'House Stark',
    houseId: 'stark',
    status: 'Murdered at the Red Wedding, 299 AC',
    culture: 'Northman',
    image: '/img/char-robb.jpg',
    quote: 'I have won every battle, yet somehow I am losing the war.',
    summary:
      'Called the banners at fifteen, never lost a battle, and lost his crown, his family, and his life to a marriage and a massacre.',
    bio: [
      'When Ned Stark was taken, his fifteen-year-old son called the banners and went south to fetch him — and discovered he was the best battle commander of his generation. The Whispering Wood and Oxcross broke the Lannister armies; the North and the riverlands crowned him king.',
      'Kings pay for victories in strange coin. Robb lost Winterfell to Theon’s betrayal, the Karstarks to a prisoner’s execution, the Freys to a broken betrothal, and the war to a bed he loved in the Crag. He marched on his grandfather’s funeral intending to win it all back.',
      'At his uncle’s wedding at the Twins, under guest right, the Freys and Boltons butchered him, his mother, and his host. They sewed Grey Wind’s head to his shoulders. The Young Wolf was sixteen, and he had never once lost on the field.',
    ],
    facts: [
      { label: 'Record', value: 'Undefeated in every battle he commanded' },
      { label: 'Crowned', value: 'King in the North and of the Trident' },
      { label: 'Fatal error', value: 'Breaking his betrothal to House Frey for Jeyne Westerling' },
      { label: 'Direwolf', value: 'Grey Wind — died beside him at the Twins' },
    ],
  },
  {
    id: 'samwell-tarly',
    name: 'Samwell Tarly',
    aliases: ['Sam', 'Sam the Slayer', 'Ser Piggy', 'Lady Piggy'],
    house: 'House Tarly · The Night’s Watch',
    status: 'Grand Maester of the realm',
    culture: 'Reachman',
    image: '/img/char-samwell.jpg',
    quote: 'I read it in a book.',
    summary:
      'The craven of Horn Hill who was sent to the Wall to die, and instead became the man who reads the answers nobody else can find.',
    bio: [
      'Randyll Tarly’s eldest son loved books, music, and cooking, and feared everything else — so his lord father gave him a choice: the Wall, or a hunting accident. Sam took the black and found, to everyone’s astonishment, that the Night’s Watch needed readers as much as swords.',
      'He killed an Other with a dragonglass dagger when he was too frightened to run, carried Gilly and her babe out of Craster’s Keep, and held the Night’s Watch together through its darkest election. At the Citadel he found the proof of Jon’s parentage and the cure for greyscale.',
      'The boy whose father despised him ended the wars as Grand Maester — the archive’s own favorite, and proof that the pen outlives the sword.',
    ],
    facts: [
      { label: 'Feat', value: 'First man in centuries to slay an Other' },
      { label: 'Weapon', value: 'Dragonglass — and the Citadel’s library' },
      { label: 'Loves', value: 'Gilly, little Sam, and books' },
      { label: 'End', value: 'Grand Maester of the Six Kingdoms' },
    ],
  },
  {
    id: 'brienne-of-tarth',
    name: 'Brienne of Tarth',
    aliases: ['The Maid of Tarth', 'Brienne the Beauty', 'The Blue'],
    house: 'House Tarth · The Kingsguard',
    status: 'Lord Commander of the Kingsguard',
    culture: 'Stormlander',
    image: '/img/char-brienne.jpg',
    quote: 'All my life men have laughed at me. I stopped listening long ago.',
    summary:
      'The truest knight in the Seven Kingdoms, mocked for the face she was born with and unmatched with the sword she earned.',
    bio: [
      'Too tall, too plain, too strong — Brienne of Tarth was every court’s favorite joke, and answered by beating every man who made it. She won the melee at Bitterbridge, took Renly’s rainbow cloak, and watched a shadow kill the only king who ever treated her gently.',
      'Charged with carrying Jaime Lannister across a realm at war, she won his sword hand’s worth of respect and gave him back his honor. Jaime’s gift of Oathkeeper — half of Ned Stark’s Ice — sent her hunting Sansa Stark through the riverlands, the single-minded quest that defined her.',
      'Knighted at last before the Long Night, she stood in Winterfell’s shield wall and lived. The book of the Kingsguard now records her deeds in her own hand — Lord Commander Brienne of Tarth, the only member of that order who ever deserved its white cloak without reservation.',
    ],
    facts: [
      { label: 'Sword', value: 'Oathkeeper — Valyrian steel, gift of Jaime Lannister' },
      { label: 'Vows kept', value: 'Renly’s, Catelyn’s, Jaime’s — every one' },
      { label: 'Knighted', value: 'By Ser Jaime, the night before the dead came' },
      { label: 'End', value: 'Lord Commander of the Kingsguard' },
    ],
  },
  {
    id: 'sandor-clegane',
    name: 'Sandor Clegane',
    aliases: ['The Hound', 'Dog'],
    house: 'House Clegane',
    status: 'Died at the Red Keep, facing his brother in the fire',
    culture: 'Westerman',
    image: '/img/char-sandor.jpg',
    quote: 'A knight’s a sword with a horse. The rest — the vows, the sacred oils — are silk ribbons tied round the sword.',
    summary:
      'The burned man who hated knights and their hypocrisy, and spent his life being better than them without ever taking the vow.',
    bio: [
      'When Sandor was seven, his brother Gregor pressed his face into a brazier over a borrowed toy. The maesters saved the flesh; nothing saved the faith. He grew into the most feared dog in the Lannister kennels — Joffrey’s sworn shield who sneered at knighthood while doing its work.',
      'He carried Sansa Stark home through a riot, refused to burn at the Blackwater, and ended up guarding Arya Stark across the riverlands for ransom that never came — the Stark sisters’ unlikely shepherd, and the closest thing to a conscience either side of that war produced.',
      'He died as he chose: walking into the fire he feared his whole life, to put an end to the brother who made him. Bugger the gods. He never needed them.',
    ],
    facts: [
      { label: 'Fear', value: 'Fire — the gift of his brother Gregor' },
      { label: 'Wards', value: 'Sansa Stark, then Arya Stark' },
      { label: 'Deserted', value: 'King’s Landing at the height of the Blackwater' },
      { label: 'End', value: 'Cleganebowl — the fall from the Red Keep’s tower' },
    ],
  },
  {
    id: 'petyr-baelish',
    name: 'Petyr Baelish',
    aliases: ['Littlefinger', 'Lord Protector of the Vale'],
    house: 'House Baelish',
    status: 'Executed at Winterfell by the sisters he tried to divide',
    culture: 'Fingerman',
    image: '/img/char-baelish.jpg',
    quote: 'Chaos isn’t a pit. Chaos is a ladder.',
    summary:
      'The lord of a few rocky fingers who rose on ledgers and lies to hold the realm’s purse, the Vale, and the threads of a war he started.',
    bio: [
      'Fostered at Riverrun, scarred by Brandon Stark for loving Catelyn Tully, Petyr Baelish learned young that he would never win with a sword — so he chose money, whispers, and other men’s ambitions. As Master of Coin he made the crown rich on paper and bankrupt in truth, while buying every clerk in the Red Keep.',
      'He poisoned Jon Arryn’s final weeks into a war, framed Tyrion for Joffrey’s death, saved Sansa from the wreck and caged her in the Vale, and traded marriages like coins. Every great catastrophe of the age has his fingerprints somewhere in the ledger.',
      'He died on his knees in Winterfell’s great hall, executed by the Stark children he had spent years teaching to mistrust one another — outplayed at last by three heirs of the woman he claimed to love.',
    ],
    facts: [
      { label: 'Holdings', value: 'The Fingers, Harrenhal, the Vale as Protector' },
      { label: 'Crimes', value: 'Jon Arryn’s death, the frame of Tyrion, the war’s first lie' },
      { label: 'Sigil', value: 'The mockingbird — chosen over his family’s Titan' },
      { label: 'End', value: 'Arya’s dagger, on Sansa’s sentence' },
    ],
  },
  {
    id: 'varys',
    name: 'Varys',
    aliases: ['The Spider', 'The Eunuch', 'Lord of Whisperers'],
    house: 'The Crown',
    status: 'Executed by dragonfire for treason',
    culture: 'Essosi, of Myr by way of Pentos',
    image: '/img/char-varys.jpg',
    quote: 'The storms come and go, the big fish eat the little fish, and I keep on paddling.',
    summary:
      'A slave boy sold to a sorcerer who became the realm’s master of whisperers — loyal to no king, only to the smallfolk kings never see.',
    bio: [
      'Born a slave in the Free Cities, mutilated for a blood-magic ritual and left to die, Varys survived by stealing, then by selling secrets — until he sat on the small council of the king whose family he may have spent decades undermining for the Targaryen restoration.',
      'His little birds heard everything in every castle in Westeros. He claims, and perhaps believes, that he serves the realm itself: that the game of thrones is a fever, and the people who die of it never chose to play.',
      'He survived Aerys, Robert, Joffrey, and Cersei, and fell at last to Daenerys — betrayed for plotting in the name of the same realm he swore he served. Power, he liked to say, resides where men believe it resides. In the end, the dragon did not believe in him.',
    ],
    facts: [
      { label: 'Network', value: 'The little birds — whisperers in every corner of the world' },
      { label: 'Loyalty', value: 'The realm. Always the realm, he says' },
      { label: 'Riddle', value: 'A king, a priest, and a rich man with a sellsword' },
      { label: 'End', value: 'Drogon’s fire, on the shore of Dragonstone' },
    ],
  },
  {
    id: 'tywin-lannister',
    name: 'Tywin Lannister',
    aliases: ['The Great Lion of the Rock', 'The Old Lion'],
    house: 'House Lannister',
    houseId: 'lannister',
    status: 'Slain by his son Tyrion, on the privy',
    culture: 'Westerman',
    image: '/img/char-tywin.jpg',
    quote: 'A lion does not concern himself with the opinion of sheep.',
    summary:
      'Hand to three kings and the true ruler of the realm for thirty years — the coldest, ablest, and most feared man in Westeros.',
    bio: [
      'Tywin rebuilt House Lannister from his weak father’s ruin and ruled the west, then the realm, by the simple principle that reputation is worth more than mercy. When the Reynes of Castamere defied him, he sealed their castle and diverted a river into it. The song remains; the Reynes do not.',
      'As Aerys’s Hand he ran the kingdom for twenty years while the king unravelled; as the power behind Joffrey and Tommen he won the War of the Five Kings without ever leading a charge — his weapons were ravens, debts, and the Red Wedding he signed for.',
      'His single blind spot was his children: the twins whose incest he refused to see, and the dwarf son he despised as the family’s shame. Tyrion’s crossbow found him where no army could. He died as he lived — unloved, unbowed, and utterly pragmatic about it.',
    ],
    facts: [
      { label: 'Offices', value: 'Hand of the King to Aerys II, Joffrey, and Tommen' },
      { label: 'Lesson', value: 'The Rains of Castamere — his house’s anthem' },
      { label: 'Master stroke', value: 'The Red Wedding, won with letters' },
      { label: 'End', value: 'A crossbow bolt from the son he scorned' },
    ],
  },
  {
    id: 'joffrey-baratheon',
    name: 'Joffrey Baratheon',
    aliases: ['The Boy King', 'Joffrey the Illborn'],
    house: 'House Baratheon · in truth, wholly Lannister',
    houseId: 'lannister',
    status: 'Poisoned at his own wedding feast',
    culture: 'Crownlander',
    image: '/img/char-joffrey.jpg',
    quote: 'I am the king! A king can do as he likes!',
    summary:
      'The golden prince who was secretly the fruit of incest, and whose four-year reign of petulance and cruelty set the realm alight.',
    bio: [
      'Eldest “son” of Robert Baratheon and Cersei Lannister — in truth born of the queen and her twin — Joffrey inherited Robert’s throne, Cersei’s amorality, and neither parent’s redeeming quality. His coronation present to the realm was Ned Stark’s head, against every counsel, and the North never forgave it.',
      'He delighted in the pain of the helpless: Sansa beaten at his word, singers losing fingers, smallfolk shot for begging. At the Blackwater he commanded from safety and claimed the victory others bought.',
      'At his own wedding feast, the Strangler — a poison of the Reach’s thorniest rose — turned his triumph purple. He died clawing at his throat in his mother’s arms, thirteen years old and universally unmourned.',
    ],
    facts: [
      { label: 'True parents', value: 'Cersei and Jaime Lannister' },
      { label: 'Reign', value: '298–300 AC' },
      { label: 'Sword', value: 'Widow’s Wail — never blooded' },
      { label: 'End', value: 'The Strangler, at the Purple Wedding' },
    ],
  },
  {
    id: 'stannis-baratheon',
    name: 'Stannis Baratheon',
    aliases: ['The Iron King', 'The King of the Narrow Sea', 'The Mannis'],
    house: 'House Baratheon',
    houseId: 'baratheon',
    status: 'Fell in the snows before Winterfell',
    culture: 'Stormlander',
    image: '/img/char-stannis.jpg',
    quote: 'I never asked for this crown. Gold is cold and heavy on the head, but so long as I am the king, I have a duty.',
    summary:
      'The middle Baratheon brother — iron, just, unloved — who ground himself to ruin in the conviction that the realm owed him its crown.',
    bio: [
      'Stannis held Storm’s End through a year of starvation, smashed the Iron Fleet at Fair Isle, and never once smiled at a jest he didn’t find funny. When Ned’s letter named him Robert’s heir, he took the claim with the same iron he took everything: duty, not desire.',
      'He bent to the red woman’s faith for power and paid for it in shadows — his brother dead by sorcery, his fleet in green flame at the Blackwater, his soul by degrees. The North he marched to save answered his justice with suspicion, and the snow answered his army with winter.',
      'Whatever else history says of him, it records this: when the realm needed a king at the Wall, only Stannis came. The Iron King was the wrong man for the throne and the right man for the worst hour.',
    ],
    facts: [
      { label: 'Sieges held', value: 'Storm’s End, a full year against the Tyrell host' },
      { label: 'Counselors', value: 'Melisandre of Asshai; Davos Seaworth' },
      { label: 'Grammar', value: '“Fewer.” He corrected it at the Wall' },
      { label: 'End', value: 'The snow before Winterfell, sword in hand' },
    ],
  },
  {
    id: 'melisandre',
    name: 'Melisandre',
    aliases: ['The Red Woman', 'The Red Witch', 'The Lady of Light'],
    house: 'The faith of R’hllor',
    status: 'Removed her ruby at dawn after the Long Night, and walked into the snow',
    culture: 'Asshai’i',
    image: '/img/char-melisandre.jpg',
    quote: 'The night is dark and full of terrors.',
    summary:
      'The red priestess who saw the Great War coming in her flames and spent centuries preparing for it — right about the enemy, wrong about almost everything else.',
    bio: [
      'Sold to the red temple as a child, Melisandre rose to become R’hllor’s most formidable servant in the west: shadowbinder, flame-reader, and kingmaker. She came to Stannis Baratheon because her fires named him Azor Ahai — and the fires, she would learn, are always true and rarely literal.',
      'She birthed a shadow that slew Renly, burned the unbelieving, bled kings from Gendry’s leeches, and raised Jon Snow from the dead when her faith had all but failed. Every instrument she played broke in her hand; the music, it turned out, was still true.',
      'At Winterfell she lit the Dothraki’s arakhs, set the trench aflame, and pointed Arya Stark at the Night King. Then, her war finally won, she took off the ruby that held her centuries at bay and let the dawn have her.',
    ],
    facts: [
      { label: 'Powers', value: 'Flame-sight, shadow-binding, the last kiss' },
      { label: 'The ruby', value: 'The glamor at her throat — her true age lies beneath' },
      { label: 'Prophecy', value: '“I will return one last time” — and did' },
      { label: 'End', value: 'Dawn, beyond Winterfell’s walls' },
    ],
  },
  {
    id: 'davos-seaworth',
    name: 'Davos Seaworth',
    aliases: ['The Onion Knight', 'Davos Shorthand', 'The Onion Lord'],
    house: 'House Seaworth',
    status: 'Master of Ships under the new realm',
    culture: 'Flea Bottom, King’s Landing',
    image: '/img/char-davos.jpg',
    quote: 'If nothing else, a sea voyage teaches a man the value of a quiet life.',
    summary:
      'A smuggler knighted for onions, whose stubbed fingers remind him what he owes Stannis — and whose conscience is the best compass in the chronicle.',
    bio: [
      'Davos ran the Redwyne blockade with a cargo of onions and salt fish and saved Storm’s End from starvation. Stannis paid him in both currencies: knighthood for the deed, the loss of his fingertips for the life of smuggling. Davos calls the stubs his luck — he has been lucky ever since.',
      'He is the rarest creature in the chronicle: an honest man at court. He told Stannis truths the red woman would not, pulled survivors from the green fire of the Blackwater, freed Gendry from the leech table, and smuggled Edric Storm beyond the shadowbinder’s reach.',
      'From Flea Bottom to Hand of the King — Davos Seaworth proves the game’s one consolation: sometimes the man who never wanted to play is the one worth following.',
    ],
    facts: [
      { label: 'Knighted for', value: 'Onions — the siege of Storm’s End' },
      { label: 'The price', value: 'Four fingertips, worn as a pouch of bones' },
      { label: 'Sons', value: 'Seven; four lost to the Blackwater’s fire' },
      { label: 'End', value: 'Master of Ships — the quiet life, at last' },
    ],
  },
  {
    id: 'theon-greyjoy',
    name: 'Theon Greyjoy',
    aliases: ['Reek', 'The Prince of Winterfell', 'The Turncloak'],
    house: 'House Greyjoy · ward of House Stark',
    houseId: 'greyjoy',
    status: 'Died defending Bran Stark in the godswood',
    culture: 'Ironborn, raised in the North',
    image: '/img/char-theon.jpg',
    quote: 'You have to know your name to be yourself.',
    summary:
      'The hostage prince who tried to buy his father’s love with Winterfell, and paid for it with everything he was — before buying himself back in the godswood.',
    bio: [
      'Taken as a child-ward after his father’s failed rebellion, Theon grew up among the Starks — half brother, half prisoner, never either. When the war came he sailed home to win a father’s approval, took Winterfell with thirty men, and held it long enough to destroy himself.',
      'Ramsay Bolton unmade him piece by piece in the Dreadfort until only Reek remained — a creature who slept with the dogs and forgot his own name. The name, in the end, was the point: rescued by his sister, he clawed back to Theon one remembered piece at a time.',
      'He died the death he had earned the right to choose: alone, spear in hand, charging the Night King to buy Bran Stark a heartbeat. Theon Greyjoy — ironborn, and at the very last, Stark.',
    ],
    facts: [
      { label: 'Betrayal', value: 'The taking of Winterfell, 299 AC' },
      { label: 'The Dreadfort', value: 'What Ramsay left of him called itself Reek' },
      { label: 'Redemption', value: 'Rescuing Yara; the charge in the godswood' },
      { label: 'Buried', value: 'As a Stark, in Winterfell’s crypts' },
    ],
  },
  {
    id: 'ramsay-bolton',
    name: 'Ramsay Bolton',
    aliases: ['Ramsay Snow', 'The Bastard of Bolton', 'The Bastard of the Dreadfort'],
    house: 'House Bolton',
    houseId: 'bolton',
    status: 'Devoured by his own hounds at Winterfell',
    culture: 'Northman',
    image: '/img/char-ramsay.jpg',
    quote: 'If you think this has a happy ending, you haven’t been paying attention.',
    summary:
      'The flayed man’s flayer — the cruelest player of the game, who treated the North as his hunting preserve until the pack came home.',
    bio: [
      'Born a miller’s bastard and raised by a mother who told him his blood was lord’s blood, Ramsay Snow became the Dreadfort’s id: he hunted women with hounds for sport, flayed his prisoners, and called cruelty a tradition of his house.',
      'Legitimized for his usefulness, he took Winterfell through Theon’s trust, broke the ironborn at Moat Cailin with promises he never kept, and murdered his father, his stepmother, and her newborn son to secure the North. His wars were rape and terror; his only talent, the knife.',
      'At the Battle of the Bastards he lost the field, the castle, and the name. Sansa Stark fed him to his own starved hounds — the hounds, he had always boasted, never turned on their master. They had simply never been hungry enough.',
    ],
    facts: [
      { label: 'Sigil adopted', value: 'The flayed man of the Dreadfort' },
      { label: 'Weapon of choice', value: 'The skinning knife; starvation; fear' },
      { label: 'Murdered', value: 'Roose Bolton, Walda, and his infant brother' },
      { label: 'End', value: 'His own hounds, in the kennels of Winterfell' },
    ],
  },
  {
    id: 'robert-baratheon',
    name: 'Robert Baratheon',
    aliases: ['The Usurper', 'The Demon of the Trident'],
    house: 'House Baratheon',
    houseId: 'baratheon',
    status: 'Gored by a boar on a hunt, 298 AC',
    culture: 'Stormlander',
    image: '/img/char-robert.jpg',
    quote: 'Gods, I was strong then.',
    summary:
      'The warhammer king who won a realm for love of Lyanna Stark, and lost it slowly to wine, wenches, and the wife he never wanted.',
    bio: [
      'At eighteen Robert Baratheon was the most feared warrior in Westeros — a laughing giant with a spiked warhammer whom friend and foe loved or feared. When the Mad King demanded his head and Rhaegar took his betrothed, he raised the stormlands, won three battles in a day at Summerhall, and killed the Dragon Prince himself at the Trident.',
      'The throne he won for Lyanna’s sake was empty without her. Fifteen years of drink, debt, and Cersei Lannister’s contempt turned the Demon of the Trident into a king who ruled nothing but the hunt — while his brothers and his wife’s family carved the realm around him.',
      'A boar, a cupbearer, and a skin of strongwine finished what Rhaegar could not. He died naming Ned Stark his regent, telling him to be a father to his children — none of whom were his.',
    ],
    facts: [
      { label: 'Weapon', value: 'A warhammer so heavy Ned could barely lift it' },
      { label: 'Love', value: 'Lyanna Stark — the realm bled for it' },
      { label: 'Trueborn heirs', value: 'None; his children were Lannisters' },
      { label: 'End', value: 'The kingswood, and Lancel’s strongwine' },
    ],
  },
  {
    id: 'oberyn-martell',
    name: 'Oberyn Martell',
    aliases: ['The Red Viper of Dorne'],
    house: 'House Martell',
    houseId: 'martell',
    status: 'Slain by Ser Gregor Clegane, his confession won and his skull crushed',
    culture: 'Dornish',
    image: '/img/char-oberyn.jpg',
    quote: 'You raped her. You murdered her. You killed her children.',
    summary:
      'The Red Viper — scholar, poisoner, lover, and the most dangerous man ever to come to King’s Landing on a quest for justice.',
    bio: [
      'Second son of Sunspear, Oberyn studied at the Citadel, founded his own sellsword company, loved men and women across two continents, and fathered the Sand Snakes — all while nursing one fixed star: vengeance for his sister Elia, murdered with her children in the Sack of King’s Landing.',
      'He came to the capital for Tyrion’s trial and volunteered as the dwarf’s champion against the Mountain himself — Gregor Clegane, the man who had killed Elia. He fought with a spear, a mithril-light style, and a poisoned blade, and he won: the Mountain was down, dying, confessing.',
      'But Oberyn needed the words more than the victory. He stepped too close to hear the confession complete — and the Mountain’s hands found his skull. The Red Viper died with Elia’s name in the air and his poison already doing its work on her killer.',
    ],
    facts: [
      { label: 'Weapon', value: 'The spear — and poisons the Citadel denies teaching' },
      { label: 'Children', value: 'The eight Sand Snakes' },
      { label: 'Quest', value: 'Justice for Elia and her children' },
      { label: 'End', value: 'Victorious, and dead, in the same moment' },
    ],
  },
  {
    id: 'margaery-tyrell',
    name: 'Margaery Tyrell',
    aliases: ['The Little Rose', 'The Maiden Queen', 'Thrice Queen'],
    house: 'House Tyrell',
    houseId: 'tyrell',
    status: 'Perished in the Great Sept’s wildfire',
    culture: 'Reachwoman',
    image: '/img/char-margaery.jpg',
    quote: 'I want to be the queen.',
    summary:
      'Three times a bride of kings, never once defeated at court — the Reach’s most graceful player, undone at last by wildfire.',
    bio: [
      'Raised by Olenna the Queen of Thorns, Margaery learned that a queen’s weapons are grace, generosity, and timing. She married Renly for his claim, Joffrey for his crown, and Tommen for his kindness — and each time made the realm love her more than the king.',
      'She fed the poor from her own purse, remembered every smallfolk name, and gently pried Tommen loose from Cersei’s grip — the one move the lioness could not forgive. The Faith’s arrest, trumped by Cersei’s sparrows, became the fuse of the queen mother’s last madness.',
      'She died with her father, her brother, and the High Sparrow in the green light of the Great Sept — the one player in the game who might have won it without a single corpse, consumed by the wildest fire of all.',
    ],
    facts: [
      { label: 'Marriages', value: 'Renly Baratheon, Joffrey Baratheon, Tommen Baratheon' },
      { label: 'Power base', value: 'The love of the smallfolk of King’s Landing' },
      { label: 'Rival', value: 'Cersei Lannister — who outlasted her by one atrocity' },
      { label: 'End', value: 'The Great Sept of Baelor, 303 AC' },
    ],
  },
  {
    id: 'khal-drogo',
    name: 'Khal Drogo',
    aliases: ['The Great Khal', 'Blood of My Blood'],
    house: 'The Dothraki khalasar',
    status: 'Died of a festered wound; his pyre hatched the dragons',
    culture: 'Dothraki',
    image: '/img/char-drogo.jpg',
    quote: 'A khal who cannot ride is no khal.',
    summary:
      'The undefeated horselord who bought a dragon’s daughter for her army, and gave her instead a sea of grass and the name of khaleesi.',
    bio: [
      'Forty thousand screamers rode at Drogo’s back, and no khalasar had ever beaten his. Illyrio Mopatis sold him a silver-haired bride for the promise of his horde — and the horselord, who had never wanted the Iron Throne, came slowly to want it for the son the crones promised.',
      'When the assassins came for Daenerys in the markets of Vaes Dothrak, Drogo swore the oath he had never sworn: he would cross the poison water on wooden horses and take the iron chair for his khaleesi. He took a wound in a duel over slaves instead, and a maegi’s price for healing it.',
      'The wound festered; the blood magic hollowed him; Daenerys smothered what remained. On his funeral pyre, with the maegi burning at its heart and three stone eggs in the flames, the stallion who mounts the world became the father of dragons.',
    ],
    facts: [
      { label: 'Record', value: 'Never defeated in battle; his braid hung with bells' },
      { label: 'Khalasar', value: 'Forty thousand riders of the Dothraki sea' },
      { label: 'The oath', value: 'To cross the narrow sea for his wife and unborn son' },
      { label: 'Legacy', value: 'His pyre woke three dragons from stone' },
    ],
  },
  {
    id: 'jorah-mormont',
    name: 'Jorah Mormont',
    aliases: ['The Andal', 'Bear', 'Jorah the Expl'],
    house: 'House Mormont',
    status: 'Died defending Daenerys at the Battle of Winterfell',
    culture: 'Northman, of Bear Island',
    image: '/img/char-jorah.jpg',
    quote: 'The common people pray for rain, healthy children, and a summer that never ends.',
    summary:
      'The exiled bear of Bear Island who sold poachers, lost his home, and spent the rest of his life at the right hand of his queen.',
    bio: [
      'Lord of Bear Island, Jorah bankrupted himself trying to keep a wife who wanted more than fish and fog, sold captured poachers into slavery to pay her debts, and fled Ned Stark’s sword into exile — the oldest shame a northern lord can carry.',
      'Sent to spy on the last Targaryens, he fell instead into lifelong devotion to Daenerys: her sword, her counselor, her conscience about the girl she had been and the queen she might become. Betrayal confessed too late, exile again, greyscale, the fighting pits — nothing cured him of her.',
      'Cured by Sam Tarly and pardoned by his queen, he stood before her at Winterfell when the dead came, and died as he had lived: between Daenerys and the darkness. The bear deserved a better island and a worse fate; he got neither, and would not have traded.',
    ],
    facts: [
      { label: 'Birthright', value: 'Longclaw — given up to Jon Snow in exile' },
      { label: 'Exile', value: 'For selling poachers to Tyroshi slavers' },
      { label: 'Affliction', value: 'Greyscale — cured at the Citadel' },
      { label: 'End', value: 'In his queen’s defense, at the Long Night’s end' },
    ],
  },
  {
    id: 'mance-rayder',
    name: 'Mance Rayder',
    aliases: ['The King-Beyond-the-Wall', 'Abel the Bard'],
    house: 'The Free Folk',
    status: 'Burned at the Wall — or so the realm believes',
    culture: 'Free Folk, once of the Night’s Watch',
    image: '/img/char-mance.jpg',
    quote: 'I want my people free. That is all I have ever wanted.',
    summary:
      'A sworn brother who deserted for a red-slashed cloak, united ninety warring tribes into one host, and led them out of the way of the dead.',
    bio: [
      'A wildling child raised at the Shadow Tower, Mance wore the black for years before a shadowcat and a wildling woman’s needle taught him what his vows forbade: he was free to be more than the Watch allowed. He went back over the Wall and became, tribe by tribe, song by song, the King-Beyond-the-Wall.',
      'He spent a decade doing what no one had done — uniting the free folk, giants, cave dwellers, and Hornfoot men into a single migration. Not for conquest, as the crows believed, but for refuge: he had seen what was stirring in the cold, and he meant to put the Wall between it and his people.',
      'Broken at the Wall by Stannis’s knights, condemned to the fire, and — by the red woman’s glamor — exchanged for another man’s death. He went south into Winterfell as Abel the bard to steal back “Arya”, and his songs are still finding their way out of the Dreadfort.',
    ],
    facts: [
      { label: 'Host', value: 'Ninety thousand free folk, giants and mammoths' },
      { label: 'Once', value: 'A ranger of the Night’s Watch' },
      { label: 'The glamor', value: 'Rattleshirt burned in his place' },
      { label: 'Weapon', value: 'A lute, when a sword would not serve' },
    ],
  },
  {
    id: 'ygritte',
    name: 'Ygritte',
    aliases: ['The Wildling', 'Kissed by Fire'],
    house: 'The Free Folk',
    status: 'Died in the battle for Castle Black, in Jon Snow’s arms',
    culture: 'Free Folk',
    image: '/img/char-ygritte.jpg',
    quote: 'You know nothing, Jon Snow.',
    summary:
      'The spearwife kissed by fire who taught a crow to live, loved him truly, and never forgave the cage he went back to.',
    bio: [
      'Ygritte was a spearwife of the free folk, red-haired and sharp-tongued, whom Jon Snow could not bring himself to kill in the Frostfangs. She repaid his mercy by saving his life before Mance, by teaching him the difference between a vow and a life, and by loving him with the directness of the free folk: you stole nothing you could not keep.',
      'She knew what he was long before he admitted it to himself — and loved him anyway, south of the Wall, in the cave with the waterfall where for a while the war did not exist.',
      'When the wildlings broke against Castle Black, an arrow found her in the yard. She died asking Jon if the cave was real, reminding him one last time that he knew nothing — the truest words in the whole chronicle, spoken to the one man who needed them most.',
    ],
    facts: [
      { label: 'Hair', value: 'Kissed by fire — the luck of the free folk' },
      { label: 'Skill', value: 'The bow; few south of the Wall shot truer' },
      { label: 'The cave', value: 'The one place both of them were free' },
      { label: 'End', value: 'Castle Black, 299 AC' },
    ],
  },
  {
    id: 'rhaegar-targaryen',
    name: 'Rhaegar Targaryen',
    aliases: ['The Last Dragon', 'The Silver Prince', 'The Prince of Dragonstone'],
    house: 'House Targaryen',
    houseId: 'targaryen',
    status: 'Slain by Robert Baratheon at the Trident, 283 AC',
    culture: 'Valyrian',
    image: '/img/char-rhaegar.jpg',
    quote: 'The dragon must have three heads.',
    summary:
      'The bookish prince who became the realm’s perfect knight, read a prophecy that consumed him, and set the dynasty on fire to fulfill it.',
    bio: [
      'Heir to the Mad King, Rhaegar was a child who read until he wept — until the day he read something in a scroll, went to the yard, and asked for a sword. He became the finest tourney knight of his generation: melancholy, beautiful, beloved, and haunted by the prince that was promised.',
      'At Harrenhal he crowned Lyanna Stark queen of love and beauty before the whole realm, passing over his own wife. A year later they vanished together — abduction, the Starks said; elopement, the truth proved. The war that followed killed him at the Trident, where his rubies scattered into the water and his dynasty died with him.',
      'The secret he left at the Tower of Joy — a son, legitimate, hidden as Ned Stark’s bastard — is the hinge of the whole chronicle. Whatever else Rhaegar got wrong, the song of ice and fire was his.',
    ],
    facts: [
      { label: 'Weapon', value: 'Sword and harp — peerless at both' },
      { label: 'Obsession', value: 'The prince that was promised; the three heads of the dragon' },
      { label: 'The crime', value: 'Harrenhal, and the Tower of Joy' },
      { label: 'Legacy', value: 'Aegon VI — the boy the realm knows as Jon Snow' },
    ],
  },
]

export const allCharacters: Character[] = [...characters, ...extraCharacters]

// ── Additional great houses ───────────────────────────────────────────────────

export const extraHouses: House[] = [
  {
    id: 'tully',
    name: 'House Tully',
    words: 'Family, Duty, Honor',
    sigil: 'A leaping silver trout on red and blue',
    seat: 'Riverrun',
    region: 'The Riverlands',
    image: '/img/house-tully.jpg',
    colors: 'Silver on red and blue',
    summary:
      'Lords of the Trident, raised to overlords by Aegon for being first to join him — whose three words, taken in order, contain the seeds of their tragedy.',
    history: [
      'Riverrun stands where the Red Fork meets the Tumblestone, and House Tully has held the rivers for a thousand years — never kings themselves, always the hinge on which the realm’s wars turned. Aegon raised them to Lords Paramount for joining him against the ironborn.',
      'The words are a ladder the family keeps falling off: family, duty, honor. Catelyn chose family and broke the war; Lysa chose family and broke the Vale; Edmure chose honor and lost Riverrun; the Blackfish chose all three and died inside his own castle rather than yield it.',
      'The house survived the Red Wedding in chains and exile, and was restored by the Young Wolf’s sister’s war — a trout, it turns out, is a difficult fish to keep.',
    ],
    tree: [
      {
        name: 'Hoster Tully',
        note: 'Lord of Riverrun',
        children: [
          { name: 'Catelyn Tully', note: 'm. Eddard Stark' },
          {
            name: 'Lysa Tully',
            note: 'm. Jon Arryn',
            children: [{ name: 'Robert “Sweetrobin” Arryn', note: 'Lord of the Eyrie' }],
          },
          { name: 'Edmure Tully', note: 'Lord of Riverrun — m. Roslin Frey' },
        ],
      },
      { name: 'Brynden Tully', note: 'The Blackfish — Hoster’s brother' },
    ],
    members: [
      { name: 'Catelyn Stark', role: 'Lady of Winterfell' },
      { name: 'Lysa Arryn', role: 'Lady of the Vale' },
      { name: 'Edmure Tully', role: 'Lord of Riverrun' },
      { name: 'Brynden Tully', role: 'The Blackfish; Warden of the Southern Marches' },
    ],
  },
  {
    id: 'arryn',
    name: 'House Arryn',
    words: 'As High as Honor',
    sigil: 'A white falcon and moon on sky blue',
    seat: 'The Eyrie',
    region: 'The Vale',
    image: '/img/house-arryn.jpg',
    colors: 'White on sky blue',
    summary:
      'The oldest Andal line in Westeros, kings of Mountain and Vale before the dragons, ruling from a castle no army has ever taken.',
    history: [
      'The Arryns came over with the Andals and made themselves kings of the Vale, marrying the heights they conquered: the Eyrie perches above the clouds, reachable only by the Bloody Gate and three waycastles. No enemy has ever breached it — winter does their fighting for them.',
      'Jon Arryn fostered both Robert Baratheon and Ned Stark, and when the Mad King demanded his wards’ heads, he raised his banners instead — the rebellion’s true first sword. He served as Robert’s Hand for fifteen years of uneasy peace.',
      'His death — poisoned, the archive records, by his own wife at Littlefinger’s whisper — lit the fuse of the War of the Five Kings. The Vale he kept out of that war, guided by Lysa and then by Littlefinger, became the war’s final arbiter: the Knights of the Vale arrived at Winterfell at the last light.',
    ],
    tree: [
      {
        name: 'Jon Arryn',
        note: 'Hand of the King — m. Lysa Tully',
        children: [{ name: 'Robert “Sweetrobin” Arryn', note: 'The frail young lord' }],
      },
      { name: 'Alys Arryn', note: 'Jon’s sister' },
      { name: 'Harrold Hardyng', note: '“Harry the Heir” — the heir presumptive' },
    ],
    members: [
      { name: 'Jon Arryn', role: 'Hand of the King; the rebellion’s architect' },
      { name: 'Lysa Arryn', role: 'Lady of the Vale' },
      { name: 'Robert Arryn', role: 'Lord of the Eyrie' },
      { name: 'Yohn Royce', role: 'Bronze Yohn, greatest of the Vale lords' },
    ],
  },
  {
    id: 'martell',
    name: 'House Martell',
    words: 'Unbowed, Unbent, Unbroken',
    sigil: 'A gold spear piercing a red sun',
    seat: 'Sunspear',
    region: 'Dorne',
    image: '/img/house-martell.jpg',
    colors: 'Gold on orange',
    summary:
      'The only house Aegon never conquered — the Dornish simply vanished into the sands and waited out the dragons, then joined the realm by marriage on their own terms.',
    history: [
      'Dorne is different: the Rhoynar came in ten thousand ships and married their way into power, bringing their own laws — the eldest child inherits, woman or man. When Aegon’s sisters burned Dornish castles, the Dornish let them hold empty sand, and when Meraxes died at Hellholt with a bolt through her eye, the Conqueror learned to leave Dorne alone.',
      'The Dornish joined the Seven Kingdoms two hundred years later the way they prefer to do everything: by marriage, not conquest. Elia Martell’s marriage to Rhaegar Targaryen and her murder in the Sack bound Dorne’s fate to the dragon’s war — and Oberyn’s death bound it to vengeance.',
      'Unbowed, unbent, unbroken: of all the great houses’ words, only the Martells’ are simply a record of fact.',
    ],
    tree: [
      {
        name: 'Doran Martell',
        note: 'Prince of Dorne',
        children: [
          { name: 'Arianne Martell', note: 'Heir to Sunspear' },
          { name: 'Quentyn Martell', note: 'Sent to court the dragon queen' },
          { name: 'Trystane Martell', note: 'Betrothed to Myrcella' },
        ],
      },
      { name: 'Oberyn Martell', note: 'The Red Viper — father of the Sand Snakes' },
      { name: 'Elia Martell', note: 'm. Rhaegar Targaryen; slain in the Sack' },
    ],
    members: [
      { name: 'Doran Martell', role: 'Prince of Dorne; the grass that hides the viper' },
      { name: 'Oberyn Martell', role: 'The Red Viper' },
      { name: 'Elia Martell', role: 'Princess of Dragonstone' },
      { name: 'The Sand Snakes', role: 'Obara, Nymeria, Tyene and their sisters' },
    ],
  },
  {
    id: 'bolton',
    name: 'House Bolton',
    words: 'Our Blades Are Sharp',
    sigil: 'A flayed man, red on pink',
    seat: 'The Dreadfort',
    region: 'The North',
    image: '/img/house-bolton.jpg',
    colors: 'Red on pink',
    summary:
      'The second house of the North, six thousand years of red kings and flaying — who finally took Winterfell through treachery and held it for less than a year.',
    history: [
      'Before the Starks made them kneel, the Red Kings of the Dreadfort wore the skins of their enemies as cloaks and flayed Stark princes for their halls. Our blades are sharp — the only house words that are a threat rather than a promise.',
      'Roose Bolton served Robb Stark as his coldest commander, then read the war’s turning and sold his king at the Red Wedding — personally driving the knife with “the Lannisters send their regards.” The reward was the North itself: Warden of the North, his bastard legitimized, Winterfell in Bolton hands.',
      'The North remembered. Ramsay’s savagery spent the loyalty Roose’s cunning had bought, and at the Battle of the Bastards the Dreadfort’s line ended in its own kennels. The flayed man hangs in the archive as a warning: cruelty is a strategy that only ever borrows time.',
    ],
    tree: [
      {
        name: 'Roose Bolton',
        note: 'Lord of the Dreadfort',
        children: [
          { name: 'Domeric Bolton', note: 'Trueborn heir — died of a “bad belly”' },
          { name: 'Ramsay Snow', note: 'Bastard; legitimized as Ramsay Bolton' },
        ],
      },
      { name: 'Walda Bolton', note: 'Roose’s wife — murdered with her newborn son' },
    ],
    members: [
      { name: 'Roose Bolton', role: 'Warden of the North, briefly' },
      { name: 'Ramsay Bolton', role: 'The Bastard of the Dreadfort' },
      { name: 'Domeric Bolton', role: 'The heir the North never had' },
    ],
  },
]

export const allHouses: House[] = [...houses, ...extraHouses]

// ── Creatures, beasts & beings ────────────────────────────────────────────────

export interface Creature {
  id: string
  name: string
  kind: 'Dragon' | 'Direwolf' | 'Race & Beings' | 'Legend'
  image?: string
  status: string
  quote?: string
  summary: string
  body: string[]
  facts: { label: string; value: string }[]
}

export const creatures: Creature[] = [
  // — Dragons —
  {
    id: 'dragons',
    image: '/img/creature-dragons.jpg',
    name: 'Dragons',
    kind: 'Dragon',
    status: 'Back in the world — for now',
    quote: 'Fire made flesh, and flesh is power.',
    summary:
      'Fire made flesh. The dragonlords of Valyria rode them to rule the world; when the last one died in 153 AC, magic began dying out of the world with it.',
    body: [
      'Dragons are fire made flesh, the maesters say — and flesh is power. They never stop growing, they are bonded to the blood of old Valyria, and a dragon accepts only one rider in its lifetime, though a rider may outlive several dragons. Their breath melts stone and steel; their bones are black iron.',
      'Valyria tamed them five thousand years ago in the Fourteen Flames and built the Freehold on their backs. The Doom left the Targaryens the world’s last dragonlords, and their conquest of Westeros was settled in a single burning afternoon on the Field of Fire.',
      'When the last stunted dragon died in 153 AC, the world went colder and duller — summers shortened, magic faded, the alchemists’ spells failed. Then, in the Dothraki sea in 299 AC, three stone eggs hatched in a funeral pyre, and everything changed back.',
    ],
    facts: [
      { label: 'Origin', value: 'The Fourteen Flames of Valyria' },
      { label: 'Bond', value: 'One rider per dragon, until death' },
      { label: 'Blood', value: 'Fourteen flames of Valyrian stock — black bones' },
      { label: 'Weakness', value: 'The eye; and the long sleep of stone eggs' },
    ],
  },
  {
    id: 'drogon',
    name: 'Drogon',
    kind: 'Dragon',
    image: '/img/creature-drogon.jpg',
    status: 'Alive — last seen flying east with his mother’s body',
    summary:
      'The black. Largest, wildest, and first to fly of Daenerys’s three — named for Khal Drogo, and the only one who never accepted chains.',
    body: [
      'Black as night and red as blood, Drogon was the dragon his mother rode and the one the world learned to fear. He burned the slavers’ envoy in Astapor, disappeared into the Dothraki sea rather than suffer Meereen’s pits, and returned at Daznak’s Pit to turn the arena into an oven.',
      'He was the dragon of the wights’ hunt, of the iron fleet’s burning, of King’s Landing’s last day — the instrument of every fire Daenerys ever set. When she died on the dagger in the throne room, it was Drogon who came, and Drogon who melted the Iron Throne itself to slag, as if he understood exactly what had killed her.',
      'He gathered her body and flew east, over the Smoking Sea. The realm reports him alive. The archive notes that the world’s last dragon is also the only one no one ever owned.',
    ],
    facts: [
      { label: 'Named for', value: 'Khal Drogo' },
      { label: 'Scale & flame', value: 'Black and red; flame red-black' },
      { label: 'Rider', value: 'Daenerys Targaryen — the only one he took' },
      { label: 'Greatest act', value: 'Melting the Iron Throne' },
    ],
  },
  {
    id: 'rhaegal',
    name: 'Rhaegal',
    kind: 'Dragon',
    image: '/img/creature-rhaegal.jpg',
    status: 'Fell to a scorpion bolt off Dragonstone',
    summary:
      'The green. Named for Rhaegar, ridden in the end by Rhaegar’s own hidden son — the quiet symmetry the archive cannot resist noting.',
    body: [
      'Bronze and green, Rhaegal was the middle egg and the middle temperament — fiercer than Viserion, gentler than Drogon. He endured Meereen’s pit, broke free at the city’s siege, and flew north to the war against the dead.',
      'At the Long Night he fought his own brother in the storm — the ice-thing that had been Viserion — and was wounded and saved by winter’s end. He healed; he flew; he let Jon Snow on his back, the son of the man he was named for.',
      'Rested and unwary off Dragonstone, he took three scorpion bolts from Euron Greyjoy’s hidden fleet and died in the sea — the first dragon to die of a weapon since Meraxes fell at Hellholt.',
    ],
    facts: [
      { label: 'Named for', value: 'Rhaegar Targaryen' },
      { label: 'Scale', value: 'Green and bronze' },
      { label: 'Rider', value: 'Jon Snow — Aegon VI, his namesake’s son' },
      { label: 'End', value: 'The scorpions of the Silence, 305 AC' },
    ],
  },
  {
    id: 'viserion',
    name: 'Viserion',
    kind: 'Dragon',
    image: '/img/creature-viserion.jpg',
    status: 'Slain by the Night King; raised in ice; destroyed with him',
    summary:
      'The cream-and-gold. Named for Daenerys’s cruel brother, gentlest of the three — and the one the enemy took.',
    body: [
      'Viserion was cream and gold, his flame pale gold shot with red and orange, his disposition the mildest of the three. He suffered the pit of Meereen longest and emerged into the war beyond the Wall.',
      'At the wight hunt beyond the Wall, the Night King threw an ice javelin that no living hand should have been able to throw, and Viserion fell burning into the frozen lake. What walked out of that water wore his shape and breathed blue fire, and it was his stolen breath that brought down the Wall at Eastwatch.',
      'The Long Night ended when the Night King ended; the ice dragon died with its master. The archive records him under both kinds — dragon, and the greatest wight that ever was.',
    ],
    facts: [
      { label: 'Named for', value: 'Viserys Targaryen' },
      { label: 'Scale', value: 'Cream and gold' },
      { label: 'Taken', value: 'Beyond the Wall, by the Night King’s spear' },
      { label: 'His fire', value: 'Blue — the breath that broke the Wall' },
    ],
  },
  {
    id: 'balerion',
    name: 'Balerion, the Black Dread',
    kind: 'Dragon',
    image: '/img/creature-balerion.jpg',
    status: 'Died of old age, 94 AC — his skull hangs in the Red Keep',
    summary:
      'The last living creature that had seen Valyria before the Doom. His teeth were long as swords; his shadow swallowed towns.',
    body: [
      'Born in Valyria before the Doom, Balerion was the eldest and greatest of the Conqueror’s three — a dragon so vast his shadow engulfed whole towns when he passed overhead, with teeth like bastard swords and jaws that could swallow an aurochs whole.',
      'He carried Aegon through the Conquest, melted the swords of six kingdoms into the Iron Throne, and burned Harrenhal until its towers ran like candles — the curse of melted stone the castle still wears. When the Conquest ended he kept growing: kings rode him, then princes, then no one dared.',
      'He died at last of old age, two hundred years old, the last living memory of Valyria in the world. His skull, three feet across at the brow, hung in the throne room until Robert’s reign — the realm’s reminder that everything the Targaryens were, they were because of him.',
    ],
    facts: [
      { label: 'Born', value: 'Valyria, before the Doom' },
      { label: 'Riders', value: 'Aegon the Conqueror; Maegor; Viserys I' },
      { label: 'Deeds', value: 'The Field of Fire; the melting of Harrenhal' },
      { label: 'The skull', value: 'Kept in the Red Keep’s cellars' },
    ],
  },
  {
    id: 'vhagar',
    image: '/img/creature-vhagar.jpg',
    name: 'Vhagar',
    kind: 'Dragon',
    status: 'Died in the Dance of the Dragons, 130 AC',
    summary:
      'Queen Visenya’s mount and the last of the Conquest’s three — by the Dance she was a mountain with wings, and it took the boldest suicide in the war to kill her.',
    body: [
      'Vhagar hatched on Dragonstone for Visenya Targaryen and outlived her mistress by eighty years. By the Dance of the Dragons she was the oldest, largest living thing in the world — a dragon that had fought in the Field of Fire itself.',
      'She burned fleets in the Stepstones and armies in the riverlands. Her end came at the Gods Eye, when Prince Daemon Targaryen drove his dragon Caraxes into her in a falling embrace and leapt between them at the last instant, Dark Sister in hand.',
      'Both dragons struck the lake dead. Daemon’s body was never found. With Vhagar died the last witness of the Conquest, and the Dance had no more giants.',
    ],
    facts: [
      { label: 'First rider', value: 'Queen Visenya Targaryen' },
      { label: 'Fought at', value: 'The Field of Fire; the Stepstones; the Gods Eye' },
      { label: 'End', value: 'Daemon Targaryen’s leap — the Fall over the Gods Eye' },
      { label: 'Age at death', value: 'One hundred and eighty-one years' },
    ],
  },
  {
    id: 'meraxes',
    image: '/img/creature-meraxes.jpg',
    name: 'Meraxes',
    kind: 'Dragon',
    status: 'Fell at Hellholt, 10 AC — the bolt through her eye is Dorne’s favorite story',
    summary:
      'Rhaenys’s silver-and-gold queen, who could eat a horse at one meal — brought down over Dorne by a Dornish scorpion, proving dragons could be killed.',
    body: [
      'Meraxes was silver with gold eyes and claws, the mount of Rhaenys Targaryen, the most beloved of the Conqueror’s sister-wives. At the Field of Fire she flew with her brothers and helped end the armies of two kings in an afternoon.',
      'Dorne was different. Rhaenys took Meraxes against the Dornish castles and found them empty — until Hellholt, where a scorpion bolt took her through the eye in mid-flight. Rhaenys died with her, in the sand and the wreckage.',
      'Aegon burned for a decade after — the years of the Dragon’s Wroth, when every castle in Dorne felt the fire in turn. Dorne remained unbroken. Meraxes’ fall taught the realm the lesson it never forgot: the gods made dragons mortal, and the Dornish proved it first.',
    ],
    facts: [
      { label: 'Rider', value: 'Queen Rhaenys Targaryen' },
      { label: 'Scale', value: 'Silver, with gold eyes and claws' },
      { label: 'End', value: 'A scorpion bolt at Hellholt' },
      { label: 'Consequence', value: 'The Dragon’s Wroth — and Dornish independence' },
    ],
  },
  // — Direwolves —
  {
    id: 'direwolves',
    image: '/img/creature-direwolves.jpg',
    name: 'Direwolves',
    kind: 'Direwolf',
    status: 'Running wild in the riverlands and beyond the Wall',
    summary:
      'Larger than ponies when grown, direwolves had not been seen south of the Wall for two centuries — until six pups answered six Stark children.',
    body: [
      'The direwolf is the sigil of House Stark and was a legend south of the Wall for two hundred years: larger than any common wolf, broad-shouldered as a pony, with a mind that answers its bonded human. To skinchange into one is the gift of the North’s oldest blood.',
      'In 298 AC a dead direwolf mother was found with a stag’s horn through her throat, and six pups for the six Stark children — an omen the whole chronicle has been reading ever since. Each pup became its child’s shadow and mirror: the bond is not pet and master but halves of one life.',
      'Lady died for a bite she never gave; Grey Wind at the Twins; Summer in the cave of the three-eyed raven; Shaggydog to treachery. Ghost went beyond the Wall with his white-haired brother. And Nymeria leads a pack of a hundred wolves in the riverlands — the North’s second army, waiting.',
    ],
    facts: [
      { label: 'Size', value: 'Pony-large at full growth' },
      { label: 'Bond', value: 'The skinchanging link — one life in two bodies' },
      { label: 'Seen south', value: 'Not for two hundred years before 298 AC' },
      { label: 'The omen', value: 'The dead mother, the stag’s horn, the six pups' },
    ],
  },
  {
    id: 'ghost',
    name: 'Ghost',
    kind: 'Direwolf',
    image: '/img/creature-ghost.jpg',
    status: 'Beyond the Wall with Jon Snow',
    summary:
      'The albino — white as snow, red-eyed, and silent. The only direwolf who never once made a sound.',
    body: [
      'Ghost was the runt of the litter, the white one, the one who opened his eyes first while the others were still blind — claimed by the bastard who saw himself in the silence. He has never barked, growled, or howled. He simply appears, and acts.',
      'He ranged beyond the Wall, warned Jon of the wight at the Lord Commander’s tower, fought at the Fist, and came back from every place the Watch did not. In the Long Night he lost an ear and held the line anyway.',
      'He ended the story as he began it: at Jon Snow’s side, beyond the Wall, in the lands where a wolf and a quiet man are free.',
    ],
    facts: [
      { label: 'Bonded', value: 'Jon Snow' },
      { label: 'Marks', value: 'Albino white, red eyes, utter silence' },
      { label: 'Fought at', value: 'The Fist of the First Men; Castle Black; Winterfell' },
      { label: 'End', value: 'Running free in the true North' },
    ],
  },
  {
    id: 'nymeria',
    name: 'Nymeria',
    kind: 'Direwolf',
    image: '/img/creature-nymeria.jpg',
    status: 'Leading the great pack of the riverlands',
    summary:
      'Arya’s wolf, driven away to save her life, who grew into the leader of a hundred-wolf pack no man dares hunt.',
    body: [
      'Arya named her for the warrior queen of the Rhoynar, and the wolf took the name seriously. Driven into the woods to save her from the queen’s justice after Joffrey’s bite, Nymeria did not vanish — she organized.',
      'Travellers in the riverlands speak of a pack beyond counting, wolves that fear no man, led by a direwolf out of the old stories. She has pulled Catelyn Stark’s body from the Green Fork and answered her girl’s dreams across the length of the continent.',
      'When Arya came home through the riverlands, a hundred wolves came out of the dark to look at her — and let her pass. The pack survives. So does the bond.',
    ],
    facts: [
      { label: 'Bonded', value: 'Arya Stark' },
      { label: 'Named for', value: 'Nymeria, warrior queen of the Rhoynar' },
      { label: 'Now', value: 'Leads a pack a hundred strong in the riverlands' },
      { label: 'Known for', value: 'Saving her girl twice — once by leaving' },
    ],
  },
  {
    id: 'summer',
    image: '/img/creature-summer.jpg',
    name: 'Summer',
    kind: 'Direwolf',
    status: 'Died defending the cave of the last greenseer',
    summary:
      'Bran’s shadow, who carried his boy through dreams and across the world’s edge, and spent his last breath buying the escape from the cave.',
    body: [
      'Summer was Bran’s second body in more ways than one: after the fall, Bran lived half his life inside the wolf — running, hunting, and seeing through amber eyes when his own legs and world had failed him.',
      'He went north of the Wall with his boy, fought the wights at the Heart of Winter, and in the cave of the last greenseer met the dead that came in the night. Summer died holding the cave mouth while Bran and Meera escaped into the storm.',
      'His name was the cruelest and kindest of the litter: the summer every northern prayer asks for, spent to the last drop keeping his boy alive through winter.',
    ],
    facts: [
      { label: 'Bonded', value: 'Bran Stark' },
      { label: 'Fought at', value: 'Queenscrown; the Heart of Winter; the Cave' },
      { label: 'End', value: 'The cave mouth, against the wights' },
      { label: 'Meaning', value: 'The season the North prays for' },
    ],
  },
  {
    id: 'grey-wind',
    image: '/img/creature-greywind.jpg',
    name: 'Grey Wind',
    kind: 'Direwolf',
    status: 'Murdered at the Red Wedding beside his king',
    summary:
      'Robb’s war-wolf, who went south to battle and came home never — feared in every Lannister camp from the Whispering Wood on.',
    body: [
      'Grey Wind went to war at fifteen with his boy and was terror made flesh: he led charges at the Whispering Wood, tore out throats at Oxcross, and became the Young Wolf legend’s four-legged half. Lannister soldiers prayed to meet any foe but the wolf.',
      'He knew the Freys before any man did — he growled at the doors of the Twins and would not be calmed. They penned him before the feast. When the crossbows spoke in the hall, the spearmen opened his cage and killed him where he lunged to reach his king.',
      'The Freys sewed his head to Robb’s shoulders and paraded the mockery. The archive records the answer instead: in the riverlands, wolves still hunt Freys.',
    ],
    facts: [
      { label: 'Bonded', value: 'Robb Stark' },
      { label: 'Fought at', value: 'The Whispering Wood; Oxcross; the Crag' },
      { label: 'Sensed', value: 'The Twins’ treachery, at the door' },
      { label: 'End', value: 'The Red Wedding, at his king’s side' },
    ],
  },
  {
    id: 'lady',
    image: '/img/creature-lady.jpg',
    name: 'Lady',
    kind: 'Direwolf',
    status: 'Executed on the kingsroad for a bite that was never hers',
    summary:
      'Sansa’s gentle lady-wolf, the first of the six to die — on the word of a queen, for the crime of a wolf that had fled.',
    body: [
      'Lady was the smallest and gentlest of the six, trained to manners, the direwolf a lady could walk on a lead. On the kingsroad at the Trident, Joffrey’s arm was bitten by Nymeria — and Nymeria was already gone into the woods.',
      'Cersei demanded a wolf’s life in payment; Robert, unwilling to deny her, allowed it; and Ned Stark insisted on doing the deed himself with Ice, sending the body home rather than letting the queen have the pelt.',
      'The old men of the North say the pack’s luck died with Lady: the first Stark child’s wolf was the first Stark loss, and the war’s long bill began with that innocent blood on the kingsroad.',
    ],
    facts: [
      { label: 'Bonded', value: 'Sansa Stark' },
      { label: 'Nature', value: 'The gentlest of the six' },
      { label: 'Killed by', value: 'Eddard Stark’s own hand — to spare her worse' },
      { label: 'Omen', value: 'The first of the pack to die; not the last' },
    ],
  },
  {
    id: 'shaggydog',
    image: '/img/creature-shaggydog.jpg',
    name: 'Shaggydog',
    kind: 'Direwolf',
    status: 'Slain at the Last Hearth and presented at Winterfell',
    summary:
      'Rickon’s black wolf, wildest of the six — as ungoverned as his small, wild boy.',
    body: [
      'Shaggydog was black and bad-tempered, the wolf of the three-year-old lord who grew up in a burning world without parents, tutors, or restraint. Wolf and boy were one feral spirit, and Winterfell’s court learned to step wide of both.',
      'He went with Rickon and Osha into hiding — first to Skagos, the island of cannibals and unicorns in the northern sea, where a wolf could be a wolf and a boy could grow teeth.',
      'The Umbers brought them back as a gift for the Boltons: Shaggydog’s head, presented at Winterfell as proof of the boy. The gesture bought Ramsay his final enemy and the North its last broken heart.',
    ],
    facts: [
      { label: 'Bonded', value: 'Rickon Stark' },
      { label: 'Color', value: 'Black — wildest of the litter' },
      { label: 'Hidden at', value: 'Skagos, with Osha' },
      { label: 'End', value: 'The Last Hearth; his head at Winterfell' },
    ],
  },
  // — Races & beings —
  {
    id: 'giants',
    name: 'Giants',
    kind: 'Race & Beings',
    image: '/img/creature-giants.jpg',
    status: 'Hundreds remain, beyond the Wall',
    summary:
      'Twelve feet of shaggy muscle riding mammoths, the giants are the eldest race of Westeros after the Children — and they remember.',
    body: [
      'The giants are a fading race: perhaps a thousand left in all the world, in the mountains and tundra beyond the Wall. They speak the Old Tongue, ride mammoths, live a hundred years, and bury their dead with their own hands.',
      'They answered Mance Rayder because Mance answered them, and Mag the Mighty — Mag Mar Tun Doh Weg — led their strength against the Wall itself. Wun Weg Wun Dar Wun, the last in the Watch’s service, went down killing at Hardhome and stood again at Winterfell.',
      'The archive counts them among the living wonders of the world: the mammoth-riders of the uttermost north, whose songs say they were old when the First Men were new.',
    ],
    facts: [
      { label: 'Height', value: 'Ten to twelve feet, double-muscled' },
      { label: 'Mounts', value: 'Mammoths — the last in the world' },
      { label: 'Tongue', value: 'The Old Tongue of the First Men' },
      { label: 'Known names', value: 'Mag the Mighty; Wun Wun' },
    ],
  },
  {
    id: 'children-of-the-forest',
    name: 'The Children of the Forest',
    kind: 'Race & Beings',
    image: '/img/creature-children.jpg',
    status: 'The last few are gone — their greenseer’s cave is empty',
    summary:
      'The first people of Westeros, small and dark and bound to the weirwoods, who made the Night King as a weapon and spent their extinction undoing it.',
    body: [
      'They called themselves those who sing the song of the earth. The First Men called them the Children, for they were small as children and beautiful as squirrels — nut-brown skin, great golden eyes, and magic bound into every white tree of the deep wood.',
      'They fought the First Men with dragonglass and the Hammer of the Waters, made peace at the Isle of Faces, and taught men the old gods. In the wars they made their greatest mistake: a captive, a heart tree, a blade of dragonglass — the first White Walker.',
      'The last of them hid eight thousand years in a cave beyond the Wall, keeping the world’s memory with the last greenseer. Leaf, who walked with Bran Stark, said her race had had their time: “The great lions are gone too, and the giant deer. Men would only have us fade.” The cave is empty now. The song is sung.',
    ],
    facts: [
      { label: 'Name', value: 'Those who sing the song of the earth' },
      { label: 'Craft', value: 'Dragonglass, greensight, the Hammer of the Waters' },
      { label: 'Made', value: 'The Night King — their weapon, their ruin' },
      { label: 'Last known', value: 'Leaf, of the cave beyond the Wall' },
    ],
  },
  {
    id: 'white-walkers',
    name: 'The White Walkers',
    kind: 'Race & Beings',
    image: '/img/myth-longnight.jpg',
    status: 'Destroyed at Winterfell, 305 AC',
    summary:
      'The Others — ancient, elegant, terrible knights of cold who raise the dead, command the storm, and were beaten twice by the same house.',
    body: [
      'The Others are not legend but weapon: made by the Children in the Dawn Age from a captive of the First Men, escaped from their makers, and commanded by the Night King. They are tall, gaunt, beautiful as ice statues, armored in crystal that moves like skin, bearing swords of cold that shatter common steel.',
      'They bring the cold with them — or the cold brings them; the maesters argue. Their touch freezes; their presence raises every corpse in the field; their only banes are dragonglass, the frozen fire the Children weaponized first, and Valyrian steel, which drinks the spell.',
      'Eight thousand years after the first Long Night, they came again — and ended in one night at Winterfell, when the Night King’s death unmade them all at once. The archive keeps their chapter open. The North remembers how the last one ended, and how quietly winter comes.',
    ],
    facts: [
      { label: 'Made by', value: 'The Children of the Forest' },
      { label: 'Banes', value: 'Dragonglass and Valyrian steel' },
      { label: 'Herald', value: 'Cold, mist, and the blue of the dead’s eyes' },
      { label: 'End', value: 'The godswood of Winterfell' },
    ],
  },
  {
    id: 'wights',
    name: 'The Wights',
    kind: 'Race & Beings',
    image: '/img/creature-wights.jpg',
    status: 'Fallen with the Night King',
    summary:
      'The risen dead — every corpse the Others’ cold has touched, from ravens to giants to one stolen dragon.',
    body: [
      'A wight is anything dead that the cold has claimed: men, horses, bears, giants, all risen with eyes like blue stars and hands that remember weapons. They feel no pain, fear no wound, and stop for nothing but fire.',
      'Fire destroys them; dragonglass does not matter; dismemberment merely makes more pieces. The only true end is the death of the Walker who raised them — or of the Night King who raised the Walkers.',
      'The army of the dead that broke on Winterfell was every grave of the North made hostile: ancestors, brothers, and the corpses in Winterfell’s own crypts. When the Night King shattered, they fell together — a kingdom of the dead, returned to rest in a single instant.',
    ],
    facts: [
      { label: 'Sign', value: 'Eyes like blue stars' },
      { label: 'Bane', value: 'Fire — and only fire, blade by blade' },
      { label: 'Includes', value: 'Men, beasts, giants — and Viserion' },
      { label: 'End', value: 'Unmade with their master, 305 AC' },
    ],
  },
  // — Legends —
  {
    id: 'krakens',
    name: 'Krakens',
    kind: 'Legend',
    image: '/img/house-greyjoy.jpg',
    status: 'Sleeping, the ironborn say, beneath the Sunset Sea',
    summary:
      'The great sea-horrors of the deep, sigil of House Greyjoy, last reliably sighted in the days of the driftwood kings.',
    body: [
      'The kraken is the sigil of House Greyjoy and the terror of every sailor’s tale west of the Arbor: a leviathan of the deep with arms longer than a galley, strong enough to pull a warship under whole.',
      'The ironborn claim their Grey King slew Nagga, the greatest of the sea dragons, and that krakens fed at that feast for a hundred years. Maesters note that no specimen has been taken in living memory — and that the Sunset Sea is very large, and very empty, and very deep.',
      'The archive files them between history and weather: reports of wrecked fleets, sucker-marks on hulls raised at the Fair Isle, and the ironborn’s cheerful certainty that the deep ones are merely sleeping.',
    ],
    facts: [
      { label: 'Sigil of', value: 'House Greyjoy' },
      { label: 'Kin', value: 'Nagga the sea dragon — the Grey King’s feast' },
      { label: 'Range', value: 'The Sunset Sea, off the Iron Islands' },
      { label: 'Status', value: 'Unseen for centuries — allegedly' },
    ],
  },
  {
    id: 'nagga',
    image: '/img/creature-nagga.jpg',
    name: 'Nagga, the Sea Dragon',
    kind: 'Legend',
    status: 'Slain by the Grey King in the dawn of the ironborn',
    summary:
      'The greatest sea dragon that ever was — slain by the first Grey King, whose hall was made from her bones.',
    body: [
      'The oldest songs of the Iron Islands tell of Nagga, the sea dragon who fed on krakens and whose wrath drowned whole coasts. The Grey King, first king of the ironborn, fought her at the dawn of days and slew her — and made his hall from her ribs and his throne from her jaw.',
      'The Grey King’s Hall stood on Nagga’s Hill on Old Wyk for ten thousand years, the stone ribs of the great beast rising from the earth. It was there, in that skeleton, that every kingsmoot in ironborn history was held — the captains choosing their kings beneath the bones of the dragon their first king killed.',
      'Maesters doubt her, as they doubt all sea stories. The ironborn do not. The ribs are still on Old Wyk, and stone does not grow in the shape of ribs by accident.',
    ],
    facts: [
      { label: 'Slain by', value: 'The Grey King' },
      { label: 'Her bones', value: 'The Grey King’s Hall, Old Wyk' },
      { label: 'Fed on', value: 'Krakens, if the songs are true' },
      { label: 'Legacy', value: 'Every kingsmoot sat within her ribs' },
    ],
  },
  {
    id: 'ice-spiders',
    image: '/img/creature-icespiders.jpg',
    name: 'Ice Spiders',
    kind: 'Legend',
    status: 'In Old Nan’s tales — big as hounds, in the cold’s wake',
    summary:
      'Big as hounds, white as snow, hunting in packs in the wake of the Others — the nightmare footnote of the Long Night.',
    body: [
      'Old Nan’s tales of the Long Night include one detail the maesters strike out and the rangers confirm in whispers: ice spiders, big as hounds, pale as snow, hunting in the cold that follows the Others.',
      'No specimen exists; no maester has seen one; the Citadel lists them under folklore. The archive notes only that the men of the Night’s Watch — who see wights and Walkers and giants — do not laugh at the story.',
      'Whatever else they are, ice spiders are the perfect emblem of the Long Night’s horror: even the vermin of the cold had teeth.',
    ],
    facts: [
      { label: 'Size', value: 'Big as hounds, per the tales' },
      { label: 'Color', value: 'White as the snows they hunt in' },
      { label: 'Source', value: 'Old Nan — and ranger reports the Citadel files away' },
      { label: 'Status', value: 'Unconfirmed. The Watch does not laugh' },
    ],
  },
]
