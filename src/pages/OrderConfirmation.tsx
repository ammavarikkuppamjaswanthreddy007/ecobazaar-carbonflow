import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Leaf, Package } from "lucide-react";

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const orderNumber = `ECO${Math.random().toString(36).substr(2, 9).toUpperCase()}`;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 mt-20">
        <Card className="max-w-2xl mx-auto p-8 text-center">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-primary" />
          </div>

          <h1 className="text-4xl font-bold mb-4">Order Confirmed! 🎉</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Thank you for choosing eco-friendly products!
          </p>

          <div className="bg-muted rounded-lg p-6 mb-8">
            <p className="text-sm text-muted-foreground mb-2">Order Number</p>
            <p className="text-2xl font-bold">{orderNumber}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-6">
              <Leaf className="w-10 h-10 text-primary mx-auto mb-3" />
              <p className="font-semibold mb-1">Carbon Points Earned</p>
              <p className="text-3xl font-bold text-primary">+50 Points</p>
            </div>

            <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-lg p-6">
              <Package className="w-10 h-10 text-secondary mx-auto mb-3" />
              <p className="font-semibold mb-1">Estimated Delivery</p>
              <p className="text-3xl font-bold text-secondary">3-5 Days</p>
            </div>
          </div>

          <p className="text-muted-foreground mb-8">
            A confirmation email has been sent to your inbox with order details and tracking information.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => navigate("/profile")}>
              View Orders
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate("/products")}>
              Continue Shopping
            </Button>
          </div>
        </Card>

        <Card className="max-w-2xl mx-auto p-6 mt-6 bg-gradient-to-br from-primary/5 to-secondary/5">
          <h3 className="text-xl font-bold mb-3 text-center">🌍 Your Environmental Impact</h3>
          <p className="text-center text-muted-foreground">
            By choosing eco-friendly products, you're helping reduce carbon emissions and supporting 
            sustainable practices. Every purchase makes a difference for our planet!
          </p>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default OrderConfirmation;
