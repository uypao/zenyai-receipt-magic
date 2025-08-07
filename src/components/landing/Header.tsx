import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-border/60">
      <nav className="container mx-auto flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2">
          <img
            src="/lovable-uploads/4ba0d2ec-0ca0-4680-8dc3-2ec35b99e0f7.png"
            alt="zenyAI app logo"
            className="h-8 w-8 rounded"
            loading="lazy"
          />
          <span className="text-lg font-semibold">zenyAI</span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#features" className="hover:text-primary transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-primary transition-colors">How it works</a>
          <a href="#cta" className="hover:text-primary transition-colors">Get the app</a>
        </div>
        <div className="flex items-center gap-3">
          <a href="#cta" className={cn("hidden sm:inline-flex")}> 
            <Button variant="hero" size="sm">Get Early Access</Button>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
