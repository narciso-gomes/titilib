"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { Book } from "../data/site";

export function BookCarousel({ books }: { books: Book[] }) {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = books.length;
  const previous = () => setActive((current) => (current - 1 + total) % total);
  const next = () => setActive((current) => (current + 1) % total);

  useEffect(() => {
    if (total < 2 || isPaused) return;
    const timer = window.setInterval(next, 6500);
    return () => window.clearInterval(timer);
  }, [total, isPaused]);

  if (!total) return null;
  const current = books[active];

  return <div className="book-carousel" aria-label="Livros em destaque" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)} onFocusCapture={() => setIsPaused(true)} onBlurCapture={() => setIsPaused(false)}>
    <div className="carousel-stage">
      {books.map((book, index) => {
        const offset = (index - active + total) % total;
        const position = offset === 0 ? "active" : offset === 1 ? "next" : "previous";
        return <Link className={`carousel-book carousel-book-${position}`} href={`/livros/${book.slug}`} key={book.id} aria-hidden={position !== "active"} tabIndex={position === "active" ? 0 : -1}>
          <Image src={book.cover} alt={`Capa de ${book.title}`} width={650} height={975} priority={index === 0}/>
        </Link>;
      })}
    </div>
    <div className="carousel-progress" aria-hidden="true"><span key={active} className={isPaused ? "is-paused" : undefined}/></div>
    <div className="carousel-info"><div><span className="eyebrow">Agora em destaque</span><strong>{current.title}</strong></div><div className="carousel-controls"><button onClick={previous} aria-label="Livro anterior">←</button><span>{String(active + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}</span><button onClick={next} aria-label="Próximo livro">→</button></div></div>
  </div>;
}
