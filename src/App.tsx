import { useState } from 'react';
import { 
  Car, 
  Users, 
  Shield, 
  Star, 
  Phone, 
  Menu, 
  X, 
  Sparkles,
  TrendingUp,
  Compass,
  ArrowRight
} from 'lucide-react';

// Globally imported Stitch UI Component and mock data
import { ActivityCard } from '@stitch/examples/gold-standard-card';
import { cardData } from '@/data/mockData';
import { StitchButton } from '@/components/StitchButton';
import { StitchCard } from '@/components/StitchCard';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  return (
    <div className="min-h-screen bg-background-dark text-gray-200 selection:bg-primary/30 selection:text-primary">
      {/* 1. Glow Effects for Premium Atmosphere */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[60vh] right-1/4 w-[500px] h-[500px] bg-accent-purple/5 rounded-full blur-[150px] pointer-events-none" />

      {/* 2. Glassmorphic Sticky Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background-dark/70 border-b border-white/5 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          {/* Logo with Glow */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative p-2 rounded-xl bg-primary/10 border border-primary/20 shadow-[0_0_15px_rgba(25,230,111,0.15)] group-hover:shadow-[0_0_20px_rgba(25,230,111,0.3)] transition-all duration-500">
              <Car className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute -inset-0.5 bg-primary rounded-xl blur opacity-0 group-hover:opacity-20 transition duration-500" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl tracking-tight text-white group-hover:text-primary transition-colors duration-300">
                ERTIGA<span className="text-primary">CAB</span>
              </span>
              <span className="text-[10px] tracking-widest text-primary/70 font-semibold uppercase -mt-1">
                Premium 6-Seater
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors duration-300 relative group py-2">
              Our Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#activities" className="text-sm font-medium hover:text-primary transition-colors duration-300 relative group py-2">
              Recent Rides
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors duration-300 relative group py-2">
              Why Choose Me
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          </nav>

          {/* CTA & Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="tel:+919876543210" 
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 transition-colors duration-300"
            >
              <Phone className="h-4 w-4 text-primary" />
              <span>Call Captain</span>
            </a>
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-semibold rounded-lg group bg-gradient-to-br from-primary to-emerald-600 hover:text-background-dark text-white focus:ring-2 focus:outline-none focus:ring-primary/50 transition-all duration-300 shadow-[0_0_15px_rgba(25,230,111,0.2)] hover:shadow-[0_0_25px_rgba(25,230,111,0.4)] mt-2">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-background-dark rounded-md group-hover:bg-opacity-0">
                Book Ride
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Panel */}
        {mobileMenuOpen && (
          <div className="md:hidden backdrop-blur-lg bg-background-dark/95 border-b border-white/5 px-4 pt-2 pb-6 space-y-3">
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg hover:bg-primary/10 hover:text-primary transition-all font-medium"
            >
              Our Services
            </a>
            <a 
              href="#activities" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg hover:bg-primary/10 hover:text-primary transition-all font-medium"
            >
              Recent Rides
            </a>
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg hover:bg-primary/10 hover:text-primary transition-all font-medium"
            >
              Why Choose Me
            </a>
            <div className="pt-4 flex flex-col gap-3">
              <a 
                href="tel:+919876543210" 
                className="flex items-center justify-center gap-2 py-3 rounded-lg bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 transition-colors"
              >
                <Phone className="h-4 w-4 text-primary" />
                <span>Call Captain</span>
              </a>
              <button className="w-full py-3 rounded-lg bg-gradient-to-r from-primary to-emerald-600 text-background-dark font-semibold text-center hover:opacity-90 transition-opacity">
                Book Ride Now
              </button>
            </div>
          </div>
        )}
      </header>

      {/* 3. Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary mb-6 animate-pulse">
          <Sparkles className="h-3.5 w-3.5" />
          <span>STITCH UI CAPABILITIES INTEGRATED</span>
        </div>
        
        <h1 className="font-display font-bold text-5xl md:text-7xl text-white tracking-tight leading-tight max-w-4xl mx-auto">
          Pune-Mumbai Premium <span className="text-primary">Ertiga Service.</span>
        </h1>
        
        <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Your personalized, direct connection between Pune and Mumbai. Enjoy the comfort of my personal 6-seater SUV, safe driving, and timely arrivals for your trips.
        </p>

        {/* Action CTAs */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href="#booking">
            <StitchButton variant="primary">
              Book Your Ride
            </StitchButton>
          </a>
        </div>

        {/* 4. Mapped High-End Statistics Block */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {[
            { label: 'Pune-Mumbai Trips', value: '300+', icon: Car, color: 'text-primary bg-primary/10 border-primary/20' },
            { label: 'Rating average', value: '5.0 / 5', icon: Star, color: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20' },
            { label: 'Happy passengers', value: '1000+', icon: Users, color: 'text-accent-lavender bg-accent-lavender/10 border-accent-lavender/20' },
            { label: 'Safe & Verified', value: '100%', icon: Shield, color: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20' }
          ].map((stat, i) => (
            <div 
              key={i} 
              className="p-5 rounded-2xl bg-surface-dark border border-white/5 shadow-sm hover:border-white/10 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className={`p-2.5 rounded-xl w-fit ${stat.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="h-5 w-5" />
              </div>
              <p className="text-2xl font-bold text-white tracking-tight">{stat.value}</p>
              <p className="text-xs text-gray-400 font-medium mt-1 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Main Content: Fleet & Live Activity Mappings */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-white/5 bg-black/10">
        
        {/* Services Grid */}
        <section id="services" className="mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="flex items-center gap-2 text-primary font-semibold text-sm tracking-wider uppercase">
                <Compass className="h-4 w-4" />
                <span>Our Services</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mt-2">
                Tailored Travel Solutions
              </h2>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <StitchCard>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                  <span className="material-icons text-2xl">route</span>
                </div>
                <h3 className="font-display text-xl font-bold text-white">Pune-Mumbai Drop</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Direct point-to-point drop services between Pune and Mumbai. Travel comfortably in a personal, well-maintained Ertiga.
              </p>
            </StitchCard>

            <StitchCard>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-accent-lavender/10 rounded-xl text-accent-lavender">
                  <span className="material-icons text-2xl">flight_takeoff</span>
                </div>
                <h3 className="font-display text-xl font-bold text-white">Airport Transfers</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Reliable drops to Mumbai T2 or Pune Airport. Rest assured you'll reach your flight on time with plenty of luggage space.
              </p>
            </StitchCard>

            <StitchCard>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-emerald-400/10 rounded-xl text-emerald-400">
                  <span className="material-icons text-2xl">update</span>
                </div>
                <h3 className="font-display text-xl font-bold text-white">Same-Day Return</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Need to travel to Mumbai for a meeting and return to Pune the same day? Book a flexible two-way trip tailored for your schedule.
              </p>
            </StitchCard>
          </div>
        </section>

        {/* 6. Live Stitch Activity Mappings (INTEGRATION VERIFICATION) */}
        <section id="activities" className="mb-8 pt-8 border-t border-white/5">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 text-primary font-semibold text-sm tracking-wider uppercase mb-2">
              <TrendingUp className="h-4 w-4" />
              <span>Route Live Verification</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
              Recent Rides & Logs
            </h2>
            <p className="text-gray-400 text-sm mt-3">
              This feed displays recent Pune-Mumbai trips by rendering the **Stitch Gold Standard Activity Card** component. Imported directly via path alias `@stitch/examples/gold-standard-card`.
            </p>
          </div>

          {/* Stitch Components Container */}
          <div className="max-w-3xl mx-auto space-y-4 bg-background-dark/40 p-6 rounded-3xl border border-white/5 backdrop-blur-sm">
            <div className="flex items-center justify-between pb-4 border-b border-white/5">
              <span className="text-xs text-primary font-bold uppercase tracking-widest flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-primary animate-ping" />
                Live Log Feeds
              </span>
              <span className="text-[10px] text-gray-400 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                3 Recent Trips
              </span>
            </div>

            {/* Loop through mockData and render the globally mapped ActivityCard component! */}
            {cardData.map((activity) => (
              <ActivityCard 
                key={activity.id}
                id={activity.id}
                username={activity.username}
                action={activity.action}
                timestamp={activity.timestamp}
                avatarUrl={activity.avatarUrl}
                repoName={activity.repoName}
              />
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-background-dark py-12 text-center text-xs text-gray-500">
        <div className="max-w-7xl mx-auto px-4">
          <p>© 2026 Ertiga Cab Service. All rights reserved.</p>
          <p className="mt-2 text-primary/50">Stitch UI Skills Integrated & Globally Aliased for Antigravity Agent Standard</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
