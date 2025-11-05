export type CityOption = {
  id: string;
  name: string;
  region: 'north' | 'south' | 'central' | 'hongkong' | 'southwest' | 'east';
};

export type Recommendation = {
  id: string;
  cityId: string; // relates to CityOption.id
  type: 'tour' | 'guide';
  title: string;
  subtitle?: string;
  features: string[];
  priceCny: number;
  rating: number; // 0-5
  reviewsCount: number;
  reviewSnippet: string;
  image: string;
  targetGoals: Array<'food' | 'culture' | 'nature' | 'city'>;
  minPeople: number;
  maxPeople: number;
  budgetLevel: 'budget' | 'mid' | 'luxury';
};

export const cities: CityOption[] = [
  { id: 'wuhan', name: 'Wuhan', region: 'central' },
  { id: 'beijing', name: 'Beijing', region: 'north' },
  { id: 'chengdu', name: 'Chengdu', region: 'central' },
  { id: 'guangzhou', name: 'Guangzhou', region: 'south' },
  { id: 'hongkong', name: 'Hong Kong', region: 'hongkong' },
  { id: 'hangzhou', name: 'Hangzhou', region: 'east' },
  { id: 'xian', name: "Xi'an", region: 'north' },
  { id: 'zhangjiajie', name: 'Zhangjiajie', region: 'southwest' },
];

export const recommendations: Recommendation[] = [
  {
    id: 'wuhan-food-1',
    cityId: 'wuhan',
    type: 'tour',
    title: 'Wuhan Morning Food Tour: Hot-Dry Noodles & Market Walk',
    subtitle: '3 hours • Local market + breakfast classics',
    features: ['Hot Dry Noodles', 'Sesame sauce tasting', 'Local market'],
    priceCny: 168,
    rating: 4.8,
    reviewsCount: 237,
    reviewSnippet: 'Great pacing and authentic flavors—felt like a local breakfast!',
    image: '/images/food/hot-dry-noodles.jpg',
    targetGoals: ['food', 'city'],
    minPeople: 1,
    maxPeople: 8,
    budgetLevel: 'budget',
  },
  {
    id: 'wuhan-guide-1',
    cityId: 'wuhan',
    type: 'guide',
    title: 'Private Local Guide: Hankou Concessions & Riverside',
    subtitle: 'Half-day • History & architecture',
    features: ['Concession heritage', 'Riverside trail', 'Photo spots'],
    priceCny: 399,
    rating: 4.9,
    reviewsCount: 121,
    reviewSnippet: 'Informative and friendly—knew hidden alleys and great snack stops.',
    image: '/images/experiences/shadow-puppet.jpg',
    targetGoals: ['culture', 'city'],
    minPeople: 1,
    maxPeople: 6,
    budgetLevel: 'mid',
  },
  {
    id: 'chengdu-food-1',
    cityId: 'chengdu',
    type: 'tour',
    title: 'Chengdu Spicy Night: Hotpot & Opera Face-changing',
    subtitle: 'Evening • Food + Culture',
    features: ['Sichuan hotpot', 'Face-changing show', 'Tea house'],
    priceCny: 298,
    rating: 4.7,
    reviewsCount: 402,
    reviewSnippet: 'Spicy and spectacular—great combo for first-timers!',
    image: '/images/experiences/chengdu-museum.jpg',
    targetGoals: ['food', 'culture'],
    minPeople: 1,
    maxPeople: 10,
    budgetLevel: 'mid',
  },
  {
    id: 'beijing-culture-1',
    cityId: 'beijing',
    type: 'tour',
    title: 'Old Beijing Hutong Bite & Bike',
    subtitle: 'Half-day • Hutong stories + snacks',
    features: ['Hutong lanes', 'Local snacks', 'Courtyard visit'],
    priceCny: 220,
    rating: 4.6,
    reviewsCount: 188,
    reviewSnippet: 'Loved the stories and snack stops—family friendly.',
    image: '/images/experiences/terracotta-warriors.jpg',
    targetGoals: ['culture', 'city', 'food'],
    minPeople: 1,
    maxPeople: 12,
    budgetLevel: 'budget',
  },
];


