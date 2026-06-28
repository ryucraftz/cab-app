import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Calendar, Clock, MapPin, Users, Phone, User, CheckCircle2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';

// Define the validation schema using Zod
const bookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Valid phone number required"),
  pickup: z.string().min(2, "Pickup location is required"),
  dropoff: z.string().min(2, "Drop-off location is required"),
  date: z.string().refine((val) => new Date(val) >= new Date(new Date().setHours(0,0,0,0)), {
    message: "Date cannot be in the past"
  }),
  time: z.string().min(1, "Time is required"),
  passengers: z.string().min(1),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

export function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      passengers: '1'
    }
  });

  const onSubmit = async (data: BookingFormValues) => {
    setIsSubmitting(true);
    setErrorMsg(null);
    
    try {
      // 1. Save to Supabase Backend
      const { error } = await supabase
        .from('bookings')
        .insert([
          { 
            customer_name: data.name,
            customer_phone: data.phone,
            pickup_location: data.pickup,
            dropoff_location: data.dropoff,
            pickup_time: `${data.date}T${data.time}:00`,
            status: 'pending' // Guest-first booking status
          }
        ]);

      if (error) {
        // Fallback: If they haven't configured Supabase yet, we don't want to completely crash
        console.error("Supabase error:", error.message);
        if (error.message.includes("placeholder")) {
           // Ignore placeholder error for local dev if they haven't set env vars
        } else {
           throw error;
        }
      }

      // 2. Trigger Email Notification via Vercel Serverless Function
      // We don't await this because we want to show success to the user immediately
      // The email will be sent in the background
      fetch('/api/notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customer_name: data.name,
          customer_phone: data.phone,
          pickup_location: data.pickup,
          dropoff_location: data.dropoff,
          pickup_time: `${data.date}T${data.time}:00`,
          passengers: data.passengers
        }),
      }).catch(err => console.error("Failed to trigger email notification:", err));

      // 3. Show Success State
      setIsSuccess(true);
      reset();
      
    } catch (err: any) {
      setErrorMsg(err.message || 'Failed to submit booking. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="w-full max-w-2xl mx-auto bg-white border border-gray-200 rounded-3xl p-12 text-center shadow-lg">
        <CheckCircle2 className="w-20 h-20 text-emerald-500 mx-auto mb-6" />
        <h2 className="text-3xl font-display font-bold text-slate-900 mb-2">Booking Confirmed!</h2>
        <p className="text-slate-500">Your ride request has been saved securely to our system. Our captain will contact you shortly to confirm the details.</p>
        <button 
          onClick={() => setIsSuccess(false)}
          className="mt-8 px-8 py-3 rounded-lg bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors shadow-sm"
        >
          Book Another Ride
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto bg-white border border-gray-200 rounded-3xl p-8 md:p-10 shadow-xl shadow-slate-200/50 relative overflow-hidden">
      
      <div className="relative z-10 text-center mb-10">
        <h2 className="text-3xl font-display font-bold text-slate-900 mb-2">Book Your Ride</h2>
        <p className="text-slate-500 text-sm">Guest Booking - No login required. Quick and easy.</p>
      </div>

      {errorMsg && (
        <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm">
          {errorMsg}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="relative z-10 space-y-6">
        
        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
              <User className="w-4 h-4 text-slate-400" /> Full Name
            </label>
            <input 
              {...register('name')}
              type="text" 
              placeholder="John Doe"
              className={`w-full bg-slate-50 border ${errors.name ? 'border-red-500' : 'border-gray-200'} rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all`}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
              <Phone className="w-4 h-4 text-slate-400" /> Phone Number
            </label>
            <input 
              {...register('phone')}
              type="tel" 
              placeholder="+91 98765 43210"
              className={`w-full bg-slate-50 border ${errors.phone ? 'border-red-500' : 'border-gray-200'} rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all`}
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
          </div>
        </div>

        {/* Location Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-slate-400" /> Pickup Location
            </label>
            <input 
              {...register('pickup')}
              type="text" 
              placeholder="e.g. Pune Station"
              className={`w-full bg-slate-50 border ${errors.pickup ? 'border-red-500' : 'border-gray-200'} rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all`}
            />
            {errors.pickup && <p className="text-red-500 text-xs mt-1">{errors.pickup.message}</p>}
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-slate-400" /> Drop-off Location
            </label>
            <input 
              {...register('dropoff')}
              type="text" 
              placeholder="e.g. Mumbai Airport (T2)"
              className={`w-full bg-slate-50 border ${errors.dropoff ? 'border-red-500' : 'border-gray-200'} rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all`}
            />
            {errors.dropoff && <p className="text-red-500 text-xs mt-1">{errors.dropoff.message}</p>}
          </div>
        </div>

        {/* Time & Passengers Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-slate-400" /> Date
            </label>
            <input 
              {...register('date')}
              type="date" 
              min={new Date().toISOString().split('T')[0]}
              className={`w-full bg-slate-50 border ${errors.date ? 'border-red-500' : 'border-gray-200'} rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all`}
            />
            {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date.message}</p>}
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
              <Clock className="w-4 h-4 text-slate-400" /> Time
            </label>
            <input 
              {...register('time')}
              type="time" 
              className={`w-full bg-slate-50 border ${errors.time ? 'border-red-500' : 'border-gray-200'} rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all`}
            />
            {errors.time && <p className="text-red-500 text-xs mt-1">{errors.time.message}</p>}
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
              <Users className="w-4 h-4 text-slate-400" /> Passengers
            </label>
            <select 
              {...register('passengers')}
              className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none"
            >
              {[1,2,3,4,5,6].map(num => (
                <option key={num} value={num}>
                  {num} {num === 1 ? 'Person' : 'People'}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="pt-6">
          <button 
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-4 text-base font-bold rounded-xl text-white transition-all duration-300 shadow-md flex items-center justify-center gap-2 ${isSubmitting ? 'bg-primary/70 cursor-not-allowed' : 'bg-primary hover:bg-primary-dark shadow-primary/20 hover:shadow-lg'}`}
          >
            {isSubmitting ? (
              <span className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></span>
            ) : (
              "Confirm Guest Booking"
            )}
          </button>
        </div>

      </form>
    </div>
  );
}
