import React from 'react'

interface TestimonialCardProps {
  quote: string;
  author: string;
}

function TestimonialCard({ quote, author }: TestimonialCardProps) {
  return (
    <div className="p-6 border rounded-lg shadow-md">
      <p className="italic text-gray-700">`{quote}`</p>
      <p className="mt-4 text-gray-800 font-bold">- {author}</p>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="w-full px-6 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">What Freelancers Say</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <TestimonialCard
            quote="FreelanceFlow CRM has revolutionized my workflow, allowing me to focus more on creativity than administration."
            author="Jane Doe, Freelance Designer"
          />
          <TestimonialCard
            quote="A game changer! The automated invoicing means no more tedious follow-ups for late payments."
            author="John Smith, Digital Marketer"
          />
        </div>
      </div>
    </section>
  )
}
