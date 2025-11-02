import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Leaf, Package, MapPin, Award } from "lucide-react";

const Profile = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [carbonPoints, setCarbonPoints] = useState(0);

  useEffect(() => {
    const name = localStorage.getItem("userName");
    const points = localStorage.getItem("carbonPoints");
    if (!name) {
      navigate("/auth");
    } else {
      setUserName(name);
      setCarbonPoints(parseInt(points || "0"));
    }
  }, [navigate]);

  const orders = [
    { id: "1", date: "2025-01-15", total: 89.97, carbon: 8.5, status: "Delivered" },
    { id: "2", date: "2025-01-10", total: 149.99, carbon: 12.3, status: "In Transit" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 mt-20">
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6 md:col-span-1">
            <div className="text-center">
              <Avatar className="w-24 h-24 mx-auto mb-4">
                <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=John" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <h2 className="text-2xl font-bold mb-1">{userName}</h2>
              <p className="text-muted-foreground mb-4">Eco Warrior</p>
              
              <div className="bg-primary/10 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Leaf className="w-6 h-6 text-primary" />
                  <span className="text-sm font-medium">Carbon Points</span>
                </div>
                <p className="text-4xl font-bold text-primary">{carbonPoints}</p>
              </div>

              <div className="space-y-2 text-left">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Award className="w-4 h-4 text-muted-foreground" />
                  <span>Member since Jan 2025</span>
                </div>
              </div>
            </div>
          </Card>

          <div className="md:col-span-2 space-y-6">
            <Card className="p-6">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Package className="w-6 h-6 text-primary" />
                Order History
              </h3>
              <div className="space-y-4">
                {orders.map(order => (
                  <div key={order.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="font-semibold">Order #{order.id}</p>
                        <p className="text-sm text-muted-foreground">{order.date}</p>
                      </div>
                      <Badge variant={order.status === "Delivered" ? "default" : "secondary"}>
                        {order.status}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-4">
                        <span className="font-bold">${order.total}</span>
                        <div className="flex items-center gap-1 text-sm">
                          <Leaf className="w-4 h-4 text-primary" />
                          <span>{order.carbon} kg CO₂</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">View Details</Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-2xl font-bold mb-4">Eco Achievements</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <div className="text-3xl mb-2">🌱</div>
                  <p className="font-semibold">First Purchase</p>
                  <p className="text-xs text-muted-foreground">Unlocked</p>
                </div>
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <div className="text-3xl mb-2">♻️</div>
                  <p className="font-semibold">Eco Champion</p>
                  <p className="text-xs text-muted-foreground">100+ Points</p>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg opacity-50">
                  <div className="text-3xl mb-2">🌍</div>
                  <p className="font-semibold">Planet Protector</p>
                  <p className="text-xs text-muted-foreground">Locked</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Profile;
