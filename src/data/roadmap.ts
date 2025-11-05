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
      url: '/images/experiences/west-lake.jpg',
      alt: 'Jianghan Road clock tower at dusk'
    }
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
  }
]


