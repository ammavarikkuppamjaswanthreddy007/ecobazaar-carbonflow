import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Users, Package, ShoppingBag, Leaf } from "lucide-react";

const AdminDashboard = () => {
  const stats = [
    { label: "Total Users", value: "1,234", icon: Users, trend: "+12%" },
    { label: "Total Products", value: "456", icon: Package, trend: "+8%" },
    { label: "Orders Today", value: "89", icon: ShoppingBag, trend: "+23%" },
    { label: "Avg Carbon Impact", value: "4.2 kg", icon: Leaf, trend: "-5%" },
  ];

  const recentUsers = [
    { name: "John Doe", email: "john@example.com", role: "User", joined: "2025-01-20" },
    { name: "Jane Smith", email: "jane@example.com", role: "Seller", joined: "2025-01-19" },
    { name: "Bob Wilson", email: "bob@example.com", role: "User", joined: "2025-01-18" },
  ];

  const topProducts = [
    { name: "Bamboo Toothbrush Set", sales: 450, carbon: 0.5, category: "Personal Care" },
    { name: "Organic Cotton Tote", sales: 380, carbon: 2.1, category: "Accessories" },
    { name: "Solar Power Bank", sales: 320, carbon: 8.5, category: "Electronics" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 mt-20">
        <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <stat.icon className="w-8 h-8 text-primary" />
                <Badge variant={stat.trend.startsWith('+') ? "default" : "secondary"}>
                  {stat.trend}
                </Badge>
              </div>
              <p className="text-3xl font-bold mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Recent Users</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Joined</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentUsers.map((user, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <div>
                        <p className="font-medium">{user.name}</p>
                        <p className="text-sm text-muted-foreground">{user.email}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{user.role}</Badge>
                    </TableCell>
                    <TableCell>{user.joined}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Top Products</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead>Sales</TableHead>
                  <TableHead>Carbon</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {topProducts.map((product, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <div>
                        <p className="font-medium">{product.name}</p>
                        <p className="text-sm text-muted-foreground">{product.category}</p>
                      </div>
                    </TableCell>
                    <TableCell className="font-semibold">{product.sales}</TableCell>
                    <TableCell>
                      <Badge variant={product.carbon < 3 ? "default" : "secondary"}>
                        {product.carbon} kg
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AdminDashboard;
