import React, { useState } from "react";

const libraryItems = [
  {
    id: 1,
    title: "Ngaji Rumi 01",
    description: "Renungan Rumi tentang pencarian makna dan kedamaian di dalam hati.",
    image: "/Ngajirumi/assets/ngajirumi-1.png",
    link: "/Ngajirumi/#/ngajirumi-1",
  },
  {
    id: 2,
    title: "Ngaji Rumi 02",
    description: "Tentang luka, kerentanan, dan cahaya Tuhan yang hadir melalui setiap ujian. 🌿✨",
    image: "/Ngajirumi/assets/ngajirumi-2.png",
    link: "/Ngajirumi/#/ngajirumi-2",
  },
  {
    id: 3,
    title: "Ngaji Rumi 03",
    description: "Kumpulan materi dan Belajar membersihkan cermin hati dengan cinta, dzikir, dan kerinduan kepada Allah.",
    image: "/Ngajirumi/assets/ngajirumi-3.png",
    link: "/Ngajirumi/#/ngajirumi-3",
  },
  {
    id: 4,
    title: "Ngaji Rumi 04",
    description: "Menyelami makna diam dan sunyi sebagai jalan untuk mendengarkan hati, merasakan kehadiran Tuhan, serta menemukan makna yang tidak selalu dapat diungkapkan dengan kata-kata.",
    image: "/Ngajirumi/assets/ngajirumi-4.png",
    link: "/Ngajirumi/#/ngajirumi-4",
  },
  {
    id: 5,
    title: "Ngaji Rumi 05",
    description: "Tentang kehilangan, keikhlasan, dan keyakinan bahwa setiap yang pergi dapat membawa kita menuju hikmah yang lebih indah.",
    image: "/Ngajirumi/assets/ngajirumi-5.png",
    link: "/Ngajirumi/#/ngajirumi-5",
  },
  {
    id: 6,
    title: "Ngaji Rumi 06",
    description: "mengajak kita memahami bahwa suka, duka, kecewa, dan harapan adalah tamu yang datang silih berganti. Melalui pemikiran Rumi, kita belajar menerima setiap pengalaman dengan lapang dada dan menemukan hikmah di balik setiap ujian",
    image: "/Ngajirumi/assets/ngajirumi-6.png",
    link: "/Ngajirumi/#/ngajirumi-6",
  },
  {
    id: 7,
    title: "Ngaji Rumi 07",
    description: "mengajak kita memahami cinta sebagai perjalanan spiritual: dari “aku” menuju “Dia”. Melalui pemikiran Jalaluddin Rumi, cinta dipahami bukan sekadar rasa memiliki, tetapi proses melepaskan ego (nafs), menemukan makna, dan mendekat kepada Allah hingga lahir ketenangan serta kasih sayang kepada sesama.",
    image: "/Ngajirumi/assets/ngajirumi-7.png",
    link: "/Ngajirumi/#/ngajirumi-7",
  },
  {
    id: 8,
    title: "Ngaji Rumi 08",
    description: "Kumpulan materi yang dapat kamu jelajahi.",
    image: "/Ngajirumi/assets/images/ngaji-rumi-08.jpg",
    link: "/Ngajirumi/#/ngajirumi-8",
  },
  {
    id: 9,
    title: "Ngaji Rumi 09",
    description: "Temukan pembahasan dan karya Ngaji Rumi.",
    image: "/Ngajirumi/assets/images/ngaji-rumi-09.jpg",
    link: "/Ngajirumi/#/ngajirumi-9",
  },
  {
    id: 10,
    title: "Ngaji Rumi 10",
    description: "Koleksi terakhir untuk melengkapi perpustakaan Ngaji Rumi.",
    image: "/Ngajirumi/assets/images/ngaji-rumi-10.jpg",
    link: "/Ngajirumi/#/ngajirumi-10",
  },
];

