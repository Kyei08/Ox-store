import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Zap } from "lucide-react";

const FeaturedSection = () => {
  return (
    <section className="py-8 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-transparent" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main featured deal */}
          <Card className="lg:col-span-2 overflow-hidden">
            <CardContent className="p-0">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=400&fit=crop"
                  alt="Featured Deal"
                  className="w-full h-64 lg:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-center p-8 text-white">
                  <Badge className="w-fit mb-4 bg-marketplace-red">
                    <Zap className="h-3 w-3 mr-1" />
                    Lightning Deal
                  </Badge>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-2">
                    iPhone 15 Pro Max
                  </h2>
                  <p className="text-lg mb-4 opacity-90">
                    Latest model with titanium design
                  </p>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-2xl font-bold">$999.99</span>
                    <span className="text-lg line-through opacity-60">$1,199.99</span>
                    <Badge variant="destructive">17% off</Badge>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">Ends in 4h 23m</span>
                  </div>
                  <Button className="w-fit bg-white text-black hover:bg-white/90 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold">
                    Shop Now
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Side deals */}
          <div className="space-y-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&h=200&fit=crop"
                    alt="Nike Shoes"
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-sm mb-2">Nike Air Jordan</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-bold text-primary">$149.99</span>
                      <Badge variant="outline" className="text-xs">25% off</Badge>
                    </div>
                    <Button size="sm" className="w-full hover:shadow-md transition-all duration-200">Buy Now</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop"
                    alt="Watch"
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-sm mb-2">Smart Watch Pro</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-bold text-primary">$199.99</span>
                      <Badge variant="outline" className="text-xs">30% off</Badge>
                    </div>
                    <Button size="sm" className="w-full hover:shadow-md transition-all duration-200">Buy Now</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=200&h=200&fit=crop"
                    alt="Headphones"
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-sm mb-2">Wireless Headphones</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-bold text-primary">$79.99</span>
                      <Badge variant="outline" className="text-xs">20% off</Badge>
                    </div>
                    <Button size="sm" className="w-full hover:shadow-md transition-all duration-200">Buy Now</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;