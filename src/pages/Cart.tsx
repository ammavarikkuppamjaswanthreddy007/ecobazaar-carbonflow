import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Leaf, ShoppingBag, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CartItem {
  id: string;
  name: string;
  price: number;
  carbonFootprint: number;
  image: string;
  quantity: number;
}

const Cart = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "Organic Cotton T-Shirt",
      price: 29.99,
      carbonFootprint: 2.5,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
      quantity: 2,
    },
    {
      id: "2",
      name: "Bamboo Water Bottle",
      price: 24.99,
      carbonFootprint: 1.2,
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8",
      quantity: 1,
    },
  ]);

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalCarbon = cartItems.reduce((sum, item) => sum + item.carbonFootprint * item.quantity, 0);
  const carbonPoints = Math.floor(totalCarbon < 10 ? 50 : totalCarbon < 20 ? 30 : 10);

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id));
    toast({
      title: "Item removed",
      description: "Product removed from cart",
    });
  };

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(cartItems.map(item => 
      item.id === id 
        ? { ...item, quantity: Math.max(1, item.quantity + delta) }
        : item
    ));
  };

  const handleCheckout = () => {
    toast({
      title: "Order placed! 🎉",
      description: `You earned ${carbonPoints} Carbon Points for choosing eco-friendly products!`,
    });
    setCartItems([]);
    setTimeout(() => navigate("/profile"), 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 mt-20">
        <h1 className="text-4xl font-bold text-foreground mb-8 flex items-center gap-3">
          <ShoppingBag className="w-10 h-10 text-primary" />
          Shopping Cart
        </h1>

        {cartItems.length === 0 ? (
          <Card className="p-12 text-center">
            <p className="text-muted-foreground mb-4">Your cart is empty</p>
            <Button onClick={() => navigate("/products")}>Continue Shopping</Button>
          </Card>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map(item => (
                <Card key={item.id} className="p-4 hover:shadow-lg transition-shadow">
                  <div className="flex gap-4">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{item.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Leaf className="w-4 h-4 text-primary" />
                        <span className="text-sm text-muted-foreground">
                          {item.carbonFootprint} kg CO₂
                        </span>
                      </div>
                      <div className="flex items-center gap-4 mt-3">
                        <div className="flex items-center gap-2">
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => updateQuantity(item.id, -1)}
                          >
                            -
                          </Button>
                          <span className="font-medium">{item.quantity}</span>
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => updateQuantity(item.id, 1)}
                          >
                            +
                          </Button>
                        </div>
                        <span className="font-bold text-lg">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeItem(item.id)}
                      className="text-destructive hover:bg-destructive/10"
                    >
                      <Trash2 className="w-5 h-5" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="p-6 h-fit sticky top-24">
              <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
              <Separator className="mb-4" />
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Shipping</span>
                  <span className="text-primary font-medium">FREE</span>
                </div>
              </div>

              <Separator className="mb-4" />

              <div className="bg-primary/10 rounded-lg p-4 mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Leaf className="w-5 h-5 text-primary" />
                  <span className="font-semibold">Carbon Impact</span>
                </div>
                <p className="text-2xl font-bold text-primary mb-1">
                  {totalCarbon.toFixed(1)} kg CO₂
                </p>
                <p className="text-sm text-muted-foreground">
                  You'll earn <span className="font-bold text-accent">{carbonPoints} Carbon Points</span>
                </p>
              </div>

              <div className="flex justify-between text-xl font-bold mb-6">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>

              <Button 
                className="w-full" 
                size="lg"
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </Button>
            </Card>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
