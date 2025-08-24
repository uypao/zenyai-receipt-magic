import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-brand opacity-80" aria-hidden="true" />
      <div className="container mx-auto py-20 md:py-28 grid md:grid-cols-2 gap-20 items-center">
        <div className="z-[1]">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Simplicity for your receipts and bookkeeping
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-prose">
            zenyAI uses fast, accurate OCR and smart categorization to turn messy
            receipts into clean books—automatically.
          </p>
          <div className="flex flex-wrap gap-3 ">
            <a href="#cta">
              <img src="/lovable-uploads/appleDL.svg" alt="Apple Download" className="w-48 h-24 object-contain" />
            </a>
            <a href="#how-it-works">
              <img src="/lovable-uploads/googleDL.png" alt="Google Download" className="w-48 h-24 object-contain" />
            </a>
          </div>
        </div>
        <div className="relative">
        <div className="mx-auto w-[90%] h-[60%]">
          <img
            src="/lovable-uploads/hero.svg"
            alt="zenyAI receipt OCR app icon"
            // className="h-20 w-20 mb-4"
            className="w-full h-full mb-4 object-contain"
            loading="lazy"
          />
          <p className="text-center text-base opacity-100 italic text-2xl md:text-2xl ">
            Point. Snap. Categorized.
          </p>
        </div>
          {/* <div className="mx-auto w-full max-w-sm perspective-1000">
            <div className="rounded-[2rem] border border-border bg-card p-8 shadow-elevate hover:shadow-glow transition-transform duration-300 will-change-transform">
              <div className="aspect-[9/19] w-full rounded-[1.5rem] bg-gradient-brand p-8 flex flex-col items-center justify-center text-primary-foreground">
                <img
                  src="/lovable-uploads/hero.svg"
                  alt="zenyAI receipt OCR app icon"
                  className="h-20 w-20 mb-4"
                  loading="lazy"
                />
                <p className="text-center text-base opacity-90">
                  Point. Snap. Categorized.
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
