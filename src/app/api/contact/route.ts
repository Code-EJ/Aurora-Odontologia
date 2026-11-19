import { contactSchema } from "@/lib/contact-schema";
import { getDeliveryConfig } from "@/lib/contact-config";

/** Valida a solicitação e seleciona a demonstração ou a entrega por e-mail. */
export async function POST(request: Request) {
  const contentType = request.headers.get("content-type")?.split(";")[0].trim();
  if (contentType !== "application/json") {
    return Response.json({ message: "Formato de mensagem inválido." }, { status: 415 });
  }

  // Limita os bytes recebidos durante a leitura, inclusive em requisições sem Content-Length.
  const reader = request.body?.getReader();
  if (!reader) return Response.json({ message: "Mensagem inválida." }, { status: 400 });

  const decoder = new TextDecoder();
  let body = "";
  let length = 0;
  let payload: unknown;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      length += value.byteLength;
      if (length > 12_000) {
        await reader.cancel();
        return Response.json({ message: "Mensagem muito extensa." }, { status: 413 });
      }
      body += decoder.decode(value, { stream: true });
    }
    payload = JSON.parse(body + decoder.decode());
  } catch {
    return Response.json({ message: "Mensagem inválida." }, { status: 400 });
  } finally {
    reader.releaseLock();
  }

  const result = contactSchema.safeParse(payload);
  if (!result.success) {
    return Response.json({ message: "Confira os campos e tente novamente." }, { status: 422 });
  }

  // A demonstração usa a mesma validação sem acionar um provedor externo.
  const delivery = getDeliveryConfig();
  if (!delivery) return Response.json({ status: "demo" });

  // O remetente autorizado envia a mensagem e reply_to permite responder ao visitante.
  const { name, email, phone, message } = result.data;
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${delivery.apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: delivery.from,
        to: [delivery.to],
        reply_to: email,
        subject: "Novo contato pelo site Aurora",
        text: `Nome: ${name}\nE-mail: ${email}\nTelefone: ${phone}\n\n${message}`,
      }),
      signal: AbortSignal.timeout(8000),
    });

    if (response.ok) return Response.json({ status: "sent" });
    console.error("Resend recusou o envio do contato", response.status);
  } catch {
    console.error("Falha na comunicação com o serviço de e-mail.");
  }

  return Response.json({ message: "O serviço de e-mail está indisponível. Tente novamente em instantes." }, { status: 502 });
}
