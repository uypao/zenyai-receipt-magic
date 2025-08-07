import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "zenyAI — Simple AI OCR Bookkeeping";
  }, []);

  const ld = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "zenyAI",
    applicationCategory: "FinanceApplication",
    operatingSystem: "iOS, Android",
    description: "Mobile bookkeeping app using AI OCR for effortless receipt scanning and categorization.",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" }
  };

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <section id="cta" className="py-16 md:py-24">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Be first to try zenyAI</h2>
            <p className="text-muted-foreground mb-8">Join the early access list and get notified when we launch.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="#" aria-label="Join the zenyAI waitlist">
                <Button variant="hero" size="lg">Join the waitlist</Button>
              </a>
              <a href="#how-it-works">
                <Button variant="outline" size="lg">Learn more</Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </>
  );
};

export default Index;
