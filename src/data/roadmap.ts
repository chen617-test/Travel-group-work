export type Filters = {
  city: string
  people?: '1'|'2'|'3-5'|'6-10'|'10+'
  goals?: string[]
  ageGroup?: 'kids'|'teens'|'adults'|'seniors'
  duration?: 'half-day'|'1d'|'2-3d'|'4d+'
  access?: string[]
  season?: 'spring'|'summer'|'autumn'|'winter'
  sort?: 'match'|'recent'|'photoScore'|'effort'
}

export type Tour = {
  id: string
  city: string
  title: string
  landscape: string[]
  bestSeason: Array<'spring'|'summer'|'autumn'|'winter'>
  duration: 'half-day'|'1d'|'2-3d'|'4d+'
  effort: 'low'|'medium'|'high'
  photoScore: number
  highlights: string[]
  stops: Array<{ time: string; name: string; tip?: string }>
  reviews: { rating: number; count: number; tags: string[]; snippets: string[] }
  coverImage: { url: string; alt: string; credit?: string }
}

export type Guide = {
  id: string
  city: string
  name: string
  langs: string[]
  expertise: string[]
  features: string[]
  routes: string[]
  reviews: { rating: number; count: number; snippet: string }
  avatar: string
}

export const tours: Tour[] = [
  {
    id: 'wuhan-heritage-walking-1d',
    city: 'wuhan',
    title: 'Hankou Concessions & Jianghan Road · 1-Day Easy Walk',
    landscape: ['urban','heritage'],
    bestSeason: ['spring','autumn'],
    duration: '1d',
    effort: 'low',
    photoScore: 5,
    highlights: ['Jianghan Customs House bell','Hankou Bund sunset','Hubu Alley snacks'],
    stops: [
      { time: '09:00', name: 'Jianghan Customs House Museum', tip: 'Arrive before 9:30 to avoid groups' },
      { time: '12:00', name: 'Lihuangpi Road', tip: 'Great street corners for photography' },
      { time: '18:30', name: 'Hankou Bund Night View', tip: 'Blue hour reflection shots' }
    ],
    reviews: {
      rating: 4.8,
      count: 326,
      tags: ['senior-friendly','photography','easy-pace'],
      snippets: ['Comfortable for parents','Many photo spots with clear storytelling']
    },
    coverImage: {
      url: '/images/roadmap/jianghan-road.jpg',
      alt: 'Jianghan Road clock tower at dusk'
    }
  },
  {
    id: 'wuhan-food-morning-halfday',
    city: 'wuhan',
    title: 'Morning Food Walk · Hubu Alley Classics',
    landscape: ['urban','food'],
    bestSeason: ['spring','autumn','winter','summer'],
    duration: 'half-day',
    effort: 'low',
    photoScore: 3,
    highlights: ['Hot Dry Noodles','Sesame sauce tasting','Local market'],
    stops: [
      { time: '08:00', name: 'Hubu Alley', tip: 'Try hot-dry noodles early' },
      { time: '09:30', name: 'Local Market', tip: 'Seasonal snacks' },
      { time: '11:00', name: 'Hankou Snack Street', tip: 'Dessert stop' }
    ],
    reviews: { rating: 4.7, count: 210, tags: ['foodies','family'], snippets: ['Authentic breakfast!'] },
    coverImage: { url: '/images/roadmap/hubu-alley.jpg', alt: 'Hubu Alley snacks' }
  },
  {
    id: 'wuhan-bund-sunset-1d',
    city: 'wuhan',
    title: 'Hankou Bund Sunset & Nightscape · 1 Day',
    landscape: ['urban','riverfront'],
    bestSeason: ['summer','autumn'],
    duration: '1d',
    effort: 'low',
    photoScore: 4,
    highlights: ['Blue hour shots','Riverside walk','Night ferry view'],
    stops: [
      { time: '16:00', name: 'Riverside Promenade' },
      { time: '18:30', name: 'Sunset spot' },
      { time: '20:00', name: 'Night skyline' }
    ],
    reviews: { rating: 4.6, count: 145, tags: ['photography'], snippets: ['Great skyline views'] },
    coverImage: { url: '/images/roadmap/hankou-sunset.jpg', alt: 'Hankou Bund sunset' }
  },
  {
    id: 'wuhan-heritage-halfday',
    city: 'wuhan',
    title: 'Heritage Highlights · Half Day',
    landscape: ['heritage','urban'],
    bestSeason: ['spring','autumn'],
    duration: 'half-day',
    effort: 'low',
    photoScore: 3,
    highlights: ['Concession facades','Alley photo spots'],
    stops: [
      { time: '10:00', name: 'Old Concessions' },
      { time: '12:00', name: 'Lihuangpi Road' }
    ],
    reviews: { rating: 4.5, count: 96, tags: ['easy-pace'], snippets: ['Leisurely walk'] },
    coverImage: { url: '/images/roadmap/wuhan-heritage.jpg', alt: 'Heritage buildings' }
  },
  {
    id: 'wuhan-riverfront-halfday',
    city: 'wuhan',
    title: 'Riverfront Easy Walk · Half Day',
    landscape: ['urban','riverfront'],
    bestSeason: ['spring','summer','autumn'],
    duration: 'half-day',
    effort: 'low',
    photoScore: 3,
    highlights: ['Riverside parks','Bridges views'],
    stops: [
      { time: '09:00', name: 'Riverside Park' },
      { time: '11:00', name: 'Bridge lookout' }
    ],
    reviews: { rating: 4.4, count: 80, tags: ['family'], snippets: ['Relaxing route'] },
    coverImage: { url: '/images/roadmap/wuhan-bund.jpg', alt: 'Riverside view' }
  }
]

export const guides: Guide[] = [
  {
    id: 'guide-chen-001',
    city: 'wuhan',
    name: 'Mr. Chen',
    langs: ['Mandarin','English'],
    expertise: ['heritage','food','photography'],
    features: ['Senior-friendly pace','Avoid crowds','Rainy-day alternatives'],
    routes: ['wuhan-heritage-walking-1d'],
    reviews: { rating: 4.9, count: 182, snippet: 'Great angles for photos, engaging stories.' },
    avatar: '/images/logo.svg'
  },
  {
    id: 'guide-li-002',
    city: 'wuhan',
    name: 'Ms. Li',
    langs: ['Mandarin'],
    expertise: ['food','family'],
    features: ['Kid-friendly','Snack list expert'],
    routes: ['wuhan-food-morning-halfday'],
    reviews: { rating: 4.7, count: 120, snippet: 'Great for families and food lovers.' },
    avatar: '/images/logo.svg'
  },
  {
    id: 'guide-zhang-003',
    city: 'wuhan',
    name: 'Mr. Zhang',
    langs: ['Mandarin','English'],
    expertise: ['photography','urban'],
    features: ['Blue-hour shots','Hidden angles'],
    routes: ['wuhan-bund-sunset-1d','wuhan-riverfront-halfday'],
    reviews: { rating: 4.8, count: 95, snippet: 'Knows perfect evening spots.' },
    avatar: '/images/logo.svg'
  }
]


