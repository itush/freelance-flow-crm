import React from 'react'

export default function FinalCTASection() {
  return (
    <section className="w-full px-6 py-16 bg-gray-50 dark:bg-slate-900 text-center ">
      <h2 className="text-3xl font-bold mb-4">
        Ready to Transform Your Freelance Business?
      </h2>
      <p className="text-xl text-gray-600 mb-8 dark:text-slate-400">
        Join hundreds of freelancers who have streamlined their workflows with FreelanceFlow CRM.
      </p>
      <button className="relative inline-block px-10 py-4 font-semibold text-white rounded-full focus:outline-none overflow-hidden">
        <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-violet-500 animate-gradient-rotate"></span>
        <span className="relative">Sign Up Free</span>
      </button>
    </section>
  )
}
