import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Leaf, ShoppingCart, User, Menu, X } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("userName"));
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <nav className="fixed top-0 w-full bg-card/95 backdrop-blur-sm border-b border-border z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Leaf className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold">EcoBazaar</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link to="/products" className="hover:text-primary transition-colors">
              Products
            </Link>
            <Link to="/" className="hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/" className="hover:text-primary transition-colors">
              Impact
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => navigate("/cart")}>
              <ShoppingCart className="w-5 h-5" />
            </Button>
            
            {isLoggedIn ? (
              <>
                <Button variant="ghost" size="icon" onClick={() => navigate("/profile")}>
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
              <Link to="/" className="hover:text-primary transition-colors">
                About
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
