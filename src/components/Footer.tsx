import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t mt-12">
      {/* Newsletter section */}
      <div className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold mb-2">Stay in the loop</h3>
              <p className="text-primary-foreground/80">Get exclusive deals, new arrivals & insider discounts</p>
            </div>
            <div className="flex gap-2 w-full md:w-auto md:min-w-80">
              <Input 
                placeholder="Enter your email" 
                className="bg-white text-black border-0 flex-1"
              />
              <Button variant="secondary" className="whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company info */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">MarketPlace</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Your premier destination for buying and selling everything from electronics to fashion. 
                Trusted by millions of users worldwide.
              </p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="p-2">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" className="p-2">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" className="p-2">
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" className="p-2">
                  <Youtube className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Quick links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-card-foreground">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Advanced Search</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Daily Deals</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Sell Your Item</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Live Auctions</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Motors</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Fashion</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Electronics</a></li>
              </ul>
            </div>

            {/* Customer care */}
            <div className="space-y-4">
              <h4 className="font-semibold text-card-foreground">Customer Care</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Help & Contact</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Shipping Info</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Returns & Refunds</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Size Guide</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Track Your Order</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Buyer Protection</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Seller Protection</a></li>
              </ul>
            </div>

            {/* Contact info */}
            <div className="space-y-4">
              <h4 className="font-semibold text-card-foreground">Get in Touch</h4>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>1-800-MARKETPLACE</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>support@marketplace.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>San Jose, CA 95131</span>
                </div>
              </div>
              <div className="pt-2">
                <p className="text-xs text-muted-foreground">
                  Customer Service: Mon-Fri 9AM-6PM PST
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator />

      {/* Bottom footer */}
      <div className="py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <div className="flex flex-wrap items-center gap-4">
              <span>&copy; 2024 MarketPlace. All rights reserved.</span>
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
            </div>
            <div className="flex items-center gap-4">
              <span>We accept:</span>
              <div className="flex items-center gap-2">
                <div className="h-6 w-10 bg-primary rounded text-xs text-white flex items-center justify-center font-bold">
                  VISA
                </div>
                <div className="h-6 w-10 bg-marketplace-red rounded text-xs text-white flex items-center justify-center font-bold">
                  MC
                </div>
                <div className="h-6 w-10 bg-secondary border rounded text-xs flex items-center justify-center font-bold">
                  AMEX
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;