import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Leaf, Recycle, Award, TrendingDown } from "lucide-react";
import { products } from "@/data/products";

const Index = () => {
  const navigate = useNavigate();
  const featuredProducts = products.slice(0, 4);

  const features = [
    {
      icon: Leaf,
      title: "Carbon Tracking",
      description: "See the environmental impact of every purchase",
    },
    {
      icon: Recycle,
      title: "Eco-Friendly Products",
      description: "Curated selection of sustainable goods",
    },
    {
      icon: Award,
      title: "Carbon Points",
      description: "Earn rewards for making green choices",
    },
    {
      icon: TrendingDown,
      title: "Reduce Your Footprint",
      description: "Track and lower your carbon emissions",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10 -z-10" />
        <div className="container mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <Leaf className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">Carbon-Conscious Shopping</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Shop Smart. Shop Green.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Reduce Your Carbon Footprint with Every Purchase
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg" onClick={() => navigate("/products")}>
              Explore Products
            </Button>
            <Button size="lg" variant="outline" className="text-lg" onClick={() => navigate("/auth")}>
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose EcoBazaar?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured Products</h2>
              <p className="text-muted-foreground">Our top eco-friendly picks this month</p>
            </div>
            <Button variant="outline" onClick={() => navigate("/products")}>
              View All
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Community Impact</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            Together, we're making a difference for our planet
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="animate-fade-in">
              <p className="text-5xl font-bold text-primary mb-2">12,500+</p>
              <p className="text-muted-foreground">Eco-Conscious Shoppers</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <p className="text-5xl font-bold text-primary mb-2">45,000 kg</p>
              <p className="text-muted-foreground">CO₂ Emissions Saved</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <p className="text-5xl font-bold text-primary mb-2">8,900+</p>
              <p className="text-muted-foreground">Trees Equivalent Planted</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
