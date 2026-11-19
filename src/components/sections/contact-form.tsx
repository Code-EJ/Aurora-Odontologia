"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { contactSchema, type ContactData } from "@/lib/contact-schema";
import { treatments } from "@/data/clinic";

const fields = [
  { name: "name", label: "Nome", type: "text", autoComplete: "name", maxLength: 100 },
  { name: "email", label: "E-mail", type: "email", autoComplete: "email", maxLength: 254 },
  { name: "phone", label: "Telefone", type: "tel", autoComplete: "tel", maxLength: 30 },
] as const;

/** Valida a solicitação e anuncia o resultado retornado pela rota de contato. */
export function ContactForm({ demo }: { demo: boolean }) {
  const [feedback, setFeedback] = useState<{ error: boolean; message: string }>();
  const { register, handleSubmit, setValue, reset, formState: { errors, isSubmitting } } = useForm<ContactData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", phone: "", message: "" },
  });

  useEffect(() => {
    // A lista de tratamentos limita os valores aceitos da URL para o texto inicial.
    const interest = new URLSearchParams(window.location.search).get("interesse");
    if (treatments.some(({ name }) => name === interest)) {
      setValue("message", `Olá! Gostaria de saber mais sobre ${interest}.`);
    }
  }, [setValue]);

  async function submit(data: ContactData) {
    setFeedback(undefined);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        signal: AbortSignal.timeout(12000),
      });
      const result = await response.json();

      if (!response.ok) throw new Error(result.message || "Falha ao processar o formulário.");
      if (result.status === "demo") {
        setFeedback({ error: false, message: "Demonstração concluída. Os campos foram validados e nenhum e-mail foi enviado." });
        return;
      }
      if (result.status !== "sent") throw new Error("Não foi possível confirmar o envio.");

      reset();
      setFeedback({ error: false, message: "Mensagem enviada. A equipe entrará em contato pelos dados informados." });
    } catch (error) {
      const message = error instanceof Error && error.name === "Error"
        ? error.message
        : "Não foi possível concluir o contato. Verifique a conexão e tente novamente.";
      setFeedback({ error: true, message });
    }
  }

  return (
    <form className="contact-form" noValidate onSubmit={handleSubmit(submit, () => setFeedback(undefined))} aria-busy={isSubmitting}>
      <div className="form-grid">
        {fields.map(({ name, label, ...input }) => (
          <div key={name} className={name === "name" ? "form-field full-field" : "form-field"}>
            <label htmlFor={`contact-${name}`}>{label}</label>
            <input id={`contact-${name}`} required {...input} {...register(name)} aria-invalid={Boolean(errors[name])} aria-describedby={errors[name] ? `error-${name}` : undefined} />
            {errors[name] && <p className="field-error" id={`error-${name}`}>{errors[name]?.message}</p>}
          </div>
        ))}
        <div className="form-field full-field">
          <label htmlFor="contact-message">Mensagem</label>
          <textarea id="contact-message" required rows={4} maxLength={1500} {...register("message")} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "error-message" : undefined} />
          {errors.message && <p className="field-error" id="error-message">{errors.message.message}</p>}
        </div>
      </div>
      <p className="form-note">{demo ? "Modo demonstração. Use apenas dados fictícios." : "Use este canal para falar sobre horários e consultas. Evite incluir dados clínicos na mensagem."}</p>
      <button className="button" type="submit" disabled={isSubmitting}>
        <Send size={16} aria-hidden="true" /> {isSubmitting ? "Processando…" : demo ? "Simular envio" : "Enviar mensagem"}
      </button>
      <div role="status" aria-live="polite">{feedback && !feedback.error && <p className="form-feedback">{feedback.message}</p>}</div>
      <div role="alert">{feedback?.error && <p className="form-feedback field-error">{feedback.message}</p>}</div>
    </form>
  );
}
