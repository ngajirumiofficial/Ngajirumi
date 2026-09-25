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

      {/* ANTARA GAGAL DAN BERHASIL */}
      <section className="bg-[#173c2a] px-5 py-20 text-[#f7f5ef] sm:px-8 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d9c27a]">Masih di Gerbang Tawakal</span>
          <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-5xl">ANTARA GAGAL DAN BERHASIL</h2>
          <p className="mt-5 text-sm leading-7 text-white/75 sm:text-base">NGAJI RUMI 8 &quot;BURUNG JIWA&quot; — By. M. Juharuddin</p>

          <div className="mt-8 rounded-2xl border border-[#d9c27a]/20 bg-white/10 p-6 backdrop-blur-sm sm:p-8">
            <p className="text-base leading-8 text-white/80 sm:text-lg">
              Hampir semua buku tasawuf berbicara tentang bertawakal ketika gagal. Padahal Al-Qur&apos;an juga mengajarkan sesuatu yang lebih sulit: <strong className="mt-2 block font-serif text-xl font-normal text-[#d9c27a] sm:text-2xl">&quot;Tetap bertawakal ketika berhasil.&quot;</strong>
            </p>
            <p className="mt-4 text-base leading-8 text-white/75 sm:text-lg">
              Banyak orang mampu sujud ketika kehilangan. Tetapi sedikit yang tetap sujud ketika mendapatkan segalanya. Sub ini berbicara tentang dua ujian terbesar manusia: kegagalan dan keberhasilan.
            </p>
          </div>
        </div>
      </section>

      {/* 1. Ketika Burung Jiwa Tetap Memilih Allah */}
      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">1</span>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Ketika Burung Jiwa Tetap Memilih Allah</h2>
        </div>
        <blockquote className="mt-8 rounded-2xl border border-[#b18a3c]/25 bg-white/70 px-6 py-8 text-center font-serif text-xl leading-relaxed text-[#173c2a] shadow-sm sm:px-10 sm:text-2xl">
          “Ada manusia yang mengenal Allah ketika hidupnya runtuh. Ada pula yang kehilangan Allah ketika hidupnya sedang berada di puncak.”
        </blockquote>
        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>
            Hampir semua manusia memiliki doa yang sama: ingin berhasil, usahanya berkembang, keluarganya bahagia, dan cita-citanya tercapai. Tidak ada yang salah dengan semua itu. Islam tidak pernah mengajarkan umatnya untuk membenci keberhasilan. Rasulullah ﷺ justru mengajarkan umatnya agar bekerja keras, berikhtiar, dan menjadi pribadi yang kuat.
          </p>
          <p>
            Namun ada satu kenyataan yang sering terlupakan. Allah tidak hanya menguji manusia melalui kegagalan; Allah juga menguji manusia melalui keberhasilan. Sering kali kita mengira bahwa ujian hanya datang dalam bentuk kehilangan. Padahal Al-Qur&apos;an mengingatkan bahwa kelapangan juga merupakan ujian. Kekayaan, jabatan, popularitas, ilmu, bahkan pujian manusia pun dapat menjadi ujian yang jauh lebih berat daripada celaan.
          </p>
          <p className="font-serif text-xl font-semibold text-[#173c2a]">
            Karena itu, tawakal bukan hanya dibutuhkan ketika hidup terasa gelap. Tawakal juga dibutuhkan ketika langit sedang cerah.
          </p>
        </div>
      </section>

      {/* 2. Ketika Gagal: Allah Tidak Sedang Menghukum */}
      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">2</span>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Ketika Gagal: Allah Tidak Sedang Menghukum</h2>
        </div>
        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>
            Kegagalan sering membuat manusia mempertanyakan dirinya: &quot;Apakah Allah tidak mencintaiku?&quot;, &quot;Mengapa doaku belum dikabulkan?&quot;, &quot;Mengapa orang lain berhasil, sedangkan aku tidak?&quot;
          </p>
          <p>
            Padahal Al-Qur&apos;an mengajarkan bahwa hasil bukanlah satu-satunya ukuran kasih sayang Allah.
          </p>
        </div>

        <div className="mt-8 rounded-2xl bg-[#173c2a] px-6 py-8 text-center text-[#f7f5ef] shadow-sm sm:px-10">
          <p className="font-serif text-2xl leading-relaxed sm:text-3xl" dir="rtl">
            وَعَسَىٰ أَنْ تَكْرَهُوا شَيْئًا وَهُوَ خَيْرٌ لَكُمْ ۖ وَعَسَىٰ أَنْ تُحِبُّوا شَيْئًا وَهُوَ شَرٌّ لَكُمْ ۗ وَاللَّهُ يَعْلَمُ وَأَنْتُمْ لَا تَعْلَمُونَ
          </p>
          <p className="mt-5 text-base leading-8 text-white/75 sm:text-lg">
            “Boleh jadi kamu membenci sesuatu, padahal itu baik bagimu. Dan boleh jadi kamu menyukai sesuatu, padahal itu buruk bagimu. Allah mengetahui, sedangkan kamu tidak mengetahui.”
          </p>
          <p className="mt-2 text-sm text-[#d9c27a]">Q.S. Al-Baqarah [2]: 216</p>
        </div>

        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>
            Ayat ini mengajarkan bahwa manusia hanya melihat satu halaman dari sebuah buku, sedangkan Allah melihat keseluruhan kisah. Apa yang hari ini tampak sebagai kegagalan, bisa jadi merupakan perlindungan yang belum kita pahami.
          </p>
        </div>

        <div className="mt-8 rounded-2xl border border-[#b18a3c]/20 bg-white/70 p-6 shadow-sm sm:p-8">
          <p className="font-serif text-xl font-semibold text-[#173c2a]">Sabda Rasulullah ﷺ:</p>
          <p className="mt-3 text-base leading-8 text-[#173c2a]/75 sm:text-lg">
            &quot;Sungguh menakjubkan urusan seorang mukmin. Semua urusannya baik baginya. Jika memperoleh kesenangan, ia bersyukur dan itu baik baginya. Jika ditimpa kesusahan, ia bersabar dan itu pun baik baginya.&quot;
          </p>
          <p className="mt-3 text-sm text-[#173c2a]/55">HR. Muslim, no. 2999</p>
        </div>

        <p className="mt-8 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          Kegagalan bukanlah identitas. Ia hanyalah salah satu peristiwa dalam perjalanan hidup. Jangan pernah menyebut dirimu &quot;orang gagal&quot;. Katakanlah: <strong className="text-[#173c2a]">&quot;Aku sedang mengalami kegagalan, tetapi aku tidak kehilangan Tuhanku.&quot;</strong>
        </p>
      </section>

      {/* 3. Ketika Berhasil: Jangan Sampai Kehilangan Allah */}
      <section className="bg-[#e4e7df]/50 px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center space-x-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">3</span>
            <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Ketika Berhasil: Jangan Sampai Kehilangan Allah</h2>
          </div>
          <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
            <p>
              Ironisnya, keberhasilan sering lebih berbahaya daripada kegagalan. Ketika gagal, manusia cenderung berdoa. Ketika berhasil, manusia sering merasa dirinya penyebab utama keberhasilannya.
            </p>
          </div>

          <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm sm:p-8">
            <p className="font-serif text-lg text-[#173c2a]">Al-Qur&apos;an mengabadikan kesombongan Qarun yang berkata:</p>
            <div className="mt-4 rounded-xl bg-[#173c2a] px-6 py-6 text-center text-[#f7f5ef]">
              <p className="font-serif text-2xl leading-relaxed" dir="rtl">إِنَّمَا أُوتِيتُهُ عَلَىٰ عِلْمٍ عِندِي</p>
              <p className="mt-3 text-base text-white/80">&quot;Sesungguhnya aku diberi harta itu semata-mata karena ilmu yang ada padaku.&quot;</p>
              <p className="mt-1 text-sm text-[#d9c27a]">Q.S. Al-Qashash [28]: 78</p>
            </div>
            <p className="mt-5 text-base leading-8 text-[#173c2a]/70">
              Kalimat ini terdengar sangat modern. Hari ini kita mendengarnya dalam bentuk: &quot;Semua ini hasil kerja kerasku&quot;, &quot;Aku sukses karena strategiku&quot;, &quot;Aku berhasil karena kecerdasanku.&quot;
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-[#b18a3c]/20 bg-white/70 p-6 shadow-sm sm:p-8">
            <p className="text-base leading-8 text-[#173c2a]/75 sm:text-lg">
              Padahal Al-Qur&apos;an tidak menolak kerja keras. Yang ditolak adalah lupa bahwa kemampuan bekerja keras pun merupakan karunia Allah. Karena itu Allah mengingatkan:
            </p>
            <p className="mt-4 text-center font-serif text-xl text-[#173c2a]" dir="rtl">وَمَا بِكُم مِّن نِّعْمَةٍ فَمِنَ اللَّهِ</p>
            <p className="mt-2 text-center text-sm text-[#173c2a]/70">&quot;Segala nikmat yang ada padamu berasal dari Allah.&quot; (Q.S. An-Nahl [16]: 53)</p>
          </div>
        </div>
      </section>

      {/* 4. Rumi: Jangan Terlalu Mabuk oleh Keberhasilan atau Terlalu Hancur oleh Kegagalan */}
      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">4</span>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Pandangan Jalaluddin Rumi</h2>
        </div>
        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>
            Dalam <em>Masnavi-ye Ma&apos;navi</em>, Rumi berulang kali mengingatkan bahwa perubahan adalah bagian dari kehidupan. Dunia terus berputar; keadaan manusia silih berganti. Karena itu, orang yang menggantungkan jiwanya pada keadaan akan selalu diguncang oleh perubahan.
          </p>
          <p>
            Rumi mengajak manusia untuk menambatkan hati kepada Yang Mahakekal, bukan kepada keadaan yang sementara. Dalam pandangannya, untung dan rugi, datang dan pergi, hanyalah ombak di permukaan lautan. Kedalaman lautan tetap tenang.
          </p>
        </div>
        <p className="mt-4 text-sm leading-7 text-[#173c2a]/55"><strong>Sumber:</strong> Jalaluddin Rumi, <em>Masnavi-ye Ma&apos;navi</em>; William C. Chittick, <em>The Sufi Path of Love</em>.</p>
      </section>

      {/* 5. Imam Junaid al-Baghdadi: Hakikat Tawakal */}
      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">5</span>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Imam Junaid al-Baghdadi: Hakikat Tawakal</h2>
        </div>
        <div className="mt-8 rounded-2xl border border-[#b18a3c]/20 bg-white/70 p-6 shadow-sm sm:p-8">
          <p className="text-base leading-8 text-[#173c2a]/75 sm:text-lg sm:leading-9">
            Imam Junaid al-Baghdadi, tokoh besar tasawuf Sunni, menjelaskan bahwa tawakal bukanlah meninggalkan usaha, melainkan kosongnya hati dari ketergantungan kepada selain Allah. Beliau mengajarkan bahwa seorang hamba tetap bekerja, berusaha, dan menggunakan sebab-sebab syariat, tetapi hatinya hanya bergantung kepada Allah.
          </p>
          <p className="mt-4 border-t border-[#173c2a]/10 pt-4 text-base leading-8 text-[#173c2a]/70">
            Prinsip ini membuat seorang mukmin tidak hancur ketika kehilangan sebab, dan tidak mabuk ketika memperoleh sebab. Karena sandarannya bukan pada dunia, melainkan kepada Tuhan yang menguasai dunia.
          </p>
        </div>
        <p className="mt-4 text-sm leading-7 text-[#173c2a]/55"><strong>Sumber:</strong> Abu al-Qasim al-Qusyairi, <em>Ar-Risalah al-Qusyairiyyah</em>; Abu Nu&apos;aim al-Ashfahani, <em>Hilyat al-Auliya&apos;</em>.</p>
      </section>

      {/* 6. Di Era Modern: Manusia Terjebak pada Grafik */}
      <section className="bg-[#e4e7df]/50 px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center space-x-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">6</span>
            <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Di Era Modern: Manusia Terjebak pada Grafik</h2>
          </div>
          <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
            <p>
              Hari ini, hidup kita dipenuhi angka: nilai ujian, jumlah pelanggan, jumlah pengikut, omzet, grafik investasi, jumlah penonton. Kita mulai percaya bahwa nilai diri ikut naik ketika grafik naik, dan ikut jatuh ketika grafik turun.
            </p>
            <p>
              Padahal Allah tidak pernah menilai manusia berdasarkan grafik kehidupan. Allah menilai hati, niat, dan amalnya.
            </p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-[#173c2a]/10 bg-white/70 p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase text-[#b18a3c]">Saat Keberhasilan Datang</p>
              <p className="mt-2 font-serif text-xl text-[#173c2a]">Apakah keberhasilan membuatmu semakin dekat kepada Allah, atau justru semakin jauh?</p>
            </div>
            <div className="rounded-2xl border border-[#173c2a]/10 bg-white/70 p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase text-[#b18a3c]">Saat Kegagalan Datang</p>
              <p className="mt-2 font-serif text-xl text-[#173c2a]">Apakah kegagalan membuatmu putus asa, atau justru membuatmu lebih mengenal Tuhanmu?</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Burung Jiwa */}
      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">7</span>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Burung Jiwa</h2>
        </div>
        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>
            Seekor burung tidak mengukur dirinya dari seberapa tinggi ia terbang. Ia tetap burung ketika berada di puncak langit. Ia tetap burung ketika berteduh di dahan karena badai. Yang menentukan bukan ketinggiannya, melainkan apakah ia masih memiliki sayap untuk kembali terbang.
          </p>
          <p>
            Begitulah manusia. Keberhasilan tidak membuatmu lebih mulia. Kegagalan tidak membuatmu lebih hina. Yang membuatmu mulia adalah ketika dalam dua keadaan itu, engkau tetap mengenal Allah.
          </p>
        </div>
      </section>

      {/* 8. Ruang Sunyi */}
      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">8</span>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Ruang Sunyi</h2>
        </div>
        <div className="mt-8 rounded-2xl border border-[#b18a3c]/20 bg-white/70 p-6 shadow-sm sm:p-8">
          <p className="text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
            Jika hari ini engkau sedang gagal, jangan buru-buru menyebut hidupmu berakhir. Boleh jadi Allah sedang menulis bab yang belum sempat engkau baca. Jika hari ini engkau sedang berhasil, jangan buru-buru menganggap dirimu telah sampai. Boleh jadi keberhasilan itu hanyalah ujian yang lebih halus daripada kegagalan.
          </p>
          <div className="mt-6 rounded-xl bg-[#173c2a] px-6 py-6 text-center text-[#f7f5ef]">
            <p className="font-serif text-xl sm:text-2xl text-[#d9c27a]">Maka berdoalah:</p>
            <p className="mt-3 text-base italic leading-8 text-white/90 sm:text-lg">
              &quot;Ya Allah, jangan biarkan kegagalanku membuatku putus asa. Dan jangan biarkan keberhasilanku membuatku lupa kepada-Mu.&quot;
            </p>
          </div>
          <p className="mt-6 font-serif text-lg text-[#173c2a]">
            Sebab burung jiwa yang sejati bukanlah burung yang selalu terbang tinggi. Melainkan burung yang selalu tahu ke mana ia harus kembali ketika angin berubah arah.
          </p>
        </div>

        <div className="mt-8 rounded-2xl border border-[#173c2a]/10 bg-white/70 p-6 text-sm leading-7 text-[#173c2a]/60 shadow-sm sm:p-8">
          <p><strong>RUJUKAN:</strong></p>
          <p className="mt-2"><strong>Al-Qur&apos;an:</strong> Q.S. Al-Baqarah [2]: 216; Q.S. Al-Qashash [28]: 78; Q.S. An-Nahl [16]: 53; Q.S. Ali &apos;Imran [3]: 159.</p>
          <p className="mt-2"><strong>Hadis:</strong> HR. Muslim no. 2999; HR. at-Tirmidzi no. 2517; HR. at-Tirmidzi no. 2344.</p>
          <p className="mt-2"><strong>Rumi:</strong> Masnavi-ye Ma&apos;navi (edisi kritis), pembacaan akademik oleh William C. Chittick (<em>The Sufi Path of Love</em>) &amp; Annemarie Schimmel (<em>The Triumphal Sun</em>).</p>
          <p className="mt-2"><strong>Imam Junaid al-Baghdadi:</strong> <em>Ar-Risalah al-Qusyairiyyah</em> karya Imam al-Qusyairi &amp; <em>Hilyat al-Auliya&apos;</em> karya Abu Nu&apos;aim al-Ashfahani.</p>
        </div>

        <div className="mt-8 rounded-2xl border border-[#173c2a]/10 bg-white/70 p-6 text-base leading-8 text-[#173c2a]/75 shadow-sm sm:p-8 sm:text-lg sm:leading-9">
          <p className="font-serif text-xl font-semibold text-[#173c2a]">Wallahu a&apos;lam</p>
        </div>

        <blockquote className="mt-10 rounded-2xl border border-[#b18a3c]/25 bg-[#173c2a] px-6 py-8 text-center text-[#f7f5ef] shadow-sm sm:px-10">
          <p className="font-serif text-2xl text-[#d9c27a]">Berikutnya</p>
          <p className="mt-4 text-base italic text-white/80 sm:text-lg">
            Masih di Gerbang Tawakal: “Ketika Doa Tidak Mengubah Keadaan, tetapi Mengubah Hati yang Berdoa.”
          </p>
        </blockquote>
      </section>

      {/* KETIKA DOA TIDAK MENGUBAH KEADAAN */}
      <section className="bg-[#173c2a] px-5 py-20 text-[#f7f5ef] sm:px-8 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d9c27a]">Masih di Gerbang Tawakal</span>
          <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-5xl">KETIKA DOA TIDAK MENGUBAH KEADAAN, TETAPI MENGUBAH HATI YANG BERDOA</h2>
          <p className="mt-5 text-sm leading-7 text-white/75 sm:text-base">NGAJI RUMI 8 &quot;BURUNG JIWA&quot; — By. M. Juharuddin</p>

          <div className="mt-8 rounded-2xl border border-[#d9c27a]/20 bg-white/10 p-6 backdrop-blur-sm sm:p-8">
            <p className="text-base leading-8 text-white/80 sm:text-lg">
              Halo “pren”, para pembaca yang budiman. Syukur Alhamdulillah kami masih diberi kesempatan melanjutkan edisi “Gerbang Tawakal” di Ngaji Rumi 8 “Burung Jiwa”. Sebelum meloncat ke kalimat lebih jauh, silakan buka jendela blogger kami:{' '}
              <a
                href="https://mjuharuddin.blogspot.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#d9c27a] underline decoration-[#d9c27a]/40 underline-offset-4 transition hover:text-white"
              >
                mjuharuddin.blogspot.com — M. Juharuddin
              </a>
              . Terimakasih atas kunjungannya. Semoga bermanfaat.
            </p>
            <p className="mt-4 text-base leading-8 text-white/75 sm:text-lg">
              Biasanya orang memulai pembahasan dengan kalimat: <em>&quot;Mengapa doa saya tidak dikabulkan?&quot;</em> Karena sejak awal pertanyaan itu sudah berangkat dari asumsi bahwa Allah tidak menjawab. Padahal Al-Qur&apos;an tidak pernah mengatakan bahwa Allah mengabaikan doa seorang hamba.
            </p>
            <p className="mt-4 text-base leading-8 text-white/75 sm:text-lg">
              Ada doa yang dijawab dengan &quot;iya&quot;. Ada yang dijawab dengan &quot;belum&quot;. Ada yang dijawab dengan &quot;Aku siapkan yang lebih baik.&quot; Ada pula doa yang dijawab dengan mengubah orang yang berdoa, bukan langsung mengubah keadaan yang didoakannya. Menurut kami, di situlah pintu menuju tawakal yang sejati.
            </p>
          </div>
        </div>
      </section>

      {/* 1. Saat Burung Jiwa Menemukan Langit di Dalam Dadanya */}
      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">1</span>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Saat Burung Jiwa Menemukan Langit di Dalam Dadanya</h2>
        </div>
        <blockquote className="mt-8 rounded-2xl border border-[#b18a3c]/25 bg-white/70 px-6 py-8 text-center font-serif text-xl leading-relaxed text-[#173c2a] shadow-sm sm:px-10 sm:text-2xl">
          “Tidak semua doa mengubah dunia di sekelilingmu. Sebagian doa diutus Allah untuk mengubah dunia yang ada di dalam dirimu.”
        </blockquote>
        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>
            Barangkali hampir setiap orang pernah mengalami keadaan seperti ini. Sudah berdoa. Sudah menangis. Sudah bangun pada sepertiga malam. Sudah memperbanyak istighfar. Sudah bersedekah. Tetapi keadaan tetap belum berubah. Penyakit belum sembuh. Pekerjaan belum datang. Utang belum lunas. Orang yang dicintai tetap pergi. Doa terasa menggantung di langit.
          </p>
          <p>
            Lalu muncul bisikan yang sangat halus. &quot;Apakah Allah benar-benar mendengarkanku?&quot; Pertanyaan itu manusiawi. Bahkan banyak hati yang saleh pernah melewati lorong sunyi itu. Namun, di situlah tawakal mulai diuji. Bukan ketika doa dikabulkan. Melainkan ketika doa belum menghadirkan perubahan yang kita harapkan.
          </p>
        </div>
      </section>

      {/* 2. Allah Tidak Pernah Menutup Pintu Doa */}
      <section className="bg-[#e4e7df]/50 px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center space-x-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">2</span>
            <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Allah Tidak Pernah Menutup Pintu Doa</h2>
          </div>

          <div className="mt-8 rounded-2xl bg-[#173c2a] px-6 py-8 text-center text-[#f7f5ef] shadow-sm sm:px-10">
            <p className="font-serif text-2xl leading-relaxed sm:text-3xl" dir="rtl">
              وَقَالَ رَبُّكُمُ ادْعُونِي أَسْتَجِبْ لَكُمْ
            </p>
            <p className="mt-5 text-base leading-8 text-white/75 sm:text-lg">
              “Tuhanmu berfirman, &apos;Berdoalah kepada-Ku, niscaya Aku akan mengabulkan bagimu.&apos;”
            </p>
            <p className="mt-2 text-sm text-[#d9c27a]">Q.S. Ghafir [40]: 60</p>
          </div>

          <div className="mt-8 rounded-2xl bg-[#173c2a] px-6 py-8 text-center text-[#f7f5ef] shadow-sm sm:px-10">
            <p className="font-serif text-2xl leading-relaxed sm:text-3xl" dir="rtl">
              وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ ۖ أُجِيبُ دَعْوَةَ الدَّاعِ إِذَا دَعَانِ
            </p>
            <p className="mt-5 text-base leading-8 text-white/75 sm:text-lg">
              “Apabila hamba-hamba-Ku bertanya kepadamu tentang Aku, maka sesungguhnya Aku dekat. Aku mengabulkan doa orang yang berdoa apabila ia berdoa kepada-Ku.”
            </p>
            <p className="mt-2 text-sm text-[#d9c27a]">Q.S. Al-Baqarah [2]: 186</p>
          </div>

          <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
            <p>
              Perhatikan keindahan ayat ini. Ketika Al-Qur&apos;an berbicara tentang banyak hukum, Allah memerintahkan Nabi Muhammad ﷺ untuk menjawab dengan kalimat &quot;Katakanlah...&quot; Namun pada ayat tentang doa, Allah tidak berkata, &quot;Katakanlah kepada mereka bahwa Aku dekat&quot;. Allah langsung berfirman: &quot;Sesungguhnya Aku dekat&quot;. Seakan-akan Allah sendiri ingin menjawab kerinduan hamba-Nya tanpa perantara.
            </p>
            <p className="font-serif text-xl font-semibold text-[#173c2a]">
              Kedekatan Allah tidak selalu tampak dari cepatnya jawaban. Sering kali ia tampak dari kuatnya hati yang sedang menunggu.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Doa Tidak Selalu Mengubah Takdir yang Kita Lihat */}
      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">3</span>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Doa Tidak Selalu Mengubah Takdir yang Kita Lihat</h2>
        </div>
        <div className="mt-8 rounded-2xl border border-[#b18a3c]/20 bg-white/70 p-6 shadow-sm sm:p-8">
          <p className="font-serif text-xl font-semibold text-[#173c2a]">Sabda Rasulullah ﷺ:</p>
          <p className="mt-3 text-base leading-8 text-[#173c2a]/75 sm:text-lg">
            &quot;Tidaklah seorang muslim berdoa kepada Allah dengan suatu doa yang tidak mengandung dosa atau memutus tali silaturahmi, melainkan Allah akan memberinya salah satu dari tiga perkara: segera mengabulkan doanya, menyimpannya sebagai pahala di akhirat, atau menghindarkannya dari keburukan yang sebanding dengannya.&quot;
          </p>
          <p className="mt-3 text-sm text-[#173c2a]/55">HR. Ahmad, no. 11133; dinilai hasan oleh sejumlah ulama</p>
        </div>
        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>
            Hadis ini mengubah cara kita memandang doa. Tidak ada doa yang sia-sia. Yang berbeda hanyalah bentuk jawaban Allah. Kadang Allah memberi apa yang kita minta. Kadang Allah menunda karena waktu-Nya lebih tepat daripada waktu kita. Kadang Allah mengganti permintaan kita dengan sesuatu yang lebih baik. Dan kadang Allah menyelamatkan kita dari bahaya yang bahkan tidak pernah kita ketahui.
          </p>
        </div>
      </section>

      {/* 4. Ketika Allah Mengubah Hati Sebelum Mengubah Keadaan */}
      <section className="bg-[#e4e7df]/50 px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center space-x-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">4</span>
            <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Ketika Allah Mengubah Hati Sebelum Mengubah Keadaan</h2>
          </div>
          <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
            <p>
              Ada doa yang tidak segera mengubah dunia. Tetapi perlahan mengubah orang yang berdoa. Orang yang dahulu mudah marah menjadi lebih lembut. Yang dahulu penuh kecemasan menjadi lebih tenang. Yang dahulu mudah putus asa menjadi lebih kuat. Yang dahulu menggantungkan hidup pada manusia mulai belajar menggantungkan harapan kepada Allah. Bukankah itu juga jawaban doa?
            </p>
          </div>
          <blockquote className="mt-8 rounded-2xl border border-[#b18a3c]/25 bg-white/70 px-6 py-8 text-center font-serif text-xl leading-relaxed text-[#173c2a] shadow-sm sm:px-10 sm:text-2xl">
            Kita sering meminta agar badai segera berhenti. Sementara Allah sedang menguatkan akar pohon agar mampu bertahan menghadapi badai berikutnya.
          </blockquote>
        </div>
      </section>

      {/* 5. Rumi: Doa Adalah Jalan Pulang */}
      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">5</span>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Rumi: Doa Adalah Jalan Pulang</h2>
        </div>
        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>
            Dalam <em>Masnavi-ye Ma&apos;navi</em>, Rumi berulang kali menggambarkan doa bukan sekadar permintaan, tetapi sebagai gerak jiwa yang kembali menuju asalnya. Menurut Rumi, kerinduan kepada Allah yang lahir dalam doa merupakan tanda bahwa Allah telah lebih dahulu memanggil hamba-Nya.
          </p>
          <p>
            William C. Chittick menjelaskan bahwa dalam pemikiran Rumi, kerinduan manusia kepada Allah dan kasih sayang Allah kepada manusia saling berhubungan. Keinginan untuk berdoa sendiri merupakan anugerah, bukan semata-mata hasil usaha manusia.
          </p>
          <p className="font-serif text-xl font-semibold text-[#173c2a]">
            Karena itu, jangan hanya melihat doa dari apa yang engkau terima. Lihatlah juga siapa dirimu setelah sekian lama berdoa. Mungkin itulah hadiah terbesar yang sedang Allah siapkan.
          </p>
        </div>
        <p className="mt-4 text-sm leading-7 text-[#173c2a]/55">
          <strong>Sumber:</strong> Jalaluddin Rumi, <em>Masnavi-ye Ma&apos;navi</em>; William C. Chittick, <em>The Sufi Path of Love</em>.
        </p>
      </section>

      {/* 6. Syams Tabrizi */}
      <section className="bg-[#e4e7df]/50 px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center space-x-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">6</span>
            <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Syams Tabrizi: Jangan Mencari Allah Hanya di Akhir Keinginanmu</h2>
          </div>
          <div className="mt-8 rounded-2xl border border-[#b18a3c]/20 bg-white/70 p-6 shadow-sm sm:p-8">
            <p className="text-base leading-8 text-[#173c2a]/75 sm:text-lg sm:leading-9">
              Syams Tabrizi dalam <em>Maqālāt-e Shams-e Tabrizi</em> berkali-kali mengingatkan bahwa hubungan dengan Allah tidak boleh dibangun hanya di atas terpenuhinya keinginan. Apabila seseorang hanya mencintai Allah karena doanya selalu terkabul sesuai harapannya, maka cintanya masih bergantung pada pemberian, bukan kepada Sang Pemberi.
            </p>
            <p className="mt-4 border-t border-[#173c2a]/10 pt-4 text-base leading-8 text-[#173c2a]/70">
              Syams mengajak murid-muridnya untuk tetap hadir di hadapan Allah, baik ketika tangan mereka penuh maupun ketika kosong. Sebab hakikat ibadah adalah mencari Allah, bukan sekadar mencari apa yang diberikan Allah.
            </p>
          </div>
          <p className="mt-4 text-sm leading-7 text-[#173c2a]/55">
            <strong>Sumber:</strong> Syams-e Tabrizi, <em>Maqālāt-e Shams-e Tabrizi</em> (The Discourses of Shams-i Tabrizi).
          </p>
        </div>
      </section>

      {/* 7. Manusia Modern dan Budaya Serba Instan */}
      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">7</span>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Manusia Modern dan Budaya Serba Instan</h2>
        </div>
        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>
            Kita hidup di zaman yang terbiasa dengan hasil seketika. Pesan terkirim dalam hitungan detik. Makanan datang hanya dengan beberapa sentuhan layar. Film dapat diputar kapan saja. Jawaban tersedia dalam mesin pencari.
          </p>
          <p>
            Tanpa sadar, kita membawa budaya instan itu ke dalam doa. Kita berharap Allah bekerja seperti aplikasi. Padahal Allah adalah Rabb semesta alam. Dia tidak sekadar memberi apa yang kita minta. Dia mendidik siapa diri kita melalui apa yang kita minta. Karena itu, doa bukan hanya tentang perubahan keadaan. Doa adalah proses pendidikan jiwa.
          </p>
          <p>
            Semakin lama seseorang berdoa dengan ikhlas, semakin lembut hatinya. Semakin lapang dadanya. Semakin sedikit kesombongannya. Semakin kuat tawakalnya.
          </p>
        </div>
      </section>

      {/* 8. Burung Jiwa */}
      <section className="bg-[#e4e7df]/50 px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center space-x-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">8</span>
            <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Burung Jiwa</h2>
          </div>
          <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
            <p>
              Seekor burung kecil pernah berdoa agar angin berhenti. Tetapi angin tetap bertiup. Hari demi hari ia terus mengepakkan sayapnya. Perlahan sayapnya menjadi semakin kuat. Suatu hari ia menyadari sesuatu. Yang berubah bukanlah anginnya. Yang berubah adalah dirinya.
            </p>
          </div>
          <blockquote className="mt-8 rounded-2xl border border-[#b18a3c]/25 bg-white/70 px-6 py-8 text-center font-serif text-xl leading-relaxed text-[#173c2a] shadow-sm sm:px-10 sm:text-2xl">
            Begitulah doa. Kadang Allah tidak mengubah badai. Karena Allah sedang membentuk burung yang mampu terbang lebih tinggi daripada badai itu sendiri.
          </blockquote>
        </div>
      </section>

      {/* 9. Ruang Sunyi */}
      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">9</span>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Ruang Sunyi</h2>
        </div>
        <div className="mt-8 rounded-2xl border border-[#b18a3c]/20 bg-white/70 p-6 shadow-sm sm:p-8">
          <p className="text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
            Jika hari ini engkau merasa doamu belum dijawab, jangan buru-buru menyimpulkan bahwa Allah diam. Mungkin Dia sedang bekerja di tempat yang belum dapat dilihat oleh matamu. Mungkin keadaan belum berubah.
          </p>
          <p className="mt-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
            Tetapi lihatlah hatimu. Apakah engkau kini lebih sabar? Lebih lembut? Lebih dekat kepada Allah? Lebih mudah menangis ketika membaca Al-Qur&apos;an?
          </p>
          <div className="mt-6 rounded-xl bg-[#173c2a] px-6 py-6 text-center text-[#f7f5ef]">
            <p className="font-serif text-xl sm:text-2xl text-[#d9c27a]">Jika iya, jangan katakan doamu belum dikabulkan.</p>
            <p className="mt-3 text-base italic leading-8 text-white/90 sm:text-lg">
              Sebab boleh jadi Allah sedang memberikan jawaban yang lebih dalam daripada sekadar mengubah keadaan. Dia sedang mengubah dirimu. Dan ketika hati telah berubah, sering kali dunia pun akan dipandang dengan cara yang sama sekali baru.
            </p>
          </div>
          <p className="mt-6 font-serif text-lg text-[#173c2a]">
            Pada akhirnya, burung jiwa tidak menemukan kedamaian karena semua doanya terkabul. Ia menemukan kedamaian karena akhirnya percaya bahwa di balik setiap doa, selalu ada Tuhan yang mendengar, memahami, dan memilihkan jawaban terbaik, meskipun jalan-Nya tidak selalu sama dengan harapan manusia.
          </p>
        </div>

        <div className="mt-8 rounded-2xl border border-[#173c2a]/10 bg-white/70 p-6 text-sm leading-7 text-[#173c2a]/60 shadow-sm sm:p-8">
          <p><strong>RUJUKAN:</strong></p>
          <p className="mt-2">
            <strong>Al-Qur&apos;an:</strong> Q.S. Al-Baqarah [2]: 186; Q.S. Ghafir [40]: 60; Q.S. Al-Anbiya&apos; [21]: 83–84 (doa Nabi Ayyub); Q.S. Yusuf [12]: 86 (keluh kesah Nabi Ya&apos;qub kepada Allah).
          </p>
          <p className="mt-2">
            <strong>Hadis:</strong> HR. Ahmad no. 11133 tentang tiga bentuk jawaban doa; HR. Muslim no. 2735 tentang doa yang dikabulkan selama tidak tergesa-gesa dengan berkata, &quot;Aku telah berdoa, tetapi belum dikabulkan.&quot;
          </p>
          <p className="mt-2">
            <strong>Rumi:</strong> <em>Masnavi-ye Ma&apos;navi</em> (tema doa, kerinduan, dan kepulangan jiwa), dengan kajian William C. Chittick, <em>The Sufi Path of Love</em>.
          </p>
          <p className="mt-2">
            <strong>Syams Tabrizi:</strong> <em>Maqālāt-e Shams-e Tabrizi</em> (The Discourses of Shams-i Tabrizi).
          </p>
        </div>

        <div className="mt-8 rounded-2xl border border-[#173c2a]/10 bg-white/70 p-6 text-base leading-8 text-[#173c2a]/75 shadow-sm sm:p-8 sm:text-lg sm:leading-9">
          <p className="font-serif text-xl font-semibold text-[#173c2a]">Wallahu a&apos;lam</p>
        </div>

        <blockquote className="mt-10 rounded-2xl border border-[#b18a3c]/25 bg-[#173c2a] px-6 py-8 text-center text-[#f7f5ef] shadow-sm sm:px-10">
          <p className="font-serif text-2xl text-[#d9c27a]">Berikutnya</p>
          <p className="mt-4 text-base italic text-white/80 sm:text-lg">
            “Jurnal Doa Burung Jiwa”: review diri — bukan sekadar menuliskan doa-doa yang dipanjatkan, tetapi juga mencatat perubahan-perubahan kecil dalam hati selama proses berdoa. Dengan demikian kita semua belajar melihat bahwa rahmat Allah tidak hanya hadir dalam peristiwa yang berubah, tetapi juga dalam jiwa yang perlahan dibentuk oleh doa.
          </p>
        </blockquote>

        <p className="mt-8 text-center text-sm leading-7 text-[#173c2a]/50">
          #artikel #ngajirumi #burungjiwa #tasawuf #sufiindonesia #JalaluddinRumi #mjuharuddin #facebookpro #ikuti #share #allpeople
        </p>
      </section>

      {/* JURNAL DOA BURUNG JIWA */}
      <section className="bg-[#173c2a] px-5 py-20 text-[#f7f5ef] sm:px-8 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d9c27a]">Akhir Gerbang Tawakal</span>
          <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-5xl">JURNAL DOA BURUNG JIWA</h2>
          <p className="mt-5 text-sm leading-7 text-white/75 sm:text-base">NGAJI RUMI 8 &quot;BURUNG JIWA&quot; — By. M. Juharuddin</p>

          <div className="mt-8 rounded-2xl border border-[#d9c27a]/20 bg-white/10 p-6 backdrop-blur-sm sm:p-8">
            <p className="text-base leading-8 text-white/80 sm:text-lg">
              Alhamdulillah kita sampai di bagian akhir Gerbang Tawakal, yaitu tentang retret “Jurnal Doa Burung Jiwa”. Bagian ini akan menjadi paling khas dari Gerbang Tawakal. Ini bukan sekadar lembar aktivitas, tetapi ruang perjumpaan pembaca dengan dirinya sendiri.
            </p>
            <p className="mt-4 font-serif text-xl leading-relaxed text-[#d9c27a] sm:text-2xl">
              Pertanyaan dasarnya bukan: “Apa doaku hari ini?”, tetapi: “Siapa diriku yang sedang berdoa, dan menjadi siapa aku setelah berdoa?”
            </p>
            <p className="mt-4 text-base leading-8 text-white/75 sm:text-lg">
              Namun sebelum beranjak jauh menyelami jurnal doa, yuk berkunjung ke youtube kami:{' '}
              <a
                href="https://youtube.com/@m_juharuddin_cht?si=elklo7GnD-jsDM4q"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#d9c27a] underline decoration-[#d9c27a]/40 underline-offset-4 transition hover:text-white"
              >
                youtube.com/@m_juharuddin_cht
              </a>
              , bantu subscribe ya.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#b18a3c]">Mencatat Doa yang Dipanjatkan</p>
        <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Menyaksikan Jiwa yang Perlahan Berubah</h2>
        <blockquote className="mt-8 rounded-2xl border border-[#b18a3c]/25 bg-white/70 px-6 py-8 text-center font-serif text-xl leading-relaxed text-[#173c2a] shadow-sm sm:px-10 sm:text-2xl">
          “Jangan hanya mencatat apa yang kau minta kepada Allah. Catat pula apa yang Allah ubah dalam dirimu setelah engkau meminta.”
        </blockquote>
        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>
            Ada doa yang kita ingat karena akhirnya terkabul. Ada doa yang kita ingat karena begitu lama menunggu jawabannya. Tetapi ada pula doa yang tidak pernah kita sadari telah mengubah hidup kita.
          </p>
          <p>
            Doa yang dahulu dipanjatkan dengan air mata, kemudian mengajarkan kesabaran. Doa yang dahulu meminta seseorang kembali, tetapi justru mengajarkan cara mencintai tanpa memiliki. Doa yang dahulu meminta sebuah pekerjaan, tetapi akhirnya mengajarkan bahwa harga diri tidak ditentukan oleh jabatan. Doa yang dahulu meminta agar sebuah masalah segera selesai, tetapi ternyata masalah itu menjadi jalan bagi kita untuk mengenal Allah lebih dekat.
          </p>
          <p>
            Karena itu, mungkin selama ini kita terlalu sempit memahami &quot;jawaban doa&quot;. Kita mengira jawaban doa hanya berupa: &quot;Aku mendapatkan apa yang kuminta&quot;. Padahal ada jawaban lain yang jauh lebih sunyi: &quot;Aku berubah menjadi manusia yang berbeda setelah berdoa.&quot;
          </p>
          <p className="font-serif text-xl font-semibold text-[#173c2a]">Di situlah Jurnal Doa Burung Jiwa dimulai.</p>
        </div>
      </section>

      <section className="bg-[#e4e7df]/50 px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center space-x-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">1</span>
            <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Apa Itu Jurnal Doa Burung Jiwa?</h2>
          </div>
          <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
            <p>
              Jurnal Doa Burung Jiwa adalah sebuah latihan muhasabah, yaitu proses melihat kembali keadaan diri dengan jujur di hadapan Allah. Ia bukan buku untuk mencatat berapa kali kita berdoa. Bukan pula daftar permintaan kepada Tuhan. Ia adalah ruang untuk memperhatikan perjalanan batin:
            </p>
          </div>
          <ul className="mt-6 space-y-3 text-base leading-8 text-[#173c2a]/75 sm:text-lg">
            {['apa yang kita minta;', 'mengapa kita memintanya;', 'apa yang kita rasakan ketika belum mendapatkannya;', 'bagaimana kita bereaksi terhadap penundaan;', 'apa yang berubah dalam diri kita;', 'apa yang mulai kita pahami;', 'dan bagaimana hubungan kita dengan Allah berkembang sepanjang proses itu.'].map((item) => (
              <li key={item} className="rounded-xl border border-[#173c2a]/10 bg-white/70 px-5 py-4">{item}</li>
            ))}
          </ul>
          <p className="mt-8 font-serif text-xl font-semibold text-[#173c2a]">Dengan kata lain: jurnal ini bukan hanya mencatat perjalanan doa. Ia mencatat perjalanan jiwa.</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">2</span>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Mengapa Kita Perlu Mencatat Perjalanan Doa?</h2>
        </div>
        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>
            Manusia mudah lupa. Kita sering mengingat apa yang belum diberikan Allah, tetapi melupakan begitu banyak hal yang telah diberikan-Nya. Kita mengingat satu doa yang belum terkabul, tetapi lupa puluhan doa yang telah Allah jawab. Kita mengingat pintu yang tertutup, tetapi lupa berapa banyak pintu lain yang telah dibukakan.
          </p>
          <p>
            Jurnal membantu kita melihat kehidupan secara lebih utuh. Ketika seseorang membaca kembali catatan doanya enam bulan atau satu tahun kemudian, mungkin ia akan menemukan sesuatu yang mengejutkan: &quot;Ternyata aku sudah berubah&quot;. Masalah yang dahulu membuatnya menangis mungkin masih ada. Tetapi ia tidak lagi menjadi orang yang sama ketika menghadapinya.
          </p>
          <p>
            Dahulu ia panik, sekarang ia lebih tenang. Dahulu ia mudah marah, sekarang ia belajar menerima. Dahulu ia menyalahkan Allah, sekarang ia belajar bertanya: &quot;Apa yang ingin Allah ajarkan kepadaku melalui semua ini?&quot; Itulah perkembangan spiritual.
          </p>
        </div>
      </section>

      <section className="bg-[#e4e7df]/50 px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center space-x-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">3</span>
            <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Doa Sebagai Cermin Jiwa</h2>
          </div>
          <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
            <p>Coba perhatikan doa-doa kita. Doa ternyata dapat menjadi cermin yang sangat jujur.</p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-[#173c2a]/10 bg-white/70 p-6 shadow-sm">
              <p className="font-serif text-lg text-[#173c2a]">&quot;Ya Allah, berikan aku ini...&quot;</p>
              <p className="mt-2 text-base leading-8 text-[#173c2a]/70">Kita sedang menunjukkan apa yang kita anggap penting.</p>
            </div>
            <div className="rounded-2xl border border-[#173c2a]/10 bg-white/70 p-6 shadow-sm">
              <p className="font-serif text-lg text-[#173c2a]">&quot;Ya Allah, jangan ambil dia dariku...&quot;</p>
              <p className="mt-2 text-base leading-8 text-[#173c2a]/70">Kita sedang menunjukkan sesuatu yang sangat kita takutkan kehilangan.</p>
            </div>
            <div className="rounded-2xl border border-[#173c2a]/10 bg-white/70 p-6 shadow-sm">
              <p className="font-serif text-lg text-[#173c2a]">&quot;Ya Allah, buat mereka mengaku bahwa aku benar...&quot;</p>
              <p className="mt-2 text-base leading-8 text-[#173c2a]/70">Kita mungkin sedang menemukan ego yang selama ini tersembunyi.</p>
            </div>
            <div className="rounded-2xl border border-[#173c2a]/10 bg-white/70 p-6 shadow-sm">
              <p className="font-serif text-lg text-[#173c2a]">&quot;Ya Allah, jika ini baik untukku, dekatkanlah...&quot;</p>
              <p className="mt-2 text-base leading-8 text-[#173c2a]/70">Di sana mulai tumbuh tawakal.</p>
            </div>
          </div>
          <p className="mt-8 font-serif text-xl font-semibold text-[#173c2a]">
            Pertanyaan yang lebih dalam bukan: &quot;Apa yang sedang aku minta?&quot; Tetapi: &quot;Apa yang sebenarnya sedang dicari oleh jiwaku?&quot;
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">4</span>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Hal yang Perlu Dicatat</h2>
        </div>
        <div className="mt-8 rounded-2xl border border-[#b18a3c]/20 bg-white/70 p-6 shadow-sm sm:p-8">
          <p className="text-base leading-8 text-[#173c2a]/75 sm:text-lg sm:leading-9">
            Jurnal ini dapat dibuat sederhana. Tidak perlu kalimat indah. Tidak perlu bahasa puitis. Tidak perlu terlihat saleh. Tulislah apa adanya. Sebab jurnal ini bukan untuk dibaca manusia. Ia adalah percakapan jujur antara dirimu dengan Allah.
          </p>
        </div>
      </section>

      <section className="bg-[#e4e7df]/50 px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center space-x-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">5</span>
            <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Apa yang Sedang Aku Doakan?</h2>
          </div>
          <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
            <p>
              Tuliskan permintaanmu dengan jujur. Misalnya: &quot;Ya Allah, aku sedang memohon pekerjaan&quot;. Atau: &quot;Ya Allah, aku ingin sembuh dari luka ini&quot;. Atau: &quot;Ya Allah, aku ingin keluargaku kembali harmonis.&quot;
            </p>
            <p className="font-serif text-xl font-semibold text-[#173c2a]">
              Tidak perlu malu terhadap doamu. Allah mengetahui isi hatimu bahkan sebelum engkau mengucapkannya.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">6</span>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Mengapa Aku Menginginkannya?</h2>
        </div>
        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>
            Ini bagian yang sangat penting. Tanyakan kepada dirimu: &quot;Mengapa aku begitu menginginkan hal ini?&quot; Apakah karena benar-benar membutuhkannya? Ataukah karena ingin membuktikan sesuatu kepada orang lain? Apakah karena ingin mendekat kepada Allah? Ataukah karena takut dianggap gagal?
          </p>
        </div>
        <div className="mt-8 rounded-2xl border border-[#b18a3c]/20 bg-white/70 p-6 shadow-sm sm:p-8">
          <p className="text-base leading-8 text-[#173c2a]/75 sm:text-lg">
            Contohnya: &quot;Aku ingin mendapatkan pekerjaan ini. Tetapi setelah kupikirkan, ternyata sebagian keinginanku muncul karena aku ingin membuktikan kepada keluargaku bahwa aku berhasil&quot;. Kesadaran seperti ini sangat berharga. Karena terkadang doa bukan hanya memperlihatkan apa yang kita inginkan. Ia membongkar mengapa kita menginginkannya.
          </p>
        </div>
      </section>

      <section className="bg-[#e4e7df]/50 px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center space-x-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">7</span>
            <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Apa yang Aku Rasakan Ketika Doaku Belum Terjawab?</h2>
          </div>
          <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
            <p>
              Tulislah dengan jujur. Marah? Kecewa? Takut? Cemas? Iri? Sedih? Bingung? Atau bahkan merasa Allah tidak adil? Jangan takut menuliskan perasaan itu. Allah tidak membutuhkan kepura-puraan. Nabi Ya&apos;qub AS pernah mengungkapkan kesedihannya kepada Allah:
            </p>
          </div>
          <div className="mt-8 rounded-2xl bg-[#173c2a] px-6 py-8 text-center text-[#f7f5ef] shadow-sm sm:px-10">
            <p className="font-serif text-2xl leading-relaxed sm:text-3xl" dir="rtl">
              إِنَّمَا أَشْكُو بَثِّي وَحُزْنِي إِلَى اللَّهِ
            </p>
            <p className="mt-5 text-base leading-8 text-white/75 sm:text-lg">
              “Sesungguhnya hanya kepada Allah aku mengadukan kesusahan dan kesedihanku.”
            </p>
            <p className="mt-2 text-sm text-[#d9c27a]">Q.S. Yusuf [12]: 86</p>
          </div>
          <p className="mt-8 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
            Mengadu kepada Allah bukan tanda lemahnya iman. Justru itu menunjukkan kepada siapa hati kita membawa kelemahannya. Kita boleh sedih. Boleh menangis. Boleh mengatakan: &quot;Ya Allah, aku tidak mengerti&quot;. Yang penting, jangan berhenti datang kepada-Nya.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">8</span>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Apa yang Berubah dalam Diriku?</h2>
        </div>
        <p className="mt-8 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          Inilah jantung Jurnal Doa Burung Jiwa. Jangan hanya mencatat perubahan keadaan. Catat perubahan dirimu.
        </p>
        <ul className="mt-6 space-y-3 text-base leading-8 text-[#173c2a]/75 sm:text-lg">
          {[
            'Apakah aku menjadi lebih sabar?',
            'Apakah aku lebih mudah bersyukur?',
            'Apakah aku mulai mengurangi keluhan?',
            'Apakah aku lebih rajin berdoa?',
            'Apakah aku lebih dekat dengan Al-Qur\'an?',
            'Apakah aku mulai bisa menerima sesuatu yang dahulu sangat sulit kuterima?',
            'Apakah aku mulai mampu memaafkan?',
            'Apakah aku mulai tidak terlalu bergantung pada penilaian manusia?',
            'Apakah aku lebih tenang menghadapi ketidakpastian?',
          ].map((item) => (
            <li key={item} className="rounded-xl border border-[#173c2a]/10 bg-white/70 px-5 py-4">{item}</li>
          ))}
        </ul>
        <p className="mt-8 font-serif text-xl font-semibold text-[#173c2a]">Sebab bisa jadi keadaan belum berubah. Tetapi engkau sudah berubah. Dan perubahan itu jangan dianggap kecil.</p>
      </section>

      <section className="bg-[#e4e7df]/50 px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center space-x-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">9</span>
            <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Apa yang Sedang Allah Ajarkan Kepadaku?</h2>
          </div>
          <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
            <p>
              Ini pertanyaan yang membutuhkan kedalaman. Jangan buru-buru menjawab. Diamlah dan renungkan: mungkin Allah sedang mengajarimu sabar, mungkin tawakal, mungkin melepaskan, mungkin menerima, mungkin memaafkan, mungkin bahwa kebahagiaanmu tidak boleh digantungkan pada satu manusia, mungkin bahwa kehilangan sesuatu tidak selalu berarti kehilangan masa depan, atau mungkin bahwa engkau terlalu lama menggantungkan harga dirimu kepada sesuatu yang fana.
            </p>
          </div>
          <blockquote className="mt-8 rounded-2xl border border-[#b18a3c]/25 bg-white/70 px-6 py-8 text-center font-serif text-xl leading-relaxed text-[#173c2a] shadow-sm sm:px-10 sm:text-2xl">
            Tulislah: “Melalui doa ini, mungkin Allah sedang mengajarkanku...” Lalu lanjutkan dengan kalimatmu sendiri.
          </blockquote>
        </div>
      </section>

      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">10</span>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Apa yang Masih Belum Mampu Kulepaskan?</h2>
        </div>
        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>
            Ini adalah pertanyaan yang lebih sulit. Sebab terkadang kita mengatakan: &quot;Aku sudah tawakal&quot;. Tetapi sebenarnya kita masih memegang erat hasil yang kita inginkan. Kita berkata: &quot;Terserah Allah&quot;. Tetapi dalam hati: &quot;Semoga tetap sesuai keinginanku.&quot;
          </p>
          <p>
            Di sinilah jurnal menjadi cermin. Tanyakan: Apa yang sebenarnya masih ingin kukendalikan? Apakah masa depan? Pendapat orang? Keputusan orang lain? Hasil pekerjaan? Kesehatan? Hubungan? Rezeki?
          </p>
          <p className="font-serif text-xl font-semibold text-[#173c2a]">Ketika kita mampu mengakuinya, kita mulai memahami apa arti tawakal.</p>
        </div>
      </section>

      <section className="bg-[#e4e7df]/50 px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center space-x-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">11</span>
            <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Jangan Hanya Mencatat &quot;Terkabul&quot;</h2>
          </div>
          <p className="mt-8 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">Buatlah tiga kolom besar dalam perjalanan jurnalmu.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-[#173c2a]/10 bg-white/70 p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#b18a3c]">Doa yang Dikabulkan</p>
              <p className="mt-3 text-base leading-8 text-[#173c2a]/70">
                Catat apa yang Allah berikan sesuai dengan permintaanmu. Kemudian tuliskan: &quot;Apa yang kurasakan?&quot; dan &quot;Apa yang akan kulakukan dengan nikmat ini?&quot; Sebab nikmat juga membutuhkan tawakal.
              </p>
            </div>
            <div className="rounded-2xl border border-[#173c2a]/10 bg-white/70 p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#b18a3c]">Doa yang Masih Menunggu</p>
              <p className="mt-3 text-base leading-8 text-[#173c2a]/70">
                Jangan beri label &quot;doa yang gagal&quot;. Tidak ada istilah itu. Tulislah: &quot;Masih dalam perjalanan&quot;. Kemudian tanyakan: &quot;Apa yang sedang berubah dalam diriku selama menunggu?&quot;
              </p>
            </div>
            <div className="rounded-2xl border border-[#173c2a]/10 bg-white/70 p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#b18a3c]">Doa yang Berubah Arah</p>
              <p className="mt-3 text-base leading-8 text-[#173c2a]/70">
                Dahulu: &quot;Ya Allah, berikan aku dia&quot;. Kemudian: &quot;Ya Allah, jika dia bukan untukku, berikan aku kekuatan untuk merelakannya.&quot; Doanya berubah karena jiwanya berubah.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">12</span>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Jurnal &quot;Sebelum dan Sesudah&quot;</h2>
        </div>
        <p className="mt-8 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">Ambillah satu halaman. Buat dua bagian.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-[#173c2a]/10 bg-white/70 p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#b18a3c]">Sebelum</p>
            <p className="mt-3 font-serif text-xl text-[#173c2a]">&quot;Aku takut kehilangan pekerjaan karena aku merasa tanpa pekerjaan aku tidak berharga.&quot;</p>
            <p className="mt-4 text-base leading-8 text-[#173c2a]/70">&quot;Aku marah kepada Allah karena doaku belum terkabul.&quot;</p>
          </div>
          <div className="rounded-2xl border border-[#b18a3c]/25 bg-white/70 p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#b18a3c]">Sesudah</p>
            <p className="mt-3 font-serif text-xl text-[#173c2a]">&quot;Aku masih ingin mendapatkan pekerjaan, tetapi sekarang aku tahu bahwa nilai diriku tidak ditentukan oleh pekerjaan.&quot;</p>
            <p className="mt-4 text-base leading-8 text-[#173c2a]/70">&quot;Aku masih belum memahami jalan Allah, tetapi sekarang aku lebih percaya bahwa Allah mengetahui apa yang tidak kuketahui.&quot;</p>
          </div>
        </div>
        <p className="mt-8 font-serif text-xl font-semibold text-[#173c2a]">Di sinilah kita bisa melihat perjalanan jiwa dengan nyata.</p>
      </section>

      <section className="bg-[#e4e7df]/50 px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center space-x-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">13</span>
            <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Jurnal Gratitude</h2>
          </div>
          <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
            <p>
              Setiap selesai menulis tentang doa, tuliskan tiga nikmat kecil hari itu. Tidak perlu sesuatu yang spektakuler. Misalnya: &quot;Hari ini aku masih bisa bangun sehat&quot;. &quot;Hari ini ibu tersenyum kepadaku&quot;. &quot;Hari ini aku masih diberi kesempatan memperbaiki kesalahan&quot;. &quot;Hari ini aku bisa membaca Al-Qur&apos;an walau hanya beberapa ayat.&quot;
            </p>
            <p>
              Latihan seperti ini membantu kita menggeser perhatian dari: &quot;Apa yang belum aku punya?&quot; menjadi: &quot;Apa yang sudah Allah titipkan?&quot;
            </p>
          </div>
          <div className="mt-8 rounded-2xl bg-[#173c2a] px-6 py-8 text-center text-[#f7f5ef] shadow-sm sm:px-10">
            <p className="font-serif text-2xl leading-relaxed sm:text-3xl" dir="rtl">
              لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ
            </p>
            <p className="mt-5 text-base leading-8 text-white/75 sm:text-lg">
              “Jika kamu bersyukur, niscaya Aku akan menambah nikmat kepadamu.”
            </p>
            <p className="mt-2 text-sm text-[#d9c27a]">Q.S. Ibrahim [14]: 7</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">14</span>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Jangan Menjadikan Jurnal sebagai Alat &quot;Memaksa&quot; Allah</h2>
        </div>
        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>
            Ini penting. Jurnal doa bukan teknik untuk mendapatkan apa pun yang kita inginkan. Bukan pula semacam &quot;manifestasi&quot; yang menganggap pikiran manusia dapat memaksa realitas. Dalam Islam, manusia berdoa dan berikhtiar. Allah yang menentukan hasil.
          </p>
        </div>
        <blockquote className="mt-8 rounded-2xl border border-[#b18a3c]/25 bg-[#173c2a] px-6 py-8 text-center font-serif text-xl leading-relaxed text-[#f7f5ef] shadow-sm sm:px-10 sm:text-2xl">
          “Ya Allah, aku memohon apa yang kuinginkan. Tetapi aku lebih percaya kepada-Mu daripada kepada keinginanku sendiri.”
        </blockquote>
        <p className="mt-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg">Kalimat sederhana ini adalah latihan tawakal.</p>
      </section>

      <section className="bg-[#e4e7df]/50 px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center space-x-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">15</span>
            <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Doa yang Paling Dewasa</h2>
          </div>
          <div className="mt-8 space-y-4">
            {[
              { fase: 'Masih muda', doa: 'Ya Allah, berikan aku apa yang kuinginkan.' },
              { fase: 'Setelah mengalami kehidupan', doa: 'Ya Allah, berikan aku apa yang terbaik.' },
              { fase: 'Semakin matang', doa: 'Ya Allah, jika apa yang kuinginkan baik bagiku, dekatkanlah. Jika tidak, jauhkanlah dan jadikan hatiku ridha.' },
              { fase: 'Kedalaman tertentu', doa: 'Ya Allah, jangan biarkan aku mencintai pemberian-Mu lebih daripada mencintai-Mu.' },
            ].map((item) => (
              <div key={item.fase} className="rounded-2xl border border-[#173c2a]/10 bg-white/70 p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#b18a3c]">{item.fase}</p>
                <p className="mt-2 font-serif text-xl text-[#173c2a]">&quot;{item.doa}&quot;</p>
              </div>
            ))}
          </div>
          <p className="mt-8 font-serif text-xl font-semibold text-[#173c2a]">Di situlah doa berubah menjadi perjalanan spiritual.</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">16</span>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Halaman Terdalam: Surat kepada Allah</h2>
        </div>
        <div className="mt-8 rounded-2xl border border-[#b18a3c]/20 bg-white/70 p-6 shadow-sm sm:p-8">
          <p className="text-base leading-8 text-[#173c2a]/75 sm:text-lg sm:leading-9">
            Sesekali, berhentilah menggunakan format pertanyaan. Tulislah surat. Tidak perlu panjang, tidak perlu indah. Mulailah dengan: &quot;Ya Allah...&quot; Kemudian ceritakan semuanya. Ketakutanmu, kekecewaanmu, harapanmu, rasa syukurmu, kesalahanmu, hal-hal yang tidak mampu engkau ceritakan kepada siapa pun.
          </p>
          <p className="mt-6 rounded-xl bg-[#173c2a] px-6 py-6 text-center font-serif text-xl text-[#f7f5ef] sm:text-2xl">
            “Aku tidak tahu bagaimana akhir cerita ini. Tetapi aku ingin tetap berjalan bersama-Mu.”
          </p>
          <p className="mt-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg">
            Simpan surat itu. Baca kembali beberapa bulan kemudian. Mungkin engkau akan terkejut melihat dirimu sendiri.
          </p>
        </div>
      </section>

      <section className="bg-[#e4e7df]/50 px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center space-x-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">17</span>
            <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Refleksi 30 Hari: Perjalanan Burung Jiwa</h2>
          </div>
          <p className="mt-8 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
            Jurnal ini dapat dilakukan selama 30 hari. Tidak perlu lama — cukup 10–15 menit sehari.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { hari: 'Hari 1–5', judul: 'Apa yang kucari?', teks: 'Apa sebenarnya yang paling kuinginkan dalam hidup? Jangan jawab dengan apa yang terlihat baik di mata orang lain. Jawab dengan jujur.' },
              { hari: 'Hari 6–10', judul: 'Apa yang kutakutkan?', teks: 'Apa yang paling takut hilang? Mengapa?' },
              { hari: 'Hari 11–15', judul: 'Apa yang kupercayakan?', teks: 'Ketika hidup tidak sesuai rencana, kepada siapa atau kepada apa aku menggantungkan diri?' },
              { hari: 'Hari 16–20', judul: 'Apa yang telah berubah?', teks: 'Bandingkan dirimu dengan lima hari sebelumnya. Apa yang mulai berubah?' },
              { hari: 'Hari 21–25', judul: 'Apa yang harus kulepaskan?', teks: 'Apa yang masih terlalu erat kugenggam?' },
              { hari: 'Hari 26–29', judul: 'Apa yang telah Allah ajarkan?', teks: 'Tuliskan tiga pelajaran terbesar dari perjalananmu.' },
              { hari: 'Hari 30', judul: 'Ke mana burung jiwaku terbang?', teks: 'Setelah tiga puluh hari, berhentilah. Jangan langsung menulis doa. Tanyakan: “Jika hidupku adalah perjalanan menuju Allah, di manakah aku sekarang?” Kemudian tulislah satu kalimat. Bukan tentang apa yang ingin engkau dapatkan. Tetapi tentang siapa yang ingin engkau menjadi.' },
            ].map((item) => (
              <div key={item.hari} className={`rounded-2xl border border-[#173c2a]/10 bg-white/70 p-6 shadow-sm ${item.hari === 'Hari 30' ? 'sm:col-span-2' : ''}`}>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#b18a3c]">{item.hari}</p>
                <h3 className="mt-2 font-serif text-2xl font-semibold text-[#173c2a]">{item.judul}</h3>
                <p className="mt-3 text-base leading-8 text-[#173c2a]/70">{item.teks}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">18</span>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Halaman Penutup Jurnal</h2>
        </div>
        <div className="mt-8 rounded-2xl border border-[#b18a3c]/20 bg-white/70 p-6 shadow-sm sm:p-8">
          <p className="text-base leading-8 text-[#173c2a]/70 sm:text-lg">Tulislah perlahan:</p>
          <ul className="mt-4 space-y-2 text-base leading-8 text-[#173c2a]/75 sm:text-lg">
            <li>Hari ini aku menyadari bahwa...</li>
            <li>Hal yang paling sulit kulepaskan adalah...</li>
            <li>Hal yang paling ingin kusyukuri adalah...</li>
            <li>Hal yang sedang Allah ajarkan kepadaku mungkin adalah...</li>
            <li>Aku masih takut tentang...</li>
            <li>Tetapi aku ingin belajar percaya bahwa...</li>
            <li>Mulai hari ini aku akan...</li>
          </ul>
          <p className="mt-6 rounded-xl bg-[#173c2a] px-6 py-6 text-center font-serif text-xl leading-relaxed text-[#f7f5ef] sm:text-2xl">
            “Ya Allah, jika Engkau belum mengubah keadaanku, ubahlah terlebih dahulu hatiku agar aku mampu melewati keadaan itu bersama-Mu.”
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">19</span>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Epilog: Doa yang Mengubah Kita</h2>
        </div>
        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>
            Pada akhirnya, mungkin kita akan menyadari sesuatu. Tidak semua doa berakhir dengan mendapatkan apa yang kita minta. Tetapi tidak ada doa yang benar-benar sia-sia ketika ia membawa kita lebih dekat kepada Allah.
          </p>
          <p>
            Ada doa yang mengubah keadaan. Ada doa yang mengubah jalan. Ada doa yang mengubah orang-orang di sekitar kita. Dan ada doa yang paling sunyi: doa yang mengubah kita.
          </p>
          <p>
            Kita masuk ke dalam doa sebagai manusia yang gelisah. Kita keluar sebagai manusia yang sedikit lebih tenang. Kita masuk dengan banyak tuntutan. Kita keluar dengan sedikit lebih banyak penerimaan. Kita masuk dengan tangan yang ingin menggenggam. Kita keluar dengan hati yang belajar melepaskan. Kita masuk sambil berkata: &quot;Ya Allah, berikan aku apa yang kuinginkan&quot;. Kemudian perlahan kita belajar berkata: &quot;Ya Allah, berikan aku apa yang terbaik.&quot;
          </p>
        </div>
        <blockquote className="mt-8 rounded-2xl border border-[#b18a3c]/25 bg-[#173c2a] px-6 py-8 text-center font-serif text-xl leading-relaxed text-[#f7f5ef] shadow-sm sm:px-10 sm:text-2xl">
          “Ya Allah, jangan biarkan aku kehilangan-Mu ketika mendapatkan apa yang kuinginkan. Dan jangan biarkan aku meninggalkan-Mu ketika kehilangan apa yang kuinginkan.”
        </blockquote>
        <p className="mt-8 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          Karena pada akhirnya, yang paling penting dari sebuah doa bukanlah apakah tangan kita mendapatkan apa yang diminta. Melainkan apakah hati kita menemukan kepada siapa ia harus berserah.
        </p>
        <p className="mt-6 font-serif text-xl font-semibold text-[#173c2a]">
          Itulah perjalanan Burung Jiwa. Bukan perjalanan untuk mendapatkan semua yang kita inginkan. Tetapi perjalanan untuk menemukan bahwa di balik segala keinginan, sejak awal kita sedang mencari Allah.
        </p>

        <div className="mt-8 rounded-2xl border border-[#173c2a]/10 bg-white/70 p-6 text-base leading-8 text-[#173c2a]/75 shadow-sm sm:p-8 sm:text-lg sm:leading-9">
          <p className="font-serif text-xl font-semibold text-[#173c2a]">Wallahu a&apos;lam</p>
        </div>

        <blockquote className="mt-10 rounded-2xl border border-[#b18a3c]/25 bg-[#173c2a] px-6 py-8 text-center text-[#f7f5ef] shadow-sm sm:px-10">
          <p className="font-serif text-2xl text-[#d9c27a]">Berikutnya</p>
          <p className="mt-4 text-base italic text-white/80 sm:text-lg">“Gerbang Ridha”</p>
        </blockquote>

        <p className="mt-8 text-center text-sm leading-7 text-[#173c2a]/50">
          #artikel #jurnaldoa #jalaluddinrumi #mengkaji #sehatjiwa #mjuharuddin #gerbang #tawakal #Ridha
        </p>
      </section>

      {/* =====================================================
          GERBANG RIDHA
          NGAJI RUMI 8 "BURUNG JIWA" - By. Juhar
          ===================================================== */}

      {/* Header & Intro Section */}
      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <span className="mb-6 inline-flex rounded-full border border-[#b18a3c]/50 bg-[#b18a3c]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#b18a3c]">
          NGAJI RUMI 8 &quot;BURUNG JIWA&quot; — By. Juhar
        </span>
        <h2 className="mt-4 font-serif text-4xl font-bold tracking-tight text-[#173c2a] sm:text-5xl">
          GERBANG RIDHA
        </h2>
        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>
            Apakah ridha itu bersikap pasif menerima apa saja? Tentu tidak! Ridha bukan berarti berhenti berjuang, tidak boleh kecewa, atau menganggap semua kejadian pasti baik secara manusiawi. Ridha adalah penerimaan batin terhadap ketetapan Allah setelah manusia menunaikan ikhtiar, sambil tetap berusaha memperbaiki hal-hal yang memang bisa diperbaiki.
          </p>
          <p>
            Ridha juga menjadi perkembangan logis dari Gerbang Tawakal. Tawakal: “Aku menyerahkan hasil kepada Allah”. Ridha: “Aku menerima keputusan Allah tanpa kehilangan cintaku kepada-Nya.”
          </p>
          <p>
            Tawakal mengajarkan kita melepaskan hasil. Ridha mengajarkan kita tidak membenci hidup hanya karena hasilnya berbeda dari keinginan.
          </p>
        </div>
      </section>

      {/* 1. Ketika Burung Jiwa Berhenti Bertengkar dengan Takdir */}
      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">1</span>
          <h3 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Ketika Burung Jiwa Berhenti Bertengkar dengan Takdir</h3>
        </div>

        <blockquote className="mt-8 rounded-2xl border border-[#b18a3c]/25 bg-[#173c2a] px-6 py-8 text-center font-serif text-xl leading-relaxed text-[#f7f5ef] shadow-sm sm:px-10 sm:text-2xl">
          “Ada saat ketika doa bukan lagi meminta Allah mengubah jalan, tetapi meminta hati kita cukup lapang untuk berjalan di jalan yang telah Allah pilihkan.”
        </blockquote>

        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>
            Ada manusia yang mampu menerima kekalahan. Tetapi tidak mampu menerima kenyataan bahwa ia kalah. Ada manusia yang mampu kehilangan. Tetapi bertahun-tahun masih berperang dengan kenyataan bahwa sesuatu telah hilang. Ada manusia yang mampu mengatakan: “Aku tawakal”. Tetapi jauh di dalam hatinya masih berkata: “Seharusnya Allah memilih jalan yang berbeda.”
          </p>
          <p>
            Di sinilah perjalanan spiritual memasuki gerbang yang lebih dalam. Ridha bukan sekadar menerima. Ridha adalah ketika hati perlahan berhenti bertengkar dengan kenyataan yang telah Allah izinkan terjadi. Bukan karena kenyataan itu selalu menyenangkan. Tetapi karena hati mulai percaya bahwa Allah tetap layak dipercaya bahkan ketika jalan-Nya tidak sesuai dengan keinginan kita.
          </p>
        </div>
      </section>

      {/* 2. Ridha Bukan Menyukai Semua Hal */}
      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">2</span>
          <h3 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Ridha Bukan Menyukai Semua Hal</h3>
        </div>
        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>
            Ini penting. Ridha tidak berarti kita harus menyukai kemiskinan. Tidak berarti kita harus menyukai sakit. Tidak berarti seseorang harus diam ketika dizalimi. Tidak berarti kita tidak boleh memperbaiki keadaan. Dan tidak berarti setiap musibah harus dianggap &quot;indah&quot;.
          </p>
          <p>
            Seorang manusia tetap boleh menangis. Tetap boleh berduka. Tetap boleh mencari pengobatan. Tetap boleh memperjuangkan keadilan. Tetap boleh meninggalkan keadaan yang merusak.
          </p>
          <p>
            Ridha berada di tempat yang lebih dalam: Ridha adalah menerima bahwa setelah semua ikhtiar dilakukan, keputusan terakhir bukan berada di tangan manusia.
          </p>
        </div>

        <div className="mt-8 rounded-2xl border border-[#b18a3c]/20 bg-white/70 p-6 shadow-sm sm:p-8">
          <p className="text-base leading-8 text-[#173c2a]/80 sm:text-lg sm:leading-9">
            Karena itu, seseorang bisa berusaha mengubah keadaan sekaligus tetap ridha kepada Allah. Ia berkata: “Aku akan berjuang memperbaiki keadaan ini. Tetapi jika hasil akhirnya tidak sesuai keinginanku, aku tidak akan menjadikan kekecewaan kepada hasil sebagai alasan untuk membenci Allah.”
          </p>
          <p className="mt-4 font-serif text-xl font-semibold text-[#b18a3c]">
            Itulah kedewasaan spiritual.
          </p>
        </div>
      </section>

      {/* 3. Dua Macam Tidak */}
      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">3</span>
          <h3 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Dua Macam Tidak</h3>
        </div>
        <p className="mt-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          Ada dua jenis &quot;tidak&quot; dalam kehidupan.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-[#173c2a]/10 bg-white/70 p-6 shadow-sm">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#b18a3c]">Jenis Pertama</span>
            <h4 className="mt-2 font-serif text-2xl font-semibold text-[#173c2a]">“Tidak, karena aku gagal”</h4>
            <p className="mt-4 leading-8 text-[#173c2a]/70">
              Membuat seseorang merasa dirinya tidak berharga dan terus menghakimi kekurangan dirinya.
            </p>
          </div>
          <div className="rounded-2xl border border-[#b18a3c]/30 bg-[#e4e7df]/60 p-6 shadow-sm">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#b18a3c]">Jenis Kedua</span>
            <h4 className="mt-2 font-serif text-2xl font-semibold text-[#173c2a]">“Tidak, karena Allah memilih jalan yang berbeda”</h4>
            <p className="mt-4 leading-8 text-[#173c2a]/70">
              Membuat seseorang belajar menerima bahwa manusia memiliki keterbatasan dan rahmat Allah selalu luas.
            </p>
          </div>
        </div>

        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>
            Keduanya terdengar sama. Tetapi efeknya terhadap jiwa sangat berbeda.
          </p>
          <p>
            Seorang anak muda gagal masuk universitas yang diinginkannya. Ia bisa berkata: “Aku gagal. Berarti aku bodoh”. Atau: “Aku akan mengevaluasi kesalahanku dan mencoba lagi”. Dan setelah melakukan semuanya: “Ya Allah, jika jalan ini bukan jalanku, tuntun aku menemukan jalan yang Engkau kehendaki.”
          </p>
          <p className="font-medium text-[#173c2a]">
            Kalimat terakhir adalah pintu menuju ridha.
          </p>
        </div>
      </section>

      {/* 4. Al Qur'an: Jiwa yang Kembali dengan Ridha */}
      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">4</span>
          <h3 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Al Qur&apos;an: Jiwa yang Kembali dengan Ridha</h3>
        </div>
        <p className="mt-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          Salah satu ayat paling indah tentang ridha terdapat pada penutup Surah Al-Fajr:
        </p>

        <div className="mt-8 rounded-2xl bg-[#173c2a] px-6 py-8 text-center text-[#f7f5ef] shadow-sm sm:px-10">
          <div className="font-serif text-2xl leading-[2.2] sm:text-3xl" dir="rtl">
            يَا أَيَّتُهَا النَّفْسُ الْمُطْمَئِنَّةُ ۝ ارْجِعِي إِلَىٰ رَبِّكِ رَاضِيَةً مَّرْضِيَّةً ۝ فَادْخُلِي فِي عِبَادِي ۝ وَادْخُلِي جَنَّتِي
          </div>
          <p className="mt-6 text-base leading-8 text-white/80 sm:text-lg">
            “Wahai jiwa yang tenang! Kembalilah kepada Tuhanmu dengan hati yang ridha dan diridhai-Nya. Maka masuklah ke dalam golongan hamba-hamba-Ku, dan masuklah ke dalam surga-Ku.”
          </p>
          <p className="mt-2 text-sm text-[#d9c27a]">Q.S. Al-Fajr [89]: 27–30</p>
        </div>

        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>
            Perhatikan dua kata: <strong>(رَاضِيَةً)</strong> <em>rāḍiyah</em> &quot;yang ridha&quot;. Dan: <strong>(مَرْضِيَّةً)</strong> <em>marḍiyyah</em> &quot;yang diridhai&quot;.
          </p>
          <p>
            Ini seperti perjalanan dua arah. Manusia belajar ridha kepada Allah. Dan Allah meridhainya. Maka puncak perjalanan bukan sekadar: &quot;Aku ridha kepada Allah&quot;. Tetapi: “Semoga Allah juga ridha kepadaku.”
          </p>
        </div>
      </section>

      {/* 5. Ridha Tidak Berarti Berhenti Berusaha */}
      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">5</span>
          <h3 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Ridha Tidak Berarti Berhenti Berusaha</h3>
        </div>

        <div className="mt-8 rounded-2xl bg-[#173c2a] px-6 py-8 text-center text-[#f7f5ef] shadow-sm sm:px-10">
          <div className="font-serif text-2xl leading-relaxed sm:text-3xl" dir="rtl">
            وَأَن لَّيْسَ لِلْإِنسَانِ إِلَّا مَا سَعَىٰ
          </div>
          <p className="mt-4 text-base leading-8 text-white/80">
            “Dan bahwa manusia hanya memperoleh apa yang telah diusahakannya.”
          </p>
          <p className="mt-2 text-sm text-[#d9c27a]">Q.S. An-Najm [53]: 39</p>
        </div>

        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>
            Ayat ini menjadi penyeimbang. Islam tidak mengajarkan manusia duduk menunggu takdir. Manusia diperintahkan berusaha. Tetapi setelah usaha dilakukan, ada wilayah yang tidak lagi berada dalam kendali manusia. Di sanalah ridha bekerja.
          </p>
          <blockquote className="rounded-xl border-l-4 border-[#b18a3c] bg-white/70 p-4 font-serif text-xl italic text-[#173c2a]">
            “Aku mengerjakan bagianku. Allah menentukan bagian-Nya.”
          </blockquote>
        </div>
      </section>

      {/* 6. Ridha dan Kenyataan yang Tidak Bisa di-Edit */}
      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">6</span>
          <h3 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Ridha dan Kenyataan yang Tidak Bisa di-Edit</h3>
        </div>
        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>
            Kita hidup di zaman yang membuat manusia terbiasa mengedit: foto bisa diedit, video bisa diedit, tulisan bisa diedit. Identitas digital bisa dibangun ulang. Bahkan algoritma media sosial berusaha memberikan kepada kita dunia yang sesuai dengan selera kita.
          </p>
          <p>
            Akibatnya, kita perlahan terbiasa dengan satu ilusi: “Semua harus sesuai keinginanku”. Lalu kehidupan nyata datang. Orang yang kita cintai mengambil keputusan yang tidak kita sukai. Pekerjaan yang kita inginkan diberikan kepada orang lain. Bisnis yang kita bangun mengalami kerugian. Rencana yang sudah disusun bertahun-tahun tiba-tiba berubah. Kita tidak bisa menekan tombol edit. Tidak ada tombol undo. Tidak ada tombol refresh untuk mengulang kehidupan.
          </p>
        </div>

        <div className="mt-8 rounded-2xl border border-[#b18a3c]/20 bg-[#e4e7df]/60 p-6 shadow-sm sm:p-8">
          <p className="font-serif text-xl font-semibold text-[#173c2a] sm:text-2xl">
            Di sinilah ridha menjadi sangat relevan. Ridha mengajarkan: Tidak semua yang terjadi dalam hidup harus sesuai keinginanmu agar hidup tetap memiliki makna.
          </p>
        </div>
      </section>

      {/* 7. Rasulullah ﷺ: Ridha kepada Allah */}
      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">7</span>
          <h3 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Rasulullah ﷺ: Ridha kepada Allah</h3>
        </div>
        <p className="mt-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          Rasulullah ﷺ bersabda:
        </p>

        <div className="mt-8 rounded-2xl bg-[#173c2a] px-6 py-8 text-center text-[#f7f5ef] shadow-sm sm:px-10">
          <div className="font-serif text-2xl leading-relaxed sm:text-3xl" dir="rtl">
            ذَاقَ طَعْمَ الإِيمَانِ مَنْ رَضِيَ بِاللَّهِ رَبًّا، وَبِالإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ رَسُولًا
          </div>
          <p className="mt-5 text-base leading-8 text-white/80 sm:text-lg">
            “Telah merasakan manisnya iman orang yang ridha kepada Allah sebagai Tuhannya, Islam sebagai agamanya, dan Muhammad sebagai rasulnya.”
          </p>
          <p className="mt-2 text-sm text-[#d9c27a]">HR. Muslim, no. 34</p>
        </div>

        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>
            Perhatikan kata yang digunakan: <strong>(ذَاقَ)</strong> — <em>dzāqa</em> (“Merasakan”).
          </p>
          <p>
            Iman tidak hanya menjadi sesuatu yang diketahui. Ia menjadi sesuatu yang dirasakan. Maka ridha bukan sekadar teori. Ia memiliki rasa.
          </p>
          <p>
            Ada ketenangan tertentu ketika hati berhenti menuntut dunia untuk selalu mengikuti keinginannya.
          </p>
        </div>
      </section>

      {/* 8. Ridha dan Kepahitan Hidup */}
      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">8</span>
          <h3 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Ridha dan Kepahitan Hidup</h3>
        </div>
        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>
            Namun jangan romantisasi penderitaan. Ada orang yang mengatakan: &quot;Kalau kamu ridha, kamu tidak boleh sedih.&quot;
          </p>
          <p>
            Itu tidak tepat. Rasulullah ﷺ sendiri pernah menangis ketika putranya, Ibrahim, wafat. Beliau bersabda: “Mata meneteskan air mata, hati bersedih, tetapi kami tidak mengatakan kecuali apa yang diridhai Tuhan kami.” (HR. al-Bukhari dan Muslim).
          </p>
          <p>
            Ini adalah gambaran ridha yang sangat manusiawi. Air mata boleh turun. Hati boleh berduka. Tetapi hubungan dengan Allah tidak putus. Inilah perbedaan antara sedih dan memberontak kepada Allah.
          </p>
          <p>
            Seseorang boleh berkata: “Ya Allah, aku sangat sedih”. Tetapi tetap mampu berkata: “Aku tetap percaya kepada-Mu”. Itulah ridha.
          </p>
        </div>
      </section>

      {/* 9. Rumi: Ketika Luka Tidak Lagi Menjadi Musuh */}
      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">9</span>
          <h3 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Rumi: Ketika Luka Tidak Lagi Menjadi Musuh</h3>
        </div>
        <p className="mt-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          Rumi memiliki cara yang sangat indah dalam melihat penderitaan. Dalam Masnavi, terdapat bait:
        </p>

        <div className="mt-8 rounded-2xl bg-[#173c2a] px-6 py-8 text-center text-[#f7f5ef] shadow-sm sm:px-10">
          <div className="font-serif text-2xl leading-[2.2] sm:text-3xl" dir="rtl">
            <p>ناخوش او خوش بود در جان من</p>
            <p>جان فدای یار دلرنجان من</p>
          </div>
          <p className="mt-4 text-sm text-[#d9c27a]">
            Nā-khush-e ū khūsh būd dar jān-e man, jān fidā-ye yār-e del-ranjān-e man.
          </p>
          <p className="mt-4 text-base leading-8 text-white/80">
            “Apa yang tidak menyenangkan dari-Nya menjadi menyenangkan dalam jiwaku; jiwaku kupersembahkan kepada Kekasih yang membuat hatiku terluka.”
          </p>
          <p className="mt-2 text-xs text-white/60">Jalaluddin Rumi, Masnavi-ye Ma&apos;navi, Buku I</p>
        </div>

        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>
            Bait ini perlu dibaca dengan hati-hati. Rumi bukan sedang mengajarkan bahwa penderitaan harus dicari atau bahwa manusia harus menyukai rasa sakit. Yang sedang dibicarakan adalah perubahan hubungan jiwa dengan kehendak Sang Kekasih.
          </p>
          <p>
            Ketika cinta kepada Allah menjadi pusat kehidupan, manusia tidak lagi mengukur seluruh kebaikan berdasarkan kenyamanan dirinya sendiri. Ia mulai bertanya: “Apa yang sedang Allah bentuk melalui pengalaman ini?”
          </p>
          <p>
            Pertanyaan itu mengubah posisi penderitaan. Dari: “Mengapa ini terjadi kepadaku?” menjadi: “Bagaimana aku harus hidup di dalam keadaan ini agar tetap dekat kepada-Nya?”
          </p>
          <p className="font-medium text-[#173c2a]">
            Itulah salah satu wajah ridha.
          </p>
        </div>
      </section>

      {/* 10. Rumi dan Harta yang Paling Sulit */}
      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">10</span>
          <h3 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Rumi dan Harta yang Paling Sulit</h3>
        </div>
        <p className="mt-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          Dalam Masnavi, Rumi juga menulis:
        </p>

        <div className="mt-8 rounded-2xl bg-[#173c2a] px-6 py-8 text-center text-[#f7f5ef] shadow-sm sm:px-10">
          <div className="font-serif text-2xl leading-[2.2] sm:text-3xl" dir="rtl">
            <p>چون قناعت را پیمبر گنج گفت</p>
            <p>هر کسی را کی رسد گنج نهفت</p>
          </div>
          <p className="mt-4 text-sm text-[#d9c27a]">
            Chūn qanā&apos;at-rā paygambar ganj goft, har kasī-rā kay rasad ganj-e nehuft?
          </p>
          <p className="mt-4 text-base leading-8 text-white/80">
            “Karena Nabi menyebut qana&apos;ah sebagai harta, bagaimana mungkin setiap orang memperoleh harta tersembunyi itu?”
          </p>
          <p className="mt-2 text-xs text-white/60">Rumi, Masnavi, Buku V, bait 2395</p>
        </div>

        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>
            Qana&apos;ah dan ridha bukan sinonim, tetapi keduanya berdekatan. Qana&apos;ah mengajarkan kecukupan terhadap apa yang dimiliki. Ridha membawa kita lebih dalam: menerima keputusan Allah dengan hati yang tidak terus-menerus memberontak.
          </p>
          <p>
            Dalam masyarakat yang terus berkata: “Kamu belum cukup”. Rumi menawarkan pertanyaan yang berbeda: “Kapan hatimu akan merasa cukup untuk mengenali karunia Allah?”
          </p>
        </div>
      </section>

      {/* 11. Syams Tabrizi: Jangan Jadikan Allah Sekadar Jalan Menuju Keinginan */}
      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">11</span>
          <h3 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Syams Tabrizi: Jangan Jadikan Allah Sekadar Jalan Menuju Keinginan</h3>
        </div>
        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>
            Dalam tradisi spiritual Syams Tabrizi, hubungan dengan Allah tidak seharusnya dibangun hanya berdasarkan transaksi: “Aku beribadah agar Allah memberiku apa yang kuinginkan”. Hubungan semacam itu masih menempatkan pemberian di atas Sang Pemberi.
          </p>
          <p>
            Ajaran Syams dalam <em>Maqālāt</em> bergerak menuju cinta yang lebih dalam: manusia harus mencari Allah, bukan sekadar mencari keuntungan spiritual dari Allah.
          </p>
          <p>
            Ini sangat relevan dengan zaman sekarang. Karena spiritualitas pun bisa berubah menjadi konsumsi. Kita berdoa agar kaya. Beribadah agar sukses. Bersedekah agar rezeki lancar. Bertasawuf agar hidup tenang. Tidak ada yang salah meminta nikmat Allah. Tetapi ada bahaya jika akhirnya kita hanya mencintai Allah selama Allah memberikan apa yang kita inginkan.
          </p>
        </div>

        <div className="mt-8 rounded-2xl border border-[#b18a3c]/20 bg-white/70 p-6 shadow-sm sm:p-8">
          <p className="text-base leading-8 text-[#173c2a]/80 sm:text-lg sm:leading-9">
            Syams mengajak kita bergerak dari: <em>“Aku mencintai-Mu karena Engkau memberiku”</em>, menuju: <strong>“Aku mencintai-Mu karena Engkau adalah Allah.”</strong>
          </p>
          <p className="mt-3 text-sm text-[#173c2a]/55">Sumber: Syams al-Dīn Muḥammad Tabrīzī, <em>Maqālāt-e Shams-e Tabrīzī</em>.</p>
        </div>
      </section>

      {/* 12. Ridha di Era Algoritma */}
      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">12</span>
          <h3 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Ridha di Era Algoritma</h3>
        </div>
        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>
            Manusia modern semakin sulit menerima ketidakpastian. Kita ingin mengetahui: berapa penghasilan bulan depan; siapa yang akan sukses; berapa nilai investasi; apa yang sedang dipikirkan orang lain; berapa banyak orang yang menyukai kita; bagaimana masa depan anak; bahkan seperti apa kehidupan kita lima atau sepuluh tahun mendatang.
          </p>
          <p>
            Data memberikan prediksi. Tetapi prediksi bukan kepastian. Dan di tengah semua itu, ridha mengajarkan sebuah kemampuan yang semakin langka: kemampuan hidup tanpa harus mengetahui seluruh jawaban.
          </p>
          <p>
            Ini bukan anti-teknologi. Bukan anti-ilmu. Justru sebaliknya. Kita boleh menggunakan seluruh kecerdasan yang kita miliki. Kita boleh membuat rencana terbaik. Tetapi setelah semua itu: kita tetap manusia. Dan manusia tidak pernah memiliki kendali mutlak atas masa depan.
          </p>
        </div>
      </section>

      {/* 13. Ridha dan Kesehatan Mental Spiritual */}
      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">13</span>
          <h3 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Ridha dan Kesehatan Mental Spiritual</h3>
        </div>
        <p className="mt-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          Ada perbedaan antara: menerima kenyataan dan menyerah pada keadaan.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-red-200 bg-red-50/40 p-6 shadow-sm">
            <h4 className="font-serif text-xl font-semibold text-red-900">Menyerah</h4>
            <p className="mt-3 text-base leading-7 text-red-800/80">
              “Sudahlah. Tidak ada yang bisa dilakukan.”
            </p>
            <p className="mt-4 text-sm leading-6 text-red-700/70">
              Menyerah membuat seseorang berhenti dan lahir dari keputusasaan.
            </p>
          </div>

          <div className="rounded-2xl border border-[#b18a3c]/30 bg-[#e4e7df]/60 p-6 shadow-sm">
            <h4 className="font-serif text-xl font-semibold text-[#173c2a]">Ridha</h4>
            <p className="mt-3 text-base leading-7 text-[#173c2a]/90">
              “Aku akan melakukan apa yang masih bisa kulakukan. Setelah itu, aku menyerahkan hasil kepada Allah.”
            </p>
            <p className="mt-4 text-sm leading-6 text-[#173c2a]/70">
              Ridha membuat seseorang tenang untuk terus melangkah dan lahir dari kepercayaan.
            </p>
          </div>
        </div>
      </section>

      {/* 14. Tiga Tingkat Ridha */}
      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">14</span>
          <h3 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Tiga Tingkat Ridha</h3>
        </div>
        <p className="mt-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          Untuk memudahkan pembaca, ridha dapat kita renungkan dalam tiga lapisan:
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-[#173c2a]/10 bg-white/70 p-6 shadow-sm">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#b18a3c]">Lapis Pertama</span>
            <h4 className="mt-2 font-serif text-xl font-semibold text-[#173c2a]">Ridha Terhadap Allah</h4>
            <p className="mt-3 text-sm leading-7 text-[#173c2a]/70">
              Aku menerima Allah sebagai Rabb-ku. Bukan hanya ketika hidup mudah, tetapi juga ketika hidup tidak sesuai harapan.
            </p>
          </div>

          <div className="rounded-2xl border border-[#173c2a]/10 bg-white/70 p-6 shadow-sm">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#b18a3c]">Lapis Kedua</span>
            <h4 className="mt-2 font-serif text-xl font-semibold text-[#173c2a]">Ridha Terhadap Ketetapan-Nya</h4>
            <p className="mt-3 text-sm leading-7 text-[#173c2a]/70">
              Aku belajar menerima bahwa tidak semua hal berjalan sesuai keinginanku. Aku tetap memperbaiki apa yang bisa diperbaiki, tetapi tidak menghancurkan diriku karena hal di luar kendaliku.
            </p>
          </div>

          <div className="rounded-2xl border border-[#173c2a]/10 bg-white/70 p-6 shadow-sm">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#b18a3c]">Lapis Ketiga</span>
            <h4 className="mt-2 font-serif text-xl font-semibold text-[#173c2a]">Ridha Menjadi Cara Hidup</h4>
            <p className="mt-3 text-sm leading-7 text-[#173c2a]/70">
              Manusia tidak lagi bertanya: “Mengapa hidupku seperti ini?”, melainkan: “Bagaimana aku bisa menjadi hamba Allah yang baik dalam kehidupan yang seperti ini?”
            </p>
          </div>
        </div>
      </section>

      {/* 15. Ujian Terbesar Ridha */}
      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">15</span>
          <h3 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Ujian Terbesar Ridha</h3>
        </div>
        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>
            Ada dua keadaan yang sama-sama bisa menguji ridha: Ketika Allah memberi sesuatu yang tidak kita inginkan, dan ketika Allah tidak memberi sesuatu yang sangat kita inginkan. Yang pertama menguji penerimaan, yang kedua menguji kesetiaan.
          </p>
          <p>
            Seorang manusia mungkin berkata: &quot;Aku ridha dengan takdir Allah&quot;. Tetapi bagaimana jika doa yang paling ia inginkan tidak pernah terwujud? Bagaimana jika orang yang ia cintai tidak kembali? Bagaimana jika karier yang diimpikan tidak terjadi? Bagaimana jika hidup ternyata tidak berjalan seperti yang ia bayangkan sejak muda?
          </p>
          <p className="font-serif text-xl font-semibold text-[#173c2a]">
            Di sinilah ridha menjadi nyata. Bukan dalam kata-kata, tetapi dalam kemampuan untuk tetap mencintai Allah ketika hidup tidak memberikan apa yang kita cintai.
          </p>
        </div>
      </section>

      {/* =====================================================
          BENANG MERAH / GREEN BLOCK SECTION: 16. Burung Jiwa
          ===================================================== */}

      <section className="bg-[#173c2a] px-5 py-20 text-[#f7f5ef] sm:px-8 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center space-x-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#d9c27a] text-sm font-semibold text-[#173c2a]">16</span>
            <h3 className="font-serif text-3xl font-semibold tracking-tight text-[#f7f5ef] sm:text-4xl">Burung Jiwa</h3>
          </div>

          <div className="mt-8 rounded-2xl border border-[#d9c27a]/20 bg-white/10 p-6 backdrop-blur-sm sm:p-8">
            <p className="text-base leading-8 text-white/90 sm:text-lg sm:leading-9">
              Bayangkan seekor burung yang terbang. Ia tidak dapat mengatur arah seluruh angin. Ia tidak dapat memerintah awan. Ia tidak dapat menghapus badai. Tetapi ia dapat mengatur sayapnya. Ia dapat mencari tempat berlindung. Ia dapat menunggu. Ia dapat terbang kembali.
            </p>
            <p className="mt-6 text-base leading-8 text-white/90 sm:text-lg sm:leading-9">
              Begitulah manusia. Tidak semua keadaan dapat kita ubah. Tetapi selalu ada sesuatu yang dapat kita pilih: cara kita meresponsnya.
            </p>
            <blockquote className="mt-8 border-l-4 border-[#d9c27a] pl-6 font-serif text-2xl leading-relaxed text-[#d9c27a]">
              Ridha adalah ketika burung jiwa berkata: “Aku tidak menguasai langit. Tetapi aku percaya kepada Dia yang menciptakan langit.”
            </blockquote>
          </div>
        </div>
      </section>

      {/* 17. Ridha Bukan Akhir dari Perjuangan */}
      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">17</span>
          <h3 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Ridha Bukan Akhir dari Perjuangan</h3>
        </div>
        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>
            Ada kekeliruan besar ketika orang menganggap ridha sebagai titik di mana seseorang berhenti memiliki cita-cita. Justru tidak. Orang yang ridha masih boleh memiliki impian. Masih boleh ingin kaya. Masih boleh ingin sukses. Masih boleh membangun perusahaan. Masih boleh belajar setinggi-tingginya. Masih boleh memperjuangkan keadilan. Masih boleh berusaha mengubah dunia.
          </p>
          <p>
            Yang berubah adalah posisi hatinya. Dahulu: “Aku harus berhasil agar aku berharga”. Sekarang: “Aku akan berusaha sebaik mungkin karena itu amanah. Jika berhasil, aku bersyukur. Jika belum berhasil, aku belajar dan tetap percaya kepada Allah.”
          </p>
          <p className="font-serif text-xl font-semibold text-[#b18a3c]">
            Itulah kebebasan.
          </p>
        </div>
      </section>

      {/* 18. Rahasia Ridha */}
      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">18</span>
          <h3 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Rahasia Ridha</h3>
        </div>
        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>
            Mungkin rahasia ridha bukan membuat manusia berhenti menginginkan. Tetapi membuat manusia tidak menjadi budak keinginannya.
          </p>
          <div className="mt-6 rounded-2xl border border-[#b18a3c]/20 bg-white/70 p-6 shadow-sm sm:p-8">
            <ul className="space-y-3 text-base leading-8 text-[#173c2a]/80 sm:text-lg">
              <li className="flex items-start"><span className="mr-3 text-[#b18a3c]">✦</span> Aku boleh ingin. Tetapi aku tidak harus memiliki.</li>
              <li className="flex items-start"><span className="mr-3 text-[#b18a3c]">✦</span> Aku boleh berusaha. Tetapi aku tidak harus mengendalikan hasil.</li>
              <li className="flex items-start"><span className="mr-3 text-[#b18a3c]">✦</span> Aku boleh menangis. Tetapi aku tidak harus kehilangan iman.</li>
              <li className="flex items-start"><span className="mr-3 text-[#b18a3c]">✦</span> Aku boleh kecewa. Tetapi aku tidak harus membenci takdir.</li>
              <li className="flex items-start"><span className="mr-3 text-[#b18a3c]">✦</span> Aku boleh memiliki cita-cita. Tetapi aku tidak harus mengorbankan Allah demi cita-cita itu.</li>
            </ul>
          </div>
          <p className="font-serif text-xl text-[#173c2a]">
            Inilah kebebasan batin yang sangat mahal di zaman modern.
          </p>
        </div>
      </section>

      {/* 19. Ruang Sunyi: Bicara kepada Diri Sendiri */}
      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">19</span>
          <h3 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Ruang Sunyi: Bicara kepada Diri Sendiri</h3>
        </div>
        <div className="mt-8 rounded-2xl border border-[#b18a3c]/20 bg-white/70 p-6 shadow-sm sm:p-8">
          <p className="text-base leading-8 text-[#173c2a]/80 sm:text-lg sm:leading-9">
            Berhentilah sejenak. Tanyakan kepada dirimu:
          </p>
          <ol className="mt-4 list-inside list-decimal space-y-4 text-base leading-8 text-[#173c2a]/80 sm:text-lg">
            <li>
              Apa satu hal yang sampai hari ini belum bisa kuterima? <em>Tuliskan.</em>
            </li>
            <li>
              Apakah aku sedang berusaha memperbaiki sesuatu yang masih bisa diperbaiki? <em>Jika iya, lanjutkan perjuangan.</em>
            </li>
            <li>
              Apakah aku sedang memaksa sesuatu yang memang tidak berada dalam kendaliku? <em>Jika iya, belajar melepaskan.</em>
            </li>
            <li>
              Bisakah aku tetap mencintai Allah meskipun Allah tidak memberikan apa yang kuinginkan? <em>Diamlah beberapa saat sebelum menjawab.</em>
            </li>
          </ol>
          <p className="mt-6 font-serif text-lg italic text-[#173c2a]">
            Sebab pertanyaan ini mungkin akan membawamu ke tempat yang sangat dalam.
          </p>
        </div>
      </section>

      {/* =====================================================
          BENANG MERAH / GREEN BLOCK SECTION: 20. Penutup
          ===================================================== */}

      <section className="bg-[#173c2a] px-5 py-20 text-[#f7f5ef] sm:px-8 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center space-x-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#d9c27a] text-sm font-semibold text-[#173c2a]">20</span>
            <h3 className="font-serif text-3xl font-semibold tracking-tight text-[#f7f5ef] sm:text-4xl">
              Penutup: Ketika Burung Jiwa Tidak Lagi Bertanya Mengapa
            </h3>
          </div>

          <div className="mt-8 space-y-6 text-base leading-8 text-white/80 sm:text-lg sm:leading-9">
            <p>
              Mungkin suatu hari nanti kita akan sampai pada sebuah titik. Bukan titik ketika semua masalah selesai. Bukan titik ketika semua doa dikabulkan. Bukan titik ketika hidup menjadi sempurna. Tetapi titik ketika hati berkata: “Aku tidak memahami semuanya, tetapi aku percaya kepada-Mu.”
            </p>
            <p>
              Kemudian: “Aku tidak menyukai semua yang terjadi, tetapi aku tidak akan menjadikan ketidaksukaanku sebagai alasan untuk menjauh dari-Mu.”
            </p>
            <p>
              Dan akhirnya: “Jika jalan ini harus kulewati, tuntun aku melewatinya bersama-Mu.”
            </p>
          </div>

          <div className="mt-10 rounded-2xl border border-[#d9c27a]/20 bg-white/10 p-6 backdrop-blur-sm sm:p-8">
            <p className="font-serif text-xl leading-relaxed text-[#d9c27a] sm:text-2xl">
              Itulah ridha.
            </p>
            <ul className="mt-4 space-y-3 text-base leading-8 text-white/90 sm:text-lg">
              <li>✦ Bukan mencintai semua keadaan, tetapi tetap mencintai Allah di tengah keadaan apa pun.</li>
              <li>✦ Bukan berhenti berjuang, tetapi berhenti menyandarkan harga diri kepada hasil perjuangan.</li>
              <li>✦ Bukan berhenti berharap, tetapi belajar berharap kepada Allah lebih besar daripada berharap kepada keinginan sendiri.</li>
            </ul>
          </div>

          <div className="mt-10 space-y-6 text-base leading-8 text-white/85 sm:text-lg sm:leading-9">
            <p>
              Dan mungkin, ketika burung jiwa sampai di gerbang ini, ia akhirnya memahami: Tawakal membuatnya berani terbang.
            </p>
            <blockquote className="border-l-4 border-[#d9c27a] pl-6 font-serif text-2xl leading-relaxed text-[#d9c27a]">
              Ridha membuatnya damai dengan arah angin. Sebab ia akhirnya tahu: Langit bukan miliknya. Sayap bukan miliknya. Angin bukan miliknya. Bahkan perjalanan ini pun bukan miliknya. Ia hanya seorang musafir yang sedang dipercaya Allah untuk terbang.
            </blockquote>
          </div>
        </div>
      </section>

      {/* Daftar Pustaka Section */}
      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <h3 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Daftar Pustaka</h3>
        <ol className="mt-8 list-decimal space-y-4 pl-6 text-base leading-8 text-[#173c2a]/75 sm:text-lg sm:leading-9">
          <li>
            Al-Qur&apos;an al-Karim. Q.S. Al-Fajr [89]: 27–30; Q.S. An-Najm [53]: 39.
          </li>
          <li>
            Al-Bukhari, Muhammad ibn Isma&apos;il. <em>Sahih al-Bukhari</em>. Hadis tentang wafatnya Ibrahim, putra Rasulullah ﷺ.
          </li>
          <li>
            Muslim ibn al-Hajjaj. <em>Sahih Muslim</em>, Kitab al-Iman, Hadis no. 34. Hadis tentang merasakan manisnya iman dengan ridha kepada Allah sebagai Rabb, Islam sebagai agama, dan Muhammad ﷺ sebagai Rasul.
          </li>
          <li>
            Rumi, Jalaluddin. <em>Masnavi-ye Ma’navi</em>, khususnya Buku I dan Buku V, bait 2395 dan bagian-bagian yang membahas tawakal, qana&apos;ah, cinta, serta penerimaan terhadap kehendak Ilahi.
          </li>
          <li>
            Tabrizi, Shams al-Din Muhammad. <em>Maqālāt-e Shams-e Tabrīzī</em> (The Discourses of Shams-i Tabrizi).
          </li>
          <li>
            Chittick, William C. <em>The Sufi Path of Love: The Spiritual Teachings of Rumi</em>. State University of New York Press.
          </li>
          <li>
            Schimmel, Annemarie. <em>The Triumphal Sun: A Study of the Works of Jalaloddin Rumi</em>. State University of New York Press.
          </li>
          <li>
            Nicholson, Reynold A. <em>The Mathnawi of Jalalu&apos;ddin Rumi</em>. E.J.W. Gibb Memorial.
          </li>
          <li>
            Al-Qushayri, Abu al-Qasim. <em>Al-Risalah al-Qushayriyyah</em>. Rujukan penting untuk konsep maqāmāt, termasuk ridha (rida).
          </li>
          <li>
            Al-Ghazali, Abu Hamid. <em>Ihya&apos; &apos;Ulum al-Din</em>, terutama pembahasan tentang sabar, syukur, tawakal, dan ridha.
          </li>
        </ol>

        <blockquote className="mt-12 rounded-2xl border border-[#b18a3c]/25 bg-[#173c2a] px-6 py-8 text-center text-[#f7f5ef] shadow-sm sm:px-10">
          <p className="font-serif text-2xl text-[#d9c27a]">Berikutnya</p>
          <p className="mt-4 text-base italic text-white/80 sm:text-lg">“Gerbang Ma&apos;rifah”</p>
        </blockquote>

        <p className="mt-8 text-center text-sm leading-7 text-[#173c2a]/50">
          #artikel #ngajirumi #ridha #karenaAllah #jalaluddinrumi #mjuharuddin
        </p>
      </section>

      {/* =====================================================
          GERBANG MA'RIFAH
          NGAJI RUMI 8 "BURUNG JIWA" - By. Juhar
          ===================================================== */}

      {/* Header & Intro Section */}
      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <span className="mb-6 inline-flex rounded-full border border-[#b18a3c]/50 bg-[#b18a3c]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#b18a3c]">
          NGAJI RUMI 8 &quot;BURUNG JIWA&quot; — By. Juhar
        </span>
        <h2 className="mt-4 font-serif text-4xl font-bold tracking-tight text-[#173c2a] sm:text-5xl">
          GERBANG MA&apos;RIFAH
        </h2>
        <div className="mt-8 rounded-2xl border border-[#b18a3c]/20 bg-white/70 p-6 text-base leading-8 text-[#173c2a]/75 shadow-sm sm:p-8 sm:text-lg sm:leading-9">
          <p>
            Alhamdulillah kita telah sampai di garis &quot;Gerbang Ma&apos;rifah&quot;, tapi yang perlu diingat dan harus dijaga adalah bahwa dalam tasawuf Islam, ma‘rifah bukan berarti manusia “menjadi Allah”, menyatu secara harfiah dengan Allah, atau memperoleh pengetahuan gaib tanpa batas. Ma‘rifah adalah pengenalan kepada Allah yang melahirkan kesadaran, cinta, takut, harap, adab, dan perubahan akhlak.
          </p>
        </div>
      </section>

      {/* 1. Ketika Burung Jiwa Akhirnya Mengenal Siapa yang Selama Ini Dicari */}
      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">1</span>
          <h3 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Ketika Burung Jiwa Akhirnya Mengenal Siapa yang Selama Ini Dicari</h3>
        </div>
        <blockquote className="mt-8 rounded-2xl border border-[#b18a3c]/25 bg-[#173c2a] px-6 py-8 text-center font-serif text-xl leading-relaxed text-[#f7f5ef] shadow-sm sm:px-10 sm:text-2xl">
          “Barangkali sepanjang hidup kita mengira sedang mencari kebahagiaan, keberhasilan, cinta, pengakuan, dan ketenangan. Padahal di balik semua pencarian itu, ada satu kerinduan yang lebih tua: kerinduan jiwa untuk mengenal Tuhannya.”
        </blockquote>
      </section>

      {/* 2. Pertanyaan Terakhir Setelah Semua Perjalanan */}
      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">2</span>
          <h3 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Pertanyaan Terakhir Setelah Semua Perjalanan</h3>
        </div>
        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>
            Ada pertanyaan yang biasanya muncul ketika seseorang telah melewati banyak pengalaman hidup. Ketika masih muda, pertanyaannya: “Apa yang harus aku dapatkan?” Setelah dewasa: “Bagaimana aku bisa berhasil?” Setelah mengalami kehilangan: “Mengapa Allah mengambilnya dariku?” Setelah belajar tawakal: “Bagaimana aku menyerahkan semuanya kepada Allah?” Setelah belajar ridha: “Bagaimana aku menerima keputusan-Nya?”
          </p>
          <p>
            Tetapi ketika perjalanan itu semakin dalam, muncul pertanyaan yang berbeda: “Siapakah Allah yang selama ini kucari?” Inilah pintu ma‘rifah.
          </p>
          <p>
            Ma‘rifah bukan sekadar mengetahui bahwa Allah ada. Seorang manusia bisa mengetahui bahwa Allah ada, tetapi hatinya tetap jauh dari Allah. Ia bisa hafal nama-nama Allah, tetapi masih diperbudak oleh pujian manusia. Ia bisa berbicara tentang tawakal, tetapi hidup dalam kecemasan. Ia bisa mengajarkan sabar, tetapi mudah meledak ketika keinginannya terganggu. Maka ma‘rifah bukan sekadar informasi tentang Allah. Ma‘rifah adalah ketika pengetahuan tentang Allah perlahan berubah menjadi kesadaran hidup.
          </p>
        </div>
      </section>

      {/* 3. Ma'rifah: Dari "Tahu" Menjadi "Mengenal" */}
      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">3</span>
          <h3 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Ma&apos;rifah: Dari &quot;Tahu&quot; Menjadi &quot;Mengenal&quot;</h3>
        </div>
        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>
            Ada perbedaan besar antara mengetahui seseorang dan mengenal seseorang. Kita bisa mengetahui nama seseorang tanpa mengenalnya. Kita bisa mengetahui pekerjaannya tanpa memahami hatinya. Kita bisa mengetahui biodatanya tanpa mengetahui bagaimana ia berpikir.
          </p>
          <p>
            Begitu pula dalam hubungan manusia dengan Allah. Mengetahui bahwa Allah Maha Pengasih adalah ilmu. Tetapi ketika kita mengalami kelembutan Allah di tengah kesulitan, sifat Ar-Rahman dan Ar-Rahim tidak lagi sekadar menjadi istilah yang kita hafal. Ia menjadi pengalaman spiritual.
          </p>
          <p>
            Mengetahui bahwa Allah Maha Pengampun adalah ilmu. Tetapi ketika seseorang jatuh berkali-kali lalu kembali bertaubat dan merasakan pintu Allah tetap terbuka, ia mulai mengenal makna Al-Ghafur. Di situlah ilmu bergerak menjadi ma‘rifah.
          </p>
        </div>
      </section>

      {/* 4. Al-Qur'an: "Mengenal" Allah */}
      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">4</span>
          <h3 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Al-Qur&apos;an: &quot;Mengenal&quot; Allah</h3>
        </div>
        <p className="mt-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          Allah berfirman:
        </p>

        <div className="mt-8 rounded-2xl bg-[#173c2a] px-6 py-8 text-center text-[#f7f5ef] shadow-sm sm:px-10">
          <div className="font-serif text-2xl leading-relaxed sm:text-3xl" dir="rtl">
            فَاعْلَمْ أَنَّهُ لَا إِلَٰهَ إِلَّا اللَّهُ
          </div>
          <p className="mt-5 text-base leading-8 text-white/80 sm:text-lg">
            “Maka ketahuilah bahwa tidak ada Tuhan selain Allah.”
          </p>
          <p className="mt-2 text-sm text-[#d9c27a]">Q.S. Muhammad [47]: 19</p>
        </div>

        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>
            Perhatikan kata pertama: <strong>(فَاعْلَمْ)</strong> <em>Fa‘lam</em> (&quot;Maka ketahuilah&quot;). Islam tidak memusuhi ilmu. Ma‘rifah bukan alasan untuk meninggalkan ilmu. Justru perjalanan menuju Allah dimulai dengan pengetahuan yang benar.
          </p>
          <p>
            Tetapi pengetahuan itu harus bergerak lebih jauh: Dari kepala menuju hati. Dari hati menuju perilaku. Dari perilaku menuju karakter. Dan akhirnya menjadi cara seseorang memandang kehidupan.
          </p>
        </div>
      </section>

      {/* 5. Mengenal Allah Melalui Ayat-ayat-Nya */}
      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">5</span>
          <h3 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Mengenal Allah Melalui Ayat-ayat-Nya</h3>
        </div>
        <p className="mt-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          Allah berfirman:
        </p>

        <div className="mt-8 rounded-2xl bg-[#173c2a] px-6 py-8 text-center text-[#f7f5ef] shadow-sm sm:px-10">
          <div className="font-serif text-2xl leading-relaxed sm:text-3xl" dir="rtl">
            سَنُرِيهِمْ آيَاتِنَا فِي الْآفَاقِ وَفِي أَنفُسِهِمْ حَتَّىٰ يَتَبَيَّنَ لَهُمْ أَنَّهُ الْحَقُّ
          </div>
          <p className="mt-5 text-base leading-8 text-white/80 sm:text-lg">
            “Kami akan memperlihatkan kepada mereka tanda-tanda Kami di segenap penjuru dan pada diri mereka sendiri, sehingga jelas bagi mereka bahwa Dia adalah Yang Mahabenar.”
          </p>
          <p className="mt-2 text-sm text-[#d9c27a]">Q.S. Fussilat [41]: 53</p>
        </div>

        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>
            Ada dua ruang besar untuk membaca tanda-tanda Allah: <strong>Āfāq</strong> — alam semesta. Dan: <strong>Anfus</strong> — diri manusia.
          </p>
          <p>
            Langit adalah ayat, laut adalah ayat, kelahiran adalah ayat, kematian adalah ayat. Tetapi juga: kesadaran, hati, air mata, kerinduan, cinta, rasa bersalah, dan kemampuan manusia untuk memilih kebaikan - semuanya dapat menjadi ruang perenungan tentang Sang Pencipta.
          </p>
          <p>
            Maka orang yang sedang menuju ma‘rifah belajar membaca dua kitab sekaligus: Kitab yang terbentang di luar dirinya (alam) dan kitab yang tersembunyi di dalam dirinya (jiwa).
          </p>
        </div>
      </section>

      {/* 6. Manusia Modern: Terlalu Banyak Informasi, Terlalu Sedikit Pengenalan */}
      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">6</span>
          <h3 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Manusia Modern: Terlalu Banyak Informasi, Terlalu Sedikit Pengenalan</h3>
        </div>
        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>
            Inilah salah satu persoalan manusia modern. Kita hidup dalam zaman informasi. Satu sentuhan layar dapat menghadirkan ribuan pengetahuan. Kita bisa belajar agama melalui video, mendengarkan kajian melalui podcast, membaca tafsir melalui aplikasi, dan mengikuti guru dari berbagai belahan dunia.
          </p>
          <p>
            Tetapi ada paradoks: Kita semakin mudah memperoleh informasi tentang Tuhan, tetapi belum tentu semakin mengenal Tuhan. Kita bisa memiliki ribuan konten spiritual tersimpan di ponsel, tetapi tetap tidak mampu berdamai dengan diri sendiri. Kita bisa mengutip banyak ayat, tetapi mudah merendahkan orang lain. Kita bisa mengetahui banyak hadis, tetapi belum mampu mengendalikan ego. Di sinilah ma‘rifah menjadi sangat relevan.
          </p>
          <p className="font-serif text-xl font-semibold text-[#173c2a]">
            Spiritualitas bukan seberapa banyak informasi agama yang masuk ke kepala, tetapi seberapa dalam pengetahuan itu mengubah cara kita hidup.
          </p>
        </div>
      </section>

      {/* 7. Rumi: Jangan Berhenti pada Pengetahuan */}
      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">7</span>
          <h3 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Rumi: Jangan Berhenti pada Pengetahuan</h3>
        </div>
        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>
            Rumi sangat kuat membedakan antara pengetahuan yang hanya berada pada permukaan dan pengetahuan yang mengubah keberadaan seseorang.
          </p>
          <blockquote className="rounded-xl border-l-4 border-[#b18a3c] bg-white/70 p-6 font-serif text-xl italic text-[#173c2a]">
            “Pengetahuan yang tidak membawa engkau kepada dirimu sendiri adalah pengetahuan yang tidak berguna.”
          </blockquote>
          <p>
            Gagasan ini sangat selaras dengan tema Masnavi: ilmu yang sejati harus membawa manusia melewati bentuk menuju makna, dari pengetahuan lahiriah menuju transformasi batin. Dalam Masnavi, Rumi bahkan menggambarkan manusia yang memiliki pengetahuan tetapi tidak mengalami perubahan batin sebagai orang yang membawa beban ilmu tanpa benar-benar meminumnya.
          </p>
          <p className="font-medium text-[#173c2a]">
            Maka pertanyaannya bukan: “Berapa banyak yang aku tahu tentang Allah?” Tetapi: “Apa yang berubah dalam diriku setelah mengetahui Allah?” Itulah pertanyaan ma‘rifah.
          </p>
          <p className="text-xs text-[#173c2a]/55">
            Rujukan: Jalaluddin Rumi, <em>Masnavi-ye Ma‘navi</em>, terutama pembahasan mengenai ilmu, nafs, cinta, dan transformasi spiritual; lihat juga William C. Chittick, <em>The Sufi Path of Love</em>.
          </p>
        </div>
      </section>

      {/* 8. Rumi dan Cermin */}
      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">8</span>
          <h3 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Rumi dan Cermin</h3>
        </div>
        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>
            Dalam tradisi Rumi, hati manusia sering dipahami sebagai cermin. Cermin tidak menciptakan wajah, ia memantulkan. Jika cermin penuh debu, wajah tetap ada, tetapi pantulannya menjadi kabur.
          </p>
          <p>
            Begitu pula hati. Allah tidak menjadi jauh. Tetapi hati manusia dapat menjadi tertutup oleh: kesombongan, iri, amarah, keserakahan, keterikatan, dan ego.
          </p>
          <p>
            Maka perjalanan ma‘rifah bukan membuat Allah hadir. Allah sudah hadir. Yang perlu dibersihkan adalah cermin tempat kita menyadari kehadiran-Nya.
          </p>
        </div>

        <div className="mt-8 rounded-2xl border border-[#b18a3c]/20 bg-white/70 p-6 shadow-sm sm:p-8">
          <p className="text-base leading-8 text-[#173c2a]/80 sm:text-lg sm:leading-9">
            Di sinilah maqam-maqam sebelumnya menemukan maknanya: <strong>Taubat</strong> membersihkan cermin. <strong>Sabar</strong> menguatkan cermin. <strong>Syukur</strong> membuat kita menyadari cahaya. <strong>Tawakal</strong> melepaskan kegelisahan ego. <strong>Ridha</strong> menghentikan perlawanan batin. Dan kemudian: <strong>Ma‘rifah</strong> membuat kita melihat dengan lebih jernih.
          </p>
        </div>
      </section>

      {/* 9. Syekh Abul Hasan Asy-Syadzily: Allah Dikenal Melalui Tanda-tanda-Nya */}
      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">9</span>
          <h3 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Syekh Abul Hasan Asy-Syadzily: Allah Dikenal Melalui Tanda-tanda-Nya</h3>
        </div>
        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>
            Dalam tradisi Syadziliyyah, ma‘rifah tidak berarti meninggalkan dunia. Ini sangat penting. Syekh Abu al-Hasan al-Syadzili dikenal dengan spiritualitas yang menggabungkan kedalaman batin dengan kehidupan nyata.
          </p>
          <p>
            Ia tidak mengajarkan bahwa seorang pencari Allah harus melarikan diri dari dunia. Justru seseorang tetap bekerja, berkeluarga, berinteraksi dengan manusia, mencari rezeki, dan menjalani kehidupan—tetapi hatinya tidak diperbudak oleh semua itu.
          </p>
        </div>

        <div className="mt-8 rounded-2xl bg-[#173c2a] px-6 py-8 text-center text-[#f7f5ef] shadow-sm sm:px-10">
          <div className="font-serif text-2xl leading-relaxed sm:text-3xl" dir="rtl">
            اللَّهُمَّ اجْعَلْنَا نَشْكُرُكَ عَلَى النَّعْمَاءِ وَنَصْبِرُ عَلَى الْبَلَاءِ
          </div>
          <p className="mt-5 text-base leading-8 text-white/80 sm:text-lg">
            “Ya Allah, jadikan kami orang-orang yang bersyukur atas nikmat dan bersabar atas ujian.”
          </p>
        </div>

        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>
            Doa dan ajaran Syadzili menunjukkan sesuatu yang penting: Ma‘rifah tidak membuat seseorang keluar dari kehidupan. Ma‘rifah membuat seseorang hadir di dalam kehidupan dengan hati yang berbeda.
          </p>
          <p className="text-xs text-[#173c2a]/55">
            Rujukan utama untuk pemikiran Syekh Abu al-Hasan dapat ditelusuri melalui karya-karya tradisi Syadziliyyah seperti <em>Hizb al-Bahr</em>, <em>Hizb al-Kabir</em>, serta himpunan ajaran dan doa yang dinisbatkan kepadanya.
          </p>
        </div>
      </section>

      {/* 10. Ma'rifah Bukan Melihat Allah dengan Mata */}
      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">10</span>
          <h3 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Ma&apos;rifah Bukan Melihat Allah dengan Mata</h3>
        </div>
        <p className="mt-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          Ini bagian yang penting secara akidah. Ma‘rifah bukan berarti manusia memperoleh kemampuan untuk melihat Zat Allah di dunia. Allah berfirman kepada Nabi Musa AS:
        </p>

        <div className="mt-8 rounded-2xl bg-[#173c2a] px-6 py-8 text-center text-[#f7f5ef] shadow-sm sm:px-10">
          <div className="font-serif text-2xl leading-relaxed sm:text-3xl" dir="rtl">
            لَن تَرَانِي
          </div>
          <p className="mt-4 text-base leading-8 text-white/80">
            “Engkau tidak akan dapat melihat-Ku.”
          </p>
          <p className="mt-2 text-sm text-[#d9c27a]">Q.S. Al-A&apos;raf [7]: 143</p>
        </div>

        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>
            Maka ketika para sufi berbicara tentang &quot;melihat Allah&quot;, istilah tersebut harus dipahami secara hati-hati dalam konteks bahasa spiritual: kesadaran hati terhadap keagungan, kedekatan, tanda-tanda, nama-nama, dan sifat-sifat Allah, bukan penglihatan fisik terhadap Zat Allah. Ini penting agar bahasa tasawuf tidak disalahpahami.
          </p>
        </div>
      </section>

      {/* 11. Hadis Ihsan: Puncak Kesadaran */}
      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">11</span>
          <h3 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Hadis Ihsan: Puncak Kesadaran</h3>
        </div>
        <p className="mt-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          Hadis Jibril memberikan salah satu fondasi terpenting untuk memahami dimensi ini. Rasulullah ﷺ bersabda tentang ihsan:
        </p>

        <div className="mt-8 rounded-2xl bg-[#173c2a] px-6 py-8 text-center text-[#f7f5ef] shadow-sm sm:px-10">
          <div className="font-serif text-2xl leading-relaxed sm:text-3xl" dir="rtl">
            أَنْ تَعْبُدَ اللَّهَ كَأَنَّكَ تَرَاهُ، فَإِنْ لَمْ تَكُنْ تَرَاهُ فَإِنَّهُ يَرَاكَ
          </div>
          <p className="mt-5 text-base leading-8 text-white/80 sm:text-lg">
            “Engkau beribadah kepada Allah seakan-akan engkau melihat-Nya. Jika engkau tidak dapat melihat-Nya, maka sesungguhnya Dia melihatmu.”
          </p>
          <p className="mt-2 text-sm text-[#d9c27a]">HR. Muslim, no. 8</p>
        </div>

        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>
            Inilah kesadaran yang mengubah kehidupan. Bayangkan jika seseorang benar-benar hidup dengan kesadaran: Allah melihatku. Ketika sendirian. Ketika tidak ada kamera. Ketika tidak ada pengikut. Ketika tidak ada yang memberikan penghargaan. Ketika tidak ada yang mengetahui. Di situlah kualitas spiritual diuji.
          </p>
        </div>
      </section>

      {/* 12. Ma'rifah di Era Media Sosial */}
      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">12</span>
          <h3 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Ma&apos;rifah di Era Media Sosial</h3>
        </div>
        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>
            Media sosial mengajarkan manusia satu kebiasaan: “Bagaimana orang melihatku?” Ma‘rifah mengajarkan pertanyaan yang lebih dalam: “Bagaimana Allah melihatku?”
          </p>
          <p>
            Ini bukan berarti kita tidak peduli terhadap masyarakat. Tetapi pusat penilaian tidak lagi sepenuhnya berada pada manusia. Jumlah likes tidak menentukan nilai dirimu. Jumlah pengikut tidak menentukan kemuliaanmu. Komentar orang tidak menentukan hakikat dirimu. Algoritma tidak menentukan harga jiwamu.
          </p>
        </div>

        <div className="mt-8 rounded-2xl bg-[#173c2a] px-6 py-8 text-center text-[#f7f5ef] shadow-sm sm:px-10">
          <div className="font-serif text-2xl leading-relaxed sm:text-3xl" dir="rtl">
            إِنَّ أَكْرَمَكُمْ عِندَ اللَّهِ أَتْقَاكُمْ
          </div>
          <p className="mt-4 text-base leading-8 text-white/80">
            “Sesungguhnya yang paling mulia di antara kamu di sisi Allah adalah yang paling bertakwa.”
          </p>
          <p className="mt-2 text-sm text-[#d9c27a]">Q.S. Al-Hujurat [49]: 13</p>
        </div>

        <p className="mt-8 font-serif text-xl text-[#173c2a]">
          Maka ma‘rifah membebaskan manusia dari kecanduan pengakuan.
        </p>
      </section>

      {/* 13. Ketika Kita Tidak Lagi Harus Terlihat */}
      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">13</span>
          <h3 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Ketika Kita Tidak Lagi Harus Terlihat</h3>
        </div>
        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>
            Ada tahap dalam kehidupan ketika seseorang mulai lelah membuktikan dirinya. Dahulu ia ingin terlihat sukses. Kemudian ia ingin terlihat religius. Kemudian ia ingin terlihat bijaksana. Bahkan spiritualitas pun bisa menjadi panggung.
          </p>
          <p>
            Orang dapat memamerkan kesederhanaan. Memamerkan ibadah. Memamerkan kutipan tasawuf. Memamerkan kesalehan. Ini jebakan yang sangat halus.
          </p>
          <p>
            Ma‘rifah justru bergerak ke arah sebaliknya. Semakin seseorang mengenal Allah, semakin ia sadar betapa kecil dirinya. Ia tidak lagi terlalu sibuk membangun citra spiritual. Ia lebih sibuk memperbaiki hati.
          </p>
        </div>
      </section>

      {/* 14. Ma'rifah dan Kehidupan Profesional */}
      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">14</span>
          <h3 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Ma&apos;rifah dan Kehidupan Profesional</h3>
        </div>
        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>
            Bagaimana ma‘rifah bekerja di kantor? Sederhana. Ketika tidak ada atasan, apakah kita tetap jujur? Ketika bisa mengambil keuntungan yang bukan hak kita, apakah kita tetap menahan diri? Ketika pekerjaan kita tidak dihargai, apakah kita tetap menjaga kualitas? Ketika mendapat promosi, apakah kesuksesan membuat kita merendahkan orang lain?
          </p>
          <p className="font-serif text-xl text-[#173c2a]">
            Ma‘rifah membuat pekerjaan biasa memiliki dimensi ibadah. Bukan karena pekerjaannya berubah, tetapi karena kesadaran di balik pekerjaan itu berubah.
          </p>
        </div>
      </section>

      {/* 15. Ma'rifah dalam Keluarga */}
      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">15</span>
          <h3 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Ma&apos;rifah dalam Keluarga</h3>
        </div>
        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>
            Mengenal Allah juga mengubah cara kita memperlakukan manusia. Kita tidak lagi melihat pasangan hanya sebagai seseorang yang harus memenuhi kebutuhan kita. Tidak melihat anak sebagai proyek ambisi. Tidak melihat orang tua hanya sebagai kewajiban. Tidak melihat teman hanya berdasarkan manfaat.
          </p>
          <p>
            Kita mulai melihat setiap manusia sebagai makhluk Allah yang memiliki kehormatan. Karena itu: Semakin mengenal Allah, seharusnya semakin lembut terhadap makhluk. Jika seseorang mengaku semakin dekat kepada Allah tetapi semakin kasar, sombong, mudah menghina, dan merasa paling suci, maka ada sesuatu yang perlu diperiksa kembali dalam perjalanan spiritualnya.
          </p>
        </div>
      </section>

      {/* 16. Ma'rifah dan Kesunyian */}
      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">16</span>
          <h3 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Ma&apos;rifah dan Kesunyian</h3>
        </div>
        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>
            Ada satu keadaan yang sangat berharga di zaman bising: mampu sendirian tanpa merasa kosong. Ponsel mati, notifikasi berhenti, tidak ada komentar, tidak ada hiburan, tidak ada siapa-siapa.
          </p>
          <p>
            Kemudian seseorang duduk bersama dirinya sendiri. Pada awalnya mungkin terasa gelisah, karena selama ini ia selalu melarikan diri dari kesunyian. Tetapi jika ia bertahan dalam kesadaran dan dzikir, kesunyian perlahan berubah. Ia tidak lagi terasa sebagai kekosongan. Ia menjadi ruang perjumpaan. Bukan karena Allah baru hadir ketika semua suara berhenti, tetapi karena manusia akhirnya berhenti terlalu sibuk untuk menyadari-Nya.
          </p>
        </div>
      </section>

      {/* 17. Ma'rifah dan Kematian */}
      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">17</span>
          <h3 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Ma&apos;rifah dan Kematian</h3>
        </div>
        <p className="mt-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          Ada satu guru yang tidak pernah berhenti mengajar: kematian. Allah berfirman:
        </p>

        <div className="mt-8 rounded-2xl bg-[#173c2a] px-6 py-8 text-center text-[#f7f5ef] shadow-sm sm:px-10">
          <div className="font-serif text-2xl leading-relaxed sm:text-3xl" dir="rtl">
            كُلُّ نَفْسٍ ذَائِقَةُ الْمَوْتِ
          </div>
          <p className="mt-4 text-base leading-8 text-white/80">
            “Setiap jiwa akan merasakan kematian.”
          </p>
          <p className="mt-2 text-sm text-[#d9c27a]">Q.S. Ali &apos;Imran [3]: 185</p>
        </div>

        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>
            Mengingat kematian bukan untuk membuat manusia takut hidup. Justru untuk membuat hidup lebih sadar. Jika kita tahu waktu terbatas, mengapa menghabiskannya untuk kebencian? Jika kita tahu semua harta akan ditinggalkan, mengapa menjadikannya pusat kehidupan? Jika kita tahu popularitas akan berlalu, mengapa menjadikannya ukuran harga diri?
          </p>
          <p className="font-medium text-[#173c2a]">
            Ma‘rifah membuat seseorang hidup dengan kesadaran bahwa kehidupan dunia adalah perjalanan, bukan tempat tinggal terakhir.
          </p>
        </div>
      </section>

      {/* =====================================================
          BENANG MERAH / GREEN BLOCK SECTION: 18. Burung Jiwa Akhirnya Menemukan Arah
          ===================================================== */}

      <section className="bg-[#173c2a] px-5 py-20 text-[#f7f5ef] sm:px-8 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center space-x-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#d9c27a] text-sm font-semibold text-[#173c2a]">18</span>
            <h3 className="font-serif text-3xl font-semibold tracking-tight text-[#f7f5ef] sm:text-4xl">Burung Jiwa Akhirnya Menemukan Arah</h3>
          </div>

          <div className="mt-8 space-y-6 text-base leading-8 text-white/85 sm:text-lg sm:leading-9">
            <p>
              Kita kembali kepada metafora burung. Burung tidak terbang untuk memiliki langit. Ia terbang karena langit adalah ruang tempat ia menjalankan kodratnya.
            </p>
            <p>
              Demikian pula manusia. Kita tidak hidup untuk memiliki dunia. Kita hidup di dunia untuk menjalankan amanah sebagai hamba Allah.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-[#d9c27a]/20 bg-white/10 p-6 backdrop-blur-sm sm:p-8">
            <ul className="space-y-3 text-base leading-8 text-white/90 sm:text-lg">
              <li>✦ Kita boleh memiliki harta, tetapi jangan biarkan harta memiliki hati kita.</li>
              <li>✦ Kita boleh memiliki jabatan, tetapi jangan biarkan jabatan menjadi Tuhan kecil dalam hidup kita.</li>
              <li>✦ Kita boleh memiliki popularitas, tetapi jangan menggantungkan nilai diri kepada tepuk tangan manusia.</li>
              <li>✦ Kita boleh mencintai manusia, tetapi jangan menjadikan manusia sebagai pengganti Allah.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 19. Ma'rifah: Ketika Semua Jalan Menunjuk Kepada-Nya */}
      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">19</span>
          <h3 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Ma&apos;rifah: Ketika Semua Jalan Menunjuk Kepada-Nya</h3>
        </div>
        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>
            Pada awal perjalanan, manusia melihat banyak hal: pekerjaan, keluarga, harta, cinta, kehilangan, kesuksesan, kegagalan, alam, dirinya sendiri.
          </p>
          <p>
            Kemudian perlahan ia belajar melihat tanda di balik semuanya. Bukan berarti semua benda adalah Allah. Bukan. Tetapi segala sesuatu adalah ciptaan dan dapat menjadi ayat, tanda yang mengarahkan hati kepada Sang Pencipta.
          </p>
          <p>
            Bunga tidak menjadi Tuhan, tetapi bunga dapat mengingatkan kepada keindahan Sang Pencipta. Laut bukan Allah, tetapi keluasan laut dapat mengingatkan manusia kepada keluasan ciptaan-Nya. Kehidupan bukan Allah, tetapi kehidupan menunjuk kepada Dia yang memberi kehidupan. Inilah cara pandang ma‘rifah.
          </p>
        </div>
      </section>

      {/* 20. Puncaknya Bukan "Aku Tahu" */}
      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">20</span>
          <h3 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Puncaknya Bukan &quot;Aku Tahu&quot;</h3>
        </div>
        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>
            Puncak perjalanan spiritual bukan: “Aku tahu banyak”. Bukan: “Aku telah sampai”. Bukan: “Aku lebih dekat kepada Allah daripada orang lain”. Justru semakin dalam ma‘rifah, semakin dalam kesadaran akan keterbatasan diri. Manusia akhirnya berkata: “Semakin aku mengenal-Mu, semakin aku sadar betapa sedikit yang kuketahui tentang-Mu.”
          </p>
          <p className="font-serif text-xl font-semibold text-[#b18a3c]">
            Dan dari kesadaran itu lahir kerendahan hati.
          </p>
        </div>
      </section>

      {/* 21. Dari Mencari Allah Menuju Menyadari Allah */}
      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">21</span>
          <h3 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Dari Mencari Allah Menuju Menyadari Allah</h3>
        </div>
        <div className="mt-8 space-y-6 text-base leading-8 text-[#173c2a]/70 sm:text-lg sm:leading-9">
          <p>
            Mungkin inilah perubahan paling besar. Pada awal perjalanan: “Di mana aku menemukan Allah?” Kemudian: “Bagaimana aku mendekat kepada Allah?” Lalu: “Bagaimana aku hidup bersama kesadaran kepada Allah?”
          </p>
          <p>
            Dan akhirnya: “Bagaimana setiap tarikan napasku menjadi pengingat kepada-Nya?”
          </p>
          <p>
            Itulah ma‘rifah sebagai kesadaran. Bukan pengalaman spektakuler. Bukan kemampuan supranatural. Bukan melihat sesuatu yang tidak dilihat orang lain. Melainkan kemampuan melihat kehidupan dengan hati yang berbeda.
          </p>
        </div>
      </section>

      {/* 22. Ruang Hening: Duduklah Sebentar Bersama Dirimu */}
      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center space-x-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a3c] text-sm font-semibold text-white">22</span>
          <h3 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Ruang Hening: Duduklah Sebentar Bersama Dirimu</h3>
        </div>
        <div className="mt-8 rounded-2xl border border-[#b18a3c]/20 bg-white/70 p-6 shadow-sm sm:p-8">
          <p className="text-base leading-8 text-[#173c2a]/80 sm:text-lg sm:leading-9">
            Setelah membaca bagian ini, jangan langsung lanjut. Tutup buku. Letakkan ponsel. Tarik napas perlahan. Kemudian tanyakan:
          </p>
          <ul className="mt-4 space-y-3 text-base leading-8 text-[#173c2a]/80 sm:text-lg">
            <li>✦ Jika semua gelar dan identitasku dilepaskan, siapa aku?</li>
            <li>✦ Jika semua harta hilang, apakah aku masih merasa berharga?</li>
            <li>✦ Jika tidak ada seorang pun yang memujiku, apakah aku masih ingin berbuat baik?</li>
            <li>✦ Jika doaku tidak dikabulkan seperti yang kuinginkan, apakah aku masih percaya kepada Allah?</li>
            <li>✦ Jika hidupku tidak seperti rencana, apakah aku masih mampu bersyukur?</li>
            <li className="font-medium text-[#173c2a]">✦ Dan pertanyaan terakhir: “Apakah selama ini aku mencari Allah, atau sebenarnya aku hanya mencari sesuatu yang ingin Allah berikan kepadaku?”</li>
          </ul>
          <p className="mt-6 font-serif text-lg italic text-[#173c2a]">
            Diamlah. Tidak perlu buru-buru menjawab. Barangkali jawaban terbaik bukan berupa kalimat. Barangkali jawaban itu adalah air mata. Barangkali adalah kesadaran. Barangkali adalah keheningan.
          </p>
        </div>
      </section>

      {/* =====================================================
          BENANG MERAH / GREEN BLOCK SECTION: 23. Penutup
          ===================================================== */}

      <section className="bg-[#173c2a] px-5 py-20 text-[#f7f5ef] sm:px-8 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center space-x-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#d9c27a] text-sm font-semibold text-[#173c2a]">23</span>
            <h3 className="font-serif text-3xl font-semibold tracking-tight text-[#f7f5ef] sm:text-4xl">
              Penutup: Ketika Burung Jiwa Pulang
            </h3>
          </div>

          <div className="mt-8 space-y-6 text-base leading-8 text-white/85 sm:text-lg sm:leading-9">
            <p>
              Taubat membuat burung jiwa berbalik dari jalan yang salah. Sabar membuatnya bertahan ketika perjalanan panjang. Syukur membuatnya melihat keindahan yang selama ini terlewat. Tawakal membuatnya berani melepaskan kendali. Ridha membuatnya berdamai dengan arah angin. Dan ma‘rifah... membuatnya mengenali siapa yang selama ini menerbangkannya.
            </p>
            <p>
              Pada akhirnya, mungkin perjalanan spiritual bukan perjalanan untuk menemukan Allah. Sebab Allah tidak pernah hilang. Kitalah yang sering terlalu sibuk mencari dunia hingga lupa kepada-Nya. Kitalah yang terlalu banyak mendengar suara manusia hingga lupa mendengar panggilan hati. Kitalah yang terlalu sibuk mengejar cahaya di luar diri hingga lupa membersihkan jendela jiwa.
            </p>
            <p>
              Maka burung jiwa akhirnya berhenti bertanya: “Di mana Tuhan?” Ia mulai bertanya: “Mengapa selama ini aku begitu jauh, padahal Dia tidak pernah jauh?”
            </p>
          </div>

          <div className="mt-8 rounded-2xl bg-white/10 p-6 shadow-sm sm:p-8">
            <div className="font-serif text-2xl leading-relaxed text-[#d9c27a] sm:text-3xl" dir="rtl">
              وَنَحْنُ أَقْرَبُ إِلَيْهِ مِنْ حَبْلِ الْوَرِيدِ
            </div>
            <p className="mt-4 text-base leading-8 text-white/80">
              “Kami lebih dekat kepadanya daripada urat nadinya.”
            </p>
            <p className="mt-2 text-sm text-[#d9c27a]">Q.S. Qaf [50]: 16</p>
          </div>

          <div className="mt-8 space-y-6 text-base leading-8 text-white/85 sm:text-lg sm:leading-9">
            <p>
              Dan mungkin itulah rahasia terakhir perjalanan ini: Kita tidak sedang mencari Tuhan yang hilang. Kita sedang membersihkan hati yang terlalu lama tertutup untuk mengenali-Nya.
            </p>
            <blockquote className="border-l-4 border-[#d9c27a] pl-6 font-serif text-2xl leading-relaxed text-[#d9c27a]">
              Burung jiwa tidak akhirnya memiliki langit. Ia hanya akhirnya sadar: sejak awal, ia memang diciptakan untuk terbang menuju-Nya.
            </blockquote>
          </div>
        </div>
      </section>

      {/* Daftar Pustaka Section */}
      <section className="mx-auto max-w-5xl border-b border-[#173c2a]/10 px-5 py-16 sm:px-8 sm:py-20">
        <h3 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">DAFTAR PUSTAKA</h3>

        <div className="mt-8 space-y-8">
          <div>
            <h4 className="font-serif text-xl font-semibold text-[#173c2a]">Sumber Utama</h4>
            <ol className="mt-4 list-decimal space-y-3 pl-6 text-base leading-8 text-[#173c2a]/75 sm:text-lg sm:leading-9">
              <li>
                Al-Qur&apos;an al-Karim. Terutama Q.S. Al-Fajr [89]: 27–30; Q.S. Muhammad [47]: 19; Q.S. Fussilat [41]: 53; Q.S. Al-A&apos;raf [7]: 143; Q.S. Al-Hujurat [49]: 13; Q.S. Qaf [50]: 16; Q.S. Ali &apos;Imran [3]: 185.
              </li>
              <li>
                Muslim ibn al-Hajjaj. <em>Sahih Muslim</em>. Kitab al-Iman, hadis Jibril tentang Islam, iman, dan ihsan.
              </li>
              <li>
                Rumi, Jalaluddin. <em>Masnavi-ye Ma&apos;navi</em>. Terutama pembahasan tentang ilmu, cinta, nafs, dan transformasi spiritual.
              </li>
              <li>
                Rumi, Jalaluddin. <em>Fihi Ma Fihi (Discourses of Rumi)</em>.
              </li>
              <li>
                Al-Shadhili, Abu al-Hasan. <em>Hizb al-Bahr</em> dan kumpulan doa/ajaran yang dinisbatkan kepadanya.
              </li>
              <li>
                Al-Shadhili, Abu al-Hasan. <em>Hizb al-Kabir</em>.
              </li>
            </ol>
          </div>

          <div>
            <h4 className="font-serif text-xl font-semibold text-[#173c2a]">Sumber Kajian</h4>
            <ol className="mt-4 list-decimal space-y-3 pl-6 text-base leading-8 text-[#173c2a]/75 sm:text-lg sm:leading-9" start={7}>
              <li>
                Chittick, William C. <em>The Sufi Path of Love: The Spiritual Teachings of Rumi</em>. Albany: State University of New York Press.
              </li>
              <li>
                Chittick, William C. <em>The Sufi Path of Knowledge: Ibn al-&apos;Arabi&apos;s Metaphysics of Imagination</em>. Albany: SUNY Press.
              </li>
              <li>
                Schimmel, Annemarie. <em>The Triumphal Sun: A Study of the Works of Jalaloddin Rumi</em>. London: Fine Books.
              </li>
              <li>
                Nicholson, Reynold A. <em>The Mathnawi of Jalalu&apos;ddin Rumi</em>. London: Luzac &amp; Co.
              </li>
              <li>
                Cornell, R. Georges. <em>Realm of the Saint: Power and Authority in Moroccan Sufism</em>. University of Texas Press. — tentang pemahaman tradisi Syadziliyyah dan konsep kewalian.
              </li>
              <li>
                Al-Qushayri, Abu al-Qasim. <em>Al-Risalah al-Qushayriyyah fi &apos;Ilm al-Tasawwuf</em>. — mengenai maqāmāt dan pengalaman spiritual dalam tasawuf.
              </li>
            </ol>
          </div>
        </div>

        <p className="mt-8 text-center text-sm leading-7 text-[#173c2a]/50">
          #ngajirumi #fihimafihi #jalaluddinrumi #mjuharuddin #belajartasawuf #sufiIndonesia
        </p>
      </section>

      {/* =====================================================
          BENANG MERAH NGAJI RUMI 8
          ===================================================== */}

      <section className="bg-[#173c2a] px-5 py-20 text-white sm:px-8 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 font-serif text-3xl font-semibold tracking-tight text-[#f7f5ef] sm:text-4xl">
            BENANG MERAH NGAJI RUMI 8
          </h2>

          <h3 className="mt-8 mb-4 font-serif text-2xl font-semibold text-[#d9c27a] sm:text-3xl">
            BURUNG JIWA
          </h3>

          <p className="text-base leading-8 text-white/80 sm:text-lg sm:leading-9">
            <strong>
              By. Juhar - Benang Merah Ngaji Rumi 8 &quot;Burung Jiwa&quot;
            </strong>
          </p>

          <p className="mb-8 text-base leading-8 text-white/70 sm:text-lg sm:leading-9">
            <strong>Kendal, 26 Agustus 2026</strong>
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-6 text-lg leading-9 text-white/85 sm:text-xl sm:leading-10">
          <p>
            Awalnya aku mengira<br />
            hidup adalah perlombaan<br />
            untuk menjadi orang.
          </p>

          <p>
            Maka aku mengejar nama,<br />
            mengejar tepuk tangan,<br />
            mengejar tempat di mata manusia,<br />
            mengejar cinta yang takut kehilangan,<br />
            mengejar dunia<br />
            seolah dunia adalah rumah yang kutinggali selamanya.
          </p>

          <p>
            Aku berlari jauh<br />
            sampai lupa<br />
            ke mana aku hendak pulang.
          </p>

          <p>
            Lalu, hidup menjatuhkan sesuatu<br />
            yang sangat kucintai.
          </p>

          <p>
            Aku menangis.<br />
            Bukan saja karena kehilangan,<br />
            tapi karena untuk pertama kali<br />
            aku sadar: ternyata selama ini<br />
            aku menggantungkan hati pada sesuatu yang tak pernah berjanji untuk tinggal selamanya.
          </p>

          <p>
            Dari luka itu<br />
            aku mengenal taubat.<br />
            Bukan sekadar minta ampun,<br />
            tapi berbalik arah<br />
            dari dunia yang kukira sebagai tujuan.
          </p>

          <p>
            Aku belajar sabar<br />
            ketika jalan terasa panjang.
          </p>

          <p>
            Belajar syukur<br />
            ketika masih banyak cahaya<br />
            yang selama ini luput kulihat.
          </p>

          <p>
            Belajar tawakal<br />
            ketika tangan tak mampu<br />
            mengendalikan semua.
          </p>

          <p>
            Belajar ridha<br />
            ketika hidup memilih jalan<br />
            yang tak pernah masuk dalam rencana.
          </p>

          <p>
            Dan perlahan aku mengerti:<br />
            tidak semua yang hilang<br />
            adalah kehilangan.<br />
            Ada yang pergi agar aku kembali.<br />
            Ada yang tertutup agar aku mencari pintu lain.<br />
            Ada yang gagal agar aku berhenti menyembah hasil.<br />
            Ada yang tertunda agar aku belajar percaya.<br />
            Ada yang tidak menjadi milikku agar aku tahu bahwa tidak semua yang kucintai<br />
            harus kumiliki.
          </p>

          <p>
            Kemudian ku dengar bisik dari kedalaman jiwa:<br />
            &quot;Kau bukan setetes air<br />
            yang tersesat di lautan, di dalam dirimu ada kerinduan seluas samudra.&quot;
          </p>

          <p>
            Aku menengadah.<br />
            Ternyata sejak awal<br />
            aku bukan sedang mencari dunia.<br />
            Aku sedang mencari<br />
            Dia yang menciptakan dunia.
          </p>

          <p>
            Maka terbanglah, wahai burung jiwa.<br />
            Jangan takut pada angin.<br />
            Jangan takut pada langit yang luas.<br />
            Jangan takut kehilangan dahan<br />
            yang selama ini dianggap rumah.
          </p>

          <p>
            Sebab mungkin<br />
            dahan itu memang bukan rumahmu.<br />
            Ia hanya tempat belajar mengepakkan sayap.
          </p>

          <p>
            Dan jika suatu hari<br />
            engkau tak tahu<br />
            ke mana harus terbang,<br />
            terbanglah menuju Allah.
          </p>

          <p>
            Sebab hanya kepada-Nya<br />
            segala perjalanan<br />
            menemukan makna.
          </p>

          <p className="mt-12 text-sm text-[#d9c27a]">
            #ngajirumi #burungjiwa #mjuharuddin #jalaluddinrumi #sufiIndonesia
          </p>
        </div>
      </section>

      {/* =====================================================
          BENANG MERAH II NGAJI RUMI 8
          ===================================================== */}

      <section className="border-t border-[#d9c27a]/20 bg-[#173c2a] px-5 py-20 text-white sm:px-8 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 font-serif text-3xl font-semibold tracking-tight text-[#f7f5ef] sm:text-4xl">
            BENANG MERAH II NGAJI RUMI 8
          </h2>

          <h3 className="mt-8 mb-4 font-serif text-2xl font-semibold text-[#d9c27a] sm:text-3xl">
            BERHENTI MENCARI
          </h3>

          <p className="text-base leading-8 text-white/80 sm:text-lg sm:leading-9">
            <strong>
              By. Juhar - Benang Merah II Ngaji Rumi 8 &quot;Burung Jiwa&quot;
            </strong>
          </p>

          <p className="mb-8 text-base leading-8 text-white/70 sm:text-lg sm:leading-9">
            <strong>Kendal, 28 Agustus 2026</strong>
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-6 text-lg leading-9 text-white/85 sm:text-xl sm:leading-10">
          <p>
            Aku mencari bahagia<br />
            di tempat-tempat ramai.<br />
            Di dalam pujian manusia.<br />
            Di dalam angka keberhasilan.<br />
            Di dalam harta yang kukira membeli ketenangan.<br />
            Di dalam cinta yang kuharap tak pernah pergi.
          </p>

          <p>
            Aku bahkan mencari Tuhan<br />
            dengan cara aneh,<br />
            berdoa agar Dia memberi semua yang kuingin.
          </p>

          <p>
            Jika doa terkabul,<br />
            aku tersenyum.<br />
            Jika tidak,<br />
            aku bertanya,<br />
            &quot;Mengapa Engkau diam?&quot;
          </p>

          <p>
            Aku belum mengerti<br />
            bahwa yang diam bukan Tuhan.<br />
            Yang terlalu berisik<br />
            adalah keinginanku sendiri.
          </p>

          <p>
            Aku ingin hidup<br />
            sesuai peta yang kubuat.<br />
            Aku ingin masa depan<br />
            sesuai gambar dalam kepalaku.<br />
            Aku ingin orang-orang mencintai dengan caraku.<br />
            Aku ingin kehilangan<br />
            hanya jika aku siap.
          </p>

          <p>
            Padahal kehidupan<br />
            tak pernah berjanji<br />
            mengikuti keinginanku.
          </p>

          <p>
            Maka aku dipertemukan taubat,<br />
            dan aku pulang.
          </p>

          <p>
            Dipertemukan sabar,<br />
            dan belajar menunggu.
          </p>

          <p>
            Dipertemukan syukur,<br />
            dan belajar melihat<br />
            bahwa hidup tak seburuk yang kukira.
          </p>

          <p>
            Dipertemukan tawakal,<br />
            dan belajar melepas yang tak mampu kukendalikan.
          </p>

          <p>
            Dipertemukan ridha,<br />
            dan belajar berkata,<br />
            &quot;Aku tak memahami semua,<br />
            tapi aku percaya kepada-Mu.&quot;
          </p>

          <p>
            Lalu datang ma&apos;rifah<br />
            seperti cahaya tak berteriak.<br />
            Ia membuatku melihat<br />
            dengan cara berbeda.
          </p>

          <p>
            Aku mulai mengerti<br />
            bahwa bunga tak perlu bicara<br />
            untuk mengajar keindahan.
          </p>

          <p>
            Langit tak perlu menjelaskan<br />
            mengapa ia luas.
          </p>

          <p>
            Hujan tak perlu minta izin<br />
            untuk menghidupkan bumi.
          </p>

          <p>
            Dan manusia<br />
            tak perlu jadi sempurna<br />
            untuk tetap dicintai Tuhan.
          </p>

          <p>
            Aku mulai melihat<br />
            bahwa setiap kejadian<br />
            membawa pertanyaan,<br />
            &quot;Apa yang ingin kau pelajari<br />
            dari semua ini?&quot;
          </p>

          <p>
            Sekarang<br />
            aku tak sibuk meminta hidup jadi seperti yang kuingin.
          </p>

          <p>
            Aku hanya ingin<br />
            jadi manusia yang tetap baik<br />
            ketika hidup tak sesuai harapan.
          </p>

          <p>
            Aku tak lagi bertanya,<br />
            &quot;Mengapa Allah tak memberi<br />
            apa yang kuminta?&quot;
          </p>

          <p>
            Aku mulai bertanya,<br />
            &quot;Apa yang Allah berikan padaku<br />
            melalui sesuatu yang dulu<br />
            kuanggap kehilangan?&quot;
          </p>

          <p>
            Dan ternyata,<br />
            ada luka yang membuatku lebih lembut.<br />
            Ada gagal yang membuatku rendah hati.<br />
            Ada kehilangan yang membuatku mengenal doa.<br />
            Ada kesendirian yang membuatku menemukan diri.<br />
            Ada penolakan yang membuatku berhenti minta pengakuan.<br />
            Ada jalan tertutup yang menyelamatkanku<br />
            dari jalan yang salah.
          </p>

          <p>
            Mungkin itulah ma&apos;rifah,<br />
            ketika tidak lagi hanya melihat yang terjadi,<br />
            tapi mulai belajar melihat<br />
            siapa yang mendidik kita<br />
            melalui yang terjadi.
          </p>

          <p>
            Dan akhirnya,<br />
            aku berhenti mencari.<br />
            Bukan karena aku mendapat<br />
            semua yang kuingin.<br />
            Tapi karena menemukan<br />
            siapa yang sebenarnya<br />
            sejak awal kucari.
          </p>

          <p className="mt-12 text-sm text-[#d9c27a]">
            #syairrumi #jalaluddinrumi #ngajirumi #puisitasawuf #puisijiwa
          </p>
        </div>
      </section>

      {/* =====================================================
          BENANG MERAH III NGAJI RUMI 8
          ===================================================== */}

      <section className="border-t border-[#d9c27a]/20 bg-[#173c2a] px-5 py-20 text-white sm:px-8 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 font-serif text-3xl font-semibold tracking-tight text-[#f7f5ef] sm:text-4xl">
            BENANG MERAH III NGAJI RUMI 8
          </h2>

          <h3 className="mt-8 mb-4 font-serif text-2xl font-semibold text-[#d9c27a] sm:text-3xl">
            LANGIT DI DALAM DADA
          </h3>

          <p className="text-base leading-8 text-white/80 sm:text-lg sm:leading-9">
            <strong>
              By. Juhar - Benang Merah III Ngaji Rumi 8 &quot;Burung Jiwa&quot;
            </strong>
          </p>

          <p className="mb-8 text-base leading-8 text-white/70 sm:text-lg sm:leading-9">
            <strong>Kendal, 31 Agustus 2026</strong>
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-6 text-lg leading-9 text-white/85 sm:text-xl sm:leading-10">
          <p>
            Jangan katakan<br />
            kau terlalu kecil<br />
            untuk memiliki impian
          </p>

          <p>
            Jangan katakan<br />
            kau terlalu hina<br />
            untuk kembali pada-Nya
          </p>

          <p>
            Jangan katakan<br />
            salahmu terlalu banyak<br />
            untuk diampuni
          </p>

          <p>
            Jangan katakan<br />
            lukamu terlalu dalam<br />
            untuk disembuhkan
          </p>

          <p>
            Dan jangan katakan<br />
            hidupmu tak berarti<br />
            hanya karena dunia<br />
            belum kenal nilaimu
          </p>

          <p>
            Bukankah benih<br />
            tak merasa gagal<br />
            karena ia dikubur?
          </p>

          <p>
            Bukankah malam<br />
            tak merasa kalah<br />
            karena matahari belum terbit?
          </p>

          <p>
            Bukankah ulat<br />
            Meninggalkan bentuk lamanya<br />
            sebelum menemukan sayap?
          </p>

          <p>
            Mungkin,<br />
            apa yang kau anggap akhir<br />
            hanya ruang gelap<br />
            tempat Allah membentukmu
          </p>

          <p>
            Kau menangis? Tak apa<br />
            Nabi pun menangis
          </p>

          <p>
            Kau lelah? Istirahatlah<br />
            Tetapi jangan berhenti berjalan
          </p>

          <p>
            Kau gagal? Belajarlah<br />
            Tapi jangan jadikan gagal<br />
            sebagai nama baru bagimu
          </p>

          <p>
            Kau kehilangan? Berduka<br />
            Tapi jangan lupa<br />
            bahwa yang datang<br />
            sejak awal berada dalam perjalanan menuju pergi
          </p>

          <p>
            Kau belum mendapat apa yang kau doakan?<br />
            Tetaplah mengetuk<br />
            Tapi jangan hanya menunggu<br />
            pintu terbuka
          </p>

          <p>
            Mungkin selama mengetuk<br />
            Allah mengubah tanganmu
          </p>

          <p>
            Mungkin doamu belum mengubah keadaan,<br />
            karena Allah sedang mengubahmu agar mampu hadapi keadaan
          </p>

          <p>
            Mungkin yang perlu diperbaiki<br />
            bukan jalan di depanmu,<br />
            melainkan mata<br />
            yang memandang jalan itu
          </p>

          <p>
            Maka belajarlah<br />
            taubat saat tersesat,<br />
            sabar saat jalan panjang,<br />
            syukur saat temukan cahaya,<br />
            tawakal saat hilang kendali,<br />
            ridha saat jalan tak sesuai harapan,<br />
            dan ma&apos;rifah saat kau mengenali jejak-Nya
          </p>

          <p>
            Sebab Tuhan tak selalu hadir<br />
            dalam bentuk yang kita harapkan
          </p>

          <p>
            Kadang Dia hadir<br />
            sebagai pertemuan<br />
            Kadang sebagai perpisahan<br />
            Kadang sebagai keberhasilan<br />
            Kadang sebagai kegagalan<br />
            Kadang sebagai jawaban<br />
            Kadang sebagai penundaan<br />
            Kadang sebagai pintu yang terbuka<br />
            Kadang sebagai pintu yang tak pernah terbuka<br />
            Dan kadang, Dia hadir<br />
            dalam kesunyian panjang<br />
            ketika kau merasa<br />
            tak seorang pun mengerti dirimu
          </p>

          <p>
            Di sanalah, dengarkan<br />
            Ada sesuatu<br />
            yang lebih tua dari kesedihanmu<br />
            Lebih luas dari ketakutanmu<br />
            Lebih dekat dari siapa pun<br />
            yang pernah kau cinta
          </p>

          <p>
            Ia memanggilmu<br />
            bukan dengan suara keras,<br />
            tapi dengan kerinduan<br />
            yang diam-diam tinggal di dalam dada
          </p>

          <p>
            Mungkin itulah sebabnya<br />
            kau tak pernah puas dengan dunia<br />
            Karena jiwamu tak diciptakan berhenti pada dunia
          </p>

          <p>
            Maka terbanglah<br />
            Bukan meninggalkan bumi, tapi melihat bumi dengan ketinggian jiwa
          </p>

          <p>
            Terbanglah<br />
            lewati pujian dan hinaan,<br />
            lewati datang dan pergi,<br />
            lewati berhasil dan gagal,<br />
            lewati memiliki dan kehilangan
          </p>

          <p>
            Sampai akhirnya<br />
            kau tak lagi bertanya,<br />
            &quot;Apa yang kudapatkan?&quot;<br />
            Tapi, &quot;Apa yang kuberikan?&quot;
          </p>

          <p>
            Tidak lagi, &quot;Mengapa ini terjadi?&quot;<br />
            Tapi, &quot;Apa yang sedang Tuhan ajarkan?&quot;
          </p>

          <p>
            Dan tak lagi, &quot;Di mana Allah?&quot;<br />
            Karena akhirnya kau mengerti,<br />
            Allah tak pernah pergi
          </p>

          <p>
            Yang pergi adalah perhatianmu<br />
            Yang tertutup adalah hatimu<br />
            Yang tersesat adalah langkahmu
          </p>

          <p>
            Maka pulanglah<br />
            Bersihkan hatimu<br />
            Bentangkan sayapmu<br />
            Dan terbanglah
          </p>

          <p>
            Sebab perjalanan hidup<br />
            bukan tentang untuk menjadi seseorang
          </p>

          <p>
            Melainkan tentang menemukan<br />
            siapa dirimu di hadapan-Nya
          </p>

          <p>
            Dan...<br />
            Ketika semua nama ditanggalkan,<br />
            gelar ditinggalkan,<br />
            harta dipulangkan,<br />
            tepuk tangan dihentikan,<br />
            yang tersisa hanya seorang hamba,<br />
            sebuah jiwa,<br />
            dan Tuhan yang sejak awal<br />
            tak pernah meninggalkanmu.
          </p>

          <p className="mt-12 text-sm text-[#d9c27a]">
            #ngajirumi #burungjiwa #mjuharuddin #jalaluddinrumi #sufiIndonesia
          </p>
        </div>
      </section>

      {/* =====================================================
          BENANG MERAH IV NGAJI RUMI 8
          ===================================================== */}

      <section className="border-t border-[#d9c27a]/20 bg-[#173c2a] px-5 py-20 text-white sm:px-8 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 font-serif text-3xl font-semibold tracking-tight text-[#f7f5ef] sm:text-4xl">
            BENANG MERAH IV NGAJI RUMI 8
          </h2>

          <h3 className="mt-8 mb-4 font-serif text-2xl font-semibold text-[#d9c27a] sm:text-3xl">
            PERJALANAN YANG TERNYATA PULANG
          </h3>

          <p className="text-base leading-8 text-white/80 sm:text-lg sm:leading-9">
            <strong>
              By. Juhar - Benang Merah IV Ngaji Rumi 8 &quot;Burung Jiwa&quot;
            </strong>
          </p>

          <p className="mb-8 text-base leading-8 text-white/70 sm:text-lg sm:leading-9">
            <strong>Kendal, 10 September 2026</strong>
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-6 text-lg leading-9 text-white/85 sm:text-xl sm:leading-10">
          <p>
            Aku mengira<br />
            hidup adalah tentang menemukan sesuatu
          </p>

          <p>
            Menemukan cinta,<br />
            keberhasilan, kekayaan,<br />
            nama yang membuat dunia mengingatku
          </p>

          <p>
            Maka aku berjalan, mengejar, berlari<br />
            Hingga suatu hari<br />
            yang paling ingin kupunya<br />
            t&apos;lah hilang
          </p>

          <p>
            Kusebut musibah,<br />
            ternyata ia guru<br />
            Ia mengajariku<br />
            bahwa tak semua yang kuingin<br />
            menjadi milikku
          </p>

          <p>
            Dari sana aku belajar taubat,<br />
            pulang dari kesombongan<br />
            yang mengira aku tahu<br />
            apa yang terbaik bagiku
          </p>

          <p>
            Aku belajar sabar,<br />
            bahwa tak semua benih<br />
            harus tumbuh pada hari<br />
            ketika aku menanamnya
          </p>

          <p>
            Aku belajar syukur,<br />
            bahwa hidup masih menyimpan begitu banyak cahaya<br />
            di antara hal-hal yang selama ini kukeluhkan
          </p>

          <p>
            Aku belajar tawakal,<br />
            melakukan yang kumampu,<br />
            lalu menyerahkan yang bukan kuasaku
          </p>

          <p>
            Aku belajar ridha,<br />
            menerima keputusan Allah<br />
            bukan berarti tak berharap,<br />
            tapi berhenti memusuhi kenyataan
          </p>

          <p>
            Dan aku belajar ma&apos;rifah,<br />
            bahwa sepanjang perjalanan<br />
            aku tidak sedang mencari dunia,<br />
            aku mencari Tuhan
          </p>

          <p>
            Betapa lucunya manusia<br />
            Mencari ketenangan dalam harta,<br />
            mencari harga diri dalam pujian,<br />
            mencari cinta dalam kepemilikan,<br />
            mencari masa depan dalam kecemasan,
          </p>

          <p>
            padahal yang dicari<br />
            tak pernah tinggal<br />
            di semua itu
          </p>

          <p>
            Ia tinggal dalam hubungan<br />
            antara hamba dan Tuhan
          </p>

          <p>
            Maka aku mengerti<br />
            Kegagalan bukan selalu kehancuran<br />
            Kehilangan bukan selalu hukuman<br />
            Penundaan bukan selalu penolakan<br />
            Kesendirian bukan selalu kesepian<br />
            Dan jalan berliku bukan berarti tersesat dalam arah
          </p>

          <p>
            Mungkin aku saja<br />
            yang terlalu cepat menilai perjalanan<br />
            sebelum sampai akhir
          </p>

          <p>
            Kini aku tak meminta<br />
            hidup tanpa luka<br />
            Aku hanya meminta<br />
            hati tak kehilangan Allah<br />
            ketika luka datang
          </p>

          <p>
            Aku tak meminta<br />
            jalan tanpa badai<br />
            Aku hanya meminta<br />
            sayap yang cukup kuat<br />
            untuk melewatinya
          </p>

          <p>
            Aku tak meminta<br />
            semua doa jadi nyata<br />
            Aku hanya meminta<br />
            apa pun jawaban-Nya,<br />
            tetap menjadi hamba<br />
            yang mengenal-Nya
          </p>

          <p>
            Kini aku tahu<br />
            hidup bukan perjalanan<br />
            mendapatkan segalanya<br />
            Hidup adalah perjalanan<br />
            mengetahui pada siapa<br />
            segalanya dikembalikan
          </p>

          <p>
            Dan ternyata<br />
            sejauh apa pun kupergi,<br />
            sebanyak apa pun kukejar,<br />
            sedalam apa pun kutersesat,<br />
            perjalanan terjauh<br />
            adalah dari diriku menuju Tuhan<br />
            Perjalanan itu<br />
            bernama &quot;Pulang&quot;
          </p>

          <p className="mt-12 text-sm text-[#d9c27a]">
            #ngajirumi #burungjiwa #mjuharuddin #jalaluddinrumi #sufiIndonesia
          </p>
        </div>
      </section>

      {/* =====================================================
          BENANG MERAH V NGAJI RUMI 8
          ===================================================== */}

      <section className="border-t border-[#d9c27a]/20 bg-[#173c2a] px-5 py-20 text-white sm:px-8 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 font-serif text-3xl font-semibold tracking-tight text-[#f7f5ef] sm:text-4xl">
            BENANG MERAH V NGAJI RUMI 8
          </h2>

          <h3 className="mt-8 mb-4 font-serif text-2xl font-semibold text-[#d9c27a] sm:text-3xl">
            BURUNG LANGIT
          </h3>

          <p className="text-base leading-8 text-white/80 sm:text-lg sm:leading-9">
            <strong>
              By. Juhar - Benang Merah V Ngaji Rumi 8 &quot;Burung Jiwa&quot;
            </strong>
          </p>

          <p className="mb-8 text-base leading-8 text-white/70 sm:text-lg sm:leading-9">
            <strong>Kendal, 23 September 2026</strong>
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-6 text-lg leading-9 text-white/85 sm:text-xl sm:leading-10">
          <p>
            Wahai jiwa,<br />
            kau bukan dicipta<br />
            untuk selamanya<br />
            di dahan dunia
          </p>

          <p>
            Jangan jadikan dunia<br />
            rumah terakhir<br />
            Ia hanya persinggahan<br />
            Tempat belajar<br />
            mengenal kehilangan,<br />
            mengenal kesabaran,<br />
            mengenal syukur,<br />
            melepaskan kendali,<br />
            menerima ketetapan,<br />
            hingga kau mengenal<br />
            Dia penciptamu
          </p>

          <p>
            Kau jatuh, bertaubatlah<br />
            Kau lelah, bersabarlah<br />
            Kau mendapat nikmat,<br />
            bersyukurlah<br />
            Kau hilang kendali, bertawakallah<br />
            Kau tak sesuai keinginanmu,<br />
            belajarlah ridha
          </p>

          <p>
            Setelah semua itu,<br />
            tengoklah dalam dirimu<br />
            Mungkin kau temukan<br />
            bahwa yang kau cari<br />
            bukan keberhasilan,<br />
            bukan pengakuan,<br />
            bukan harta,<br />
            bahkan bukan ketenangan<br />
            Melainkan pengenalan pada Tuhan
          </p>

          <p>
            Sebab ada kosong<br />
            yang tak bisa diisi dunia<br />
            Ada haus<br />
            yang tak bisa dipuaskan harta<br />
            Ada sepi<br />
            yang tak bisa disembuhkan<br />
            ribuan manusia<br />
            Ada rindu<br />
            yang tak memiliki nama<br />
            selain kepada-Nya
          </p>

          <p>
            Maka jangan sibuk<br />
            menghitung berapa banyak<br />
            yang kau miliki<br />
            Tanyakan, seberapa dalam<br />
            kau mengenal Dia<br />
            yang memberimu semuanya?
          </p>

          <p>
            Jangan hanya mengukur keberhasilan dengan angka<br />
            Tanyakan, apakah keberhasilan<br />
            membuatmu rendah hati<br />
            atau semakin tinggi hati?
          </p>

          <p>
            Jangan terlalu takut<br />
            kehilangan sesuatu<br />
            Tanyakan, apa yang Allah selamatkan di balik sesuatu yang Dia ambil?
          </p>

          <p>
            Jangan terlalu bangga<br />
            memperoleh sesuatu<br />
            Tanyakan, apakah nikmat itu<br />
            membuat semakin dekat<br />
            atau justru semakin jauh?
          </p>

          <p>
            Karena akhirnya,<br />
            semua yang dikejar<br />
            akan meninggalkan<br />
            Harta akan tinggal<br />
            Jabatan berganti<br />
            Tubuh menua<br />
            Popularitas padam<br />
            Nama dilupakan
          </p>

          <p>
            Bahkan orang-orang<br />
            yang memanggil nama kita<br />
            suatu hari hanya menyebut<br />
            dalam kenangan
          </p>

          <p>
            Tapi ada satu hubungan<br />
            yang tak pernah sia-sia,<br />
            hubungan seorang hamba<br />
            dengan Allah
          </p>

          <p>
            Maka terbanglah,<br />
            wahai burung jiwa,<br />
            lewati ketakutanmu,<br />
            lewati egomu,<br />
            lewati luka masa lalu,<br />
            lewati kebutuhan<br />
            untuk selalu dipuji,<br />
            lewati keinginan<br />
            untuk selalu dimengerti,<br />
            lewati ambisi<br />
            untuk selalu jadi pemenang
          </p>

          <p>
            Terbang sampai kau mengerti,<br />
            tak semua yang hilang<br />
            harus kembali<br />
            Tak semua yang tertunda<br />
            harus dicurigai<br />
            Tak semua yang gagal<br />
            harus disesali<br />
            Yang tak dipahami<br />
            belum tentu tak berhikmah<br />
            Dan tak semua doa<br />
            harus dijawab dengan perubahan keadaan
          </p>

          <p>
            Kadang jawaban doa<br />
            adalah perubahan diri<br />
            Hati yang dulu keras<br />
            menjadi lembut<br />
            Jiwa yang dulu gelisah<br />
            menjadi tenang<br />
            Yang dulu mengejar dunia<br />
            mulai mencari makna<br />
            Dan yang dahulu bertanya,<br />
            &ldquo;Apa yang bisa Tuhan berikan padaku?&rdquo;<br />
            akhirnya bertanya,<br />
            &ldquo;Apa yang bisa ku berikan pada Tuhan dengan hidup yang Dia titipkan?&rdquo;
          </p>

          <p>
            Di situlah burung jiwa terbang<br />
            Bukan karena memiliki langit<br />
            Tapi karena mengenal Pemilik Langit
          </p>

          <p>
            Dan mungkin,<br />
            itulah inti seluruh perjalanan<br />
            Kita datang sebagai pencari<br />
            Kita berjalan sebagai musafir<br />
            Kita terluka sebagai manusia<br />
            Kita bertaubat sebagai hamba<br />
            Kita mencintai sebagai jiwa<br />
            Dan kita pulang dengan kesadaran<br />
            Sejak awal, kita bukan mencari dunia<br />
            kita mencari Dia<br />
            dan Dia tak pernah pergi
          </p>

          <p className="mt-12 text-sm text-[#d9c27a]">
            #ngajirumi #burungjiwa #mjuharuddin #jalaluddinrumi #sufiIndonesia
          </p>
        </div>
      </section>

      {/* ================= NAVIGASI ================= */}

      <section className="bg-[#0d3624] px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
            <a
              href="/Ngajirumi/#/ngajirumi-7"
              className="inline-flex items-center justify-center rounded-full border border-[#d9c27a]/30 px-6 py-3 text-sm font-medium tracking-wide text-[#d9c27a] transition hover:bg-[#d9c27a] hover:text-[#0d3624]"
            >
              ← Ngaji Rumi 07
            </a>

            <a
              href="/Ngajirumi/#/perpustakaan"
              className="inline-flex items-center justify-center rounded-full border border-[#d9c27a]/30 px-6 py-3 text-sm font-medium tracking-wide text-[#d9c27a] transition hover:bg-[#d9c27a] hover:text-[#0d3624]"
            >
              Kembali ke Perpustakaan →
            </a>

            <a
              href="/Ngajirumi/#/ngajirumi-9"
              className="inline-flex items-center justify-center rounded-full border border-[#d9c27a]/30 px-6 py-3 text-sm font-medium tracking-wide text-[#d9c27a] transition hover:bg-[#d9c27a] hover:text-[#0d3624]"
            >
              Lanjut ke Ngaji Rumi 09 →
            </a>
          </div>
        </div>
      </section>

    </article>
  );
}
