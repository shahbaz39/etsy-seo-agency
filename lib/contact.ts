// Edit these two values — they're the only place contact info lives.
// WhatsApp number must be in international format, digits only (no + or spaces).
// Pakistan country code is 92 → e.g. 923001234567 for +92 300 1234567.

export const WHATSAPP_NUMBER = "923000000000";
export const EMAIL = "hello@craftrank.com";

const PREFILL_MESSAGE =
  "Hi Craftrank — I'd like a free Etsy SEO audit for my shop.";
const EMAIL_SUBJECT = "Free Etsy SEO Audit";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  PREFILL_MESSAGE
)}`;
export const EMAIL_URL = `mailto:${EMAIL}?subject=${encodeURIComponent(
  EMAIL_SUBJECT
)}`;
