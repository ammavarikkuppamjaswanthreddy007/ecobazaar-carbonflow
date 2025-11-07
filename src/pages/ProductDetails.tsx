import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Leaf, Star, ShoppingCart, ArrowLeft, Recycle, Package } from "lucide-react";
import { products } from "@/data/products";
import { useToast } from "@/hooks/use-toast";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container mx-auto px-4 py-8 mt-20">
          <p>Product not found</p>
          <Button onClick={() => navigate("/products")}>Back to Products</Button>
        </main>
        <Footer />
      </div>
    );
  }

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
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 mt-20">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/products")}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Products
        </Button>

        <Card className="p-4 mb-6 bg-primary/5 border-primary/20">
          <p className="text-sm font-medium flex items-center gap-2 flex-wrap">
            <Leaf className="w-4 h-4 text-primary" />
            <span className="text-primary">Eco-friendly {product.category}</span>
            <span className="text-muted-foreground">•</span>
            <span>100% sustainable materials</span>
            <span className="text-muted-foreground">•</span>
            <span className="font-bold text-primary">{product.carbonFootprint} kg CO₂</span>
          </p>
        </Card>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="relative">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-[500px] object-cover rounded-lg shadow-lg"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1441986300917-64674bd600d8";
              }}
            />
            <Badge 
              className="absolute top-4 right-4 text-base px-4 py-2"
              variant={carbonBadge === "low" ? "default" : carbonBadge === "medium" ? "secondary" : "destructive"}
            >
              {carbonBadge === "low" ? "🌿 Low" : carbonBadge === "medium" ? "⚠️ Medium" : "🔴 High"} Carbon
            </Badge>
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < product.rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}`}
                  />
                ))}
                <span className="text-muted-foreground ml-1">({product.rating} stars)</span>
              </div>
            </div>

            <Separator />

            <div className="flex items-center gap-3">
              <Leaf className="w-6 h-6 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Carbon Footprint</p>
                <p className="text-2xl font-bold text-primary">{product.carbonFootprint} kg CO₂</p>
              </div>
            </div>

            <Separator />

            <div>
              <p className="text-4xl font-bold mb-4">${product.price}</p>
              <div className="flex gap-4">
                <Button size="lg" className="flex-1" onClick={handleAddToCart}>
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>
                <Button size="lg" variant="outline" onClick={() => navigate("/cart")}>
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Package className="w-6 h-6 text-primary" />
              Product Description
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              This eco-friendly {product.name.toLowerCase()} is crafted with sustainability in mind. 
              Made from renewable materials and designed to minimize environmental impact, this product 
              represents our commitment to a greener future. Perfect for conscious consumers who care 
              about the planet.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Recycle className="w-6 h-6 text-primary" />
              Specifications
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><span className="font-semibold">Category:</span> {product.category}</li>
              <li><span className="font-semibold">Material:</span> Sustainable & Recycled</li>
              <li><span className="font-semibold">Weight:</span> Lightweight Design</li>
              <li><span className="font-semibold">Dimensions:</span> Optimized for Use</li>
              <li><span className="font-semibold">Origin:</span> Ethically Sourced</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Leaf className="w-6 h-6 text-primary" />
              Sustainability Impact
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✓ 100% Recyclable Packaging</li>
              <li>✓ Carbon Neutral Shipping</li>
              <li>✓ Ethically Manufactured</li>
              <li>✓ No Harmful Chemicals</li>
              <li>✓ Supports Reforestation</li>
            </ul>
          </Card>
        </div>

        <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5">
          <h3 className="text-2xl font-bold mb-4 text-center">Why Choose This Product?</h3>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Every purchase from EcoBazaar contributes to a healthier planet. This product has been carefully 
            selected to ensure minimal environmental impact while maintaining the highest quality standards. 
            By choosing eco-friendly products, you're actively participating in the global movement towards 
            sustainability and helping reduce our collective carbon footprint.
          </p>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetails;
