import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Leaf, Target, Heart, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Leaf,
      title: "Sustainability First",
      description: "We prioritize eco-friendly products that minimize environmental impact and promote a greener future.",
    },
    {
      icon: Target,
      title: "Transparency",
      description: "Every product comes with clear carbon footprint data so you can make informed decisions.",
    },
    {
      icon: Heart,
      title: "Quality & Ethics",
      description: "We partner only with suppliers who share our commitment to ethical and sustainable practices.",
    },
    {
      icon: Users,
      title: "Community Impact",
      description: "Together with our customers, we're building a community dedicated to positive environmental change.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 mt-20">
        <section className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold mb-6">About EcoBazaar</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your Green Shopping Partner - Making Sustainable Living Easy and Accessible
          </p>
        </section>

        <section className="mb-16">
          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/10 to-secondary/10">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              At EcoBazaar, we believe that every purchase is a vote for the kind of world we want to live in. 
              Our mission is to make sustainable shopping accessible, transparent, and rewarding for everyone.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We curate a diverse selection of eco-friendly products, providing complete transparency about their 
              environmental impact through detailed carbon footprint tracking. By empowering consumers with knowledge 
              and choice, we're creating a marketplace where sustainability meets convenience.
            </p>
          </Card>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <value.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <Card className="p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              EcoBazaar was born from a simple yet powerful idea: what if every online purchase could contribute 
              to a healthier planet? Founded in 2025, we started with a vision to revolutionize e-commerce by 
              putting sustainability at its core.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              We noticed that while many people wanted to shop sustainably, they often struggled to find 
              trustworthy eco-friendly products or understand their environmental impact. We set out to solve 
              this by creating a platform that combines the convenience of modern e-commerce with transparent 
              sustainability metrics.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Today, EcoBazaar serves thousands of conscious consumers, offering a carefully curated selection 
              of sustainable products across multiple categories. Our Carbon Points reward system has helped 
              our community save over 45,000 kg of CO₂ emissions, equivalent to planting nearly 9,000 trees.
            </p>
          </Card>
        </section>

        <section className="text-center py-12 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Join Our Green Revolution</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every purchase matters. Together, we're building a more sustainable future, one eco-friendly 
            product at a time.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
