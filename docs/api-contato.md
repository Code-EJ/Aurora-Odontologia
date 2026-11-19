# API de contato

## Contrato HTTP

`POST /api/contact` recebe um objeto JSON com `Content-Type: application/json`. O limite total do corpo é de 12.000 bytes. A rota lê em partes para aplicar o limite à quantidade de bytes realmente recebida.

| Campo | Regra após remover espaços nas pontas |
| --- | --- |
| `name` | De 2 a 100 caracteres |
| `email` | Endereço aceito pelo Zod, até 254 caracteres |
| `phone` | De 10 a 15 dígitos e até 30 caracteres de entrada, com separadores comuns e sinal `+` inicial permitido |
| `message` | De 10 a 1.500 caracteres |

| HTTP | JSON | Quando acontece |
| --- | --- | --- |
| 200 | `{"status":"demo"}` | Dados válidos em modo demonstração |
| 200 | `{"status":"sent"}` | Resend aceitou a solicitação para processamento |
| 400 | `{"message":"Mensagem inválida."}` | Corpo ausente ou JSON ilegível |
| 413 | `{"message":"Mensagem muito extensa."}` | O corpo ultrapassou 12.000 bytes |
| 415 | `{"message":"Formato de mensagem inválido."}` | Tipo de conteúdo diferente de JSON |
| 422 | `{"message":"Confira os campos e tente novamente."}` | JSON válido que falha na validação do esquema |
| 502 | `{"message":"O serviço de e-mail está indisponível. Tente novamente em instantes."}` | Provedor recusou a solicitação ou estava inacessível |

## Exercício local

Com o servidor em execução, este comando PowerShell usa dados fictícios. Em uma instalação sem credenciais, o retorno esperado é `status: demo`.

```powershell
$body = @{
    name    = 'Pessoa de Exemplo'
    email   = 'pessoa@example.com'
    phone   = '(11) 90000-0000'
    message = 'Gostaria de conhecer o fluxo de avaliação.'
} | ConvertTo-Json

Invoke-RestMethod -Method Post -Uri 'http://localhost:3000/api/contact' `
  -ContentType 'application/json' -Body $body
```

Para obter um 422, envie `{}` com o mesmo tipo de conteúdo. Para verificar a UX, repita o exercício pela página com os campos vazios, corrija os erros e simule novamente.

## Envio e tratamento de dados

A configuração exige `RESEND_API_KEY`, `CONTACT_FROM` e `CONTACT_TO`. Quando os três valores existem, o servidor envia e-mail em texto simples pelo Resend. Usa `CONTACT_FROM` como remetente, `CONTACT_TO` como destinatário e o endereço validado como `reply_to`. O provedor tem limite de 8 segundos para responder. O navegador aguarda até 12 segundos.

O modo demonstração valida os dados no servidor e descarta a solicitação após responder. O projeto não tem banco, fila de mensagens ou reenvio automático. Em modo real, a rejeição do provedor registra o status HTTP no servidor. Os logs não incluem o corpo da mensagem nem as credenciais. A proteção contra abuso deve ser configurada no ambiente de implantação antes de ativar o envio público.

Código de referência: [rota](../src/app/api/contact/route.ts), [esquema](../src/lib/contact-schema.ts), [configuração](../src/lib/contact-config.ts) e [formulário](../src/components/sections/contact-form.tsx). Documentação externa: [API de envio do Resend](https://resend.com/docs/api-reference/emails/send-email).
