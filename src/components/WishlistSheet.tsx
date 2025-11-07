import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { getWishlistItems, removeFromWishlist } from "@/data/mockData";
import { products } from "@/data/products";
import { useToast } from "@/hooks/use-toast";

const WishlistSheet = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [wishlistIds, setWishlistIds] = useState<string[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setWishlistIds(getWishlistItems());
  }, [open]);

  const wishlistProducts = products.filter((p) => wishlistIds.includes(p.id));

  const handleRemove = (productId: string) => {
    removeFromWishlist(productId);
    setWishlistIds(getWishlistItems());
    toast({
      title: "Removed from wishlist",
      description: "Item has been removed from your wishlist.",
    });
  };

  const handleAddToCart = (productId: string, productName: string) => {
    // In a real app, this would add to cart
    toast({
      title: "Added to cart! 🛒",
      description: `${productName} has been added to your cart.`,
    });
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Heart className="w-5 h-5" />
          {wishlistIds.length > 0 && (
            <Badge
              variant="destructive"
              className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
            >
              {wishlistIds.length}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-primary" />
            My Wishlist
          </SheetTitle>
          <SheetDescription>
            {wishlistProducts.length === 0
              ? "Your wishlist is empty"
              : `${wishlistProducts.length} item${wishlistProducts.length > 1 ? "s" : ""} in your wishlist`}
          </SheetDescription>
        </SheetHeader>

        <div className="mt-6 space-y-4">
          {wishlistProducts.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <Heart className="w-12 h-12 mx-auto mb-3 opacity-30" />
              <p>Start adding products you love!</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setOpen(false);
                  navigate("/products");
                }}
              >
                Browse Products
              </Button>
            </div>
          ) : (
            wishlistProducts.map((product) => (
              <div
                key={product.id}
                className="flex gap-3 p-3 border rounded-lg hover:shadow-md transition-shadow"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-20 object-cover rounded-lg cursor-pointer"
                  onClick={() => {
                    setOpen(false);
                    navigate(`/product/${product.id}`);
                  }}
                />
                <div className="flex-1 min-w-0">
                  <h4
                    className="font-semibold text-sm mb-1 truncate cursor-pointer hover:text-primary"
                    onClick={() => {
                      setOpen(false);
                      navigate(`/product/${product.id}`);
                    }}
                  >
                    {product.name}
                  </h4>
                  <p className="text-lg font-bold text-primary mb-2">
                    ${product.price}
                  </p>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="flex-1"
                      onClick={() => handleAddToCart(product.id, product.name)}
                    >
                      <ShoppingCart className="w-3 h-3 mr-1" />
                      Add
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleRemove(product.id)}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {wishlistProducts.length > 0 && (
          <div className="mt-6 pt-4 border-t">
            <Button
              className="w-full"
              variant="outline"
              onClick={() => {
                setOpen(false);
                navigate("/products");
              }}
            >
              Continue Shopping
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default WishlistSheet;
