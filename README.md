# Biblioteca Digital Autoral

Site em Next.js para apresentar e disponibilizar obras literárias em PDF e EPUB.

## Executar

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Personalizar a autora

Edite `src/data/site.ts`. Os campos `name`, `author`, `bio`, `instagram`, `phrase` e `description` concentram toda a configuração editorial. A fotografia provisória está em `public/images/placeholder-author.jpg`; substitua-a por uma imagem autorizada da autora, preservando o nome ou atualizando a referência na página inicial.

## Adicionar uma obra

1. Crie `public/books/<slug>/`.
2. Coloque a capa, o PDF e/ou EPUB nessa pasta.
3. Acrescente um objeto no array `books`, em `src/data/site.ts`.
4. Informe caminhos iniciados com `/books/` em `cover`, `pdfUrl` e `epubUrl`.

A rota `/livros/[slug]`, a biblioteca, o sitemap e os botões de download são gerados automaticamente a partir dessa lista. Formatos não cadastrados não aparecem na página.

## Produção e publicação

```bash
npm run build
```

O projeto usa exportação estática; o resultado é criado em `out/`. Para publicar em outro provedor, envie o conteúdo de `out/` como site estático. Os metadados, `robots.txt` e `sitemap.xml` já são produzidos durante o build.
