import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

const FAQ = () => {
  const faqs = [
    {
      question: "What is EcoBazaar?",
      answer: "EcoBazaar is an eco-friendly e-commerce platform dedicated to sustainable shopping. We offer a curated selection of environmentally conscious products with transparent carbon footprint tracking, helping you make informed purchasing decisions that benefit the planet.",
    },
    {
      question: "How do you calculate the carbon footprint?",
      answer: "We work with environmental experts and suppliers to calculate the carbon footprint of each product throughout its lifecycle - from manufacturing and materials to packaging and shipping. This includes emissions from production, transportation, and end-of-life disposal.",
    },
    {
      question: "What are Carbon Points and how do they work?",
      answer: "Carbon Points are our reward system for choosing eco-friendly products. The lower the carbon footprint of your purchase, the more points you earn. Points can be redeemed for discounts on future purchases and unlock special eco-warrior achievements.",
    },
    {
      question: "Do you offer free shipping?",
      answer: "Yes! We offer free carbon-neutral shipping on all orders. We offset the emissions from our shipping process by investing in verified environmental projects, ensuring your delivery has minimal environmental impact.",
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for most products. If you're not satisfied with your purchase, you can return it for a full refund or exchange. We also ensure returned items are recycled or repurposed whenever possible to minimize waste.",
    },
    {
      question: "Are all products on EcoBazaar eco-friendly?",
      answer: "Yes! Every product on our platform meets strict sustainability criteria. We carefully vet all suppliers and products to ensure they align with our environmental standards, including sustainable materials, ethical production, and minimal carbon footprint.",
    },
    {
      question: "How can I become a seller on EcoBazaar?",
      answer: "If you offer eco-friendly products, you can apply to become a seller through our authentication page. Select 'Seller' as your role and complete the registration. Our team will review your products to ensure they meet our sustainability standards before approval.",
    },
    {
      question: "Can I track my order?",
      answer: "Absolutely! Once your order is placed, you'll receive a confirmation email with tracking information. You can also view all your orders and their status in your user profile under 'Order History'.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit and debit cards, digital wallets (Apple Pay, Google Pay), and bank transfers. All transactions are securely processed with industry-standard encryption.",
    },
    {
      question: "How does shopping at EcoBazaar help the environment?",
      answer: "Every purchase at EcoBazaar directly supports sustainable businesses and reduces demand for high-carbon products. We also invest a portion of profits into reforestation and renewable energy projects. Our community has collectively saved over 45,000 kg of CO₂ emissions!",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 mt-20">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground">
            Find answers to common questions about EcoBazaar
          </p>
        </div>

        <Card className="max-w-4xl mx-auto p-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>

        <Card className="max-w-4xl mx-auto p-8 mt-8 bg-gradient-to-br from-primary/5 to-secondary/5 text-center">
          <h3 className="text-2xl font-bold mb-3">Still Have Questions?</h3>
          <p className="text-muted-foreground mb-4">
            Our support team is here to help! Reach out through our contact page.
          </p>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
