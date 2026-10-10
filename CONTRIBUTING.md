# Contribuindo para o Astropovos

Obrigado pelo interesse em contribuir com o Astropovos.

O projeto é um site educativo sobre asterismos do céu brasileiro, conhecimentos ancestrais, educação e divulgação científica. As contribuições precisam respeitar a especificidade cultural das fontes e a distinção entre documentação, interpretação e reconstrução visual.

## Antes de contribuir

1. Leia o [README](README.md) e [`LICENCE.md`](LICENCE.md).
2. Consulte as páginas `Fontes` e `Créditos` do site e a documentação disponível em [`docs/`](docs/), quando presente.
3. Verifique se a proposta não duplica uma issue ou uma discussão existente.
4. Não inclua credenciais, tokens, caminhos absolutos, exportações de conversas ou dados pessoais.
5. Não copie textos, imagens ou dados de terceiros sem autorização ou licença compatível.

## Tipos de contribuição

- correções de acessibilidade, responsividade e navegação;
- correções de código e melhorias de desempenho;
- melhorias na documentação e no processo de reprodução;
- revisão técnica de dados astronômicos;
- indicação de fontes bibliográficas;
- correções editoriais e culturais acompanhadas da fonte correspondente;
- sugestões de materiais pedagógicos.

Alterações em nomes, grafias, povos, territórios, narrativas, atribuições culturais, estrelas ou traçados dos asterismos exigem fonte verificável e revisão editorial. Uma reconstrução visual não deve ser apresentada como representação tradicional oficial sem evidência documental e aprovação adequada.

## Ambiente local

Requisitos atuais:

- Node.js 22.14 ou superior;
- npm;
- Git.

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/yacimfarias/astropovos.git
cd astropovos
npm install
```

Execute o servidor local:

```bash
npm run dev
```

## Verificação obrigatória

Antes de abrir uma pull request, execute:

```bash
npm run check
npm run build
git diff --check
```

A contribuição não deve introduzir erros de TypeScript, quebrar rotas, remover referências ou incluir arquivos gerados e saídas locais sem justificativa.

## Fluxo de trabalho

1. Crie uma branch a partir de `main`:

   ```bash
   git switch main
   git pull --ff-only origin main
   git switch -c tipo/descricao-curta
   ```

2. Faça alterações pequenas e documentadas.
3. Use mensagens de commit claras, de preferência no formato Conventional Commits:

   ```text
   docs: esclarecer método de reconstrução dos asterismos
   fix: corrigir navegação por teclado nas cartas
   ```

4. Execute as verificações locais.
5. Abra uma pull request descrevendo:
   - o problema ou objetivo;
   - os arquivos alterados;
   - as fontes utilizadas, quando aplicável;
   - os testes executados;
   - limitações ou pontos que exigem revisão humana.

Não faça push direto para `main` sem autorização explícita dos mantenedores.

## Revisão de conteúdo e fontes

Para alterações editoriais:

- indique a referência bibliográfica completa;
- informe povo, território, idioma e contexto quando esses dados estiverem disponíveis;
- evite generalizações sobre povos originários;
- diferencie fonte primária, fonte secundária, dado astronômico e inferência;
- não invente estrelas, nomes, conexões ou atribuições;
- preserve citações curtas e paráfrases dentro dos limites legais;
- registre incertezas em vez de apresentar hipóteses como fatos.

A revisão humana dos conteúdos culturais prevalece sobre qualquer resultado automatizado.

## Imagens, dados e materiais externos

Informe a origem e a licença de todo material incorporado. Não adicione ao repositório:

- PDFs ou imagens cuja redistribuição não esteja autorizada;
- dados pessoais;
- credenciais ou arquivos `.env`;
- caches, `node_modules`, `dist` e saídas temporárias;
- materiais de estudantes sem autoria e autorização definidas.

Consulte [`LICENCE.md`](LICENCE.md) para os limites das licenças do código e dos conteúdos.

## Código de conduta

Contribuições devem ser respeitosas, verificáveis e atentas à diversidade dos povos e tradições representados. Críticas técnicas são bem-vindas. Não serão aceitas contribuições que promovam discriminação, apropriação indevida, apagamento de autoria ou atribuições culturais sem fonte.

## Licença das contribuições

Ao enviar uma contribuição, você confirma que possui os direitos necessários para fazê-lo e que aceita sua distribuição sob a licença aplicável ao tipo de material, conforme [`LICENCE.md`](LICENCE.md). Se a contribuição tiver uma licença diferente, declare isso claramente na pull request e no arquivo correspondente.
