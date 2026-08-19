import emailjs from '@emailjs/browser';

/**
 * Sends an email notification to clinic staff using EmailJS.
 *
 * @param {string} templateId - EmailJS template ID (e.g. 'template_booking', 'template_internship', 'template_support_group')
 * @param {Object} params - Key-value map of template variable parameters
 */
export async function sendStaffNotification(templateId, params) {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !publicKey || serviceId === 'your_service_id_here' || publicKey === 'your_public_key_here') {
    console.warn('EmailJS notification skipped: VITE_EMAILJS_SERVICE_ID or VITE_EMAILJS_PUBLIC_KEY is missing or using placeholder.');
    return;
  }

  // Resolve template ID (allows env variable override or single generic template)
  let resolvedTemplateId = templateId;
  if (templateId === 'template_booking' && import.meta.env.VITE_EMAILJS_TEMPLATE_BOOKING) {
    resolvedTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_BOOKING;
  } else if (templateId === 'template_support_group' && import.meta.env.VITE_EMAILJS_TEMPLATE_SUPPORT_GROUP) {
    resolvedTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_SUPPORT_GROUP;
  } else if (templateId === 'template_internship' && import.meta.env.VITE_EMAILJS_TEMPLATE_INTERNSHIP) {
    resolvedTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_INTERNSHIP;
  } else if (import.meta.env.VITE_EMAILJS_TEMPLATE_ID) {
    resolvedTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  }

  const enrichedParams = {
    to_email: import.meta.env.VITE_CLINIC_NOTIFICATION_EMAIL || 'manodaya.psych@gmail.com',
    to_name: 'MANODAYA Clinic Team',
    reply_to: params.email || '',
    from_name: params.patientName || params.applicantName || 'Website Visitor',
    ...params
  };

  try {
    const result = await emailjs.send(serviceId, resolvedTemplateId, enrichedParams, publicKey);
    console.log(`[EmailJS] Notification sent successfully! (Status: ${result.status})`);
    return result;
  } catch (error) {
    console.error(`[EmailJS] Failed to send notification [Template: ${resolvedTemplateId}]:`, error);
    if (error?.status === 400 || error?.text?.includes('template') || error?.text?.includes('service')) {
      console.warn(`[EmailJS Tip] Ensure Service ID (${serviceId}) and Template ID (${resolvedTemplateId}) exist in your EmailJS dashboard.`);
    }
  }
}
