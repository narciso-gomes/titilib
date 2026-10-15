import Image from "next/image"; import Link from "next/link"; import { notFound } from "next/navigation"; import type { Metadata } from "next"; import { books } from "../../../data/site"; import { Arrow, Download } from "../../../components/Icons"; import { ShareButton } from "../../../components/ShareButton";
export function generateStaticParams(){return books.map(({slug})=>({slug}))}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params;
  const book=books.find((item)=>item.slug===slug);
  return book?{title:book.title,description:book.description,openGraph:{images:[book.cover]}}:{title:"Obra não encontrada"};
}

export default async function BookPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const book=books.find((item)=>item.slug===slug);
  if(!book)notFound();
  return <main className="book-page"><div className="shell"><Link href="/#biblioteca" className="back"><Arrow/> Voltar à biblioteca</Link><article className="book-layout"><Image className="cover" src={book.cover} alt={`Capa de ${book.title}`} width={650} height={975} priority/><div><div className="eyebrow">{book.genre}{book.publicationYear?` · ${book.publicationYear}`:""}</div><h1>{book.title}</h1><p className="serif" style={{fontSize:25,fontStyle:"italic"}}>{book.author}</p><div className="rule" style={{margin:"28px 0"}}/><p className="synopsis">{book.synopsis}</p><div className="downloads">{book.pdfUrl&&<Link className="download read-online" href={`/livros/${book.slug}/ler`}>Ler online <Arrow/></Link>}{book.pdfUrl&&<a className="download primary" href={book.pdfUrl} download><Download/> Baixar PDF</a>}{book.epubUrl&&<a className="download" href={book.epubUrl} download><Download/> Baixar EPUB</a>}</div><ShareButton title={book.title}/></div></article></div></main>;
}
