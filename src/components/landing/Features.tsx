import { Camera, Sparkles, FileSpreadsheet } from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "Snap receipts instantly",
    desc: "Capture receipts in seconds with blazing-fast OCR—no typing required.",
  },
  {
    icon: Sparkles,
    title: "Auto-categorize & reconcile",
    desc: "We classify expenses, extract taxes, and auto-suggest accounts.",
  },
  {
    icon: FileSpreadsheet,
    title: "Export and sync",
    desc: "Export to CSV or sync to your tools (QuickBooks, Xero—coming soon).",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4">Built for effortless bookkeeping</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          From capture to export, zenyAI removes friction at every step.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <article key={title} className="rounded-lg border bg-card p-6 shadow-sm hover:shadow-elevate transition-shadow">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent">
                <Icon className="text-primary" />
              </div>
              <h3 className="mt-4 font-semibold text-xl">{title}</h3>
              <p className="mt-2 text-muted-foreground">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
