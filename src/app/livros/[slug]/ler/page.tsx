import Link from "next/link";
import { notFound } from "next/navigation";
import { books } from "../../../../data/site";
import { Arrow, Download } from "../../../../components/Icons";

export default async function ReaderPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const book=books.find((item)=>item.slug===slug);
  if(!book?.pdfUrl)notFound();
  return <main className="reader-page"><header className="reader-header"><div className="reader-bar"><Link href={`/livros/${book.slug}`} className="back"><Arrow/> Voltar aos detalhes</Link><div className="reader-title"><span className="serif">{book.title}</span><small>por {book.author}</small></div><a className="reader-download" href={book.pdfUrl} download><Download/> Baixar PDF</a></div></header><iframe className="reader-frame" src={`${book.pdfUrl}#view=FitH`} title={`Leitura online de ${book.title}`} /></main>;
}

export function generateStaticParams(){return books.filter((book)=>book.pdfUrl).map(({slug})=>({slug}));}
