import React from "react";
import pakJoImage from "../assets/pak-jo-removebg-preview.png";

/* ============================================================================
   PROFILE PAGE — NGAJI RUMI
   Animated Editorial Version
   ============================================================================ */

const selectedWorks = [
  {
    id: "01",
    title: "Ngaji Rumi 01",
    image: null,
  },
  {
    id: "02",
    title: "Ngaji Rumi 02",
    image: null,
  },
  {
    id: "03",
    title: "Ngaji Rumi 03",
    image: null,
  },
  {
    id: "04",
    title: "Ngaji Rumi 04",
    image: null,
  },
  {
    id: "05",
    title: "Ngaji Rumi 05",
    image: null,
  },
  {
    id: "06",
    title: "Ngaji Rumi 06",
    image: null,
  },
  {
    id: "07",
    title: "Ngaji Rumi 07",
    image: null,
  },
  {
    id: "08",
    title: "Ngaji Rumi 08",
    image: null,
  },
  {
    id: "09",
    title: "Ngaji Rumi 09",
    image: null,
  },
  {
    id: "10",
    title: "Ngaji Rumi 10",
    image: null,
  },
];

export default function Profile() {
  return (
    <main className="overflow-hidden bg-[#f7f5ef] text-[#173c2a]">

      {/* ================================================================
          PROFILE HERO
          ================================================================ */}
      <section className="border-b border-[#173c2a]/10">
        <div className="mx-auto grid min-h-[680px] max-w-7xl items-center gap-16 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:px-12 lg:py-24">

          {/* HERO TEXT */}
          <div className="max-w-2xl">

            <p
              className="
                mb-7
                animate-[fadeUp_0.8s_ease-out_forwards]
                text-xs
                font-semibold
                uppercase
                tracking-[0.3em]
                text-[#b18a3c]
                opacity-0
              "
              style={{
                animationDelay: "100ms",
              }}
            >
              Profil Ngaji Rumi
            </p>

            <h1
              className="
                animate-[fadeUp_0.9s_ease-out_forwards]
                font-serif
                text-[clamp(3rem,10vw,8rem)]
                font-medium
                leading-[0.78]
                tracking-[-0.06em]
                opacity-0
              "
              style={{
                animationDelay: "220ms",
              }}
            >
              PAK JUHA
              <br />
              <span className="ml-[0.08em]">RUDDIN</span>
            </h1>

            <div
              className="
                mt-12
                max-w-lg
                animate-[fadeUp_0.9s_ease-out_forwards]
                opacity-0
              "
              style={{
                animationDelay: "400ms",
              }}
            >
              <p className="text-xl font-medium leading-relaxed sm:text-2xl">
                Pengajar Ngaji Rumi
              </p>

              <p className="mt-5 text-base leading-8 text-[#173c2a]/60">
                Mengenal lebih dekat sosok di balik Ngaji Rumi,
                perjalanan, karya, dan gagasannya dalam menghadirkan
                pembelajaran yang dekat dengan kehidupan.
              </p>
            </div>

          </div>

          {/* FOTO PAK JO */}
          <div
            className="
              relative mx-auto flex w-full max-w-[500px]
              justify-center lg:justify-end
              animate-[imageReveal_1.2s_cubic-bezier(0.22,1,0.36,1)_forwards]
              opacity-0
            "
            style={{
              animationDelay: "250ms",
            }}
          >

            <div
              className="
                absolute -right-8 -top-8
                h-28 w-28 rounded-full
                border border-[#b18a3c]/30
                animate-[float_6s_ease-in-out_infinite]
              "
            />

            <div
              className="
                relative flex min-h-[500px] w-full
                items-end justify-center
                overflow-hidden rounded-[2rem]
                bg-[#e4e7df]
                transition-transform
                duration-700
                hover:-translate-y-2
              "
            >

              <img
                src={pakJoImage}
                alt="Pak Jo"
                className="
                  relative z-10
                  h-auto max-h-[570px]
                  w-auto max-w-[90%]
                  object-contain
                  transition-transform
                  duration-1000
                  ease-out
                  hover:scale-[1.025]
                "
              />

              <div
                className="
                  absolute bottom-5 left-5 z-20
                  rounded-full
                  bg-[#f7f5ef]/90
                  px-5 py-2.5
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  backdrop-blur-sm
                  transition-transform
                  duration-500
                  hover:-translate-y-1
                "
              >
                Ngaji Rumi
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ================================================================
          TENTANG PAK JO
          ================================================================ */}
      <section className="border-b border-[#173c2a]/10 bg-white">

        <div
          className="
            mx-auto max-w-7xl
            px-6 py-24
            sm:px-10
            lg:px-12 lg:py-28
            animate-[fadeUp_1s_ease-out_forwards]
          "
        >

          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">

            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#b18a3c]">
                Tentang
              </p>

              <h2 className="font-serif text-5xl leading-[0.95] tracking-tight sm:text-6xl">
                Tentang
                <br />
                Pak Jo
              </h2>
            </div>

            <div className="max-w-3xl">

              <p className="text-xl leading-9 text-[#173c2a]/80 sm:text-2xl sm:leading-10">
                Ngaji Rumi hadir sebagai ruang belajar dengan pendekatan yang sederhana, reflektif, dan relevan.
              </p>

              <div className="mt-12 grid gap-10 sm:grid-cols-2">

                <div className="transition-all duration-500 hover:-translate-y-1">
                  <span className="mb-5 block h-px w-12 bg-[#b18a3c] transition-all duration-500 hover:w-20" />

                  <h3 className="text-base font-semibold">
                    Pembelajaran
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#173c2a]/55">
                    Menghadirkan pembelajaran melalui pendekatan yang mudah dipahami dan dekat dengan kebutuhan Anda.
                  </p>
                </div>

                <div className="transition-all duration-500 hover:-translate-y-1">
                  <span className="mb-5 block h-px w-12 bg-[#b18a3c] transition-all duration-500 hover:w-20" />

                  <h3 className="text-base font-semibold">
                    Ngaji Rumi
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#173c2a]/55">
                    Ruang belajar yang membawa semangat, mudah dipahami, dan syarat akan makna.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ================================================================
          KARYA PAK JO
          ================================================================ */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-12 lg:py-28">

          {/* Header */}
          <div
            className="
              mb-14
              flex flex-col gap-7
              md:flex-row md:items-end md:justify-between
              animate-[fadeUp_0.9s_ease-out_forwards]
            "
          >

            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#b18a3c]">
                Selected Works
              </p>

              <h2 className="font-serif text-5xl leading-none tracking-tight sm:text-6xl lg:text-7xl">
                Karya Pak Jo
              </h2>
            </div>

          </div>

          {/* ============================================================
              WORKS 01 - 10
              ============================================================ */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

            {selectedWorks.map((work, index) => (

              <article
                key={work.id}
                className="
                  group
                  animate-[fadeUp_0.9s_ease-out_forwards]
                  opacity-0
                "
                style={{
                  animationDelay: `${150 + index * 100}ms`,
                }}
              >

                {/* Image */}
                <div
                  className="
                    relative aspect-[4/5]
                    overflow-hidden rounded-[1.5rem]
                    bg-[#e4e7df]
                    transition-all duration-700
                    group-hover:-translate-y-2
                    group-hover:shadow-[0_25px_60px_rgba(23,60,42,0.12)]
                  "
                >

                  {/* Number */}
                  <div
                    className="
                      absolute left-5 top-5 z-20
                      flex h-10 w-10 items-center
                      justify-center rounded-full
                      bg-[#f7f5ef]/90
                      text-xs font-semibold
                      backdrop-blur-sm
                      transition-transform duration-500
                      group-hover:scale-110
                    "
                  >
                    {work.id}
                  </div>

                  {/* Image / Placeholder */}
                  {work.image ? (

                    <img
                      src={work.image}
                      alt={work.title}
                      className="
                        h-full w-full object-cover
                        transition-transform
                        duration-1000
                        ease-out
                        group-hover:scale-[1.06]
                      "
                    />

                  ) : (

                    <div className="flex h-full flex-col items-center justify-center">

                      <span
                        className="
                          font-serif text-7xl
                          text-[#173c2a]/10
                          transition-transform
                          duration-700
                          group-hover:scale-110
                        "
                      >
                        {work.id}
                      </span>

                      <span className="mt-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#173c2a]/35">
                        Preview Karya
                      </span>

                    </div>

                  )}

                </div>

                {/* Title */}
                <div className="mt-5 flex items-center justify-between border-b border-[#173c2a]/15 pb-4">

                  <h3 className="font-serif text-2xl transition-transform duration-500 group-hover:translate-x-1">
                    {work.title}
                  </h3>

                  <span
                    className="
                      text-lg text-[#b18a3c]
                      transition-transform duration-500
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  >
                    ↗
                  </span>

                </div>

              </article>

            ))}

          </div>

        </div>
      </section>

      {/* ================================================================
          CTA
          ================================================================ */}
      <section className="bg-[#173c2a] text-[#f7f5ef]">

        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12 lg:py-24">

          <div
            className="
              flex flex-col gap-10
              md:flex-row md:items-end md:justify-between
              animate-[fadeUp_1s_ease-out_forwards]
            "
          >

            <div className="max-w-2xl">

              <p className="mb-5 text-xs uppercase tracking-[0.28em] text-[#d2b46a]">
                Jelajahi lebih jauh
              </p>

              <h2 className="font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
                Temukan lebih banyak manfaat Ngaji Rumi
              </h2>

            </div>

            <a
              href="/Ngajirumi/#/perpustakaan"
              className="
                group flex w-fit shrink-0 items-center gap-4
                border border-[#f7f5ef]/30
                px-7 py-4
                text-xs font-semibold uppercase
                tracking-[0.18em]
                transition-all duration-500
                hover:border-[#d2b46a]
                hover:bg-[#d2b46a]
                hover:text-[#173c2a]
                hover:-translate-y-1
              "
            >
              Buka Perpustakaan

              <span
                className="
                  text-base
                  transition-transform duration-300
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </a>

          </div>

        </div>
      </section>

      {/* ================================================================
          ANIMATION KEYFRAMES
          ================================================================ */}
      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(28px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes imageReveal {
          from {
            opacity: 0;
            transform: translateY(35px) scale(0.96);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-10px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

    </main>
  );
}
