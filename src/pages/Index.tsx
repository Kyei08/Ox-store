import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeaturedSection from "@/components/FeaturedSection";
import CategoryGrid from "@/components/CategoryGrid";
import ProductCard from "@/components/ProductCard";
import { mockProducts } from "@/data/mockProducts";

const Index = () => {
  const featuredProducts = mockProducts.slice(0, 8);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Featured deals section */}
      <FeaturedSection />
      
      {/* Categories */}
      <CategoryGrid />
      
      {/* Popular products */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-card-foreground">Popular This Week</h2>
            <span className="text-primary font-medium cursor-pointer hover:underline">
              View all
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {featuredProducts.map((product) => (
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
      </section>

      {/* Auction highlights */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-card-foreground">Live Auctions</h2>
            <span className="text-primary font-medium cursor-pointer hover:underline">
              View all auctions
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {mockProducts.filter(p => p.isAuction).map((product) => (
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
      </section>

      <Footer />
    </div>
  );
};

export default Index;
