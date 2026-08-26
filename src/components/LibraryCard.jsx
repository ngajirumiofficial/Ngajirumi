import React from "react";

/**
 * LibraryCard
 * Satu kartu materi di section Perpustakaan.
 * Dipisah jadi komponen sendiri supaya struktur siap diberi efek hover
 * lewat CSS (className sudah konsisten & mudah ditarget).
 */
function LibraryCard({ item }) {
  return (
    <article className="library-card">
      <span className="library-card__number">{item.number}</span>
      <h3 className="library-card__title">{item.title}</h3>
      <p className="library-card__description">{item.description}</p>
      <a href={item.link} className="library-card__link">
        Lihat Materi
      </a>
    </article>
  );
}

export default LibraryCard;