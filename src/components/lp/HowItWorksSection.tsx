import React from 'react'

interface HowStepProps {
  step: number;
  title: string;
  description: string;
}

function HowStep({ step, title, description }: HowStepProps) {
  return (
    <div className="p-6">
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-500 text-white font-bold mx-auto">
        {step}
      </div>
      <h3 className="mt-4 text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
}

export default function HowItWorksSection() {
  return (
    <section className="w-full px-6 py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <HowStep
            step={1}
            title="Sign Up"
            description="Create your account and set up your profile in minutes."
          />
          <HowStep
            step={2}
            title="Organize"
            description="Import or add clients, projects, and tasks effortlessly."
          />
          <HowStep
            step={3}
            title="Thrive"
            description="Automate your workflow and focus on growing your business."
          />
        </div>
      </div>
    </section>
  );
}