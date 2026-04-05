export interface Book {
  slug: string;
  title: string;
  genre: string;
  tagline: string;
  description: string;
  characters: string;
  status: 'querying' | 'writing' | 'upcoming';
  theme: string;
  image: string;
}

export const books: Book[] = [
  {
    slug: 'the-dirt',
    title: 'The Dirt: A Rally Novel',
    genre: 'Motorsport Romance',
    tagline: 'Gravel roads. Borrowed time. One co-driver who changes everything.',
    description: 'Maverick Blaire, a fierce Australian rally driver, is determined to conquer the world championship, but her greatest challenge isn\'t the track — it\'s her enigmatic Scottish co-driver, Mac Graham. Haunted by a tragic past, Mac hides his scars behind a stoic facade, guiding Maverick through treacherous stages with unwavering precision. As they chase victory against rival James Harrison, their partnership ignites into a volatile mix of trust and unspoken desire. With Harrison\'s legendary team dominating the championship and Maverick\'s own demons threatening to derail everything she\'s worked for, she\'ll have to decide what she\'s willing to sacrifice for glory. Because in rally racing, one mistake doesn\'t just cost you the race — it can cost you everything.',
    characters: 'Maverick Blaire & Mac Graham',
    status: 'querying',
    theme: 'the-dirt',
    image: '/images/the-dirt.jpg',
  },
  {
    slug: 'snowblind',
    title: 'Snowblind',
    genre: 'Motorsport Romance',
    tagline: 'Ice under the tires. Fire under the skin.',
    description: 'Heather Clarke, a trained Physiotherapist with an impressive CV and absolutely no job offers in sight, finally gets the break she needed — though she never imagined it would come in the form of a Finnish rally team. Rally racing — a fringe sport for reckless thrill-seekers — was hardly the career move she\'d envisioned. But with an endless pile of job refusals and an ever shrinking bank account, she hops on a one-way flight to Finland, and tells herself it\'s only temporary. Mikko Lahtinen is everything she didn\'t expect — precise, disciplined, and carrying far more pain than he will ever willingly admit. As Heather fights to earn the trust of a team that would rather suffer in silence than ask for help, the quiet Finnish driver begins dismantling every assumption she arrived with: about the sport, about these men, and about what she actually wants from her life. She came here to leave. She never planned to stay.',
    characters: 'Heather Clarke & Mikko Lahtinen',
    status: 'upcoming',
    theme: 'snowblind',
    image: '/images/snowblind.jpg',
  },
  {
    slug: 'ashes-in-orbit',
    title: 'Ashes in Orbit',
    genre: 'Fantasy Sci-Fi Romance',
    tagline: 'Two enemies. One dying ship. No way home alone.',
    description: 'Damascus al-Zahir, a scarred elven pilot, seeks solace in the galaxy\'s most infamous pleasure house, where a mysterious client offers him something he\'s never known — and a night he\'ll never forget. But when Damascus discovers his lover is General Jian Wei, commander of the Zorelian armada and architect of his people\'s suffering, their fragile connection shatters. Betrayed and captured, Damascus becomes Jian Wei\'s prisoner aboard the enemy flagship, tortured for intelligence he doesn\'t possess while nanites in his blood broadcast a signal neither can silence. Bound by an honor code that prevents him from killing the man who stands against the armada, Jian Wei is trapped between the duty that defines him and the impossible pull of the warrior he can\'t bring himself to destroy. As both their fleets close in on each other, Damascus must navigate the wreckage of trust, the weight of command, and a war that demands he make an impossible choice — choose between his own people, and the life of his enemy.',
    characters: 'Damascus & General Jian Wei',
    status: 'upcoming',
    theme: 'ashes-in-orbit',
    image: '/images/ashes-in-orbit.jpg',
  },
  {
    slug: 'slave-of-the-underworld',
    title: 'Slave of the Underworld',
    genre: 'Dark Fantasy Romance',
    tagline: 'Even gods kneel for the right soul.',
    description: 'Goddess of love — that\'s what the immortals call her, though to Hathor it couldn\'t feel farther from the truth. Stolen from her gilded cage and cast into the Underworld, Hathor finds herself trapped in darkness with a creature who has every reason to hate her. Anubis, the jackal-headed god cursed to eternally wander the land of the dead, guards secrets darker than his realm — secrets Hathor must uncover if she is ever to be free of her prison. Survival means trusting the one being she was warned never to touch, and unearthing the truth his cursed heart has kept buried for over three thousand years. As ancient powers stir and the line between captor and salvation blurs, Hathor must choose: the freedom she\'s always craved, or the beast who might be the key to everything.',
    characters: 'Hathor & Anubis',
    status: 'upcoming',
    theme: 'slave-of-the-underworld',
    image: '/images/slave-of-the-underworld.jpg',
  },
];
