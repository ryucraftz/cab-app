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
    username: 'Rajesh Kumar',
    action: 'MERGED',
    timestamp: '2 mins ago',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    repoName: 'Ertiga Premium - Cab #KA-03-ME-4521',
  },
  {
    id: '2',
    username: 'Ananya Sharma',
    action: 'COMMIT',
    timestamp: '15 mins ago',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    repoName: 'Ertiga Classic - Cab #KA-05-MT-8812',
  },
  {
    id: '3',
    username: 'Vikram Singh',
    action: 'MERGED',
    timestamp: '1 hour ago',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    repoName: 'Ertiga Luxury - Cab #KA-01-MJ-9041',
  },
];

export const ertigaCabs = [
  {
    id: 'ertiga-premium',
    name: 'Ertiga Premium Cruise',
    type: 'Premium 6-Seater SUV',
    pricePerKm: '₹18/km',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=400&auto=format&fit=crop&q=80',
    features: ['Plush Leather Seats', 'Dual Zone AC', 'Complimentary Water', 'Experienced Captain'],
  },
  {
    id: 'ertiga-classic',
    name: 'Ertiga Classic Comfort',
    type: 'Standard 6-Seater SUV',
    pricePerKm: '₹14/km',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=400&auto=format&fit=crop&q=80',
    features: ['Comfortable Seating', 'AC', 'USB Charger', 'Professional Driver'],
  },
];
