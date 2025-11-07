import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Leaf, ShoppingCart, User, Menu, X, Search } from "lucide-react";
import WishlistSheet from "./WishlistSheet";

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [carbonPoints, setCarbonPoints] = useState(0);

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("userName"));
    const points = localStorage.getItem("carbonPoints");
    setCarbonPoints(parseInt(points || "160"));
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    navigate("/");
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-card/95 backdrop-blur-sm border-b border-border z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 gap-4">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity flex-shrink-0">
            <Leaf className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold">EcoBazaar</span>
          </Link>

          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-xl mx-4">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="Search eco-friendly products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pr-10"
              />
              <Button
                type="submit"
                size="icon"
                variant="ghost"
                className="absolute right-0 top-0 h-full"
              >
                <Search className="w-5 h-5" />
              </Button>
            </div>
          </form>

          <div className="hidden md:flex items-center gap-6">
            <Link to="/products" className="hover:text-primary transition-colors whitespace-nowrap">
              Products
            </Link>
            <Link to="/recycle" className="hover:text-primary transition-colors whitespace-nowrap">
              Recycle
            </Link>
            <Link to="/about" className="hover:text-primary transition-colors whitespace-nowrap">
              About
            </Link>
            <Link to="/contact" className="hover:text-primary transition-colors whitespace-nowrap">
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4 flex-shrink-0">
            {isLoggedIn && (
              <div className="flex items-center gap-1 px-3 py-1 bg-primary/10 rounded-full">
                <Leaf className="w-4 h-4 text-primary" />
                <span className="font-bold text-sm">{carbonPoints}</span>
                <span className="text-xs text-muted-foreground">pts</span>
              </div>
            )}
            
            <WishlistSheet />
            
            <Button variant="ghost" size="icon" onClick={() => navigate("/cart")}>
              <ShoppingCart className="w-5 h-5" />
            </Button>
            
            {isLoggedIn ? (
              <>
                <Button variant="ghost" size="icon" onClick={() => navigate("/dashboard")}>
                  <User className="w-5 h-5" />
                </Button>
                <Button variant="outline" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            ) : (
              <Button onClick={() => navigate("/auth")}>
                Login
              </Button>
            )}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link to="/products" className="hover:text-primary transition-colors">
                Products
              </Link>
              <Link to="/recycle" className="hover:text-primary transition-colors">
                Recycle
              </Link>
              <Link to="/about" className="hover:text-primary transition-colors">
                About
              </Link>
              <Link to="/contact" className="hover:text-primary transition-colors">
                Contact
              </Link>
              <Link to="/cart" className="hover:text-primary transition-colors">
                Cart
              </Link>
              {isLoggedIn ? (
                <>
                  <Link to="/profile" className="hover:text-primary transition-colors">
                    Profile
                  </Link>
                  <Button variant="outline" onClick={handleLogout}>
                    Logout
                  </Button>
                </>
              ) : (
                <Button onClick={() => navigate("/auth")}>Login</Button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
