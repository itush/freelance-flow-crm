import React from 'react'

interface PricingCardProps {
  plan: string;
  price: string;
  features: string[];
  isPremium?: boolean;
}

function PricingCard({ plan, price, features }: PricingCardProps) {
  return (
    <div className="border rounded-lg p-8 flex flex-col gap-4 shadow-md hover:shadow-xl transition w-full md:w-1/3">
      <h3 className="text-2xl font-bold">{plan}</h3>
      <p className="text-3xl font-extrabold">{price}</p>
      <ul className="text-gray-600 space-y-2 dark:text-slate-400">
        {features.map((feature, i) => (
          <li key={i}>• {feature}</li>
        ))}
      </ul>
      <button className="mt-auto bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700">
        {plan === "Free" ? "Get Started" : "Upgrade Now"}
      </button>
    </div>
  );
}

export default function PricingSection() {
  return (
    <section id="pricing" className="w-full px-6 py-16 bg-slate-200 dark:bg-slate-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Pricing</h2>
        <p className="text-gray-600 mb-8 dark:text-slate-400">
          Start free and upgrade as your freelance business grows.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <PricingCard
            plan="Free"
            price="0"
            features={[
              "Contact Management",
              "Basic Project Tracking",
              "Simple Invoicing",
            ]}
          />
          <PricingCard
            plan="Premium"
            price="$29/mo"
            features={[
              "Advanced Automation",
              "Detailed Analytics",
              "Priority Support",
              "Custom Integrations",
            ]}
            isPremium
          />
        </div>
      </div>
    </section>
  )
}
