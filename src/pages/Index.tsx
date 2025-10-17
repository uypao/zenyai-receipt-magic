import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { Testimonial } from "@/components/landing/Testimonial";
import { CTA } from "@/components/landing/CTA";

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
      <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonial />
        <CTA />
      </main>
      <Footer />
    </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </>
  );
};

export default Index;
