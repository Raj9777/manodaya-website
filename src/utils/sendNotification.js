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

  try {
    await emailjs.send(serviceId, templateId, params, publicKey);
  } catch (error) {
    console.error(`Failed to send EmailJS staff notification [Template: ${templateId}]:`, error);
  }
}
