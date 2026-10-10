# Astropovos

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.23272831.svg)](https://doi.org/10.5281/zenodo.23272831)

Site educativo sobre asterismos do céu brasileiro, desenvolvido a partir de conhecimentos, narrativas e referências de povos originários do Brasil.

## Autoria

- **Yaci Farias** — autora dos textos e responsável pelo projeto.
- [**Eric Brasil**](https://ericbrasil.com.br/) — desenvolvedor do site e dos SVGs.

## Publicação local

Requisitos: Node.js 22.14 ou superior.

```bash
npm install
npm run check
npm run build
npm run preview
```

O site é gerado em `dist/` e usa a raiz do domínio `https://astropovos.com.br/`. Para publicar em outro subdiretório, ajuste `base` em `astro.config.mjs`.

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

## Citação

Para citar o projeto, consulte [`CITATION.cff`](CITATION.cff) ou use o DOI da primeira versão arquivada no Zenodo:

> FARIAS, Yaci; BRASIL, Eric. *Astropovos: asterismos do céu brasileiro*. Versão 0.1.0. Zenodo, 2026. DOI: [10.5281/zenodo.23272831](https://doi.org/10.5281/zenodo.23272831).

## Deploy no GitHub Pages

O arquivo `.github/workflows/deploy-pages.yml` compila o projeto com Astro e publica somente o diretório `dist/` no GitHub Pages. O workflow é executado após cada push em `main` ou manualmente pela aba **Actions**.

Depois do deploy, o site ficará disponível em:

<https://yacimfarias.github.io/astropovos/>

## Tecnologias

Astro, TypeScript, CSS próprio, JavaScript no navegador e SVG. O site é estático e não usa banco de dados, login ou backend.
