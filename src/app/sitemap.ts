import type { MetadataRoute } from "next"; import { books } from "../data/site"; export default function sitemap():MetadataRoute.Sitemap{return [{url:"/"},...books.map(b=>({url:`/livros/${b.slug}`}))]}
export const dynamic = "force-static";
