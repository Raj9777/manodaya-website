import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, Lock, Search, Download, Printer, LogOut, CheckCircle2, 
  Clock, MessageSquare, Mail, RefreshCw, Home, Users, Calendar, PlusCircle, Sparkles, GraduationCap 
} from 'lucide-react';
import { INITIAL_CRM_LEADS } from '../data/content';

export const INITIAL_WORKSHOPS = [
  {
    id: "ws-101",
    title: "Clinical Neuropsychology & Battery Administration Masterclass",
    date: "15th August 2026",
    time: "10:00 AM - 04:00 PM",
    mode: "In-Person (Bhubaneswar Clinic)",
    instructor: "Dr. Certified Neuropsychologist",
    fee: "₹2,500",
    seats: "15 Seats",
    description: "Hands-on training in administering NIMHANS Battery, WISC-V, VSMS, and reporting clinical formulations for psychology students."
  },
  {
    id: "ws-102",
    title: "ADOS-2 & Pediatric Autism Screening Practicum",
    date: "28th August 2026",
    time: "02:00 PM - 06:00 PM",
    mode: "Hybrid / Live Interactive",
    instructor: "Senior Clinical Child Psychologist",
    fee: "₹1,800",
    seats: "20 Seats",
    description: "Diagnostic screening protocols, behavioral observations, and CARS-2 scoring workshops for child developmental assessments."
  }
];

