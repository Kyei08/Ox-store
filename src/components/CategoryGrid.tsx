import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

interface Category {
  id: string;
  name: string;
  image: string;
  itemCount: number;
}

const categories: Category[] = [
  {
    id: "electronics",
    name: "Electronics",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=300&h=200&fit=crop",
    itemCount: 12543
  },
  {
    id: "fashion",
    name: "Fashion",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=200&fit=crop",
    itemCount: 8921
  },
  {
    id: "home",
    name: "Home & Garden",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop",
    itemCount: 6754
  },
  {
    id: "sports",
    name: "Sports",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop",
    itemCount: 4532
  },
  {
    id: "motors",
    name: "Motors",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=300&h=200&fit=crop",
    itemCount: 3421
  },
  {
    id: "toys",
    name: "Toys & Games",
    image: "https://images.unsplash.com/photo-1558877385-bdb5b9567a87?w=300&h=200&fit=crop",
    itemCount: 2876
  },
  {
    id: "books",
    name: "Books",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=200&fit=crop",
    itemCount: 5643
  },
  {
    id: "music",
    name: "Music",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=200&fit=crop",
    itemCount: 1987
  }
];

const CategoryGrid = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryName: string) => {
    navigate(`/search?category=${encodeURIComponent(categoryName)}`);
  };

  return (
    <section className="py-8 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-card-foreground">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((category) => (
            <Card 
              key={category.id} 
              className="group cursor-pointer hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/30 transform hover:-translate-y-1"
              onClick={() => handleCategoryClick(category.name)}
            >
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden rounded-t-lg relative">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-3 text-center">
                  <h3 className="font-medium text-sm text-card-foreground group-hover:text-primary transition-colors duration-200">
                    {category.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    {category.itemCount.toLocaleString()} items
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;