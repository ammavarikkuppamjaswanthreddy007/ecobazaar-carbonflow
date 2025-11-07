import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { products } from "@/data/products";
import { Leaf, Star } from "lucide-react";

const RecommendationsGrid = () => {
  const navigate = useNavigate();
  
  // Get low-carbon products for recommendations
  const recommendedProducts = products
    .filter((p) => p.carbonFootprint < 3)
    .slice(0, 4);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold">You May Also Like</h3>
          <p className="text-muted-foreground">
            Low-carbon alternatives based on your preferences
          </p>
        </div>
        <Button variant="outline" onClick={() => navigate("/products")}>
          View All
        </Button>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
        {recommendedProducts.map((product) => (
          <Card
            key={product.id}
            className="flex-shrink-0 w-64 p-4 hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => navigate(`/product/${product.id}`)}
          >
            <div className="relative mb-3">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-lg"
              />
              <Badge
                className="absolute top-2 right-2"
                variant={product.carbonFootprint < 2 ? "default" : "secondary"}
              >
                <Leaf className="w-3 h-3 mr-1" />
                {product.carbonFootprint} kg CO₂
              </Badge>
            </div>
            <h4 className="font-semibold mb-2 line-clamp-2">{product.name}</h4>
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${
                    i < product.rating
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-muted-foreground"
                  }`}
                />
              ))}
              <span className="text-xs text-muted-foreground ml-1">
                ({product.rating})
              </span>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-xl font-bold text-primary">${product.price}</p>
              <Badge variant="outline" className="text-xs">
                Low Carbon
              </Badge>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RecommendationsGrid;
