import { Mail, Zap, FileCheck } from "lucide-react";

const steps = [
  {
    icon: Mail,
    step: "01",
    title: "Connect Your Inbox",
    description: "Link your Gmail or Outlook account in seconds. zenyAI securely scans for receipts and invoices.",
  },
  {
    icon: Zap,
    step: "02",
    title: "AI Scans & Extracts",
    description: "Our AI automatically finds receipts, extracts all details (merchant, date, amount, tax), and categorizes them.",
  },
  {
    icon: FileCheck,
    step: "03",
    title: "Organized & Ready",
    description: "All your expenses are instantly organized and ready to export. Share reports with your accountant in one click.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">How it works</h2>
          <p className="text-xl text-muted-foreground">
            Three simple steps to automated bookkeeping
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection lines - hidden on mobile */}
          <div className="hidden md:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent opacity-30" />

          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="gradient-card rounded-2xl p-8 shadow-xl hover:shadow-xl transition-all duration-300 relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="gradient-hero p-4 rounded-xl">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <span className="text-5xl font-bold text-muted-foreground/20">
                    {step.step}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
