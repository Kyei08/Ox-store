import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, User, Search, ArrowRight } from "lucide-react";
import { useState } from "react";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const blogPosts = [
    {
      id: 1,
      title: "10 Tips for Successful Online Selling",
      excerpt: "Learn the best practices for selling your items online and maximizing your profits on our marketplace.",
      author: "Sarah Johnson",
      date: "2024-01-15",
      category: "Selling Tips",
      readTime: "5 min read",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "How to Spot Counterfeit Products",
      excerpt: "A comprehensive guide to identifying fake products and protecting yourself from counterfeit goods.",
      author: "Mike Chen",
      date: "2024-01-12",
      category: "Safety",
      readTime: "7 min read",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "The Rise of Sustainable Shopping",
      excerpt: "Exploring the growing trend of eco-conscious shopping and how to make more sustainable purchasing decisions.",
      author: "Emma Thompson",
      date: "2024-01-10",
      category: "Trends",
      readTime: "6 min read",
      image: "/placeholder.svg"
    },
    {
      id: 4,
      title: "Photography Tips for Product Listings",
      excerpt: "Master the art of product photography to make your listings stand out and attract more buyers.",
      author: "David Rodriguez",
      date: "2024-01-08",
      category: "Selling Tips",
      readTime: "8 min read",
      image: "/placeholder.svg"
    },
    {
      id: 5,
      title: "Understanding Return Policies",
      excerpt: "Everything you need to know about returns, refunds, and exchanges when buying online.",
      author: "Lisa Wang",
      date: "2024-01-05",
      category: "Buying Guide",
      readTime: "4 min read",
      image: "/placeholder.svg"
    },
    {
      id: 6,
      title: "Building Trust in Online Marketplaces",
      excerpt: "How we maintain a safe and trustworthy environment for all buyers and sellers on our platform.",
      author: "Marketplace Team",
      date: "2024-01-03",
      category: "Platform Updates",
      readTime: "5 min read",
      image: "/placeholder.svg"
    }
  ];

  const categories = ["All", "Selling Tips", "Buying Guide", "Safety", "Trends", "Platform Updates"];

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Marketplace Blog</h1>
            <p className="text-xl text-muted-foreground">
              Tips, insights, and updates from the world of online commerce
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <aside className="lg:w-1/4">
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Search Posts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search articles..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <Button
                        key={category}
                        variant="ghost"
                        className="w-full justify-start"
                        size="sm"
                      >
                        {category}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Newsletter</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Subscribe to get the latest blog posts and marketplace updates.
                  </p>
                  <div className="space-y-2">
                    <Input placeholder="Your email" type="email" />
                    <Button className="w-full" size="sm">Subscribe</Button>
                  </div>
                </CardContent>
              </Card>
            </aside>

            <div className="lg:w-3/4">
              {filteredPosts.length === 0 ? (
                <Card>
                  <CardContent className="text-center py-16">
                    <p className="text-muted-foreground">No blog posts found matching your search.</p>
                  </CardContent>
                </Card>
              ) : (
                <div className="space-y-8">
                  {filteredPosts.map((post) => (
                    <Card key={post.id} className="overflow-hidden">
                      <div className="md:flex">
                        <div className="md:w-1/3">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-48 md:h-full object-cover"
                          />
                        </div>
                        <div className="md:w-2/3 p-6">
                          <div className="flex items-center gap-2 mb-3">
                            <Badge variant="secondary">{post.category}</Badge>
                            <span className="text-sm text-muted-foreground">{post.readTime}</span>
                          </div>
                          
                          <CardTitle className="text-xl mb-2 hover:text-primary cursor-pointer">
                            {post.title}
                          </CardTitle>
                          
                          <CardDescription className="mb-4">
                            {post.excerpt}
                          </CardDescription>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                              <div className="flex items-center">
                                <User className="h-4 w-4 mr-1" />
                                {post.author}
                              </div>
                              <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1" />
                                {new Date(post.date).toLocaleDateString()}
                              </div>
                            </div>
                            
                            <Button variant="outline" size="sm">
                              Read More
                              <ArrowRight className="h-4 w-4 ml-2" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              )}

              <div className="flex justify-center mt-12">
                <Button variant="outline">
                  Load More Posts
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;