function Perpustakaan() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeItem = libraryItems[activeIndex];

  return (
    <section
      id="perpustakaan"
      className="overflow-hidden bg-white py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">

        {/* HEADER */}
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
            Perpustakaan
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-green-950 md:text-5xl">
            Jelajahi Ngaji Rumi
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-600 md:text-lg">
            Temukan berbagai materi, karya, dan perjalanan Ngaji Rumi
            bersama Pak Jo.
          </p>
        </div>

        {/* =========================================================
            SELECTOR HORIZONTAL
        ========================================================== */}
        <div className="relative mb-6">

          <div
            id="library-selector"
            className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {libraryItems.map((item, index) => {
              const active = index === activeIndex;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`group flex min-w-[190px] shrink-0 snap-start items-center gap-4 rounded-2xl border px-5 py-4 text-left transition-all duration-300 md:min-w-[220px] ${active
                    ? "border-green-900 bg-green-950 text-white shadow-lg"
                    : "border-gray-200 bg-white text-green-950 hover:border-green-700 hover:shadow-md"
                    }`}
                >
                  <span
                    className={`text-xs font-bold tracking-[0.15em] ${active ? "text-amber-300" : "text-green-700"
                      }`}
                  >
                    {String(item.id).padStart(2, "0")}
                  </span>

                  <span className="text-sm font-semibold md:text-base">
                    {item.title}
                  </span>
                </button>
              );
            })}
          </div>

          <p className="mt-1 text-xs text-gray-400 md:hidden">
            ← Geser untuk melihat koleksi →
          </p>
        </div>

        {/* =========================================================
            MAIN SHOWCASE
        ========================================================== */}
        <div className="grid overflow-hidden rounded-[2rem] bg-green-950 lg:grid-cols-[0.85fr_1.5fr]">

          {/* INFO */}
          <div className="flex flex-col justify-center p-7 md:p-10 lg:p-12">

            <div className="mb-8">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
                Koleksi {String(activeItem.id).padStart(2, "0")}
              </span>

              <h3 className="mt-4 text-3xl font-bold text-white md:text-4xl">
                {activeItem.title}
              </h3>

              <p className="mt-4 max-w-md text-sm leading-7 text-white/65 md:text-base">
                {activeItem.description}
              </p>
            </div>

            <a
              href={activeItem.link}
              className="inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-green-950 transition duration-300 hover:bg-amber-300"
            >
              Buka Materi
              <span>↗</span>
            </a>

            {/* COUNTER */}
            <div className="mt-10 flex items-center gap-4">
              <span className="text-sm font-medium text-white/60">
                {String(activeItem.id).padStart(2, "0")}
              </span>

              <div className="h-px w-16 bg-white/20">
                <div
                  className="h-full bg-amber-300 transition-all duration-500"
                  style={{
                    width: `${(activeItem.id / libraryItems.length) * 100}%`,
                  }}
                />
              </div>

              <span className="text-sm font-medium text-white/40">
                10
              </span>
            </div>
          </div>

          {/* GAMBAR */}
          <div className="relative min-h-[400px] overflow-hidden md:min-h-[520px] lg:min-h-[600px]">

            <img
              key={activeItem.id}
              src={activeItem.image}
              alt={activeItem.title}
              className="absolute inset-0 h-full w-full object-cover animate-[libraryFade_500ms_ease]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />

            <div className="absolute bottom-7 left-7 right-7 md:bottom-10 md:left-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
                Ngaji Rumi
              </p>

              <p className="mt-2 text-2xl font-semibold text-white md:text-3xl">
                {activeItem.title}
              </p>
            </div>

          </div>
        </div>

        {/* PETUNJUK */}
        <div className="mt-5 flex items-center justify-between text-sm text-gray-400">
          <span>Geser koleksi untuk menjelajah</span>

          <span className="hidden md:block">
            {activeIndex + 1} / {libraryItems.length}
          </span>
        </div>

      </div>
    </section>
  );
}

export default Perpustakaan;