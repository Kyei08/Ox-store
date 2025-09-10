import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Minus, Plus, Trash2, ShoppingCart, Heart, Truck, Shield } from "lucide-react";
import { useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: "1",
      title: "iPhone 13 Pro Max 256GB - Space Gray",
      price: 899.99,
      originalPrice: 1099.99,
      quantity: 1,
      image: "/placeholder.svg",
      seller: "TechWorld Store",
      shipping: "Free shipping",
      condition: "New"
    },
    {
      id: "2", 
      title: "Nike Air Jordan 1 Retro High OG",
      price: 179.99,
      originalPrice: 220.00,
      quantity: 1,
      image: "/placeholder.svg",
      seller: "Sneaker Paradise",
      shipping: "$8.99 shipping",
      condition: "New"
    },
    {
      id: "3",
      title: "Sony WH-1000XM4 Wireless Headphones",
      price: 249.99,
      originalPrice: 349.99,
      quantity: 2,
      image: "/placeholder.svg",
      seller: "Audio Electronics",
      shipping: "Free shipping",
      condition: "Refurbished"
    }
  ]);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity <= 0) return;
    setCartItems(items => 
      items.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = cartItems.some(item => item.shipping.includes("Free")) ? 0 : 8.99;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {cartItems.length === 0 ? (
          // Empty Cart State
          <div className="max-w-md mx-auto text-center py-16">
            <ShoppingCart className="h-24 w-24 mx-auto text-muted-foreground mb-6" />
            <h1 className="text-2xl font-bold text-card-foreground mb-4">
              Your cart is empty
            </h1>
            <p className="text-muted-foreground mb-6">
              Start shopping to add items to your cart
            </p>
            <Button onClick={() => window.location.href = "/"}>
              Continue Shopping
            </Button>
          </div>
        ) : (
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-card-foreground mb-8">
              Shopping Cart ({cartItems.length} items)
            </h1>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item) => (
                  <Card key={item.id}>
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row gap-4">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-24 h-24 object-cover rounded-lg"
                        />
                        
                        <div className="flex-1 space-y-3">
                          <div>
                            <h3 className="font-semibold text-card-foreground line-clamp-2">
                              {item.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              Sold by {item.seller}
                            </p>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge variant="secondary">{item.condition}</Badge>
                              <span className="text-sm text-green-600 flex items-center gap-1">
                                <Truck className="h-3 w-3" />
                                {item.shipping}
                              </span>
                            </div>
                          </div>

                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                            <div className="flex items-center gap-4">
                              <div className="flex items-center gap-3">
                                <span className="text-lg font-bold text-primary">
                                  ${item.price.toFixed(2)}
                                </span>
                                {item.originalPrice > item.price && (
                                  <span className="text-sm text-muted-foreground line-through">
                                    ${item.originalPrice.toFixed(2)}
                                  </span>
                                )}
                              </div>
                            </div>

                            <div className="flex items-center gap-4">
                              {/* Quantity Controls */}
                              <div className="flex items-center gap-2">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  disabled={item.quantity <= 1}
                                >
                                  <Minus className="h-3 w-3" />
                                </Button>
                                <span className="w-12 text-center font-medium">
                                  {item.quantity}
                                </span>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                >
                                  <Plus className="h-3 w-3" />
                                </Button>
                              </div>

                              {/* Actions */}
                              <div className="flex items-center gap-2">
                                <Button variant="ghost" size="sm">
                                  <Heart className="h-4 w-4" />
                                </Button>
                                <Button 
                                  variant="ghost" 
                                  size="sm"
                                  onClick={() => removeItem(item.id)}
                                  className="text-destructive hover:text-destructive"
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {/* Promo Code */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Promo Code</h3>
                    <div className="flex gap-2">
                      <Input placeholder="Enter promo code" className="flex-1" />
                      <Button variant="outline">Apply</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Order Summary */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tax</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <Button className="w-full mb-4" size="lg">
                      Proceed to Checkout
                    </Button>
                    <Button variant="outline" className="w-full">
                      Continue Shopping
                    </Button>

                    <div className="mt-6 space-y-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Shield className="h-4 w-4" />
                        <span>Secure checkout with SSL encryption</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Truck className="h-4 w-4" />
                        <span>Free returns within 30 days</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Accepted Payment Methods</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-4 gap-2">
                      {["Visa", "MC", "Amex", "PayPal"].map((method) => (
                        <div 
                          key={method}
                          className="h-8 bg-muted rounded flex items-center justify-center text-xs font-medium"
                        >
                          {method}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Cart;