import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, ShoppingCart, User, Heart, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const Header = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleCategoryClick = (category: string) => {
    navigate(`/categories?category=${encodeURIComponent(category)}`);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background shadow-sm">
      {/* Top bar */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto flex h-8 items-center justify-between px-4 text-xs">
          <div className="flex items-center gap-4">
            <span>Hi! <span className="text-primary cursor-pointer hover:underline">Sign in</span> or <span className="text-primary cursor-pointer hover:underline">register</span></span>
          </div>
          <div className="flex items-center gap-4">
            <span className="cursor-pointer hover:text-primary">Daily Deals</span>
            <span 
              className="cursor-pointer hover:text-primary"
              onClick={() => navigate("/help")}
            >
              Help & Contact
            </span>
            <span 
              className="cursor-pointer hover:text-primary"
              onClick={() => navigate("/sell")}
            >
              Sell
            </span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center">
          <h1 
            className="text-2xl font-bold text-primary cursor-pointer" 
            onClick={() => navigate("/")}
          >
            MarketPlace
          </h1>
        </div>

        {/* Search bar */}
        <div className="flex flex-1 max-w-2xl mx-4 lg:mx-8">
          <div className="relative flex-1">
            <Input
              placeholder="Search for anything"
              className="pr-12 h-10 focus:ring-2 focus:ring-primary/20 transition-all duration-200"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <Button 
              size="sm" 
              className="absolute right-0 top-0 h-10 px-4 rounded-l-none hover:bg-primary-hover transition-colors duration-200"
              onClick={handleSearch}
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="hidden lg:flex items-center gap-2 hover:bg-primary/10">
            <Heart className="h-4 w-4" />
            <span className="hidden xl:inline">Watchlist</span>
          </Button>
          <Button variant="ghost" size="sm" className="hidden md:flex items-center gap-2 hover:bg-primary/10 relative">
            <Bell className="h-4 w-4" />
            <span className="hidden xl:inline">Notifications</span>
            <Badge variant="destructive" className="absolute -top-1 -right-1 h-5 w-5 p-0 text-xs flex items-center justify-center">3</Badge>
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className="flex items-center gap-2 hover:bg-primary/10 relative"
            onClick={() => navigate("/cart")}
          >
            <ShoppingCart className="h-4 w-4" />
            <span className="hidden sm:inline">Cart</span>
            <Badge variant="destructive" className="absolute -top-1 -right-1 h-5 w-5 p-0 text-xs flex items-center justify-center">2</Badge>
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className="flex items-center gap-2 hover:bg-primary/10"
            onClick={() => navigate("/account")}
          >
            <User className="h-4 w-4" />
            <span className="hidden sm:inline">Account</span>
          </Button>
        </div>
      </div>

      {/* Categories */}
      <div className="border-t bg-muted/20">
        <div className="container mx-auto flex h-10 items-center px-4 text-sm">
          <div className="flex items-center gap-6 overflow-x-auto">
            <span 
              className="text-primary font-medium cursor-pointer hover:underline"
              onClick={() => handleCategoryClick("Electronics")}
            >
              Electronics
            </span>
            <span 
              className="cursor-pointer hover:text-primary"
              onClick={() => handleCategoryClick("Fashion")}
            >
              Fashion
            </span>
            <span 
              className="cursor-pointer hover:text-primary"
              onClick={() => handleCategoryClick("Home & Garden")}
            >
              Home & Garden
            </span>
            <span 
              className="cursor-pointer hover:text-primary"
              onClick={() => handleCategoryClick("Motors")}
            >
              Motors
            </span>
            <span 
              className="cursor-pointer hover:text-primary"
              onClick={() => handleCategoryClick("Sports")}
            >
              Sports
            </span>
            <span 
              className="cursor-pointer hover:text-primary"
              onClick={() => handleCategoryClick("Toys")}
            >
              Toys
            </span>
            <span 
              className="cursor-pointer hover:text-primary"
              onClick={() => handleCategoryClick("Books")}
            >
              Books
            </span>
            <span 
              className="cursor-pointer hover:text-primary"
              onClick={() => handleCategoryClick("Music")}
            >
              Music
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;