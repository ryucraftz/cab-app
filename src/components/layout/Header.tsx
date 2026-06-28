import { useState } from 'react';
import { Car, Phone, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-gray-200 transition-all duration-300 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group cursor-pointer">
          <div className="relative p-2 rounded-xl bg-primary/10 border border-primary/20 transition-all duration-300">
            <Car className="h-6 w-6 text-primary group-hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-xl tracking-tight text-slate-900 group-hover:text-primary transition-colors duration-300">
              YOGESH<span className="text-primary">CABS</span>
            </span>
            <span className="text-[10px] tracking-widest text-slate-500 font-semibold uppercase -mt-1">
              Premium 6-Seater
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors duration-300 relative group py-2">
            Our Services
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="#activities" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors duration-300 relative group py-2">
            Recent Rides
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="#about" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors duration-300 relative group py-2">
            Why Choose Me
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
          </a>
        </nav>

        {/* CTA & Actions */}
        <div className="hidden md:flex items-center gap-4">
          <a 
            href="tel:+919657436570" 
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-50 border border-gray-200 text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors duration-300"
          >
            <Phone className="h-4 w-4 text-primary" />
            <span>Call Captain</span>
          </a>
          <a href="#booking" className="inline-flex items-center justify-center px-5 py-2 text-sm font-semibold rounded-lg bg-primary text-white hover:bg-primary-dark transition-colors duration-300 shadow-sm">
            Book Ride
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-6 space-y-3 shadow-lg">
          <a 
            href="#services" 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-700 transition-all font-medium"
          >
            Our Services
          </a>
          <a 
            href="#activities" 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-700 transition-all font-medium"
          >
            Recent Rides
          </a>
          <a 
            href="#about" 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-700 transition-all font-medium"
          >
            Why Choose Me
          </a>
          <div className="pt-4 flex flex-col gap-3">
            <a 
              href="tel:+919657436570" 
              className="flex items-center justify-center gap-2 py-3 rounded-lg bg-slate-50 border border-gray-200 text-sm font-medium text-slate-700 transition-colors"
            >
              <Phone className="h-4 w-4 text-primary" />
              <span>Call Captain</span>
            </a>
            <a 
              href="#booking"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full py-3 rounded-lg bg-primary text-white font-semibold text-center hover:bg-primary-dark transition-colors shadow-sm"
            >
              Book Ride Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
