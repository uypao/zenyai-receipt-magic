import { Button } from "@/components/ui/button";

const Header = () => {

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80; // adjust for your header height
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };


  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={'/lovable-uploads/app_v2.png'} alt="zenyAI" className="h-8 w-8" />
          <span className="text-xl font-bold">zenyAI: Expense Tracker</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" onClick={(e) => scrollToSection(e, 'features')} className="text-sm text-muted-foreground hover:text-foreground transition-base">
            Features
          </a>
          <a href="#how-it-works" onClick={(e) => scrollToSection(e, 'how-it-works')} className="text-sm text-muted-foreground hover:text-foreground transition-base">
            How it Works
          </a>
          <a href="#cta" onClick={(e) => scrollToSection(e, 'cta')} className="text-sm text-muted-foreground hover:text-foreground transition-base">
            Get The App
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Button onClick={(e) => scrollToSection(e, 'cta')} variant="hero" size="sm" className="bg-primary hover:bg-primary/90">
            Download Today!
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
