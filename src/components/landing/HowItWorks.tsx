const steps = [
  { step: 1, title: "Scan", desc: "Open zenyAI and snap a photo of your receipt." },
  { step: 2, title: "Extract", desc: "AI OCR pulls totals, taxes, dates, and vendor details." },
  { step: 3, title: "Categorize", desc: "We auto-assign categories; you review and export." },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-accent/40">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4">How it works</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Get from paper to books in three quick steps.
        </p>
        <ol className="grid md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <li key={s.step} className="rounded-lg border bg-card p-6">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-brand text-primary-foreground font-semibold">
                {s.step}
              </span>
              <h3 className="mt-3 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-muted-foreground">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default HowItWorks;
