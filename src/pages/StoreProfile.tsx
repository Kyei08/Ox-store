import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Star, 
  MapPin, 
  Calendar, 
  Package, 
  MessageCircle,
  Heart,
  Shield,
  TrendingUp
} from "lucide-react";
import { mockProducts } from "@/data/mockProducts";

const StoreProfile = () => {
  // For demo purposes, showing first 8 products as store items
  const storeProducts = mockProducts.slice(0, 8);
  
  const storeInfo = {
    name: "TechGadget Store",
    description: "Your trusted source for the latest tech gadgets and accessories. We specialize in high-quality electronics with fast shipping and excellent customer service.",
    avatar: "/placeholder.svg",
    rating: 4.8,
    totalReviews: 1247,
    memberSince: "2019-03-15",
    location: "San Francisco, CA",
    totalSales: 5420,
    responseRate: 98,
    responseTime: "Within 2 hours"
  };

  const reviews = [
    {
      id: 1,
      reviewer: "Sarah M.",
      rating: 5,
      comment: "Excellent quality products and super fast shipping! Highly recommended.",
      date: "2024-01-10",
      verified: true
    },
    {
      id: 2,
      reviewer: "Mike R.",
      rating: 5,
      comment: "Great communication and exactly as described. Will buy again!",
      date: "2024-01-08",
      verified: true
    },
    {
      id: 3,
      reviewer: "Emma T.",
      rating: 4,
      comment: "Good product, arrived quickly. Minor packaging issue but overall satisfied.",
      date: "2024-01-05",
      verified: true
    }
  ];

  const policies = {
    shipping: "Free shipping on orders over $25. Standard shipping 3-5 business days, Express 1-2 business days.",
    returns: "30-day return policy. Items must be in original condition with tags attached.",
    exchanges: "Free exchanges within 30 days for size or color changes."
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8 lg:grid-cols-4">
            {/* Store Info Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-4">
                <CardHeader className="text-center">
                  <Avatar className="w-20 h-20 mx-auto mb-4">
                    <AvatarImage src={storeInfo.avatar} alt={storeInfo.name} />
                    <AvatarFallback>{storeInfo.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <CardTitle>{storeInfo.name}</CardTitle>
                  <div className="flex items-center justify-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{storeInfo.rating}</span>
                    <span className="text-muted-foreground">({storeInfo.totalReviews} reviews)</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{storeInfo.description}</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-sm">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{storeInfo.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>Member since {new Date(storeInfo.memberSince).getFullYear()}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Package className="h-4 w-4 text-muted-foreground" />
                      <span>{storeInfo.totalSales.toLocaleString()} sales</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-primary">{storeInfo.responseRate}%</div>
                      <div className="text-xs text-muted-foreground">Response Rate</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-primary">2h</div>
                      <div className="text-xs text-muted-foreground">Avg Response</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Button className="w-full">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Contact Seller
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Heart className="h-4 w-4 mr-2" />
                      Follow Store
                    </Button>
                  </div>

                  <div className="flex items-center justify-center space-x-2 text-sm text-green-600">
                    <Shield className="h-4 w-4" />
                    <span>Verified Seller</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <Tabs defaultValue="products" className="space-y-6">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="products">Products ({storeProducts.length})</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews ({storeInfo.totalReviews})</TabsTrigger>
                  <TabsTrigger value="policies">Store Policies</TabsTrigger>
                </TabsList>

                <TabsContent value="products" className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold">Store Products</h2>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        Sort by: Newest
                      </Button>
                    </div>
                  </div>
                  
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {storeProducts.map((product) => (
                      <ProductCard key={product.id} {...product} />
                    ))}
                  </div>
                  
                  <div className="text-center">
                    <Button variant="outline">Load More Products</Button>
                  </div>
                </TabsContent>

                <TabsContent value="reviews" className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold">Customer Reviews</h2>
                    <div className="text-right">
                      <div className="flex items-center space-x-2">
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        <span className="text-xl font-bold">{storeInfo.rating}</span>
                        <span className="text-muted-foreground">out of 5</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{storeInfo.totalReviews} total reviews</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {reviews.map((review) => (
                      <Card key={review.id}>
                        <CardContent className="pt-6">
                          <div className="flex items-start justify-between">
                            <div className="flex items-center space-x-3">
                              <Avatar className="w-10 h-10">
                                <AvatarFallback>{review.reviewer.substring(0, 2)}</AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="flex items-center space-x-2">
                                  <span className="font-semibold">{review.reviewer}</span>
                                  {review.verified && (
                                    <Badge variant="secondary" className="text-xs">
                                      <Shield className="h-3 w-3 mr-1" />
                                      Verified
                                    </Badge>
                                  )}
                                </div>
                                <div className="flex items-center space-x-1">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`h-4 w-4 ${
                                        i < review.rating
                                          ? "fill-yellow-400 text-yellow-400"
                                          : "text-gray-300"
                                      }`}
                                    />
                                  ))}
                                </div>
                              </div>
                            </div>
                            <span className="text-sm text-muted-foreground">
                              {new Date(review.date).toLocaleDateString()}
                            </span>
                          </div>
                          <p className="mt-3 text-muted-foreground">{review.comment}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  
                  <div className="text-center">
                    <Button variant="outline">Load More Reviews</Button>
                  </div>
                </TabsContent>

                <TabsContent value="policies" className="space-y-6">
                  <h2 className="text-2xl font-bold">Store Policies</h2>
                  
                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                          <Package className="h-5 w-5" />
                          <span>Shipping Policy</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{policies.shipping}</p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                          <TrendingUp className="h-5 w-5" />
                          <span>Return Policy</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{policies.returns}</p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                          <MessageCircle className="h-5 w-5" />
                          <span>Exchange Policy</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{policies.exchanges}</p>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default StoreProfile;