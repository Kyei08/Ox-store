import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, ShoppingCart } from "lucide-react";
import { mockProducts } from "@/data/mockProducts";

const Wishlist = () => {
  // For demo purposes, showing first 6 products as wishlist items
  const wishlistItems = mockProducts.slice(0, 6);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">My Wishlist</h1>
              <p className="text-muted-foreground">
                {wishlistItems.length} items saved for later
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add All to Cart
              </Button>
              <Button variant="outline">
                Share Wishlist
              </Button>
            </div>
          </div>

          {wishlistItems.length === 0 ? (
            <Card className="text-center py-16">
              <CardContent>
                <div className="mx-auto w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-muted-foreground" />
                </div>
                <CardTitle className="mb-2">Your wishlist is empty</CardTitle>
                <CardDescription className="mb-4">
                  Start browsing and add items you love to your wishlist
                </CardDescription>
                <Button>
                  <a href="/search">Start Shopping</a>
                </Button>
              </CardContent>
            </Card>
          ) : (
            <>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
                {wishlistItems.map((product) => (
                  <div key={product.id} className="relative">
                    <ProductCard {...product} />
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute top-2 right-2 h-8 w-8 p-0 bg-background/80 backdrop-blur-sm"
                    >
                      <Heart className="h-4 w-4 fill-red-500 text-red-500" />
                    </Button>
                  </div>
                ))}
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Wishlist Tips</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="text-sm text-muted-foreground">
                      Get notified when items go on sale or drop in price
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="text-sm text-muted-foreground">
                      Share your wishlist with friends and family for gift ideas
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="text-sm text-muted-foreground">
                      Move items to cart when you're ready to purchase
                    </p>
                  </div>
                </CardContent>
              </Card>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Wishlist;