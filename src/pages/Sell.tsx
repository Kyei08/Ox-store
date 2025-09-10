import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, DollarSign, Package, Truck } from "lucide-react";

const Sell = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-card-foreground mb-4">
              Start Selling Today
            </h1>
            <p className="text-lg text-muted-foreground">
              List your item and reach millions of buyers
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Package className="h-5 w-5" />
                    Item Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Photos */}
                  <div>
                    <Label htmlFor="photos" className="text-base font-medium">Photos</Label>
                    <div className="mt-2 border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                      <Upload className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                      <p className="text-muted-foreground mb-2">Add up to 12 photos</p>
                      <Button variant="outline">Choose Photos</Button>
                    </div>
                  </div>

                  {/* Title */}
                  <div>
                    <Label htmlFor="title" className="text-base font-medium">Title</Label>
                    <Input 
                      id="title" 
                      placeholder="What are you selling?"
                      className="mt-2"
                    />
                  </div>

                  {/* Category */}
                  <div>
                    <Label htmlFor="category" className="text-base font-medium">Category</Label>
                    <Select>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="electronics">Electronics</SelectItem>
                        <SelectItem value="fashion">Fashion</SelectItem>
                        <SelectItem value="home">Home & Garden</SelectItem>
                        <SelectItem value="motors">Motors</SelectItem>
                        <SelectItem value="sports">Sports</SelectItem>
                        <SelectItem value="toys">Toys</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Condition */}
                  <div>
                    <Label htmlFor="condition" className="text-base font-medium">Condition</Label>
                    <Select>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select condition" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new">New</SelectItem>
                        <SelectItem value="like-new">Like New</SelectItem>
                        <SelectItem value="good">Good</SelectItem>
                        <SelectItem value="fair">Fair</SelectItem>
                        <SelectItem value="poor">For parts or not working</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Description */}
                  <div>
                    <Label htmlFor="description" className="text-base font-medium">Description</Label>
                    <Textarea 
                      id="description" 
                      placeholder="Describe your item in detail..."
                      className="mt-2 min-h-[120px]"
                    />
                  </div>

                  {/* Price */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="price" className="text-base font-medium">Price</Label>
                      <div className="relative mt-2">
                        <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input 
                          id="price" 
                          placeholder="0.00"
                          className="pl-10"
                          type="number"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="format" className="text-base font-medium">Format</Label>
                      <Select>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select format" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fixed">Fixed Price</SelectItem>
                          <SelectItem value="auction">Auction</SelectItem>
                          <SelectItem value="best-offer">Best Offer</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Shipping */}
                  <div>
                    <Label className="text-base font-medium flex items-center gap-2">
                      <Truck className="h-4 w-4" />
                      Shipping
                    </Label>
                    <div className="mt-2 space-y-3">
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <span>Free standard shipping</span>
                        <Button variant="outline" size="sm">Edit</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Selling Tips</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm">
                  <div>
                    <h4 className="font-medium mb-2">Great photos sell</h4>
                    <p className="text-muted-foreground">Use natural lighting and show all angles</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Detailed descriptions</h4>
                    <p className="text-muted-foreground">Include size, condition, and unique features</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Competitive pricing</h4>
                    <p className="text-muted-foreground">Research similar items to price competitively</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Fees</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span>Listing fee</span>
                      <span className="text-green-600">Free</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Final value fee</span>
                      <span>12.9% of sale price</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Payment processing</span>
                      <span>2.9% + $0.30</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Button className="w-full" size="lg">
                List Item
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Sell;