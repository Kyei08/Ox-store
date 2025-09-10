import { useNavigate } from "react-router-dom";
import { Heart, Star, ShoppingCart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  seller: string;
  condition: "new" | "used" | "refurbished";
  shipping?: string;
  isAuction?: boolean;
  timeLeft?: string;
  currentBid?: number;
}

const ProductCard = ({
  id,
  title,
  price,
  originalPrice,
  image,
  rating,
  reviewCount,
  seller,
  condition,
  shipping = "Free shipping",
  isAuction = false,
  timeLeft,
  currentBid
}: ProductCardProps) => {
  const navigate = useNavigate();
  const discountPercentage = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  const handleCardClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <Card 
      className="group cursor-pointer hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/20 bg-gradient-to-b from-card to-card/95"
      onClick={handleCardClick}
    >
      <CardContent className="p-0">
        {/* Image container */}
        <div className="relative aspect-square overflow-hidden rounded-t-lg">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <Button
            size="sm"
            variant="ghost"
            className="absolute top-2 right-2 h-8 w-8 p-0 bg-white/90 hover:bg-white hover:text-marketplace-red transition-all duration-200 backdrop-blur-sm"
            onClick={(e) => {
              e.stopPropagation();
              // Handle wishlist toggle
            }}
          >
            <Heart className="h-4 w-4" />
          </Button>
          {discountPercentage > 0 && (
            <Badge className="absolute top-2 left-2 bg-marketplace-red">
              -{discountPercentage}%
            </Badge>
          )}
          {condition === "new" && (
            <Badge className="absolute bottom-2 left-2 bg-success">
              New
            </Badge>
          )}
        </div>

        {/* Content */}
        <div className="p-4 space-y-2">
          {/* Title */}
          <h3 className="font-medium text-sm line-clamp-2 min-h-[2.5rem] text-card-foreground group-hover:text-primary">
            {title}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-3 w-3 ${
                    i < Math.floor(rating)
                      ? "fill-warning text-warning"
                      : "text-muted-foreground"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">
              ({reviewCount})
            </span>
          </div>

          {/* Price section */}
          <div className="space-y-1">
            {isAuction ? (
              <div>
                <div className="text-xs text-muted-foreground">Current bid</div>
                <div className="font-bold text-lg text-primary">
                  ${currentBid?.toFixed(2) || price.toFixed(2)}
                </div>
                {timeLeft && (
                  <div className="text-xs text-marketplace-red font-medium">
                    {timeLeft}
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg text-card-foreground">
                  ${price.toFixed(2)}
                </span>
                {originalPrice && (
                  <span className="text-sm text-muted-foreground line-through">
                    ${originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Shipping */}
          <div className="text-xs text-success font-medium">
            {shipping}
          </div>

          {/* Seller */}
          <div className="text-xs text-muted-foreground">
            Sold by <span className="text-primary hover:underline">{seller}</span>
          </div>

          {/* Action buttons */}
          <div className="pt-2 space-y-2">
            {isAuction ? (
              <Button 
                className="w-full group-hover:bg-primary-hover transition-colors duration-200" 
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  // Handle bid placement
                }}
              >
                Place Bid
              </Button>
            ) : (
              <div className="flex gap-2">
                <Button 
                  className="flex-1 group-hover:bg-primary-hover transition-colors duration-200" 
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    // Handle buy now
                  }}
                >
                  Buy It Now
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="px-3 hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                  onClick={(e) => {
                    e.stopPropagation();
                    // Handle add to cart
                  }}
                >
                  <ShoppingCart className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;