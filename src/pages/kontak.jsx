function Kontak() {
  return (
    <section className="contact-page">

      <div className="contact-page__inner">

        {/* HEADER */}
        <div className="contact-page__header">
          <p className="contact-page__eyebrow">
            Kontak
          </p>

          <h1 className="contact-page__title">
            Mari Terhubung
            <br />
            dengan Ngaji Rumi.
          </h1>

          <p className="contact-page__description">
            Punya pertanyaan, ingin mengetahui lebih jauh tentang
            Ngaji Rumi, atau ingin terhubung dengan Pak Jo?
            Silakan hubungi kami melalui informasi berikut.
          </p>
        </div>

        {/* CONTACT CONTENT */}
        <div className="contact-page__content">

          <div className="contact-page__card">
            <p className="contact-page__label">
              Hubungi Kami
            </p>

            <h2>
              Ngaji Rumi
            </h2>

            <p>
              Informasi kontak dan komunikasi Ngaji Rumi
              akan ditampilkan di bagian ini.
            </p>
          </div>

          <div className="contact-page__card">
            <p className="contact-page__label">
              Informasi
            </p>

            <p>
              Detail WhatsApp, email, alamat, dan media sosial
              akan kita masukkan setelah materi asli dari tim
              Ngaji Rumi tersedia.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Kontak;