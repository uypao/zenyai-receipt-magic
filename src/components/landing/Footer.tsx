import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="container mx-auto py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <img
            src="/lovable-uploads/4ba0d2ec-0ca0-4680-8dc3-2ec35b99e0f7.png"
            alt="zenyAI small logo"
            className="h-6 w-6"
            loading="lazy"
          />
          <span className="font-semibold">zenyAI</span>
        </div>
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} zenyAI. All rights reserved.</p>
        <a href="#cta"><Button size="sm" variant="outline">Join waitlist</Button></a>
      </div>
    </footer>
  );
};

export default Footer;
