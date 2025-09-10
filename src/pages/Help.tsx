import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  MessageCircle, 
  Phone, 
  Mail, 
  Shield, 
  Package, 
  CreditCard, 
  Users,
  HelpCircle,
  FileText,
  Truck
} from "lucide-react";

const Help = () => {
  const quickLinks = [
    { icon: Package, title: "Track Your Order", description: "Check the status of your recent orders" },
    { icon: CreditCard, title: "Payment Issues", description: "Resolve payment and billing problems" },
    { icon: Truck, title: "Shipping & Returns", description: "Learn about delivery and return policies" },
    { icon: Shield, title: "Account Security", description: "Protect your account and personal info" },
    { icon: Users, title: "Selling Help", description: "Get help with listing and selling items" },
    { icon: MessageCircle, title: "Buyer Protection", description: "Learn about our buyer guarantee" }
  ];

  const faqs = [
    {
      question: "How do I track my order?",
      answer: "You can track your order by going to 'My Account' > 'Orders' and clicking on the specific order. You'll see real-time tracking information and estimated delivery dates."
    },
    {
      question: "What is your return policy?",
      answer: "We offer 30-day returns for most items. Items must be in original condition with tags attached. Digital items and personalized products are not eligible for return."
    },
    {
      question: "How do I sell an item?",
      answer: "Click on 'Sell' in the top menu, create your listing with photos and description, set your price, and choose your selling format (auction or fixed price). We'll guide you through each step."
    },
    {
      question: "Is my payment information secure?",
      answer: "Yes, we use industry-standard SSL encryption and work with trusted payment processors. We never store your full credit card details on our servers."
    },
    {
      question: "How do I contact a seller?",
      answer: "You can contact sellers through the 'Ask a question' link on their product listings. Messages are handled through our secure messaging system."
    },
    {
      question: "What are the selling fees?",
      answer: "Listing is free. We charge a final value fee of 12.9% of the sale price plus payment processing fees of 2.9% + $0.30 per transaction."
    },
    {
      question: "How do I leave feedback?",
      answer: "After completing a transaction, you'll receive an email with a link to leave feedback. You can also do this through 'My Account' > 'Orders'."
    },
    {
      question: "What if I receive a damaged item?",
      answer: "Contact the seller first. If you can't resolve the issue, you can open a case through our Resolution Center within 30 days of delivery."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-card-foreground mb-4">
              How can we help you?
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Find answers to your questions or get in touch with our support team
            </p>
            
            {/* Search */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                placeholder="Search for help topics, orders, or account issues..."
                className="pl-12 h-12 text-base"
              />
              <Button className="absolute right-2 top-2 h-8">Search</Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-card-foreground mb-6">Popular Topics</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {quickLinks.map((link, index) => (
                <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <link.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-card-foreground mb-1">
                          {link.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {link.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* FAQ */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <HelpCircle className="h-5 w-5" />
                    Frequently Asked Questions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </div>

            {/* Contact Options */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Support</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <MessageCircle className="h-5 w-5 text-primary" />
                      <span className="font-medium">Live Chat</span>
                      <Badge variant="secondary" className="text-xs">Available</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Chat with our support team
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Avg. response time: 2 minutes
                    </p>
                  </div>

                  <div className="p-4 border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <Phone className="h-5 w-5 text-primary" />
                      <span className="font-medium">Phone Support</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      1-800-HELP-NOW
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Mon-Fri: 9AM-9PM EST
                    </p>
                  </div>

                  <div className="p-4 border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <Mail className="h-5 w-5 text-primary" />
                      <span className="font-medium">Email Support</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      support@marketplace.com
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Response within 24 hours
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Resources
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between p-2 hover:bg-muted/50 rounded cursor-pointer">
                    <span className="text-sm">User Guide</span>
                    <Badge variant="outline">PDF</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 hover:bg-muted/50 rounded cursor-pointer">
                    <span className="text-sm">Seller Handbook</span>
                    <Badge variant="outline">PDF</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 hover:bg-muted/50 rounded cursor-pointer">
                    <span className="text-sm">Safety Guidelines</span>
                    <Badge variant="outline">Web</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 hover:bg-muted/50 rounded cursor-pointer">
                    <span className="text-sm">Terms of Service</span>
                    <Badge variant="outline">Web</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 hover:bg-muted/50 rounded cursor-pointer">
                    <span className="text-sm">Privacy Policy</span>
                    <Badge variant="outline">Web</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Community</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="p-3 bg-muted/50 rounded">
                    <p className="font-medium mb-1">Discussion Forums</p>
                    <p className="text-muted-foreground">Connect with other users and share tips</p>
                  </div>
                  <div className="p-3 bg-muted/50 rounded">
                    <p className="font-medium mb-1">Video Tutorials</p>
                    <p className="text-muted-foreground">Step-by-step guides for common tasks</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Help;