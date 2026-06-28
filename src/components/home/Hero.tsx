import { Car, Users, Shield, Star } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-24 pb-32 text-center bg-slate-50 border-b border-gray-200">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest mb-6">
        <Car className="w-4 h-4" />
        Premium Cab Service
      </div>
      
      <h1 className="font-display font-bold text-5xl md:text-7xl text-slate-900 tracking-tight leading-tight max-w-4xl mx-auto">
        Pune ↔ Mumbai <br className="hidden md:block"/> <span className="text-primary">Direct & Comfortable.</span>
      </h1>
      
      <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
        Your personalized connection between Pune and Mumbai. Enjoy the comfort of a personal 6-seater SUV, safe driving, and timely arrivals.
      </p>

      {/* Action CTAs */}
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <a 
          href="#booking"
          className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold rounded-lg bg-primary text-white hover:bg-primary-dark transition-colors duration-300 shadow-md shadow-primary/20"
        >
          Book Your Ride
        </a>
      </div>

      {/* Mapped High-End Statistics Block */}
      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {[
          { label: 'Successful Trips', value: '300+', icon: Car, color: 'text-primary bg-primary/10' },
          { label: 'Average Rating', value: '5.0 / 5', icon: Star, color: 'text-amber-500 bg-amber-50' },
          { label: 'Happy Passengers', value: '1000+', icon: Users, color: 'text-emerald-600 bg-emerald-50' },
          { label: 'Safe & Verified', value: '100%', icon: Shield, color: 'text-indigo-600 bg-indigo-50' }
        ].map((stat, i) => (
          <div 
            key={i} 
            className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center"
          >
            <div className={`p-3 rounded-xl w-fit ${stat.color} mb-4`}>
              <stat.icon className="h-6 w-6" />
            </div>
            <p className="text-3xl font-bold text-slate-900 tracking-tight">{stat.value}</p>
            <p className="text-xs text-slate-500 font-medium mt-1 uppercase tracking-wider">{stat.label}</p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
