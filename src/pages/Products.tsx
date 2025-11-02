import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { products } from "@/data/products";

const Products = () => {
  const [sortBy, setSortBy] = useState("featured");
  const [filterCategory, setFilterCategory] = useState("all");

  const filteredProducts = products
    .filter(p => filterCategory === "all" || p.category === filterCategory)
    .sort((a, b) => {
      if (sortBy === "carbon-low") return a.carbonFootprint - b.carbonFootprint;
      if (sortBy === "carbon-high") return b.carbonFootprint - a.carbonFootprint;
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      return 0;
    });

  const categories = ["all", ...new Set(products.map(p => p.category))];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 mt-20">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-foreground mb-2">Eco-Friendly Products</h1>
          <p className="text-muted-foreground">Discover sustainable choices with transparent carbon footprints</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8 animate-slide-up">
          <div className="flex gap-4 flex-wrap">
            {categories.map(cat => (
              <Button
                key={cat}
                variant={filterCategory === cat ? "default" : "outline"}
                onClick={() => setFilterCategory(cat)}
                className="capitalize"
              >
                {cat}
              </Button>
            ))}
          </div>
          
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full md:w-[200px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="carbon-low">Carbon: Low to High</SelectItem>
              <SelectItem value="carbon-high">Carbon: High to Low</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Products;
