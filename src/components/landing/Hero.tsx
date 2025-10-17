import { Button } from "@/components/ui/button";
import { Mail, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">AI-Powered Bookkeeping</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-balance leading-tight">
              Smarter Bookkeeping.{" "}
              <span className="gradient-hero bg-clip-text text-transparent">
                Zero Manual Work.
              </span>
            </h1>

            <p className="text-xl text-muted-foreground text-balance max-w-2xl">
              Meet zenyAI — your personal bookkeeping assistant. Automatically scan Gmail or Outlook 
              for receipts, extract details with AI, and organize everything for tax season in seconds.
            </p>

            <div className="flex items-center">
             <Button variant="link" onClick={() => window.open('https://apps.apple.com/us/app/zenyai-expense-tracker/id6751862953?platform=iphone')}>
               <img src="/lovable-uploads/appleDL.svg" className="h-12" />  
             </Button> 
            
             <Button variant="link" onClick={() => window.open('https://play.google.com/store/apps/details?id=com.allan.app')}>
               <img src="/lovable-uploads/googleDL.png" className="h-12 " />
             </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-950 to-black opacity-10 blur-3xl rounded-full" />
            <img 
              src="/lovable-uploads/hero.png" 
              alt="AI scanning receipts automatically" 
              className="relative z-10 w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
