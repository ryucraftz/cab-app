import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/home/Hero';
import { Services } from './components/home/Services';
import { RecentRides } from './components/home/RecentRides';
import { BookingForm } from '@/components/BookingForm';
import { AdminPage } from '@/pages/Admin';

function Home() {
  return (
    <>
      <Helmet>
        <title>Yogesh Cabs | Premium Pune to Mumbai Drops</title>
        <meta name="description" content="Book a premium 6-seater SUV for your direct travel between Pune and Mumbai. Safe, reliable, and comfortable travel with Yogesh Cabs." />
        <meta property="og:title" content="Yogesh Cabs | Premium Pune to Mumbai Drops" />
        <meta property="og:description" content="Book a premium 6-seater SUV for your direct travel between Pune and Mumbai." />
        <meta property="og:type" content="website" />
      </Helmet>
      <Hero />
      <main className="relative py-20 border-t border-gray-100 bg-white">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Services />
          
          <section id="booking" className="mb-24 pt-16 border-t border-gray-100 relative z-10">
            <BookingForm />
          </section>

          <RecentRides />
        </div>
      </main>
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-background-light text-slate-900 selection:bg-primary/20 selection:text-primary-dark">
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
