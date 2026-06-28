import { Compass } from 'lucide-react';
import { StitchCard } from '@/components/StitchCard';

export function Services() {
  return (
    <section id="services" className="mb-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <div className="flex items-center gap-2 text-primary font-semibold text-sm tracking-wider uppercase">
            <Compass className="h-4 w-4" />
            <span>Our Services</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mt-2">
            Tailored Travel Solutions
          </h2>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        <StitchCard>
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
              <span className="material-icons text-2xl">route</span>
            </div>
            <h3 className="font-display text-xl font-bold text-slate-900">Pune ↔ Mumbai Drop</h3>
          </div>
          <p className="text-slate-600 leading-relaxed">
            Direct point-to-point drop services between Pune and Mumbai. Travel comfortably in a personal, well-maintained Yogesh Cabs SUV.
          </p>
        </StitchCard>

        <StitchCard>
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
              <span className="material-icons text-2xl">flight_takeoff</span>
            </div>
            <h3 className="font-display text-xl font-bold text-slate-900">Airport Transfers</h3>
          </div>
          <p className="text-slate-600 leading-relaxed">
            Reliable drops to Mumbai T2 or Pune Airport. Rest assured you'll reach your flight on time with plenty of luggage space.
          </p>
        </StitchCard>

        <StitchCard>
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
              <span className="material-icons text-2xl">update</span>
            </div>
            <h3 className="font-display text-xl font-bold text-slate-900">Same-Day Return</h3>
          </div>
          <p className="text-slate-600 leading-relaxed">
            Need to travel to Mumbai for a meeting and return to Pune the same day? Book a flexible two-way trip tailored for your schedule.
          </p>
        </StitchCard>
      </div>
    </section>
  );
}
