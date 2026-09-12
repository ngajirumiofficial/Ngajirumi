const tawassul = [
  "Nabi Muhammad SAW",
  "Nabi Adam AS dan Ibu Hawa",
  "Nabi Idris AS",
  "Maulana Jalaluddin Rumi RA",
  "Maulana Shams Tabrizi RA",
];

const baitRumi = [
  {
    title: "1. Setetes air yang menjadi lautan",
    persia: "هین بده ای قطره خود را بی‌ندم\nتا بیابی در بهای قطره یم",
    latin: "Hīn bede ey qaṭreh khod rā bī-nadam, tā biyābī dar bahā-ye qaṭreh yam.",
    translation:
      "Wahai setetes air, serahkanlah dirimu tanpa penyesalan, agar sebagai balasannya engkau memperoleh samudra.",
    explanation:
      "Makna bait ini sangat dekat dengan tema penyatuan jiwa manusia dengan Tuhan. Dalam tasawuf Rumi, manusia yang melepas ego akan menemukan keluasan Ilahi yang tak terbatas.",
    source: "Masnavi-ye Ma'navi (Mathnawi), Daftar IV, bait 2619 (penomoran Nicholson).",
  },
  {
    title: "2. Masuklah ke dalam tangan samudra",
    persia: "هین بده ای قطره خود را این شرف\nدر کف دریا شو آمن از تلف",
    latin: "Hīn bede ey qaṭreh khod rā īn sharaf, dar kaf-e daryā sho āmen az talaf.",
    translation:
      "Wahai setetes air, raihlah kemuliaan ini. Masuklah ke dalam tangan samudra, maka engkau akan selamat dari kebinasaan.",
    explanation:
      "Selama manusia hanya bergantung pada egonya, ia rapuh. Ketika menyerahkan dirinya kepada Allah, ia memperoleh keselamatan sejati.",
    source: "Masnavi, Jilid IV, bait 2620.",
  },
  {
    title: "3. Lautan yang mencari setetes air",
    persia: "خود کرا آید چنین دولت به دست\nقطره‌ای را بحری تقاضاگر شدست",
    latin: "Khod karā āyad chenīn dowlat be dast, qaṭreh-ī rā baḥrī taqāzāgar shode ast.",
    translation:
      "Siapakah yang memperoleh anugerah seperti ini? Sebuah samudra justru mencari setetes air.",
    explanation:
      "Ini adalah ungkapan cinta Ilahi yang indah dalam Masnavi: Allah digambarkan mencari hamba-Nya dengan kasih sayang-Nya.",
    source: "Masnavi, Jilid IV, bait 2621.",
  },
  {
    title: "4. Ruh yang tenggelam di lautan Tuhan",
    persia: "چون بیابد او که یابد گم شود\nهم‌چو سیلی غرقهٔ قلزم شود",
    latin: "Chun biyābad ū ke yābad gom shavad, hamcho sīlī gharqeh-ye Qolzom shavad.",
    translation:
      "Barang siapa benar-benar menemukan Dia, maka dirinya lenyap; laksana banjir yang tenggelam ke dalam samudra.",
    explanation:
      "Bait ini menjelaskan konsep fanā': leburnya ego dalam cinta kepada Allah.",
    source: "Masnavi, Jilid VI, bait 4052 (penomoran Nicholson).",
  },
];