export const FullCrmDashboard = ({ onNavigateHome }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [passcodeError, setPasscodeError] = useState(false);

  // Tab State: 'patients' | 'internships' | 'post-workshop' | 'archives'
  const [activeTab, setActiveTab] = useState('patients');

  // Leads Data
  const [leads, setLeads] = useState([]);
  const [internships, setInternships] = useState([]);
  const [workshops, setWorkshops] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  // New Workshop Form State
  const [newWorkshop, setNewWorkshop] = useState({
    title: '',
    date: '',
    time: '',
    mode: 'In-Person (Bhubaneswar Clinic)',
    instructor: 'MANODAYA Clinical Faculty',
    fee: '',
    seats: '15 Seats',
    description: ''
  });
  const [workshopPostedSuccess, setWorkshopPostedSuccess] = useState(false);

  // Load from localStorage
  useEffect(() => {
    const savedLeads = JSON.parse(localStorage.getItem('manodaya_crm_leads') || 'null');
    if (savedLeads && savedLeads.length > 0) {
      setLeads(savedLeads);
    } else {
      setLeads(INITIAL_CRM_LEADS);
      localStorage.setItem('manodaya_crm_leads', JSON.stringify(INITIAL_CRM_LEADS));
    }

    const savedInternships = JSON.parse(localStorage.getItem('manodaya_crm_internships') || '[]');
    setInternships(savedInternships);

    const savedWorkshops = JSON.parse(localStorage.getItem('manodaya_workshops') || 'null');
    if (savedWorkshops && savedWorkshops.length > 0) {
      setWorkshops(savedWorkshops);
    } else {
      setWorkshops(INITIAL_WORKSHOPS);
      localStorage.setItem('manodaya_workshops', JSON.stringify(INITIAL_WORKSHOPS));
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (passcode === '1234') {
      setIsAuthenticated(true);
      setPasscodeError(false);
    } else {
      setPasscodeError(true);
    }
  };

  const handleUpdateStatus = (id, newStatus) => {
    const updated = leads.map(lead => lead.id === id ? { ...lead, status: newStatus } : lead);
    setLeads(updated);
    localStorage.setItem('manodaya_crm_leads', JSON.stringify(updated));
  };

  const handleUpdateInternshipStatus = (id, newStatus) => {
    const updated = internships.map(app => app.id === id ? { ...app, status: newStatus } : app);
    setInternships(updated);
    localStorage.setItem('manodaya_crm_internships', JSON.stringify(updated));
  };

  const handlePostWorkshop = (e) => {
    e.preventDefault();
    const wsId = `ws-${Math.floor(100 + Math.random() * 900)}`;
    const createdWS = { id: wsId, ...newWorkshop };
    const updatedWSList = [createdWS, ...workshops];

    setWorkshops(updatedWSList);
    localStorage.setItem('manodaya_workshops', JSON.stringify(updatedWSList));
    setWorkshopPostedSuccess(true);

    setNewWorkshop({
      title: '',
      date: '',
      time: '',
      mode: 'In-Person (Bhubaneswar Clinic)',
      instructor: 'MANODAYA Clinical Faculty',
      fee: '',
      seats: '15 Seats',
      description: ''
    });

    setTimeout(() => setWorkshopPostedSuccess(false), 4000);
  };

  // CSV Export
  const handleExportCSV = (dataList, filename) => {
    if (!dataList.length) return;
    const headers = Object.keys(dataList[0]).join(',');
    const rows = dataList.map(obj => Object.values(obj).map(v => `"${v}"`).join(','));
    const csvContent = "data:text/csv;charset=utf-8," + [headers, ...rows].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `${filename}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Lock Screen View
  if (!isAuthenticated) {
    return (
      <div 
        style={{
          minHeight: '100vh',
          backgroundColor: '#0F172A',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px'
        }}
      >
        <div 
          style={{
            maxWidth: '420px',
            width: '100%',
            backgroundColor: '#1E293B',
            borderRadius: '24px',
            padding: '40px 32px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            border: '1.5px solid #334155',
            textAlign: 'center'
          }}
        >
          <div 
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              backgroundColor: 'rgba(138, 79, 255, 0.15)',
              color: '#A78BFA',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px auto'
            }}
          >
            <Lock size={32} />
          </div>

          <h2 style={{ fontSize: '1.75rem', fontWeight: 900, color: '#FFFFFF', marginBottom: '8px' }}>
            MANODAYA Staff Portal
          </h2>

          <p style={{ color: '#94A3B8', fontSize: '0.875rem', marginBottom: '28px' }}>
            Protected Clinical Dashboard. Enter staff passcode to continue.
          </p>

          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: '20px' }}>
              <input 
                type="password"
                placeholder="Enter Staff Passcode (1234)"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                style={{
                  width: '100%',
                  padding: '14px 18px',
                  borderRadius: '14px',
                  border: passcodeError ? '2px solid #EF4444' : '1.5px solid #475569',
                  backgroundColor: '#0F172A',
                  color: '#FFFFFF',
                  fontSize: '1rem',
                  textAlign: 'center',
                  letterSpacing: '0.2em'
                }}
              />
              {passcodeError && (
                <div style={{ color: '#EF4444', fontSize: '0.813rem', marginTop: '6px', fontWeight: 600 }}>
                  Incorrect Passcode. Try 1234.
                </div>
              )}
            </div>

            <button 
              className="btn-purple"
              type="submit"
              style={{ width: '100%', padding: '14px', borderRadius: '14px' }}
            >
              Unlock Dashboard
            </button>
          </form>

          <button 
            onClick={onNavigateHome}
            style={{
              marginTop: '20px',
              color: '#94A3B8',
              fontSize: '0.813rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <Home size={14} /> Back to Website
          </button>
        </div>
      </div>
    );
  }

  // Active leads filter
  const activeLeads = leads.filter(l => l.status !== 'Completed Archive');
  const archivedLeads = leads.filter(l => l.status === 'Completed Archive');

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F8FAFC', color: '#0F172A' }}>
      {/* Top Header */}
      <header style={{ backgroundColor: '#0F172A', color: '#FFFFFF', padding: '16px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <ShieldCheck size={26} color="#A78BFA" />
          <span style={{ fontSize: '1.25rem', fontWeight: 900, letterSpacing: '-0.02em' }}>
            MANODAYA Staff CRM Portal
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button onClick={onNavigateHome} className="btn-outline-theme" style={{ color: '#FFF', borderColor: '#475569', padding: '8px 16px', fontSize: '0.813rem' }}>
            <Home size={14} /> Back to Main Site
          </button>

          <button onClick={() => setIsAuthenticated(false)} className="btn-black" style={{ backgroundColor: '#EF4444', borderColor: '#EF4444', padding: '8px 16px', fontSize: '0.813rem' }}>
            <LogOut size={14} /> Lock Dashboard
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="container" style={{ padding: '32px 24px' }}>
        {/* Navigation Tabs */}
        <div style={{ display: 'flex', gap: '12px', marginBottom: '28px', borderBottom: '2px solid #E2E8F0', paddingBottom: '12px', flexWrap: 'wrap' }}>
          <button 
            onClick={() => setActiveTab('patients')}
            style={{
              padding: '10px 20px',
              borderRadius: '9999px',
              fontWeight: 800,
              fontSize: '0.875rem',
              backgroundColor: activeTab === 'patients' ? '#0F172A' : '#FFFFFF',
              color: activeTab === 'patients' ? '#FFFFFF' : '#64748B',
              border: '1.5px solid #E2E8F0',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <Users size={16} /> Patient Inquiries ({activeLeads.length})
          </button>

          <button 
            onClick={() => setActiveTab('internships')}
            style={{
              padding: '10px 20px',
              borderRadius: '9999px',
              fontWeight: 800,
              fontSize: '0.875rem',
              backgroundColor: activeTab === 'internships' ? '#8A4FFF' : '#FFFFFF',
              color: activeTab === 'internships' ? '#FFFFFF' : '#64748B',
              border: '1.5px solid #E2E8F0',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <GraduationCap size={16} /> Internships & Workshops ({internships.length})
          </button>

          <button 
            onClick={() => setActiveTab('post-workshop')}
            style={{
              padding: '10px 20px',
              borderRadius: '9999px',
              fontWeight: 800,
              fontSize: '0.875rem',
              backgroundColor: activeTab === 'post-workshop' ? '#FF497C' : '#FFFFFF',
              color: activeTab === 'post-workshop' ? '#FFFFFF' : '#64748B',
              border: '1.5px solid #E2E8F0',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <PlusCircle size={16} /> Post Upcoming Workshop ({workshops.length})
          </button>

          <button 
            onClick={() => setActiveTab('archives')}
            style={{
              padding: '10px 20px',
              borderRadius: '9999px',
              fontWeight: 800,
              fontSize: '0.875rem',
              backgroundColor: activeTab === 'archives' ? '#10B981' : '#FFFFFF',
              color: activeTab === 'archives' ? '#FFFFFF' : '#64748B',
              border: '1.5px solid #E2E8F0',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <CheckCircle2 size={16} /> Completed Archives ({archivedLeads.length})
          </button>
        </div>

        {/* TAB 1: PATIENT INQUIRIES */}
        {activeTab === 'patients' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 900 }}>Patient Clinical Leads</h2>
                <p style={{ color: '#64748B', fontSize: '0.875rem' }}>Manage incoming appointment submissions and send WhatsApp reminders.</p>
              </div>

              <div style={{ display: 'flex', gap: '10px' }}>
                <button onClick={() => handleExportCSV(activeLeads, 'Patient_Leads')} className="btn-outline-theme" style={{ fontSize: '0.813rem', padding: '8px 16px' }}>
                  <Download size={14} /> Export CSV
                </button>
              </div>
            </div>

            <div className="crm-table-container">
              <table className="crm-table">
                <thead>
                  <tr>
                    <th>Ref ID</th>
                    <th>Patient Name</th>
                    <th>Phone / Email</th>
                    <th>Service Required</th>
                    <th>Type & Slot</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {activeLeads.map((lead) => (
                    <tr key={lead.id}>
                      <td><strong>{lead.id}</strong></td>
                      <td>
                        <div style={{ fontWeight: 700 }}>{lead.patientName}</div>
                        <div style={{ fontSize: '0.75rem', color: '#64748B' }}>Age: {lead.age}</div>
                      </td>
                      <td>
                        <div>{lead.phone}</div>
                        <div style={{ fontSize: '0.75rem', color: '#64748B' }}>{lead.email}</div>
                      </td>
                      <td><strong style={{ color: '#8A4FFF' }}>{lead.service}</strong></td>
                      <td>
                        <div style={{ fontSize: '0.813rem', fontWeight: 600 }}>{lead.type}</div>
                        <div style={{ fontSize: '0.75rem', color: '#64748B' }}>{lead.date} @ {lead.time}</div>
                      </td>
                      <td>
                        <select 
                          value={lead.status}
                          onChange={(e) => handleUpdateStatus(lead.id, e.target.value)}
                          style={{
                            padding: '4px 10px',
                            borderRadius: '9999px',
                            fontSize: '0.75rem',
                            fontWeight: 800,
                            border: '1px solid #CBD5E1',
                            backgroundColor: lead.status === 'New' ? '#FEF3C7' : lead.status === 'Scheduled' ? '#D1FAE5' : '#F1F5F9'
                          }}
                        >
                          <option value="New">New Lead</option>
                          <option value="Contacted">Contacted</option>
                          <option value="Scheduled">Scheduled</option>
                          <option value="Completed Archive">Completed Archive</option>
                        </select>
                      </td>
                      <td>
                        <a 
                          href={`https://wa.me/${lead.phone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(lead.patientName)},%20this%20is%20MANODAYA%20Clinic%20regarding%20your%20booking%20for%20${encodeURIComponent(lead.service)}.`}
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px',
                            backgroundColor: '#25D366',
                            color: '#FFF',
                            padding: '6px 12px',
                            borderRadius: '9999px',
                            fontSize: '0.75rem',
                            fontWeight: 700
                          }}
                        >
                          <MessageSquare size={12} /> WhatsApp
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 2: INTERNSHIPS & WORKSHOPS APPLICATIONS */}
        {activeTab === 'internships' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 900 }}>Psychology Student Applications</h2>
                <p style={{ color: '#64748B', fontSize: '0.875rem' }}>Review applications for clinical internships, observerships, and workshops.</p>
              </div>

              <button onClick={() => handleExportCSV(internships, 'Internship_Applications')} className="btn-outline-theme" style={{ fontSize: '0.813rem', padding: '8px 16px' }}>
                <Download size={14} /> Export CSV
              </button>
            </div>

            {internships.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '48px', backgroundColor: '#FFFFFF', borderRadius: '20px', border: '1px solid #E2E8F0' }}>
                <GraduationCap size={40} color="#8A4FFF" style={{ marginBottom: '12px' }} />
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800 }}>No Applications Received Yet</h3>
                <p style={{ color: '#64748B', fontSize: '0.875rem' }}>Student applications submitted via the website form will appear here automatically.</p>
              </div>
            ) : (
              <div className="crm-table-container">
                <table className="crm-table">
                  <thead>
                    <tr>
                      <th>Ref ID</th>
                      <th>Applicant Name</th>
                      <th>Phone & Email</th>
                      <th>University / Qualification</th>
                      <th>App Type & Track</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {internships.map((app) => (
                      <tr key={app.id}>
                        <td><strong>{app.id}</strong></td>
                        <td>
                          <div style={{ fontWeight: 700 }}>{app.applicantName}</div>
                          <div style={{ fontSize: '0.75rem', color: '#64748B' }}>{app.createdAt}</div>
                        </td>
                        <td>
                          <div>{app.phone}</div>
                          <div style={{ fontSize: '0.75rem', color: '#64748B' }}>{app.email}</div>
                        </td>
                        <td>
                          <div style={{ fontWeight: 600 }}>{app.institution}</div>
                          <div style={{ fontSize: '0.75rem', color: '#64748B' }}>{app.qualification}</div>
                        </td>
                        <td>
                          <span className="badge-status" style={{ backgroundColor: app.applicationType === 'Clinical Internship' ? '#EDE9FE' : '#FEF3C7', color: app.applicationType === 'Clinical Internship' ? '#8A4FFF' : '#D97706', marginBottom: '4px' }}>
                            {app.applicationType}
                          </span>
                          <div style={{ fontSize: '0.813rem', fontWeight: 700 }}>{app.workshopTrack}</div>
                        </td>
                        <td>
                          <select 
                            value={app.status}
                            onChange={(e) => handleUpdateInternshipStatus(app.id, e.target.value)}
                            style={{
                              padding: '4px 10px',
                              borderRadius: '9999px',
                              fontSize: '0.75rem',
                              fontWeight: 800,
                              border: '1px solid #CBD5E1',
                              backgroundColor: app.status === 'Pending Review' ? '#FEF3C7' : app.status === 'Accepted' ? '#D1FAE5' : '#F1F5F9'
                            }}
                          >
                            <option value="Pending Review">Pending Review</option>
                            <option value="Accepted">Accepted</option>
                            <option value="Completed">Completed</option>
                            <option value="Rejected">Rejected</option>
                          </select>
                        </td>
                        <td>
                          <a 
                            href={`https://wa.me/${app.phone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(app.applicantName)},%20this%20is%20MANODAYA%20regarding%20your%20${encodeURIComponent(app.applicationType)}%20application.`}
                            target="_blank"
                            rel="noreferrer"
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '4px',
                              backgroundColor: '#25D366',
                              color: '#FFF',
                              padding: '6px 12px',
                              borderRadius: '9999px',
                              fontSize: '0.75rem',
                              fontWeight: 700
                            }}
                          >
                            <MessageSquare size={12} /> Contact
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* TAB 3: POST NEW UPCOMING WORKSHOP */}
        {activeTab === 'post-workshop' && (
          <div>
            <div style={{ marginBottom: '24px' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 900 }}>Post Upcoming Clinical Workshop</h2>
              <p style={{ color: '#64748B', fontSize: '0.875rem' }}>Announce new training workshops. Posted workshops update live on the website automatically.</p>
            </div>

            {workshopPostedSuccess && (
              <div style={{ backgroundColor: '#D1FAE5', color: '#059669', padding: '14px 20px', borderRadius: '14px', marginBottom: '20px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={20} /> Workshop posted successfully! It is now live on the website feed.
              </div>
            )}

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
              {/* Form */}
              <div style={{ backgroundColor: '#FFFFFF', padding: '32px', borderRadius: '24px', border: '1.5px solid #E2E8F0' }}>
                <form onSubmit={handlePostWorkshop}>
                  <div className="form-group">
                    <label className="form-label">Workshop Title *</label>
                    <input 
                      type="text"
                      required
                      className="form-input"
                      placeholder="e.g. Cognitive Rehabilitation & Memory Training Masterclass"
                      value={newWorkshop.title}
                      onChange={(e) => setNewWorkshop({ ...newWorkshop, title: e.target.value })}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                    <div className="form-group">
                      <label className="form-label">Date *</label>
                      <input 
                        type="text"
                        required
                        className="form-input"
                        placeholder="e.g. 25th September 2026"
                        value={newWorkshop.date}
                        onChange={(e) => setNewWorkshop({ ...newWorkshop, date: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Time Slot *</label>
                      <input 
                        type="text"
                        required
                        className="form-input"
                        placeholder="e.g. 10:00 AM - 04:00 PM"
                        value={newWorkshop.time}
                        onChange={(e) => setNewWorkshop({ ...newWorkshop, time: e.target.value })}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                    <div className="form-group">
                      <label className="form-label">Registration Fee</label>
                      <input 
                        type="text"
                        className="form-input"
                        placeholder="e.g. ₹2,000"
                        value={newWorkshop.fee}
                        onChange={(e) => setNewWorkshop({ ...newWorkshop, fee: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Seats Available</label>
                      <input 
                        type="text"
                        className="form-input"
                        placeholder="e.g. 15 Seats"
                        value={newWorkshop.seats}
                        onChange={(e) => setNewWorkshop({ ...newWorkshop, seats: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Mode of Delivery</label>
                    <select 
                      className="form-select"
                      value={newWorkshop.mode}
                      onChange={(e) => setNewWorkshop({ ...newWorkshop, mode: e.target.value })}
                    >
                      <option value="In-Person (Bhubaneswar Clinic)">In-Person (Bhubaneswar Clinic)</option>
                      <option value="Online Video Interactive">Online Video Interactive</option>
                      <option value="Hybrid / Both Options">Hybrid / Both Options</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Instructor / Faculty</label>
                    <input 
                      type="text"
                      className="form-input"
                      placeholder="e.g. Dr. Senior Neuropsychologist"
                      value={newWorkshop.instructor}
                      onChange={(e) => setNewWorkshop({ ...newWorkshop, instructor: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Workshop Description & Key Takeaways</label>
                    <textarea 
                      className="form-textarea"
                      rows={4}
                      placeholder="Describe what students will learn, batteries covered, certificates, and prerequisites..."
                      value={newWorkshop.description}
                      onChange={(e) => setNewWorkshop({ ...newWorkshop, description: e.target.value })}
                    />
                  </div>

                  <button className="btn-pink" type="submit" style={{ width: '100%', padding: '14px' }}>
                    <PlusCircle size={18} /> Post Workshop Live
                  </button>
                </form>
              </div>

              {/* Live Preview List */}
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '16px' }}>
                  Currently Active Workshops ({workshops.length})
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {workshops.map((ws) => (
                    <div key={ws.id} style={{ backgroundColor: '#FFFFFF', padding: '20px', borderRadius: '18px', border: '1.5px solid #E2E8F0' }}>
                      <span className="badge-status" style={{ backgroundColor: '#EDE9FE', color: '#8A4FFF', marginBottom: '8px' }}>
                        {ws.mode}
                      </span>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0E0E10', marginBottom: '6px' }}>
                        {ws.title}
                      </h4>
                      <div style={{ fontSize: '0.813rem', color: '#64748B', marginBottom: '10px' }}>
                        📅 {ws.date} | ⏰ {ws.time} | 🏷️ {ws.fee}
                      </div>
                      <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.4 }}>
                        {ws.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: COMPLETED ARCHIVES */}
        {activeTab === 'archives' && (
          <div>
            <div style={{ marginBottom: '20px' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 900 }}>Completed Patient History Archives</h2>
              <p style={{ color: '#64748B', fontSize: '0.875rem' }}>Archived records marked as Completed.</p>
            </div>

            <div className="crm-table-container">
              <table className="crm-table">
                <thead>
                  <tr>
                    <th>Ref ID</th>
                    <th>Patient Name</th>
                    <th>Phone</th>
                    <th>Service Provided</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {archivedLeads.map((lead) => (
                    <tr key={lead.id}>
                      <td><strong>{lead.id}</strong></td>
                      <td>{lead.patientName}</td>
                      <td>{lead.phone}</td>
                      <td>{lead.service}</td>
                      <td><span className="badge-status" style={{ backgroundColor: '#D1FAE5', color: '#059669' }}>Completed</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
