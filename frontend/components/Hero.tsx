import Button from "./Button";
export default function Hero() {
  return (
    <section className="text-center py-24">
      <h1 className="text-6xl font-bold mb-6">
        Turn Data Into Insights
      </h1>

      <p className="text-xl text-slate-400 mb-8">
        Upload datasets and receive AI-powered analytics.
      </p>

      <Button text="Upload Dataset" />

    </section>
  );
}