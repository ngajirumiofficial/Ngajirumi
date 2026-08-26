function Footer() {
  return (
    <footer className="site-footer" id="footer">
      <div className="site-footer__inner">

        {/* BRAND */}
        <div className="site-footer__brand">
          <p className="site-footer__brand-name">
            NGAJI RUMI
          </p>

          <p className="site-footer__description">
            Ikuti perjalanan Pak Jo dan Ngaji Rumi melalui media sosial resmi kami.
          </p>

          {/* MEDIA SOSIAL PAK JO */}
          <div className="site-footer__social">
            <p className="site-footer__title">
              Media Sosial Pak Jo
            </p>

            <div className="site-footer__social-links">
              <a
                href="https://www.instagram.com/m_juharuddin_cht?igsh=aDhvcWV1cHQ1aXFk&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Pak Jo"
              >
                Instagram
              </a>

              <a
                href="https://www.facebook.com/share/1EAU3akVcW/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Pak Jo"
              >
                Facebook
              </a>

              <a
                href="https://x.com/mjm_bersemangat?s=11&t=OLBCuION3oAXMM8WcWmQ2Q"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X Pak Jo"
              >
                X
              </a>

              <a
                href="https://www.youtube.com/@m_juharuddin_cht"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube Pak Jo"
              >
                YouTube
              </a>

              <a
                href="https://www.tiktok.com/@juhar_2025ok?_r=1&_t=ZS-997ci1dwpRx"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tiktok Pak Jo"
              >
                Tiktok
              </a>
            </div>
          </div>
        </div>

        {/* NAVIGASI */}
        <div className="site-footer__navigation">

          <div className="site-footer__column">
            <p className="site-footer__title">
              Navigasi
            </p>

            <a href="/">Beranda</a>
            <a href="/profil">Profil</a>
            <a href="/perpustakaan">Pustaka</a>
          </div>

          <div className="site-footer__column">
            <p className="site-footer__title">
              Informasi
            </p>

            <a
              href="https://mjuharuddin.blogspot.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blog
            </a>

            <a href="/#footer">
              Kontak
            </a>
          </div>

        </div>

      </div>

      {/* GARIS */}
      <div className="site-footer__line" />

      {/* BOTTOM */}
      <div className="site-footer__bottom">
        <span>
          © {new Date().getFullYear()} Ngaji Rumi
        </span>

        <span>
          Semua hak dilindungi.
        </span>
      </div>
    </footer>
  );
}

export default Footer;