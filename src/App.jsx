import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { AssessmentsSection as AssessmentsPage } from './components/AssessmentsSection';
import { TherapiesPage } from './pages/TherapiesPage';
import { RehabPage } from './pages/RehabPage';
import { SupportGroupsPage } from './pages/SupportGroupsPage';
import { InternshipPage } from './pages/InternshipPage';
import { ContactPage } from './pages/ContactPage';
import { FullCrmDashboard } from './pages/FullCrmDashboard';

export function App() {
  const [activePage, setActivePage] = useState('home'); // 'home' | 'about' | 'assessments' | 'therapies' | 'rehab' | 'support' | 'internship' | 'contact' | 'dashboard'
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [initialService, setInitialService] = useState('');

  // Scroll to top on page change
  const handleNavigate = (pageKey) => {
    setActivePage(pageKey);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBookingWithService = (serviceName = '') => {
    setInitialService(serviceName);
    setBookingModalOpen(true);
  };

  // Setup Scroll Reveal IntersectionObserver
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const revealElements = document.querySelectorAll('.reveal-element');

    revealElements.forEach(el => observer.observe(el));

    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, [activePage]);

  // If Full-Page Password Protected CRM Dashboard is active
  if (activePage === 'dashboard') {
    return <FullCrmDashboard onNavigateHome={() => handleNavigate('home')} />;
  }

  return (
    <div className="app-main-wrapper" style={{ minHeight: '100vh', backgroundColor: '#FFFFFF' }}>
      {/* Navbar with Multi-Page Navigation Links */}
      <Navbar 
        activePage={activePage}
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBookingWithService()}
      />

      {/* Dynamic Multi-Page Router View */}
      <main>
        {activePage === 'home' && (
          <HomePage 
            onNavigate={handleNavigate} 
            onOpenBooking={(service) => handleOpenBookingWithService(service)} 
          />
        )}

        {activePage === 'about' && (
          <AboutPage 
            onOpenBooking={(service) => handleOpenBookingWithService(service)} 
          />
        )}

        {activePage === 'assessments' && (
          <AssessmentsPage 
            currentMode="all" 
            onSelectAssessment={(service) => handleOpenBookingWithService(service)} 
          />
        )}

        {activePage === 'therapies' && (
          <TherapiesPage 
            onOpenBooking={(service) => handleOpenBookingWithService(service)} 
          />
        )}

        {activePage === 'rehab' && (
          <RehabPage 
            onOpenBooking={(service) => handleOpenBookingWithService(service)} 
          />
        )}

        {activePage === 'support' && (
          <SupportGroupsPage 
            onOpenBooking={(service) => handleOpenBookingWithService(service)} 
          />
        )}

        {activePage === 'internship' && (
          <InternshipPage 
            onOpenBooking={(service) => handleOpenBookingWithService(service)} 
          />
        )}

        {activePage === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Footer */}
      <Footer 
        currentMode="all"
        onOpenBooking={() => handleOpenBookingWithService()}
        onOpenCrm={() => handleNavigate('dashboard')}
      />

      {/* Interactive Booking & Inquiry Form Modal */}
      <BookingModal 
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialService={initialService}
      />
    </div>
  );
}

export default App;
