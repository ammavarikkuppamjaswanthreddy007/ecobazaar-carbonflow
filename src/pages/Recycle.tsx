import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Recycle as RecycleIcon, Leaf, Package, TrendingDown, Heart, RefreshCw } from "lucide-react";

const Recycle = () => {
  const recyclingPrograms = [
    {
      id: 1,
      title: "Electronics Recycling",
      description: "Bring your old electronics and we'll recycle them responsibly",
      icon: Package,
      carbonSaved: "15 kg CO₂",
      badge: "Popular"
    },
    {
      id: 2,
      title: "Clothing Trade-In",
      description: "Trade your old clothes for store credit and reduce textile waste",
      icon: RefreshCw,
      carbonSaved: "8 kg CO₂",
      badge: "New"
    },
    {
      id: 3,
      title: "Packaging Return",
      description: "Return product packaging for reuse and earn carbon points",
      icon: RecycleIcon,
      carbonSaved: "3 kg CO₂",
      badge: "Easy"
    }
  ];

  const ecoTips = [
    "Repair before replacing - extend product lifespan",
    "Choose products with minimal packaging",
    "Buy refurbished items when possible",
    "Donate or sell items you no longer need",
    "Compost organic waste to reduce landfill impact",
    "Support brands with take-back programs"
  ];

  const refurbishedProducts = [
    {
      id: "ref-1",
      name: "Refurbished Solar Power Bank",
      price: 34.99,
      originalPrice: 49.99,
      image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5",
      carbonFootprint: 4.2,
      discount: 30
    },
    {
      id: "ref-2",
      name: "Refurbished Bamboo Speaker",
      price: 45.99,
      originalPrice: 69.99,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1",
      carbonFootprint: 5.8,
      discount: 34
    },
    {
      id: "ref-3",
      name: "Refurbished Hemp Backpack",
      price: 39.99,
      originalPrice: 59.99,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
      carbonFootprint: 3.1,
      discount: 33
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 mt-20">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 flex items-center justify-center gap-3">
            <RecycleIcon className="w-12 h-12 text-primary" />
            Recycle & Reuse
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join our sustainability programs and give products a second life
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <RefreshCw className="w-8 h-8 text-primary" />
            Recycling Programs
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {recyclingPrograms.map((program) => {
              const IconComponent = program.icon;
              return (
                <Card key={program.id} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <IconComponent className="w-10 h-10 text-primary" />
                    <Badge variant="secondary">{program.badge}</Badge>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                  <p className="text-muted-foreground mb-4">{program.description}</p>
                  <div className="flex items-center gap-2 mb-4">
                    <Leaf className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold text-primary">
                      Saves {program.carbonSaved} per item
                    </span>
                  </div>
                  <Button className="w-full">Learn More</Button>
                </Card>
              );
            })}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <Package className="w-8 h-8 text-primary" />
            Refurbished Products
          </h2>
          <p className="text-muted-foreground mb-6">
            High-quality refurbished products with reduced environmental impact
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {refurbishedProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-2 right-2 bg-green-600">
                    {product.discount}% OFF
                  </Badge>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl font-bold text-primary">${product.price}</span>
                    <span className="text-sm text-muted-foreground line-through">
                      ${product.originalPrice}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <Leaf className="w-4 h-4 text-primary" />
                    <span className="text-sm">{product.carbonFootprint} kg CO₂</span>
                  </div>
                  <Button className="w-full">Add to Cart</Button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Heart className="w-8 h-8 text-primary" />
              Eco Tips
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {ecoTips.map((tip, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-background rounded-lg">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingDown className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-muted-foreground">{tip}</p>
                </div>
              ))}
            </div>
          </Card>
        </section>

        <section>
          <Card className="p-8 text-center bg-gradient-to-r from-primary/10 to-secondary/10">
            <h2 className="text-3xl font-bold mb-4">Start Your Recycling Journey Today</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Every small action counts. Join our community of eco-conscious shoppers
              and make a real difference for our planet.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg">Join a Program</Button>
              <Button size="lg" variant="outline">Shop Refurbished</Button>
            </div>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Recycle;
