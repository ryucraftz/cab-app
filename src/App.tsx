import { Routes, Route } from 'react-router-dom';
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
