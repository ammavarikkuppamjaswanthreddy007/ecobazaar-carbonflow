import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Leaf, Package, MapPin, Award, Heart, Edit2, Save, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Profile = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [userName, setUserName] = useState("");
  const [carbonPoints, setCarbonPoints] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState("");
  const [editedEmail, setEditedEmail] = useState("");
  const [editedPhone, setEditedPhone] = useState("");
  const [editedAddress, setEditedAddress] = useState("");

  useEffect(() => {
    const name = localStorage.getItem("userName");
    const points = localStorage.getItem("carbonPoints");
    const email = localStorage.getItem("userEmail") || "user@ecobazaar.com";
    const phone = localStorage.getItem("userPhone") || "+1 (555) 123-4567";
    const address = localStorage.getItem("userAddress") || "San Francisco, CA";
    
    if (!name) {
      navigate("/auth");
    } else {
      setUserName(name);
      setCarbonPoints(parseInt(points || "160"));
      setEditedName(name);
      setEditedEmail(email);
      setEditedPhone(phone);
      setEditedAddress(address);
    }
  }, [navigate]);

  const handleSaveProfile = () => {
    localStorage.setItem("userName", editedName);
    localStorage.setItem("userEmail", editedEmail);
    localStorage.setItem("userPhone", editedPhone);
    localStorage.setItem("userAddress", editedAddress);
    setUserName(editedName);
    setIsEditing(false);
    toast({
      title: "Profile updated! ✓",
      description: "Your changes have been saved successfully.",
    });
  };

  const handleCancelEdit = () => {
    setEditedName(userName);
    setEditedEmail(localStorage.getItem("userEmail") || "user@ecobazaar.com");
    setEditedPhone(localStorage.getItem("userPhone") || "+1 (555) 123-4567");
    setEditedAddress(localStorage.getItem("userAddress") || "San Francisco, CA");
    setIsEditing(false);
  };

  const orders = [
    { id: "1", date: "2025-01-15", total: 89.97, carbon: 8.5, status: "Delivered" },
    { id: "2", date: "2025-01-10", total: 149.99, carbon: 12.3, status: "In Transit" },
  ];

  const wishlist = [
    { id: "3", name: "Recycled Backpack", price: 49.99, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62" },
    { id: "8", name: "Solar Power Bank", price: 39.99, image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 mt-20">
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6 md:col-span-1">
            <div className="text-center">
              <div className="relative inline-block mb-4">
                <Avatar className="w-24 h-24">
                  <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${userName}`} />
                  <AvatarFallback>{userName.substring(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                {isEditing && (
                  <Button
                    size="icon"
                    variant="secondary"
                    className="absolute bottom-0 right-0 h-8 w-8 rounded-full"
                  >
                    <Edit2 className="w-4 h-4" />
                  </Button>
                )}
              </div>
              <h2 className="text-2xl font-bold mb-1">{userName}</h2>
              <p className="text-muted-foreground mb-4">Eco Warrior</p>
              
              <div className="bg-primary/10 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Leaf className="w-6 h-6 text-primary" />
                  <span className="text-sm font-medium">Carbon Points</span>
                </div>
                <p className="text-4xl font-bold text-primary">{carbonPoints}</p>
              </div>

              {isEditing ? (
                <div className="space-y-3 text-left">
                  <div>
                    <Label htmlFor="name" className="text-xs">Name</Label>
                    <Input
                      id="name"
                      value={editedName}
                      onChange={(e) => setEditedName(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-xs">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={editedEmail}
                      onChange={(e) => setEditedEmail(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-xs">Phone</Label>
                    <Input
                      id="phone"
                      value={editedPhone}
                      onChange={(e) => setEditedPhone(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="address" className="text-xs">Address</Label>
                    <Input
                      id="address"
                      value={editedAddress}
                      onChange={(e) => setEditedAddress(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div className="flex gap-2 pt-2">
                    <Button size="sm" onClick={handleSaveProfile} className="flex-1">
                      <Save className="w-4 h-4 mr-1" />
                      Save
                    </Button>
                    <Button size="sm" variant="outline" onClick={handleCancelEdit} className="flex-1">
                      <X className="w-4 h-4 mr-1" />
                      Cancel
                    </Button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="space-y-2 text-left mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span>{editedAddress}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Award className="w-4 h-4 text-muted-foreground" />
                      <span>Member since Jan 2025</span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => setIsEditing(true)}
                  >
                    <Edit2 className="w-4 h-4 mr-2" />
                    Edit Profile
                  </Button>
                  <Button
                    className="w-full mt-2"
                    onClick={() => navigate("/dashboard")}
                  >
                    View Dashboard
                  </Button>
                </>
              )}
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
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Heart className="w-6 h-6 text-primary" />
                Wishlist
              </h3>
              <div className="space-y-4">
                {wishlist.map(item => (
                  <div key={item.id} className="flex gap-4 border rounded-lg p-3 hover:shadow-md transition-shadow">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-lg font-bold text-primary">${item.price}</p>
                    </div>
                    <Button size="sm">Add to Cart</Button>
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
