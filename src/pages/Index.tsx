import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "zenyAI — Download Today";
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
      <link rel="icon" href="/favicon.ico" />
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <section id="cta" className="py-16 md:py-24">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Built with privacy and accuracy in mind</h2>
            <p className="text-muted-foreground mb-8">Launching worldwide on App Store & Google Play.</p>
            <div className="flex flex-wrap gap-3 justify-center">
            <a href="#cta">
              <img src="/lovable-uploads/appleDL.svg" alt="Apple Download" className="w-48 h-24 object-contain" />
            </a>
            <a href="#how-it-works">
              <img src="/lovable-uploads/googleDL.png" alt="Google Download" className="w-48 h-24 object-contain" />
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
