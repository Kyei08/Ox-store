import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Truck, Plane, Package, Clock } from "lucide-react";

const Shipping = () => {
  const shippingMethods = [
    {
      name: "Standard Shipping",
      price: "Free",
      duration: "5-7 business days",
      icon: <Package className="h-6 w-6" />,
      description: "Free shipping on orders over $25"
    },
    {
      name: "Express Shipping", 
      price: "$9.99",
      duration: "2-3 business days",
      icon: <Truck className="h-6 w-6" />,
      description: "Faster delivery for urgent orders"
    },
    {
      name: "Overnight Shipping",
      price: "$24.99", 
      duration: "1 business day",
      icon: <Plane className="h-6 w-6" />,
      description: "Next business day delivery"
    }
  ];

  const internationalShipping = [
    { region: "Canada", time: "7-10 business days", cost: "$15.99" },
    { region: "Europe", time: "10-15 business days", cost: "$24.99" },
    { region: "Asia", time: "12-20 business days", cost: "$29.99" },
    { region: "Australia", time: "10-15 business days", cost: "$27.99" },
    { region: "Latin America", time: "15-25 business days", cost: "$32.99" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Shipping Information</h1>
            <p className="text-xl text-muted-foreground">
              Fast, reliable shipping options to get your orders delivered quickly
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 mb-12">
            {shippingMethods.map((method, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    {method.icon}
                  </div>
                  <CardTitle>{method.name}</CardTitle>
                  <CardDescription>{method.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary mb-2">{method.price}</div>
                  <div className="flex items-center justify-center text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    {method.duration}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid gap-8 lg:grid-cols-2 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Domestic Shipping (US)</CardTitle>
                <CardDescription>
                  Shipping within the United States
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Free Standard Shipping</span>
                    <Badge variant="secondary">Orders $25+</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Same-Day Delivery</span>
                    <Badge variant="outline">Select Cities</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Weekend Delivery</span>
                    <Badge variant="outline">Available</Badge>
                  </div>
                </div>
                
                <div className="pt-4 border-t">
                  <h4 className="font-semibold mb-2">Delivery Areas</h4>
                  <p className="text-sm text-muted-foreground">
                    We ship to all 50 states, including Alaska and Hawaii. 
                    PO Boxes and APO/FPO addresses are supported.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>International Shipping</CardTitle>
                <CardDescription>
                  We ship to over 200 countries worldwide
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {internationalShipping.map((shipping, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <div>
                        <span className="font-medium">{shipping.region}</span>
                        <div className="text-sm text-muted-foreground">{shipping.time}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">{shipping.cost}</div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="pt-4 border-t">
                  <p className="text-sm text-muted-foreground">
                    International shipping costs and delivery times may vary. 
                    Customs duties and taxes are the responsibility of the recipient.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Shipping Policies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-3">Processing Time</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>• Most orders ship within 1-2 business days</p>
                    <p>• Custom or personalized items may take 3-5 business days</p>
                    <p>• Pre-orders ship when items become available</p>
                    <p>• Orders placed after 2 PM ship the next business day</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Shipping Restrictions</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>• Some items cannot be shipped to certain locations</p>
                    <p>• Hazardous materials have special shipping requirements</p>
                    <p>• Large items may require freight shipping</p>
                    <p>• International shipments may be subject to import restrictions</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Track Your Package</CardTitle>
              <CardDescription>
                Once your order ships, you'll receive tracking information
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2">Tracking Methods</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>• Email notifications with tracking links</p>
                    <p>• SMS updates for delivery status</p>
                    <p>• Real-time tracking in your account</p>
                    <p>• Delivery confirmation with photo proof</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Delivery Options</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>• Signature required delivery</p>
                    <p>• Safe place delivery instructions</p>
                    <p>• Delivery to neighbors or pickup locations</p>
                    <p>• Reschedule delivery for your convenience</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Shipping;