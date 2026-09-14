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

      <section className="bg-[#173c2a] px-5 py-20 text-[#f7f5ef] sm:px-8 sm:py-24">
        <div className="mx-auto max-w-5xl"><h2 className="font-serif text-3xl font-semibold sm:text-5xl">Manusia Lebih Besar daripada Label Sosial</h2><p className="mt-7 max-w-4xl text-base leading-8 text-white/75 sm:text-lg sm:leading-9">Ini adalah lanjutan dari bahasan “Krisis Identitas Manusia Modern”. Kita tidak hanya berbicara tentang profesi atau status, tetapi tentang bagaimana manusia perlahan menyerahkan nilai dirinya kepada sesuatu yang berada di luar dirinya.</p><blockquote className="mt-10 border-y border-[#d9c27a]/35 py-8 text-center font-serif text-2xl leading-relaxed sm:text-4xl">“Jika semua yang melekat padamu hari ini diambil, siapakah engkau?”</blockquote></div>
      </section>

      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Saat label dilepas</h2>
        <div className="mt-8 rounded-2xl border border-[#b18a3c]/20 bg-white/70 p-6 shadow-sm sm:p-8"><p className="text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">Bayangkan sejenak: jika gelarmu hilang, jabatanmu dicabut, usahamu bangkrut, akun media sosialmu lenyap, dan semua orang berhenti memujimu—apakah engkau masih mengenal dirimu?</p><p className="mt-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">Tidak ada yang salah dengan menjadi dokter, guru, pengusaha, atau konten kreator. Profesi adalah amanah, jabatan adalah tanggung jawab, dan popularitas dapat menjadi sarana menyebarkan manfaat. Masalahnya muncul ketika semua itu berubah menjadi identitas utama.</p></div>
        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9"><p>Seorang dokter tetaplah seorang dokter ketika mengenakan jas putih. Namun, ketika ia pulang, melepas jasnya, dan duduk sendiri di ruang tamu, siapakah dirinya? Profesi adalah pekerjaan, bukan hakikat; jabatan adalah amanah, bukan jati diri; popularitas adalah keadaan, bukan nilai kemanusiaan.</p><p>Media sosial diam-diam mengajarkan manusia menjadi merek. Kita menyusun citra, memilih foto terbaik, dan menampilkan hidup seolah semuanya sempurna. Sedikit demi sedikit, kita hidup bukan untuk menjadi diri sendiri, melainkan menjadi versi diri yang paling disukai orang lain.</p></div>
      </section>

      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Martabat bukan popularitas</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2"><div className="rounded-2xl bg-[#e4e7df]/50 p-6 sm:p-8"><h3 className="font-serif text-2xl font-semibold">Yang diukur algoritma</h3><p className="mt-4 leading-8 text-[#173c2a]/70">Algoritma media sosial dirancang untuk mengukur perhatian, bukan nilai seorang manusia. Martabat dan popularitas adalah dua hal yang berbeda, tetapi sering dicampurkan.</p></div><div className="rounded-2xl bg-[#e4e7df]/50 p-6 sm:p-8"><h3 className="font-serif text-2xl font-semibold">Ketika jabatan berlalu</h3><p className="mt-4 leading-8 text-[#173c2a]/70">Banyak orang mengalami kehampaan setelah pensiun bukan semata karena penghasilan hilang, melainkan karena kehilangan jawaban atas pertanyaan: “Siapakah aku sekarang?”</p></div></div>
        <div className="mt-8 rounded-2xl bg-[#173c2a] px-6 py-8 text-center text-[#f7f5ef] shadow-sm sm:px-10"><p className="font-serif text-2xl leading-relaxed sm:text-3xl" dir="rtl">وَلَقَدْ كَرَّمْنَا بَنِي آدَمَ</p><p className="mt-5 text-base leading-8 text-white/75">“Sungguh, Kami telah memuliakan anak cucu Adam.”</p><p className="mt-2 text-sm text-white/60">Q.S. Al-Isra' [17]: 70</p></div>
        <p className="mt-8 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">Allah tidak berkata bahwa yang dimuliakan hanya para raja, orang kaya, atau orang terkenal. Yang Allah muliakan adalah Bani Adam: semua manusia. Kemuliaan itu datang sebelum seseorang memiliki ijazah, pekerjaan, rumah, atau penghargaan. Martabat manusia adalah pemberian Allah, bukan hasil tepuk tangan manusia.</p>
      </section>

      <section className="bg-[#e4e7df]/50 px-5 py-16 sm:px-8 sm:py-20"><div className="mx-auto max-w-5xl"><h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Kostum yang akan dilepas</h2><div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9"><p>Imam Al-Ghazali menjelaskan manusia memiliki jasad dan hakikat batin—qalb, ruh, nafs, dan 'aql. Jasad menjadi sarana hidup di dunia, sedangkan dimensi batin menjadi jalan untuk mengenal Allah.</p><p>Bayangkan seorang aktor yang berganti kostum: menjadi raja, pengemis, tentara, atau hakim. Setelah syuting selesai, semua kostum dilepas. Begitulah profesi, jabatan, dan popularitas: semuanya dapat berubah. Yang hilang ketika kursi jabatan berpindah hanyalah jabatan, bukan kemuliaan manusia.</p></div><blockquote className="mt-10 rounded-2xl border border-[#b18a3c]/25 bg-white/70 px-6 py-8 text-center font-serif text-2xl leading-relaxed text-[#173c2a] shadow-sm sm:text-3xl">Burung yang terlalu lama tinggal di dalam sangkar dapat lupa bahwa ia memiliki sayap untuk terbang.</blockquote><p className="mt-8 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">Kita mungkin mengira diri hanyalah karyawan, pejabat, pedagang, atau seorang yang gagal. Semua itu keadaan, bukan hakikat. Hakikatnya, kita adalah hamba Allah yang dimuliakan, diberi akal, hati, dan kesempatan untuk kembali kepada-Nya.</p></div></section>

      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20"><h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Ruang Sunyi</h2><div className="mt-8 rounded-2xl border border-[#b18a3c]/20 bg-white/70 p-6 shadow-sm sm:p-8"><p className="text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">Hari ini, cobalah memperkenalkan dirimu tanpa menyebut pekerjaan, gelar, harta, atau jabatan. Jika itu sulit dilakukan, mungkin selama ini engkau lebih mengenal pakaianmu daripada jiwamu.</p><div className="mt-8 rounded-xl bg-[#173c2a] px-5 py-6 text-center text-xl leading-[2.1] text-[#f7f5ef] sm:text-2xl" dir="rtl">وَلَقَدْ كَرَّمْنَا بَنِي آدَمَ وَحَمَلْنَاهُمْ فِي الْبَرِّ وَالْبَحْرِ وَرَزَقْنَاهُم مِّنَ الطَّيِّبَاتِ وَفَضَّلْنَاهُمْ عَلَىٰ كَثِيرٍ مِّمَّنْ خَلَقْنَا تَفْضِيلًا</div><p className="mt-6 text-sm italic leading-7 text-[#173c2a]/60">Wa laqad karramna bani adama wa hamalnahum fil-barri wal-bahri wa razaqnahum minat-tayyibati wa faddalnahum 'ala kasirin mimman khalaqna tafdila.</p><p className="mt-5 text-base leading-8 text-[#173c2a]/70">“Dan sungguh, Kami telah memuliakan anak cucu Adam ... dan Kami lebihkan mereka di atas banyak makhluk yang Kami ciptakan dengan kelebihan yang sempurna.”</p><p className="mt-6 font-serif text-xl text-[#173c2a]">Renungkan: “Kemuliaan apa yang telah Allah titipkan kepadaku, dan sudahkah aku menjaganya?”</p></div></section>

      {/* MENGAPA KITA SELALU MERASA KURANG */}
      <section className="bg-[#173c2a] px-5 py-20 text-[#f7f5ef] sm:px-8 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d9c27a]">Krisis Identitas Manusia Modern</span>
          <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-5xl">Mengapa Kita Selalu Merasa Kurang</h2>
          <p className="mt-7 max-w-4xl text-base leading-8 text-white/75 sm:text-lg sm:leading-9">
            Pembahasan ini sebenarnya merupakan bagian dari tema &quot;krisis identitas manusia modern&quot;, karena menyentuh penyakit batin yang banyak dialami manusia hari ini: perasaan tidak pernah cukup. Ulasannya dikembangkan dengan pendekatan psikologi modern, tasawuf Rumi, dan konteks kehidupan digital saat ini.
          </p>
          <div className="mt-8 rounded-2xl border border-[#d9c27a]/20 bg-white/10 p-6 backdrop-blur-sm sm:p-8">
            <p className="text-base leading-8 text-white/90 sm:text-lg sm:leading-9">
              Salah satu kegelisahan terbesar manusia modern adalah perasaan bahwa dirinya belum cukup. Ia merasa kurang sukses, kurang kaya, kurang menarik, kurang dihargai, kurang bahagia, bahkan merasa kurang berharga dibandingkan orang lain.
            </p>
            <p className="mt-4 text-base leading-8 text-white/80 sm:text-lg sm:leading-9">
              Yang menarik, perasaan kurang ini tidak selalu muncul karena seseorang benar-benar kekurangan. Banyak orang yang secara objektif memiliki kehidupan yang baik, tetapi tetap merasa ada sesuatu yang hilang dalam dirinya.
            </p>
            <p className="mt-4 text-base leading-8 text-white/80 sm:text-lg sm:leading-9">
              Seseorang bisa memiliki pekerjaan yang mapan, tetapi merasa gagal karena melihat orang lain yang memiliki jabatan lebih tinggi. Seseorang bisa memiliki keluarga yang harmonis, tetapi merasa hidupnya tidak bahagia ketika melihat kehidupan orang lain di media sosial yang tampak lebih sempurna. Seorang pelajar bisa memperoleh nilai yang baik, tetapi tetap merasa tidak pintar karena membandingkan dirinya dengan teman yang mendapat nilai lebih tinggi.
            </p>
            <p className="mt-6 font-serif text-xl text-[#d9c27a] sm:text-2xl">
              Pertanyaannya: mengapa manusia mudah terjebak dalam perasaan seperti ini?
            </p>
          </div>
        </div>
      </section>

      {/* 1. Perangkap Perbandingan Sosial di Era Digital */}
      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">1</span>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Perangkap Perbandingan Sosial di Era Digital</h2>
        </div>
        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>
            Dalam psikologi modern, fenomena ini dikenal sebagai <em>social comparison</em> atau perbandingan sosial. Konsep ini diperkenalkan oleh psikolog Leon Festinger yang menjelaskan bahwa manusia secara alami memiliki kecenderungan untuk menilai dirinya dengan membandingkan dirinya dengan orang lain.
          </p>
          <p>
            Pada tingkat tertentu, perbandingan sosial memiliki fungsi positif. Seseorang dapat belajar dari orang lain, mendapatkan inspirasi, dan memperbaiki dirinya. Melihat keberhasilan orang lain dapat menjadi motivasi untuk berkembang.
          </p>
          <p>
            Namun, masalah muncul ketika perbandingan tersebut menjadi kebiasaan yang tidak sehat. Seseorang mulai menjadikan kehidupan orang lain sebagai standar untuk mengukur nilai dirinya. Di sinilah media sosial memberikan pengaruh yang sangat besar.
          </p>
          <p>
            Dahulu manusia hanya membandingkan dirinya dengan orang-orang yang ada di lingkungan dekatnya: tetangga, teman sekolah, atau rekan kerja. Namun sekarang, melalui layar ponsel, seseorang dapat membandingkan dirinya dengan ribuan bahkan jutaan orang setiap hari.
          </p>
        </div>

        <div className="mt-8 rounded-2xl border border-[#b18a3c]/20 bg-white/70 p-6 shadow-sm sm:p-8">
          <h3 className="font-serif text-xl font-semibold text-[#173c2a]">Setiap hari kita melihat:</h3>
          <ul className="mt-4 space-y-3 text-base leading-8 text-[#173c2a]/75 sm:text-lg">
            <li className="flex items-start"><span className="mr-3 text-[#b18a3c]">✦</span> Orang yang memamerkan keberhasilan kariernya</li>
            <li className="flex items-start"><span className="mr-3 text-[#b18a3c]">✦</span> Pasangan yang menunjukkan keharmonisan hubungan</li>
            <li className="flex items-start"><span className="mr-3 text-[#b18a3c]">✦</span> Orang yang menampilkan perjalanan mewah</li>
            <li className="flex items-start"><span className="mr-3 text-[#b18a3c]">✦</span> Seseorang yang terlihat selalu bahagia</li>
            <li className="flex items-start"><span className="mr-3 text-[#b18a3c]">✦</span> Figur publik yang tampak memiliki kehidupan sempurna</li>
          </ul>
        </div>

        <div className="mt-8 rounded-2xl bg-[#e4e7df]/60 p-6 sm:p-8">
          <p className="text-base leading-8 text-[#173c2a]/80 sm:text-lg sm:leading-9">
            Masalahnya adalah manusia sering membandingkan realitas hidupnya yang lengkap dengan potongan terbaik kehidupan orang lain.
          </p>
          <p className="mt-4 text-base leading-8 text-[#173c2a]/80 sm:text-lg sm:leading-9">
            Kita melihat keberhasilan seseorang, tetapi tidak melihat perjuangannya. Kita melihat senyum seseorang, tetapi tidak mengetahui kesedihan yang mungkin ia sembunyikan. Kita melihat pencapaian seseorang, tetapi tidak mengetahui harga yang harus ia bayar. Akibatnya, banyak manusia merasa kalah dalam perlombaan yang sebenarnya tidak pernah mereka ikuti.
          </p>
        </div>
      </section>

      {/* 2. Ilusi Bahagia yang Dibangun oleh Dunia Modern */}
      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">2</span>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Ilusi Bahagia yang Dibangun oleh Dunia Modern</h2>
        </div>
        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>
            Salah satu penyebab manusia selalu merasa kurang adalah karena dunia modern sering mengajarkan bahwa kebahagiaan berada di luar diri.
          </p>
        </div>

        <div className="mt-6 rounded-2xl border border-[#b18a3c]/20 bg-white/70 p-6 shadow-sm sm:p-8">
          <h3 className="font-serif text-xl font-semibold text-[#173c2a]">Manusia diberi pesan bahwa ia akan bahagia jika memiliki lebih banyak:</h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-[#173c2a]/10 bg-[#f7f5ef] p-4 text-center font-medium text-[#173c2a]/80">Lebih banyak uang</div>
            <div className="rounded-xl border border-[#173c2a]/10 bg-[#f7f5ef] p-4 text-center font-medium text-[#173c2a]/80">Lebih banyak pengakuan</div>
            <div className="rounded-xl border border-[#173c2a]/10 bg-[#f7f5ef] p-4 text-center font-medium text-[#173c2a]/80">Lebih banyak pengikut</div>
            <div className="rounded-xl border border-[#173c2a]/10 bg-[#f7f5ef] p-4 text-center font-medium text-[#173c2a]/80">Lebih banyak penghargaan</div>
            <div className="rounded-xl border border-[#173c2a]/10 bg-[#f7f5ef] p-4 text-center font-medium text-[#173c2a]/80 sm:col-span-2 lg:col-span-1">Lebih banyak barang</div>
          </div>
        </div>

        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>Akhirnya, kehidupan berubah menjadi perlombaan tanpa garis akhir.</p>
          <p>
            Ketika seseorang berhasil mendapatkan sesuatu, kebahagiaan itu hanya bertahan sementara. Setelah itu muncul keinginan baru. Saat seseorang membeli ponsel terbaru, beberapa bulan kemudian muncul keinginan memiliki model yang lebih baru. Ketika seseorang mendapatkan promosi jabatan, ia mulai mengejar posisi yang lebih tinggi. Ketika seseorang memperoleh popularitas, ia mulai takut kehilangan perhatian publik.
          </p>
        </div>

        <div className="mt-8 rounded-2xl bg-[#173c2a] px-6 py-6 text-center text-[#f7f5ef] sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d9c27a]">Siklus Tak Berujung</p>
          <p className="mt-3 font-serif text-xl sm:text-2xl">
            Menginginkan <span className="text-[#d9c27a]">→</span> Mendapatkan <span className="text-[#d9c27a]">→</span> Merasa Puas Sebentar <span className="text-[#d9c27a]">→</span> Menginginkan Lagi
          </p>
        </div>

        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>
            Dalam tradisi tasawuf, keadaan ini disebut sebagai keterikatan hati kepada sesuatu selain Allah. Bukan berarti manusia tidak boleh memiliki dunia, tetapi masalah muncul ketika dunia menjadi sumber utama nilai dirinya.
          </p>
        </div>

        <div className="mt-6 rounded-2xl border border-[#b18a3c]/20 bg-white/70 p-6 shadow-sm">
          <p className="font-serif text-lg text-[#173c2a]/80">Manusia mulai berpikir:</p>
          <blockquote className="mt-3 space-y-2 border-l-2 border-[#b18a3c] pl-4 italic text-[#173c2a]/70">
            <p>&quot;Aku berharga karena pekerjaanku.&quot;</p>
            <p>&quot;Aku penting karena banyak orang mengenalku.&quot;</p>
            <p>&quot;Aku berhasil karena memiliki apa yang tidak dimiliki orang lain.&quot;</p>
          </blockquote>
          <p className="mt-4 text-base leading-8 text-[#173c2a]/70">Padahal semua itu adalah sesuatu yang dapat berubah.</p>
        </div>
      </section>

      {/* 3. Rumi dan Jalan Kembali ke Dalam Diri */}
      <section className="bg-[#e4e7df]/50 px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center space-x-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">3</span>
            <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Rumi dan Jalan Kembali ke Dalam Diri</h2>
          </div>
          <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
            <p>
              Di tengah budaya modern yang mengajarkan manusia untuk terus mencari keluar, Jalaluddin Rumi menawarkan arah yang berbeda: kembali ke dalam diri.
            </p>
            <p>
              Bagi Rumi, manusia sering mencari kebahagiaan di tempat yang salah. Ia mencari cahaya di luar dirinya, padahal Allah telah menanamkan cahaya itu di dalam jiwa.
            </p>
            <p>
              Namun, kembali kepada diri bukan berarti menjadi manusia yang egois atau memuja diri sendiri. Justru sebaliknya, perjalanan mengenal diri adalah jalan untuk menyadari keterbatasan diri dan menemukan kebesaran Allah.
            </p>
          </div>

          <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm sm:p-8">
            <h3 className="font-serif text-2xl font-semibold text-[#173c2a]">Cermin yang Memantulkan Cahaya</h3>
            <p className="mt-4 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
              Rumi melihat manusia seperti sebuah cermin. Cermin itu berharga bukan karena dirinya sendiri, tetapi karena ia mampu memantulkan cahaya.
            </p>
            <p className="mt-4 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
              Begitu pula manusia. Kemuliaannya bukan berasal dari status sosial, kekayaan, atau pujian manusia, tetapi karena di dalam dirinya terdapat tanda-tanda kebesaran Allah.
            </p>
          </div>

          <div className="mt-8 rounded-2xl bg-[#173c2a] px-6 py-8 text-[#f7f5ef] shadow-sm sm:px-10">
            <p className="text-center font-serif text-xl sm:text-2xl text-[#d9c27a]">
              Karena itu, Rumi mengajak manusia bertanya: &quot;Jika semua yang melekat padaku hilang, siapakah aku?&quot;
            </p>
            <ul className="mt-6 space-y-3 text-center text-base text-white/80 sm:text-lg">
              <li>Jika pekerjaan hilang, apakah aku kehilangan nilai diriku?</li>
              <li>Jika popularitas hilang, apakah aku kehilangan harga diriku?</li>
              <li>Jika manusia berhenti memuji, apakah aku masih mampu mencintai diriku?</li>
            </ul>
            <p className="mt-6 text-center text-sm text-white/60">Pertanyaan-pertanyaan ini membawa manusia menuju kesadaran yang lebih dalam.</p>
          </div>
        </div>
      </section>

      {/* 4. Manusia sebagai Ayat Allah */}
      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">4</span>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Manusia sebagai Ayat Allah</h2>
        </div>

        <div className="mt-8 rounded-2xl bg-[#173c2a] px-6 py-8 text-center text-[#f7f5ef] shadow-sm sm:px-10">
          <p className="font-serif text-2xl leading-relaxed sm:text-3xl" dir="rtl">
            وَفِي أَنفُسِكُمْ ۚ أَفَلَا تُبْصِرُونَ
          </p>
          <p className="mt-5 text-base leading-8 text-white/75">
            “Dan pada dirimu sendiri terdapat tanda-tanda (kebesaran Allah). Maka apakah kamu tidak memperhatikannya?”
          </p>
          <p className="mt-2 text-sm text-white/60">Q.S. Az-Zariyat [51]: 21</p>
        </div>

        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>
            Ayat ini mengandung pesan yang sangat mendalam. Allah tidak hanya menunjukkan tanda-tanda kebesaran-Nya melalui alam semesta yang luas, tetapi juga melalui diri manusia itu sendiri.
          </p>
          <p>
            Tubuh manusia, akal, hati, kesadaran, kemampuan mencintai, kemampuan memahami kebenaran, semuanya merupakan tanda kebesaran Allah.
          </p>
          <p>
            Namun manusia modern sering mengenal dunia luar lebih banyak daripada dirinya sendiri.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-[#173c2a]/10 bg-white/70 p-6 shadow-sm">
            <p className="text-base leading-8 text-[#173c2a]/70">Ia mengetahui tren terbaru dan berita terkini kehidupan orang lain, tetapi tidak memahami isi hatinya sendiri.</p>
          </div>
          <div className="rounded-2xl border border-[#173c2a]/10 bg-white/70 p-6 shadow-sm">
            <p className="text-base leading-8 text-[#173c2a]/70">Ia mampu mengoperasikan teknologi yang sangat canggih, tetapi kesulitan memahami kegelisahan dalam jiwanya.</p>
          </div>
          <div className="rounded-2xl border border-[#173c2a]/10 bg-white/70 p-6 shadow-sm">
            <p className="text-base leading-8 text-[#173c2a]/70">Ia mampu berbicara dengan ribuan orang melalui internet, tetapi tidak mampu berdialog dengan dirinya sendiri dalam keheningan.</p>
          </div>
        </div>

        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>
            Karena itu, Al-Qur&apos;an mengajak manusia melakukan muhasabah, yaitu proses melihat ke dalam diri, mengevaluasi hati, niat, dan arah kehidupan. Muhasabah bukan berarti menyalahkan diri, tetapi mengenali diri dengan jujur.
          </p>
        </div>

        <div className="mt-6 rounded-2xl border border-[#b18a3c]/20 bg-white/70 p-6 shadow-sm">
          <p className="font-serif text-lg text-[#173c2a]">Dalam muhasabah, seseorang bertanya:</p>
          <ul className="mt-3 list-inside list-disc space-y-2 italic text-[#173c2a]/75">
            <li>&quot;Apa sebenarnya yang aku cari dalam hidup ini?&quot;</li>
            <li>&quot;Apakah aku mengejar sesuatu karena kebutuhan atau karena ingin mendapat pengakuan?&quot;</li>
            <li>&quot;Apakah hatiku semakin dekat kepada Allah atau semakin jauh?&quot;</li>
          </ul>
        </div>
      </section>

      {/* 5. Menemukan Cahaya yang Hilang */}
      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">5</span>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Menemukan Cahaya yang Hilang</h2>
        </div>

        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>
            Bagi Rumi, manusia bukan makhluk yang kosong. Di dalam dirinya terdapat potensi besar karena ia membawa percikan rahmat Allah. Masalah manusia bukan karena ia tidak memiliki cahaya, tetapi karena cahaya itu tertutup oleh debu kehidupan: kesombongan, ketakutan, iri hati, kecemasan, dan keinginan untuk selalu diakui.
          </p>
          <p>
            Seperti matahari yang tetap bersinar meskipun tertutup awan, cahaya batin manusia tetap ada meskipun tertutup oleh berbagai kegelisahan. Tugas manusia bukan menciptakan cahaya baru, tetapi membersihkan penghalang agar cahaya itu kembali terlihat.
          </p>
        </div>

        <blockquote className="mt-10 rounded-2xl border border-[#b18a3c]/25 bg-[#173c2a] px-6 py-8 text-center text-[#f7f5ef] shadow-sm sm:px-10">
          <p className="font-serif text-xl leading-relaxed text-[#d9c27a] sm:text-2xl">
            &quot;Jangan menghabiskan seluruh hidup mencari nilai dirimu dari mata manusia, karena manusia selalu berubah. Carilah dirimu dalam pandangan Allah, karena di sanalah engkau menemukan nilai yang tidak bergantung pada pujian maupun penolakan dunia.&quot;
          </p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">— Pesan Rumi untuk Manusia Modern</p>
        </blockquote>

        <div className="mt-8 rounded-2xl border border-[#173c2a]/10 bg-white/70 p-6 text-base leading-8 text-[#173c2a]/75 shadow-sm sm:p-8 sm:text-lg sm:leading-9">
          <p>
            Sebab manusia bukan sekadar apa yang ia miliki. Manusia bukan sekadar apa yang ia capai. Manusia adalah jiwa yang sedang melakukan perjalanan pulang menuju sumber cahaya.
          </p>
          <p className="mt-6 font-serif text-xl font-semibold text-[#173c2a]">Wallahu a&apos;lam</p>
        </div>
      </section>

      {/* MANUSIA SEBAGAI MIKROKOSMOS (al-'Ālam al-Ṣaghīr) */}
      <section className="bg-[#173c2a] px-5 py-20 text-[#f7f5ef] sm:px-8 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d9c27a]">Konsep Tasawuf</span>
          <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-5xl">
            Manusia sebagai Mikrokosmos <span className="mt-2 block font-normal italic text-[#d9c27a]/90 text-2xl sm:inline sm:mt-0">(al-&apos;Ālam al-Ṣaghīr)</span>
          </h2>
          <p className="mt-7 max-w-4xl text-base leading-8 text-white/75 sm:text-lg sm:leading-9">
            Masih dengan Ngaji Rumi 8 “Burung Jiwa”, bahasan kita kali ini adalah sebuah gagasan indah dalam tasawuf, yaitu tentang konsep &quot;manusia sebagai mikrokosmos&quot; (al-&apos;ālam al-ṣaghīr). Ulasannya disusun secara bertahap: mulai dari makna filosofisnya, landasan Al-Qur&apos;an, pandangan para sufi, hingga relevansinya dengan kehidupan masa kini.
          </p>

          <blockquote className="mt-10 border-y border-[#d9c27a]/35 py-8 text-center font-serif text-2xl leading-relaxed text-[#d9c27a] sm:text-4xl">
            “Kau bukan setetes air di lautan luas. Kau adalah seluruh lautan yang terpantul dalam setetes air.”
          </blockquote>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-[#d9c27a]/20 bg-white/10 p-6 backdrop-blur-sm sm:p-8">
              <h3 className="font-serif text-2xl font-semibold text-[#d9c27a]">al-&apos;Ālam al-Ṣaghīr</h3>
              <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-white/60">Mikrokosmos (Alam Kecil)</p>
              <p className="mt-4 leading-8 text-white/80">
                Merujuk pada diri manusia. Dalam diri manusia terdapat pantulan unsur-unsur yang Allah hamparkan di seluruh alam semesta—menjadi semacam &quot;ringkasan&quot; dari ciptaan-Nya.
              </p>
            </div>
            <div className="rounded-2xl border border-[#d9c27a]/20 bg-white/10 p-6 backdrop-blur-sm sm:p-8">
              <h3 className="font-serif text-2xl font-semibold text-[#d9c27a]">al-&apos;Ālam al-Kabīr</h3>
              <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-white/60">Makrokosmos (Alam Besar)</p>
              <p className="mt-4 leading-8 text-white/80">
                Merujuk pada jagat raya, lautan, gunung, dan galaksi. Meskipun makrokosmos tampak sangat luas secara fisik, hakikat rahasia Ilahi diringkas di dalam mikrokosmos (jiwa manusia).
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-6 text-base leading-8 text-white/80 sm:text-lg sm:leading-9">
            <p>
              Maksudnya bukan bahwa tubuh manusia lebih besar daripada gunung, lautan, atau galaksi. Yang dimaksud adalah bahwa dalam diri manusia terdapat pantulan unsur-unsur yang Allah hamparkan di seluruh alam semesta. Manusia menjadi semacam &quot;ringkasan&quot; dari ciptaan-Nya.
            </p>
            <p>
              Tubuh manusia tersusun dari unsur-unsur bumi. Ia membutuhkan air untuk hidup, udara untuk bernapas, cahaya untuk melihat, dan waktu untuk bertumbuh. Namun manusia juga dianugerahi akal untuk berpikir, hati untuk mencintai, nurani untuk membedakan yang benar dan yang salah, serta ruh yang selalu merindukan Penciptanya.
            </p>
            <p>
              Karena itulah manusia bukan sekadar makhluk biologis. Ia adalah makhluk jasmani sekaligus ruhani. Ia hidup di bumi, tetapi hatinya selalu mengarah ke langit.
            </p>
          </div>

          <div className="mt-10 rounded-2xl border border-[#d9c27a]/25 bg-white/10 p-6 text-center sm:p-8">
            <p className="font-serif text-2xl leading-relaxed text-[#f7f5ef] sm:text-3xl" dir="rtl">
              سَنُرِيهِمْ آيَاتِنَا فِي الْآفَاقِ وَفِي أَنفُسِهِمْ حَتَّىٰ يَتَبَيَّنَ لَهُمْ أَنَّهُ الْحَقُّ
            </p>
            <p className="mt-5 text-base leading-8 text-white/80 sm:text-lg">
              “Kami akan memperlihatkan kepada mereka tanda-tanda (kekuasaan) Kami di segenap penjuru dan pada diri mereka sendiri, sehingga jelas bagi mereka bahwa Al-Qur&apos;an itu benar.”
            </p>
            <p className="mt-2 text-sm text-[#d9c27a]">Q.S. Fussilat [41]: 53</p>
            <p className="mt-6 text-left text-base leading-8 text-white/75 sm:text-lg sm:leading-9">
              Ayat ini menunjukkan bahwa alam semesta dan diri manusia sama-sama merupakan ayat, yakni tanda-tanda yang mengarahkan manusia kepada Allah. Gunung, lautan, dan bintang berbicara tentang kebesaran-Nya. Demikian pula hati, akal, kasih sayang, dan kesadaran manusia.
            </p>
          </div>
        </div>
      </section>

      {/* 1. Manusia: Makhluk Kecil dengan Kapasitas Besar */}
      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">1</span>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Manusia: Makhluk Kecil dengan Kapasitas Besar</h2>
        </div>
        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>
            Ironisnya, manusia modern sering memandang dirinya hanya dari ukuran-ukuran lahiriah. Nilai seseorang ditentukan oleh profesi, gelar akademik, saldo rekening, jumlah pengikut di media sosial, atau pencapaian karier. Ketika ukuran-ukuran itu hilang, ia merasa dirinya ikut hilang.
          </p>
          <p>
            Padahal, semua itu hanyalah atribut yang melekat sementara. Nilai terdalam manusia tidak terletak pada apa yang dimilikinya, tetapi pada siapa dirinya di hadapan Allah.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-[#b18a3c]/20 bg-white/70 p-6 shadow-sm">
            <h3 className="font-serif text-xl font-semibold text-[#173c2a]">Atribut Yang Sementara</h3>
            <p className="mt-3 leading-8 text-[#173c2a]/70">
              Seorang dokter tetap manusia ketika pensiun. Seorang pengusaha tetap manusia ketika usahanya bangkrut. Seorang atlet tetap manusia ketika tubuhnya tidak lagi mampu bertanding. Bahkan seorang tokoh terkenal tetap manusia ketika dunia berhenti mengingat namanya.
            </p>
          </div>
          <div className="rounded-2xl border border-[#b18a3c]/20 bg-white/70 p-6 shadow-sm">
            <h3 className="font-serif text-xl font-semibold text-[#173c2a]">Fondasi yang Kekal</h3>
            <p className="mt-3 leading-8 text-[#173c2a]/70">
              Jika identitas seseorang runtuh hanya karena kehilangan jabatan atau popularitas, berarti selama ini ia membangun dirinya di atas sesuatu yang memang tidak kekal. Rumi mengingatkan bahwa hakikat manusia jauh lebih luas daripada semua label itu.
            </p>
          </div>
        </div>

        <p className="mt-8 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          Di balik nama, pekerjaan, status sosial, bahkan usia, terdapat jiwa yang diciptakan untuk mengenal Tuhannya.
        </p>
      </section>

      {/* 2. Lautan di Dalam Diri */}
      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">2</span>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Lautan di Dalam Diri</h2>
        </div>
        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>
            Mengapa Rumi menggunakan perumpamaan lautan? Lautan tampak tenang di permukaan, tetapi menyimpan kehidupan yang sangat kaya di kedalamannya. Demikian pula manusia.
          </p>
          <p>
            Sering kali seseorang hanya mengenal permukaan dirinya: nama, pekerjaan, kebiasaan, kesukaan, atau kepribadian. Namun di kedalaman jiwanya terdapat rasa cinta, kerinduan akan makna, pencarian kebenaran, kemampuan berkorban, kepekaan terhadap keindahan, dan kerinduan untuk kembali kepada Allah. Sayangnya, kehidupan modern membuat banyak orang hanya sibuk mengurus &quot;permukaan&quot;.
          </p>
        </div>

        <div className="mt-8 rounded-2xl bg-[#e4e7df]/60 p-6 sm:p-8">
          <h3 className="font-serif text-2xl font-semibold text-[#173c2a]">Paradoks Kesibukan Lahiriah</h3>
          <div className="mt-6 space-y-4 text-base leading-8 text-[#173c2a]/80 sm:text-lg">
            <p>✦ Kita menghabiskan waktu mempercantik penampilan, tetapi jarang memperindah hati.</p>
            <p>✦ Kita memperbarui telepon genggam setiap beberapa tahun, tetapi membiarkan hati dipenuhi iri, dengki, kemarahan, dan kegelisahan selama bertahun-tahun.</p>
            <p>✦ Kita rajin memperbarui profil media sosial, tetapi lupa memperbarui niat hidup.</p>
          </div>
          <p className="mt-6 border-t border-[#173c2a]/10 pt-4 font-serif text-lg text-[#173c2a]">
            Akibatnya, manusia mengenal hampir seluruh dunia, tetapi asing terhadap dirinya sendiri.
          </p>
        </div>
      </section>

      {/* 3. Menjelajah ke Dalam Diri */}
      <section className="bg-[#e4e7df]/50 px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center space-x-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">3</span>
            <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Menjelajah ke Dalam Diri</h2>
          </div>
          <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
            <p>
              Peradaban modern mendorong manusia menjelajah keluar. Kita mampu mengirim wahana ke luar angkasa, memetakan dasar samudra, dan mengembangkan kecerdasan buatan. Semua itu merupakan pencapaian luar biasa.
            </p>
            <p>
              Namun Rumi mengingatkan bahwa ada satu perjalanan yang sering dilupakan: perjalanan ke dalam diri. Banyak orang mengetahui keadaan ekonomi dunia, tetapi tidak mengetahui mengapa ia mudah marah. Ia memahami teknologi terbaru, tetapi tidak memahami mengapa hatinya selalu gelisah. Ia mengenal ribuan wajah melalui media sosial, tetapi tidak pernah benar-benar mengenal dirinya sendiri.
            </p>
          </div>

          <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm sm:p-8">
            <h3 className="font-serif text-2xl font-semibold text-[#173c2a]">Pintu Menuju Ma&apos;rifatullah</h3>
            <p className="mt-4 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
              Menurut para sufi, mengenal diri adalah pintu menuju pengenalan kepada Allah. Ketika seseorang menyadari kelemahan, keterbatasan, sekaligus potensi yang Allah titipkan dalam dirinya, ia akan menjadi lebih rendah hati dan lebih dekat kepada Sang Pencipta.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Menjadi Cermin Nama-Nama Allah */}
      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">4</span>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Menjadi Cermin Nama-Nama Allah</h2>
        </div>
        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>
            Para ulama tasawuf menjelaskan bahwa manusia memiliki potensi untuk memantulkan sebagian dari asmaul husna dalam perilakunya.
          </p>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-[#b18a3c]/20 bg-white/70 p-5 text-center shadow-sm">
            <span className="font-serif text-xl font-bold text-[#b18a3c]">Ar-Rahmān</span>
            <p className="mt-2 text-sm text-[#173c2a]/70">Memantulkan sifat kasih sayang saat bersikap penyayang.</p>
          </div>
          <div className="rounded-2xl border border-[#b18a3c]/20 bg-white/70 p-5 text-center shadow-sm">
            <span className="font-serif text-xl font-bold text-[#b18a3c]">Al-&apos;Adl</span>
            <p className="mt-2 text-sm text-[#173c2a]/70">Memantulkan jejak keadilan saat berlaku adil.</p>
          </div>
          <div className="rounded-2xl border border-[#b18a3c]/20 bg-white/70 p-5 text-center shadow-sm">
            <span className="font-serif text-xl font-bold text-[#b18a3c]">Al-&apos;Afūw</span>
            <p className="mt-2 text-sm text-[#173c2a]/70">Memantulkan pemaafan saat memaafkan sesama.</p>
          </div>
          <div className="rounded-2xl border border-[#b18a3c]/20 bg-white/70 p-5 text-center shadow-sm">
            <span className="font-serif text-xl font-bold text-[#b18a3c]">Al-&apos;Alīm</span>
            <p className="mt-2 text-sm text-[#173c2a]/70">Menghormati Yang Maha Mengetahui saat menuntut ilmu.</p>
          </div>
        </div>

        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>
            Tentu manusia tidak pernah memiliki sifat-sifat tersebut secara mutlak sebagaimana Allah. Akan tetapi, Allah memerintahkan manusia untuk menghiasi dirinya dengan akhlak yang mencerminkan kemuliaan nama-nama-Nya.
          </p>
          <p>
            Inilah salah satu makna terdalam bahwa manusia adalah &quot;lautan dalam setetes air&quot;. Dalam dirinya tersimpan potensi yang jauh lebih besar daripada yang tampak oleh mata.
          </p>
        </div>
      </section>

      {/* 5. Pesan bagi Manusia Modern */}
      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">5</span>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Pesan bagi Manusia Modern</h2>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-[#173c2a]/10 bg-white/70 p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase text-[#b18a3c]">Di zaman membangun citra</p>
            <p className="mt-2 font-serif text-xl text-[#173c2a]/80 leading-8">Rumi mengajak kita membangun jiwa.</p>
          </div>
          <div className="rounded-2xl border border-[#173c2a]/10 bg-white/70 p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase text-[#b18a3c]">Di zaman berlomba terkenal</p>
            <p className="mt-2 font-serif text-xl text-[#173c2a]/80 leading-8">Rumi mengingatkan pentingnya menjadi terang.</p>
          </div>
          <div className="rounded-2xl border border-[#173c2a]/10 bg-white/70 p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase text-[#b18a3c]">Di zaman mengumpulkan pengikut</p>
            <p className="mt-2 font-serif text-xl text-[#173c2a]/80 leading-8">Rumi mengajak kita kembali mengikuti petunjuk Allah.</p>
          </div>
        </div>

        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>
            Karena itu, jangan pernah meremehkan dirimu hanya karena merasa kecil di tengah dunia yang begitu luas. Engkau memang hanya setetes air jika memandang dirimu dengan ukuran materi. Namun jika engkau memandang dirimu sebagai makhluk yang diciptakan Allah, yang diberi akal, hati, ruh, amanah, dan kemampuan mengenal-Nya, maka engkau adalah sebuah alam kecil yang memantulkan kebesaran alam semesta.
          </p>
          <p>
            Setiap manusia membawa kemungkinan untuk menjadi cermin cahaya Ilahi. Persoalannya bukan apakah cahaya itu ada, melainkan apakah kita bersedia membersihkan hati agar pantulannya tampak semakin jernih.
          </p>
          <p>
            Itulah sebabnya Rumi berkata bahwa engkau bukan sekadar setetes air di lautan. Engkau adalah seluruh lautan yang terpantul dalam setetes air.
          </p>
        </div>

        <blockquote className="mt-10 rounded-2xl border border-[#b18a3c]/25 bg-[#173c2a] px-6 py-8 text-center text-[#f7f5ef] shadow-sm sm:px-10">
          <p className="font-serif text-2xl text-[#d9c27a]">Wallahu a&apos;lam</p>
          <p className="mt-4 text-base italic text-white/80 sm:text-lg">
            Berikutnya: Tentang konsep Insān Kāmil (Manusia Sempurna) sebagai puncak dari gagasan manusia sebagai mikrokosmos.
          </p>
        </blockquote>
      </section>

      {/* INSĀN KĀMIL: MENJADI MANUSIA YANG UTUH */}
      <section className="bg-[#173c2a] px-5 py-20 text-[#f7f5ef] sm:px-8 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d9c27a]">Lanjutan Ngaji Rumi 8 — Burung Jiwa</span>
          <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-5xl">INSĀN KĀMIL: Menjadi Manusia yang Utuh</h2>
          <p className="mt-7 max-w-4xl text-base leading-8 text-white/75 sm:text-lg sm:leading-9">Pada post sebelumnya telah kita bahas bahwa manusia adalah mikrokosmos (al-&apos;ālam al-ṣaghīr). Berikutnya kami ajak para pembaca memahami untuk apa potensi itu diberikan. Jawabannya adalah: agar manusia bertumbuh menuju Insān Kāmil, yaitu manusia yang utuh.</p>
          <blockquote className="mt-10 border-y border-[#d9c27a]/35 py-8 text-center font-serif text-2xl leading-relaxed text-[#d9c27a] sm:text-4xl">“Bukan menjadi manusia yang dipuji dunia, tetapi menjadi manusia yang hidupnya memantulkan cahaya akhlak Rasulullah.”</blockquote>
        </div>
      </section>

      {/* 1. Insān Kāmil: Menjadi Manusia yang Utuh */}
      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">1</span>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Insān Kāmil: Menjadi Manusia yang Utuh</h2>
        </div>
        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>Setelah memahami bahwa manusia adalah mikrokosmos — sebuah &quot;alam kecil&quot; yang memantulkan kebesaran Allah — muncul pertanyaan yang lebih mendasar: untuk apa semua potensi itu diberikan? Apakah akal hanya untuk mengumpulkan ilmu? Apakah hati hanya untuk merasakan cinta? Apakah hidup hanya tentang bekerja, mengumpulkan harta, lalu menua?</p>
          <p>Dalam pandangan tasawuf, seluruh potensi yang Allah titipkan kepada manusia memiliki satu tujuan besar: membentuk Insān Kāmil, yaitu manusia yang mencapai kematangan lahir dan batin sehingga kehidupannya menjadi cermin nilai-nilai Ilahi.</p>
          <p>Istilah Insān Kāmil sering diterjemahkan sebagai &quot;manusia sempurna&quot;. Namun kata &quot;sempurna&quot; di sini kerap disalahpahami. Kesempurnaan yang dimaksud bukan berarti tanpa dosa, tanpa kelemahan, atau tidak pernah salah.</p>
        </div>
        <div className="mt-8 rounded-2xl border border-[#b18a3c]/20 bg-white/70 p-6 shadow-sm sm:p-8">
          <p className="text-base leading-8 text-[#173c2a]/75 sm:text-lg sm:leading-9">Yang dimaksud adalah manusia yang terus bertumbuh menuju kesempurnaan akhlak, kejernihan hati, kedewasaan berpikir, dan kedekatan kepada Allah. Ia tidak berhenti pada keberhasilan duniawi, tetapi menjadikan seluruh hidupnya sebagai jalan menuju keridaan-Nya.</p>
          <p className="mt-4 border-t border-[#173c2a]/10 pt-4 font-serif text-lg text-[#173c2a]">Kesempurnaan mutlak hanyalah milik Allah.</p>
        </div>
      </section>

      {/* 2. Nabi Muhammad SAW: Teladan Insān Kāmil */}
      <section className="bg-[#e4e7df]/50 px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center space-x-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">2</span>
            <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Nabi Muhammad SAW: Teladan Insān Kāmil</h2>
          </div>
          <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
            <p>Dalam tradisi Islam, puncak teladan Insān Kāmil adalah Nabi Muhammad SAW. Beliau bukan hanya berhasil membangun masyarakat yang beradab, tetapi juga menunjukkan bagaimana kekuatan spiritual melahirkan kelembutan, keadilan, keberanian, dan kasih sayang.</p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-[#173c2a]/10 bg-white/70 p-6 shadow-sm"><p className="text-base leading-8 text-[#173c2a]/70">Beliau menangis ketika berdoa, tetapi tetap tegar ketika memimpin.</p></div>
            <div className="rounded-2xl border border-[#173c2a]/10 bg-white/70 p-6 shadow-sm"><p className="text-base leading-8 text-[#173c2a]/70">Beliau memaafkan musuh yang pernah menyakitinya, tetapi tetap teguh membela kebenaran.</p></div>
            <div className="rounded-2xl border border-[#173c2a]/10 bg-white/70 p-6 shadow-sm"><p className="text-base leading-8 text-[#173c2a]/70">Beliau hidup sederhana, meskipun memiliki kedudukan yang sangat mulia.</p></div>
          </div>
          <blockquote className="mt-10 rounded-2xl border border-[#b18a3c]/25 bg-white/70 px-6 py-8 text-center font-serif text-2xl leading-relaxed text-[#173c2a] shadow-sm sm:text-3xl">Kuat tanpa menjadi keras, rendah hati tanpa kehilangan wibawa, dekat kepada Allah tanpa menjauh dari persoalan manusia.</blockquote>
          <p className="mt-8 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">Karena itu, tujuan tasawuf bukan menciptakan manusia yang lari dari dunia, melainkan manusia yang menghadirkan nilai-nilai Allah di tengah kehidupan dunia.</p>
        </div>
      </section>

      {/* 3. Insān Kāmil Bukan Manusia Super */}
      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">3</span>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Insān Kāmil Bukan Manusia Super</h2>
        </div>
        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>Di era modern, kata &quot;sempurna&quot; sering dikaitkan dengan penampilan fisik, prestasi, atau kesuksesan. Seseorang dianggap berhasil jika memiliki karier cemerlang, rumah mewah, kendaraan mahal, tubuh ideal, atau jutaan pengikut di media sosial.</p>
          <p>Budaya digital melahirkan tekanan baru: setiap orang merasa harus selalu tampak bahagia, produktif, dan sukses. Foto dipilih dengan cermat, video diedit sedemikian rupa, kisah keberhasilan jarang memperlihatkan kegagalan di baliknya. Tanpa disadari, banyak orang mengejar citra &quot;manusia sempurna&quot; yang sebenarnya tidak nyata.</p>
        </div>
        <div className="mt-8 rounded-2xl bg-[#e4e7df]/60 p-6 sm:p-8">
          <p className="text-base leading-8 text-[#173c2a]/80 sm:text-lg sm:leading-9">Akibatnya, ketika melakukan kesalahan mereka merasa gagal sebagai manusia. Ketika mengalami kegagalan, mereka kehilangan harga diri. Ketika hidup tidak sesuai harapan, mereka menganggap dirinya tidak berharga.</p>
          <p className="mt-4 border-t border-[#173c2a]/10 pt-4 font-serif text-lg text-[#173c2a]">Tasawuf menawarkan cara pandang berbeda: Insān Kāmil bukan manusia yang tidak pernah jatuh. Insān Kāmil adalah manusia yang setiap kali jatuh, ia belajar, bertobat, bangkit, dan semakin mengenal Allah. Kesempurnaannya terletak pada arah perjalanan hidupnya, bukan pada ketiadaan kekurangan.</p>
        </div>
      </section>

      {/* 4. Menyatukan Akal, Hati, dan Amal */}
      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">4</span>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Menyatukan Akal, Hati, dan Amal</h2>
        </div>
        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>Salah satu ciri Insān Kāmil adalah keselarasan. Akalnya mencari kebenaran. Hatinya dipenuhi kasih sayang. Lidahnya menjaga kejujuran. Tangannya memberi manfaat. Kakinya melangkah menuju kebaikan. Dalam kehidupan modern, sering kali ketiganya terpisah.</p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-[#173c2a]/10 bg-white/70 p-6 shadow-sm"><p className="text-base leading-8 text-[#173c2a]/70">Ada yang sangat cerdas, tetapi ilmunya digunakan untuk menipu.</p></div>
          <div className="rounded-2xl border border-[#173c2a]/10 bg-white/70 p-6 shadow-sm"><p className="text-base leading-8 text-[#173c2a]/70">Ada yang rajin beribadah, tetapi mudah merendahkan orang lain.</p></div>
          <div className="rounded-2xl border border-[#173c2a]/10 bg-white/70 p-6 shadow-sm"><p className="text-base leading-8 text-[#173c2a]/70">Ada yang aktif berbicara tentang moral, tetapi tidak jujur dalam pekerjaannya.</p></div>
        </div>
        <p className="mt-8 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">Sebaliknya, Insān Kāmil berusaha menyatukan pengetahuan, spiritualitas, dan tindakan. Apa yang diyakininya tercermin dalam perilakunya. Apa yang diucapkannya sejalan dengan yang dilakukannya.</p>
      </section>

      {/* 5. Kematangan Emosi sebagai Jalan Spiritual */}
      <section className="bg-[#e4e7df]/50 px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center space-x-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">5</span>
            <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Kematangan Emosi sebagai Jalan Spiritual</h2>
          </div>
          <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
            <p>Banyak orang mengira kedewasaan spiritual hanya diukur dari banyaknya ibadah. Padahal para ulama tasawuf juga menekankan pentingnya kematangan jiwa. Manusia yang semakin dekat kepada Allah semestinya semakin mampu mengendalikan amarah, tidak mudah iri, tidak haus pujian, dan tidak mudah putus asa.</p>
          </div>
          <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm sm:p-8">
            <p className="text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">Ia tidak lagi menggantungkan kebahagiaannya pada penilaian manusia. Ia mampu bersyukur ketika memperoleh nikmat. Ia mampu bersabar ketika menghadapi musibah. Ia tetap rendah hati ketika dipuji. Ia tetap tenang ketika dicela.</p>
            <p className="mt-4 border-t border-[#173c2a]/10 pt-4 text-base leading-8 text-[#173c2a]/70 sm:text-lg">Di tengah masyarakat yang mudah terpancing komentar media sosial, cepat marah karena perbedaan pendapat, dan gemar menghakimi tanpa memahami — kematangan emosi menjadi salah satu bentuk ibadah yang sangat dibutuhkan.</p>
          </div>
        </div>
      </section>

      {/* 6. Menjadi Cahaya bagi Sesama */}
      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">6</span>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Menjadi Cahaya bagi Sesama</h2>
        </div>
        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>Insān Kāmil tidak hanya sibuk memperbaiki dirinya sendiri. Ia menjadi sumber manfaat bagi orang lain. Keberadaannya membuat orang merasa lebih tenang. Ucapannya menguatkan. Ilmunya mencerahkan. Sikapnya menenangkan. Kehadirannya menghadirkan harapan.</p>
        </div>
        <div className="mt-8 rounded-2xl bg-[#173c2a] px-6 py-8 text-center text-[#f7f5ef] shadow-sm sm:px-10 sm:py-10">
          <p className="font-serif text-2xl leading-relaxed sm:text-3xl">“Sebaik-baik manusia adalah yang paling bermanfaat bagi manusia lainnya.”</p>
          <p className="mt-5 text-sm text-white/65">Hadis Nabi SAW</p>
        </div>
        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>Kesempurnaan manusia tidak diukur dari seberapa banyak ia memiliki, melainkan dari seberapa luas manfaat yang ia sebarkan.</p>
          <p>Dalam dunia yang sering mengagungkan pencitraan, tasawuf mengajarkan bahwa lebih penting menjadi pelita daripada sekadar menjadi sorotan.</p>
        </div>
      </section>

      {/* 7. Perjalanan yang Tidak Pernah Selesai */}
      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">7</span>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Perjalanan yang Tidak Pernah Selesai</h2>
        </div>
        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>Menjadi Insān Kāmil bukanlah tujuan yang selesai dicapai dalam satu hari. Ia adalah perjalanan sepanjang hayat. Setiap pengalaman hidup menjadi ruang belajar. Setiap kegagalan menjadi pelajaran tentang kerendahan hati. Setiap keberhasilan menjadi ujian tentang rasa syukur. Setiap pertemuan menjadi kesempatan menebarkan kasih sayang. Setiap musibah menjadi undangan untuk semakin bersandar kepada Allah.</p>
          <p>Karena itu, seorang pencari jalan ruhani tidak bertanya, &quot;Apakah aku sudah menjadi manusia sempurna?&quot; Ia bertanya, &quot;Apakah hari ini aku lebih jujur daripada kemarin? Apakah hatiku lebih lembut daripada sebelumnya? Apakah aku semakin mengenal Tuhanku melalui setiap peristiwa hidup?&quot;</p>
          <p>Pertanyaan-pertanyaan inilah yang menjaga manusia tetap rendah hati dalam perjalanan menuju Allah.</p>
          <p>Pada akhirnya, Insān Kāmil bukanlah manusia yang bebas dari kelemahan, melainkan manusia yang menjadikan setiap kelemahan sebagai pintu untuk semakin bergantung kepada Allah. Semakin ia mengenal dirinya, semakin ia menyadari kebutuhannya kepada Sang Pencipta. Dan semakin ia dekat kepada Allah, semakin ia mampu menghadirkan rahmat bagi sesama.</p>
          <p>Inilah hakikat kesempurnaan menurut tasawuf: bukan menjadi manusia yang dipuji dunia, tetapi menjadi manusia yang hidupnya memantulkan cahaya akhlak Rasulullah dan mengarahkan hati kepada Allah.</p>
        </div>
        <div className="mt-8 rounded-2xl border border-[#b18a3c]/20 bg-white/70 p-6 text-base leading-8 text-[#173c2a]/75 shadow-sm sm:p-8 sm:text-lg sm:leading-9">
          <p className="font-serif text-xl font-semibold text-[#173c2a]">Wallahu a&apos;lam</p>
        </div>
        <blockquote className="mt-10 rounded-2xl border border-[#b18a3c]/25 bg-[#173c2a] px-6 py-8 text-center text-[#f7f5ef] shadow-sm sm:px-10">
          <p className="font-serif text-2xl text-[#d9c27a]">Berikutnya</p>
          <p className="mt-4 text-base italic text-white/80 sm:text-lg">“Perjalanan Menjadi Manusia: Tazkiyatun Nafs (Penyucian Jiwa)”. Mujahadah, muraqabah, dan mahabbah.</p>
        </blockquote>
        <footer className="mt-8 flex flex-wrap gap-2 text-xs font-medium tracking-wide text-[#b18a3c]">
          <p className="text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">#InsanAlKamil #tasawuf #jalaluddinrumi #mjuharuddin #hakikat #penyucianjiwa</p>
        </footer>
      </section>

      {/* TAZKIYATUN NAFS: PENYUCIAN JIWA */}
      <section className="bg-[#173c2a] px-5 py-20 text-[#f7f5ef] sm:px-8 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d9c27a]">Lanjutan Ngaji Rumi 8 — Burung Jiwa</span>
          <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-5xl">PERJALANAN MENJADI MANUSIA: Tazkiyatun Nafs <span className="mt-2 block font-normal italic text-[#d9c27a]/90 text-2xl sm:inline sm:mt-0">(Penyucian Jiwa)</span></h2>
          <p className="mt-7 max-w-4xl text-base leading-8 text-white/75 sm:text-lg sm:leading-9">Berikutnya adalah pembahasan Tazkiyatun Nafs (Penyucian Jiwa), ini merupakan bagian dari perjalanan menjadi manusia yang menurut kami paling alami, setelah pembahasan Insān Kāmil. Jika Insān Kāmil adalah tujuan, maka tazkiyatun nafs adalah jalannya.</p>
          <blockquote className="mt-10 border-y border-[#d9c27a]/35 py-8 text-center font-serif text-2xl leading-relaxed text-[#d9c27a] sm:text-4xl">“Penyucian jiwa bukan ritual sesaat, melainkan proses transformasi seumur hidup.”</blockquote>
        </div>
      </section>

      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>Setiap manusia lahir dengan membawa potensi yang agung. Allah menganugerahinya akal untuk berpikir, hati untuk mencintai, dan ruh untuk mengenal-Nya. Namun potensi itu tidak otomatis berkembang menjadi kemuliaan. Sebagaimana benih yang membutuhkan tanah subur, air, dan cahaya agar tumbuh menjadi pohon yang kokoh, jiwa manusia pun membutuhkan proses penyucian agar mampu memancarkan cahaya Ilahi.</p>
          <p>Inilah yang dalam tradisi Islam disebut tazkiyatun nafs, penyucian jiwa. Kata tazkiyah berasal dari akar kata Arab zakā, yang mengandung dua makna sekaligus: membersihkan dan menumbuhkan.</p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-[#b18a3c]/20 bg-white/70 p-6 shadow-sm sm:p-8"><h3 className="font-serif text-2xl font-semibold">Membersihkan</h3><p className="mt-4 leading-8 text-[#173c2a]/70">Menghilangkan sifat-sifat buruk: iri, dengki, kesombongan, dan kemarahan.</p></div>
          <div className="rounded-2xl border border-[#b18a3c]/20 bg-white/70 p-6 shadow-sm sm:p-8"><h3 className="font-serif text-2xl font-semibold">Menumbuhkan</h3><p className="mt-4 leading-8 text-[#173c2a]/70">Menumbuhkan sifat-sifat mulia: keikhlasan, kasih sayang, kesabaran, syukur, dan cinta kepada Allah.</p></div>
        </div>
        <div className="mt-8 rounded-2xl bg-[#173c2a] px-6 py-8 text-center text-[#f7f5ef] shadow-sm sm:px-10 sm:py-10">
          <p className="font-serif text-2xl leading-relaxed sm:text-3xl">“Sungguh beruntung orang yang menyucikan jiwanya, dan sungguh merugi orang yang mengotorinya.”</p>
          <p className="mt-5 text-sm text-white/65">Q.S. Asy-Syams [91]: 9–10</p>
        </div>
        <p className="mt-8 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">Ayat ini sangat singkat, tetapi mengandung pesan yang mendalam. Allah tidak mengatakan bahwa keberuntungan bergantung pada kekayaan, kecerdasan, jabatan, atau popularitas. Ukuran keberuntungan yang paling hakiki adalah keadaan jiwa.</p>
      </section>

      <section className="bg-[#e4e7df]/50 px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Seberapa Sering Kita Merawat Hati?</h2>
          <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
            <p>Di zaman modern, manusia sangat rajin merawat tubuhnya. Ia pergi ke pusat kebugaran, menjaga pola makan, membeli produk perawatan kulit, bahkan memantau kesehatannya dengan jam tangan pintar. Semua itu tentu baik. Namun, pertanyaannya adalah: seberapa sering kita merawat hati?</p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl border border-[#173c2a]/10 bg-white/70 p-6 shadow-sm"><p className="mt-4 leading-8 text-[#173c2a]/70">Banyak orang mengetahui kadar gula dalam darahnya, tetapi tidak mengetahui kadar kesombongan dalam dirinya.</p></article>
            <article className="rounded-2xl border border-[#173c2a]/10 bg-white/70 p-6 shadow-sm"><p className="mt-4 leading-8 text-[#173c2a]/70">Banyak yang memeriksa tekanan darah secara rutin, tetapi tidak pernah memeriksa apakah hatinya masih dipenuhi rasa iri.</p></article>
            <article className="rounded-2xl border border-[#173c2a]/10 bg-white/70 p-6 shadow-sm"><p className="mt-4 leading-8 text-[#173c2a]/70">Banyak yang memperbarui perangkat elektroniknya setiap tahun, tetapi membiarkan dendam dan keserakahan tinggal bertahun-tahun di dalam jiwa.</p></article>
          </div>
          <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm sm:p-8">
            <p className="text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">Padahal, kerusakan hati sering kali jauh lebih berbahaya daripada kerusakan tubuh. Jiwa yang kotor akan memandang dunia dengan penuh prasangka. Ia sulit bersyukur, mudah marah, haus akan pujian, dan selalu merasa kurang. Sebaliknya, jiwa yang bersih mampu menemukan ketenangan bahkan dalam keadaan yang sederhana.</p>
            <p className="mt-4 border-t border-[#173c2a]/10 pt-4 font-serif text-lg text-[#173c2a]">Jalaluddin Rumi mengibaratkan hati manusia seperti sebuah cermin. Cermin itu diciptakan untuk memantulkan cahaya Allah. Namun, jika permukaannya tertutup debu — ego, kesombongan, iri hati, cinta dunia yang berlebihan, dan kelalaian terhadap Allah — ia tidak lagi mampu memantulkan apa pun. Tugas seorang pencari jalan ruhani bukan menciptakan cahaya, melainkan membersihkan cermin itu sedikit demi sedikit.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">1</span>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">MUJAHADAH: Berjuang Melawan Diri Sendiri</h2>
        </div>
        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>Banyak orang mengira musuh terbesar manusia adalah kemiskinan, penyakit, atau orang-orang yang memusuhinya. Padahal para ulama tasawuf mengingatkan bahwa musuh yang paling berat justru berada di dalam diri sendiri, yaitu nafs yang selalu mengajak kepada hawa nafsu dan egoisme.</p>
          <p>Mujahadah berarti bersungguh-sungguh melawan kecenderungan tersebut. Perjuangan ini tidak selalu tampak heroik. Justru sering kali berlangsung dalam kesunyian.</p>
        </div>
        <div className="mt-8 rounded-2xl border border-[#b18a3c]/20 bg-white/70 p-6 shadow-sm sm:p-8">
          <ul className="space-y-3 text-base leading-8 text-[#173c2a]/75 sm:text-lg">
            <li className="flex items-start"><span className="mr-3 text-[#b18a3c]">✦</span> Menahan amarah meskipun mampu membalas.</li>
            <li className="flex items-start"><span className="mr-3 text-[#b18a3c]">✦</span> Memilih jujur meskipun kebohongan tampak lebih menguntungkan.</li>
            <li className="flex items-start"><span className="mr-3 text-[#b18a3c]">✦</span> Mematikan telepon genggam agar dapat khusyuk beribadah.</li>
            <li className="flex items-start"><span className="mr-3 text-[#b18a3c]">✦</span> Memilih memaafkan meskipun hati terluka.</li>
          </ul>
        </div>
        <div className="mt-8 rounded-2xl bg-[#e4e7df]/60 p-6 sm:p-8">
          <h3 className="font-serif text-2xl font-semibold text-[#173c2a]">Mujahadah di kehidupan modern</h3>
          <ul className="mt-4 space-y-3 text-base leading-8 text-[#173c2a]/80 sm:text-lg">
            <li className="flex items-start"><span className="mr-3 text-[#b18a3c]">✦</span> Melawan kecanduan media sosial.</li>
            <li className="flex items-start"><span className="mr-3 text-[#b18a3c]">✦</span> Melawan dorongan untuk selalu membandingkan diri dengan orang lain.</li>
            <li className="flex items-start"><span className="mr-3 text-[#b18a3c]">✦</span> Melawan keinginan untuk terus mencari pengakuan.</li>
            <li className="flex items-start"><span className="mr-3 text-[#b18a3c]">✦</span> Melawan kebiasaan menyebarkan informasi tanpa tabayun.</li>
            <li className="flex items-start"><span className="mr-3 text-[#b18a3c]">✦</span> Melawan budaya konsumtif yang membuat manusia terus membeli sesuatu yang sebenarnya tidak dibutuhkan.</li>
          </ul>
          <p className="mt-6 border-t border-[#173c2a]/10 pt-4 font-serif text-lg text-[#173c2a]">Semua itu adalah jihad melawan ego. Mungkin tidak ada tepuk tangan manusia ketika kita berhasil melakukannya. Namun, di situlah kemenangan yang sesungguhnya dimulai.</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">2</span>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">MURAQABAH: Hidup dalam Kesadaran akan Kehadiran Allah</h2>
        </div>
        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>Jika mujahadah adalah perjuangan, maka muraqabah adalah kesadaran. Muraqabah berarti menyadari bahwa Allah selalu melihat, mengetahui, dan membersamai setiap langkah manusia. Kesadaran ini bukan untuk menumbuhkan rasa takut yang berlebihan, melainkan menghadirkan ketenangan.</p>
          <p>Seseorang yang hidup dengan muraqabah tidak bergantung pada pengawasan manusia. Ia tetap jujur meskipun tidak ada kamera. Ia tetap amanah meskipun tidak ada atasan. Ia tetap menjaga lisannya meskipun dapat berbicara tanpa diketahui orang lain.</p>
          <p>Di era digital, muraqabah menjadi semakin relevan. Internet memberi ruang bagi anonimitas. Seseorang dapat menghina orang lain dengan akun palsu, menyebarkan fitnah, mencuri karya orang lain, atau menipu tanpa bertatap muka. Namun, muraqabah mengingatkan bahwa tidak ada ruang yang tersembunyi dari pengawasan Allah.</p>
        </div>
        <blockquote className="mt-10 rounded-2xl border border-[#b18a3c]/25 bg-[#173c2a] px-6 py-8 text-center text-[#f7f5ef] shadow-sm sm:px-10">
          <p className="font-serif text-2xl leading-relaxed text-[#d9c27a] sm:text-3xl">Kesadaran inilah yang membentuk integritas sejati.</p>
          <p className="mt-4 text-base italic text-white/80 sm:text-lg">Manusia tidak lagi bertanya, “Apakah orang lain melihatku?” tetapi, “Apakah Allah ridha terhadap apa yang kulakukan?”</p>
        </blockquote>
      </section>

      <section className="bg-[#e4e7df]/50 px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center space-x-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">3</span>
            <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">MAHABBAH: Cinta sebagai Puncak Perjalanan</h2>
          </div>
          <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
            <p>Jika mujahadah membersihkan jiwa dan muraqabah menjaganya tetap sadar, maka mahabbah menghidupkannya. Mahabbah adalah cinta kepada Allah. Dalam pandangan Rumi, cinta bukan sekadar emosi. Cinta adalah kekuatan yang menggerakkan seluruh perjalanan ruhani.</p>
            <p>Orang yang mencintai Allah tidak beribadah karena takut semata. Ia juga tidak beribadah hanya karena mengharapkan balasan. Ia beribadah karena merindukan kedekatan dengan-Nya.</p>
          </div>
          <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm sm:p-8">
            <p className="text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">Cinta inilah yang membuat ibadah berubah dari kewajiban menjadi kebutuhan. Shalat tidak lagi terasa sebagai beban. Zikir bukan lagi sekadar rangkaian bacaan. Sedekah bukan lagi kehilangan harta. Semuanya menjadi cara seorang hamba menyatakan cintanya kepada Allah.</p>
            <p className="mt-4 border-t border-[#173c2a]/10 pt-4 text-base leading-8 text-[#173c2a]/70 sm:text-lg">Di tengah dunia yang mengajarkan manusia untuk mencintai popularitas, kekuasaan, dan materi, mahabbah mengembalikan arah cinta kepada sumber yang tidak pernah mengecewakan. Semakin seseorang mencintai Allah, semakin ia mampu mencintai manusia dengan tulus. Ia tidak mudah membenci, ia tidak mudah iri, ia tidak mudah putus asa. Karena pusat cintanya tidak bergantung pada sesuatu yang fana.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Menjadi Manusia Setiap Hari</h2>
        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>Tazkiyatun nafs bukanlah proyek yang selesai setelah membaca satu buku, mengikuti satu kajian, atau menjalani satu retret spiritual. Ia adalah latihan harian. Ketika kita meminta maaf, kita sedang menyucikan jiwa. Ketika kita menahan amarah, kita sedang menyucikan jiwa. Ketika kita memaafkan, bersyukur, jujur, menolong orang lain, atau bangun untuk bermunajat di sepertiga malam, kita sedang membersihkan cermin hati agar semakin mampu memantulkan cahaya Allah.</p>
          <p>Perjalanan ini mungkin panjang. Kadang kita berhasil, kadang kita jatuh. Kadang hati terasa begitu dekat kepada Allah, kadang terasa kering dan jauh. Namun, selama seseorang terus kembali, terus bertobat, terus memperbaiki diri, ia sedang berjalan di jalan yang benar.</p>
          <p>Pada akhirnya, menjadi manusia bukanlah tentang mencapai keadaan tanpa cela. Menjadi manusia adalah keberanian untuk terus membersihkan hati, melawan ego, menjaga kesadaran akan Allah, dan menumbuhkan cinta kepada-Nya.</p>
          <p>Di situlah tazkiyatun nafs menemukan maknanya: bukan sekadar menjadikan manusia lebih religius, tetapi menjadikannya lebih jujur, lebih lembut, lebih bijaksana, lebih bermanfaat, dan lebih mencerminkan akhlak Rasulullah SAW, dalam setiap langkah kehidupannya.</p>
        </div>
        <div className="mt-8 rounded-2xl border border-[#173c2a]/10 bg-white/70 p-6 text-base leading-8 text-[#173c2a]/75 shadow-sm sm:p-8 sm:text-lg sm:leading-9">
          <p className="font-serif text-xl font-semibold text-[#173c2a]">Wallahu a&apos;lam</p>
        </div>
        <blockquote className="mt-10 rounded-2xl border border-[#b18a3c]/25 bg-[#173c2a] px-6 py-8 text-center text-[#f7f5ef] shadow-sm sm:px-10">
          <p className="font-serif text-2xl text-[#d9c27a]">Berikutnya</p>
          <p className="mt-4 text-base italic text-white/80 sm:text-lg">Membahas maqāmāt (tahapan-tahapan perjalanan spiritual) — taubat, sabar, syukur, tawakal, ridha, dan ma&apos;rifah.</p>
        </blockquote>
        <footer className="mt-8 flex flex-wrap gap-2 text-xs font-medium tracking-wide text-[#b18a3c]">
          <p className="text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">#artikel #ngaji #jalaluddinrumi #sufiindonesia #facebookpro</p>
        </footer>
      </section>

      {/* MAQAMAT: MEMBACA ULANG MAQAMAT */}
      <section className="bg-[#173c2a] px-5 py-20 text-[#f7f5ef] sm:px-8 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d9c27a]">Lanjutan Ngaji Rumi 8 — Burung Jiwa</span>
          <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-5xl">MENJADI MANUSIA: Membaca Ulang Maqāmāt di Tengah Krisis Manusia Modern</h2>
          <blockquote className="mt-10 border-y border-[#d9c27a]/35 py-8 text-center font-serif text-2xl leading-relaxed text-[#d9c27a] sm:text-3xl">“Burung tidak belajar terbang ketika sayapnya tumbuh. Ia belajar terbang ketika berani meninggalkan ranting yang selama ini dianggap sebagai rumahnya. Begitu pula manusia. Ia tidak menjadi dewasa ketika usianya bertambah, melainkan ketika ia berani meninggalkan segala sesuatu yang menghalanginya untuk kembali kepada Allah.”</blockquote>
        </div>
      </section>

      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>Ada satu kesalahpahaman yang diam-diam telah hidup sangat lama dalam cara kita memandang kehidupan spiritual. Banyak orang mengira bahwa perjalanan menuju Allah adalah perjalanan untuk menjadi seseorang yang luar biasa. Menjadi lebih sakti, lebih alim, lebih dihormati, lebih tenang, atau bahkan merasa lebih dekat kepada Tuhan dibandingkan orang lain.</p>
          <p>Padahal para arif sejak dahulu justru mengajarkan hal yang sebaliknya. Perjalanan spiritual bukanlah perjalanan untuk menjadi “lebih besar”, melainkan perjalanan untuk melepaskan segala sesuatu yang selama ini membuat kita lupa siapa diri kita sebenarnya.</p>
          <p>Mungkin selama ini kita terlalu sibuk membangun kehidupan, tetapi lupa membangun jiwa. Kita belajar mencari pekerjaan, tetapi tidak belajar mencari makna. Kita belajar mengumpulkan harta, tetapi tidak belajar mengumpulkan kebijaksanaan. Kita belajar berbicara di depan manusia, tetapi tidak belajar mendengar suara hati.</p>
        </div>
        <div className="mt-8 rounded-2xl bg-[#e4e7df]/60 p-6 sm:p-8">
          <h3 className="font-serif text-2xl font-semibold text-[#173c2a]">Paradoks manusia modern</h3>
          <ul className="mt-4 space-y-3 text-base leading-8 text-[#173c2a]/80 sm:text-lg">
            <li className="flex items-start"><span className="mr-3 text-[#b18a3c]">✦</span> Hidup semakin nyaman, tetapi semakin gelisah.</li>
            <li className="flex items-start"><span className="mr-3 text-[#b18a3c]">✦</span> Informasi semakin melimpah, tetapi kebijaksanaan terasa semakin langka.</li>
            <li className="flex items-start"><span className="mr-3 text-[#b18a3c]">✦</span> Hubungan semakin mudah dijalin, tetapi kesepian justru menjadi salah satu persoalan terbesar zaman ini.</li>
          </ul>
          <p className="mt-6 border-t border-[#173c2a]/10 pt-4 font-serif text-lg text-[#173c2a]">Barangkali karena manusia modern begitu sibuk mengembangkan kemampuan, tetapi lupa merawat keberadaan dirinya.</p>
        </div>
      </section>

      <section className="bg-[#e4e7df]/50 px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Maqāmāt: Kembali Menjadi Manusia yang Utuh</h2>
          <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
            <p>Dalam tradisi tasawuf, para ulama memperkenalkan istilah maqāmāt, yaitu tahapan-tahapan perjalanan ruhani yang ditempuh seorang hamba menuju kedekatan dengan Allah. Imam Abu Nashr as-Sarraj dalam <em>Al-Luma&apos;</em>, Imam Al-Qusyairi dalam <em>Ar-Risalah al-Qusyairiyyah</em>, Imam Al-Ghazali dalam <em>Ihya&apos; &apos;Ulum al-Din</em>, hingga Ibnu Qayyim al-Jauziyyah dalam <em>Madarij as-Salikin</em> menjelaskan bahwa perjalanan spiritual bukanlah sesuatu yang terjadi secara instan. Ia adalah proses panjang yang menuntut kesungguhan, mujahadah, muhasabah, dan pertolongan Allah.</p>
            <p>Namun, di sini kita akan mencoba memandang maqāmāt dari sudut yang sedikit berbeda. Bukan sebagai tangga untuk menjadi “manusia suci”. Melainkan sebagai proses untuk kembali menjadi manusia yang utuh.</p>
            <p>Sebab sejak lahir, manusia membawa fitrah yang bersih. Rasulullah ﷺ bersabda: “Setiap anak dilahirkan dalam keadaan fitrah...” (HR. al-Bukhari dan Muslim).</p>
          </div>
          <div className="mt-8 rounded-2xl border border-[#b18a3c]/20 bg-white/70 p-6 shadow-sm sm:p-8">
            <h3 className="font-serif text-xl font-semibold text-[#173c2a]">Pakaian-pakaian yang menutupi fitrah</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl border border-[#173c2a]/10 bg-[#f7f5ef] p-4 text-center font-medium text-[#173c2a]/80">Ambisi</div>
              <div className="rounded-xl border border-[#173c2a]/10 bg-[#f7f5ef] p-4 text-center font-medium text-[#173c2a]/80">Ketakutan</div>
              <div className="rounded-xl border border-[#173c2a]/10 bg-[#f7f5ef] p-4 text-center font-medium text-[#173c2a]/80">Gengsi</div>
              <div className="rounded-xl border border-[#173c2a]/10 bg-[#f7f5ef] p-4 text-center font-medium text-[#173c2a]/80">Dendam</div>
              <div className="rounded-xl border border-[#173c2a]/10 bg-[#f7f5ef] p-4 text-center font-medium text-[#173c2a]/80">Kesombongan</div>
              <div className="rounded-xl border border-[#173c2a]/10 bg-[#f7f5ef] p-4 text-center font-medium text-[#173c2a]/80">Pengakuan sosial</div>
            </div>
            <p className="mt-4 text-base leading-8 text-[#173c2a]/70">Sedikit demi sedikit, pakaian-pakaian itu menutupi cahaya fitrah yang pernah begitu jernih. Maqāmāt mengajak kita melepaskan satu demi satu lapisan yang bukan diri kita.</p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-[#173c2a]/10 bg-white/70 p-6 shadow-sm"><p className="text-sm font-semibold uppercase text-[#b18a3c]">Taubat</p><p className="mt-2 leading-8 text-[#173c2a]/70">Meninggalkan identitas palsu yang dibentuk oleh dosa dan ego.</p></div>
            <div className="rounded-2xl border border-[#173c2a]/10 bg-white/70 p-6 shadow-sm"><p className="text-sm font-semibold uppercase text-[#b18a3c]">Sabar</p><p className="mt-2 leading-8 text-[#173c2a]/70">Tetap teguh ketika dunia mengajak berbelok.</p></div>
            <div className="rounded-2xl border border-[#173c2a]/10 bg-white/70 p-6 shadow-sm"><p className="text-sm font-semibold uppercase text-[#b18a3c]">Syukur</p><p className="mt-2 leading-8 text-[#173c2a]/70">Mengembalikan mata hati agar mampu melihat nikmat yang tersembunyi di balik kebiasaan.</p></div>
            <div className="rounded-2xl border border-[#173c2a]/10 bg-white/70 p-6 shadow-sm"><p className="text-sm font-semibold uppercase text-[#b18a3c]">Tawakal</p><p className="mt-2 leading-8 text-[#173c2a]/70">Membebaskan jiwa dari beban mengendalikan sesuatu yang berada di luar kuasa manusia.</p></div>
            <div className="rounded-2xl border border-[#173c2a]/10 bg-white/70 p-6 shadow-sm"><p className="text-sm font-semibold uppercase text-[#b18a3c]">Ridha</p><p className="mt-2 leading-8 text-[#173c2a]/70">Berdamai dengan takdir, tanpa kehilangan semangat untuk terus berikhtiar.</p></div>
            <div className="rounded-2xl border border-[#173c2a]/10 bg-white/70 p-6 shadow-sm"><p className="text-sm font-semibold uppercase text-[#b18a3c]">Ma&apos;rifah</p><p className="mt-2 leading-8 text-[#173c2a]/70">Bukan akhir perjalanan, melainkan awal dari kerendahan hati yang lebih dalam.</p></div>
          </div>
          <p className="mt-8 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">Maka maqāmāt bukanlah perlombaan untuk menjadi lebih tinggi daripada orang lain. Ia adalah perjalanan untuk menjadi lebih jujur kepada diri sendiri.</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="rounded-2xl bg-[#173c2a] px-6 py-8 text-center text-[#f7f5ef] shadow-sm sm:px-10 sm:py-10">
          <p className="font-serif text-2xl leading-[2.1] sm:text-3xl" dir="rtl">يَا أَيُّهَا الْإِنسَانُ إِنَّكَ كَادِحٌ إِلَىٰ رَبِّكَ كَدْحًا فَمُلَاقِيهِ</p>
          <p className="mt-5 text-base leading-8 text-white/75">“Wahai manusia! Sesungguhnya engkau telah bekerja dengan sungguh-sungguh menuju Tuhanmu, maka pasti engkau akan menemui-Nya.”</p>
          <p className="mt-2 text-sm text-white/60">Q.S. Al-Insyiqaq [84]: 6</p>
        </div>
        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>Ayat ini mengingatkan bahwa setiap manusia sedang berjalan. Tidak ada seorang pun yang diam. Pertanyaannya bukanlah apakah kita sedang berjalan atau tidak, melainkan ke arah mana perjalanan itu membawa kita.</p>
          <p>Sebagian orang berjalan mengejar kekuasaan. Sebagian mengejar kekayaan. Sebagian mengejar pujian. Namun pada akhirnya, semua perjalanan akan berhenti di hadapan Allah.</p>
          <p>Karena itu, pertanyaan yang layak kita renungkan bukanlah, “Seberapa jauh aku telah berjalan?” Melainkan, “Apakah langkah-langkahku semakin mendekatkan diriku kepada-Nya?”</p>
          <p>Barangkali inilah makna terdalam perjalanan spiritual. Ia bukan tentang meninggalkan dunia. Ia juga bukan tentang membenci kehidupan. Ia adalah belajar menempatkan dunia di tangan, bukan di dalam hati. Sebab hati yang dipenuhi dunia akan selalu merasa sempit. Sedangkan hati yang dipenuhi Allah akan mampu memandang dunia sebagai ladang amal, bukan sebagai tujuan akhir.</p>
          <p>Maka marilah kita memulai perjalanan ini. Bukan sebagai orang yang merasa telah sampai. Tetapi sebagai musafir yang dengan rendah hati mengakui bahwa dirinya masih belajar berjalan.</p>
          <p>Karena setiap langkah menuju Allah, betapapun kecilnya, selalu lebih berharga daripada seribu langkah yang hanya membawa manusia semakin jauh dari dirinya sendiri.</p>
        </div>
        <div className="mt-8 rounded-2xl border border-[#173c2a]/10 bg-white/70 p-6 text-base leading-8 text-[#173c2a]/75 shadow-sm sm:p-8 sm:text-lg sm:leading-9">
          <p className="font-serif text-xl font-semibold text-[#173c2a]">Wallahu a&apos;lam</p>
        </div>
        <blockquote className="mt-10 rounded-2xl border border-[#b18a3c]/25 bg-[#173c2a] px-6 py-8 text-center text-[#f7f5ef] shadow-sm sm:px-10">
          <p className="font-serif text-2xl text-[#d9c27a]">Berikutnya</p>
          <p className="mt-4 text-base italic text-white/80 sm:text-lg">Masih di maqāmāt: menjabar setiap maqām mulai dari Taubat, Sabar, Syukur, Tawakal, Ridha, dan Ma&apos;rifah.</p>
        </blockquote>
      </section>

      {/* GERBANG TAUBAT */}
      <section className="bg-[#173c2a] px-5 py-20 text-[#f7f5ef] sm:px-8 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d9c27a]">Lanjutan Ngaji Rumi 8 — Burung Jiwa</span>
          <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-5xl">GERBANG TAUBAT</h2>
          <blockquote className="mt-10 border-y border-[#d9c27a]/35 py-8 text-center font-serif text-2xl leading-relaxed text-[#d9c27a] sm:text-3xl">“Seekor burung tidak pernah kehilangan langit. Yang hilang hanyalah keberaniannya untuk kembali terbang.”</blockquote>
        </div>
      </section>

      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>Ada satu kata yang sering membuat manusia merasa takut: “Taubat”. Sebagian orang membayangkannya sebagai akhir dari kesenangan. Sebagian lagi menganggapnya sebagai urusan para pendosa. Ada pula yang merasa taubat adalah sesuatu yang baru diperlukan ketika rambut mulai memutih atau usia telah senja.</p>
          <p>Padahal, boleh jadi orang yang paling membutuhkan taubat bukanlah mereka yang banyak melakukan dosa yang tampak, melainkan mereka yang telah lama kehilangan arah hidup. Sebab tidak semua kesesatan lahir dari maksiat. Ada kesesatan yang lahir dari kesombongan. Ada yang lahir dari ambisi. Ada yang lahir dari keinginan untuk selalu dipuji. Ada pula yang lahir karena terlalu lama hidup demi memenuhi harapan manusia, hingga lupa memenuhi panggilan Allah.</p>
          <p>Di zaman ini, seseorang dapat kehilangan dirinya tanpa pernah meninggalkan masjid. Ia rajin beribadah. Tetapi seluruh hidupnya dihabiskan untuk mencari pengakuan. Ia takut kehilangan pengikut. Takut kehilangan jabatan. Takut kehilangan nama baik. Namun tidak pernah takut kehilangan kedekatan dengan Allah.</p>
        </div>
        <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm sm:p-8">
          <p className="font-serif text-lg text-[#173c2a] sm:text-xl">Mungkin inilah bentuk keterasingan manusia modern yang paling sunyi.</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">1</span>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Taubat: Lebih dari Sekadar Berhenti Berbuat Dosa</h2>
        </div>
        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>Dalam bahasa Arab, kata taubat berasal dari akar kata تاب - يتوب - توبة (tāba–yatūbu–taubatan) yang berarti kembali. Kembali kepada siapa? Kembali kepada Allah. Kembali kepada fitrah. Kembali kepada hati yang pernah bersih. Karena itu, hakikat taubat bukan hanya meninggalkan dosa, tetapi mengubah arah perjalanan hidup.</p>
        </div>
        <div className="mt-8 rounded-2xl bg-[#173c2a] px-6 py-8 text-center text-[#f7f5ef] shadow-sm sm:px-10 sm:py-10">
          <p className="font-serif text-2xl leading-[2.1] sm:text-3xl" dir="rtl">وَتُوبُوا إِلَى اللَّهِ جَمِيعًا أَيُّهَا الْمُؤْمِنُونَ لَعَلَّكُمْ تُفْلِحُونَ</p>
          <p className="mt-5 text-base leading-8 text-white/75">“Dan bertaubatlah kamu semua kepada Allah, wahai orang-orang yang beriman, agar kamu beruntung.”</p>
          <p className="mt-2 text-sm text-white/60">Q.S. An-Nur [24]: 31</p>
        </div>
        <div className="mt-8 rounded-2xl border border-[#b18a3c]/20 bg-white/70 p-6 shadow-sm sm:p-8">
          <p className="text-base leading-8 text-[#173c2a]/75 sm:text-lg sm:leading-9">Perhatikan ayat ini. Allah memanggil orang-orang beriman. Artinya, taubat bukan hanya untuk orang yang jauh dari agama. Orang beriman pun diperintahkan terus-menerus memperbarui taubatnya.</p>
          <p className="mt-4 border-t border-[#173c2a]/10 pt-4 text-base leading-8 text-[#173c2a]/70">Imam Ibnu Katsir menjelaskan bahwa ayat ini merupakan seruan umum kepada seluruh kaum mukmin agar meninggalkan segala bentuk maksiat, baik yang tampak maupun yang tersembunyi, dan kembali menaati Allah. Taubat bukan peristiwa sekali selesai, melainkan sikap hidup yang terus diperbarui.</p>
        </div>
      </section>

      <section className="bg-[#e4e7df]/50 px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center space-x-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">2</span>
            <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Nabi yang Ma&apos;shum Pun Beristighfar</h2>
          </div>
          <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
            <p>Barangkali kita mengira taubat hanya diperlukan oleh orang yang banyak dosa. Namun Rasulullah ﷺ yang telah diampuni dosanya tetap bersabda:</p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-[#173c2a] px-6 py-8 text-center text-[#f7f5ef] shadow-sm"><p className="font-serif text-xl leading-relaxed sm:text-2xl">“Demi Allah, sungguh aku memohon ampun kepada Allah dan bertaubat kepada-Nya lebih dari tujuh puluh kali dalam sehari.”</p><p className="mt-4 text-sm text-white/60">HR. al-Bukhari, no. 6307</p></div>
            <div className="rounded-2xl bg-[#173c2a] px-6 py-8 text-center text-[#f7f5ef] shadow-sm"><p className="font-serif text-xl leading-relaxed sm:text-2xl">“...seratus kali dalam sehari.”</p><p className="mt-4 text-sm text-white/60">HR. Muslim, no. 2702</p></div>
          </div>
          <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm sm:p-8">
            <p className="text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">Mengapa Nabi masih beristighfar? Para ulama menjelaskan bahwa istighfar Nabi bukan karena beliau bergelimang dosa, tetapi sebagai bentuk kesempurnaan penghambaan, rasa syukur, dan teladan bagi umatnya. Semakin dekat seseorang kepada Allah, semakin halus pula kesadarannya terhadap kekurangan dirinya.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">3</span>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Ketika Burung Jiwa Lupa Jalan Pulang</h2>
        </div>
        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>Bayangkan seekor burung yang sejak kecil hidup di dalam sangkar. Lama-kelamaan ia mengira bahwa besi-besi sangkar adalah batas langitnya.</p>
          <p>Suatu hari pintu sangkar dibuka. Ia tidak terbang, bukan karena sayapnya patah. Tetapi karena ia telah lupa bahwa dirinya diciptakan untuk terbang.</p>
          <p>Begitulah manusia. Ada yang terkurung oleh gengsi. Ada yang dipenjara oleh masa lalu. Ada yang dibelenggu oleh luka. Ada yang diperbudak oleh ambisi. Ada yang menjadi tawanan penilaian manusia. Padahal Allah tidak pernah menciptakan hati manusia untuk hidup di dalam sangkar itu.</p>
        </div>
        <blockquote className="mt-10 rounded-2xl border border-[#b18a3c]/25 bg-[#173c2a] px-6 py-8 text-center text-[#f7f5ef] shadow-sm sm:px-10">
          <p className="font-serif text-2xl leading-relaxed text-[#d9c27a] sm:text-3xl">Taubat adalah saat pertama kali burung jiwa memberanikan diri mengepakkan sayap menuju rumahnya.</p>
        </blockquote>
      </section>

      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">4</span>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Rumi dan Makna “Kembali”</h2>
        </div>
        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>Jalaluddin Rumi berulang kali menggunakan simbol “kembali” dalam karya-karyanya. Pada pembukaan <em>Masnavi-ye Ma&apos;navi</em>, melalui kisah seruling bambu (ney) yang dipisahkan dari rumpunnya, Rumi menggambarkan kerinduan makhluk untuk kembali kepada asalnya:</p>
        </div>
        <div className="mt-6 rounded-2xl bg-[#173c2a] px-6 py-8 text-center text-2xl leading-[2.2] text-[#f7f5ef] shadow-sm sm:px-8 sm:text-3xl" dir="rtl"><p>بشنو از نی چون حکایت می‌کند</p><p>از جدایی‌ها شکایت می‌کند</p></div>
        <div className="mt-5 rounded-2xl border border-[#173c2a]/10 bg-white/70 px-6 py-5 text-sm leading-8 text-[#173c2a]/70"><strong>Transliterasi:</strong><br />Bishnaw az ney chun hikāyat mīkunad, az judā&apos;īhā syikāyat mīkunad.</div>
        <p className="mt-5 text-base leading-8 text-[#173c2a]/70 sm:text-lg"><strong>Terjemahan:</strong><br />“Dengarkanlah seruling bambu ketika ia bercerita; ia mengadukan perihnya perpisahan.”</p>
        <p className="mt-4 text-sm leading-7 text-[#173c2a]/55"><strong>Sumber:</strong> Jalaluddin Rumi, Masnavi-ye Ma&apos;navi, Buku I, bait pembuka.</p>
        <div className="mt-6 rounded-2xl border border-[#b18a3c]/20 bg-white/70 p-6 shadow-sm">
          <p className="text-base leading-8 text-[#173c2a]/70">William C. Chittick (<em>The Sufi Path of Love</em>) dan Annemarie Schimmel (<em>The Triumphal Sun</em>) menjelaskan bahwa seruling itu melambangkan jiwa manusia yang merindukan asalnya. Rindu tersebut bukan sekadar emosi, melainkan dorongan spiritual untuk kembali kepada Allah.</p>
          <p className="mt-4 border-t border-[#173c2a]/10 pt-4 text-base leading-8 text-[#173c2a]/70">Dalam kerangka Islam, kerinduan itu menemukan arahnya melalui taubat. Taubat bukan sekadar penyesalan, tetapi langkah nyata untuk kembali kepada jalan yang diridhai Allah.</p>
        </div>
      </section>

      <section className="bg-[#e4e7df]/50 px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center space-x-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">5</span>
            <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Taubat di Era Digital</h2>
          </div>
          <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
            <p>Hari ini, dosa tidak selalu hadir dalam bentuk yang dahulu dikenal. Kadang ia hadir sebagai kebiasaan yang perlahan mengeraskan hati. Ketika jari lebih cepat menggulir layar daripada membuka mushaf. Ketika komentar orang lebih menentukan suasana hati daripada firman Allah. Ketika harga diri bergantung pada jumlah pengikut. Ketika waktu habis mengejar citra, sementara jiwa dibiarkan lapar.</p>
          </div>
          <blockquote className="mt-10 rounded-2xl border border-[#b18a3c]/25 bg-white/70 px-6 py-8 text-center font-serif text-2xl leading-relaxed text-[#173c2a] shadow-sm sm:text-3xl">“Masihkah Allah menjadi pusat hidupku, ataukah telah tergeser oleh sesuatu yang lain?”</blockquote>
        </div>
      </section>

      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">6</span>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Muhasabah</h2>
        </div>
        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>Mungkin selama ini kita mengira taubat adalah perjalanan orang berdosa menuju orang saleh. Padahal sesungguhnya, taubat adalah perjalanan setiap hati yang ingin pulang.</p>
          <p>Karena yang paling jauh dari manusia bukanlah bintang-bintang di langit. Melainkan hatinya sendiri ketika ia lupa kepada Allah.</p>
          <p>Barangkali malam ini adalah saat yang baik untuk berhenti sejenak. Bukan untuk menghitung berapa banyak kesalahan orang lain. Tetapi untuk bertanya kepada diri sendiri: “Sudah berapa lama burung jiwaku tidak pulang?”</p>
        </div>
        <div className="mt-8 rounded-2xl border border-[#173c2a]/10 bg-white/70 p-6 text-base leading-8 text-[#173c2a]/75 shadow-sm sm:p-8 sm:text-lg sm:leading-9">
          <p className="font-serif text-xl font-semibold text-[#173c2a]">Wallahu a&apos;lam</p>
        </div>
        <blockquote className="mt-10 rounded-2xl border border-[#b18a3c]/25 bg-[#173c2a] px-6 py-8 text-center text-[#f7f5ef] shadow-sm sm:px-10">
          <p className="font-serif text-2xl text-[#d9c27a]">Berikutnya</p>
          <p className="mt-4 text-base italic text-white/80 sm:text-lg">Masih di maqāmāt. Fokus maqām Sabar.</p>
        </blockquote>
        <footer className="mt-8 flex flex-wrap gap-2 text-xs font-medium tracking-wide text-[#b18a3c]">
          <p className="text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">#artikel #taubat #jalaluddinrumi #tasawuf #mjuharuddin</p>
        </footer>
      </section>

      {/* GERBANG SABAR */}
      <section className="bg-[#173c2a] px-5 py-20 text-[#f7f5ef] sm:px-8 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d9c27a]">Lanjutan Ngaji Rumi 8 — Burung Jiwa</span>
          <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-5xl">GERBANG SABAR</h2>
          <p className="mt-7 max-w-4xl text-base leading-8 text-white/75 sm:text-lg sm:leading-9">Selamat datang di postingan Ngaji Rumi 8 “Burung Jiwa” fokus “Gerbang Sabar”. Jika kebanyakan buku menjelaskan bahwa sabar adalah kemampuan menahan diri — menurut kami, definisi itu benar, tetapi belum menyentuh akar persoalan manusia modern.</p>
          <blockquote className="mt-10 border-y border-[#d9c27a]/35 py-8 text-center font-serif text-2xl leading-relaxed text-[#d9c27a] sm:text-3xl">“Sabar adalah kemampuan menjaga arah ketika dunia terus-menerus berusaha membelokkan perjalanan jiwa.”</blockquote>
          <p className="mt-8 max-w-4xl text-base leading-8 text-white/75 sm:text-lg sm:leading-9">Di abad ke-21, musuh terbesar sabar bukan hanya musibah. Musuh terbesar sabar adalah kecepatan. Segalanya harus instan. Padahal Allah lebih sering bekerja melalui proses daripada kecepatan.</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">1</span>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Ketika Burung Jiwa Belajar Terbang Melawan Angin</h2>
        </div>
        <blockquote className="mt-8 rounded-2xl border border-[#b18a3c]/25 bg-[#173c2a] px-6 py-8 text-center font-serif text-2xl leading-relaxed text-[#d9c27a] shadow-sm sm:px-10 sm:text-3xl">“Seekor burung tidak diuji ketika langit cerah. Ia diuji ketika angin datang dari arah yang berlawanan. Anehnya, justru angin itulah yang membuatnya mampu terbang lebih tinggi.”</blockquote>
        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>Tidak ada zaman yang lebih tidak sabar daripada zaman kita. Hari ini kita hidup dalam budaya yang memuja kecepatan. Makanan harus cepat saji. Informasi harus diterima dalam hitungan detik. Pesan yang tidak segera dibalas dianggap diabaikan. Video berdurasi satu menit sudah dianggap terlalu panjang.</p>
          <p>Manusia modern tidak hanya kehilangan waktu untuk menunggu, tetapi perlahan kehilangan kemampuan untuk bertumbuh. Kita ingin hasil tanpa proses. Kita ingin panen tanpa musim. Kita ingin matang tanpa ditempa.</p>
          <p>Padahal seluruh alam semesta sedang mengajarkan sesuatu yang berbeda. Tidak ada pohon yang berbuah sehari setelah ditanam. Tidak ada bayi yang lahir dewasa. Tidak ada matahari yang dipaksa terbit lebih cepat. Allah menciptakan kehidupan dengan irama, bukan dengan tergesa-gesa.</p>
        </div>
        <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm sm:p-8">
          <p className="font-serif text-lg text-[#173c2a] sm:text-xl">Mungkin karena itu, salah satu penyakit terbesar manusia modern bukanlah kemiskinan, melainkan ketidaksabaran.</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">2</span>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Sabar: Menjaga Arah, Bukan Sekadar Bertahan</h2>
        </div>
        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>Dalam bahasa Arab, kata ṣabr (الصبر) berasal dari akar kata yang bermakna menahan, mengikat, atau mengokohkan. Akan tetapi, makna sabar dalam Al-Qur&apos;an jauh lebih luas daripada sekadar diam menanggung penderitaan.</p>
          <p>Sabar adalah keteguhan hati untuk tetap berada di jalan yang diridhai Allah, baik ketika menghadapi musibah, menjalankan ketaatan, maupun menjauhi kemaksiatan.</p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-[#173c2a]/10 bg-white/70 p-6 shadow-sm"><p className="text-sm font-semibold uppercase text-[#b18a3c]">Sabar dalam musibah</p><p className="mt-2 leading-8 text-[#173c2a]/70">Tetap teguh ketika diuji kehilangan dan kesulitan.</p></div>
          <div className="rounded-2xl border border-[#173c2a]/10 bg-white/70 p-6 shadow-sm"><p className="text-sm font-semibold uppercase text-[#b18a3c]">Sabar dalam ketaatan</p><p className="mt-2 leading-8 text-[#173c2a]/70">Istiqamah menjalankan perintah Allah meski berat.</p></div>
          <div className="rounded-2xl border border-[#173c2a]/10 bg-white/70 p-6 shadow-sm"><p className="text-sm font-semibold uppercase text-[#b18a3c]">Sabar menjauhi maksiat</p><p className="mt-2 leading-8 text-[#173c2a]/70">Menahan diri dari larangan Allah meski menggoda.</p></div>
        </div>
        <div className="mt-8 rounded-2xl bg-[#e4e7df]/60 p-6 sm:p-8">
          <p className="font-serif text-lg text-[#173c2a] sm:text-xl">Karena itu, sabar bukanlah kelemahan. Sabar adalah kekuatan yang memilih untuk tidak dikendalikan oleh emosi sesaat.</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">3</span>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Allah Bersama Orang-Orang yang Sabar</h2>
        </div>
        <div className="mt-8 rounded-2xl bg-[#173c2a] px-6 py-8 text-center text-[#f7f5ef] shadow-sm sm:px-10 sm:py-10">
          <p className="font-serif text-2xl leading-[2.1] sm:text-3xl" dir="rtl">يَا أَيُّهَا الَّذِينَ آمَنُوا اسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ ۚ إِنَّ اللَّهَ مَعَ الصَّابِرِينَ</p>
          <p className="mt-5 text-base leading-8 text-white/75">“Wahai orang-orang yang beriman! Mohonlah pertolongan dengan sabar dan salat. Sesungguhnya Allah beserta orang-orang yang sabar.”</p>
          <p className="mt-2 text-sm text-white/60">Q.S. Al-Baqarah [2]: 153</p>
        </div>
        <div className="mt-8 rounded-2xl border border-[#b18a3c]/20 bg-white/70 p-6 shadow-sm sm:p-8">
          <p className="text-base leading-8 text-[#173c2a]/75 sm:text-lg sm:leading-9">Allah tidak berjanji bahwa orang sabar akan hidup tanpa ujian. Yang Allah janjikan adalah sesuatu yang jauh lebih agung: kebersamaan-Nya. Dalam tafsir Ibnu Katsir, kebersamaan Allah (ma&apos;iyyah) pada ayat ini dipahami sebagai kebersamaan berupa pertolongan, penjagaan, bimbingan, dan dukungan-Nya kepada hamba yang bersabar.</p>
        </div>
        <div className="mt-8 rounded-2xl bg-[#173c2a] px-6 py-8 text-center text-[#f7f5ef] shadow-sm sm:px-10">
          <p className="font-serif text-2xl leading-[2.1] sm:text-3xl" dir="rtl">إِنَّمَا يُوَفَّى الصَّابِرُونَ أَجْرَهُمْ بِغَيْرِ حِسَابٍ</p>
          <p className="mt-5 text-base leading-8 text-white/75">“Sesungguhnya hanya orang-orang yang bersabarlah yang disempurnakan pahalanya tanpa batas.”</p>
          <p className="mt-2 text-sm text-white/60">Q.S. Az-Zumar [39]: 10</p>
        </div>
        <p className="mt-8 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">Para mufasir menjelaskan bahwa ungkapan “tanpa batas” menunjukkan kemuliaan sabar yang sangat tinggi. Ada pahala yang disebut jumlahnya, tetapi untuk sabar, Al-Qur&apos;an menggunakan bahasa yang melampaui hitungan manusia.</p>
      </section>

      <section className="bg-[#e4e7df]/50 px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center space-x-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">4</span>
            <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Sabar Menurut Rasulullah ﷺ</h2>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-[#173c2a] px-6 py-8 text-center text-[#f7f5ef] shadow-sm"><p className="font-serif text-xl leading-relaxed sm:text-2xl">“Sungguh menakjubkan urusan seorang mukmin. Semua urusannya baik baginya. Jika memperoleh kesenangan, ia bersyukur dan itu baik baginya. Jika ditimpa kesusahan, ia bersabar dan itu pun baik baginya.”</p><p className="mt-4 text-sm text-white/60">HR. Muslim, no. 2999</p></div>
            <div className="rounded-2xl bg-[#173c2a] px-6 py-8 text-center text-[#f7f5ef] shadow-sm"><p className="font-serif text-xl leading-relaxed sm:text-2xl">“Sesungguhnya sabar itu pada saat pertama kali datangnya musibah.”</p><p className="mt-4 text-sm text-white/60">HR. al-Bukhari, no. 1283; Muslim, no. 926</p></div>
          </div>
          <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm sm:p-8">
            <p className="text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">Hadis ini mengajarkan bahwa sabar bukan hanya cara menghadapi penderitaan, tetapi bagian dari cara seorang mukmin memaknai hidup. Yang berubah bukan hanya keadaan, melainkan cara pandang terhadap keadaan. Sabar sejati bukanlah ketika emosi telah reda, melainkan ketika hati memilih tetap tunduk kepada Allah pada detik-detik pertama ujian menyapa.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">5</span>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Al-Ghazali: Sabar Adalah Kendali Jiwa</h2>
        </div>
        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>Imam Al-Ghazali dalam <em>Ihya&apos; &apos;Ulum al-Din</em> (Kitab al-Shabr wa al-Syukr) menjelaskan bahwa sabar adalah kemampuan akal dan iman untuk mengendalikan dorongan hawa nafsu. Beliau mengibaratkan hati manusia sebagai sebuah kerajaan. Akal dan iman adalah pemimpin yang seharusnya memerintah, sedangkan hawa nafsu adalah kekuatan yang harus diarahkan, bukan dibiarkan menguasai kerajaan itu.</p>
          <p>Karena itu, orang yang sabar bukanlah orang yang tidak memiliki keinginan. Ia adalah orang yang mampu menempatkan keinginannya di bawah petunjuk Allah.</p>
        </div>
        <blockquote className="mt-10 rounded-2xl border border-[#b18a3c]/25 bg-[#173c2a] px-6 py-8 text-center font-serif text-2xl leading-relaxed text-[#d9c27a] shadow-sm sm:px-10 sm:text-3xl">Sabar bukan mematikan rasa. Sabar adalah mendidik rasa agar tidak menjadi penguasa.</blockquote>
        <p className="mt-4 text-sm leading-7 text-[#173c2a]/55"><strong>Sumber:</strong> Abu Hamid al-Ghazali, Ihya&apos; &apos;Ulum al-Din, Kitab al-Shabr wa al-Syukr.</p>
      </section>

      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">6</span>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Jalaluddin Rumi: Luka yang Mengajarkan Kesabaran</h2>
        </div>
        <div className="mt-6 rounded-2xl bg-[#173c2a] px-6 py-8 text-center text-2xl leading-[2.2] text-[#f7f5ef] shadow-sm sm:px-8 sm:text-3xl" dir="rtl"><p>زخم، جایی است که نور از آن وارد تو می‌شود</p></div>
        <div className="mt-5 rounded-2xl border border-[#173c2a]/10 bg-white/70 px-6 py-5 text-sm leading-8 text-[#173c2a]/70"><strong>Transliterasi:</strong><br />Zakhm, jāyī ast ke nūr az ān vāred-e to mīshavad.</div>
        <p className="mt-5 text-base leading-8 text-[#173c2a]/70 sm:text-lg"><strong>Terjemahan:</strong><br />“Luka adalah tempat cahaya masuk ke dalam dirimu.”</p>
        <div className="mt-6 rounded-2xl border border-[#b18a3c]/20 bg-white/70 p-6 shadow-sm">
          <p className="text-base leading-8 text-[#173c2a]/70">Kalimat ini sangat terkenal dan banyak dikutip. Namun para peneliti Rumi mengingatkan bahwa bentuk persisnya tidak ditemukan sebagai bait literal dalam naskah utama <em>Masnavi</em> atau <em>Diwan-e Shams</em>. Ia lebih dikenal sebagai parafrasa yang merangkum tema-tema Rumi tentang penderitaan dan transformasi batin.</p>
          <p className="mt-4 border-t border-[#173c2a]/10 pt-4 text-base leading-8 text-[#173c2a]/70">Adapun tema yang benar-benar berulang dalam Masnavi adalah bahwa ujian, kehilangan, dan penderitaan dapat menjadi jalan penyucian jiwa apabila dihadapi dengan cinta kepada Allah. Rumi mengajarkan bahwa angin yang melawan burung bukanlah musuhnya. Justru angin itulah yang menguatkan sayapnya. Begitu pula ujian — bukan selalu tanda Allah menjauh, sering kali justru tanda Allah sedang mendidik.</p>
        </div>
      </section>

      <section className="bg-[#e4e7df]/50 px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center space-x-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">7</span>
            <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Sabar di Era Digital</h2>
          </div>
          <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
            <p>Hari ini kita tidak hanya diuji oleh musibah. Kita diuji oleh gangguan yang terus-menerus: notifikasi yang tidak pernah berhenti, keinginan membandingkan hidup dengan orang lain, budaya viral yang membuat manusia ingin segera dikenal, tekanan untuk selalu produktif, dan ketakutan tertinggal dari orang lain (<em>fear of missing out</em>).</p>
          </div>
          <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm sm:p-8">
            <p className="text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">Di sinilah sabar memperoleh makna baru: kemampuan menjaga hati agar tidak dikendalikan oleh ritme dunia yang serba tergesa-gesa. Tidak semua hal harus dijawab hari ini. Tidak semua keinginan harus dipenuhi sekarang. Tidak semua pintu harus segera dibuka. Ada musim ketika Allah meminta kita menunggu — bukan karena Dia lupa, tetapi karena kita belum selesai dipersiapkan.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">8</span>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Burung Jiwa dan Angin Kehidupan</h2>
        </div>
        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>Seekor burung tidak mengutuk angin yang berhembus dari depan. Ia mengubah cara mengepakkan sayapnya. Begitulah orang yang sabar. Ia tidak selalu mampu mengubah keadaan. Tetapi ia mampu mengubah cara menghadapi keadaan.</p>
          <p>Barangkali hidup bukan tentang menunggu badai berlalu. Melainkan belajar terbang bersama angin yang Allah kirimkan. Sebab setiap angin yang datang membawa dua kemungkinan: ia dapat menjatuhkan burung yang panik, atau mengangkat burung yang percaya kepada sayap yang telah Allah anugerahkan.</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">9</span>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Ruang Sunyi</h2>
        </div>
        <div className="mt-8 rounded-2xl border border-[#b18a3c]/20 bg-white/70 p-6 shadow-sm sm:p-8">
          <p className="text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">Sekarang, tanyakanlah kepada dirimu sendiri. Apa yang paling sulit engkau tunggu? Kesembuhan? Pekerjaan? Jodoh? Pengampunan? Atau jawaban atas doa yang belum juga datang?</p>
          <p className="mt-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">Lalu bacalah perlahan firman Allah ini: “Sesungguhnya Allah bersama orang-orang yang sabar.” Mungkin yang selama ini engkau tunggu bukan hanya perubahan keadaan. Mungkin Allah sedang menumbuhkan dirimu menjadi seseorang yang sanggup menerima karunia yang lebih besar daripada yang pernah engkau bayangkan.</p>
        </div>
        <div className="mt-8 rounded-2xl border border-[#173c2a]/10 bg-white/70 p-6 text-sm leading-7 text-[#173c2a]/60 shadow-sm sm:p-8">
          <p><strong>Catatan ilmiah:</strong></p>
          <p className="mt-2">Al-Qur&apos;an: Q.S. Al-Baqarah [2]: 153; Q.S. Az-Zumar [39]: 10; Q.S. Ali &apos;Imran [3]: 200.</p>
          <p className="mt-2">Hadis: HR. Muslim no. 2999; HR. al-Bukhari no. 1283; HR. Muslim no. 926.</p>
          <p className="mt-2">Tafsir: Tafsir Ibn Kathir; Jāmi&apos; al-Bayān karya al-Ṭabari; Al-Jāmi&apos; li Aḥkām al-Qur&apos;ān karya al-Qurṭubi.</p>
          <p className="mt-2">Tasawuf: Abu Hamid al-Ghazali, Ihya&apos; &apos;Ulum al-Din, Kitab al-Shabr wa al-Syukr.</p>
          <p className="mt-2">Rumi: Masnavi-ye Ma&apos;navi (tema kesabaran dan penyucian jiwa), dengan bantuan kajian William C. Chittick (<em>The Sufi Path of Love</em>) dan Annemarie Schimmel (<em>The Triumphal Sun</em>).</p>
        </div>
        <div className="mt-8 rounded-2xl border border-[#173c2a]/10 bg-white/70 p-6 text-base leading-8 text-[#173c2a]/75 shadow-sm sm:p-8 sm:text-lg sm:leading-9">
          <p className="font-serif text-xl font-semibold text-[#173c2a]">Wallahu a&apos;lam</p>
        </div>
        <blockquote className="mt-10 rounded-2xl border border-[#b18a3c]/25 bg-[#173c2a] px-6 py-8 text-center text-[#f7f5ef] shadow-sm sm:px-10">
          <p className="font-serif text-2xl text-[#d9c27a]">Berikutnya</p>
          <p className="mt-4 text-base italic text-white/80 sm:text-lg">Masih di maqāmāt. Fokus maqām Syukur.</p>
        </blockquote>
        <footer className="mt-8 flex flex-wrap gap-2 text-xs font-medium tracking-wide text-[#b18a3c]">
          <p className="text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">#artikel #menulis #jurnalis #sabar #tasawuf</p>
        </footer>
      </section>

      {/* GERBANG SYUKUR */}
      <section className="bg-[#173c2a] px-5 py-20 text-[#f7f5ef] sm:px-8 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d9c27a]">Lanjutan Ngaji Rumi 8 — Burung Jiwa</span>
          <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-5xl">GERBANG SYUKUR</h2>
          <p className="mt-7 max-w-4xl text-base leading-8 text-white/75 sm:text-lg sm:leading-9">Kebanyakan orang mengira syukur adalah mengucapkan “Alhamdulillah” ketika mendapat nikmat. Padahal itu baru permukaannya. Syukur adalah cara melihat dunia.</p>
          <blockquote className="mt-10 border-y border-[#d9c27a]/35 py-8 text-center font-serif text-2xl leading-relaxed text-[#d9c27a] sm:text-3xl">“Dua orang dapat melihat matahari yang sama. Yang satu berkata, ‘Panas sekali.’ Yang lain berkata, ‘Masih diberi kesempatan hidup hari ini.’ Mataharinya sama. Yang berbeda adalah jendelanya.”</blockquote>
          <p className="mt-8 max-w-4xl text-base leading-8 text-white/75 sm:text-lg sm:leading-9">Syukur bukan mengubah keadaan, tetapi mengubah cara memandang keadaan.</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">1</span>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Ketika Burung Jiwa Belajar Melihat Cahaya yang Selama Ini Terlalu Dekat</h2>
        </div>
        <blockquote className="mt-8 rounded-2xl border border-[#b18a3c]/25 bg-[#173c2a] px-6 py-8 text-center font-serif text-2xl leading-relaxed text-[#d9c27a] shadow-sm sm:px-10 sm:text-3xl">“Tidak semua orang miskin karena tidak memiliki harta. Ada yang miskin karena tidak mampu melihat nikmat yang telah dimilikinya.”</blockquote>
        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>Ada satu ironi yang diam-diam menjadi wajah zaman ini. Semakin banyak manusia memiliki sesuatu, semakin sulit mereka merasa cukup.</p>
          <p>Dahulu orang bahagia karena memiliki sepeda. Hari ini seseorang memiliki mobil, tetapi gelisah karena mobil tetangganya lebih baru.</p>
          <p>Dahulu sebuah keluarga berkumpul sambil menikmati teh hangat di beranda rumah. Hari ini satu meja makan dipenuhi makanan, tetapi setiap orang sibuk menatap layar telepon genggamnya. Teknologi semakin canggih. Rumah semakin besar. Pilihan semakin banyak. Namun hati manusia justru semakin mudah merasa kurang.</p>
          <p>Mengapa? Karena dunia modern mengajarkan kita untuk terus melihat apa yang belum dimiliki. Sedangkan Al-Qur&apos;an mengajarkan kita untuk melihat apa yang telah Allah titipkan.</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">2</span>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Syukur Bukan Sekadar Ucapan</h2>
        </div>
        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>Dalam bahasa Arab, kata syukur (الشكر) berasal dari akar kata شكر yang bermakna menampakkan, mengakui, dan menggunakan nikmat sebagaimana tujuan pemberinya. Karena itu, syukur tidak berhenti pada ucapan “Alhamdulillah.”</p>
          <p>Ucapan adalah awal. Hakikat syukur adalah ketika hati menyadari sumber nikmat, lisan memuji Allah, dan anggota badan menggunakan nikmat itu untuk kebaikan.</p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-[#173c2a]/10 bg-white/70 p-6 shadow-sm"><p className="text-sm font-semibold uppercase text-[#b18a3c]">Mengenali nikmat</p><p className="mt-2 leading-8 text-[#173c2a]/70">Menyadari setiap karunia sekecil apa pun.</p></div>
          <div className="rounded-2xl border border-[#173c2a]/10 bg-white/70 p-6 shadow-sm"><p className="text-sm font-semibold uppercase text-[#b18a3c]">Mengenali Pemberi nikmat</p><p className="mt-2 leading-8 text-[#173c2a]/70">Menautkan setiap nikmat kepada Allah.</p></div>
          <div className="rounded-2xl border border-[#173c2a]/10 bg-white/70 p-6 shadow-sm"><p className="text-sm font-semibold uppercase text-[#b18a3c]">Menggunakan sesuai kehendak-Nya</p><p className="mt-2 leading-8 text-[#173c2a]/70">Menjadikan nikmat jalan ketaatan.</p></div>
        </div>
        <div className="mt-8 rounded-2xl bg-[#e4e7df]/60 p-6 sm:p-8">
          <p className="text-base leading-8 text-[#173c2a]/80 sm:text-lg sm:leading-9">Imam Al-Ghazali dalam <em>Ihya&apos; &apos;Ulum al-Din</em> menjelaskan tiga unsur syukur ini. Maka seseorang belum benar-benar bersyukur hanya karena pandai mengucapkan “Alhamdulillah.” Pertanyaannya adalah: apakah nikmat itu membuatnya semakin dekat kepada Allah?</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">3</span>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Allah Menambah Nikmat Orang yang Bersyukur</h2>
        </div>
        <div className="mt-8 rounded-2xl bg-[#173c2a] px-6 py-8 text-center text-[#f7f5ef] shadow-sm sm:px-10 sm:py-10">
          <p className="font-serif text-2xl leading-[2.1] sm:text-3xl" dir="rtl">وَإِذْ تَأَذَّنَ رَبُّكُمْ لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ ۖ وَلَئِن كَفَرْتُمْ إِنَّ عَذَابِي لَشَدِيدٌ</p>
          <p className="mt-5 text-base leading-8 text-white/75">“Dan (ingatlah) ketika Tuhanmu memaklumkan, &apos;Sesungguhnya jika kamu bersyukur, pasti Aku akan menambah (nikmat) kepadamu. Tetapi jika kamu mengingkari, sesungguhnya azab-Ku sangat berat.&apos;”</p>
          <p className="mt-2 text-sm text-white/60">Q.S. Ibrahim [14]: 7</p>
        </div>
        <div className="mt-8 rounded-2xl border border-[#b18a3c]/20 bg-white/70 p-6 shadow-sm sm:p-8">
          <p className="text-base leading-8 text-[#173c2a]/75 sm:text-lg sm:leading-9">Para mufasir menjelaskan bahwa tambahan nikmat tidak selalu berarti bertambahnya harta. Kadang Allah menambah ketenangan, kesehatan, ilmu, keluarga yang baik, kesempatan berbuat baik, bahkan hati yang semakin mudah mengenali kehadiran-Nya.</p>
          <p className="mt-4 border-t border-[#173c2a]/10 pt-4 font-serif text-lg text-[#173c2a]">Tambahan terbesar bukanlah apa yang berada di tangan. Melainkan apa yang tumbuh di dalam hati.</p>
        </div>
      </section>

      <section className="bg-[#e4e7df]/50 px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center space-x-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">4</span>
            <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Rasulullah ﷺ Mengajarkan Syukur Melalui Amal</h2>
          </div>
          <div className="mt-8 rounded-2xl bg-[#173c2a] px-6 py-8 text-center text-[#f7f5ef] shadow-sm sm:px-10">
            <p className="font-serif text-xl leading-relaxed sm:text-2xl">“Tidakkah aku ingin menjadi seorang hamba yang bersyukur?”</p>
            <p className="mt-4 text-sm text-white/60">HR. al-Bukhari, no. 4837; Muslim, no. 2819</p>
          </div>
          <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
            <p>Aisyah radhiyallahu &apos;anha menceritakan bahwa Rasulullah ﷺ sering melaksanakan salat malam hingga kedua kaki beliau bengkak. Ketika ditanya mengapa masih bersungguh-sungguh beribadah padahal dosa-dosanya telah diampuni, beliau menjawab dengan kalimat di atas.</p>
            <p>Rasulullah tidak mendefinisikan syukur melalui kata-kata. Beliau menunjukkan syukur melalui ibadah. Artinya, syukur adalah bentuk cinta yang diwujudkan dalam tindakan.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">5</span>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Rumi: Bersyukur Mengubah Cara Kita Melihat Dunia</h2>
        </div>
        <blockquote className="mt-8 rounded-2xl border border-[#b18a3c]/25 bg-[#173c2a] px-6 py-8 text-center font-serif text-2xl leading-relaxed text-[#d9c27a] shadow-sm sm:px-10 sm:text-3xl">“Pakailah rasa syukur seperti jubah, niscaya ia akan memberi makan setiap sudut kehidupanmu.”</blockquote>
        <div className="mt-6 rounded-2xl border border-[#b18a3c]/20 bg-white/70 p-6 shadow-sm">
          <p className="text-base leading-8 text-[#173c2a]/70">Ungkapan ini sangat populer di berbagai terbitan modern tentang Rumi. Namun perlu dijelaskan secara ilmiah bahwa redaksi persisnya tidak ditemukan sebagai bait literal dalam edisi kritis <em>Masnavi</em> maupun <em>Diwan-e Shams</em>. Ia lebih tepat dipahami sebagai parafrasa yang merangkum tema-tema Rumi tentang syukur dan kelapangan hati.</p>
          <p className="mt-4 border-t border-[#173c2a]/10 pt-4 text-base leading-8 text-[#173c2a]/70">Yang dapat dipastikan dari keseluruhan karya Rumi adalah satu pesan yang terus berulang: semakin seseorang menyadari bahwa seluruh hidupnya adalah karunia Allah, semakin ringan ia menjalani kehidupan. Bagi Rumi, syukur bukan reaksi setelah menerima nikmat. Syukur adalah mata yang mampu menemukan cahaya bahkan ketika langit sedang mendung.</p>
        </div>
        <p className="mt-4 text-sm leading-7 text-[#173c2a]/55"><strong>Rujukan:</strong> Jalaluddin Rumi, Masnavi-ye Ma&apos;navi; William C. Chittick, <em>The Sufi Path of Love</em>; Annemarie Schimmel, <em>The Triumphal Sun</em>.</p>
      </section>

      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">6</span>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Syams Tabrizi: Bersyukur Membuka Mata Hati</h2>
        </div>
        <div className="mt-8 rounded-2xl border border-[#b18a3c]/20 bg-white/70 p-6 shadow-sm sm:p-8">
          <p className="text-base leading-8 text-[#173c2a]/75 sm:text-lg sm:leading-9">Syams Tabrizi, guru spiritual yang sangat memengaruhi kehidupan Rumi, dalam <em>Maqālāt-e Shams-e Tabrizi</em> menegaskan bahwa perjalanan menuju Allah dimulai ketika seseorang berhenti sibuk menuntut dunia dan mulai melihat karunia yang telah diberikan Allah.</p>
          <p className="mt-4 border-t border-[#173c2a]/10 pt-4 text-base leading-8 text-[#173c2a]/70">Syams mengajarkan bahwa manusia sering kehilangan nikmat bukan karena Allah mengambilnya, melainkan karena mata hati tertutup oleh keinginan yang tidak pernah selesai.</p>
        </div>
        <p className="mt-4 text-sm leading-7 text-[#173c2a]/55"><strong>Sumber:</strong> Syams-e Tabrizi, Maqālāt-e Shams-e Tabrizi (<em>The Discourses of Shams-i Tabrizi</em>).</p>
      </section>

      <section className="bg-[#e4e7df]/50 px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center space-x-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">7</span>
            <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Penyakit Zaman: Membandingkan Hidup</h2>
          </div>
          <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
            <p>Hari ini kita tidak hanya hidup. Kita juga terus membandingkan hidup. Media sosial membuat kita melihat liburan orang lain, rumah orang lain, kesuksesan orang lain, tubuh orang lain, prestasi orang lain. Sedikit demi sedikit, hati mulai percaya bahwa hidup orang lain selalu lebih indah.</p>
            <p>Padahal kita hanya melihat potongan-potongan cerita yang mereka pilih untuk ditampilkan. Kita tidak melihat air mata yang mereka sembunyikan, kecemasan yang mereka tutupi, dan doa-doa yang belum dijawab.</p>
          </div>
          <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm sm:p-8">
            <p className="text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">Syukur membebaskan kita dari perlombaan yang tidak pernah diminta Allah. Ia mengembalikan perhatian kita kepada kehidupan yang sedang kita jalani.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">8</span>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Burung Jiwa dan Langit yang Sama</h2>
        </div>
        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>Seekor burung tidak iri kepada burung lain karena langit terlalu luas untuk diperebutkan. Ia hanya mengepakkan sayapnya menuju rezeki yang telah Allah siapkan. Begitu pula manusia. Kita sering lelah bukan karena hidup terlalu berat, tetapi karena terlalu sibuk menghitung nikmat orang lain.</p>
          <p>Padahal Allah tidak pernah meminta kita menjalani kehidupan orang lain. Allah hanya meminta kita mensyukuri kehidupan yang telah dipercayakan kepada kita.</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">9</span>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Syukur untuk Masa Depan</h2>
        </div>
        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>Kecerdasan buatan akan semakin hebat. Robot akan semakin pintar. Teknologi akan semakin cepat. Namun satu hal tidak akan pernah dapat diproduksi oleh mesin: hati yang bersyukur.</p>
          <p>Justru ketika dunia semakin otomatis, manusia semakin membutuhkan hati yang mampu berhenti sejenak, mengagumi matahari terbit, memeluk orang tua, menolong sesama, bersujud kepada Allah, dan berkata dengan penuh kesadaran: “Ya Allah, ternyata Engkau telah begitu baik kepadaku.”</p>
          <p>Barangkali syukur bukan sekadar mengingat nikmat. Syukur adalah mengingat Allah di balik setiap nikmat. Dan ketika itu terjadi, burung jiwa tidak lagi terbang mencari kebahagiaan. Ia menyadari bahwa kebahagiaan telah lama menunggu di dalam hatinya, bersama Tuhan yang tidak pernah meninggalkannya.</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">10</span>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Ruang Sunyi</h2>
        </div>
        <div className="mt-8 rounded-2xl border border-[#b18a3c]/20 bg-white/70 p-6 shadow-sm sm:p-8">
          <p className="text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">Malam ini, sebelum tidur, jangan tanyakan kepada dirimu: “Apa yang belum aku miliki?” Tanyakanlah: “Nikmat apa yang selama ini aku nikmati, tetapi jarang aku syukuri?”</p>
          <p className="mt-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">Mungkin itu adalah napas, kedua orang tua, kesehatan, kesempatan untuk bertobat, atau kemampuan hatimu yang masih bisa tersentuh ketika mengingat Allah. Jika engkau masih memilikinya, jangan pernah berkata bahwa hidupmu miskin.</p>
          <p className="mt-6 border-t border-[#173c2a]/10 pt-4 font-serif text-lg text-[#173c2a]">Sebab burung jiwa yang bersyukur selalu menemukan langit, bahkan ketika awan sedang menutupinya.</p>
        </div>
        <div className="mt-8 rounded-2xl border border-[#173c2a]/10 bg-white/70 p-6 text-sm leading-7 text-[#173c2a]/60 shadow-sm sm:p-8">
          <p><strong>Daftar Rujukan:</strong></p>
          <p className="mt-2">Al-Qur&apos;an: Q.S. Ibrahim [14]: 7; Q.S. An-Nahl [16]: 78; Q.S. Luqman [31]: 12.</p>
          <p className="mt-2">Hadis: HR. al-Bukhari no. 4837; HR. Muslim no. 2819.</p>
          <p className="mt-2">Al-Ghazali: Ihya&apos; &apos;Ulum al-Din, Kitab al-Shabr wa al-Syukr.</p>
          <p className="mt-2">Rumi: Masnavi-ye Ma&apos;navi; Diwan-e Shams-e Tabrizi.</p>
          <p className="mt-2">Syams Tabrizi: Maqālāt-e Shams-e Tabrizi.</p>
          <p className="mt-2">Kajian Modern: William C. Chittick, <em>The Sufi Path of Love</em>; Annemarie Schimmel, <em>The Triumphal Sun</em>.</p>
        </div>
        <div className="mt-8 rounded-2xl border border-[#173c2a]/10 bg-white/70 p-6 text-base leading-8 text-[#173c2a]/75 shadow-sm sm:p-8 sm:text-lg sm:leading-9">
          <p className="font-serif text-xl font-semibold text-[#173c2a]">Wallahu a&apos;lam</p>
        </div>
        <blockquote className="mt-10 rounded-2xl border border-[#b18a3c]/25 bg-[#173c2a] px-6 py-8 text-center text-[#f7f5ef] shadow-sm sm:px-10">
          <p className="font-serif text-2xl text-[#d9c27a]">Berikutnya</p>
          <p className="mt-4 text-base italic text-white/80 sm:text-lg">Masih di maqāmāt. Fokus maqām Tawakal.</p>
        </blockquote>
        <footer className="mt-8 flex flex-wrap gap-2 text-xs font-medium tracking-wide text-[#b18a3c]">
          <p className="text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">#artikel #fihimafihi #jalaluddinrumi #alghazali #mjuharuddin #facebookpro</p>
        </footer>
      </section>

      {/* GERBANG TAWAKAL */}
      <section className="bg-[#173c2a] px-5 py-20 text-[#f7f5ef] sm:px-8 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d9c27a]">Lanjutan Ngaji Rumi 8 — Burung Jiwa</span>
          <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-5xl">GERBANG TAWAKAL</h2>
          <p className="mt-7 max-w-4xl text-base leading-8 text-white/75 sm:text-lg sm:leading-9">Pada maqām Taubat, burung jiwa belajar pulang. Pada Sabar, ia belajar bertahan di tengah angin. Pada Syukur, ia belajar melihat langit dengan mata yang baru. Maka di Tawakal ini bukan lagi sekadar “pasrah kepada Allah”.</p>
          <blockquote className="mt-10 border-y border-[#d9c27a]/35 py-8 text-center font-serif text-2xl leading-relaxed text-[#d9c27a] sm:text-3xl">“Tawakal adalah keberanian burung jiwa untuk tetap terbang, meskipun ia tidak dapat melihat seluruh arah angin.”</blockquote>
          <p className="mt-8 max-w-4xl text-base leading-8 text-white/75 sm:text-lg sm:leading-9">Kita hidup di zaman yang ingin mengendalikan semuanya: masa depan, karier, pasangan, investasi, bahkan berusaha memprediksi setiap kemungkinan melalui data dan teknologi. Tawakal hadir bukan untuk menolak ikhtiar, tetapi untuk membebaskan manusia dari ilusi bahwa ia mampu mengendalikan segala sesuatu.</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">1</span>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Ketika Burung Jiwa Belajar Mempercayai Angin</h2>
        </div>
        <blockquote className="mt-8 rounded-2xl border border-[#b18a3c]/25 bg-[#173c2a] px-6 py-8 text-center font-serif text-2xl leading-relaxed text-[#d9c27a] shadow-sm sm:px-10 sm:text-3xl">“Seekor burung tidak pernah bertanya ke mana angin akan bertiup esok pagi. Ia hanya memastikan sayapnya tetap kuat, lalu menyerahkan langit kepada Sang Pencipta.”</blockquote>
        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>Barangkali salah satu beban terbesar manusia modern bukanlah pekerjaan, bukan pula kemiskinan, melainkan keinginan untuk mengendalikan sesuatu yang memang tidak pernah berada dalam kekuasaannya. Kita ingin memastikan masa depan, usaha selalu berhasil, anak-anak tumbuh sesuai harapan, orang yang dicintai tidak pernah pergi, tubuh selalu sehat, dan doa dijawab sesuai waktu yang kita inginkan.</p>
          <p>Lalu ketika hidup berjalan di luar rencana, hati mulai gelisah. Kita bertanya, “Mengapa Allah tidak mengabulkan keinginanku?” Padahal mungkin pertanyaan yang lebih jujur adalah: “Mengapa aku begitu ingin mengendalikan sesuatu yang sejak awal bukan milikku?”</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">2</span>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Tawakal: Menyerahkan Hasil, Bukan Meninggalkan Ikhtiar</h2>
        </div>
        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>Dalam bahasa Arab, kata tawakal (التوكل) berasal dari akar kata وكل (wakala), yang berarti menyerahkan urusan kepada pihak yang dipercaya.</p>
          <p>Dalam Islam, tawakal bukanlah berhenti berusaha. Tawakal adalah menyempurnakan ikhtiar, lalu menyerahkan hasilnya kepada Allah dengan hati yang tenang.</p>
        </div>
        <div className="mt-8 rounded-2xl bg-[#e4e7df]/60 p-6 sm:p-8">
          <p className="font-serif text-lg text-[#173c2a] sm:text-xl">Ikhtiar adalah tugas manusia, hasil adalah hak Allah.</p>
          <p className="mt-4 text-base leading-8 text-[#173c2a]/80 sm:text-lg">Kesalahan terbesar manusia modern adalah mencampur keduanya. Kita sering mengambil alih wilayah yang bukan milik kita.</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">3</span>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Allah Mencintai Orang yang Bertawakal</h2>
        </div>
        <div className="mt-8 rounded-2xl bg-[#173c2a] px-6 py-8 text-center text-[#f7f5ef] shadow-sm sm:px-10 sm:py-10">
          <p className="font-serif text-2xl leading-[2.1] sm:text-3xl" dir="rtl">فَإِذَا عَزَمْتَ فَتَوَكَّلْ عَلَى اللَّهِ ۚ إِنَّ اللَّهَ يُحِبُّ الْمُتَوَكِّلِينَ</p>
          <p className="mt-5 text-base leading-8 text-white/75">“Kemudian apabila engkau telah membulatkan tekad, maka bertawakallah kepada Allah. Sesungguhnya Allah mencintai orang-orang yang bertawakal.”</p>
          <p className="mt-2 text-sm text-white/60">Q.S. Ali &apos;Imran [3]: 159</p>
        </div>
        <div className="mt-8 rounded-2xl border border-[#b18a3c]/20 bg-white/70 p-6 shadow-sm sm:p-8">
          <p className="text-base leading-8 text-[#173c2a]/75 sm:text-lg sm:leading-9">Perhatikan urutan ayat ini. Allah tidak mengatakan: “Bertawakallah, lalu bertekad”. Yang disebut lebih dahulu adalah tekad. Artinya, Islam tidak mengajarkan kemalasan. Keputusan diambil, usaha dilakukan, musyawarah ditempuh, lalu hati berserah kepada Allah.</p>
          <p className="mt-4 border-t border-[#173c2a]/10 pt-4 text-base leading-8 text-[#173c2a]/70">Dalam Tafsir Ibnu Katsir, ayat ini menunjukkan bahwa setelah seorang hamba menggunakan sebab-sebab yang dibenarkan syariat, ia diperintahkan menyerahkan hasil akhirnya kepada Allah, karena hanya Allah yang menguasai segala akibat.</p>
        </div>
        <div className="mt-8 rounded-2xl bg-[#173c2a] px-6 py-8 text-center text-[#f7f5ef] shadow-sm sm:px-10">
          <p className="font-serif text-2xl leading-[2.1] sm:text-3xl" dir="rtl">وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ</p>
          <p className="mt-5 text-base leading-8 text-white/75">“Barang siapa bertawakal kepada Allah, niscaya Allah akan mencukupinya.”</p>
          <p className="mt-2 text-sm text-white/60">Q.S. At-Talaq [65]: 3</p>
        </div>
        <p className="mt-8 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">“Cukup” dalam ayat ini tidak selalu berarti semua keinginan terpenuhi. Kadang Allah mencukupkan hati, kesabaran, dan kekuatan untuk menghadapi sesuatu yang tidak dapat diubah.</p>
      </section>

      <section className="bg-[#e4e7df]/50 px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center space-x-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">4</span>
            <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Rasulullah ﷺ: Ikat Untamu, Lalu Bertawakallah</h2>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-[#173c2a] px-6 py-8 text-center text-[#f7f5ef] shadow-sm"><p className="font-serif text-xl leading-relaxed sm:text-2xl">“Ikatlah terlebih dahulu, kemudian bertawakallah.”</p><p className="mt-4 text-sm text-white/60">HR. at-Tirmidzi, no. 2517</p></div>
            <div className="rounded-2xl bg-[#173c2a] px-6 py-8 text-center text-[#f7f5ef] shadow-sm"><p className="font-serif text-xl leading-relaxed sm:text-2xl">“Seandainya kalian bertawakal kepada Allah dengan sebenar-benarnya tawakal...”</p><p className="mt-4 text-sm text-white/60">HR. at-Tirmidzi, no. 2344</p></div>
          </div>
          <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm sm:p-8">
            <p className="text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">Hadis yang singkat ini membongkar kesalahpahaman yang masih sering terjadi. Tawakal bukan alasan untuk mengabaikan usaha. Sebaliknya, usaha yang sungguh-sungguh adalah bagian dari tawakal itu sendiri.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">5</span>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Rumi: Percayalah kepada Jalan yang Tidak Selalu Kau Pahami</h2>
        </div>
        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>Dalam <em>Masnavi-ye Ma&apos;navi</em>, Rumi berulang kali mengingatkan bahwa manusia sering ingin memahami seluruh rencana Allah sebelum berani melangkah. Padahal iman justru tumbuh ketika seseorang tetap berjalan meski belum melihat seluruh ujung jalan.</p>
        </div>
        <div className="mt-6 rounded-2xl bg-[#173c2a] px-6 py-8 text-center text-2xl leading-[2.2] text-[#f7f5ef] shadow-sm sm:px-8 sm:text-3xl" dir="rtl"><p>هر کسی کو دور ماند از اصل خویش</p><p>باز جوید روزگار وصل خویش</p></div>
        <div className="mt-5 rounded-2xl border border-[#173c2a]/10 bg-white/70 px-6 py-5 text-sm leading-8 text-[#173c2a]/70"><strong>Transliterasi:</strong><br />Har kasī kū dūr mānd az aṣl-e khīsh, bāz jūyad rūzgār-e waṣl-e khīsh.</div>
        <p className="mt-5 text-base leading-8 text-[#173c2a]/70 sm:text-lg"><strong>Terjemahan:</strong><br />“Setiap orang yang jauh dari asalnya akan selalu merindukan saat untuk kembali bersatu dengan asalnya.”</p>
        <p className="mt-4 text-sm leading-7 text-[#173c2a]/55"><strong>Sumber:</strong> Jalaluddin Rumi, Masnavi-ye Ma&apos;navi, Buku I, bait-bait awal.</p>
        <div className="mt-6 rounded-2xl border border-[#b18a3c]/20 bg-white/70 p-6 shadow-sm">
          <p className="text-base leading-8 text-[#173c2a]/70">Kerinduan untuk kembali kepada Allah itulah yang melahirkan tawakal. Ketika hati mengenal asalnya, ia tidak lagi menggantungkan ketenangan pada keadaan yang berubah-ubah.</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">6</span>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Syekh Abdul Qadir al-Jailani: Tawakal Bukan Meninggalkan Sebab</h2>
        </div>
        <div className="mt-8 rounded-2xl border border-[#b18a3c]/20 bg-white/70 p-6 shadow-sm sm:p-8">
          <p className="text-base leading-8 text-[#173c2a]/75 sm:text-lg sm:leading-9">Syekh Abdul Qadir al-Jailani menjelaskan bahwa tawakal bukan berarti meninggalkan usaha. Seorang hamba tetap diperintahkan mengambil sebab-sebab yang halal, namun hatinya tidak bergantung kepada sebab itu.</p>
          <p className="mt-4 border-t border-[#173c2a]/10 pt-4 text-base leading-8 text-[#173c2a]/70">Dalam <em>Al-Fath al-Rabbani</em>, beliau menasihati agar sandaran seorang mukmin berpindah dari makhluk kepada Allah. Sebab-sebab hanyalah sarana, sedangkan Yang memberi hasil adalah Allah. Hati yang benar-benar bertawakal akan tetap tenang, baik ketika pintu dunia dibuka maupun ketika ditutup, karena keyakinannya tidak bergantung pada keadaan.</p>
        </div>
        <p className="mt-4 text-sm leading-7 text-[#173c2a]/55"><strong>Sumber:</strong> Syekh Abdul Qadir al-Jailani, Al-Fath al-Rabbani; Futuh al-Ghaib.</p>
      </section>

      <section className="bg-[#e4e7df]/50 px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center space-x-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">7</span>
            <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Tawakal di Era Artificial Intelligence</h2>
          </div>
          <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
            <p>Hari ini kita hidup di zaman yang mampu memprediksi cuaca, membaca kebiasaan manusia melalui algoritma, bahkan membantu memperkirakan risiko berbagai keputusan. Semua itu adalah nikmat ilmu yang patut disyukuri. Namun teknologi juga membawa godaan baru: manusia mulai percaya bahwa jika datanya cukup banyak, ia dapat mengendalikan masa depan.</p>
            <p>Padahal hidup selalu menyimpan wilayah yang tidak dapat dipetakan oleh algoritma. Tidak ada kecerdasan buatan yang mampu memastikan siapa yang masih hidup esok pagi. Tidak ada model statistik yang mampu menjamin doa akan dikabulkan pada tanggal tertentu. Tidak ada mesin yang mampu menggantikan ketenangan hati seorang yang bertawakal.</p>
          </div>
          <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm sm:p-8">
            <p className="text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">Karena itu, di masa depan, nilai tawakal justru akan semakin penting. Bukan sebagai lawan dari ilmu pengetahuan, melainkan sebagai penyeimbangnya.</p>
            <p className="mt-4 border-t border-[#173c2a]/10 pt-4 font-serif text-lg text-[#173c2a]">Ilmu mengajarkan kita menghitung kemungkinan. Tawakal mengajarkan kita menerima bahwa Allah tetap memiliki keputusan terakhir.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">8</span>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Burung Jiwa dan Langit yang Tidak Selalu Cerah</h2>
        </div>
        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>Seekor burung tidak menunggu seluruh langit menjadi cerah untuk mulai terbang. Ia belajar membaca angin, menggerakkan sayap, lalu mempercayakan langit kepada Tuhan yang menciptakan angin itu sendiri.</p>
          <p>Begitu pula seorang mukmin. Ia tetap bekerja, belajar, merencanakan, dan berdoa. Tetapi ketika hasilnya berbeda dari harapannya, ia tidak kehilangan kepercayaan kepada Allah. Karena ia sadar, bisa jadi Allah sedang menyelamatkannya dari sesuatu yang belum mampu ia lihat.</p>
        </div>
        <blockquote className="mt-10 rounded-2xl border border-[#b18a3c]/25 bg-[#173c2a] px-6 py-8 text-center font-serif text-2xl leading-relaxed text-[#d9c27a] shadow-sm sm:px-10 sm:text-3xl">Tawakal bukan menghilangkan ketidakpastian. Tawakal membuat hati tetap tenang di tengah ketidakpastian.</blockquote>
      </section>

      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">9</span>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Ruang Sunyi</h2>
        </div>
        <div className="mt-8 rounded-2xl border border-[#b18a3c]/20 bg-white/70 p-6 shadow-sm sm:p-8">
          <p className="text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">Hari ini, tulislah di selembar kertas tiga hal yang paling membuatmu cemas. Lalu di sampingnya, tulislah: “Aku akan mengerjakan bagian yang menjadi tugasku. Selebihnya, aku menyerahkannya kepada Allah.”</p>
          <p className="mt-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">Kemudian bacalah perlahan: “Barang siapa bertawakal kepada Allah, maka Allah akan mencukupinya.” (Q.S. At-Talaq [65]: 3).</p>
          <p className="mt-6 border-t border-[#173c2a]/10 pt-4 font-serif text-lg text-[#173c2a]">Mungkin yang selama ini melelahkan bukan beratnya kehidupan, melainkan beratnya keinginan untuk memikul beban yang sebenarnya tidak pernah Allah minta engkau pikul.</p>
        </div>
        <div className="mt-8 rounded-2xl border border-[#173c2a]/10 bg-white/70 p-6 text-sm leading-7 text-[#173c2a]/60 shadow-sm sm:p-8">
          <p><strong>Rujukan:</strong></p>
          <p className="mt-2">Al-Qur&apos;an: Q.S. Ali &apos;Imran [3]: 159; Q.S. At-Talaq [65]: 3; Q.S. Al-Anfal [8]: 2; Q.S. Hud [11]: 123.</p>
          <p className="mt-2">Hadis: HR. at-Tirmidzi no. 2517; HR. at-Tirmidzi no. 2344.</p>
          <p className="mt-2">Tafsir: Tafsir Ibn Kathir; Jāmi&apos; al-Bayān karya al-Ṭabari; Al-Jāmi&apos; li Aḥkām al-Qur&apos;ān karya al-Qurṭubi.</p>
          <p className="mt-2">Tasawuf: Syekh Abdul Qadir al-Jailani, Al-Fath al-Rabbani; Futuh al-Ghaib.</p>
          <p className="mt-2">Rumi: Masnavi-ye Ma&apos;navi; William C. Chittick, <em>The Sufi Path of Love</em>; Annemarie Schimmel, <em>The Triumphal Sun</em>.</p>
        </div>
        <div className="mt-8 rounded-2xl border border-[#173c2a]/10 bg-white/70 p-6 text-base leading-8 text-[#173c2a]/75 shadow-sm sm:p-8 sm:text-lg sm:leading-9">
          <p className="font-serif text-xl font-semibold text-[#173c2a]">Wallahu a&apos;lam</p>
        </div>
        <blockquote className="mt-10 rounded-2xl border border-[#b18a3c]/25 bg-[#173c2a] px-6 py-8 text-center text-[#f7f5ef] shadow-sm sm:px-10">
          <p className="font-serif text-2xl text-[#d9c27a]">Berikutnya</p>
          <p className="mt-4 text-base italic text-white/80 sm:text-lg">Masih dengan Gerbang Tawakal: “Bagaimana berserah kepada Allah ketika gagal?” &amp; “Bagaimana tetap bertawakal ketika berhasil?”</p>
        </blockquote>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20"><p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#b18a3c]">Letter to Rumi</p><h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Pesan 3 — Perpustakaan Cahaya</h2><div className="mt-8 rounded-2xl border border-[#b18a3c]/20 bg-white/70 p-6 text-base leading-8 text-[#173c2a]/70 shadow-sm sm:p-8 sm:text-lg sm:leading-9"><p>Wahai Maulana, Sang Guru Mulia. Kulanjutkan cerita momen selamatan pembukaan Perpustakaan Cahaya-ku.</p><p className="mt-5">Abah: “Monggo sareng-sareng ndongo, mugi-mugi perpustakaan meniko angsal ridho saking Allah SWT lan saget manfaate kangge masyarakat Welang mriki. Al-Fatihah...”</p><p className="mt-5">Alunan doa terucap khusyuk dan diaminkan seluruh sanak serta kawan yang hadir. Setelahnya, hidangan selamatan dinikmati bersama. Sebentar lagi azan Isya berkumandang; selepas shalat Isya, pintu perpustakaan akan dibuka untuk anak-anak yang telah menanti membaca atau sekadar bermain bersama.</p><p className="mt-6 font-serif text-xl text-[#173c2a]">Wallahu a'lam.</p></div><div className="mt-10 border-t border-[#173c2a]/10 pt-6 text-sm leading-7 text-[#173c2a]/55"><p><strong>Pendukung primer:</strong> Rumi, Jalaluddin Muhammad. (2011). <em>Masnavi-ye Ma’navi</em>. Tehran: Entesharat-e Amir Kabir.</p><p className="mt-2"><strong>Pendukung sekunder:</strong> Rumi, Jalaluddin. (2003). <em>Matsnawi: Syair-syair Sufistik</em>, diterjemahkan oleh Abdul Hadi W.M. Yogyakarta: Pustaka Sufi.</p></div></section>
    </article>
  );
}
