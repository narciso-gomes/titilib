export const site = {
  name: "TITILIB",
  author: "Thifanny Vitória",
  instagram: "https://www.instagram.com/silvathifannyvitoriapereira/",
  bio: "Thifanny Vitória é uma escritora independente, amante da leitura e apaixonada pela criação de histórias. Entre livros, música e a companhia de sua cachorrinha Kiara, encontra inspiração para imaginar novos universos. Escrever, para ela, é uma forma de expressão e liberdade — um gesto feito por amor, com tudo o que há em seu coração.",
  phrase: "Toda história começa quando alguém abre uma porta.",
  description: "Descubra histórias de Thifanny Vitória para ler online ou baixar em PDF e EPUB.",
} as const;

export interface Book {
  id: string; slug: string; title: string; author: string; genre: string;
  description: string; synopsis: string; cover: string; publicationYear?: number;
  pdfUrl?: string; epubUrl?: string; featured?: boolean;
}

export const books: Book[] = [{
  id: "1", slug: "eterna-ilusao", title: "Eterna Ilusão", author: site.author,
  genre: "Literatura", publicationYear: 2026, featured: true,
  description: "Uma história sobre dor, sobrevivência e a busca por esperança quando o lar deixa de ser abrigo.",
  synopsis: "Ofélia sempre acreditou que um dia teria uma família feliz. Mas, aos nove anos, um episódio trágico destrói sua infância. Ferida pela própria mãe, separada do pai e marcada por cicatrizes físicas e emocionais, ela é obrigada a enfrentar um mundo onde a realidade e as ilusões começam a se confundir. Em meio à dor, ao abandono e aos próprios traumas, Ofélia precisará descobrir se ainda existe esperança — ou se a vida sempre será uma eterna ilusão. Porque, às vezes, os maiores monstros não vivem na escuridão. Eles vivem dentro daquilo que chamamos de lar.",
  cover: "/books/eterna-ilusao/capa.jpg", pdfUrl: "/books/eterna-ilusao/eterna-ilusao.pdf", epubUrl: "/books/eterna-ilusao/eterna-ilusao.epub"
}, {
  id: "2", slug: "a-linha-entre-a-vida-e-a-morte", title: "A linha entre a vida e a morte", author: "T. Vitória",
  genre: "Suspense psicológico", publicationYear: 2026,
  description: "Um cirurgião admirado esconde uma vida dupla, até que uma jovem muda as regras do jogo.",
  synopsis: "Simon é um cirurgião admirado, dono de uma vida impecável e de um segredo que jamais permitiu que alguém descobrisse. Por trás do homem que salva vidas existe um psicopata que escolhe suas vítimas com a mesma precisão com que realiza uma cirurgia. Quando conhece Eva, Simon decide que ela será sua próxima vítima. Pela primeira vez, porém, vê-se dividido entre o desejo de preservar uma vida e a natureza que sempre o conduziu.",
  cover: "/books/a-linha-entre-a-vida-e-a-morte/capa.jpg", pdfUrl: "/books/a-linha-entre-a-vida-e-a-morte/a-linha-entre-a-vida-e-a-morte.pdf", epubUrl: "/books/a-linha-entre-a-vida-e-a-morte/a-linha-entre-a-vida-e-a-morte.epub"
}];

export const featuredBook = books.find((book) => book.featured) ?? books[0];