const pembahasan = [
  {
    title: "Kau bukan setetes air di lautan luas",
    ayat: "فَإِذَا سَوَّيْتُهُ وَنَفَخْتُ فِيهِ مِن رُّوحِي فَقَعُوا لَهُ سَاجِدِينَ",
    reference: "Q.S. Al-Hijr: 29",
    translation:
      "Maka apabila Aku telah menyempurnakannya dan meniupkan ke dalamnya ruh (ciptaan)-Ku...",
    text: "Manusia sering merasa dirinya kecil, lemah, dan tidak berarti karena hanya melihat dirinya sebagai tubuh. Padahal hakikat manusia adalah ruh. Para mufasir menjelaskan bahwa frasa ruh-Ku merupakan bentuk pemuliaan, bukan berarti ruh adalah bagian dari Allah. Dalam bahasa Rumi, setetes air tidak kehilangan nilainya karena kecil; ia berasal dari samudra dan selalu merindukan kembali kepada samudra.",
  },
  {
    title: "Kau adalah seluruh lautan dalam setetes air",
    ayat: "وَفِي أَنفُسِكُمْ ۚ أَفَلَا تُبْصِرُونَ",
    reference: "Q.S. Az-Zariyat: 21",
    translation:
      "Dan pada dirimu sendiri terdapat tanda-tanda (kebesaran Allah). Maka apakah kamu tidak memperhatikannya?",
    text: "Ungkapan ini bukan berarti manusia adalah Tuhan. Hati manusia memiliki kemampuan untuk mengenal keluasan rahmat Allah. Dalam diri manusia terdapat akal, hati, nurani, kasih sayang, dan fitrah yang menjadi tanda kebesaran-Nya. Rumi mengajak murid-muridnya untuk menyelam ke dalam diri, karena mengenal diri adalah jalan menuju pengenalan kepada Tuhan.",
  },
  {
    title: "Jangan kecilkan dirimu",
    ayat: "وَلَقَدْ كَرَّمْنَا بَنِي آدَمَ",
    reference: "Q.S. Al-Isra': 70",
    translation: "Sungguh Kami telah memuliakan anak cucu Adam.",
    text: "Merendahkan diri di hadapan Allah berbeda dengan meremehkan potensi yang Allah titipkan. Kemuliaan manusia terletak pada akal, hati, ilmu, dan kemampuan memilih jalan yang benar. Seorang mukmin tidak boleh merasa hina hingga putus asa, tetapi juga tidak boleh sombong; seluruh kemuliaannya adalah anugerah Allah.",
  },
  {
    title: "Jiwamu diciptakan untuk terbang",
    ayat: "قَدْ أَفْلَحَ مَن زَكَّاهَا • وَقَدْ خَابَ مَن دَسَّاهَا",
    reference: "Q.S. Asy-Syams: 9–10",
    translation:
      "Sungguh beruntung orang yang menyucikan jiwanya, dan sungguh rugi orang yang mengotorinya.",
    text: "Terbang bukan berarti meninggalkan bumi, melainkan naik dari sifat-sifat rendah menuju sifat-sifat mulia. Sayap yang dimaksud para sufi bukan sayap jasmani, tetapi sayap ilmu, cinta, zikir, kesabaran, dan ketakwaan. Penerbangan ruhani dimulai dari hati yang bersih.",
  },
];

