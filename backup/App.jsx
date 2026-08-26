import React, { useEffect, useState } from "react";
import "./App.css";

// ==============================
// ASSETS
// ==============================
import hero1 from "./assets/hero-1.jpg";
import hero2 from "./assets/hero-2.jpg";
import hero3 from "./assets/hero-3.jpg";
import hero4 from "./assets/hero-4.jpg";

/* ============================================================================
   NGAJI RUMI — App.jsx
   Struktur React + logic dasar.
   Styling berada di App.css.
============================================================================ */

// ==============================
// DATA NAVIGASI
// ==============================

const navigationLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Profil", href: "#profil" },
  { label: "Perpustakaan", href: "#perpustakaan" },
  { label: "Blog", href: "#blog" },
  { label: "Kontak", href: "#kontak" },
];

// ==============================
// DATA HERO SLIDER
// ==============================

const heroSlides = [
  {
    id: 1,
    src: hero1,
    alt: "Pak Jo",
    caption: "Pak Jo",
  },
  {
    id: 2,
    src: hero2,
    alt: "Pak Jo bersama murid",
    caption: "Pak Jo bersama murid",
  },
  {
    id: 3,
    src: hero3,
    alt: "Pak Jo bersama keluarga",
    caption: "Pak Jo bersama keluarga",
  },
  {
    id: 4,
    src: hero4,
    alt: "Pak Jo bersama anak taruna",
    caption: "Pak Jo bersama anak taruna",
  },
];

// ==============================
// DATA PERPUSTAKAAN
// ==============================

const libraryItems = Array.from({ length: 10 }, (_, index) => {
  const number = index + 1;
  const formattedNumber = String(number).padStart(2, "0");

  return {
    id: number,
    number: formattedNumber,
    title: `Ngaji Rumi ${formattedNumber}`,
    description:
      "Materi pembelajaran Ngaji Rumi yang akan dikembangkan bersama Pak Jo.",
    link: "#",
  };
});

// ==============================
// DATA BLOG
// ==============================

const BLOG_EXTERNAL_URL = "#";

const blogHighlight = {
  title: "Blog Ngaji Rumi",
  description:
    "Temukan tulisan, catatan, dan berbagai pembahasan seputar ngaji, tahsin, dan perjalanan bersama Pak Jo.",
  url: BLOG_EXTERNAL_URL,
};

// ==============================
// DATA SOSIAL MEDIA
// ==============================

const socialLinks = [
  {
    name: "WhatsApp",
    href: "#",
    icon: "whatsapp",
  },
  {
    name: "Instagram",
    href: "#",
    icon: "instagram",
  },
  {
    name: "YouTube",
    href: "#",
    icon: "youtube",
  },
  {
    name: "TikTok",
    href: "#",
    icon: "tiktok",
  },
  {
    name: "Facebook",
    href: "#",
    icon: "facebook",
  },
  {
    name: "X / Twitter",
    href: "#",
    icon: "twitter",
  },
];

const contactInfo = {
  address: "Kendal, Jawa Tengah, Indonesia",
  email: "info@ngajirumi.id",
  phone: "+62 800-0000-0000",
};

// ============================================================================
// HERO SLIDER
// ============================================================================

