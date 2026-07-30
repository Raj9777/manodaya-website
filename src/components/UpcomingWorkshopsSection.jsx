import React, { useState, useEffect } from 'react';
import { Calendar, ArrowRight, Sparkles, User, MapPin, Maximize2, X, Eye } from 'lucide-react';
import { db } from '../firebase';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { INITIAL_WORKSHOPS } from '../pages/FullCrmDashboard';
import { InternshipWorkshopModal } from './InternshipWorkshopModal';

export const UpcomingWorkshopsSection = ({ onOpenBooking, title = "Upcoming Clinical Workshops & Masterclasses", subtitle = "Intensive hands-on training sessions conducted by certified clinical neuropsychologists." }) => {
  const [workshops, setWorkshops] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState('');
  const [selectedFlyer, setSelectedFlyer] = useState(null); // Lightbox flyer modal state

  useEffect(() => {
    let unsub;
    try {
      const wsRef = collection(db, 'workshops');
      unsub = onSnapshot(
        query(wsRef, orderBy('createdAt', 'desc')),
        (snap) => {
          if (!snap.empty) {
            const list = snap.docs.map(d => ({ id: d.id, ...d.data() }));
            setWorkshops(list);
            localStorage.setItem('manodaya_workshops', JSON.stringify(list));
          } else {
            const savedWorkshops = JSON.parse(localStorage.getItem('manodaya_workshops') || 'null');
            setWorkshops(savedWorkshops || INITIAL_WORKSHOPS);
          }
        },
        (err) => {
          console.warn('Firestore offline/error in UpcomingWorkshopsSection:', err);
          const savedWorkshops = JSON.parse(localStorage.getItem('manodaya_workshops') || 'null');
          setWorkshops(savedWorkshops || INITIAL_WORKSHOPS);
        }
      );
    } catch {
      const savedWorkshops = JSON.parse(localStorage.getItem('manodaya_workshops') || 'null');
      setWorkshops(savedWorkshops || INITIAL_WORKSHOPS);
    }

    return () => unsub?.();
  }, []);

  const handleOpenRegister = (workshopTitle) => {
    setSelectedTrack(workshopTitle);
    setModalOpen(true);
  };

  return (
    <section className="section-padding" style={{ backgroundColor: '#FAF5FF', borderTop: '1px solid #F3E8FF', borderBottom: '1px solid #F3E8FF' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header reveal-element is-visible" style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="section-badge" style={{ backgroundColor: '#EDE9FE', color: '#8A4FFF' }}>
            <Calendar size={14} /> Certified Professional Education
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)', fontWeight: 900, color: '#0E0E10', marginTop: '8px', marginBottom: '12px', letterSpacing: '-0.03em' }}>
            {title}
          </h2>
          <p style={{ color: '#64748B', fontSize: '1.063rem', maxWidth: '680px', margin: '0 auto', lineHeight: 1.6 }}>
            {subtitle}
          </p>
        </div>

        {/* Workshops Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
          {workshops.map((ws) => (
            <div 
              key={ws.id} 
              className="reference-card reveal-element is-visible"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                backgroundColor: '#FFFFFF',
                borderRadius: '24px',
                padding: '24px',
                border: '1.5px solid #F1F1F5',
                boxShadow: '0 10px 30px rgba(138, 79, 255, 0.05)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div>
                {/* Optional Uploaded Flyer / Poster Image */}
                {ws.flyerUrl ? (
                  <div 
                    style={{ 
                      position: 'relative', 
                      borderRadius: '16px', 
                      overflow: 'hidden', 
                      marginBottom: '20px',
                      backgroundColor: '#0F172A',
                      maxHeight: '220px',
                      display: 'flex',
                      alignItems: 'center',
                      justify: 'center',
                      cursor: 'pointer',
                      boxShadow: '0 8px 20px rgba(0,0,0,0.08)'
                    }}
                    onClick={() => setSelectedFlyer({ url: ws.flyerUrl, title: ws.title })}
                    className="flyer-container-hover"
                  >
                    <img 
                      src={ws.flyerUrl} 
                      alt={`${ws.title} Flyer`} 
                      style={{ width: '100%', height: '220px', objectFit: 'cover', transition: 'transform 0.4s ease' }} 
                    />
                    <div 
                      style={{ 
                        position: 'absolute', 
                        inset: 0, 
                        background: 'linear-gradient(to top, rgba(15,23,42,0.8) 0%, transparent 60%)', 
                        display: 'flex', 
                        alignItems: 'flex-end', 
                        justify: 'space-between',
                        padding: '12px 16px',
                        color: '#FFFFFF'
                      }}
                    >
                      <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', backgroundColor: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)', padding: '4px 10px', borderRadius: '9999px' }}>
                        🔍 View Event Flyer
                      </span>
                      <Maximize2 size={16} />
                    </div>
                  </div>
                ) : null}

                {/* Top Badges */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                  <span className="badge-status" style={{ backgroundColor: '#EDE9FE', color: '#8A4FFF', padding: '6px 14px', fontSize: '0.813rem', fontWeight: 700 }}>
                    {ws.mode || 'In-Person'}
                  </span>
                  {ws.seats && (
                    <span style={{ fontSize: '0.813rem', fontWeight: 800, color: '#D97706', backgroundColor: '#FEF3C7', padding: '4px 12px', borderRadius: '9999px' }}>
                      🔥 {ws.seats}
                    </span>
                  )}
                </div>

                <h3 style={{ fontSize: '1.28rem', fontWeight: 900, color: '#0E0E10', marginBottom: '12px', lineHeight: 1.35 }}>
                  {ws.title}
                </h3>

                {/* Event Schedule Info Box */}
                <div style={{ backgroundColor: '#FAFAFD', padding: '12px 16px', borderRadius: '16px', marginBottom: '18px', fontSize: '0.844rem', color: '#334155', border: '1px solid #F1F1F5', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <div style={{ fontWeight: 800, color: '#0E0E10' }}>
                    📅 <span style={{ color: '#475569', fontWeight: 700 }}>Date:</span> {ws.date}
                  </div>
                  <div>
                    ⏰ <span style={{ color: '#475569', fontWeight: 700 }}>Time:</span> {ws.time}
                  </div>
                  {ws.instructor && (
                    <div>
                      👨‍🏫 <span style={{ color: '#475569', fontWeight: 700 }}>Faculty:</span> {ws.instructor}
                    </div>
                  )}
                  {ws.fee && (
                    <div style={{ color: '#8A4FFF', fontWeight: 900, marginTop: '2px', fontSize: '0.938rem' }}>
                      🏷️ Fee: {ws.fee}
                    </div>
                  )}
                </div>

                <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.6, marginBottom: '24px' }}>
                  {ws.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
                {ws.flyerUrl && (
                  <button 
                    onClick={() => setSelectedFlyer({ url: ws.flyerUrl, title: ws.title })}
                    className="btn-outline-theme"
                    style={{ width: '100%', justifyContent: 'center', fontSize: '0.813rem', padding: '10px', borderColor: '#8A4FFF', color: '#8A4FFF' }}
                  >
                    <Eye size={15} />
                    <span>View Event Flyer / Poster</span>
                  </button>
                )}

                <button 
                  className="btn-purple"
                  onClick={() => handleOpenRegister(ws.title)}
                  style={{ width: '100%', justifyContent: 'center', padding: '12px' }}
                >
                  <Sparkles size={16} />
                  <span>Register for Workshop</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal for Flyer Image Preview */}
        {selectedFlyer && (
          <div 
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 99999,
              backgroundColor: 'rgba(15, 23, 42, 0.92)',
              backdropFilter: 'blur(8px)',
              display: 'flex',
              alignItems: 'center',
              justify: 'center',
              padding: '24px'
            }}
            onClick={() => setSelectedFlyer(null)}
          >
            <div 
              style={{
                position: 'relative',
                maxWidth: '850px',
                width: '100%',
                maxHeight: '90vh',
                backgroundColor: '#1E293B',
                borderRadius: '24px',
                padding: '24px',
                border: '1.5px solid #334155',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedFlyer(null)}
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'center',
                  cursor: 'pointer'
                }}
              >
                <X size={20} />
              </button>

              <h3 style={{ color: '#FFFFFF', fontSize: '1.1rem', fontWeight: 800, marginBottom: '16px', paddingRight: '36px', textAlign: 'center' }}>
                {selectedFlyer.title} – Official Workshop Flyer
              </h3>

              <div style={{ overflowY: 'auto', maxHeight: '75vh', width: '100%', display: 'flex', justifyContent: 'center', borderRadius: '16px' }}>
                <img 
                  src={selectedFlyer.url} 
                  alt={selectedFlyer.title} 
                  style={{ maxWidth: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }} 
                />
              </div>
            </div>
          </div>
        )}

        {/* Application Modal */}
        <InternshipWorkshopModal 
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          initialType="Specialized Workshop"
          initialWorkshopTitle={selectedTrack}
        />
      </div>
    </section>
  );
};
