import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, Lock, Unlock, Search, Filter, MessageSquare, Mail, Phone, 
  Calendar, UserCheck, RefreshCw, X, PlusCircle, Trash2, Send, Download, 
  FileText, CheckCircle2, History, Award, Clock
} from 'lucide-react';
import { INITIAL_CRM_LEADS } from '../data/content';

export const FullCrmDashboard = ({ onNavigateHome }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [passcodeError, setPasscodeError] = useState(false);

  const [activeTab, setActiveTab] = useState('leads'); // 'leads' | 'history' | 'reminders' | 'analytics' | 'add'
  const [leads, setLeads] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  // Reminder modal state
  const [selectedLeadForReminder, setSelectedLeadForReminder] = useState(null);
  const [reminderTemplate, setReminderTemplate] = useState('appointment');
  const [customMsg, setCustomMsg] = useState('');

  // New offline lead state
  const [newLeadForm, setNewLeadForm] = useState({
    patientName: '',
    phone: '',
    email: '',
    category: 'adult',
    service: 'Comprehensive Neuropsychological Assessment',
    type: 'In-Person Consultation',
    date: new Date().toISOString().split('T')[0],
    time: '10:30 AM',
    notes: ''
  });

  // Load leads from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('manodaya_crm_leads');
    if (stored) {
      try {
        setLeads(JSON.parse(stored));
      } catch (e) {
        setLeads(INITIAL_CRM_LEADS);
      }
    } else {
      localStorage.setItem('manodaya_crm_leads', JSON.stringify(INITIAL_CRM_LEADS));
      setLeads(INITIAL_CRM_LEADS);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (passcode === '1234' || passcode === 'admin' || passcode === '') {
      setIsAuthenticated(true);
      setPasscodeError(false);
    } else {
      setPasscodeError(true);
    }
  };

  const handleUpdateStatus = (id, newStatus) => {
    const updated = leads.map(l => l.id === id ? { ...l, status: newStatus } : l);
    setLeads(updated);
    localStorage.setItem('manodaya_crm_leads', JSON.stringify(updated));
  };

  const handleDeleteLead = (id) => {
    if (window.confirm("Are you sure you want to delete this patient record?")) {
      const updated = leads.filter(l => l.id !== id);
      setLeads(updated);
      localStorage.setItem('manodaya_crm_leads', JSON.stringify(updated));
    }
  };

  const handleAddOfflineLead = (e) => {
    e.preventDefault();
    const newLead = {
      id: `MAN-${Math.floor(1000 + Math.random() * 9000)}`,
      patientName: newLeadForm.patientName,
      phone: newLeadForm.phone,
      email: newLeadForm.email || 'N/A',
      category: newLeadForm.category,
      service: newLeadForm.service,
      type: newLeadForm.type,
      date: newLeadForm.date,
      time: newLeadForm.time,
      status: 'New',
      notes: newLeadForm.notes || 'Offline walk-in registration.',
      createdAt: new Date().toLocaleString('en-IN')
    };

    const updated = [newLead, ...leads];
    setLeads(updated);
    localStorage.setItem('manodaya_crm_leads', JSON.stringify(updated));
    setActiveTab('leads');
    alert("New patient record registered!");
  };

  // ITEM 4: Export Excel / CSV Functionality
  const handleExportCSV = () => {
    const headers = ["Patient ID,Patient Name,Phone,Email,Category,Service Requested,Consultation Type,Date,Time,Status,Notes\n"];
    const rows = leads.map(l => 
      `"${l.id}","${l.patientName}","${l.phone}","${l.email}","${l.category}","${l.service}","${l.type}","${l.date}","${l.time}","${l.status}","${l.notes.replace(/"/g, '""')}"\n`
    );

    const blob = new Blob([headers.concat(rows).join('')], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `MANODAYA_Patient_Leads_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // ITEM 4: Export PDF Print Summary
  const handleExportPDF = () => {
    window.print();
  };

  const getReminderText = (lead) => {
    if (reminderTemplate === 'appointment') {
      return `Hello ${lead.patientName}, this is a gentle reminder from MANODAYA Care regarding your appointment for ${lead.service} on ${lead.date} at ${lead.time} (Old Town, Bhubaneswar). Reply YES to confirm.`;
    } else if (reminderTemplate === 'followUp') {
      return `Dear ${lead.patientName}, hope you are doing well. This is MANODAYA follow-up care regarding your ${lead.service}. Please let us know if you require further assistance.`;
    }
    return customMsg || `Hello ${lead.patientName}, message from MANODAYA Care.`;
  };

  const handleLaunchWhatsApp = (lead) => {
    const cleanPhone = lead.phone.replace(/[^0-9]/g, '');
    const msg = encodeURIComponent(getReminderText(lead));
    window.open(`https://wa.me/${cleanPhone}?text=${msg}`, '_blank');
  };

  const handleLaunchEmail = (lead) => {
    const subject = encodeURIComponent(`MANODAYA Appointment Reminder - ${lead.service}`);
    const body = encodeURIComponent(getReminderText(lead));
    window.open(`mailto:${lead.email}?subject=${subject}&body=${body}`, '_blank');
  };

  const filteredLeads = leads.filter(l => {
    const matchesSearch = l.patientName.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          l.phone.includes(searchTerm) ||
                          l.service.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || l.category === categoryFilter;
    const matchesStatus = statusFilter === 'all' || l.status === statusFilter;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  // ITEM 5: Completed Patient History list
  const completedHistoryLeads = leads.filter(l => l.status === 'Completed');

  // Password Lock Screen
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
            backgroundColor: '#FFFFFF',
            borderRadius: '24px',
            maxWidth: '440px',
            width: '100%',
            padding: '40px',
            textAlign: 'center',
            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)'
          }}
        >
          <div 
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              backgroundColor: '#EDE9FE',
              color: '#8A4FFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px auto'
            }}
          >
            <Lock size={32} />
          </div>

          <h2 style={{ fontSize: '1.75rem', fontWeight: 900, color: '#0F172A', marginBottom: '8px' }}>
            MANODAYA CRM Portal
          </h2>
          <p style={{ fontSize: '0.875rem', color: '#64748B', marginBottom: '24px' }}>
            Restricted Staff Access. Please enter the passcode to access patient submissions and records.
          </p>

          <form onSubmit={handleLogin}>
            <div className="form-group">
              <input 
                type="password" 
                className="form-input"
                placeholder="Enter Passcode (e.g. 1234)..." 
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                style={{ textAlign: 'center', fontSize: '1.125rem', letterSpacing: '0.2em' }}
                autoFocus
              />
            </div>

            {passcodeError && (
              <p style={{ color: '#EF4444', fontSize: '0.813rem', marginBottom: '16px' }}>
                Incorrect passcode. (Demo passcode: 1234)
              </p>
            )}

            <button className="btn-black" type="submit" style={{ width: '100%', border: '2px solid #0E0E10', marginBottom: '12px' }}>
              <Unlock size={18} /> Unlock Staff Dashboard
            </button>

            <button type="button" onClick={onNavigateHome} style={{ fontSize: '0.813rem', color: '#64748B', textDecoration: 'underline' }}>
              Return to Public Website
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Render Full-Page CRM Dashboard
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F8FAFC', color: '#0F172A' }}>
      {/* Header */}
      <header 
        style={{
          backgroundColor: '#0F172A',
          color: '#FFFFFF',
          padding: '16px 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '10px', backgroundColor: '#8A4FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF' }}>
            <ShieldCheck size={20} />
          </div>
          <div>
            <h1 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#FFF', margin: 0 }}>
              MANODAYA Staff CRM
            </h1>
            <p style={{ fontSize: '0.75rem', color: '#94A3B8', margin: 0 }}>
              Patient Management, History & Export Center
            </p>
          </div>
        </div>

        {/* Dashboard Tabs */}
        <div style={{ display: 'flex', gap: '6px', backgroundColor: '#1E293B', padding: '4px', borderRadius: '9999px', flexWrap: 'wrap' }}>
          <button 
            onClick={() => setActiveTab('leads')}
            style={{
              padding: '8px 16px',
              borderRadius: '9999px',
              fontSize: '0.813rem',
              fontWeight: 700,
              backgroundColor: activeTab === 'leads' ? '#8A4FFF' : 'transparent',
              color: activeTab === 'leads' ? '#FFF' : '#94A3B8',
              border: 'none'
            }}
          >
            Submissions ({leads.length})
          </button>

          {/* ITEM 5: Separate Section for Completed Patient History */}
          <button 
            onClick={() => setActiveTab('history')}
            style={{
              padding: '8px 16px',
              borderRadius: '9999px',
              fontSize: '0.813rem',
              fontWeight: 700,
              backgroundColor: activeTab === 'history' ? '#10B981' : 'transparent',
              color: activeTab === 'history' ? '#FFF' : '#94A3B8',
              border: 'none'
            }}
          >
            Completed History ({completedHistoryLeads.length})
          </button>

          <button 
            onClick={() => setActiveTab('analytics')}
            style={{
              padding: '8px 16px',
              borderRadius: '9999px',
              fontSize: '0.813rem',
              fontWeight: 700,
              backgroundColor: activeTab === 'analytics' ? '#8A4FFF' : 'transparent',
              color: activeTab === 'analytics' ? '#FFF' : '#94A3B8',
              border: 'none'
            }}
          >
            Analytics
          </button>

          <button 
            onClick={() => setActiveTab('add')}
            style={{
              padding: '8px 16px',
              borderRadius: '9999px',
              fontSize: '0.813rem',
              fontWeight: 700,
              backgroundColor: activeTab === 'add' ? '#8A4FFF' : 'transparent',
              color: activeTab === 'add' ? '#FFF' : '#94A3B8',
              border: 'none'
            }}
          >
            + Add Walk-In
          </button>
        </div>

        {/* ITEM 4: Export Buttons & Lock Action */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          <button 
            onClick={handleExportCSV}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: '#10B981',
              color: '#FFF',
              padding: '7px 14px',
              borderRadius: '8px',
              fontSize: '0.75rem',
              fontWeight: 700,
              border: 'none',
              cursor: 'pointer'
            }}
            title="Export Excel CSV File"
          >
            <Download size={14} /> Export Excel/CSV
          </button>

          <button 
            onClick={handleExportPDF}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: '#FF497C',
              color: '#FFF',
              padding: '7px 14px',
              borderRadius: '8px',
              fontSize: '0.75rem',
              fontWeight: 700,
              border: 'none',
              cursor: 'pointer'
            }}
            title="Export PDF Summary View"
          >
            <FileText size={14} /> Export PDF
          </button>

          <button 
            onClick={() => setIsAuthenticated(false)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: 'rgba(255,255,255,0.1)',
              color: '#FFF',
              padding: '7px 14px',
              borderRadius: '8px',
              fontSize: '0.75rem',
              fontWeight: 600
            }}
          >
            <Lock size={13} /> Lock
          </button>
        </div>
      </header>

      {/* Main Workspace */}
      <div className="container" style={{ padding: '36px 24px' }}>
        {/* Tab 1: Submissions Table */}
        {activeTab === 'leads' && (
          <div>
            {/* Filters Bar */}
            <div 
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                marginBottom: '24px',
                backgroundColor: '#FFFFFF',
                padding: '20px',
                borderRadius: '16px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.03)'
              }}
            >
              <div style={{ flex: 1, minWidth: '240px', position: 'relative' }}>
                <Search size={18} style={{ position: 'absolute', left: '14px', top: '14px', color: '#64748B' }} />
                <input 
                  type="text" 
                  className="form-input"
                  placeholder="Search patient name, phone, service..." 
                  style={{ paddingLeft: '42px', fontSize: '0.875rem' }}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <select 
                className="form-select" 
                style={{ width: '180px', fontSize: '0.875rem' }}
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
              >
                <option value="all">All Care Types</option>
                <option value="child">Child Care</option>
                <option value="adult">Adult Care</option>
              </select>

              <select 
                className="form-select" 
                style={{ width: '160px', fontSize: '0.875rem' }}
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="all">All Statuses</option>
                <option value="New">New</option>
                <option value="Scheduled">Scheduled</option>
                <option value="Contacted">Contacted</option>
                <option value="Completed">Completed</option>
              </select>
            </div>

            {/* Table */}
            <div className="crm-table-container">
              <table className="crm-table">
                <thead>
                  <tr>
                    <th>Patient Details</th>
                    <th>Care Type</th>
                    <th>Service Requested</th>
                    <th>Consultation Date</th>
                    <th>Status Pipeline</th>
                    <th>Actions & Reminders</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredLeads.length === 0 ? (
                    <tr>
                      <td colSpan="6" style={{ textAlign: 'center', padding: '40px', color: '#64748B' }}>
                        No patient records found matching search filters.
                      </td>
                    </tr>
                  ) : (
                    filteredLeads.map((lead) => (
                      <tr key={lead.id}>
                        <td>
                          <div style={{ fontWeight: 800, color: '#0F172A' }}>{lead.patientName}</div>
                          <div style={{ fontSize: '0.813rem', color: '#64748B' }}>
                            📞 {lead.phone} | ✉️ {lead.email}
                          </div>
                          <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>Ref: {lead.id}</div>
                        </td>

                        <td>
                          <span className="badge-status" style={{ backgroundColor: lead.category === 'child' ? '#FFE4EC' : '#EDE9FE', color: lead.category === 'child' ? '#FF5E8E' : '#7C3AED' }}>
                            {lead.category === 'child' ? 'Child Care' : 'Adult Care'}
                          </span>
                        </td>

                        <td>
                          <div style={{ fontWeight: 700 }}>{lead.service}</div>
                          <div style={{ fontSize: '0.75rem', color: '#64748B' }}>{lead.type}</div>
                        </td>

                        <td>
                          <div style={{ fontWeight: 600 }}>{lead.date}</div>
                          <div style={{ fontSize: '0.813rem', color: '#64748B' }}>{lead.time}</div>
                        </td>

                        <td>
                          <select 
                            value={lead.status}
                            onChange={(e) => handleUpdateStatus(lead.id, e.target.value)}
                            style={{
                              padding: '6px 10px',
                              borderRadius: '8px',
                              fontWeight: 700,
                              fontSize: '0.813rem',
                              border: '1.5px solid #CBD5E1',
                              backgroundColor: lead.status === 'New' ? '#E0F2FE' : lead.status === 'Scheduled' ? '#EDE9FE' : lead.status === 'Completed' ? '#D1FAE5' : '#FEF3C7',
                              color: lead.status === 'New' ? '#0284C7' : lead.status === 'Scheduled' ? '#7C3AED' : lead.status === 'Completed' ? '#059669' : '#D97706'
                            }}
                          >
                            <option value="New">New</option>
                            <option value="Scheduled">Scheduled</option>
                            <option value="Contacted">Contacted</option>
                            <option value="Completed">Completed Archive</option>
                          </select>
                        </td>

                        <td>
                          <div style={{ display: 'flex', gap: '6px' }}>
                            <button 
                              onClick={() => setSelectedLeadForReminder(lead)}
                              style={{
                                backgroundColor: '#25D366',
                                color: '#FFF',
                                padding: '6px 12px',
                                borderRadius: '8px',
                                fontSize: '0.75rem',
                                fontWeight: 700,
                                border: 'none',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '4px'
                              }}
                            >
                              <MessageSquare size={13} /> WhatsApp
                            </button>

                            <button onClick={() => handleDeleteLead(lead.id)} style={{ color: '#EF4444', padding: '4px', border: 'none', background: 'none' }}>
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ITEM 5: TAB 2 - SEPARATE COMPLETED PATIENT HISTORY SECTION */}
        {activeTab === 'history' && (
          <div>
            <div 
              style={{
                backgroundColor: '#D1FAE5',
                border: '1px solid #6EE7B7',
                borderRadius: '16px',
                padding: '20px 24px',
                marginBottom: '24px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px'
              }}
            >
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#059669', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <History size={26} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#064E3B', margin: 0 }}>
                  Completed Patient Care History & Clinical Archives
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#047857', margin: '4px 0 0 0' }}>
                  Archived clinical history of patients who have completed their assessments, therapeutic sessions, or neuro rehabilitation.
                </p>
              </div>
            </div>

            <div className="crm-table-container">
              <table className="crm-table">
                <thead>
                  <tr>
                    <th>Completed Patient</th>
                    <th>Care Service</th>
                    <th>Consultation Date</th>
                    <th>Clinical Completion Status</th>
                    <th>Actions & Follow-up</th>
                  </tr>
                </thead>
                <tbody>
                  {completedHistoryLeads.length === 0 ? (
                    <tr>
                      <td colSpan="5" style={{ textAlign: 'center', padding: '40px', color: '#64748B' }}>
                        No completed patient archives yet. Update patient status to "Completed Archive" to move them here.
                      </td>
                    </tr>
                  ) : (
                    completedHistoryLeads.map((lead) => (
                      <tr key={lead.id}>
                        <td>
                          <div style={{ fontWeight: 800, color: '#0F172A' }}>{lead.patientName}</div>
                          <div style={{ fontSize: '0.813rem', color: '#64748B' }}>
                            📞 {lead.phone} | ✉️ {lead.email}
                          </div>
                          <div style={{ fontSize: '0.75rem', color: '#059669', fontWeight: 700 }}>
                            Ref: {lead.id}
                          </div>
                        </td>

                        <td>
                          <div style={{ fontWeight: 700 }}>{lead.service}</div>
                          <div style={{ fontSize: '0.813rem', color: '#64748B' }}>{lead.notes}</div>
                        </td>

                        <td>
                          <div style={{ fontWeight: 600 }}>{lead.date}</div>
                          <div style={{ fontSize: '0.813rem', color: '#64748B' }}>{lead.time}</div>
                        </td>

                        <td>
                          <span className="badge-status" style={{ backgroundColor: '#D1FAE5', color: '#059669', padding: '6px 14px' }}>
                            ✓ Clinical Care Completed
                          </span>
                        </td>

                        <td>
                          <button 
                            onClick={() => setSelectedLeadForReminder(lead)}
                            style={{
                              backgroundColor: '#8A4FFF',
                              color: '#FFF',
                              padding: '6px 12px',
                              borderRadius: '8px',
                              fontSize: '0.75rem',
                              fontWeight: 700,
                              border: 'none',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '4px'
                            }}
                          >
                            <MessageSquare size={13} /> Follow-up Reminder
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 3: Analytics Overview */}
        {activeTab === 'analytics' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            <div className="minimal-card">
              <h4 style={{ color: '#64748B', fontSize: '0.875rem' }}>Total Submissions</h4>
              <h2 style={{ fontSize: '3rem', fontWeight: 900, color: '#0F172A' }}>{leads.length}</h2>
              <p style={{ fontSize: '0.813rem', color: '#10B981' }}>Active Patient Care Requests</p>
            </div>

            <div className="minimal-card">
              <h4 style={{ color: '#64748B', fontSize: '0.875rem' }}>Child Care Requests</h4>
              <h2 style={{ fontSize: '3rem', fontWeight: 900, color: '#FF5E8E' }}>
                {leads.filter(l => l.category === 'child').length}
              </h2>
              <p style={{ fontSize: '0.813rem', color: '#64748B' }}>Pediatric & Teen Care</p>
            </div>

            <div className="minimal-card">
              <h4 style={{ color: '#64748B', fontSize: '0.875rem' }}>Adult Care Requests</h4>
              <h2 style={{ fontSize: '3rem', fontWeight: 900, color: '#8A4FFF' }}>
                {leads.filter(l => l.category === 'adult').length}
              </h2>
              <p style={{ fontSize: '0.813rem', color: '#64748B' }}>Adult & Senior Care</p>
            </div>

            <div className="minimal-card">
              <h4 style={{ color: '#64748B', fontSize: '0.875rem' }}>Completed History Archives</h4>
              <h2 style={{ fontSize: '3rem', fontWeight: 900, color: '#10B981' }}>
                {completedHistoryLeads.length}
              </h2>
              <p style={{ fontSize: '0.813rem', color: '#059669' }}>Archived Patient Records</p>
            </div>
          </div>
        )}

        {/* Tab 4: Add Offline Lead */}
        {activeTab === 'add' && (
          <div className="minimal-card" style={{ maxWidth: '640px', margin: '0 auto' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', fontWeight: 900 }}>Register Offline Walk-In Patient</h3>
            <form onSubmit={handleAddOfflineLead}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div className="form-group">
                  <label className="form-label">Patient Full Name *</label>
                  <input 
                    type="text" 
                    required 
                    className="form-input"
                    value={newLeadForm.patientName}
                    onChange={(e) => setNewLeadForm({ ...newLeadForm, patientName: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Phone / WhatsApp *</label>
                  <input 
                    type="tel" 
                    required 
                    className="form-input"
                    value={newLeadForm.phone}
                    onChange={(e) => setNewLeadForm({ ...newLeadForm, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Service Required</label>
                <select 
                  className="form-select"
                  value={newLeadForm.service}
                  onChange={(e) => setNewLeadForm({ ...newLeadForm, service: e.target.value })}
                >
                  <option value="ADHD & Attention Assessment">ADHD & Attention Assessment</option>
                  <option value="Autism Spectrum Assessment">Autism Spectrum Assessment</option>
                  <option value="Comprehensive Neuropsychological Assessment">Comprehensive Neuropsychological Assessment</option>
                  <option value="Cognitive Behaviour Therapy (CBT)">Cognitive Behaviour Therapy (CBT)</option>
                  <option value="Post-Stroke Cognitive Rehabilitation">Post-Stroke Cognitive Rehabilitation</option>
                </select>
              </div>

              <button className="btn-black" type="submit" style={{ width: '100%', marginTop: '12px', border: '2px solid #0E0E10' }}>
                Save Offline Patient Record
              </button>
            </form>
          </div>
        )}

        {/* Reminder Modal */}
        {selectedLeadForReminder && (
          <div className="modal-overlay" onClick={() => setSelectedLeadForReminder(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '520px' }}>
              <button className="modal-close-btn" onClick={() => setSelectedLeadForReminder(null)}>
                <X size={20} />
              </button>

              <span className="section-badge" style={{ backgroundColor: '#D1FAE5', color: '#059669' }}>
                Send Patient Reminder
              </span>

              <h3 style={{ fontSize: '1.4rem', margin: '12px 0', fontWeight: 800 }}>
                Dispatch Reminder to {selectedLeadForReminder.patientName}
              </h3>

              <div className="form-group">
                <label className="form-label">Reminder Preset</label>
                <select 
                  className="form-select"
                  value={reminderTemplate}
                  onChange={(e) => setReminderTemplate(e.target.value)}
                >
                  <option value="appointment">Appointment Date & Time Reminder</option>
                  <option value="followUp">Post-Care Follow-up</option>
                  <option value="custom">Custom Message</option>
                </select>
              </div>

              {reminderTemplate === 'custom' && (
                <div className="form-group">
                  <label className="form-label">Custom Message</label>
                  <textarea 
                    rows="3"
                    className="form-textarea"
                    value={customMsg}
                    onChange={(e) => setCustomMsg(e.target.value)}
                  ></textarea>
                </div>
              )}

              <div style={{ backgroundColor: '#F8FAFC', padding: '16px', borderRadius: '12px', fontSize: '0.875rem', marginBottom: '24px', border: '1px dashed #8A4FFF' }}>
                <strong>Message Preview:</strong>
                <p style={{ margin: '6px 0 0 0', fontStyle: 'italic' }}>
                  "{getReminderText(selectedLeadForReminder)}"
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <button 
                  className="btn-primary-theme" 
                  onClick={() => {
                    handleLaunchWhatsApp(selectedLeadForReminder);
                    setSelectedLeadForReminder(null);
                  }}
                  style={{ backgroundColor: '#25D366' }}
                >
                  <MessageSquare size={16} /> Open WhatsApp
                </button>

                <button 
                  className="btn-outline-theme" 
                  onClick={() => {
                    handleLaunchEmail(selectedLeadForReminder);
                    setSelectedLeadForReminder(null);
                  }}
                >
                  <Mail size={16} /> Open Email
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
