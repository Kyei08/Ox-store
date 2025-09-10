import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { RefreshCw, Package, ArrowLeft, CheckCircle } from "lucide-react";

const Returns = () => {
  const returnRequests = [
    {
      id: "RET-001",
      orderId: "ORD-001",
      date: "2024-01-20",
      status: "approved",
      item: "Wireless Headphones",
      reason: "Defective item",
      refundAmount: 79.99,
      trackingNumber: "RET1234567890"
    },
    {
      id: "RET-002", 
      orderId: "ORD-002",
      date: "2024-01-18",
      status: "pending",
      item: "Bluetooth Speaker", 
      reason: "Changed my mind",
      refundAmount: 89.99,
      trackingNumber: null
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "default";
      case "pending":
        return "secondary";
      case "rejected":
        return "destructive";
      default:
        return "outline";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved":
        return <CheckCircle className="h-4 w-4" />;
      case "pending":
        return <RefreshCw className="h-4 w-4" />;
      default:
        return <Package className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">Returns & Refunds</h1>
            <p className="text-muted-foreground">
              Manage your return requests and track refund status
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3 mb-8">
            <Card>
              <CardHeader className="text-center">
                <CardTitle>Return Policy</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">30 Days</div>
                <p className="text-muted-foreground">to return most items</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="text-center">
                <CardTitle>Free Returns</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">$0</div>
                <p className="text-muted-foreground">shipping for returns</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="text-center">
                <CardTitle>Quick Refunds</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">3-5</div>
                <p className="text-muted-foreground">business days</p>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Start a Return</CardTitle>
              <CardDescription>
                Need to return an item? Start the process here.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Return an Item
              </Button>
            </CardContent>
          </Card>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Your Return Requests</h2>
            
            {returnRequests.length === 0 ? (
              <Card className="text-center py-16">
                <CardContent>
                  <div className="mx-auto w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
                    <RefreshCw className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <CardTitle className="mb-2">No return requests</CardTitle>
                  <CardDescription>
                    Your return requests will appear here when you create them
                  </CardDescription>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                {returnRequests.map((returnReq) => (
                  <Card key={returnReq.id}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-lg">Return {returnReq.id}</CardTitle>
                          <CardDescription>
                            From order {returnReq.orderId} • {new Date(returnReq.date).toLocaleDateString()}
                          </CardDescription>
                        </div>
                        <Badge variant={getStatusColor(returnReq.status)} className="capitalize">
                          {getStatusIcon(returnReq.status)}
                          <span className="ml-1">{returnReq.status}</span>
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid gap-4 md:grid-cols-2">
                          <div>
                            <h4 className="font-semibold mb-1">Item</h4>
                            <p className="text-muted-foreground">{returnReq.item}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-1">Reason</h4>
                            <p className="text-muted-foreground">{returnReq.reason}</p>
                          </div>
                        </div>

                        <div className="grid gap-4 md:grid-cols-2">
                          <div>
                            <h4 className="font-semibold mb-1">Refund Amount</h4>
                            <p className="text-lg font-bold text-primary">${returnReq.refundAmount}</p>
                          </div>
                          {returnReq.trackingNumber && (
                            <div>
                              <h4 className="font-semibold mb-1">Return Tracking</h4>
                              <p className="text-muted-foreground font-mono">{returnReq.trackingNumber}</p>
                            </div>
                          )}
                        </div>

                        <Separator />
                        
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                          {returnReq.trackingNumber && (
                            <Button variant="outline" size="sm">
                              Track Return
                            </Button>
                          )}
                          {returnReq.status === "pending" && (
                            <Button variant="outline" size="sm">
                              Cancel Return
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Return Guidelines</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <p className="text-sm text-muted-foreground">
                  Items must be returned within 30 days of delivery
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <p className="text-sm text-muted-foreground">
                  Items must be in original condition with tags attached
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <p className="text-sm text-muted-foreground">
                  Refunds will be processed to your original payment method
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <p className="text-sm text-muted-foreground">
                  Some items may not be eligible for return (perishables, custom items, etc.)
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Returns;