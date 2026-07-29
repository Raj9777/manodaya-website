import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, Search, Filter, MessageSquare, Mail, Phone, Calendar, 
  UserCheck, RefreshCw, X, PlusCircle, CheckCircle, Clock, Trash2, Send 
} from 'lucide-react';
import { INITIAL_CRM_LEADS, CLINIC_INFO } from '../data/content';

export const CrmDashboard = ({ isOpen, onClose }) => {
  const [passcode, setPasscode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Default accessible for seamless testing
  const [leads, setLeads] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  // Active Reminder Modal state
  const [activeReminderLead, setActiveReminderLead] = useState(null);
  const [reminderTemplate, setReminderTemplate] = useState('appointment'); // appointment | followUp | custom
  const [customMessage, setCustomMessage] = useState('');

  // Load leads from LocalStorage or seed defaults
  useEffect(() => {
    const storedLeads = localStorage.getItem('manodaya_crm_leads');
    if (storedLeads) {
      try {
        setLeads(JSON.parse(storedLeads));
      } catch (e) {
        setLeads(INITIAL_CRM_LEADS);
      }
    } else {
      localStorage.setItem('manodaya_crm_leads', JSON.stringify(INITIAL_CRM_LEADS));
      setLeads(INITIAL_CRM_LEADS);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Filtered leads calculation
  const filteredLeads = leads.filter(lead => {
    const matchesSearch = lead.patientName.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          lead.phone.includes(searchTerm) ||
                          lead.service.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || lead.category === categoryFilter;
    const matchesStatus = statusFilter === 'all' || lead.status === statusFilter;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const handleUpdateStatus = (id, newStatus) => {
    const updated = leads.map(l => l.id === id ? { ...l, status: newStatus } : l);
    setLeads(updated);
    localStorage.setItem('manodaya_crm_leads', JSON.stringify(updated));
  };

  const handleDeleteLead = (id) => {
    if (window.confirm("Are you sure you want to remove this patient record?")) {
      const updated = leads.filter(l => l.id !== id);
      setLeads(updated);
      localStorage.setItem('manodaya_crm_leads', JSON.stringify(updated));
    }
  };

  const handleResetDemoData = () => {
    localStorage.setItem('manodaya_crm_leads', JSON.stringify(INITIAL_CRM_LEADS));
    setLeads(INITIAL_CRM_LEADS);
  };

  // Generate WhatsApp text based on template
  const getWhatsAppMessage = (lead) => {
    if (reminderTemplate === 'appointment') {
      return `Hello ${lead.patientName}, this is a gentle reminder from MANODAYA Care regarding your appointment for ${lead.service} on ${lead.date} at ${lead.time}. Location: Old Town, Bhubaneswar. Reply YES to confirm.`;
    } else if (reminderTemplate === 'followUp') {
      return `Dear ${lead.patientName}, hope you are doing well. This is MANODAYA follow-up care regarding your ${lead.service} consultation. Please let us know if you require any assistance.`;
    }
    return customMessage || `Hello ${lead.patientName}, message from MANODAYA Neuropsychological Care.`;
  };

  const handleTriggerWhatsApp = (lead) => {
    const cleanPhone = lead.phone.replace(/[^0-9]/g, '');
    const message = encodeURIComponent(getWhatsAppMessage(lead));
    window.open(`https://wa.me/${cleanPhone}?text=${message}`, '_blank');
    setActiveReminderLead(null);
  };

  const handleTriggerEmail = (lead) => {
    const subject = encodeURIComponent(`MANODAYA Appointment Reminder - ${lead.service}`);
    const body = encodeURIComponent(getWhatsAppMessage(lead));
    window.open(`mailto:${lead.email}?subject=${subject}&body=${body}`, '_blank');
    setActiveReminderLead(null);
  };

  return (
    <div className="modal-overlay" style={{ zIndex: 2500 }}>
      <div 
        className="modal-content" 
        style={{ 
          maxWidth: '1100px', 
          width: '95%',
          padding: '36px', 
          maxHeight: '92vh',
          background: '#FFFDF9'
        }}
      >
        <button className="modal-close-btn" onClick={onClose}>
          <X size={20} />
        </button>

        {/* Top Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <span className="section-badge" style={{ backgroundColor: '#0F3832', color: '#F2C94C' }}>
              <ShieldCheck size={14} /> Staff CRM Portal
            </span>
            <h2 style={{ fontSize: '1.8rem', color: '#0F3832', margin: '6px 0 0 0' }}>
              Patient Submissions & Reminder Center
            </h2>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <button className="btn-outline" onClick={handleResetDemoData} style={{ fontSize: '0.813rem', padding: '8px 14px' }}>
              <RefreshCw size={14} /> Restore Demo Leads
            </button>
          </div>
        </div>

        {/* Search & Filters Controls */}
        <div 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            marginBottom: '20px',
            backgroundColor: '#FBF9F4',
            padding: '16px',
            borderRadius: '16px',
            border: '1px solid rgba(15, 56, 50, 0.08)'
          }}
        >
          {/* Search Box */}
          <div style={{ flex: 1, minWidth: '220px', position: 'relative' }}>
            <Search size={18} style={{ position: 'absolute', left: '14px', top: '14px', color: '#4B635E' }} />
            <input 
              type="text"
              placeholder="Search by patient name, phone, service..."
              className="form-input"
              style={{ paddingLeft: '42px', fontSize: '0.875rem' }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Category Filter */}
          <select 
            className="form-select"
            style={{ width: '180px', fontSize: '0.875rem' }}
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value="all">All Care Categories</option>
            <option value="child">Child & Adolescent</option>
            <option value="adult">Adult & Geriatric</option>
          </select>

          {/* Status Filter */}
          <select 
            className="form-select"
            style={{ width: '160px', fontSize: '0.875rem' }}
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">All Statuses</option>
            <option value="New">New Lead</option>
            <option value="Scheduled">Scheduled</option>
            <option value="Contacted">Contacted</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        {/* Submissions Table */}
        <div className="crm-table-container">
          <table className="crm-table">
            <thead>
              <tr>
                <th>Patient Details</th>
                <th>Care Category</th>
                <th>Service & Date</th>
                <th>Status</th>
                <th>Actions & Reminders</th>
              </tr>
            </thead>
            <tbody>
              {filteredLeads.length === 0 ? (
                <tr>
                  <td colSpan="5" style={{ textAlign: 'center', padding: '40px', color: '#4B635E' }}>
                    No patient records found matching the current search filters.
                  </td>
                </tr>
              ) : (
                filteredLeads.map((lead) => (
                  <tr key={lead.id}>
                    {/* Patient Info */}
                    <td>
                      <div style={{ fontWeight: 700, color: '#0F3832' }}>{lead.patientName}</div>
                      <div style={{ fontSize: '0.813rem', color: '#4B635E' }}>
                        📞 {lead.phone} | ✉️ {lead.email}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#94A3B8', marginTop: '2px' }}>
                        Ref: {lead.id} ({lead.createdAt})
                      </div>
                    </td>

                    {/* Category */}
                    <td>
                      <span 
                        className="badge-status"
                        style={{
                          backgroundColor: lead.category === 'child' ? '#F3E8FF' : '#E2EBE4',
                          color: lead.category === 'child' ? '#7C3AED' : '#0F3832'
                        }}
                      >
                        {lead.category === 'child' ? 'Child Care' : 'Adult Care'}
                      </span>
                    </td>

                    {/* Service & Date */}
                    <td>
                      <div style={{ fontWeight: 600 }}>{lead.service}</div>
                      <div style={{ fontSize: '0.813rem', color: '#4B635E', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Calendar size={12} /> {lead.date} ({lead.time})
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#64748B', fontStyle: 'italic' }}>
                        Type: {lead.type}
                      </div>
                    </td>

                    {/* Status Select */}
                    <td>
                      <select 
                        value={lead.status}
                        onChange={(e) => handleUpdateStatus(lead.id, e.target.value)}
                        style={{
                          padding: '4px 8px',
                          borderRadius: '8px',
                          fontWeight: 600,
                          fontSize: '0.813rem',
                          border: '1px solid #CBD5E1',
                          backgroundColor: 
                            lead.status === 'New' ? '#E0F2FE' : 
                            lead.status === 'Scheduled' ? '#F3E8FF' : 
                            lead.status === 'Completed' ? '#DCFCE7' : '#FEF3C7',
                          color: 
                            lead.status === 'New' ? '#0284C7' : 
                            lead.status === 'Scheduled' ? '#7C3AED' : 
                            lead.status === 'Completed' ? '#16A34A' : '#D97706'
                        }}
                      >
                        <option value="New">New</option>
                        <option value="Scheduled">Scheduled</option>
                        <option value="Contacted">Contacted</option>
                        <option value="Completed">Completed</option>
                      </select>
                    </td>

                    {/* Action & Reminder Buttons */}
                    <td>
                      <div style={{ display: 'flex', gap: '6px' }}>
                        {/* Send Reminder Modal Trigger */}
                        <button 
                          onClick={() => setActiveReminderLead(lead)}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px',
                            backgroundColor: '#25D366',
                            color: '#FFF',
                            padding: '6px 10px',
                            borderRadius: '8px',
                            fontSize: '0.75rem',
                            fontWeight: 700
                          }}
                          title="Dispatch WhatsApp / Email Reminder"
                        >
                          <MessageSquare size={13} /> Send Reminder
                        </button>

                        <button 
                          onClick={() => handleDeleteLead(lead.id)}
                          style={{ color: '#EF4444', padding: '4px 6px', borderRadius: '6px' }}
                          title="Delete Lead"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Reminder Modal Builder */}
        {activeReminderLead && (
          <div className="modal-overlay" style={{ zIndex: 3000 }}>
            <div className="modal-content" style={{ maxWidth: '560px' }}>
              <button className="modal-close-btn" onClick={() => setActiveReminderLead(null)}>
                <X size={20} />
              </button>

              <span className="section-badge" style={{ backgroundColor: '#DCFCE7', color: '#166534' }}>
                <Send size={14} /> Dispatch Patient Reminder
              </span>

              <h3 style={{ fontSize: '1.4rem', color: '#0F3832', margin: '8px 0 16px 0' }}>
                Send Reminder to {activeReminderLead.patientName}
              </h3>

              <div className="form-group">
                <label className="form-label">Template Preset</label>
                <select 
                  className="form-select"
                  value={reminderTemplate}
                  onChange={(e) => setReminderTemplate(e.target.value)}
                >
                  <option value="appointment">Appointment Date & Time Reminder</option>
                  <option value="followUp">Post-Assessment Care Follow-up</option>
                  <option value="custom">Custom Customized Message</option>
                </select>
              </div>

              {reminderTemplate === 'custom' && (
                <div className="form-group">
                  <label className="form-label">Custom Message Content</label>
                  <textarea 
                    rows="3"
                    className="form-textarea"
                    value={customMessage}
                    onChange={(e) => setCustomMessage(e.target.value)}
                    placeholder="Enter custom reminder text..."
                  ></textarea>
                </div>
              )}

              {/* Preview Box */}
              <div 
                style={{
                  backgroundColor: '#FBF9F4',
                  padding: '16px',
                  borderRadius: '12px',
                  fontSize: '0.875rem',
                  color: '#0F3832',
                  border: '1px dashed #A78BFA',
                  marginBottom: '24px'
                }}
              >
                <strong>Message Preview:</strong>
                <p style={{ margin: '8px 0 0 0', fontStyle: 'italic' }}>
                  "{getWhatsAppMessage(activeReminderLead)}"
                </p>
              </div>

              {/* Action Trigger Buttons */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <button 
                  className="btn-accent" 
                  onClick={() => handleTriggerWhatsApp(activeReminderLead)}
                  style={{ backgroundColor: '#25D366', color: '#FFF' }}
                >
                  <MessageSquare size={18} /> Launch WhatsApp
                </button>

                <button 
                  className="btn-primary" 
                  onClick={() => handleTriggerEmail(activeReminderLead)}
                  style={{ backgroundColor: '#0F3832' }}
                >
                  <Mail size={18} /> Launch Email Client
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
