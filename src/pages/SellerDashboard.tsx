import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Package, TrendingUp, Leaf, DollarSign } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SellerDashboard = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    carbon: "",
    description: "",
  });

  const handleAddProduct = () => {
    toast({
      title: "Product added successfully! 🎉",
      description: "Your product is now live on EcoBazaar",
    });
    setFormData({ name: "", price: "", carbon: "", description: "" });
  };

  const stats = [
    { label: "Total Products", value: "24", icon: Package, color: "text-primary" },
    { label: "Total Sales", value: "$12,450", icon: DollarSign, color: "text-accent" },
    { label: "Avg Carbon/Product", value: "3.2 kg", icon: Leaf, color: "text-secondary" },
    { label: "Growth", value: "+23%", icon: TrendingUp, color: "text-primary" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 mt-20">
        <h1 className="text-4xl font-bold mb-8">Seller Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <p className="text-3xl font-bold mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </Card>
          ))}
        </div>

        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-6">Add New Product</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Product Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Eco-friendly product"
                />
              </div>
              <div>
                <Label htmlFor="price">Price ($)</Label>
                <Input
                  id="price"
                  type="number"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  placeholder="29.99"
                />
              </div>
              <div>
                <Label htmlFor="carbon">Carbon Footprint (kg CO₂)</Label>
                <Input
                  id="carbon"
                  type="number"
                  step="0.1"
                  value={formData.carbon}
                  onChange={(e) => setFormData({ ...formData, carbon: e.target.value })}
                  placeholder="2.5"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Describe your sustainable product..."
                  className="h-[180px]"
                />
              </div>
              <Button className="w-full" onClick={handleAddProduct}>
                Add Product
              </Button>
            </div>
          </div>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default SellerDashboard;
