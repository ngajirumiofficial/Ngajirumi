import React, { useEffect, useState } from "react";
import FrameBackground from "./FrameBackground";

const slides = [
  {
    id: 1,
    eyebrow: "NGAJI RUMI",
    title: "Belajar Ngaji,\nMenemukan Makna.",
    subtitle: "Belajar NgajiRumi",
    description:
      "Ruang belajar mengaji dan tahsin bersama Pak Jo dengan pendekatan yang hangat, sederhana, dan dekat dengan kehidupan sehari-hari.",
    label: "RUANG BELAJAR",
  },
  {
    id: 2,
    eyebrow: "Memahami Bacaan Ngajirumi",
    title: "Membaca Lebih Baik,\nMemahami Lebih Dalam.",
    subtitle: "Belajar dengan proses yang bertahap",
    description:
      "Membangun kemampuan membaca Al-Qur'an melalui pembelajaran yang terarah dan mudah dipahami.",
    label: "Dari baris ke baris bacaan, dari makna ke makna kehidupan.",
  },
  {
    id: 3,
    eyebrow: "PENDEKATAN RUMI",
    title: "Dekat dengan Kehidupan,\nDekat dengan Pembelajaran.",
    subtitle: "Sederhana, hangat, dan relevan",
    description:
      "Ngaji Rumi menghadirkan pengalaman belajar yang tidak terasa jauh dari keseharian.",
    label: "PENDEKATAN BELAJAR",
  },
  {
    id: 4,
    eyebrow: "BERSAMA PAK JO",
    title: "Mari Bertumbuh\nBersama Ngaji Rumi.",
    subtitle: "Perjalanan belajar dimulai dari langkah kecil",
    description:
      "Kenali lebih jauh perjalanan Pak Jo dan ruang belajar yang dibangun melalui Ngaji Rumi.",
    label: "BERSAMA PAK JO",
  },
];

function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const activeSlide = slides[activeIndex];

  /* =========================================================
     SLIDE NAVIGATION
     ========================================================= */

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % slides.length);
  };

  const previousSlide = () => {
    setActiveIndex(
      (current) => (current - 1 + slides.length) % slides.length
    );
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  /* =========================================================
     AUTO SLIDE
     ========================================================= */

  useEffect(() => {
    if (isPaused) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 5000);

    return () => {
      window.clearInterval(timer);
    };
  }, [isPaused]);

  /* =========================================================
     KEYBOARD
     ========================================================= */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        nextSlide();
      }

      if (event.key === "ArrowLeft") {
        previousSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <section
      className="hero-section"
      aria-label="Ngaji Rumi"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsPaused(false);
        }
      }}
    >

      {/* =====================================================
          BACKGROUND IMAGE
         ===================================================== */}

      <FrameBackground />


      {/* =====================================================
          BACKGROUND OVERLAY
         ===================================================== */}

      <div
        className="hero-section__overlay"
        aria-hidden="true"
      />


      {/* =====================================================
          HERO CONTENT
         ===================================================== */}

      <div className="hero-section__inner">

        <div
          className="hero-content"
          key={activeSlide.id}
        >
          <span className="hero-content__eyebrow">
            {activeSlide.eyebrow}
          </span>

          <h1 className="hero-content__title">
            {activeSlide.title.split("\n").map((line, index) => (
              <React.Fragment key={line}>
                {index > 0 && <br />}
                {line}
              </React.Fragment>
            ))}
          </h1>

          <p className="hero-content__subtitle">
            {activeSlide.subtitle}
          </p>

          <p className="hero-content__description">
            {activeSlide.description}
          </p>

          <div className="hero-content__actions">

            <a
              href="/Ngajirumi/#/profil"
              className="btn btn--primary"
            >
              Kenali Pak Jo
              <span aria-hidden="true">→</span>
            </a>

            <a
              href="/Ngajirumi/#/perpustakaan"
              className="btn btn--secondary"
            >
              Jelajahi Ngaji Rumi
            </a>

          </div>
        </div>

      </div>


      {/* =====================================================
          SLIDER CONTROLS
         ===================================================== */}

      <div className="hero-controls">

        <div
          className="hero-slider__counter"
          aria-hidden="true"
        >
          <strong>
            {String(activeIndex + 1).padStart(2, "0")}
          </strong>

          <span>/</span>

          <span>
            {String(slides.length).padStart(2, "00")}
          </span>
        </div>


        <div
          className="hero-slider__dots"
          aria-label="Pilih slide"
        >
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              className={`hero-slider__dot ${
                index === activeIndex
                  ? "is-active"
                  : ""
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Buka slide ${index + 1}`}
              aria-current={
                index === activeIndex
                  ? "true"
                  : undefined
              }
            />
          ))}
        </div>


        <div className="hero-slider__navigation">

          <button
            type="button"
            className="hero-slider__button"
            onClick={previousSlide}
            aria-label="Slide sebelumnya"
          >
            ←
          </button>

          <button
            type="button"
            className="hero-slider__button"
            onClick={nextSlide}
            aria-label="Slide berikutnya"
          >
            →
          </button>

        </div>

      </div>

    </section>
  );
}

export default HeroSlider;