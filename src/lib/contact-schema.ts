import { z } from "zod";

/** Mantém as mesmas regras e mensagens de validação no navegador e no servidor. */
export const contactSchema = z.object({
  name: z.string().trim().min(2, "Informe seu nome.").max(100, "Use até 100 caracteres."),
  email: z.string().trim().max(254, "Use até 254 caracteres.").pipe(z.email("Informe um e-mail válido.")),
  phone: z.string().trim().max(30, "Informe um telefone válido.").refine((value) => {
    const digits = value.replace(/\D/g, "");
    return /^\+?[\d().\s-]+$/.test(value) && digits.length >= 10 && digits.length <= 15;
  }, "Informe um telefone com DDD."),
  message: z.string().trim().min(10, "Escreva uma mensagem com pelo menos 10 caracteres.").max(1500, "Use até 1.500 caracteres."),
});

/** Forma dos dados após a validação do esquema de contato. */
export type ContactData = z.infer<typeof contactSchema>;
