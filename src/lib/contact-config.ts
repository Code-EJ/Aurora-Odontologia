/** Habilita o envio somente com credencial, remetente e destinatário. Uso exclusivo do servidor. */
export function getDeliveryConfig() {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from = process.env.CONTACT_FROM?.trim();
  const to = process.env.CONTACT_TO?.trim();

  return apiKey && from && to ? { apiKey, from, to } : null;
}

/** Monta o link público de conversa quando o telefone internacional é válido. */
export function getWhatsAppUrl() {
  const phone = process.env.WHATSAPP_NUMBER?.trim();
  if (!phone || !/^[1-9]\d{9,14}$/.test(phone)) return null;

  const message = "Olá! Gostaria de informações sobre a avaliação odontológica.";
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
