import { Button } from "@/components/ui/button";
import PhoneMock from "@/components/landing/PhoneMock";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-brand opacity-20" aria-hidden="true" />
      <div className="container mx-auto py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Simplicity for your receipts and bookkeeping
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-prose">
            zenyAI uses fast, accurate OCR and smart categorization to turn messy
            receipts into clean books—automatically.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#cta"><Button variant="hero" size="lg">Get Early Access</Button></a>
            <a href="#how-it-works"><Button variant="outline" size="lg">See how it works</Button></a>
          </div>
        </div>
        <div className="relative">
          <div className="mx-auto w-full max-w-sm transition-transform duration-300 will-change-transform hover:scale-[1.02]">
            <PhoneMock />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
