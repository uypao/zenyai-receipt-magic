import { Star } from "lucide-react";

export const Testimonial = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="gradient-card rounded-3xl p-12 shadow-xl">
            <div className="flex gap-1 mb-6 justify-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-primary text-primary" />
              ))}
            </div>

            <blockquote className="text-center">
              <p className="text-2xl md:text-3xl font-medium mb-8 text-balance leading-relaxed">
                "zenyAI has completely transformed how I manage my business expenses. 
                What used to take me hours every week now happens automatically. 
                I just connect my email and everything is organized perfectly. 
                It's like having a personal accountant working 24/7."
              </p>

              <footer className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-primary to-secondary" />
                  <div className="text-left">
                    <div className="font-semibold">Sarah Martinez</div>
                    <div className="text-sm text-muted-foreground">Freelance Designer</div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};
