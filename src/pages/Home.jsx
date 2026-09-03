import React from "react";
import HeroSlider from "../components/HeroSlider";

function Home() {
  return (
    <main className="home-page">
      {/* =========================================================
          HERO
         ========================================================= */}
      <HeroSlider />

      {/* =========================================================
          TENTANG NGAJI RUMI
         ========================================================= */}
      <section className="profile-section" id="tentang">
        <div className="profile-section__inner">
          <div className="section-heading">
            <span className="section-heading__eyebrow">
              TENTANG NGAJI RUMI
            </span>

            <h2 className="section-title">
              Belajar Ngaji, Menemukan Makna
            </h2>

            <p className="section-description">
              Ngaji Rumi hadir sebagai ruang belajar bersama Pak Jo melalui
              pendekatan yang hangat, sederhana, dan dekat dengan kehidupan
              sehari-hari.
            </p>
          </div>

          <div className="profile-content">
            <div className="profile-content__visual" aria-hidden="true">
              <div className="profile-decoration">
                <span className="profile-decoration__number">01</span>
                <span className="profile-decoration__line" />
                <span className="profile-decoration__label">
                  NGAJI RUMI
                </span>
              </div>
            </div>

            <div className="profile-content__text">
              <span className="profile-content__eyebrow">
                RUANG BELAJAR
              </span>

              <h3 className="profile-content__title">
                Mengaji dengan cara yang mudah dipahami.
              </h3>

              <p className="profile-content__description">
                Ngaji Rumi membawa proses belajar menjadi lebih hangat,
                bertahap, dan relevan dengan kehidupan sehari-hari.
              </p>

              <div className="profile-content__highlights">
                <div className="profile-highlight">
                  <span className="profile-highlight__number">01</span>

                  <div>
                    <h4>Pendekatan Bertahap</h4>

                    <p>
                      Materi disampaikan dengan terarah agar lebih mudah
                      diikuti.
                    </p>
                  </div>
                </div>

                <div className="profile-highlight">
                  <span className="profile-highlight__number">02</span>

                  <div>
                    <h4>Belajar dengan Nyaman</h4>

                    <p>
                      Tema belajar dibuat sederhana, hangat, dan dekat dengan
                      kebutuhan Anda.
                    </p>
                  </div>
                </div>
              </div>

              <a href="/Ngajirumi/#/profil" className="text-link">
                Kenali Pak Jo
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROGRAM
         ========================================================= */}
      <section className="library-section" id="perpustakaan">
        <div className="library-section__inner">
          <div className="section-heading">
            <span className="section-heading__eyebrow">
              PROGRAM &amp; KEGIATAN
            </span>

            <h2 className="section-title">
              Ruang Belajar Ngaji Rumi
            </h2>

            <p className="section-description">
              Berbagai materi dirancang untuk proses belajar yang mudah
              dipahami.
            </p>
          </div>

          <div className="ngaji-rumi-content">

            {/* NGAJI RUMI 01 */}
            <article className="library-card library-card--one">
              <div className="library-card__number">01</div>

              <div className="library-card__content">
                <span className="library-card__eyebrow">
                  APA YANG KAU CARI?
                </span>

                <h3 className="library-card__title">
                  Ngaji Rumi 1
                </h3>

                <p className="library-card__description">
                  Apa yang kau cari sesungguhnya sedang mencarimu. Jangan
                  habiskan hidupmu mengetuk setiap pintu, karena pintu yang
                  kau cari ada di dalam hatimu sendiri.
                </p>

                <a
                  href="/Ngajirumi/#/ngajirumi-1"
                  className="library-card__arrow"
                  aria-label="Buka Ngaji Rumi 1"
                >
                  ↗
                </a>
              </div>
            </article>

            {/* NGAJI RUMI 02 */}
            <article className="library-card library-card--two">
              <div className="library-card__number">02</div>

              <div className="library-card__content">
                <span className="library-card__eyebrow">
                  LUKA DAN CAHAYA
                </span>

                <h3 className="library-card__title">
                  Ngaji Rumi 2
                </h3>

                <p className="library-card__description">
                  The wound is the place where Light enters you.
                  <br />
                  Luka adalah tempat di mana Cahaya masuk kepadamu.
                </p>

                <a
                  href="/Ngajirumi/#/ngajirumi-2"
                  className="library-card__arrow"
                  aria-label="Buka Ngaji Rumi 2"
                >
                  ↗
                </a>
              </div>
            </article>

            {/* NGAJI RUMI 03 */}
            <article className="library-card library-card--three">
              <div className="library-card__number">03</div>

              <div className="library-card__content">
                <span className="library-card__eyebrow">
                  CERMIN HATI
                </span>

                <h3 className="library-card__title">
                  Ngaji Rumi 3
                </h3>

                <p className="library-card__description">
                  Hatimu adalah cermin, namun ia berdebu. Bersihkanlah dengan
                  cinta, dengan dzikir, dengan air mata kerinduan, agar wajah
                  Tuhan tampak di sana.
                </p>

                <a
                  href="/Ngajirumi/#/ngajirumi-3"
                  className="library-card__arrow"
                  aria-label="Buka Ngaji Rumi 3"
                >
                  ↗
                </a>
              </div>
            </article>

            {/* NGAJI RUMI 04 */}
            <article className="library-card library-card--four">
              <div className="library-card__number">04</div>

              <div className="library-card__content">
                <span className="library-card__eyebrow">
                  DIAM
                </span>

                <h3 className="library-card__title">
                  Ngaji Rumi 4
                </h3>

                <p className="library-card__description">
                  Belajarlah sunyi agar dapat memahami apa yang tak dapat
                  diucapkan. Dalam diam, hati belajar mendengar makna yang
                  melampaui kata-kata.
                </p>

                <a
                  href="/Ngajirumi/#/ngajirumi-4"
                  className="library-card__arrow"
                  aria-label="Buka Ngaji Rumi 4"
                >
                  ↗
                </a>
              </div>
            </article>

            {/* NGAJI RUMI 05 */}
            <article className="library-card library-card--five">
              <div className="library-card__number">05</div>

              <div className="library-card__content">
                <span className="library-card__eyebrow">
                  JANGAN BERSEDIH
                </span>

                <h3 className="library-card__title">
                  Ngaji Rumi 5
                </h3>

                <p className="library-card__description">
                 Kehilangan bukan akhir dari perjalanan. Ada yang pergi untuk mengajarkan keikhlasan, dan ada yang datang membawa makna baru. Percayalah, apa yang Allah takdirkan untukmu tidak akan pernah salah jalan.
                </p>

                <a
                  href="/Ngajirumi/#/ngajirumi-5"
                  className="library-card__arrow"
                  aria-label="Buka Ngaji Rumi 5"
                >
                  ↗
                </a>
              </div>
            </article>

            {/* NGAJI RUMI 06 */}
            <article className="library-card library-card--six">
              <div className="library-card__number">06</div>

              <div className="library-card__content">
                <span className="library-card__eyebrow">
                  TAMU DALAM JIWA
                </span>

                <h3 className="library-card__title">
                  Ngaji Rumi 6
                </h3>

                <p className="library-card__description">
                Kesedihan, kegembiraan, kekecewaam, dan harapan.
Semuanya adalah tamu. 
Sambutlah mereka 
dengan senyum yang lapang, 
karena mungkin mereka datang membawa pesan Tuhan.
                </p>

                <a
                  href="/Ngajirumi/#/ngajirumi-6"
                  className="library-card__arrow"
                  aria-label="Buka Ngaji Rumi 6"
                >
                  ↗
                </a>
              </div>
            </article>

            {/* NGAJI RUMI 07 */}
            <article className="library-card library-card--seven">
              <div className="library-card__number">07</div>

              <div className="library-card__content">
                <span className="library-card__eyebrow">
                  NGAJI RUMI 07
                </span>

                <h3 className="library-card__title">
                  Ngaji Rumi 7
                </h3>

                <p> className="library-card__description"
                membahas perjalanan cinta dari ego menuju kedekatan kepada Allah, melalui proses fana',
                 pencarian makna, dan tumbuhnya kasih sayang universal.
                </p>

                <a
                  href="/Ngajirumi/#/ngajirumi-7"
                  className="library-card__arrow"
                  aria-label="Buka Ngaji Rumi 7"
                >
                  ↗
                </a>
              </div>
            </article>

            {/* NGAJI RUMI 08 */}
            <article className="library-card library-card--eight">
              <div className="library-card__number">08</div>

              <div className="library-card__content">
                <span className="library-card__eyebrow">
                  NGAJI RUMI 08
                </span>

                <h3 className="library-card__title">
                  Ngaji Rumi 8
                </h3>

                <p className="library-card__description">
                  Materi Ngaji Rumi 8 akan segera hadir. Lanjutkan proses
                  belajar dengan membuka ruang pemahaman yang lebih luas.
                </p>

                <a
                  href="/Ngajirumi/#/ngajirumi-8"
                  className="library-card__arrow"
                  aria-label="Buka Ngaji Rumi 8"
                >
                  ↗
                </a>
              </div>
            </article>

            {/* NGAJI RUMI 09 */}
            <article className="library-card library-card--nine">
              <div className="library-card__number">09</div>

              <div className="library-card__content">
                <span className="library-card__eyebrow">
                  NGAJI RUMI 09
                </span>

                <h3 className="library-card__title">
                  Ngaji Rumi 9
                </h3>

                <p className="library-card__description">
                  Materi Ngaji Rumi 9 akan segera hadir. Teruskan perjalanan
                  belajar untuk memahami pesan dan makna yang lebih dalam.
                </p>

                <a
                  href="/Ngajirumi/#/ngajirumi-9"
                  className="library-card__arrow"
                  aria-label="Buka Ngaji Rumi 9"
                >
                  ↗
                </a>
              </div>
            </article>

            {/* NGAJI RUMI 10 */}
            <article className="library-card library-card--ten">
              <div className="library-card__number">10</div>

              <div className="library-card__content">
                <span className="library-card__eyebrow">
                  NGAJI RUMI 10
                </span>

                <h3 className="library-card__title">
                  Ngaji Rumi 10
                </h3>

                <p className="library-card__description">
                  Materi Ngaji Rumi 10 akan segera hadir. Sebagai bagian dari
                  perjalanan Ngaji Rumi yang terus berkembang.
                </p>

                <a
                  href="/Ngajirumi/#/ngajirumi-10"
                  className="library-card__arrow"
                  aria-label="Buka Ngaji Rumi 10"
                >
                  ↗
                </a>
              </div>
            </article>

          </div>

          <p className="ngaji-rumi-note">
            Belajar, berproses, memahami lebih dekat
          </p>
        </div>
      </section>

      {/* =========================================================
          KEUNGGULAN
         ========================================================= */}
      <section className="blog-section" id="keunggulan">
        <div className="blog-section__inner">
          <div className="section-heading">
            <span className="section-heading__eyebrow">
              KEUNGGULAN
            </span>

            <h2 className="section-title">
              Ngaji dengan pendekatan yang relevan
            </h2>

            <p className="section-description">
              Proses belajar dirancang lebih sederhana, nyaman, dan jelas
            </p>
          </div>

          <div className="blog-card">
            <div className="blog-card__index">01</div>

            <div className="blog-card__content">
              <span className="blog-card__eyebrow">
                PENDEKATAN
              </span>

              <h3 className="blog-card__title">
                Belajar dengan nyaman
              </h3>

              <p className="blog-card__description">
                Mengutamakan proses, mudah dipahami, interaktif, dan sesuai
                kebutuhan Anda
              </p>
            </div>

            <div className="blog-card__badge">
              <span>Ngaji</span>
              <strong>Rumi</strong>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA / KONTAK
         ========================================================= */}
      <section className="contact-section" id="kontak">
        <div className="contact-section__inner">
          <div className="contact-content">
            <div className="contact-content__copy">
              <span className="section-heading__eyebrow">
                MULAI BELAJAR
              </span>

              <h2 className="contact-content__title">
                Mari Mengenal Ngaji Rumi
              </h2>

              <p> className="contact-content__description"
                Kenali lebih jauh perjalanan Pak Jo dan pendekatan
                pembelajaran Ngaji Rumi.
              </p>
            </div>

            <a href="/Ngajirumi/#/profil" className="btn btn--primary">
              Kenali Pak Jo
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;