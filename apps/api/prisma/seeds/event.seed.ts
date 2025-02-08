import { Prisma } from "@prisma/client";

export const eventSeed: Prisma.EventCreateManyInput[] = [
  {
    event_category_id: 1,
    city_id: 1,
    name: 'Tech Conference 2025',
    slug: 'tech-conference-2025',
    host_name: 'TechCorp Inc.',
    address: '123 Tech Street, Silicon Valley',
    description: 'An annual tech conference featuring the latest in AI and cloud computing.',
    term_condition: 'All attendees must register online.',
    start_date: new Date('2025-05-10T09:00:00Z'),
    end_date: new Date('2025-05-12T17:00:00Z'),
    status: 'ACTIVE',
    image: 'https://example.com/images/tech-conference.jpg',
    map_image: 'https://example.com/images/map-tech-conference.jpg',
  },
  {
    event_category_id: 2,
    city_id: 2,
    name: 'Music Festival 2025',
    slug: 'music-festival-2025',
    host_name: 'Live Music Group',
    address: '456 Music Avenue, New York',
    description: 'A three-day music festival featuring top artists from around the world.',
    term_condition: 'Tickets are non-refundable.',
    start_date: new Date('2025-06-15T12:00:00Z'),
    end_date: new Date('2025-06-17T23:00:00Z'),
    status: 'ACTIVE',
    image: 'https://example.com/images/music-festival.jpg',
    map_image: 'https://example.com/images/map-music-festival.jpg',
  },
  {
    event_category_id: 3,
    city_id: 3,
    name: 'Startup Pitch Night',
    slug: 'startup-pitch-night',
    host_name: 'Venture Capital Partners',
    address: '789 Startup Lane, San Francisco',
    description: 'An exclusive event where startups pitch their ideas to investors.',
    term_condition: 'Only registered startups can pitch.',
    start_date: new Date('2025-07-20T18:00:00Z'),
    end_date: new Date('2025-07-20T21:00:00Z'),
    status: 'ACTIVE',
    image: 'https://example.com/images/startup-pitch.jpg',
    map_image: 'https://example.com/images/map-startup-pitch.jpg',
  },
  {
    event_category_id: 4,
    city_id: 4,
    name: 'Food Expo 2025',
    slug: 'food-expo-2025',
    host_name: 'Gourmet World',
    address: '12 Culinary Street, Chicago',
    description: 'A showcase of the finest cuisine from top chefs and restaurants.',
    term_condition: 'Open to all food lovers.',
    start_date: new Date('2025-08-05T10:00:00Z'),
    end_date: new Date('2025-08-07T20:00:00Z'),
    status: 'ACTIVE',
    image: 'https://example.com/images/food-expo.jpg',
    map_image: 'https://example.com/images/map-food-expo.jpg',
  },
  {
    event_category_id: 5,
    city_id: 5,
    name: 'International Film Festival 2024',
    slug: 'international-film-festival-2024',
    host_name: 'CineWorld',
    address: '99 Cinema Road, Los Angeles',
    description: 'A week-long film festival featuring independent and blockbuster movies.',
    term_condition: 'Pass required for all screenings.',
    start_date: new Date('2025-09-01T14:00:00Z'),
    end_date: new Date('2025-09-07T22:00:00Z'),
    status: 'ACTIVE',
    image: 'https://example.com/images/film-festival.jpg',
    map_image: 'https://example.com/images/map-film-festival.jpg',
  },
  {
    event_category_id: 1,
    city_id: 1,
    name: "Tech Conference 2024",
    slug: 'tech-conference-2024',
    host_name: "Innovate Inc.",
    address: "42 Innovation Drive, San Francisco",
    description: "The leading tech conference showcasing the latest advancements in technology.",
    term_condition: "Attendees must register online.",
    start_date: "2024-10-20T09:00:00Z",
    end_date: "2024-10-22T17:00:00Z",
    status: "ACTIVE",
    image: "https://example.com/images/tech-conference.jpg",
    map_image: "https://example.com/images/map-tech-conference.jpg"
  },
  {
    event_category_id: 2,
    city_id: 2,
    name: "Art Fair 2025",
    slug: 'art-fair-2025',
    host_name: "Creative Arts Society",
    address: "7 Art Square, New York City",
    description: "A celebration of visual arts, featuring works from renowned artists.",
    term_condition: "Free admission for all.",
    start_date: "2025-05-15T11:00:00Z",
    end_date: "2025-05-17T19:00:00Z",
    status: "ACTIVE",
    image: "https://example.com/images/art-fair.jpg",
    map_image: "https://example.com/images/map-art-fair.jpg"
  },
  {
    event_category_id: 3,
    city_id: 3,
    name: "Music Festival 2024",
    slug: 'music-festival-2024',
    host_name: "Harmony Productions",
    address: "1 Music Lane, Austin",
    description: "A weekend of live music performances from diverse genres.",
    term_condition: "Tickets required for entry.",
    start_date: "2024-07-01T14:00:00Z",
    end_date: "2024-07-03T23:00:00Z",
    status: "ACTIVE",
    image: "https://example.com/images/music-festival.jpg",
    map_image: "https://example.com/images/map-music-festival.jpg"
  },
  {
    event_category_id: 5,
    city_id: 4,
    name: "Sports tournament 2025",
    slug: 'sports-tournament-2025',
    host_name: "Athletic Association",
    address: "5 Sports Avenue, Los Angeles",
    description: "A competition featuring various sports and athletes from around the world.",
    term_condition: "Open to registered athletes and spectators with tickets.",
    start_date: "2025-03-10T08:00:00Z",
    end_date: "2025-03-15T22:00:00Z",
    status: "ACTIVE",
    image: "https://example.com/images/sports-tournament.jpg",
    map_image: "https://example.com/images/map-sports-tournament.jpg"
  },
  {
    event_category_id: 4,
    city_id: 5,
    name: "Wine tasting event2024",
    slug: 'wine-tasting-event2024',
    host_name: "Vineyard Estates",
    address: "9 Wine Country Road, Napa Valley",
    description: "An exclusive tasting event featuring award-winning wines from local vineyards.",
    term_condition: "Must be 21+ to attend.",
    start_date: "2024-11-25T15:00:00Z",
    end_date: "2024-11-25T20:00:00Z",
    status: "ACTIVE",
    image: "https://example.com/images/wine-tasting.jpg",
    map_image: "https://example.com/images/map-wine-tasting.jpg"
  },
  {
    event_category_id: 3,
    city_id: 1,
    name: "Rock the City Concert",
    slug: 'rock-the-city-concert',
    host_name: "Live Nation",
    address: "Central Park Amphitheater, New York City",
    description: "A night of electrifying rock music with headliners [Band Name 1] and [Band Name 2].",
    term_condition: "All ages welcome. Valid ID required for alcohol purchase.",
    start_date: "2024-09-15T18:00:00Z",
    end_date: "2024-09-15T23:59:00Z",
    status: "ACTIVE",
    image: "https://example.com/images/rock-concert.jpg",
    map_image: "https://example.com/images/map-rock-concert.jpg"
  },
  {
    event_category_id: 2,
    city_id: 2,
    name: "International Film Festival",
    slug: 'international-film-festival',
    host_name: "Cinema World",
    address: "Various locations, Los Angeles",
    description: "A showcase of independent and international films, with screenings, workshops, and Q&A sessions.",
    term_condition: "Tickets available online and at the door.",
    start_date: "2025-02-20T10:00:00Z",
    end_date: "2025-02-28T22:00:00Z",
    status: "ACTIVE",
    image: "https://example.com/images/film-festival.jpg",
    map_image: "https://example.com/images/map-film-festival.jpg"
  },
  {
    event_category_id: 5,
    city_id: 3,
    name: "Chicago Marathon",
    slug: 'chicago-marathon',
    host_name: "Chicago Athletics Club",
    address: "Starts at Grant Park, Chicago",
    description: "The annual Chicago Marathon, a 26.2-mile race through the city.",
    term_condition: "Registration required. Qualifying times apply.",
    start_date: "2024-10-13T07:00:00Z",
    end_date: "2024-10-13T15:00:00Z",
    status: "ACTIVE",
    image: "https://example.com/images/chicago-marathon.jpg",
    map_image: "https://example.com/images/map-chicago-marathon.jpg"
  },
  {
    event_category_id: 1,
    city_id: 4,
    name: "Gaming Expo",
    slug: 'gaming-expo',
    host_name: "Game On!",
    address: "Metro Toronto Convention Centre, Toronto",
    description: "Experience the latest in video games, esports, and gaming technology.",
    term_condition: "Open to the public. Tickets sold online and at the door.",
    start_date: "2025-06-05T12:00:00Z",
    end_date: "2025-06-08T21:00:00Z",
    status: "ACTIVE",
    image: "https://example.com/images/gaming-expo.jpg",
    map_image: "https://example.com/images/map-gaming-expo.jpg"
  },
  {
    event_category_id: 4,
    city_id: 5,
    name: "Chocolate Festival",
    slug: 'chocolate-festival',
    host_name: "Sweet Tooth Society",
    address: "Fairmont Hotel, San Francisco",
    description: "Indulge in chocolate creations from renowned chocolatiers and pastry chefs.",
    term_condition: "Limited tickets available. Purchase in advance.",
    start_date: "2024-12-14T11:00:00Z",
    end_date: "2024-12-14T18:00:00Z",
    status: "ACTIVE",
    image: "https://example.com/images/chocolate-festival.jpg",
    map_image: "https://example.com/images/map-chocolate-festival.jpg"
  }
];
