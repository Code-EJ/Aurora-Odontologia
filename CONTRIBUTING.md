# Como contribuir

1. Crie uma branch a partir de `main` e instale as dependências com `npm ci`.
2. Mantenha conteúdo editorial em `src/data` e preserve as fronteiras entre código cliente e servidor descritas na [arquitetura](docs/arquitetura.md).
3. Execute `npm run lint`, `npm run typecheck` e `npm run build`. Essas verificações também rodam no GitHub para Node.js 22 e 24.
4. Abra um pull request curto, explique o efeito observado e informe como verificou a mudança. Inclua capturas quando editar a interface.

## Roteiro manual de revisão

- Confira ao menos uma largura mobile e uma desktop. Teste os links, inclusive um card de tratamento que preenche a mensagem de contato.
- Navegue por teclado. Verifique foco visível, Escape no menu mobile, expansão do FAQ e controles do carrossel.
- Ative a preferência por movimento reduzido e confirme que o conteúdo continua visível.
- Em mudanças no contato, confirme os erros de campo e faça uma simulação com dados fictícios. Use o [contrato da API](docs/api-contato.md) para verificar casos HTTP.
- Em mudanças na implantação, documente variáveis novas em `.env.example` e no [guia de operação](docs/operacao.md).

Para registrar um bug, informe navegador, largura da tela, passos para reproduzir e resultados esperado e observado. Remova dados pessoais de textos e capturas antes de anexá-los. Consulte a [política de segurança](SECURITY.md) para relatar vulnerabilidades.
