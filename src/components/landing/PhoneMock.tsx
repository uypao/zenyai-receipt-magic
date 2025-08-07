const Stat = ({ label, value }: { label: string; value: string }) => (
  <div className="rounded-lg border bg-card p-3">
    <p className="text-xs text-muted-foreground">{label}</p>
    <p className="mt-1 text-lg font-semibold">{value}</p>
  </div>
);

const ReceiptRow = ({ vendor, amount, tag }: { vendor: string; amount: string; tag: string }) => (
  <div className="flex items-center justify-between py-2">
    <div>
      <p className="text-sm font-medium">{vendor}</p>
      <p className="text-xs text-muted-foreground">{tag}</p>
    </div>
    <p className="text-sm font-semibold">{amount}</p>
  </div>
);

const PhoneMock = () => {
  return (
    <div className="relative mx-auto w-full max-w-[320px]">
      {/* iPhone frame */}
      <div className="relative rounded-[2.2rem] border border-border bg-card p-2 shadow-elevate">
        {/* Side buttons */}
        <div className="absolute left-[-3px] top-16 h-10 w-[3px] rounded bg-border" aria-hidden="true" />
        <div className="absolute right-[-3px] top-24 h-16 w-[3px] rounded bg-border" aria-hidden="true" />

        {/* Screen */}
        <div className="relative rounded-[1.8rem] bg-background p-3">
          {/* Notch */}
          <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-b-[1rem] bg-foreground/90" aria-hidden="true" />

          <div className="mt-6 space-y-3">
            {/* Header */}
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold">Dashboard</p>
              <span className="text-xs text-muted-foreground">Today</span>
            </div>

            {/* Total card */}
            <div className="rounded-xl bg-gradient-brand p-4 text-primary-foreground shadow-glow">
              <p className="text-xs opacity-90">Total this month</p>
              <p className="mt-1 text-2xl font-bold">$3,482.10</p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-3 gap-2">
              <Stat label="Receipts" value="128" />
              <Stat label="Taxes" value="$432" />
              <Stat label="Savings" value="$96" />
            </div>

            {/* Mini bars */}
            <div className="rounded-lg border p-3">
              <p className="text-xs text-muted-foreground mb-2">Weekly spend</p>
              <div className="flex items-end gap-1 h-16">
                {[10, 28, 20, 36, 14, 30, 22].map((h, i) => (
                  <div key={i} className="flex-1 rounded-t bg-accent" style={{ height: `${h * 2}px` }} />
                ))}
              </div>
            </div>

            {/* Receipts list */}
            <div className="rounded-lg border p-3">
              <p className="text-xs text-muted-foreground mb-2">Latest receipts</p>
              <ReceiptRow vendor="Coffee Roasters" amount="$4.80" tag="Meals" />
              <ReceiptRow vendor="City Taxi" amount="$18.20" tag="Transport" />
              <ReceiptRow vendor="Office Mart" amount="$62.10" tag="Supplies" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneMock;
