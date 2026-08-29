import React, { useState, useRef, useEffect } from "react";
import logo from "../assets/logo.png";

const blogSubLinks = [
  {
    label: "Ngaji Rumi Blog",
    href: "https://mjuharuddin.blogspot.com/",
    desc: "Tulisan & refleksi Ngaji Rumi",
    external: true,
  },
  {
    label: "Jurnal Harian",
    href: "https://mjuharuddin.blogspot.com/",
    desc: "Catatan harian & keseharian",
    external: true,
  },
];

function Navbar() {
  const [blogOpen, setBlogOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileBlogOpen, setMobileBlogOpen] = useState(false);
  const closeTimer = useRef(null);

  const openDropdown = () => {
    clearTimeout(closeTimer.current);
    setBlogOpen(true);
  };

  const closeDropdown = () => {
    closeTimer.current = setTimeout(() => setBlogOpen(false), 150);
  };

  const toggleDropdown = () => setBlogOpen((v) => !v);
  const toggleMenu = () => setMenuOpen((v) => !v);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="site-header__inner">

        {/* LOGO */}
        <a href="/Ngajirumi/" className="site-logo" aria-label="Ngaji Rumi - Beranda">
          <img src={logo} alt="Ngaji Rumi" className="site-logo__image" />
        </a>

        {/* NAVIGASI DESKTOP */}
        <nav className="main-nav" aria-label="Navigasi utama">
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <a href="/Ngajirumi/" className="main-nav__link">Beranda</a>
            </li>
            <li className="main-nav__item">
              <a href="/Ngajirumi/profil" className="main-nav__link">Profil</a>
            </li>
            <li className="main-nav__item">
              <a href="/Ngajirumi/perpustakaan" className="main-nav__link">Perpustakaan</a>
            </li>
            <li className="main-nav__item">
              <a href="/Ngajirumi/galeri" className="main-nav__link">Galeri</a>
            </li>
            <li className="main-nav__item main-nav__item--dropdown" onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
              <button className="main-nav__link main-nav__link--dropdown-trigger" onClick={toggleDropdown} aria-expanded={blogOpen} aria-haspopup="true" type="button">
                Blog
                <svg className={`nav-chevron${blogOpen ? " nav-chevron--open" : ""}`} width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {blogOpen && (
                <div className="nav-dropdown" onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
                  {blogSubLinks.map((sub) => (
                    <a key={sub.label} href={sub.href} className="nav-dropdown__item" target={sub.external ? "_blank" : undefined} rel={sub.external ? "noopener noreferrer" : undefined}>
                      <span className="nav-dropdown__label">{sub.label}</span>
                      <span className="nav-dropdown__desc">{sub.desc}</span>
                    </a>
                  ))}
                </div>
              )}
            </li>
            <li className="main-nav__item">
              <a href="/Ngajirumi/#footer" className="main-nav__link">Kontak</a>
            </li>
          </ul>
        </nav>

        {/* HAMBURGER BUTTON */}
        <button className={`mobile-nav-toggle ${menuOpen ? "mobile-nav-toggle--active" : ""}`} onClick={toggleMenu} aria-label="Toggle menu navigasi" aria-expanded={menuOpen} type="button">
          <span className="mobile-nav-toggle__bar"></span>
          <span className="mobile-nav-toggle__bar"></span>
          <span className="mobile-nav-toggle__bar"></span>
        </button>

        {/* MOBILE MENU */}
        <div className={`mobile-menu ${menuOpen ? "mobile-menu--open" : ""}`}>
          <div className="mobile-menu__inner">
            <div className="mobile-menu__header">
              <a href="/Ngajirumi/" className="site-logo" onClick={closeMenu}>
                <img src={logo} alt="Ngaji Rumi" className="site-logo__image" />
              </a>
              <button className="mobile-menu__close" onClick={closeMenu} aria-label="Tutup menu" type="button">✕</button>
            </div>
            <nav className="mobile-menu__nav">
              <ul className="mobile-menu__list">
                <li className="mobile-menu__item">
                  <a href="/Ngajirumi/" className="mobile-menu__link" onClick={closeMenu}>Beranda</a>
                </li>
                <li className="mobile-menu__item">
                  <a href="/Ngajirumi/profil" className="mobile-menu__link" onClick={closeMenu}>Profil</a>
                </li>
                <li className="mobile-menu__item">
                  <a href="/Ngajirumi/perpustakaan" className="mobile-menu__link" onClick={closeMenu}>Perpustakaan</a>
                </li>
                <li className="mobile-menu__item">
                  <a href="/Ngajirumi/galeri" className="mobile-menu__link" onClick={closeMenu}>Galeri</a>
                </li>
                <li className="mobile-menu__item mobile-menu__item--dropdown">
                  <button className="mobile-menu__link mobile-menu__link--trigger" onClick={() => setMobileBlogOpen(!mobileBlogOpen)} aria-expanded={mobileBlogOpen} type="button">
                    Blog
                    <svg className={`nav-chevron${mobileBlogOpen ? " nav-chevron--open" : ""}`} width="14" height="14" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <div className={`mobile-menu__submenu ${mobileBlogOpen ? "mobile-menu__submenu--open" : ""}`}>
                    {blogSubLinks.map((sub) => (
                      <a key={sub.label} href={sub.href} className="mobile-menu__sublink" onClick={closeMenu} target={sub.external ? "_blank" : undefined} rel={sub.external ? "noopener noreferrer" : undefined}>
                        <span className="mobile-menu__sublink-label">{sub.label}</span>
                        <span className="mobile-menu__sublink-desc">{sub.desc}</span>
                      </a>
                    ))}
                  </div>
                </li>
                <li className="mobile-menu__item">
                  <a href="/Ngajirumi/#footer" className="mobile-menu__link" onClick={closeMenu}>Kontak</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;