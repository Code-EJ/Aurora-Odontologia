# Operação e implantação

## Demonstração no GitHub Pages

A versão da Code está em [code-ej.github.io/Aurora-Odontologia](https://code-ej.github.io/Aurora-Odontologia/). O [workflow de publicação](../.github/workflows/pages.yml) testa a exportação em pull requests e publica o diretório `out` após alterações na `main`. O formulário valida dados fictícios no navegador. O envio via Resend está disponível no modo com servidor.

Para reproduzir a exportação em uma sessão PowerShell, use:

```powershell
$env:GITHUB_PAGES = "true"
$env:SITE_URL = "https://code-ej.github.io/Aurora-Odontologia/"
npm ci
npm run build
```

A URL define o prefixo dos arquivos estáticos. Para voltar ao build com servidor, remova `GITHUB_PAGES` do ambiente.

## Ambientes

Copie [`.env.example`](../.env.example) para `.env.local` se quiser testar uma configuração local. O servidor deve ser reiniciado após a alteração. Na Vercel, configure as variáveis nos ambientes apropriados e faça um novo deploy para aplicar a mudança.

| Variável | Preencher quando | Exemplo de formato |
| --- | --- | --- |
| `SITE_URL` | Site tem endereço público para canonical e links de compartilhamento | `https://aurora.example` |
| `WHATSAPP_NUMBER` | Canal autorizado pode receber mensagens | Dígitos com DDI e DDD, sem `+`, espaços ou pontuação |
| `RESEND_API_KEY` | Envio de e-mail deve ser habilitado | Credencial privada criada no Resend |
| `CONTACT_FROM` | Envio de e-mail deve ser habilitado | `Aurora <contato@dominio-verificado.example>` |
| `CONTACT_TO` | Envio de e-mail deve ser habilitado | `atendimento@aurora.example` |

`SITE_URL` deve ser uma URL absoluta válida. Em desenvolvimento, os metadados usam `http://localhost:3000` como base quando ela está vazia. O WhatsApp e o e-mail são independentes. O e-mail fica em modo demonstração se faltar qualquer um dos três valores.

## Deploy na Vercel

1. Importe o projeto GitHub e selecione o preset **Next.js**. Mantenha a raiz do repositório como diretório do projeto.
2. Selecione uma versão de Node.js suportada pelo `package.json` e registre `SITE_URL` para o domínio definitivo. Confira a imagem de compartilhamento na URL publicada.
3. Use Preview para validar a interface, as âncoras, o teclado e o modo demonstração.
4. Para habilitar e-mail de verdade, configure proteção contra abuso para a rota de contato, verifique o domínio remetente no Resend e cadastre as três variáveis no ambiente escolhido. Envie uma mensagem de teste e confirme o recebimento na caixa de destino. A resposta do endpoint confirma a aceitação pelo provedor.
5. Para uma clínica real, substitua o conteúdo fictício por material autorizado e revise como os dados do formulário serão usados e tratados. Confirme que o telefone abre a conversa com o canal correto e rode Lighthouse no domínio final em mobile e desktop.

## Diagnóstico rápido

| Sintoma | O que verificar |
| --- | --- |
| O terminal encontra a porta 3000 ocupada | Execute `npm run dev -- --port 3001` e abra a porta indicada. |
| O formulário oferece **Simular envio** | Confira se as três variáveis de e-mail estão cadastradas no ambiente que está recebendo a visita. |
| A rota retorna 502 | Verifique os logs do servidor e o painel do Resend. Confira chave, domínio, remetente e status do provedor. |
| O provedor aceitou, mas a mensagem não chegou | Confira o evento de entrega no Resend, o destino cadastrado e os filtros da caixa de entrada. |
| O WhatsApp aparece como demonstrativo | Confira se `WHATSAPP_NUMBER` contém de 10 a 15 dígitos, incluindo DDI e DDD, e se começa de 1 a 9. |
| Os metadados usam localhost | Defina `SITE_URL` no ambiente de build e implante novamente. |

Documentação dos serviços: [deploy com Next.js](https://nextjs.org/docs/app/getting-started/deploying), [variáveis na Vercel](https://vercel.com/docs/environment-variables) e [domínios do Resend](https://resend.com/docs/dashboard/domains/introduction).