export default function NgajiRumi8() {
  return (
    <article className="min-h-screen overflow-x-hidden bg-[#f7f5ef] font-sans text-[#173c2a]">
      <header className="relative overflow-hidden bg-[#173c2a] px-6 py-20 text-center text-white sm:px-8 sm:py-28">
        <span className="mb-6 inline-flex rounded-full border border-[#b18a3c]/50 bg-[#b18a3c]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#d9c27a]">
          NGAJI RUMI 8
        </span>
        <h1 className="mt-2 font-serif text-5xl font-semibold tracking-tight text-[#f7f5ef] sm:text-7xl">“BURUNG JIWA”</h1>
        <p className="mt-5 text-sm leading-7 text-white/75 sm:text-base">Oleh: M. Juharuddin</p>
        <p className="mt-1 text-sm leading-7 text-white/60">Spotlight / 24 / 18 / VII / 2026</p>
      </header>

      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">Alhamdulillah kita telah sampai di bilik Ngaji Rumi 8. Semoga kedamaian senantiasa menyertai para pembaca. Sebelum menyelami tajuk “Burung Jiwa”, mari simak catatan sekilas tentang Rumi.</p>
        <div className="mt-10 rounded-2xl border border-[#173c2a]/10 bg-white/70 p-6 shadow-sm sm:p-8">
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Pertemuan dengan Fariduddin Attar</h2>
          <div className="mt-6 space-y-5 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
            <p>Salah satu kisah paling terkenal terjadi ketika keluarga Rumi singgah di Nishapur. Di sana mereka bertemu dengan Fariduddin Attar, seorang penyair dan sufi besar.</p>
            <p>Konon, setelah melihat Rumi kecil, Attar berkata kepada ayahnya: “Anakmu ini kelak akan menyalakan api cinta Ilahi di hati manusia.” Attar bahkan menghadiahkan sebuah buku karyanya kepada Rumi muda.</p>
            <p>Walaupun kisah ini sulit dipastikan secara historis, cerita tersebut telah menjadi bagian penting dari tradisi biografi Rumi.</p>
          </div>
          <p className="mt-6 border-t border-[#173c2a]/10 pt-5 text-sm leading-7 text-[#173c2a]/55">Merujuk: Sulṭān Walad, <em>Ibtidā'-Nāmeh (Walad-Nāmeh)</em>. Edited by Muhammad Ali Muwahhid &amp; Ali Reza Heydari. Tehran: Khwarizmi Publishing, 2010.</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Tawassul</h2>
        <p className="mt-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">Sebelum mengalir ke tajuk “Burung Jiwa”, mari sejenak bertawasul. Semoga ikhtiar ngaji kita senantiasa dalam rida Allah SWT. Al-Fatihah teruntuk:</p>
        <ol className="mt-7 grid gap-3 text-base leading-8 text-[#173c2a]/75 sm:text-lg sm:grid-cols-2">{tawassul.map((nama, index) => <li key={nama} className="rounded-xl border border-[#b18a3c]/20 bg-white/60 px-5 py-4"><span className="mr-3 font-semibold text-[#b18a3c]">{index + 1}.</span>{nama}</li>)}</ol>
      </section>

      <section className="bg-[#173c2a] px-5 py-20 text-[#f7f5ef] sm:px-8 sm:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d9c27a]">Burung Jiwa</p>
          <blockquote className="mt-8 font-serif text-3xl leading-relaxed sm:text-4xl">“Kau bukan setetes air di lautan luas, kau adalah seluruh lautan dalam setetes air. Jangan kecilkan dirimu, karena jiwamu diciptakan untuk terbang.”</blockquote>
          <p className="mx-auto mt-10 max-w-3xl text-sm leading-7 text-white/65 sm:text-base">Kalimat ini sering dikaitkan dengan Jalaluddin Rumi. Namun, dua bagiannya perlu dibedakan agar kita tetap cermat dalam mengutip beliau.</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Catatan tentang kutipan</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-[#b18a3c]/20 bg-white/70 p-6"><h3 className="font-serif text-2xl font-semibold">“Seluruh lautan dalam setetes air”</h3><p className="mt-4 leading-8 text-[#173c2a]/70">Merupakan terjemahan bebas atau adaptasi dari gagasan Rumi, bukan kutipan harfiah.</p></div>
          <div className="rounded-2xl border border-[#b18a3c]/20 bg-white/70 p-6"><h3 className="font-serif text-2xl font-semibold">“Jiwamu diciptakan untuk terbang”</h3><p className="mt-4 leading-8 text-[#173c2a]/70">Juga bukan kutipan asli Rumi, melainkan parafrasa modern yang selaras dengan ajaran beliau tentang potensi ruh manusia.</p></div>
        </div>
        <p className="mt-7 rounded-xl border border-[#b18a3c]/15 bg-[#e4e7df]/50 px-5 py-4 text-sm leading-7 text-[#173c2a]/60">Rumi menulis hampir seluruh karyanya dalam bahasa Persia (Farsi) dengan aksara Arab-Persia, bukan bahasa Arab. Kalimat populer “You are not a drop in the ocean...” belum memiliki rujukan yang dapat diverifikasi dalam Masnavi maupun Diwan-e Shams.</p>
      </section>

      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Bait asli Rumi</h2>
        <div className="mt-10 space-y-12">{baitRumi.map((bait) => <div key={bait.title}><h3 className="font-serif text-2xl font-semibold sm:text-3xl">{bait.title}</h3><div className="mt-6 rounded-2xl bg-[#173c2a] px-6 py-8 text-center text-2xl leading-[2.2] text-[#f7f5ef] shadow-sm sm:px-8 sm:text-3xl" dir="rtl">{bait.persia.split("\n").map((line) => <p key={line}>{line}</p>)}</div><div className="mt-5 rounded-2xl border border-[#173c2a]/10 bg-white/70 px-6 py-5 text-sm leading-8 text-[#173c2a]/70"><strong>Latin:</strong><br />{bait.latin}</div><p className="mt-5 text-base leading-8 text-[#173c2a]/70 sm:text-lg"><strong>Terjemah Indonesia:</strong><br />“{bait.translation}”</p><p className="mt-4 text-base leading-8 text-[#173c2a]/70">{bait.explanation}</p><p className="mt-4 text-sm leading-7 text-[#173c2a]/55"><strong>Sumber:</strong> {bait.source}</p></div>)}</div>
      </section>

      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Menyelami “Burung Jiwa”</h2>
        <p className="mt-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">Menurut Rumi, manusia bukan makhluk kecil yang hidup tanpa tujuan. Tubuh memang terbatas, tetapi ruh yang ditiupkan Allah kepadanya membawa potensi untuk mengenal Allah, mencintai-Nya, dan memantulkan sifat-sifat-Nya dalam kehidupan.</p>
        <div className="mt-10 space-y-12">{pembahasan.map((bagian, index) => <section key={bagian.title} className="rounded-2xl border border-[#173c2a]/10 bg-white/70 p-6 sm:p-8"><p className="text-sm font-semibold tracking-[0.18em] text-[#b18a3c]">{String(index + 1).padStart(2, "0")}</p><h3 className="mt-3 font-serif text-2xl font-semibold sm:text-3xl">{bagian.title}</h3><div className="mt-6 rounded-xl bg-[#173c2a] px-5 py-6 text-center text-2xl leading-[2.1] text-[#f7f5ef]" dir="rtl">{bagian.ayat}</div><p className="mt-4 text-center text-sm italic leading-7 text-[#173c2a]/55">{bagian.reference} — “{bagian.translation}”</p><p className="mt-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg">{bagian.text}</p></section>)}</div>
      </section>

      <section className="bg-[#173c2a] px-5 py-20 text-[#f7f5ef] sm:px-8 sm:py-24">
        <div className="mx-auto max-w-5xl"><h2 className="font-serif text-3xl font-semibold sm:text-4xl">Kesimpulan menurut spiritualitas Rumi</h2><div className="mt-7 max-w-4xl space-y-6 text-base leading-8 text-white/75 sm:text-lg sm:leading-9"><p>Manusia adalah musafir yang berasal dari Allah dan sedang kembali kepada-Nya. Tubuh hanyalah pakaian sementara, sedangkan ruh adalah burung yang merindukan langit asalnya.</p><p>Jangan merasa kecil, sebab Allah telah memuliakanmu. Jangan merasa cukup dengan dunia, sebab ruhmu merindukan Tuhan. Jangan biarkan jiwamu terpenjara oleh hawa nafsu, karena ia diciptakan untuk terbang menuju cinta Ilahi.</p><p>Ketika manusia melepaskan ego dan berserah diri kepada Allah, ia tidak kehilangan dirinya, tetapi menemukan keluasan hidup yang sesungguhnya: perjalanan dari nafs menuju qalb, dari qalb menuju ruh, dan dari ruh menuju ma'rifat kepada Allah.</p></div></div>
      </section>

      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Krisis Identitas Manusia Modern</h2>
        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-[#b18a3c]">Kau bukan setetes air di lautan luas</p>
        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>Manusia abad ke-21 hidup di tengah sebuah paradoks. Peradaban mencapai kemajuan yang belum pernah terjadi sebelumnya: teknologi memungkinkan manusia berbicara lintas benua dalam hitungan detik, informasi tersedia tanpa batas, pendidikan semakin mudah diakses, dan berbagai fasilitas membuat hidup terasa lebih nyaman.</p>
          <p>Namun, di sisi lain, banyak orang justru merasa semakin jauh dari dirinya sendiri. Tidak sedikit yang bangun setiap pagi tanpa benar-benar mengetahui untuk apa ia menjalani hari itu. Aktivitas dilakukan secara otomatis: bekerja, belajar, membuka media sosial, mengejar target, mencari hiburan, lalu tidur. Esok hari siklus yang sama kembali berulang. Hidup berjalan cepat, tetapi kehilangan arah.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl border border-[#173c2a]/10 bg-white/70 p-6 shadow-sm">
            <h3 className="font-serif text-2xl font-semibold">Prestasi yang hampa</h3>
            <p className="mt-4 leading-8 text-[#173c2a]/70">Seorang mahasiswa lulus dengan predikat terbaik, tetapi setelah wisuda merasa hampa karena selama ini ia mengejar nilai, bukan memahami tujuan hidupnya.</p>
          </article>
          <article className="rounded-2xl border border-[#173c2a]/10 bg-white/70 p-6 shadow-sm">
            <h3 className="font-serif text-2xl font-semibold">Karier yang melelahkan</h3>
            <p className="mt-4 leading-8 text-[#173c2a]/70">Seorang pegawai memperoleh jabatan impian dan gaji tinggi, tetapi setiap malam mengalami kecemasan karena merasa hidupnya hanya dipenuhi tuntutan pekerjaan.</p>
          </article>
          <article className="rounded-2xl border border-[#173c2a]/10 bg-white/70 p-6 shadow-sm">
            <h3 className="font-serif text-2xl font-semibold">Angka di layar</h3>
            <p className="mt-4 leading-8 text-[#173c2a]/70">Seorang kreator memiliki jutaan pengikut, tetapi saat telepon genggam dimatikan ia merasa sendirian. Harga dirinya perlahan bergantung pada angka-angka di layar.</p>
          </article>
        </div>

        <div className="mt-10 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>Media sosial menjadi contoh nyata bagaimana identitas sering dibangun dari pengakuan orang lain. Banyak orang tidak lagi bertanya, “Siapakah aku?”, melainkan, “Bagaimana agar aku disukai?” Nilai diri akhirnya diukur melalui jumlah pengikut, jumlah penonton, atau seberapa viral seseorang. Identitas berubah menjadi sesuatu yang harus terus dipertontonkan, bukan lagi sesuatu yang ditemukan di dalam diri.</p>
          <p>Fenomena serupa tampak dalam budaya konsumtif. Mobil, pakaian, gawai, hingga tempat liburan sering dijadikan simbol harga diri. Ketika simbol-simbol itu hilang, rasa percaya diri pun ikut goyah. Manusia menjadi sibuk menghias citra, tetapi lupa merawat jiwa.</p>
          <p>Di dunia pendidikan, pelajar dapat merasa gagal hanya karena nilai ujiannya lebih rendah dari teman. Di dunia kerja, seseorang merasa hidupnya tidak berarti ketika kariernya tertinggal dibanding rekan sebayanya. Di lingkungan keluarga, orang terus membandingkan kehidupannya dengan potongan kebahagiaan yang dipilih untuk ditampilkan di media sosial.</p>
        </div>
      </section>

      <section className="bg-[#e4e7df]/50 px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Kehampaan eksistensial</h2>
          <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm sm:p-8">
            <p className="text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">Inilah yang oleh banyak psikolog disebut sebagai krisis identitas: manusia kehilangan pusat dirinya. Ia mengenal begitu banyak informasi tentang dunia, tetapi asing terhadap jiwanya sendiri.</p>
            <p className="mt-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">Psikiater Viktor Frankl, melalui <em>Man&apos;s Search for Meaning</em>, menyebut keadaan ini sebagai <em>existential vacuum</em> atau kehampaan eksistensial. Manusia tidak cukup hidup hanya dengan kesenangan, kenyamanan, atau kesuksesan; ia membutuhkan makna hidup. Ketika makna itu hilang, manusia dapat tetap tertawa, bekerja, bahkan tampak berhasil, tetapi di dalam dirinya tumbuh rasa kosong yang sulit dijelaskan.</p>
          </div>
          <div className="mt-8 rounded-2xl bg-[#173c2a] px-6 py-8 text-center text-[#f7f5ef] shadow-sm sm:px-10 sm:py-10">
            <p className="font-serif text-2xl leading-relaxed sm:text-3xl">“Dan janganlah kamu seperti orang-orang yang melupakan Allah, sehingga Allah menjadikan mereka lupa kepada diri mereka sendiri.”</p>
            <p className="mt-5 text-sm text-white/65">Q.S. Al-Hasyr [59]: 19</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Pulang mengenali diri</h2>
        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>Delapan abad sebelum Frankl, Jalaluddin Rumi telah menyampaikan pesan yang sejalan. Akar penderitaan manusia bukan semata-mata kekurangan harta atau kegagalan mencapai cita-cita, melainkan lupa terhadap hakikat dirinya. Manusia terlalu sibuk mencari pengakuan dari luar sehingga melupakan sumber kemuliaan dalam hubungannya dengan Allah.</p>
          <p>Ketika manusia memutus hubungan batinnya dengan Allah, ia perlahan kehilangan kompas kehidupan. Ia mungkin mengetahui pekerjaan, status sosial, bahkan cita-citanya, tetapi tidak lagi mengenal diri sejatinya. Lupa kepada Allah berujung pada lupa kepada diri sendiri: manusia mudah dikuasai rasa takut kehilangan, haus akan pengakuan, dan terus mengejar sesuatu yang tidak pernah benar-benar memuaskan hatinya.</p>
          <p>Rumi tidak memulai perjalanan spiritual dengan pertanyaan, “Apa yang harus kamu miliki?”, tetapi dengan pertanyaan yang lebih mendasar: “Siapakah dirimu sebenarnya?” Jabatan, kekayaan, popularitas, bahkan ilmu pengetahuan hanyalah pakaian; semuanya dapat berubah dan hilang. Yang tetap adalah jiwa yang mengenal asal-usulnya dan kembali kepada Tuhannya.</p>
        </div>
        <blockquote className="mt-10 rounded-2xl border border-[#b18a3c]/25 bg-white/70 px-6 py-8 text-center font-serif text-2xl leading-relaxed text-[#173c2a] shadow-sm sm:px-10 sm:text-3xl">Perjalanan ini bukan untuk menemukan sesuatu yang baru, melainkan perjalanan pulang—kembali mengenali diri yang tertutup oleh kesibukan, ego, dan hiruk-pikuk dunia.</blockquote>
        <p className="mt-8 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">Sebagaimana embun yang mengira dirinya hanya setetes air, padahal sesungguhnya ia berasal dari samudra yang tak bertepi. Nantikan jabaran berikutnya: “Kau bukan setetes air di lautan luas. Kau adalah seluruh lautan yang terpantul dalam setetes air.”</p>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20"><p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#b18a3c]">Letter to Rumi</p><h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Pesan 3 — Perpustakaan Cahaya</h2><div className="mt-8 rounded-2xl border border-[#b18a3c]/20 bg-white/70 p-6 text-base leading-8 text-[#173c2a]/70 shadow-sm sm:p-8 sm:text-lg sm:leading-9"><p>Wahai Maulana, Sang Guru Mulia. Kulanjutkan cerita momen selamatan pembukaan Perpustakaan Cahaya-ku.</p><p className="mt-5">Abah: “Monggo sareng-sareng ndongo, mugi-mugi perpustakaan meniko angsal ridho saking Allah SWT lan saget manfaate kangge masyarakat Welang mriki. Al-Fatihah...”</p><p className="mt-5">Alunan doa terucap khusyuk dan diaminkan seluruh sanak serta kawan yang hadir. Setelahnya, hidangan selamatan dinikmati bersama. Sebentar lagi azan Isya berkumandang; selepas shalat Isya, pintu perpustakaan akan dibuka untuk anak-anak yang telah menanti membaca atau sekadar bermain bersama.</p><p className="mt-6 font-serif text-xl text-[#173c2a]">Wallahu a'lam.</p></div><div className="mt-10 border-t border-[#173c2a]/10 pt-6 text-sm leading-7 text-[#173c2a]/55"><p><strong>Pendukung primer:</strong> Rumi, Jalaluddin Muhammad. (2011). <em>Masnavi-ye Ma’navi</em>. Tehran: Entesharat-e Amir Kabir.</p><p className="mt-2"><strong>Pendukung sekunder:</strong> Rumi, Jalaluddin. (2003). <em>Matsnawi: Syair-syair Sufistik</em>, diterjemahkan oleh Abdul Hadi W.M. Yogyakarta: Pustaka Sufi.</p></div></section>
    </article>
  );
}
