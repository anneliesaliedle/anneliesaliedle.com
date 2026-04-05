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
    description: 'Australian rally driver Maverick Blaire has spent her career proving she belongs in a sport that never made room for her. When a mechanical failure forces her to take on an untested Scottish co-driver, Mac Graham, she expects dead weight. What she gets is someone who reads the road — and her — better than anyone ever has.',
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
    description: 'Physiotherapist Heather Clarke takes a contract with a Finnish rally team expecting cold weather and quiet professionalism. She gets Mikko Lahtinen — a driver who races like he has nothing to lose, because he doesn\'t. When his recklessness puts his body in her hands, the line between healing and falling blurs fast.',
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
    description: 'Damascus is a scavenger on a derelict generation ship — the last of a crew that was never supposed to wake up. General Jian Wei is a soldier from the empire that abandoned the ship centuries ago. When their factions collide over the ship\'s failing systems, survival demands they work together. Trust is harder.',
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
    description: 'When Hathor, goddess of love and beauty, is cast into the underworld as punishment for defying Ra, she expects darkness. She doesn\'t expect Anubis — ancient, patient, and nothing like the monster the upper gods warned her about. In his kingdom of the dead, she finds something terrifyingly alive.',
    characters: 'Hathor & Anubis',
    status: 'upcoming',
    theme: 'slave-of-the-underworld',
    image: '/images/slave-of-the-underworld.jpg',
  },
];
