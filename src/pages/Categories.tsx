import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { mockProducts } from "@/data/mockProducts";
import { useSearchParams } from "react-router-dom";

const Categories = () => {
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category") || "All Categories";

  const categories = [
    "All Categories",
    "Electronics",
    "Fashion",
    "Home & Garden",
    "Motors",
    "Sports",
    "Toys",
    "Books",
    "Music",
    "Health & Beauty",
    "Collectibles",
    "Art"
  ];

  const filteredProducts = selectedCategory === "All Categories" 
    ? mockProducts 
    : mockProducts.filter(product => 
        product.title.toLowerCase().includes(selectedCategory.toLowerCase()) ||
        product.seller.toLowerCase().includes(selectedCategory.toLowerCase())
      );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Categories Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-lg font-semibold mb-4 text-card-foreground">Categories</h2>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div
                    key={category}
                    className={`p-2 rounded cursor-pointer transition-colors ${
                      selectedCategory === category
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted text-muted-foreground hover:text-foreground"
                    }`}
                    onClick={() => {
                      const params = new URLSearchParams();
                      if (category !== "All Categories") {
                        params.set("category", category);
                      }
                      window.history.pushState({}, "", `/categories?${params.toString()}`);
                      window.location.reload();
                    }}
                  >
                    {category}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-card-foreground mb-2">
                {selectedCategory}
              </h1>
              <p className="text-muted-foreground">
                {filteredProducts.length} items found
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  image={product.image}
                  rating={product.rating}
                  reviewCount={product.reviewCount}
                  seller={product.seller}
                  condition={product.condition}
                  shipping={product.shipping}
                  isAuction={product.isAuction}
                  timeLeft={product.timeLeft}
                  currentBid={product.currentBid}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Categories;