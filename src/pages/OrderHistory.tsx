import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Package, Truck, CheckCircle, Clock, ArrowRight } from "lucide-react";

const OrderHistory = () => {
  const orders = [
    {
      id: "ORD-001",
      date: "2024-01-15",
      status: "delivered",
      total: 129.99,
      items: [
        { name: "Wireless Headphones", price: 79.99, quantity: 1 },
        { name: "Phone Case", price: 24.99, quantity: 2 }
      ],
      trackingNumber: "1Z999AA1234567890"
    },
    {
      id: "ORD-002", 
      date: "2024-01-10",
      status: "shipped",
      total: 89.99,
      items: [
        { name: "Bluetooth Speaker", price: 89.99, quantity: 1 }
      ],
      trackingNumber: "1Z999AA1234567891"
    },
    {
      id: "ORD-003",
      date: "2024-01-05", 
      status: "processing",
      total: 199.99,
      items: [
        { name: "Smart Watch", price: 199.99, quantity: 1 }
      ],
      trackingNumber: null
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "delivered":
        return <CheckCircle className="h-4 w-4" />;
      case "shipped":
        return <Truck className="h-4 w-4" />;
      case "processing":
        return <Clock className="h-4 w-4" />;
      default:
        return <Package className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered":
        return "default";
      case "shipped":
        return "secondary";
      case "processing":
        return "outline";
      default:
        return "outline";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">Order History</h1>
            <p className="text-muted-foreground">
              Track and manage your recent orders
            </p>
          </div>

          {orders.length === 0 ? (
            <Card className="text-center py-16">
              <CardContent>
                <div className="mx-auto w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
                  <Package className="h-8 w-8 text-muted-foreground" />
                </div>
                <CardTitle className="mb-2">No orders yet</CardTitle>
                <CardDescription className="mb-4">
                  When you place orders, they'll appear here
                </CardDescription>
                <Button>
                  <a href="/search">Start Shopping</a>
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-6">
              {orders.map((order) => (
                <Card key={order.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-lg">Order {order.id}</CardTitle>
                        <CardDescription>
                          Placed on {new Date(order.date).toLocaleDateString()}
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold">${order.total}</div>
                        <Badge variant={getStatusColor(order.status)} className="capitalize">
                          {getStatusIcon(order.status)}
                          <span className="ml-1">{order.status}</span>
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Items</h4>
                        <div className="space-y-2">
                          {order.items.map((item, index) => (
                            <div key={index} className="flex justify-between items-center">
                              <div>
                                <span className="font-medium">{item.name}</span>
                                <span className="text-muted-foreground ml-2">x{item.quantity}</span>
                              </div>
                              <span className="font-medium">${item.price}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {order.trackingNumber && (
                        <>
                          <Separator />
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-semibold">Tracking Number</h4>
                              <p className="text-muted-foreground font-mono">{order.trackingNumber}</p>
                            </div>
                            <Button variant="outline" size="sm">
                              Track Package
                              <ArrowRight className="h-4 w-4 ml-2" />
                            </Button>
                          </div>
                        </>
                      )}

                      <Separator />
                      
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                        {order.status === "delivered" && (
                          <>
                            <Button variant="outline" size="sm">
                              Leave Review
                            </Button>
                            <Button variant="outline" size="sm">
                              Return Items
                            </Button>
                          </>
                        )}
                        <Button variant="outline" size="sm">
                          Buy Again
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OrderHistory;