function HeroSlider({ slides }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const previousSlide = () => {
    setActiveIndex(
      (current) => (current - 1 + slides.length) % slides.length
    );
  };

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % slides.length);
  };

  return (
    <div
      className="hero-slider"
      aria-roledescription="carousel"
      aria-label="Foto Pak Jo"
    >
      <div className="hero-slider__track">
        {slides.map((slide, index) => (
          <figure
            key={slide.id}
            className={`hero-slider__slide ${
              index === activeIndex ? "hero-slider__slide--active" : ""
            }`}
            aria-hidden={index !== activeIndex}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="hero-slider__image"
            />

            <figcaption className="hero-slider__caption">
              {slide.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="hero-slider__controls">
        <button
          type="button"
          className="hero-slider__control hero-slider__control--prev"
          onClick={previousSlide}
          aria-label="Foto sebelumnya"
        >
          ‹
        </button>

        <button
          type="button"
          className="hero-slider__control hero-slider__control--next"
          onClick={nextSlide}
          aria-label="Foto berikutnya"
        >
          ›
        </button>
      </div>

      <div className="hero-slider__dots" aria-label="Pilih foto">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            className={`hero-slider__dot ${
              index === activeIndex ? "hero-slider__dot--active" : ""
            }`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Ke foto ${index + 1}`}
            aria-current={index === activeIndex ? "true" : undefined}
          />
        ))}
      </div>
    </div>
  );
}

// ============================================================================
// LIBRARY CARD
// ============================================================================

function LibraryCard({ item }) {
  return (
    <article className="library-card">
      <span className="library-card__number">{item.number}</span>

      <h3 className="library-card__title">{item.title}</h3>

      <p className="library-card__description">{item.description}</p>

      <a href={item.link} className="library-card__link">
        Lihat Materi →
      </a>
    </article>
  );
}

// ============================================================================
// APP
// ============================================================================

function App() {
  return (
    <div className="page">

      {/* ================= NAVBAR ================= */}

      <header className="site-header">
        <div className="site-header__inner">

          <a href="#beranda" className="site-logo">
            Ngaji Rumi
          </a>

          <nav className="main-nav" aria-label="Navigasi utama">
            <ul className="main-nav__list">
              {navigationLinks.map((link) => (
                <li key={link.label} className="main-nav__item">
                  <a href={link.href} className="main-nav__link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

        </div>
      </header>

      <main className="site-main">

        {/* ================= BERANDA ================= */}

        <section id="beranda" className="hero-section">
          <div className="hero-section__inner">

            <div className="hero-content">

              <span className="hero-content__eyebrow">
                NGAJI RUMI
              </span>

              <h1 className="hero-content__title">
                Mr. Jo | Ngaji Rumi
              </h1>

              <h2 className="hero-content__subtitle">
                Belajar Ngaji dan Tahsin Ala Rumi
              </h2>

              <p className="hero-content__description">
                Ruang belajar ngaji dan tahsin bersama Pak Jo,
                dengan pendekatan yang hangat, mendalam, dan dekat
                dengan kehidupan sehari-hari.
              </p>

              <div className="hero-content__actions">

                <a href="#profil" className="btn btn--primary">
                  Kenali Pak Jo
                </a>

                <a
                  href="#perpustakaan"
                  className="btn btn--secondary"
                >
                  Jelajahi Perpustakaan
                </a>

              </div>

            </div>

            <div className="hero-visual">
              <HeroSlider slides={heroSlides} />
            </div>

          </div>
        </section>

        {/* ================= PROFIL ================= */}

        <section id="profil" className="profile-section">

          <div className="profile-section__inner">

            <div className="section-heading">
              <span className="section-heading__eyebrow">
                TENTANG NGAJI RUMI
              </span>

              <h2 className="section-title">
                Mengenal Pak Jo
              </h2>
            </div>

            <div className="profile-content">

              <div className="profile-content__media">
                <img
                  src={hero1}
                  alt="Pak Jo"
                  className="profile-content__image"
                />
              </div>

              <div className="profile-content__text">

                <h3 className="profile-content__name">
                  Pak Jo
                </h3>

                <div className="profile-content__block">
                  <h4 className="profile-content__block-title">
                    Latar Belakang
                  </h4>

                  <p className="profile-content__block-text">
                    Informasi mengenai latar belakang Pak Jo akan
                    ditambahkan berdasarkan data yang diberikan.
                  </p>
                </div>

                <div className="profile-content__block">
                  <h4 className="profile-content__block-title">
                    Perjalanan & Pengalaman
                  </h4>

                  <p className="profile-content__block-text">
                    Cerita perjalanan dan pengalaman Pak Jo akan
                    ditambahkan di bagian ini.
                  </p>
                </div>

                <div className="profile-content__block">
                  <h4 className="profile-content__block-title">
                    Pendekatan Ngaji Rumi
                  </h4>

                  <p className="profile-content__block-text">
                    Penjelasan mengenai pendekatan Ngaji Rumi
                    akan ditambahkan berdasarkan informasi asli.
                  </p>
                </div>

                <div className="profile-content__block">
                  <h4 className="profile-content__block-title">
                    Bersama Murid
                  </h4>

                  <p className="profile-content__block-text">
                    Kisah dan pengalaman bersama murid akan
                    ditambahkan setelah materi dari Pak Jo tersedia.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* ================= PERPUSTAKAAN ================= */}

        <section
          id="perpustakaan"
          className="library-section"
        >

          <div className="library-section__inner">

            <div className="section-heading">
              <span className="section-heading__eyebrow">
                RUANG BELAJAR
              </span>

              <h2 className="section-title">
                Perpustakaan Ngaji Rumi
              </h2>

              <p className="section-description">
                Pilih materi Ngaji Rumi yang ingin kamu pelajari.
              </p>
            </div>

            <div className="library-grid">

              {libraryItems.map((item) => (
                <LibraryCard
                  key={item.id}
                  item={item}
                />
              ))}

            </div>

          </div>

        </section>

        {/* ================= BLOG ================= */}

        <section id="blog" className="blog-section">

          <div className="blog-section__inner">

            <div className="blog-card">

              <span className="section-heading__eyebrow">
                BLOG NGAJI RUMI
              </span>

              <h2 className="blog-card__title">
                Catatan, tulisan & renungan Pak Jo
              </h2>

              <p className="blog-card__description">
                Baca berbagai tulisan dan pembahasan seputar
                ngaji, tahsin, serta perjalanan belajar bersama.
              </p>

              <a
                href={blogHighlight.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary"
              >
                Kunjungi Blog →
              </a>

            </div>

          </div>

        </section>

      </main>

      {/* ================= FOOTER / KONTAK ================= */}

      <footer id="kontak" className="site-footer">

        <div className="site-footer__inner">

          <div className="footer-block footer-block--about">

            <h3 className="footer-block__title">
              Ngaji Rumi
            </h3>

            <p className="footer-block__text">
              Belajar ngaji dan tahsin bersama Mr. Jo
              dengan pendekatan Ngaji Rumi.
            </p>

          </div>

          <div className="footer-block footer-block--nav">

            <h3 className="footer-block__title">
              Navigasi
            </h3>

            <ul className="footer-nav-list">

              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="footer-nav-list__link"
                  >
                    {link.label}
                  </a>
                </li>
              ))}

            </ul>

          </div>

          <div className="footer-block footer-block--contact">

            <h3 className="footer-block__title">
              Kontak
            </h3>

            <ul className="footer-contact-list">

              <li>{contactInfo.address}</li>

              <li>
                <a href={`mailto:${contactInfo.email}`}>
                  {contactInfo.email}
                </a>
              </li>

              <li>
                <a href={`tel:${contactInfo.phone}`}>
                  {contactInfo.phone}
                </a>
              </li>

            </ul>

          </div>

          <div className="footer-block footer-block--social">

            <h3 className="footer-block__title">
              Ikuti Kami
            </h3>

            <ul className="footer-social-list">

              {socialLinks.map((social) => (
                <li key={social.name}>

                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-list__link"
                    data-icon={social.icon}
                  >
                    {social.name}
                  </a>

                </li>
              ))}

            </ul>

          </div>

        </div>

        <div className="site-footer__bottom">

          <p>
            © {new Date().getFullYear()} Ngaji Rumi — Mr. Jo.
            Semua hak cipta dilindungi.
          </p>

        </div>

      </footer>

    </div>
  );
}

export default App;