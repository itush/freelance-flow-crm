// components/lp/hero-section.tsx
import { Button } from '@/components/ui/button'; // Assuming Shadcn UI's button
import { MoveRight, Sparkles } from 'lucide-react'; // Example icons
import Link from 'next/link';

const HeroSection = () => {

 
  return (
    <section className="py-20 md:py-32 lg:py-40">
      <div className="container mx-auto px-4 text-center">
        {/* Optional: Subtle top accent like a badge or icon */}
        <div className="mb-6 flex justify-center">
          <a
            href="#" // Link to perhaps a "new features" page or blog post
            className="inline-flex items-center justify-center rounded-full bg-slate-800 px-4 py-1.5 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-700"
          >
            <Sparkles className="mr-2 h-4 w-4 text-cyan-400" />
            <span>Introducing AI-Powered Insights ✨</span> {/* Example Accent */}
          </a>
        </div>

        <h1 className="mb-6 font-inter text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl md:text-7xl lg:text-8xl">
          <span className="bg-gradient-to-r from-slate-400 via-slate-500 to-cyan-600 bg-clip-text">
            Streamline Your
          </span>
          <br />
          <span className="bg-gradient-to-r from-slate-400 via-slate-500 to-cyan-600 bg-clip-text">
            Freelance Workflow.
          </span>
        </h1>

        <p className="mx-auto mb-10 max-w-xl text-lg text-slate-400 md:text-xl lg:text-2xl">
          FreelanceFlow CRM centralizes client management, project tracking, and invoicing
          into one intuitive platform. Stop juggling, start flowing.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          {/* SPECIAL CTA BUTTON - We'll refine this */}
          <Link href="/login">
          <Button
            size="lg" // Shadcn UI button size
            className="cursor-pointer group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 text-base font-bold text-white shadow-lg transition-all duration-300 ease-in-out hover:shadow-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-75"
            // For rotating border, we'll add more classes or a wrapper
          >
            {/* Rotating Light Effect - conceptual structure */}
            <span className="absolute -inset-0.5 animate-spin-slow rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 opacity-0 transition-opacity duration-500 group-hover:opacity-75"></span>
            <span className="relative z-10">Get Started Free</span>
            <MoveRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
          </Link>
          <Button
            variant="outline"
            size="lg"
            className="h-12 border-slate-700 px-8 py-3 text-base font-bold text-slate-300 transition-colors hover:border-slate-500 hover:bg-slate-800 hover:text-white"
          >
            Learn More
          </Button>
        </div>

        {/* Optional: Small text under CTAs */}
        <p className="mt-6 text-sm text-slate-500">
          No credit card required. Start free forever.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;