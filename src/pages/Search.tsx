import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Filter, Grid, List, ChevronDown } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { mockProducts } from "@/data/mockProducts";

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const category = searchParams.get("category") || "";
  
  const [sortBy, setSortBy] = useState("relevance");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);
  
  // Filter products based on search query and category
  const filteredProducts = mockProducts.filter(product => {
    const matchesQuery = query === "" || 
      product.title.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase());
    
    const matchesCategory = category === "" || 
      product.category.toLowerCase().includes(category.toLowerCase());
    
    return matchesQuery && matchesCategory;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "newest":
        return 0; // Would sort by date in real app
      default:
        return 0; // relevance
    }
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-6">
        {/* Search Results Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-card-foreground">
              {query ? `Search results for "${query}"` : "All Products"}
              {category && (
                <Badge variant="outline" className="ml-2">
                  {category}
                </Badge>
              )}
            </h1>
            <p className="text-muted-foreground mt-1">
              {sortedProducts.length} results found
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Sort dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-border rounded px-3 py-2 pr-8 bg-background"
              >
                <option value="relevance">Best Match</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest First</option>
              </select>
            </div>
            
            {/* View mode toggle */}
            <div className="flex border border-border rounded">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="rounded-r-none"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
                className="rounded-l-none"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="flex gap-6">
          {/* Filters Sidebar */}
          <aside className={`w-64 space-y-6 ${showFilters ? "block" : "hidden lg:block"}`}>
            <Card>
              <CardContent className="p-4">
                <h3 className="font-bold mb-4 flex items-center">
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </h3>
                
                {/* Price Range */}
                <div className="space-y-3 mb-6">
                  <h4 className="font-medium">Price</h4>
                  <div className="space-y-2">
                    {[
                      { label: "Under $25", count: 234 },
                      { label: "$25 - $50", count: 156 },
                      { label: "$50 - $100", count: 89 },
                      { label: "$100 - $200", count: 67 },
                      { label: "Over $200", count: 145 }
                    ].map((price, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Checkbox id={`price-${index}`} />
                        <label 
                          htmlFor={`price-${index}`} 
                          className="text-sm cursor-pointer flex-1"
                        >
                          {price.label}
                        </label>
                        <span className="text-xs text-muted-foreground">
                          ({price.count})
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Condition */}
                <div className="space-y-3 mb-6">
                  <h4 className="font-medium">Condition</h4>
                  <div className="space-y-2">
                    {[
                      { label: "New", count: 345 },
                      { label: "Used", count: 123 },
                      { label: "Refurbished", count: 67 }
                    ].map((condition, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Checkbox id={`condition-${index}`} />
                        <label 
                          htmlFor={`condition-${index}`} 
                          className="text-sm cursor-pointer flex-1"
                        >
                          {condition.label}
                        </label>
                        <span className="text-xs text-muted-foreground">
                          ({condition.count})
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Shipping */}
                <div className="space-y-3">
                  <h4 className="font-medium">Shipping</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="free-shipping" />
                      <label htmlFor="free-shipping" className="text-sm cursor-pointer">
                        Free shipping
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="fast-shipping" />
                      <label htmlFor="fast-shipping" className="text-sm cursor-pointer">
                        Fast & Free (2-day)
                      </label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Mobile filter toggle */}
            <Button
              variant="outline"
              className="lg:hidden mb-4 w-full"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="h-4 w-4 mr-2" />
              {showFilters ? "Hide" : "Show"} Filters
              <ChevronDown className="h-4 w-4 ml-2" />
            </Button>

            {/* Products Grid/List */}
            {sortedProducts.length === 0 ? (
              <Card>
                <CardContent className="p-8 text-center">
                  <h3 className="text-lg font-medium mb-2">No results found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search or filters to find what you're looking for.
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div 
                className={
                  viewMode === "grid" 
                    ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
                    : "space-y-4"
                }
              >
                {sortedProducts.map((product) => (
                  <div key={product.id} className={viewMode === "list" ? "flex" : ""}>
                    <ProductCard
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
                  </div>
                ))}
              </div>
            )}

            {/* Pagination */}
            {sortedProducts.length > 0 && (
              <div className="flex justify-center mt-8">
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" disabled>
                    Previous
                  </Button>
                  <Button variant="default" size="sm">1</Button>
                  <Button variant="outline" size="sm">2</Button>
                  <Button variant="outline" size="sm">3</Button>
                  <span className="text-muted-foreground px-2">...</span>
                  <Button variant="outline" size="sm">10</Button>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Search;