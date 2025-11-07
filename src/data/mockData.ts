// Mock data for orders, rewards, and user information

export interface Order {
  id: string;
  date: string;
  items: Array<{
    id: string;
    name: string;
    price: number;
    quantity: number;
    carbonFootprint: number;
    image: string;
  }>;
  total: number;
  totalCarbon: number;
  status: "Delivered" | "In Transit" | "Processing" | "Cancelled";
  earnedPoints: number;
}

export interface Reward {
  id: string;
  name: string;
  description: string;
  pointsCost: number;
  discount: number;
  icon: string;
  available: boolean;
}

export interface CarbonData {
  date: string;
  carbon: number;
  orders: number;
}

export const mockOrders: Order[] = [
  {
    id: "ORD-2025-001",
    date: "2025-01-15",
    items: [
      {
        id: "1",
        name: "Organic Cotton T-Shirt",
        price: 29.99,
        quantity: 2,
        carbonFootprint: 2.5,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
      },
      {
        id: "4",
        name: "Recycled Paper Notebook",
        price: 12.99,
        quantity: 1,
        carbonFootprint: 0.8,
        image: "https://images.unsplash.com/photo-1517842536516-ef5594e4cf05",
      },
    ],
    total: 72.97,
    totalCarbon: 5.8,
    status: "Delivered",
    earnedPoints: 50,
  },
  {
    id: "ORD-2025-002",
    date: "2025-01-10",
    items: [
      {
        id: "2",
        name: "Bamboo Water Bottle",
        price: 24.99,
        quantity: 1,
        carbonFootprint: 1.2,
        image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8",
      },
      {
        id: "5",
        name: "Hemp Backpack",
        price: 59.99,
        quantity: 1,
        carbonFootprint: 4.2,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
      },
    ],
    total: 84.98,
    totalCarbon: 5.4,
    status: "In Transit",
    earnedPoints: 50,
  },
  {
    id: "ORD-2025-003",
    date: "2025-01-05",
    items: [
      {
        id: "6",
        name: "Bamboo Toothbrush Set",
        price: 15.99,
        quantity: 2,
        carbonFootprint: 0.5,
        image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04",
      },
    ],
    total: 31.98,
    totalCarbon: 1.0,
    status: "Delivered",
    earnedPoints: 60,
  },
];

export const mockRewards: Reward[] = [
  {
    id: "RWD-001",
    name: "Green Discount Card",
    description: "Get 10% off on all eco-friendly products",
    pointsCost: 100,
    discount: 10,
    icon: "🌿",
    available: true,
  },
  {
    id: "RWD-002",
    name: "Free Shipping Voucher",
    description: "Free carbon-neutral shipping on your next order",
    pointsCost: 50,
    discount: 0,
    icon: "📦",
    available: true,
  },
  {
    id: "RWD-003",
    name: "Eco Warrior Badge",
    description: "Exclusive badge for your profile + 15% discount",
    pointsCost: 200,
    discount: 15,
    icon: "🏆",
    available: true,
  },
  {
    id: "RWD-004",
    name: "Planet Protector Premium",
    description: "Premium membership with exclusive benefits",
    pointsCost: 500,
    discount: 25,
    icon: "🌍",
    available: false,
  },
];

// Carbon data for the last 12 weeks
export const mockCarbonData: CarbonData[] = [
  { date: "Week 1", carbon: 8.5, orders: 2 },
  { date: "Week 2", carbon: 12.3, orders: 3 },
  { date: "Week 3", carbon: 5.8, orders: 1 },
  { date: "Week 4", carbon: 15.2, orders: 4 },
  { date: "Week 5", carbon: 9.1, orders: 2 },
  { date: "Week 6", carbon: 6.4, orders: 2 },
  { date: "Week 7", carbon: 11.8, orders: 3 },
  { date: "Week 8", carbon: 7.2, orders: 2 },
  { date: "Week 9", carbon: 13.5, orders: 3 },
  { date: "Week 10", carbon: 5.4, orders: 1 },
  { date: "Week 11", carbon: 10.2, orders: 3 },
  { date: "Week 12", carbon: 5.8, orders: 2 },
];

export const getWishlistItems = () => {
  const wishlist = localStorage.getItem("wishlist");
  return wishlist ? JSON.parse(wishlist) : [];
};

export const addToWishlist = (productId: string) => {
  const wishlist = getWishlistItems();
  if (!wishlist.includes(productId)) {
    wishlist.push(productId);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }
};

export const removeFromWishlist = (productId: string) => {
  const wishlist = getWishlistItems();
  const updated = wishlist.filter((id: string) => id !== productId);
  localStorage.setItem("wishlist", JSON.stringify(updated));
};
