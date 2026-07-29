import React, { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { LoadingEntryPage } from './components/LoadingEntryPage';

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
  const getInitialPage = () => {
    const hash = window.location.hash.replace('#', '');
    if (hash) return hash;
    const saved = localStorage.getItem('manodaya_active_page');
    if (saved) return saved;
    return 'home';
  };

  const [activePage, setActivePage] = useState(getInitialPage);
  const [isLoading, setIsLoading] = useState(() => getInitialPage() !== 'dashboard');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [initialService, setInitialService] = useState('');

  // Sync hash changes (e.g. browser back/forward buttons or direct URL)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setActivePage(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update document.title dynamically for page-level SEO
  useEffect(() => {
    const titles = {
      home: "MANODAYA | Healing Mind – Empowering Lives | Psychological Care Bhubaneswar",
      about: "About Us | MANODAYA Clinical Psychology & Neuropsychology Centre",
      assessments: "Psychological & Neuropsychological Assessments | ADHD, Autism, IQ | MANODAYA",
      therapies: "Evidence-Based Psychotherapy | CBT, DBT, ERP for OCD, PMT | MANODAYA",
      rehab: "Cognitive Rehabilitation & Working Memory Training | MANODAYA",
      support: "Facilitated Support Groups | OCD, ADHD & Neurodivergent Circles | MANODAYA",
      internship: "Psychology Clinical Internships & Professional Workshops | MANODAYA",
      contact: "Book Consultation & Contact Us | MANODAYA Bhubaneswar",
      dashboard: "Staff Portal & CRM Dashboard | MANODAYA"
    };
    if (titles[activePage]) {
      document.title = titles[activePage];
    }
  }, [activePage]);

  // Scroll to top on page change & update URL hash/localStorage
  const handleNavigate = (pageKey) => {
    setActivePage(pageKey);
    window.location.hash = '#' + pageKey;
    localStorage.setItem('manodaya_active_page', pageKey);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBookingWithService = (serviceName = '') => {
    setInitialService(serviceName);
    setBookingModalOpen(true);
  };

  // Setup Bi-directional Scroll In & Out IntersectionObserver (Triggers both UP & DOWN scroll)
  useEffect(() => {
    if (isLoading) return;

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        } else {
          entry.target.classList.remove('is-visible');
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '-10px 0px -10px 0px',
      threshold: 0.08
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const revealElements = document.querySelectorAll('.reveal-element');

    revealElements.forEach(el => observer.observe(el));

    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, [activePage, isLoading]);

  return (
    <div className="app-main-wrapper" style={{ minHeight: '100vh', backgroundColor: '#FFFFFF' }}>
      {/* 1. Mindhaven Loading Entry Splash Page */}
      {isLoading && (
        <LoadingEntryPage onComplete={() => setIsLoading(false)} />
      )}

      {/* Full-Page Staff CRM Dashboard */}
      {activePage === 'dashboard' ? (
        <FullCrmDashboard onNavigateHome={() => handleNavigate('home')} />
      ) : (
        <>
          {/* Navbar with Links & Dropdown */}
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

          {/* Interactive Booking Modal */}
          <BookingModal 
            isOpen={bookingModalOpen}
            onClose={() => setBookingModalOpen(false)}
            initialService={initialService}
          />
        </>
      )}

      {/* Vercel Analytics Tracker */}
      <Analytics />
    </div>
  );
}

export default App;
