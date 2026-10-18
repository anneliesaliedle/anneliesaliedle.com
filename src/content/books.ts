export type Shelf = 'motorsport' | 'fantasy' | 'historical';

export interface Book {
  slug: string;
  title: string;
  subtitle?: string;
  genre: string;
  shelf: Shelf;
  series?: string;
  tagline?: string;
  description?: string;
  characters?: string;
  tags: string[];
  status: 'querying' | 'revising' | 'writing';
  /** Kept in the repo but left off the public site (e.g. mid-draft). */
  hidden?: boolean;
  theme: string;
  accent: string;
  image?: string;
}

/** Books with a cover and blurb get a full tile and their own page; the rest show as compact cards. */
export const hasPage = (book: Book): boolean => Boolean(book.description && book.image);

export const statusLabel: Record<Book['status'], string> = {
  querying: 'Currently Querying',
  revising: 'Draft Complete · In Revision',
  writing: 'In Progress',
};

export const books: Book[] = [
  {
    slug: 'the-dirt',
    shelf: 'motorsport',
    series: 'Rally Universe',
    accent: '#e07050',
    title: 'The Dirt: A Rally Novel',
    genre: 'Motorsport Romance',
    tagline: 'Gravel roads. Borrowed time. One co-driver who changes everything.',
    description: 'Maverick Blaire, a fierce Australian rally driver, is determined to conquer the world championship, but her greatest challenge isn\'t the track — it\'s her enigmatic Scottish co-driver, Mac Graham. Haunted by a tragic past, Mac hides his scars behind a stoic facade, guiding Maverick through treacherous stages with unwavering precision. As they chase victory against rival James Harrison, their partnership ignites into a volatile mix of trust and unspoken desire. With Harrison\'s legendary team dominating the championship and Maverick\'s own demons threatening to derail everything she\'s worked for, she\'ll have to decide what she\'s willing to sacrifice for glory. Because in rally racing, one mistake doesn\'t just cost you the race — it can cost you everything.',
    characters: 'Maverick Blaire & Mac Graham',
    tags: ['M/F', 'Slow Burn', 'Forced Proximity', 'Set in 1992'],
    status: 'querying',
    theme: 'the-dirt',
    image: '/images/the-dirt.jpg',
  },
  {
    slug: 'snowblind',
    shelf: 'motorsport',
    series: 'Rally Universe',
    accent: '#7ab8dd',
    title: 'Snowblind',
    genre: 'Motorsport Romance',
    tagline: 'Ice under the tires. Fire under the skin.',
    description: 'Heather Clarke, a trained Physiotherapist with an impressive CV and absolutely no job offers in sight, finally gets the break she needed — though she never imagined it would come in the form of a Finnish rally team. Rally racing — a fringe sport for reckless thrill-seekers — was hardly the career move she\'d envisioned. But with an endless pile of job refusals and an ever shrinking bank account, she hops on a one-way flight to Finland, and tells herself it\'s only temporary. Mikko Lahtinen is everything she didn\'t expect — precise, disciplined, and carrying far more pain than he will ever willingly admit. As Heather fights to earn the trust of a team that would rather suffer in silence than ask for help, the quiet Finnish driver begins dismantling every assumption she arrived with: about the sport, about these men, and about what she actually wants from her life. She came here to leave. She never planned to stay.',
    characters: 'Heather Clarke & Mikko Lahtinen',
    tags: ['M/F', 'Fish Out of Water', 'Slow Burn'],
    status: 'writing',
    theme: 'snowblind',
    image: '/images/snowblind.jpg',
  },
  {
    slug: 'fire-on-the-track',
    title: 'Fire on the Track',
    subtitle: 'Fuego en la Pista',
    shelf: 'motorsport',
    series: 'Rally Universe',
    accent: '#e8553f',
    genre: 'Motorsport Romance',
    characters: 'Enrique Velasco & James Harrison',
    tags: ['M/M'],
    status: 'writing',
    theme: 'fire-on-the-track',
  },
  {
    slug: 'friction-point',
    title: 'Friction Point',
    shelf: 'motorsport',
    series: 'Rally Universe',
    accent: '#d27a9b',
    genre: 'Motorsport Romance',
    characters: 'Ellie Carlisle & Simon Westbrook',
    tags: ['M/F'],
    status: 'writing',
    theme: 'friction-point',
  },
  {
    slug: 'ashes-in-orbit',
    hidden: true, // mid-draft; restore by deleting this line
    shelf: 'fantasy',
    accent: '#a87ee0',
    title: 'Ashes in Orbit',
    genre: 'Fantasy Sci-Fi Romance',
    tagline: 'Two enemies. One dying ship. No way home alone.',
    description: 'Damascus al-Zahir, a scarred elven pilot, seeks solace in the galaxy\'s most infamous pleasure house, where a mysterious client offers him something he\'s never known — and a night he\'ll never forget. But when Damascus discovers his lover is General Jian Wei, commander of the Zorelian armada and architect of his people\'s suffering, their fragile connection shatters. Betrayed and captured, Damascus becomes Jian Wei\'s prisoner aboard the enemy flagship, tortured for intelligence he doesn\'t possess while nanites in his blood broadcast a signal neither can silence. Bound by an honor code that prevents him from killing the man who stands against the armada, Jian Wei is trapped between the duty that defines him and the impossible pull of the warrior he can\'t bring himself to destroy. As both their fleets close in on each other, Damascus must navigate the wreckage of trust, the weight of command, and a war that demands he make an impossible choice — choose between his own people, and the life of his enemy.',
    characters: 'Damascus & General Jian Wei',
    tags: ['M/M', 'Enemies to Lovers', 'Captor/Captive'],
    status: 'writing',
    theme: 'ashes-in-orbit',
    image: '/images/ashes-in-orbit.jpg',
  },
  {
    slug: 'slave-of-the-underworld',
    shelf: 'fantasy',
    accent: '#ddb050',
    title: 'Slave of the Underworld',
    genre: 'Dark Fantasy Romance',
    tagline: 'Even gods kneel for the right soul.',
    description: 'Goddess of love — that\'s what the immortals call her, though to Hathor it couldn\'t feel farther from the truth. Stolen from her gilded cage and cast into the Underworld, Hathor finds herself trapped in darkness with a creature who has every reason to hate her. Anubis, the jackal-headed god cursed to eternally wander the land of the dead, guards secrets darker than his realm — secrets Hathor must uncover if she is ever to be free of her prison. Survival means trusting the one being she was warned never to touch, and unearthing the truth his cursed heart has kept buried for over three thousand years. As ancient powers stir and the line between captor and salvation blurs, Hathor must choose: the freedom she\'s always craved, or the beast who might be the key to everything.',
    characters: 'Hathor & Anubis',
    tags: ['M/F', 'Captor/Captive', 'Egyptian Mythology'],
    status: 'revising',
    theme: 'slave-of-the-underworld',
    image: '/images/slave-of-the-underworld.jpg',
  },
  {
    slug: 'queen-of-egypt',
    title: 'Queen of Egypt',
    shelf: 'historical',
    accent: '#3fb8aa',
    genre: 'Historical Romance',
    tags: ['Ancient Egypt'],
    status: 'writing',
    theme: 'queen-of-egypt',
  },
  {
    slug: 'the-sagas-of-iislandor',
    title: 'The Sagas of Iislandor',
    shelf: 'fantasy',
    accent: '#8fbf72',
    genre: 'Epic Fantasy',
    tags: ['Trilogy'],
    status: 'writing',
    theme: 'the-sagas-of-iislandor',
  },
];
