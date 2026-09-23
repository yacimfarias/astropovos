# Astropovos

Site educativo sobre asterismos do céu brasileiro, desenvolvido a partir de conhecimentos, narrativas e referências de povos originários do Brasil.

## Autoria

- **Yaci Farias** — autora dos textos e responsável pelo projeto.
- **Sofia Bulhões, Rafaella Pimenta, Mabel Miguez e Jade Simas** — colaboradoras.
- **Eric Brasil** — desenvolvedor do site e dos SVGs.

## Publicação local

Requisitos: Node.js 20 ou superior.

```bash
npm install
npm run check
npm run build
npm run preview
```

O site é gerado em `dist/` e usa a base `/astropovos/`. Para publicar em outro subdiretório, ajuste `base` em `astro.config.mjs`.

## Conteúdo

A versão publicada reúne nove asterismos:

1. Cervo
2. Onça
3. Tapi’i / Anta
4. Ema
5. Garça
6. Cobra / Jararaca
7. Homem Velho
8. Vespeiro / Colmeia
9. Canoa Tembé

As cartas usam SVG inline, campo estelar, foco por teclado, informações acessíveis, zoom, rotação, arraste e tela cheia.

## Estrutura essencial

- `src/` — páginas, dados editoriais e estilos;
- `data/asterismos.json` — dados estruturados dos nove asterismos;
- `assets/reconstructions/` — SVGs usados nas cartas interativas;
- `public/` — imagem de fundo e recursos públicos;
- `astro.config.mjs` — configuração do site e da base `/astropovos/`.

## Fontes e método

A página `Fontes e método` reúne as referências bibliográficas, os catálogos astronômicos utilizados e os limites das reconstruções. As linhas das cartas são reconstruções interpretativas. Elas não devem ser apresentadas como limites tradicionais oficiais sem revisão específica.

## Licenças

- Textos, imagens e SVGs do projeto: [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/deed.pt-br).
- Código-fonte: [PolyForm Noncommercial License 1.0.0](https://polyformproject.org/licenses/noncommercial/1.0.0/).

As fontes e os dados de terceiros permanecem sujeitos às licenças de seus próprios fornecedores. Consulte as páginas `Créditos` e `Fontes` do site para detalhes.

## Tecnologias

Astro, TypeScript, CSS próprio, JavaScript no navegador e SVG. O site é estático e não usa banco de dados, login ou backend.
