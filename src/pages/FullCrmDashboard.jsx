import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, Lock, Search, Download, LogOut, CheckCircle2, 
  Clock, MessageSquare, Mail, Home, Users, Calendar, PlusCircle, Sparkles, GraduationCap, Edit3, Trash2, Key, Settings, AlertCircle, RefreshCw, Wifi, WifiOff, FileText
} from 'lucide-react';
import { INITIAL_CRM_LEADS } from '../data/content';
import { db } from '../firebase';
import {
  collection, doc, setDoc, deleteDoc, onSnapshot,
  updateDoc, addDoc, getDocs, query, orderBy
} from 'firebase/firestore';

// Check if Firebase is configured
const isFirebaseConfigured = () => {
  try {
    return db && !window.__FIREBASE_UNCONFIGURED__;
  } catch {
    return false;
  }
};

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
    title: "Pediatric Autism Screening Practicum",
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
  const [currentSavedPasscode, setCurrentSavedPasscode] = useState('1234');
  const [passcodeError, setPasscodeError] = useState(false);
  const [firebaseOnline, setFirebaseOnline] = useState(true);

  const [activeTab, setActiveTab] = useState('patients');

  const [leads, setLeads] = useState([]);
  const [internships, setInternships] = useState([]);
  const [workshops, setWorkshops] = useState([]);

  const [editingWorkshopId, setEditingWorkshopId] = useState(null);
  const [newWorkshop, setNewWorkshop] = useState({
    title: '', date: '', time: '',
    mode: 'In-Person (Bhubaneswar Clinic)',
    instructor: 'MANODAYA Clinical Faculty',
    fee: '', seats: '15 Seats', description: ''
  });
  const [workshopNotice, setWorkshopNotice] = useState('');

  const [passcodeForm, setPasscodeForm] = useState({ currentPass: '', newPass: '', confirmPass: '' });
  const [passcodeNotice, setPasscodeNotice] = useState({ type: '', msg: '' });

  // ─── Firestore Real-Time Listeners ────────────────────────────────────────
  useEffect(() => {
    // Passcode from localStorage (device-level security is fine)
    const savedPass = localStorage.getItem('manodaya_crm_passcode') || '1234';
    setCurrentSavedPasscode(savedPass);

    // Try Firestore listeners; fall back to localStorage if not configured
    let unsubLeads, unsubInternships, unsubWorkshops;

    try {
      // --- Patient Leads ---
      const leadsRef = collection(db, 'leads');
      unsubLeads = onSnapshot(
        query(leadsRef, orderBy('createdAt', 'desc')),
        (snap) => {
          const isInitialized = localStorage.getItem('manodaya_leads_initialized');
          if (snap.empty && !isInitialized) {
            // Seed ONCE on initial deployment
            localStorage.setItem('manodaya_leads_initialized', 'true');
            INITIAL_CRM_LEADS.forEach(async (lead) => {
              await setDoc(doc(db, 'leads', lead.id), lead);
            });
            setLeads(INITIAL_CRM_LEADS);
            localStorage.setItem('manodaya_crm_leads', JSON.stringify(INITIAL_CRM_LEADS));
          } else {
            localStorage.setItem('manodaya_leads_initialized', 'true');
            const fetched = snap.docs.map(d => ({ id: d.id, ...d.data() }));
            setLeads(fetched);
            localStorage.setItem('manodaya_crm_leads', JSON.stringify(fetched));
          }
          setFirebaseOnline(true);
        },
        (err) => {
          console.warn('Firestore unavailable, using localStorage:', err.message);
          setFirebaseOnline(false);
          const saved = JSON.parse(localStorage.getItem('manodaya_crm_leads') || 'null');
          setLeads(saved !== null ? saved : INITIAL_CRM_LEADS);
        }
      );

      // --- Internship Applications ---
      const internRef = collection(db, 'internships');
      unsubInternships = onSnapshot(
        query(internRef, orderBy('createdAt', 'desc')),
        (snap) => {
          setInternships(snap.docs.map(d => ({ id: d.id, ...d.data() })));
        },
        () => {
          const saved = JSON.parse(localStorage.getItem('manodaya_crm_internships') || '[]');
          setInternships(saved);
        }
      );

      // --- Workshops ---
      const wsRef = collection(db, 'workshops');
      unsubWorkshops = onSnapshot(
        query(wsRef, orderBy('createdAt', 'desc')),
        (snap) => {
          if (snap.empty) {
            // Seed initial workshops
            INITIAL_WORKSHOPS.forEach(async (ws) => {
              await setDoc(doc(db, 'workshops', ws.id), { ...ws, createdAt: new Date().toISOString() });
            });
            setWorkshops(INITIAL_WORKSHOPS);
          } else {
            setWorkshops(snap.docs.map(d => ({ id: d.id, ...d.data() })));
          }
        },
        () => {
          const saved = JSON.parse(localStorage.getItem('manodaya_workshops') || 'null');
          setWorkshops(saved || INITIAL_WORKSHOPS);
        }
      );
    } catch (err) {
      console.warn('Firebase not configured. Running in localStorage mode.');
      setFirebaseOnline(false);
      const savedLeads = JSON.parse(localStorage.getItem('manodaya_crm_leads') || 'null');
      setLeads(savedLeads || INITIAL_CRM_LEADS);
      const savedInternships = JSON.parse(localStorage.getItem('manodaya_crm_internships') || '[]');
      setInternships(savedInternships);
      const savedWorkshops = JSON.parse(localStorage.getItem('manodaya_workshops') || 'null');
      setWorkshops(savedWorkshops || INITIAL_WORKSHOPS);
    }

    return () => {
      unsubLeads?.();
      unsubInternships?.();
      unsubWorkshops?.();
    };
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (passcode === currentSavedPasscode) {
      setIsAuthenticated(true);
      setPasscodeError(false);
    } else {
      setPasscodeError(true);
    }
  };

  // ─── Update Lead Status (Firestore + localStorage fallback) ───────────────
  const handleUpdateStatus = async (id, newStatus) => {
    const updated = leads.map(l => l.id === id ? { ...l, status: newStatus } : l);
    setLeads(updated);
    try {
      await updateDoc(doc(db, 'leads', id), { status: newStatus });
    } catch {
      localStorage.setItem('manodaya_crm_leads', JSON.stringify(updated));
    }
  };

  const handleUpdateInternshipStatus = async (id, newStatus) => {
    const updated = internships.map(a => a.id === id ? { ...a, status: newStatus } : a);
    setInternships(updated);
    try {
      await updateDoc(doc(db, 'internships', id), { status: newStatus });
    } catch {
      localStorage.setItem('manodaya_crm_internships', JSON.stringify(updated));
    }
  };

  // ─── Delete Lead / Booking Submission (Firestore + localStorage fallback) ──
  const handleDeleteLead = async (id, patientName) => {
    if (!window.confirm(`Are you sure you want to permanently delete submission for "${patientName || 'Patient'}" (Ref: ${id})?`)) return;
    const updated = leads.filter(l => l.id !== id);
    setLeads(updated);
    localStorage.setItem('manodaya_crm_leads', JSON.stringify(updated));
    localStorage.setItem('manodaya_leads_initialized', 'true');
    try {
      await deleteDoc(doc(db, 'leads', id));
    } catch (err) {
      console.warn('Firestore delete lead error:', err);
    }
  };

  // ─── Delete Internship / Workshop Submission (Firestore + localStorage fallback)
  const handleDeleteInternship = async (id, applicantName) => {
    if (!window.confirm(`Are you sure you want to permanently delete application for "${applicantName || 'Applicant'}" (Ref: ${id})?`)) return;
    const updated = internships.filter(a => a.id !== id);
    setInternships(updated);
    try {
      await deleteDoc(doc(db, 'internships', id));
    } catch {
      localStorage.setItem('manodaya_crm_internships', JSON.stringify(updated));
    }
  };

  // ─── Workshop Save / Edit ──────────────────────────────────────────────────
  const handleSaveWorkshop = async (e) => {
    e.preventDefault();
    try {
      if (editingWorkshopId) {
        await updateDoc(doc(db, 'workshops', editingWorkshopId), { ...newWorkshop });
        setWorkshopNotice('✓ Workshop updated live across all devices!');
      } else {
        const wsRef = await addDoc(collection(db, 'workshops'), {
          ...newWorkshop,
          createdAt: new Date().toISOString()
        });
        setWorkshopNotice('✓ New workshop posted live to website!');
      }
    } catch {
      // localStorage fallback
      if (editingWorkshopId) {
        const updated = workshops.map(ws => ws.id === editingWorkshopId ? { ...ws, ...newWorkshop } : ws);
        setWorkshops(updated);
        localStorage.setItem('manodaya_workshops', JSON.stringify(updated));
      } else {
        const wsId = `ws-${Date.now()}`;
        const created = [{ id: wsId, ...newWorkshop }, ...workshops];
        setWorkshops(created);
        localStorage.setItem('manodaya_workshops', JSON.stringify(created));
      }
      setWorkshopNotice('✓ Workshop saved (offline mode).');
    }

    setEditingWorkshopId(null);
    setNewWorkshop({ title: '', date: '', time: '', mode: 'In-Person (Bhubaneswar Clinic)', instructor: 'MANODAYA Clinical Faculty', fee: '', seats: '15 Seats', description: '' });
    setTimeout(() => setWorkshopNotice(''), 4000);
  };

  const handleStartEditWorkshop = (ws) => {
    setEditingWorkshopId(ws.id);
    setNewWorkshop({ title: ws.title || '', date: ws.date || '', time: ws.time || '', mode: ws.mode || 'In-Person (Bhubaneswar Clinic)', instructor: ws.instructor || 'MANODAYA Clinical Faculty', fee: ws.fee || '', seats: ws.seats || '15 Seats', description: ws.description || '' });
    window.scrollTo({ top: 200, behavior: 'smooth' });
  };

  const handleCancelEditWorkshop = () => {
    setEditingWorkshopId(null);
    setNewWorkshop({ title: '', date: '', time: '', mode: 'In-Person (Bhubaneswar Clinic)', instructor: 'MANODAYA Clinical Faculty', fee: '', seats: '15 Seats', description: '' });
  };

  // ─── Delete Workshop (Firestore + fallback) ────────────────────────────────
  const handleDeleteWorkshop = async (wsId) => {
    if (!window.confirm("Are you sure you want to permanently delete this workshop from the website?")) return;
    try {
      await deleteDoc(doc(db, 'workshops', wsId));
      setWorkshopNotice('✓ Workshop deleted from live website.');
    } catch {
      const updated = workshops.filter(ws => ws.id !== wsId);
      setWorkshops(updated);
      localStorage.setItem('manodaya_workshops', JSON.stringify(updated));
      setWorkshopNotice('✓ Workshop deleted (offline mode).');
    }
    if (editingWorkshopId === wsId) handleCancelEditWorkshop();
    setTimeout(() => setWorkshopNotice(''), 4000);
  };

  // ─── Passcode Change ───────────────────────────────────────────────────────
  const handleChangePasscode = (e) => {
    e.preventDefault();
    if (passcodeForm.currentPass !== currentSavedPasscode) {
      setPasscodeNotice({ type: 'error', msg: 'Current passcode is incorrect.' });
      return;
    }
    if (!passcodeForm.newPass || passcodeForm.newPass.length < 4) {
      setPasscodeNotice({ type: 'error', msg: 'New passcode must be at least 4 characters.' });
      return;
    }
    if (passcodeForm.newPass !== passcodeForm.confirmPass) {
      setPasscodeNotice({ type: 'error', msg: 'New passcode and confirmation do not match.' });
      return;
    }
    localStorage.setItem('manodaya_crm_passcode', passcodeForm.newPass);
    setCurrentSavedPasscode(passcodeForm.newPass);
    setPasscodeNotice({ type: 'success', msg: 'Dashboard passcode changed successfully!' });
    setPasscodeForm({ currentPass: '', newPass: '', confirmPass: '' });
  };

  // ─── CSV Export (Fixed Alignment & Header Matching) ─────────────────────────
  const formatCSVCell = (val) => {
    if (val === null || val === undefined) return '""';
    const str = String(val).replace(/"/g, '""');
    return `"${str}"`;
  };

  const handleExportCSV = (dataList, filename) => {
    if (!dataList || dataList.length === 0) return;

    let headers = [];
    let rows = [];

    if (filename.toLowerCase().includes('internship')) {
      headers = ["Ref ID", "Applicant Name", "Phone", "Email", "Institution / University", "Qualification", "Application Type", "Track / Workshop", "Status", "Submitted Date", "Clinical Notes"];
      rows = dataList.map(app => [
        app.id || '',
        app.applicantName || '',
        app.phone || '',
        app.email || '',
        app.institution || '',
        app.qualification || '',
        app.applicationType || '',
        app.workshopTrack || '',
        app.status || '',
        app.createdAt || '',
        app.notes || ''
      ].map(formatCSVCell).join(','));
    } else {
      headers = ["Ref ID", "Patient Name", "Phone", "Email", "Category", "Age", "Service Requested", "Consultation Type", "Preferred Date", "Preferred Time", "Status", "Submitted Date", "Clinical Notes"];
      rows = dataList.map(lead => [
        lead.id || '',
        lead.patientName || '',
        lead.phone || '',
        lead.email || '',
        lead.category || '',
        lead.age || '',
        lead.service || '',
        lead.type || '',
        lead.date || '',
        lead.time || '',
        lead.status || '',
        lead.createdAt || '',
        lead.notes || ''
      ].map(formatCSVCell).join(','));
    }

    const csvData = [headers.map(formatCSVCell).join(','), ...rows].join("\r\n");
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `${filename}_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // ─── PDF Export Feature ───────────────────────────────────────────────────
  const handleExportPDF = (dataList, title) => {
    if (!dataList || dataList.length === 0) return;

    const printWindow = window.open('', '_blank', 'width=1050,height=800');
    if (!printWindow) return;

    const isInternship = title.toLowerCase().includes('internship');

    const tableHeaders = isInternship
      ? `<th>Ref ID</th><th>Applicant Name</th><th>Phone & Email</th><th>Institution</th><th>Qualification</th><th>Type & Track</th><th>Status</th>`
      : `<th>Ref ID</th><th>Patient Name</th><th>Phone & Email</th><th>Category & Age</th><th>Service Requested</th><th>Date & Time</th><th>Status</th>`;

    const tableRows = dataList.map(item => {
      if (isInternship) {
        return `
          <tr>
            <td><strong>${item.id || ''}</strong></td>
            <td><strong>${item.applicantName || ''}</strong><br/><small style="color:#64748B">${item.createdAt || ''}</small></td>
            <td>${item.phone || ''}<br/><small style="color:#64748B">${item.email || ''}</small></td>
            <td>${item.institution || 'N/A'}</td>
            <td>${item.qualification || 'N/A'}</td>
            <td><strong>${item.applicationType || ''}</strong><br/><small style="color:#8A4FFF">${item.workshopTrack || ''}</small></td>
            <td><span class="status-pill">${item.status || ''}</span></td>
          </tr>
        `;
      } else {
        return `
          <tr>
            <td><strong>${item.id || ''}</strong></td>
            <td><strong>${item.patientName || ''}</strong><br/><small style="color:#64748B">${item.createdAt || ''}</small></td>
            <td>${item.phone || ''}<br/><small style="color:#64748B">${item.email || ''}</small></td>
            <td>${item.category || ''} (${item.age || 'N/A'})</td>
            <td><strong>${item.service || ''}</strong><br/><small style="color:#64748B">${item.type || ''}</small></td>
            <td>${item.date || ''} @ ${item.time || ''}</td>
            <td><span class="status-pill">${item.status || ''}</span></td>
          </tr>
        `;
      }
    }).join('');

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${title} - MANODAYA Clinical Report</title>
          <style>
            body { font-family: 'Segoe UI', system-ui, -apple-system, sans-serif; padding: 32px; color: #0E0E10; }
            .header { border-bottom: 3px solid #8A4FFF; padding-bottom: 16px; margin-bottom: 24px; display: flex; justify-content: space-between; align-items: flex-end; }
            .logo-title { font-size: 24px; font-weight: 900; color: #0E0E10; letter-spacing: -0.02em; }
            .subtitle { font-size: 14px; color: #64748B; margin-top: 4px; font-weight: 600; }
            .meta { font-size: 12px; text-align: right; color: #64748B; }
            table { width: 100%; border-collapse: collapse; margin-top: 16px; font-size: 12px; }
            th { background-color: #F8FAFC; color: #0E0E10; font-weight: 800; text-align: left; padding: 10px 12px; border-bottom: 2px solid #CBD5E1; text-transform: uppercase; font-size: 11px; }
            td { padding: 10px 12px; border-bottom: 1px solid #E2E8F0; vertical-align: top; }
            tr:nth-child(even) { background-color: #FAFAFD; }
            .status-pill { background: #EDE9FE; color: #7C3AED; padding: 3px 10px; border-radius: 99px; font-weight: 800; font-size: 11px; display: inline-block; }
            .footer { margin-top: 40px; padding-top: 16px; border-top: 1px solid #E2E8F0; font-size: 11px; color: #94A3B8; text-align: center; }
            @media print {
              body { padding: 0; }
              @page { margin: 1.5cm; }
            }
          </style>
        </head>
        <body>
          <div class="header">
            <div>
              <div class="logo-title">🧠 MANODAYA Clinical Care & CRM Report</div>
              <div class="subtitle">${title}</div>
            </div>
            <div class="meta">
              <div><strong>Date Generated:</strong> ${new Date().toLocaleDateString('en-IN')}</div>
              <div><strong>Total Records:</strong> ${dataList.length}</div>
            </div>
          </div>

          <table>
            <thead>
              <tr>${tableHeaders}</tr>
            </thead>
            <tbody>
              ${tableRows}
            </tbody>
          </table>

          <div class="footer">
            MANODAYA Advanced Neuropsychological Care & Therapy Clinic | Confidential Staff Report | manodaya.psych@gmail.com
          </div>

          <script>
            window.onload = function() {
              setTimeout(function() {
                window.print();
              }, 400);
            };
          </script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  // ─── Email Action (Direct Gmail Web Compose Link) ─────────────────────────
  const handleEmailReminder = (lead) => {
    const targetEmail = lead.email && lead.email !== 'N/A' ? lead.email : '';
    const subject = encodeURIComponent(`MANODAYA Appointment Confirmation – Ref ${lead.id}`);
    const body = encodeURIComponent(
      `Dear ${lead.patientName},\n\n` +
      `This is an official confirmation from MANODAYA – Advanced Neuropsychological Care & Therapy Clinic regarding your appointment booking request.\n\n` +
      `📌 APPOINTMENT DETAILS:\n` +
      `• Reference ID: ${lead.id}\n` +
      `• Patient Name: ${lead.patientName}\n` +
      `• Category & Age: ${lead.category || 'N/A'} (${lead.age || 'N/A'})\n` +
      `• Service Requested: ${lead.service}\n` +
      `• Consultation Mode: ${lead.type}\n` +
      `• Date & Time: ${lead.date} at ${lead.time}\n` +
      `• Current Status: ${lead.status}\n` +
      `• Presenting Concerns: ${lead.notes || 'N/A'}\n\n` +
      `📍 CLINIC LOCATION & DIRECTIONS:\n` +
      `MANODAYA Clinic, Plot No. 1206/2082, Phase II, Bhimatangi, Bhubaneswar, Odisha 751002\n` +
      `Google Maps: https://maps.app.goo.gl/fEXm6e8tnSZoybdV6\n\n` +
      `Contact Phone: +91 82496 05244\n` +
      `Clinic Email: manodaya.psych@gmail.com\n\n` +
      `Please arrive 10 minutes prior to your scheduled time. If you need to modify or reschedule, kindly inform us on WhatsApp or call us.\n\n` +
      `Warm regards,\n` +
      `MANODAYA Clinical Team`
    );

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(targetEmail)}&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank');
  };

  // ─── WhatsApp Reminder ─────────────────────────────────────────────────────
  const getWhatsAppReminderLink = (lead) => {
    const msg = encodeURIComponent(
      `Dear ${lead.patientName}, this is a reminder from *MANODAYA Clinic* for your appointment:\n\n` +
      `📋 *Service:* ${lead.service}\n📅 *Date:* ${lead.date} at ${lead.time}\n📍 *Type:* ${lead.type}\n\n` +
      `Please reach 10 mins early. For rescheduling, reply here.`
    );
    return `https://wa.me/${lead.phone.replace(/[^0-9]/g, '')}?text=${msg}`;
  };

  // ─── LOCK SCREEN ──────────────────────────────────────────────────────────
  if (!isAuthenticated) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#0F172A', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
        <div style={{ maxWidth: '420px', width: '100%', backgroundColor: '#1E293B', borderRadius: '24px', padding: '40px 32px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)', border: '1.5px solid #334155', textAlign: 'center' }}>
          <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'rgba(138,79,255,0.15)', color: '#A78BFA', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto' }}>
            <Lock size={32} />
          </div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 900, color: '#FFFFFF', marginBottom: '8px' }}>MANODAYA Staff Portal</h2>
          <p style={{ color: '#94A3B8', fontSize: '0.875rem', marginBottom: '28px' }}>Protected Clinical Dashboard. Enter staff passcode to continue.</p>
          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: '20px' }}>
              <input type="password" placeholder="Enter Staff Passcode" value={passcode} onChange={(e) => setPasscode(e.target.value)}
                style={{ width: '100%', padding: '14px 18px', borderRadius: '14px', border: passcodeError ? '2px solid #EF4444' : '1.5px solid #475569', backgroundColor: '#0F172A', color: '#FFFFFF', fontSize: '1rem', textAlign: 'center', letterSpacing: '0.2em' }} />
              {passcodeError && <div style={{ color: '#EF4444', fontSize: '0.813rem', marginTop: '6px', fontWeight: 600 }}>Incorrect Passcode. Contact administrator.</div>}
            </div>
            <button className="btn-purple" type="submit" style={{ width: '100%', padding: '14px', borderRadius: '14px' }}>Unlock Dashboard</button>
          </form>
          <button onClick={onNavigateHome} style={{ marginTop: '20px', color: '#94A3B8', fontSize: '0.813rem', display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'none', border: 'none', cursor: 'pointer' }}>
            <Home size={14} /> Back to Website
          </button>
        </div>
      </div>
    );
  }

  const activeLeads = leads.filter(l => l.status !== 'Completed Archive');
  const archivedLeads = leads.filter(l => l.status === 'Completed Archive');

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F8FAFC', color: '#0F172A' }}>
      {/* Top Header */}
      <header style={{ backgroundColor: '#0F172A', color: '#FFFFFF', padding: '16px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <ShieldCheck size={26} color="#A78BFA" />
          <span style={{ fontSize: '1.25rem', fontWeight: 900, letterSpacing: '-0.02em' }}>MANODAYA Staff CRM Portal</span>
          {/* Firebase Status Indicator */}
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', fontWeight: 700, backgroundColor: firebaseOnline ? 'rgba(16,185,129,0.15)' : 'rgba(239,68,68,0.15)', color: firebaseOnline ? '#10B981' : '#EF4444', padding: '4px 10px', borderRadius: '9999px' }}>
            {firebaseOnline ? <Wifi size={12} /> : <WifiOff size={12} />}
            {firebaseOnline ? 'Live Sync ✓' : 'Offline Mode'}
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

      <div className="container" style={{ padding: '32px 24px' }}>
        {/* Navigation Tabs */}
        <div style={{ display: 'flex', gap: '10px', marginBottom: '28px', borderBottom: '2px solid #E2E8F0', paddingBottom: '12px', flexWrap: 'wrap' }}>
          {[
            { key: 'patients', label: `Patient Leads (${activeLeads.length})`, icon: <Users size={15} />, color: '#0F172A' },
            { key: 'internships', label: `Internships & Workshops (${internships.length})`, icon: <GraduationCap size={15} />, color: '#8A4FFF' },
            { key: 'post-workshop', label: `Post & Manage Workshops (${workshops.length})`, icon: <PlusCircle size={15} />, color: '#FF497C' },
            { key: 'archives', label: `Completed Archives (${archivedLeads.length})`, icon: <CheckCircle2 size={15} />, color: '#10B981' },
            { key: 'settings', label: 'Change Passcode', icon: <Settings size={15} />, color: '#D97706' },
          ].map(tab => (
            <button key={tab.key} onClick={() => setActiveTab(tab.key)}
              style={{ padding: '10px 18px', borderRadius: '9999px', fontWeight: 800, fontSize: '0.844rem', backgroundColor: activeTab === tab.key ? tab.color : '#FFFFFF', color: activeTab === tab.key ? '#FFFFFF' : '#64748B', border: '1.5px solid #E2E8F0', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        {/* TAB 1: PATIENT LEADS */}
        {activeTab === 'patients' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 900 }}>Patient Clinical Leads</h2>
                <p style={{ color: '#64748B', fontSize: '0.875rem' }}>Manage incoming appointment submissions. Send WhatsApp or Email reminders.</p>
              </div>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <button onClick={() => handleExportCSV(activeLeads, 'Active_Patient_Leads')} className="btn-outline-theme" style={{ fontSize: '0.813rem', padding: '8px 16px' }}>
                  <Download size={14} /> Export CSV
                </button>
                <button onClick={() => handleExportPDF(activeLeads, 'Active Patient Leads')} className="btn-black" style={{ fontSize: '0.813rem', padding: '8px 16px' }}>
                  <FileText size={14} /> Export PDF
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
                        <select value={lead.status} onChange={(e) => handleUpdateStatus(lead.id, e.target.value)}
                          style={{ padding: '4px 10px', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 800, border: '1px solid #CBD5E1', backgroundColor: lead.status === 'New' ? '#FEF3C7' : lead.status === 'Scheduled' ? '#D1FAE5' : '#F1F5F9' }}>
                          <option value="New">New Lead</option>
                          <option value="Contacted">Contacted</option>
                          <option value="Scheduled">Scheduled</option>
                          <option value="Completed Archive">Completed Archive</option>
                        </select>
                      </td>
                      <td>
                        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                          {/* WhatsApp Reminder */}
                          <a href={getWhatsAppReminderLink(lead)} target="_blank" rel="noreferrer"
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', backgroundColor: '#25D366', color: '#FFF', padding: '6px 10px', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 700 }}>
                            <MessageSquare size={12} /> WhatsApp
                          </a>
                          {/* Email Reminder */}
                          <button onClick={() => handleEmailReminder(lead)}
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', backgroundColor: '#3B82F6', color: '#FFF', padding: '6px 10px', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 700, border: 'none', cursor: 'pointer' }}>
                            <Mail size={12} /> Email
                          </button>
                          {/* Remove Submission Option */}
                          <button onClick={() => handleDeleteLead(lead.id, lead.patientName)}
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', backgroundColor: '#FEE2E2', color: '#EF4444', padding: '6px 10px', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 700, border: '1px solid #FCA5A5', cursor: 'pointer' }}
                            title="Remove submission">
                            <Trash2 size={12} /> Remove
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 2: INTERNSHIP APPLICATIONS */}
        {activeTab === 'internships' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 900 }}>Psychology Student Applications</h2>
                <p style={{ color: '#64748B', fontSize: '0.875rem' }}>Review applications for clinical internships, observerships, and workshops.</p>
              </div>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <button onClick={() => handleExportCSV(internships, 'Internship_Applications')} className="btn-outline-theme" style={{ fontSize: '0.813rem', padding: '8px 16px' }}>
                  <Download size={14} /> Export CSV
                </button>
                <button onClick={() => handleExportPDF(internships, 'Student Internship & Workshop Applications')} className="btn-black" style={{ fontSize: '0.813rem', padding: '8px 16px' }}>
                  <FileText size={14} /> Export PDF
                </button>
              </div>
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
                      <th>Ref ID</th><th>Applicant Name</th><th>Phone & Email</th>
                      <th>University / Qualification</th><th>App Type & Track</th>
                      <th>Status</th><th>Action</th>
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
                          <select value={app.status} onChange={(e) => handleUpdateInternshipStatus(app.id, e.target.value)}
                            style={{ padding: '4px 10px', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 800, border: '1px solid #CBD5E1', backgroundColor: app.status === 'Pending Review' ? '#FEF3C7' : app.status === 'Accepted' ? '#D1FAE5' : '#F1F5F9' }}>
                            <option value="Pending Review">Pending Review</option>
                            <option value="Accepted">Accepted</option>
                            <option value="Completed">Completed</option>
                            <option value="Rejected">Rejected</option>
                          </select>
                        </td>
                        <td>
                          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                            <a href={`https://wa.me/${app.phone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(app.applicantName)},%20this%20is%20MANODAYA%20regarding%20your%20${encodeURIComponent(app.applicationType)}%20application.`}
                              target="_blank" rel="noreferrer"
                              style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', backgroundColor: '#25D366', color: '#FFF', padding: '6px 10px', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 700 }}>
                              <MessageSquare size={12} /> WhatsApp
                            </a>
                            <button onClick={() => { const s = encodeURIComponent(`Your ${app.applicationType} Application – MANODAYA`); const b = encodeURIComponent(`Dear ${app.applicantName},\n\nThank you for applying to MANODAYA. Your application for ${app.applicationType} is currently under review.\n\nWe will get back to you shortly.\n\nWarm regards,\nMANODAYA Team`); window.open(`mailto:${app.email}?subject=${s}&body=${b}`, '_blank'); }}
                              style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', backgroundColor: '#3B82F6', color: '#FFF', padding: '6px 10px', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 700, border: 'none', cursor: 'pointer' }}>
                              <Mail size={12} /> Email
                            </button>
                            <button onClick={() => handleDeleteInternship(app.id, app.applicantName)}
                              style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', backgroundColor: '#FEE2E2', color: '#EF4444', padding: '6px 10px', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 700, border: '1px solid #FCA5A5', cursor: 'pointer' }}
                              title="Remove application">
                              <Trash2 size={12} /> Remove
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* TAB 3: POST & MANAGE WORKSHOPS */}
        {activeTab === 'post-workshop' && (
          <div>
            <div style={{ marginBottom: '24px' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 900 }}>
                {editingWorkshopId ? 'Edit Workshop Listing' : 'Post & Manage Clinical Workshops'}
              </h2>
              <p style={{ color: '#64748B', fontSize: '0.875rem' }}>
                Changes sync in real-time across all devices {firebaseOnline ? '(Firebase Live ✓)' : '(offline mode)'}.
              </p>
            </div>

            {workshopNotice && (
              <div style={{ backgroundColor: '#D1FAE5', color: '#059669', padding: '14px 20px', borderRadius: '14px', marginBottom: '20px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={20} /> {workshopNotice}
              </div>
            )}

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
              {/* Form */}
              <div style={{ backgroundColor: '#FFFFFF', padding: '32px', borderRadius: '24px', border: editingWorkshopId ? '2px solid #FF497C' : '1.5px solid #E2E8F0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0E0E10' }}>
                    {editingWorkshopId ? 'Editing Workshop' : 'Create New Listing'}
                  </h3>
                  {editingWorkshopId && (
                    <button onClick={handleCancelEditWorkshop} style={{ color: '#EF4444', fontSize: '0.813rem', fontWeight: 700 }}>Cancel Edit</button>
                  )}
                </div>

                <form onSubmit={handleSaveWorkshop}>
                  <div className="form-group">
                    <label className="form-label">Workshop Title *</label>
                    <input type="text" required className="form-input" placeholder="e.g. Cognitive Rehabilitation Masterclass" value={newWorkshop.title} onChange={(e) => setNewWorkshop({ ...newWorkshop, title: e.target.value })} />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                    <div className="form-group">
                      <label className="form-label">Date *</label>
                      <input type="text" required className="form-input" placeholder="e.g. 25th September 2026" value={newWorkshop.date} onChange={(e) => setNewWorkshop({ ...newWorkshop, date: e.target.value })} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Time Slot *</label>
                      <input type="text" required className="form-input" placeholder="e.g. 10:00 AM - 04:00 PM" value={newWorkshop.time} onChange={(e) => setNewWorkshop({ ...newWorkshop, time: e.target.value })} />
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                    <div className="form-group">
                      <label className="form-label">Registration Fee</label>
                      <input type="text" className="form-input" placeholder="e.g. ₹2,000" value={newWorkshop.fee} onChange={(e) => setNewWorkshop({ ...newWorkshop, fee: e.target.value })} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Seats Available</label>
                      <input type="text" className="form-input" placeholder="e.g. 15 Seats" value={newWorkshop.seats} onChange={(e) => setNewWorkshop({ ...newWorkshop, seats: e.target.value })} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Mode of Delivery</label>
                    <select className="form-select" value={newWorkshop.mode} onChange={(e) => setNewWorkshop({ ...newWorkshop, mode: e.target.value })}>
                      <option value="In-Person (Bhubaneswar Clinic)">In-Person (Bhubaneswar Clinic)</option>
                      <option value="Online Video Interactive">Online Video Interactive</option>
                      <option value="Hybrid / Both Options">Hybrid / Both Options</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Instructor / Faculty</label>
                    <input type="text" className="form-input" placeholder="e.g. Dr. Senior Neuropsychologist" value={newWorkshop.instructor} onChange={(e) => setNewWorkshop({ ...newWorkshop, instructor: e.target.value })} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Workshop Description</label>
                    <textarea className="form-textarea" rows={3} placeholder="Describe what students will learn..." value={newWorkshop.description} onChange={(e) => setNewWorkshop({ ...newWorkshop, description: e.target.value })} />
                  </div>
                  <button className="btn-pink" type="submit" style={{ width: '100%', padding: '14px' }}>
                    <PlusCircle size={18} />
                    <span>{editingWorkshopId ? 'Update Workshop Live' : 'Post Workshop Live'}</span>
                  </button>
                </form>
              </div>

              {/* Active Workshops List */}
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '16px' }}>
                  Currently Active Workshops ({workshops.length})
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {workshops.map((ws) => (
                    <div key={ws.id} style={{ backgroundColor: '#FFFFFF', padding: '20px', borderRadius: '18px', border: editingWorkshopId === ws.id ? '2px solid #FF497C' : '1.5px solid #E2E8F0', position: 'relative' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                        <span className="badge-status" style={{ backgroundColor: '#EDE9FE', color: '#8A4FFF' }}>{ws.mode}</span>
                        <div style={{ display: 'flex', gap: '6px' }}>
                          <button onClick={() => handleStartEditWorkshop(ws)} style={{ backgroundColor: '#F1F5F9', color: '#0F172A', padding: '4px 10px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                            <Edit3 size={12} /> Edit
                          </button>
                          <button onClick={() => handleDeleteWorkshop(ws.id)} style={{ backgroundColor: '#FEE2E2', color: '#EF4444', padding: '4px 10px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                            <Trash2 size={12} /> Delete
                          </button>
                        </div>
                      </div>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0E0E10', marginBottom: '6px' }}>{ws.title}</h4>
                      <div style={{ fontSize: '0.813rem', color: '#64748B', marginBottom: '10px' }}>📅 {ws.date} | ⏰ {ws.time} | 🏷️ {ws.fee}</div>
                      <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.4 }}>{ws.description}</p>
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
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 900 }}>Completed Patient History Archives</h2>
                <p style={{ color: '#64748B', fontSize: '0.875rem' }}>Archived records marked as Completed.</p>
              </div>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <button onClick={() => handleExportCSV(archivedLeads, 'Completed_Patient_Archives')} className="btn-outline-theme" style={{ fontSize: '0.813rem', padding: '8px 16px' }}>
                  <Download size={14} /> Export CSV
                </button>
                <button onClick={() => handleExportPDF(archivedLeads, 'Completed Patient History Archives')} className="btn-black" style={{ fontSize: '0.813rem', padding: '8px 16px' }}>
                  <FileText size={14} /> Export PDF
                </button>
              </div>
            </div>
            <div className="crm-table-container">
              <table className="crm-table">
                <thead>
                  <tr>
                    <th>Ref ID</th><th>Patient Name</th><th>Phone</th>
                    <th>Service Provided</th><th>Status</th><th>Actions</th>
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
                      <td>
                        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                          <select value={lead.status} onChange={(e) => handleUpdateStatus(lead.id, e.target.value)}
                            style={{ padding: '4px 10px', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 800, border: '1px solid #CBD5E1', backgroundColor: '#F1F5F9' }}>
                            <option value="Completed Archive">Completed Archive</option>
                            <option value="New">Restore to Active</option>
                            <option value="Scheduled">Scheduled</option>
                          </select>
                          <button onClick={() => handleDeleteLead(lead.id, lead.patientName)}
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', backgroundColor: '#FEE2E2', color: '#EF4444', padding: '6px 10px', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 700, border: '1px solid #FCA5A5', cursor: 'pointer' }}
                            title="Remove from archives">
                            <Trash2 size={12} /> Remove
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 5: SETTINGS */}
        {activeTab === 'settings' && (
          <div style={{ maxWidth: '520px', margin: '0 auto' }}>
            <div style={{ marginBottom: '24px', textAlign: 'center' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: '#FEF3C7', color: '#D97706', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px auto' }}>
                <Key size={28} />
              </div>
              <h2 style={{ fontSize: '1.65rem', fontWeight: 900 }}>Dashboard Passcode Settings</h2>
              <p style={{ color: '#64748B', fontSize: '0.875rem' }}>Update the security passcode required to unlock the staff CRM portal.</p>
            </div>

            {/* Firebase Setup Notice */}
            {!firebaseOnline && (
              <div style={{ backgroundColor: '#FEF3C7', border: '1px solid #FDE68A', borderRadius: '16px', padding: '16px 20px', marginBottom: '20px' }}>
                <div style={{ fontWeight: 800, color: '#D97706', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <AlertCircle size={16} /> Firebase Not Connected
                </div>
                <p style={{ fontSize: '0.844rem', color: '#92400E', lineHeight: 1.6, margin: 0 }}>
                  The dashboard is running in offline (localStorage) mode. To enable cross-device sync, create a free Firebase project at <strong>firebase.google.com</strong> and update the config in <code>src/firebase.js</code>.
                </p>
              </div>
            )}

            {passcodeNotice.msg && (
              <div style={{ backgroundColor: passcodeNotice.type === 'error' ? '#FEE2E2' : '#D1FAE5', color: passcodeNotice.type === 'error' ? '#EF4444' : '#059669', padding: '14px 18px', borderRadius: '14px', marginBottom: '20px', fontWeight: 700, fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                {passcodeNotice.type === 'error' ? <AlertCircle size={18} /> : <CheckCircle2 size={18} />}
                <span>{passcodeNotice.msg}</span>
              </div>
            )}

            <div style={{ backgroundColor: '#FFFFFF', padding: '32px', borderRadius: '24px', border: '1.5px solid #E2E8F0', boxShadow: '0 10px 30px rgba(0,0,0,0.04)' }}>
              <form onSubmit={handleChangePasscode}>
                <div className="form-group">
                  <label className="form-label">Current Staff Passcode *</label>
                  <input type="password" required className="form-input" placeholder="Enter current passcode" value={passcodeForm.currentPass} onChange={(e) => setPasscodeForm({ ...passcodeForm, currentPass: e.target.value })} />
                </div>
                <div className="form-group">
                  <label className="form-label">New Passcode *</label>
                  <input type="password" required className="form-input" placeholder="Enter new passcode" value={passcodeForm.newPass} onChange={(e) => setPasscodeForm({ ...passcodeForm, newPass: e.target.value })} />
                </div>
                <div className="form-group">
                  <label className="form-label">Confirm New Passcode *</label>
                  <input type="password" required className="form-input" placeholder="Re-enter new passcode" value={passcodeForm.confirmPass} onChange={(e) => setPasscodeForm({ ...passcodeForm, confirmPass: e.target.value })} />
                </div>
                <button className="btn-black" type="submit" style={{ width: '100%', padding: '14px', marginTop: '8px' }}>
                  <Key size={18} /> Update Passcode
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
