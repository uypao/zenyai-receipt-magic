import { Mail, Scan, FolderKanban, Download } from "lucide-react";

const features = [
  {
    icon: Mail,
    title: "Auto-Scan from Gmail & Outlook",
    description: "Automatically scans your connected email inbox for receipts and invoices. No need to download or upload receipts manually. Keeps your bookkeeping always up to date.",
    image: '/lovable-uploads/feature-email-scan.png',
    gradient: "from-slate-700 to-slate-900",
  },
  {
    icon: Scan,
    title: "AI-Powered OCR Receipt Capture",
    description: "Instantly extract data (merchant, date, total, tax, category) from uploaded or photographed receipts. Works seamlessly with your phone's camera or uploaded files.",
    image: '/lovable-uploads/feature-ocr.png',
    gradient: "from-blue-900 to-slate-950",
  },
  {
    icon: FolderKanban,
    title: "Auto Categorization",
    description: "Smart AI categorizes expenses automatically (e.g., travel, meals, software). Saves hours of manual sorting each month.",
    image: '/lovable-uploads/feature-categorization.png',
    gradient: "from-slate-800 to-blue-950",
  },
  {
    icon: Download,
    title: "Export & Share",
    description: "Export all your receipts or monthly summaries to PDF or CSV in one click. Perfect for accountants, freelancers, and small business owners.",
    image: '/lovable-uploads/export.png',
    gradient: "from-slate-700 to-black",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Everything you need for effortless bookkeeping
          </h2>
          <p className="text-xl text-muted-foreground">
            Save time, eliminate errors, and stay organized with AI-powered automation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group gradient-card rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.gradient} mb-6`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>

              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {feature.description}
              </p>

              {feature.image && (
                <div className="rounded-xl overflow-hidden bg-muted">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Features;
