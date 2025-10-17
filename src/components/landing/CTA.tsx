import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const CTA = () => {
  return (
    <section id="cta" className="py-24 gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-black rounded-3xl p-12 md:p-16 shadow-2xl relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white mb-6">
                <Sparkles className="h-4 w-4" />
                <span className="text-sm font-medium">Start Your Free Trial</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
                Ready to automate your bookkeeping?
              </h2>

              <p className="text-xl text-white/90 mb-8 text-balance max-w-2xl mx-auto">
                Join thousands of freelancers and small business owners who have eliminated 
                manual receipt tracking.
              </p>

              {/* <div className="flex items-center">
              <Button variant="link" onClick={() => window.open('https://apps.apple.com/us/app/zenyai-expense-tracker/id6751862953?platform=iphone')}>
                <img src="/lovable-uploads/appleDL.svg" className="h-12" />  
              </Button> 
              
              <Button variant="link" onClick={() => window.open('https://play.google.com/store/apps/details?id=com.allan.app')}>
                <img src="/lovable-uploads/googleDL.png" className="h-12 " />
              </Button>
              </div> */}

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="link" 
                  // size="lg" 
                  onClick={() => window.open('https://apps.apple.com/us/app/zenyai-expense-tracker/id6751862953?platform=iphone')}
                  
                >
                  <img src="/lovable-uploads/appleDL.svg" className="h-12 border border-white/50 rounded-lg" />  
                </Button>
                <Button 
                  variant="link" 
                  // size="lg"
                  onClick={() => window.open('https://play.google.com/store/apps/details?id=com.allan.app')}
                >
                  <img src="/lovable-uploads/googleDL.png" className="h-12 " />
                </Button>
              </div>

              <div className="mt-8 text-white/80 text-sm">
                ✓ 7-day free trial  ✓ Cancel anytime
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
