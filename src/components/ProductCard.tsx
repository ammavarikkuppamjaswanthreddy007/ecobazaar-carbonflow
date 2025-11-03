import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Leaf, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  carbonFootprint: number;
  rating: number;
  category: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    toast({
      title: "Added to cart! 🛒",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const carbonBadge = 
    product.carbonFootprint < 3 ? "low" : 
    product.carbonFootprint < 6 ? "medium" : 
    "high";

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <Badge 
          className="absolute top-2 right-2"
          variant={carbonBadge === "low" ? "default" : carbonBadge === "medium" ? "secondary" : "destructive"}
        >
          {carbonBadge === "low" ? "🌿 Low" : carbonBadge === "medium" ? "⚠️ Medium" : "🔴 High"} Carbon
        </Badge>
      </div>
      
      <div className="p-4 space-y-3">
        <div>
          <h3 className="font-semibold text-lg line-clamp-1">{product.name}</h3>
          <div className="flex items-center gap-1 mt-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-4 h-4 ${i < product.rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}`}
              />
            ))}
            <span className="text-sm text-muted-foreground ml-1">({product.rating})</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Leaf className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground">{product.carbonFootprint} kg CO₂</span>
        </div>

        <div className="flex flex-col gap-2 pt-2">
          <span className="text-2xl font-bold">${product.price}</span>
          <div className="flex gap-2">
            <Button onClick={() => navigate(`/product/${product.id}`)} variant="outline" className="flex-1">
              View Details
            </Button>
            <Button onClick={handleAddToCart} className="flex-1">
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
