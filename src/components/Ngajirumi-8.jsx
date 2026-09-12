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

      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20"><p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#b18a3c]">Letter to Rumi</p><h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Pesan 3 — Perpustakaan Cahaya</h2><div className="mt-8 rounded-2xl border border-[#b18a3c]/20 bg-white/70 p-6 text-base leading-8 text-[#173c2a]/70 shadow-sm sm:p-8 sm:text-lg sm:leading-9"><p>Wahai Maulana, Sang Guru Mulia. Kulanjutkan cerita momen selamatan pembukaan Perpustakaan Cahaya-ku.</p><p className="mt-5">Abah: “Monggo sareng-sareng ndongo, mugi-mugi perpustakaan meniko angsal ridho saking Allah SWT lan saget manfaate kangge masyarakat Welang mriki. Al-Fatihah...”</p><p className="mt-5">Alunan doa terucap khusyuk dan diaminkan seluruh sanak serta kawan yang hadir. Setelahnya, hidangan selamatan dinikmati bersama. Sebentar lagi azan Isya berkumandang; selepas shalat Isya, pintu perpustakaan akan dibuka untuk anak-anak yang telah menanti membaca atau sekadar bermain bersama.</p><p className="mt-6 font-serif text-xl text-[#173c2a]">Wallahu a'lam.</p></div><div className="mt-10 border-t border-[#173c2a]/10 pt-6 text-sm leading-7 text-[#173c2a]/55"><p><strong>Pendukung primer:</strong> Rumi, Jalaluddin Muhammad. (2011). <em>Masnavi-ye Ma’navi</em>. Tehran: Entesharat-e Amir Kabir.</p><p className="mt-2"><strong>Pendukung sekunder:</strong> Rumi, Jalaluddin. (2003). <em>Matsnawi: Syair-syair Sufistik</em>, diterjemahkan oleh Abdul Hadi W.M. Yogyakarta: Pustaka Sufi.</p></div></section>
    </article>
  );
}
