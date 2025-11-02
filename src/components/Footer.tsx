import { Leaf, Facebook, Twitter, Instagram, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold">EcoBazaar</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your Green Shopping Partner. Every purchase matters for the planet.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Shop</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/products" className="hover:text-primary transition-colors">All Products</Link></li>
              <li><Link to="/products" className="hover:text-primary transition-colors">Best Sellers</Link></li>
              <li><Link to="/products" className="hover:text-primary transition-colors">New Arrivals</Link></li>
              <li><Link to="/products" className="hover:text-primary transition-colors">Eco Picks</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">About</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-primary transition-colors">Our Story</Link></li>
              <li><Link to="/" className="hover:text-primary transition-colors">Carbon Impact</Link></li>
              <li><Link to="/" className="hover:text-primary transition-colors">Sustainability</Link></li>
              <li><Link to="/" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex gap-4 mb-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              Subscribe to our newsletter for eco tips and exclusive offers.
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 EcoBazaar. Track. Shop. Save the Earth.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
