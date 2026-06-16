import { useState, FormEvent } from 'react';
import { Calendar, Clock, MapPin, Users, Phone, User, MessageCircle } from 'lucide-react';
import { StitchButton } from './StitchButton';

// Default phone number since the user hasn't provided one yet
const WHATSAPP_NUMBER = "919876543210"; 

export function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pickup: '',
    dropoff: '',
    date: '',
    time: '',
    passengers: '1'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Construct the WhatsApp message
    const message = `
*New Ride Booking Request* 🚕
-------------------------
*Name:* ${formData.name}
*Phone:* ${formData.phone}

*From:* ${formData.pickup}
*To:* ${formData.dropoff}

*Date:* ${formData.date}
*Time:* ${formData.time}
*Passengers:* ${formData.passengers}
-------------------------
Please confirm my booking!
    `.trim();

    // Encode the message for the URL
    const encodedMessage = encodeURIComponent(message);
    
    // Create the WhatsApp link
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    // Open in a new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="w-full max-w-2xl mx-auto backdrop-blur-xl bg-background-dark/60 border border-white/10 rounded-3xl p-8 shadow-[0_0_40px_rgba(0,240,255,0.05)] relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-purple/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 text-center mb-8">
        <h2 className="text-3xl font-display font-bold text-white mb-2">Book Your Ride</h2>
        <p className="text-gray-400 text-sm">Fill out the details below to instantly send a WhatsApp booking request.</p>
      </div>

      <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
        
        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
              <User className="w-4 h-4 text-primary" /> Full Name
            </label>
            <input 
              required
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" /> Phone Number
            </label>
            <input 
              required
              type="tel" 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
            />
          </div>
        </div>

        {/* Location Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-accent-lavender" /> Pickup Location
            </label>
            <input 
              required
              type="text" 
              name="pickup"
              value={formData.pickup}
              onChange={handleChange}
              placeholder="e.g. Pune Station"
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent-lavender/50 focus:ring-1 focus:ring-accent-lavender/50 transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-accent-lavender" /> Drop-off Location
            </label>
            <input 
              required
              type="text" 
              name="dropoff"
              value={formData.dropoff}
              onChange={handleChange}
              placeholder="e.g. Mumbai Airport (T2)"
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent-lavender/50 focus:ring-1 focus:ring-accent-lavender/50 transition-all"
            />
          </div>
        </div>

        {/* Time & Passengers Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-accent-purple" /> Date
            </label>
            <input 
              required
              type="date" 
              name="date"
              min={new Date().toISOString().split('T')[0]}
              value={formData.date}
              onChange={handleChange}
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent-purple/50 focus:ring-1 focus:ring-accent-purple/50 transition-all [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
              <Clock className="w-4 h-4 text-accent-purple" /> Time
            </label>
            <input 
              required
              type="time" 
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent-purple/50 focus:ring-1 focus:ring-accent-purple/50 transition-all [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
              <Users className="w-4 h-4 text-accent-purple" /> Passengers
            </label>
            <select 
              required
              name="passengers"
              value={formData.passengers}
              onChange={handleChange}
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent-purple/50 focus:ring-1 focus:ring-accent-purple/50 transition-all appearance-none"
            >
              {[1,2,3,4,5,6].map(num => (
                <option key={num} value={num} className="bg-background-dark text-white">
                  {num} {num === 1 ? 'Person' : 'People'}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="pt-4">
          <button 
            type="submit"
            className="w-full relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-bold rounded-xl group bg-gradient-to-br from-primary to-accent-purple hover:text-white text-background-dark focus:ring-4 focus:outline-none focus:ring-primary/50 transition-all duration-300 shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.5)]"
          >
            <span className="relative w-full px-5 py-4 transition-all ease-in duration-75 bg-transparent rounded-xl flex items-center justify-center gap-2 text-lg">
              <MessageCircle className="w-6 h-6" />
              Book via WhatsApp
            </span>
          </button>
        </div>

      </form>
    </div>
  );
}
