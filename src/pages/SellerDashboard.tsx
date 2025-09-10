import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  DollarSign, 
  Package, 
  TrendingUp, 
  Users, 
  Star,
  Eye,
  ShoppingCart,
  Plus,
  Edit,
  BarChart3
} from "lucide-react";

const SellerDashboard = () => {
  const stats = [
    {
      title: "Total Sales",
      value: "$12,584",
      change: "+12.5%",
      icon: <DollarSign className="h-6 w-6" />
    },
    {
      title: "Active Listings",
      value: "24",
      change: "+2",
      icon: <Package className="h-6 w-6" />
    },
    {
      title: "Total Views",
      value: "3,247",
      change: "+18.2%",
      icon: <Eye className="h-6 w-6" />
    },
    {
      title: "Conversion Rate",
      value: "4.2%",
      change: "+0.3%",
      icon: <TrendingUp className="h-6 w-6" />
    }
  ];

  const recentOrders = [
    {
      id: "ORD-001",
      item: "Wireless Headphones",
      buyer: "John D.",
      amount: 79.99,
      status: "shipped",
      date: "2024-01-15"
    },
    {
      id: "ORD-002",
      item: "Smart Watch",
      buyer: "Sarah M.",
      amount: 199.99,
      status: "processing",
      date: "2024-01-14"
    },
    {
      id: "ORD-003",
      item: "Phone Case",
      buyer: "Mike R.",
      amount: 24.99,
      status: "delivered",
      date: "2024-01-13"
    }
  ];

  const activeListings = [
    {
      id: 1,
      title: "iPhone 15 Pro Case",
      price: 29.99,
      views: 156,
      favorites: 12,
      status: "active"
    },
    {
      id: 2,
      title: "Bluetooth Earbuds",
      price: 89.99,
      views: 234,
      favorites: 18,
      status: "active"
    },
    {
      id: 3,
      title: "Laptop Stand",
      price: 49.99,
      views: 89,
      favorites: 6,
      status: "draft"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "shipped":
        return "secondary";
      case "processing":
        return "outline";
      case "delivered":
        return "default";
      case "active":
        return "default";
      case "draft":
        return "outline";
      default:
        return "outline";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">Seller Dashboard</h1>
              <p className="text-muted-foreground">
                Manage your listings, track sales, and grow your business
              </p>
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Listing
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
            {stats.map((stat, index) => (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                  <div className="text-primary">{stat.icon}</div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-green-600">{stat.change}</span> from last month
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="listings">Listings</TabsTrigger>
              <TabsTrigger value="orders">Orders</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Orders</CardTitle>
                    <CardDescription>Your latest sales activity</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentOrders.map((order) => (
                        <div key={order.id} className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">{order.item}</p>
                            <p className="text-sm text-muted-foreground">
                              {order.buyer} • {new Date(order.date).toLocaleDateString()}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold">${order.amount}</p>
                            <Badge variant={getStatusColor(order.status)} className="text-xs">
                              {order.status}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Performance Overview</CardTitle>
                    <CardDescription>Key metrics for your store</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span>Average Rating</span>
                        </div>
                        <span className="font-semibold">4.8/5</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Users className="h-4 w-4 text-blue-500" />
                          <span>Repeat Customers</span>
                        </div>
                        <span className="font-semibold">32%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <ShoppingCart className="h-4 w-4 text-green-500" />
                          <span>Orders This Month</span>
                        </div>
                        <span className="font-semibold">47</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <TrendingUp className="h-4 w-4 text-purple-500" />
                          <span>Growth Rate</span>
                        </div>
                        <span className="font-semibold">+15.3%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="listings" className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Your Listings</CardTitle>
                      <CardDescription>Manage your active and draft listings</CardDescription>
                    </div>
                    <Button>
                      <Plus className="h-4 w-4 mr-2" />
                      Add Listing
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {activeListings.map((listing) => (
                      <div key={listing.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="w-16 h-16 bg-muted rounded-lg"></div>
                          <div>
                            <h3 className="font-semibold">{listing.title}</h3>
                            <p className="text-2xl font-bold text-primary">${listing.price}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-6">
                          <div className="text-center">
                            <p className="text-sm text-muted-foreground">Views</p>
                            <p className="font-semibold">{listing.views}</p>
                          </div>
                          <div className="text-center">
                            <p className="text-sm text-muted-foreground">Favorites</p>
                            <p className="font-semibold">{listing.favorites}</p>
                          </div>
                          <Badge variant={getStatusColor(listing.status)}>
                            {listing.status}
                          </Badge>
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4 mr-2" />
                            Edit
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="orders" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Order Management</CardTitle>
                  <CardDescription>Track and manage your customer orders</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentOrders.map((order) => (
                      <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h3 className="font-semibold">{order.id}</h3>
                          <p className="text-muted-foreground">{order.item}</p>
                          <p className="text-sm text-muted-foreground">Buyer: {order.buyer}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xl font-bold">${order.amount}</p>
                          <Badge variant={getStatusColor(order.status)} className="mb-2">
                            {order.status}
                          </Badge>
                          <p className="text-sm text-muted-foreground">
                            {new Date(order.date).toLocaleDateString()}
                          </p>
                        </div>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Sales Analytics</CardTitle>
                  <CardDescription>Detailed insights into your store performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-16">
                    <BarChart3 className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Analytics Dashboard</h3>
                    <p className="text-muted-foreground mb-4">
                      Detailed charts and reports will be displayed here
                    </p>
                    <Button variant="outline">
                      View Full Analytics
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SellerDashboard;