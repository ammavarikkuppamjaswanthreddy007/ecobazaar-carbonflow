import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import CarbonChart from "@/components/CarbonChart";
import CarbonStatsCard from "@/components/CarbonStatsCard";
import RewardsSection from "@/components/RewardsSection";
import RecommendationsGrid from "@/components/RecommendationsGrid";
import { mockOrders } from "@/data/mockData";
import {
  LayoutDashboard,
  Package,
  Leaf,
  Award,
  TrendingDown,
  ShoppingBag,
} from "lucide-react";

const Dashboard = () => {
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
      setCarbonPoints(parseInt(points || "160"));
    }
  }, [navigate]);

  const totalCarbon = mockOrders.reduce((sum, order) => sum + order.totalCarbon, 0);
  const totalOrders = mockOrders.length;
  const avgCarbon = totalOrders > 0 ? totalCarbon / totalOrders : 0;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-8 mt-20">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
            <LayoutDashboard className="w-10 h-10 text-primary" />
            My Dashboard
          </h1>
          <p className="text-muted-foreground">
            Welcome back, {userName}! Track your eco-impact and rewards.
          </p>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-auto">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="carbon">Carbon Insights</TabsTrigger>
            <TabsTrigger value="rewards">Rewards</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <CarbonStatsCard
                title="Total CO₂ Emissions"
                value={`${totalCarbon.toFixed(1)} kg`}
                subtitle="Last 30 days"
                icon={Leaf}
                trend="down"
                trendValue="12%"
              />
              <CarbonStatsCard
                title="Carbon Points"
                value={carbonPoints.toString()}
                subtitle="Available to redeem"
                icon={Award}
              />
              <CarbonStatsCard
                title="Total Orders"
                value={totalOrders.toString()}
                subtitle="All time"
                icon={ShoppingBag}
              />
              <CarbonStatsCard
                title="Avg CO₂ per Order"
                value={`${avgCarbon.toFixed(1)} kg`}
                subtitle="Below average"
                icon={TrendingDown}
                trend="down"
                trendValue="8%"
              />
            </div>

            <CarbonChart />
            <RecommendationsGrid />
          </TabsContent>

          <TabsContent value="orders" className="space-y-4">
            <Card className="p-6">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Package className="w-6 h-6 text-primary" />
                Order History
              </h3>
              <div className="space-y-4">
                {mockOrders.map((order) => (
                  <div
                    key={order.id}
                    className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <p className="font-semibold text-lg">{order.id}</p>
                        <p className="text-sm text-muted-foreground">{order.date}</p>
                      </div>
                      <Badge
                        variant={
                          order.status === "Delivered"
                            ? "default"
                            : order.status === "In Transit"
                            ? "secondary"
                            : "outline"
                        }
                      >
                        {order.status}
                      </Badge>
                    </div>
                    <div className="space-y-2 mb-3">
                      {order.items.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-sm">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-12 h-12 object-cover rounded"
                          />
                          <div className="flex-1">
                            <p className="font-medium">{item.name}</p>
                            <p className="text-muted-foreground">
                              Qty: {item.quantity} × ${item.price}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between items-center pt-3 border-t">
                      <div className="flex items-center gap-4">
                        <span className="font-bold text-lg">${order.total.toFixed(2)}</span>
                        <div className="flex items-center gap-1 text-sm">
                          <Leaf className="w-4 h-4 text-primary" />
                          <span>{order.totalCarbon.toFixed(1)} kg CO₂</span>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          +{order.earnedPoints} pts
                        </Badge>
                      </div>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="carbon" className="space-y-6">
            <div className="grid gap-4 md:grid-cols-3">
              <CarbonStatsCard
                title="This Week"
                value={`${mockOrders[0]?.totalCarbon.toFixed(1) || "0"} kg`}
                subtitle="CO₂ emissions"
                icon={Leaf}
                trend="down"
                trendValue="15%"
              />
              <CarbonStatsCard
                title="This Month"
                value={`${totalCarbon.toFixed(1)} kg`}
                subtitle="CO₂ emissions"
                icon={Leaf}
              />
              <CarbonStatsCard
                title="Trees Equivalent"
                value={Math.floor(totalCarbon / 5).toString()}
                subtitle="Carbon offset needed"
                icon={TrendingDown}
              />
            </div>
            <CarbonChart />
          </TabsContent>

          <TabsContent value="rewards" className="space-y-6">
            <RewardsSection userPoints={carbonPoints} />
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
