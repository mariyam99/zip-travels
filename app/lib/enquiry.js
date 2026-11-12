// Sends a form's fields to /api/enquiry, which emails them to info@ziptravels.lk.
// Returns true only when the email was accepted by the mail server.

export const ENQUIRY_ERROR =
  "Sorry, we couldn't send your enquiry. Please try again, or message us on WhatsApp +94 77 785 7626."

export async function sendEnquiry(type, fields) {
  try {
    const res = await fetch('/api/enquiry', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type,
        fields,
        page: window.location.pathname,
        pageTitle: document.title,
      }),
    })
    const data = await res.json().catch(() => ({}))
    return res.ok && data.ok === true
  } catch {
    return false
  }
}
