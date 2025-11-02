import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Leaf, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  carbonFootprint: number;
  category: string;
  isEcoFriendly: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const getCarbonColor = (carbon: number) => {
    if (carbon < 3) return "text-primary";
    if (carbon < 6) return "text-accent";
    return "text-destructive";
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    toast({
      title: "Added to cart! 🛒",
      description: product.name,
    });
  };

  return (
    <Card 
      className="group overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.isEcoFriendly && (
          <Badge className="absolute top-2 right-2 bg-primary">
            🌿 Eco-Friendly
          </Badge>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        
        <div className="flex items-center justify-between mb-3">
          <span className="text-2xl font-bold">${product.price}</span>
          <div className="flex items-center gap-1">
            <Leaf className={`w-4 h-4 ${getCarbonColor(product.carbonFootprint)}`} />
            <span className={`text-sm font-medium ${getCarbonColor(product.carbonFootprint)}`}>
              {product.carbonFootprint} kg CO₂
            </span>
          </div>
        </div>

        <Button 
          className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
          variant="outline"
          onClick={handleAddToCart}
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;
