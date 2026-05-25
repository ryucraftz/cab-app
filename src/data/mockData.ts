export interface CabActivity {
  readonly id: string;
  readonly username: string;
  readonly action: 'MERGED' | 'COMMIT'; // As per the Gold Standard card specification
  readonly timestamp: string;
  readonly avatarUrl: string;
  readonly repoName: string;
}

export const cardData: CabActivity[] = [
  {
    id: '1',
    username: 'Rohan Deshmukh',
    action: 'MERGED',
    timestamp: '2 hours ago',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    repoName: 'Pune to Mumbai T2 Airport Drop',
  },
  {
    id: '2',
    username: 'Priya Kulkarni',
    action: 'COMMIT',
    timestamp: '5 hours ago',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    repoName: 'Mumbai to Pune (Kothrud) Drop',
  },
  {
    id: '3',
    username: 'Amit Patel',
    action: 'MERGED',
    timestamp: '1 day ago',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    repoName: 'Pune to Navi Mumbai Round Trip',
  },
];

export const ertigaCabs = [
  {
    id: 'my-ertiga',
    name: 'My Premium Ertiga',
    type: 'Personalized 6-Seater SUV',
    pricePerKm: 'Fixed Route Rates',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=400&auto=format&fit=crop&q=80',
    features: ['Driven by Owner', 'Immaculate Condition', 'Spacious & Comfortable', 'Safe & Reliable'],
  }
];
