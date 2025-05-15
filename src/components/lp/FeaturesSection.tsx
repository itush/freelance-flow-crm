import React from 'react'


interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="p-6 border rounded-lg shadow-md hover:shadow-xl transition">
      <div className="text-4xl">{icon}</div>
      <h3 className="mt-4 text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
}
export default function FeaturesSection() {
  return (
    <section id="features" className="w-full px-6 py-16">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold">Core Features</h2>
        <p className="text-gray-600 mt-2">
          Everything you need to manage your freelance business in one place.
        </p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard
          icon="💼"
          title="Client Management"
          description="Centralize your client data and keep track of communications effortlessly."
        />
        <FeatureCard
          icon="📋"
          title="Project Tracking"
          description="Visualize tasks and deadlines with intuitive boards and timelines."
        />
        <FeatureCard
          icon="💰"
          title="Invoicing"
          description="Generate, send, and track invoices automatically; get paid faster."
        />
      </div>
    </section>
  )
}


