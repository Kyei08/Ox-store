export interface Product {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  seller: string;
  condition: "new" | "used" | "refurbished";
  shipping: string;
  isAuction?: boolean;
  timeLeft?: string;
  currentBid?: number;
  category: string;
  description: string;
  images: string[];
}

export const mockProducts: Product[] = [
  {
    id: "1",
    title: "iPhone 15 Pro 256GB - Natural Titanium",
    price: 1099.99,
    originalPrice: 1199.99,
    image: "https://images.unsplash.com/photo-1696446200811-93bcf7703f85?w=400&h=400&fit=crop",
    rating: 4.8,
    reviewCount: 2543,
    seller: "TechWorld Store",
    condition: "new",
    shipping: "Free shipping",
    category: "Electronics",
    description: "Latest iPhone with titanium design and advanced camera system",
    images: [
      "https://images.unsplash.com/photo-1696446200811-93bcf7703f85?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop"
    ]
  },
  {
    id: "2",
    title: "Nike Air Jordan 1 Retro High OG",
    price: 170.00,
    originalPrice: 200.00,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    rating: 4.6,
    reviewCount: 1287,
    seller: "Sneaker Paradise",
    condition: "new",
    shipping: "Free shipping",
    category: "Fashion",
    description: "Classic basketball shoes with premium leather construction",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop"
    ]
  },
  {
    id: "3",
    title: "MacBook Pro 14-inch M3 Chip",
    price: 1999.99,
    originalPrice: 2199.99,
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=400&fit=crop",
    rating: 4.9,
    reviewCount: 892,
    seller: "Apple Authorized",
    condition: "new",
    shipping: "Free shipping",
    category: "Electronics",
    description: "Professional laptop with M3 chip for ultimate performance",
    images: [
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop"
    ]
  },
  {
    id: "4",
    title: "Sony WH-1000XM5 Wireless Headphones",
    price: 349.99,
    originalPrice: 399.99,
    image: "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=400&h=400&fit=crop",
    rating: 4.7,
    reviewCount: 3421,
    seller: "Audio Excellence",
    condition: "new",
    shipping: "Free shipping",
    category: "Electronics",
    description: "Industry-leading noise cancellation with premium sound quality",
    images: [
      "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop"
    ]
  },
  {
    id: "5",
    title: "Vintage Rolex Submariner",
    price: 8500.00,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    rating: 4.9,
    reviewCount: 156,
    seller: "Luxury Timepieces",
    condition: "used",
    shipping: "Insured shipping",
    isAuction: true,
    timeLeft: "2d 14h 32m",
    currentBid: 8500.00,
    category: "Fashion",
    description: "Authentic vintage Rolex Submariner in excellent condition",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=400&h=400&fit=crop"
    ]
  },
  {
    id: "6",
    title: "Samsung 65\" QLED 4K Smart TV",
    price: 899.99,
    originalPrice: 1199.99,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop",
    rating: 4.5,
    reviewCount: 743,
    seller: "Electronics Hub",
    condition: "new",
    shipping: "Free shipping",
    category: "Electronics",
    description: "Quantum Dot technology with vibrant colors and smart features",
    images: [
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1586165368502-1bad197a6461?w=400&h=400&fit=crop"
    ]
  },
  {
    id: "7",
    title: "Adidas Ultraboost 22 Running Shoes",
    price: 89.99,
    originalPrice: 180.00,
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
    rating: 4.4,
    reviewCount: 2156,
    seller: "Sport Zone",
    condition: "new",
    shipping: "Free shipping",
    category: "Sports",
    description: "Revolutionary running shoes with boost technology",
    images: [
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1562183241-b937e95585b6?w=400&h=400&fit=crop"
    ]
  },
  {
    id: "8",
    title: "KitchenAid Stand Mixer",
    price: 299.99,
    originalPrice: 379.99,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
    rating: 4.8,
    reviewCount: 1834,
    seller: "Kitchen Essentials",
    condition: "new",
    shipping: "Free shipping",
    category: "Home & Garden",
    description: "Professional-grade stand mixer for all your baking needs",
    images: [
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop"
    ]
  }
];

export const getProductsByCategory = (category: string) => {
  return mockProducts.filter(product => 
    product.category.toLowerCase().includes(category.toLowerCase())
  );
};

export const getProductById = (id: string) => {
  return mockProducts.find(product => product.id === id);
};