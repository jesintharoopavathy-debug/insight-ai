export default function Features() {
  const features = [
    "AI Insights",
    "SQL Generator",
    "Forecasting",
    "Anomaly Detection",
    "Dashboards",
    "PDF Reports",
  ];

  return (
    <section className="p-10">
      <h2 className="text-4xl font-bold text-center mb-10">
        Features
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature) => (
          <div
            key={feature}
            className="bg-slate-800 p-6 rounded-xl"
          >
            {feature}
          </div>
        ))}
      </div>
    </section>
  );
}