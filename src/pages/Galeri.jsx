import React from "react";

function Galeri() {
  return (
    <main className="min-h-screen bg-white">

      {/* HEADER */}
      <section className="bg-green-950 px-6 py-20 text-white md:px-10 md:py-28">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
            Galeri
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            GALERI FOTO
          </h1>

          <p className="mt-5 text-sm text-white/60 md:text-base">
            Kumpulan foto kegiatan Ngaji Rumi
          </p>
        </div>
      </section>

      {/* KONTEN KOSONG — akan diisi nanti */}
      <section className="px-6 py-24 md:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-gray-400 text-lg">
            Foto-foto akan segera hadir di sini.
          </p>
        </div>
      </section>

    </main>
  );
}

export default Galeri;
