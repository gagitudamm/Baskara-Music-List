//DOM Elements
const homePage = document.getElementById("homePage");
const songDetailPage = document.getElementById("songDetailPage");
const playerPage = document.getElementById("playerPage");
const songListElement = document.getElementById("songList");

const backToHomeFromDetailBtn = document.getElementById(
  "backToHomeFromDetailBtn"
);
const backToHomeBtn = document.getElementById("backToHomeBtn");
const bodyElement = document.body;

const backgroundVideoContainer = document.querySelector(
  ".video-background-container"
);
const backgroundVideo = document.getElementById("backgroundVideo");

//Element untiuk halaman detail lagu (tidak akan langsung digunakan saat klil lagu,tapitetap di load)
const detailAlbumArt = document.getElementById("detailAlbumArt");
const detailTrackTitle = document.getElementById("detailTrackTitle");
const detailTrackArtist = document.getElementById("detailTrackArtist");
const detailAlbumName = document.getElementById("detailAlbumName");
const playFromDetailBtn = document.getElementById("playFromDetailBtn");

const audioPlayer = document.getElementById("audioPlayer");
const albumArtPlayer = document.getElementById("albumArt");
const playerTrackTitle = document.getElementById("playerTrackTitle");
const playerTrackArtist = document.getElementById("playerTrackArtist");
const lyricsContainer = document.getElementById("lyricsContainer");

const playerProgressBarContainer = document.getElementById(
  "playerProgressBarContainer"
);
const playerProgressBar = document.getElementById("playerProgressBar");
const playerCurrentTime = document.getElementById("playerCurrentTime");
const playerTotalDuration = document.getElementById("playerTotalDuration");

const playerPrevBtn = document.getElementById("playerPrevBtn");
const playerPlayPauseBtn = document.getElementById("playerPlayPauseBtn");
const playerNextBtn = document.getElementById("playerNextBtn");
const playerRepeatBtn = document.getElementById("playerRepeatBtn");
const playerShuffleBtn = document.getElementById("playerShuffleBtn");
const playerVolumeSlider = document.getElementById("playerVolumeSlider");
const playerSpeedSlider = document.getElementById("playerSpeedSlider");
const currentSpeedDisplay = document.getElementById("currentSpeedDisplay");

//app state
let songs = [
  {
    id: 1,
    title: "Nina",
    artist: "Feast",
    album: "Membangun dan Menghancurkan",
    albumArtUrl:
      "https://t2.genius.com/unsafe/600x600/https%3A%2F%2Fimages.genius.com%2Ffef952eef4c0ea10e53d70bfa2d5d5db.1000x1000x1.png",
    audioSrc: "audio/Feast - Nina (Official Lyric Video) - .Feast.mp3",
    videoBgSrc: "videos/Nina.mp4", //path video lagu video
    //lirik dengan timestamp setiap detik
    lyrics: [
      { time: 21, text: "Saat engkau" },
      { time: 24, text: "Tertidur" },
      { time: 27, text: "Aku pergi menghibur,beda kota pisah raga" },
      { time: 34.5, text: "Bukan Masalahku" },
      { time: 37, text: "Lihat wajah mu dilayar ku tetap bersyukur" },
      { time: 42, text: "Saat engkau terjaga" },
      { time: 48, text: "Aku kan ada disana" },
      { time: 53, text: "Sempatkan bermain dan bawakan cendramata" },
      { time: 58.6, text: "Satu sampai lima tahun cepat tak terasa" },
      { time: 63, text: "Segala hal ku upayakan untuk melindungi" },
      { time: 74.7, text: "Tunggu aku kembali lagi esok pagi" },
      { time: 85, text: "Tumbuh lebih baik, cari panggilan mu" },
      { time: 90, text: "Jadi lebih baik, dibanding diriku" },
      { time: 96, text: "'Tuk sementara ini aku mengembara jauh" },
      { time: 109, text: "Saat dewasa kau kan mengerti" },
      { time: 113, text: "🎼" },
      { time: 122, text: "Saat, engkau dewasa" },
      { time: 127.5, text: "Dan aku kian menua" },
      { time: 133, text: "Jika ku berpulang lebih awal,tidak apa" },
      { time: 138, text: "Berjumpa lagi disana aku tetap sama" },
      { time: 143, text: "Saat engkau teringat, tengkar kita mana kala" },
      { time: 154, text: "Maaf atas perjalanan yang tidak sempurna" },
      { time: 160, text: "Namun percayalah untukmu kujual dunia" },
      { time: 165, text: "Segala hal ku upayakan untuk melindungi" },
      { time: 176, text: "Tunggu aku kembali lagi esok pagi" },
      { time: 181, text: "Selalu janjiku pada dirimu" },
      { time: 186, text: "Tumbuh lebih baik, cari panggilanmu" },
      { time: 192, text: "Jadi lebih baik, dibanding diriku" },
      { time: 197, text: "Dan tertawalah saat ini selepas-lepasnya" },
      { time: 210, text: "Karena kelak kau kan tersakiti" },
      {
        time: 215,
        text: "Aku kamu hebat, namun selamanya diriku pasti berkutat",
      },
      { time: 223, text: "'tuk selalu jauhkan mu dari dunia yang jahat" },
      { time: 227, text: "Ini sumpahku padamu 'tuk biarkanmu" },
      { time: 231, text: "Tumbuh lebih baik, cari panggilanmu" },
      { time: 236, text: "Jadi lebih baik, dibanding diriku" },
      { time: 241, text: "'tuk sementara, kita tertawakan" },
      { time: 247, text: "'berbagai hal yang lucu & lara" },
      { time: 252, text: "Selepas-lepasnya" },
      { time: 254, text: "Saat dewasa kau kan mengerti" },
      { time: 260, text: "Karena kelak kau kan tersakiti" },
      { time: 265, text: "Saat dewasa kau kan mengerti" },
      { time: 270.8, text: "Karena kelak kau kan tersakiti" },
    ],
  },
  {
    id: 2,
    title: "Secukupnya",
    artist: "Hindia",
    album: "Memari dengan bayangan",
    albumArtUrl:
      "https://upload.wikimedia.org/wikipedia/id/8/89/Menari_dengan_bayangan.jpg",
    audioSrc: "audio/Hindia - Secukupnya (Official Video) - Sun Eater.mp3",
    videoBgSrc: "videos/Secukupnya.mp4", //path video background khusus
    //lirik dengan timestamp setiap detik
    lyrics: [
      {
        time: 61,
        text: "Kapan terakhir kali kamu dapat tertidur tenang? (tenang)",
      },
      { time: 71, text: "Tak perlu memikirkan tentang apa yang akan datang" },
      { time: 76, text: "Diesok hari" },
      { time: 77.8, text: "Tubuh yang berpatah hati" },
      { time: 80, text: "Bergantung pada gaji" },
      { time: 83.7, text: "Berlomba jadi asri" },
      { time: 85, text: "Mengais validasi" },
      { time: 87.6, text: "Dan aku pun terhadir" },
      { time: 89.9, text: "Seakan paling mahir" },
      { time: 93, text: "Menenangkan dirimu, yang merasa terpinggirkan dunia" },
      { time: 100, text: "Tak pernah adil" },
      { time: 102, text: "Kita semua gagal" },
      { time: 104.5, text: "Angkat minumanmu, bersedih bersama-sama" },
      { time: 108, text: "ah ah ah ah ah" },
      { time: 111.6, text: "Sia-sia (pada akhirnya)" },
      { time: 117, text: "Putus asa (terekam pedih semua)" },
      { time: 122, text: "Masalahnya...(lebih dari yang)" },
      { time: 125.3, text: "Secukupnya" },
      { time: 127, text: "🎼" },
      { time: 137, text: "Rekam gambar dirimu yang terabadikan bertahun" },
      { time: 143, text: "Silam.." },
      { time: 144.5, text: "Putra putri sakit hati Ayah Ibu sendiri" },
      { time: 149, text: "Komitmen lama mati hubungan yang menyepi" },
      { time: 153.8, text: "Wisata masa lalu" },
      { time: 156.5, text: "Kau hanya merindu" },
      { time: 158, text: "Cari pelarian, dari pengabdian" },
      { time: 162.8, text: "Yang terbakar sirna" },
      { time: 165.5, text: "Mengapur berdebu" },
      { time: 167.5, text: "Kita semua gagal" },
      { time: 170.5, text: "Ambil sedikit tisu" },
      { time: 171.8, text: "Bersedilah secukupnya" },
      { time: 175, text: "ah ah ah ah ah" },
      { time: 178, text: "Secukupnya...(kan masih ada)" },
      { time: 182.6, text: "Penggantinya" },
      { time: 184, text: "belum waktunya kau bisa" },
      { time: 187.7, text: "Menjawabnya" },
      { time: 189, text: "ah ah ah ah ah" },
      { time: 191.5, text: "Secukupnya" },
      { time: 192.7, text: "Semua yang sirna kan kembali lagi" },
      { time: 202, text: "Semua yang sirna kan nanti berganti" },
    ],
  },
  {
    id: 3,
    title: "Rumah ke Rumah",
    artist: "Hindia",
    album: "Menari dengan bayangan",
    albumArtUrl:
      "https://upload.wikimedia.org/wikipedia/id/8/89/Menari_dengan_bayangan.jpg",
    audioSrc:
      "audio/Hindia - Rumah ke Rumah (Official Music Video) - Hindia.mp3",
    videoBgSrc: "videos/Rumah ke Rumah.mp4",
    lyrics: [
      { time: 77, text: "Menyesal tak kusampaikan" },
      { time: 80.7, text: "Cinta monyetku ke Kanya dan Rebecca" },
      { time: 85, text: "Apa kabar kalian di sana" },
      { time: 88.6, text: "Semoga hidup baik-baik saja" },
      { time: 92.6, text: "Tak belajar terkena getahnya" },
      { time: 96.7, text: "Saat bersama Thanya dan Saphira" },
      { time: 101, text: "Kupercaya mungkin bukan jalannya" },
      { time: 105.3, text: "Namun kalian banyak salah juga" },
      { time: 108.9, text: "Jika dahulu ku tak cepat berubah" },
      {
        time: 114,
        text: "Ini maafku untukmu Sharfina, Segala doa yang baik adanya",
      },
      { time: 121, text: "Untukmu dan mimpimu yang mulia" },
      {
        time: 126.4,
        text: "Pindah berkala rumah ke rumah, berharap bisa berujung indah",
      },
      { time: 134.2, text: "Walau akhirnya harus berpisah" },
      { time: 138, text: "Trima kasih karna ku tak mudah" },
      {
        time: 142.6,
        text: "Pindah berkala rumah ke rumah, berharap bisa berujung indah",
      },
      { time: 150.2, text: "Walau akhirnya harus berpisah" },
      { time: 155.4, text: "Trima kasih karna ku tak mudah" },
      { time: 160, text: "🎼" },
      {
        time: 167,
        text: "Maaf jika ku sering buat susah, Indisya Panda Anggra Caca Sismita",
      },
      { time: 175, text: "Prempuan terkuat dalam hidupku" },
      { time: 179.7, text: "Terjanglah apa pun yang kalian tuju" },
      { time: 183.5, text: "Kau datang saat gelapku merekah" },
      { time: 187.7, text: "Seluruh hatiku untukmu Meidiana" },
      { time: 192.3, text: "Kau pantas dapatkan yang baik di dunia" },
      { time: 196.8, text: "Smoga kita bertahan lama" },
      { time: 200.7, text: "Pindah berkala rumah ke rumah" },
      { time: 204.9, text: "Mengambil pelajaran jika berpisah" },
      { time: 209, text: "Jikalau suatu saat berujung indah" },
      { time: 212.8, text: "Catat nama kita dalam sejarah" },
      { time: 217, text: "Pindah berkala rumah ke rumah" },
      { time: 221, text: "Mengambil pelajaran jika berpisah" },
      { time: 225.2, text: "Jikalau suatu saat berujung indah" },
      { time: 230, text: "Catat nama kita dalam sejarah" },
      { time: 233.2, text: "Letih mengembara rumah ke rumah" },
      { time: 238, text: "Kadang ku lupa akanmu Amalia" },
      {
        time: 242,
        text: "Siap sedia tiap ku bercerita, Ku beruntung jadi anakmu Bunda",
      },
      { time: 249.3, text: "..." },
      { time: 257, text: "Pindah berkala rumah ke rumah" },
      { time: 261, text: "Selalu pada dirimu aku berserah" },
      {
        time: 265.8,
        text: "Jika aku disebut dalam sejarah, Mreka takkan lupa karna siapa",
      },
      { time: 274, text: "Pindah berkala rumah ke rumah" },
      { time: 277.9, text: "Selalu pada dirimu aku berserah" },
      {
        time: 282,
        text: "Jika aku disebut dalam sejarah, Mreka takkan lupa karna siapa",
      },
    ],
  },
  {
    id: 4,
    title: "Cincin",
    artist: "Hindia",
    album: "Lapipula hidup akan berakhir",
    albumArtUrl:
      "https://image-cdn.hypb.st/https%3A%2F%2Fid.hypebeast.com%2Ffiles%2F2023%2F07%2Fhindia-merilis-album-kedua-berjudul-lagipula-hidup-akan-berakhir-bagian-1-02.jpg?q=90&w=1400&cbr=1&fit=max",
    audioSrc: "audio/Hindia - Cincin (Official Lyric Video) - Hindia.mp3",
    videoBgSrc: "videos/Cincin.mp4",
    lyrics: [
      { time: 27, text: "Kau bermasalah jiwa aku pun rada gila" },
      { time: 30, text: "Jodoh akal-akalan neraka kita bersamaa" },
      { time: 34, text: "Kau langganan menangis lakimu muntah-muntah" },
      { time: 36.2, text: "Begitu terus sampai Iblis tobat dan sedekah" },
      { time: 40, text: "Terkadang rasanya leher terbakar hingga pagi" },
      { time: 43.7, text: "Seperti aku hidup berpasangan dengan api" },
      { time: 45, text: "Berhenti ulangi psikolog dan terapi" },
      { time: 49, text: "Aku isi bensin kita coba lagi" },
      { time: 53, text: "Tapi sbelumnya sejuta sayang untukmu cinta" },
      {
        time: 59,
        text: "Karna aku pun bola panas juga kadang lebih atau sama parahnya",
      },
      {
        time: 65,
        text: "Dan jika bicara tentang masa depan aku pun bingung tak punya tebakan",
      },
      {
        time: 71,
        text: "Lagu cinta untuk akhir dunia lihat kami nyanyikan ini bersama",
      },
      { time: 78, text: "Smoga hidup kita trus begini-gini saja" },
      { time: 85.3, text: "Walau sungai meluap dan kurs tak masuk logika" },
      { time: 92, text: "Smoga kita mencintai apa adanya" },
      { time: 97.4, text: "Walau katanya skarang ku bisa masuk penjara" },
      { time: 103.8, text: "Satu per satu hari per hari" },
      { time: 110, text: "Yang menyakiti benahi lagi" },
      { time: 116, text: "Perihal esok tuk nanti dulu" },
      { time: 122, text: "Perihal cincin kucari waktu" },
      { time: 128.8, text: "Persetan kata siapa mau bilang apa tak guna" },
      { time: 134.5, text: "Mreka hanya tahu namamu mreka takkan jadi diriku" },
      { time: 141, text: "Persetan aturan cinta tak tertulis di atas batu" },
      {
        time: 146.3,
        text: "Apa kau ingin menjadi benar atau ingin menjadi muda",
      },
      { time: 152, text: "Smoga hidup kita trus begini-gini saja" },
      { time: 159.8, text: "Walau sungai meluap dan kurs tak masuk logika" },
      { time: 166, text: "Smoga kita mencintai apa adanya" },
      { time: 172, text: "Walau katanya skarang ku bisa masuk penjara" },
      { time: 177, text: "Persetan kata siapa mau bilang apa tak guna" },
      { time: 184.8, text: "Mreka hanya tahu namamu mreka takkan jadi diriku" },
      { time: 191, text: "Persetan aturan cinta tak tertulis di atas batu" },
      {
        time: 196.6,
        text: "Apa kau ingin menjadi benar atau kau ingin menjadi muda",
      },
      { time: 202.5, text: "Lagu cinta untuk akhir dunia" },
      { time: 208.8, text: "Sekarang bantu aku nyanyikan ini bersama" },
      { time: 213, text: "Smoga hidup kita trus begini-gini saja" },
      { time: 221, text: "Walau sungai meluap dan kurs tak masuk logikaa" },
      { time: 228, text: "Smoga kita mencintai apa adanya" },
      { time: 228, text: "Walau katanya skarang ku bisa masuk penjara" },
      { time: 239.8, text: "Satu per satu hari per hari" },
      { time: 247, text: "Yang menyakiti benahi lagi" },
      { time: 252.5, text: "Perihal esok tuk nanti dulu" },
      { time: 259, text: "Perihal cincin kucari waktu" },
    ],
  },
  {
    id: 5,
    title: "Evaluasi",
    artist: "Hindia",
    album: "Menari dengan bayangan",
    albumArtUrl:
      "https://upload.wikimedia.org/wikipedia/id/8/89/Menari_dengan_bayangan.jpg",
    audioSrc: "audio/Hindia - Evaluasi (Official Music Video) - Hindia.mp3",
    videoBgSrc: "videos/Evaluasi.mp4",
    lyrics: [
      { time: 15, text: "Yang tak bisa terobati" },
      { time: 23.5, text: "Biarlah" },
      { time: 27.7, text: "Mengering sendiri" },
      { time: 31.4, text: "Menghias tubuh dan" },
      { time: 31.4, text: "Menghias tubuh dan yang" },
      { time: 37.4, text: "Mengevaluasi" },
      { time: 42.7, text: "Ragamu" },
      { time: 47, text: "Hanya kau sendiri" },
      { time: 50, text: "Mereka tak mampu" },
      { time: 51.6, text: "Melewat yang telah kau lewati" },
      { time: 56.9, text: "Tiap berganti hari rintangan yang kau hadapi" },
      { time: 64.5, text: "Masalah yang mengeruh" },
      { time: 68, text: "Perasaan yang rapuh" },
      { time: 73, text: "Ini belum separuhnya" },
      { time: 76.3, text: "Biasa saja, kamu tak apa" },
      { time: 81.3, text: "Yang selalu ingin ambil peran" },
      { time: 89, text: "Hanya berlomba menjadi lebih" },
      { time: 98, text: "Sedih dari dirimu" },
      { time: 98, text: "Muak dikesampingkan" },
      { time: 100, text: "Muak dikesampingkan" },
      { time: 103.6, text: "Disamakan" },
      { time: 105.8, text: "Hatimu terluka, sempurna" },
      { time: 111, text: "Masalah yang mengeruh" },
      { time: 115.5, text: "Perasaan yang rapuh" },
      { time: 119.4, text: "Ini belum separuhnya" },
      { time: 123, text: "Biasa saja" },
      { time: 126, text: "Kamu tak apa" },
      { time: 130.4, text: "Perjalanan yang jauh" },
      { time: 135.3, text: "Kau bangun untuk bertaruh" },
      { time: 139, text: "Hari belum selesai" },
      { time: 142, text: "Biasa saja" },
      { time: 145, text: "Kamu tak apa" },
      { time: 148.5, text: "Bilas muka, gosok gigi, evaluasi" },
      { time: 152.4, text: "Tidur sejenak menemui esok pagi" },
      { time: 158, text: "Walau pedih 'ku bersamamu kali ini" },
      { time: 162, text: "'Ku masih ingin melihatmu esok hari" },
      { time: 167.5, text: "Bilas muka, gosok gigi, evaluasi" },
      { time: 172, text: "Tidur sejenak menemui esok pagi" },
      { time: 176, text: "Walau pedih 'ku bersamamu kali ini" },
      { time: 181.5, text: "'Ku masih ingin melihatmu esok hari" },
      { time: 186, text: "Bilas muka, gosok gigi, evaluasi" },
      { time: 190, text: "Tidur sejenak menemui esok pagi" },
      { time: 195, text: "Walau pedih 'ku bersamamu kali ini" },
      { time: 200.3, text: "'Ku masih ingin melihatmu esok hari" },
    ],
  },
  {
    id: 6,
    title: "Tarot",
    artist: "Feast",
    album: "Lapipula hidup akan berakhir",
    albumArtUrl:
      "https://t2.genius.com/unsafe/600x600/https%3A%2F%2Fimages.genius.com%2Ffef952eef4c0ea10e53d70bfa2d5d5db.1000x1000x1.png",
    audioSrc: "audio/Feast - Tarot (Official Lyric Video) - .Feast.mp3",
    videoBgSrc: "videos/Tarot.mp4",
    lyrics: [
      { time: 33, text: "Nama yang sama" },
      { time: 36, text: "Bertahan" },
      { time: 38, text: "Dalam ruangan hening" },
      { time: 42, text: "Tanpa suara" },
      { time: 44, text: "Bertahan" },
      { time: 45.3, text: "Tak bergeming" },
      { time: 50.2, text: "Terlalu lama" },
      { time: 53, text: "Bercanda" },
      { time: 55, text: "Kita tak terbiasa" },
      { time: 58, text: "Dengan celaka" },
      { time: 61, text: "Yang nyata" },
      { time: 63.2, text: "Diam tak berdaya" },
      { time: 67.2, text: "Namun" },
      { time: 68.1, text: "Aku bingung" },
      { time: 69.2, text: "Kenapa ku tak pergi" },
      { time: 72, text: "Aku bingung" },
      { time: 74, text: "Kalian masih di sini" },
      { time: 76, text: "Apa mungkin karena terlalu lama" },
      { time: 80.7, text: "Apa benar tuk berbagi derita" },
      { time: 84.7, text: "Mungkin nanti" },
      { time: 86.8, text: "Semua justru memburuk" },
      { time: 89, text: "Hati-hati" },
      { time: 90.4, text: "Namun terjatuh lagi" },
      { time: 92.8, text: "Tapi luka adalah niscaya" },
      { time: 97, text: "Kutanggung denganmu" },
      { time: 100, text: "Selama ku mampu" },
      { time: 104, text: "Selama ku mampu" },
      { time: 118, text: "Di kehidupan kedua" },
      { time: 121.7, text: "Smoga kau tak terlalu keras kepala" },
      { time: 125.6, text: "Atau mungkin ini bukan yang pertama" },
      { time: 129.7, text: "Dan kita diberi kesempatan berubah" },
      { time: 134.7, text: "Ku yakin nyawa kita bertautan" },
      { time: 139.3, text: "Khatam berbagai cobaan" },
      {
        time: 142.3,
        text: "Selalu menertawakan ramalan bintang, kartu tarot, orang pintar pembaca nasib",
      },
      { time: 151, text: "Namun" },
      { time: 151.8, text: "Aku bingung" },
      { time: 153.6, text: "Kenapa ku tak pergi" },
      { time: 155.6, text: "Aku bingung" },
      { time: 157, text: "Kalian masih di sini" },
      { time: 159, text: "Apa mungkin karena terlalu lama" },
      { time: 163.8, text: "Apa benar tuk berbagi derita" },
      { time: 167.9, text: "Mungkin nanti" },
      { time: 170, text: "Semua justru memburuk" },
      { time: 172, text: "Hati-hati" },
      { time: 174, text: "Namun terjatuh lagi" },
      { time: 176, text: "Tapi luka adalah niscaya" },
      { time: 180, text: "Kutanggung denganmu" },
      { time: 183.8, text: "Selama ku mampu" },
      { time: 187.8, text: "Selama ku mampu" },
      {
        time: 192,
        text: "Selalu menertawakan ramalan bintang, kartu tarot, orang pintar pembaca nasib",
      },
      { time: 201, text: "Namun" },
      { time: 202.6, text: "Padamu kupercaya" },
      { time: 211.7, text: "Tak masuk logika" },
      { time: 219.6, text: "Pada mu kupercaya" },
      { time: 228.5, text: "Tak masuk logika (Tak masuk logika" },
      { time: 237.5, text: "Padamu kupercaya (Padamu kupercaya)" },
      { time: 245.3, text: "Tak masuk logika(Tak masuk logika)" },
      { time: 253.3, text: "Padamu kupercaya(Padamu kueprcaya)" },
      { time: 262, text: "Tak masuk logika, tak masuk logika" },
      { time: 270, text: "Padamu kupercaya" },
      { time: 278.6, text: "Tak masuk logika" },
    ],
  },
];
let currentSongIndex = 0;
let isPlaying = false;
let isShuffle = false;
let repeatMode = 0; // 0: no repeat, 1: repeat one, 2: repeat all

// --- Page Navigation ---
function showHomePage() {
  playerPage.classList.remove("active");
  songDetailPage.classList.remove("active"); // Pastikan detail page disembunyikan
  homePage.classList.add("active");

  bodyElement.classList.remove("player-active-bg");
  bodyElement.classList.remove("detail-active-bg");
  backgroundVideoContainer.classList.remove("active"); // Sembunyikan video background
  backgroundVideo.pause(); // Jeda video background
  backgroundVideo.src = ""; // Kosongkan src video
  backgroundVideo.load();
  pauseTrack(); // Jeda musik saat kembali ke home
}

// Fungsi untuk menampilkan halaman detail lagu (tetap dipertahankan, tapi tidak dipanggil dari song list click)
function showSongDetailPage(song) {
  homePage.classList.remove("active");
  playerPage.classList.remove("active");
  songDetailPage.classList.add("active");

  detailAlbumArt.src = song.albumArtUrl;
  detailTrackTitle.textContent = song.title;
  detailTrackArtist.textContent = song.artist;
  detailAlbumName.textContent = song.album || "Unknown Album";

  bodyElement.classList.remove("player-active-bg");
  bodyElement.classList.add("detail-active-bg");
  backgroundVideoContainer.classList.remove("active");
  backgroundVideo.pause(); // Jeda video background
  backgroundVideo.src = ""; // Kosongkan src video
  backgroundVideo.load();
}

function showPlayerPage() {
  homePage.classList.remove("active");
  songDetailPage.classList.remove("active");
  playerPage.classList.add("active");

  bodyElement.classList.remove("detail-active-bg");
  bodyElement.classList.add("player-active-bg");
  backgroundVideoContainer.classList.add("active"); // Tampilkan video background

  const currentSong = songs[currentSongIndex];
  if (currentSong && currentSong.videoBgSrc) {
    backgroundVideo.src = currentSong.videoBgSrc;
    backgroundVideo.load();
    backgroundVideo
      .play()
      .catch((e) => console.error("Error playing video background:", e));
  } else {
    backgroundVideo.src = "";
    backgroundVideo.load(); // Kosongkan src jika tidak ada video khusus
  }
}

// --- Home Page Logic ---
function renderSongList() {
  songListElement.innerHTML = "";
  if (songs.length === 0) {
    songListElement.innerHTML =
      '<li class="loading-songs">Tidak ada lagu tersedia.</li>';
    return;
  }
  songs.forEach((song, index) => {
    const listItem = document.createElement("li");
    listItem.setAttribute("data-id", song.id);
    listItem.innerHTML = `
            <img src="${song.albumArtUrl}" alt="${song.title}" class="song-art-list">
            <div class="song-info-list">
                <h3>${song.title}</h3>
                <p>${song.artist}</p>
            </div>
        `;
    // --- Perubahan Penting di sini ---
    // Saat item lagu diklik, langsung muat & putar lagu lalu tampilkan halaman player
    listItem.addEventListener("click", () => {
      currentSongIndex = index;
      loadSong(songs[currentSongIndex]);
      playTrack();
      showPlayerPage(); // Langsung pindah ke halaman pemutar musik
    });

    // Event listener untuk hover
    listItem.addEventListener("mouseenter", () => {
      // Hanya aktifkan video background jika kita di halaman home
      if (homePage.classList.contains("active") && song.videoBgSrc) {
        backgroundVideo.src = song.videoBgSrc;
        backgroundVideo.load();
        backgroundVideoContainer.classList.add("active");
        backgroundVideo
          .play()
          .catch((e) => console.error("Error playing video on hover:", e));
        bodyElement.classList.add("player-active-bg"); // Tambahkan kelas untuk warna background body
      }
    });
    listItem.addEventListener("mouseleave", () => {
      // Sembunyikan video background hanya jika kita di halaman home
      if (homePage.classList.contains("active")) {
        backgroundVideoContainer.classList.remove("active");
        backgroundVideo.pause(); // Jeda video saat mouse meninggalkan
        backgroundVideo.src = ""; // Kosongkan src agar tidak memutar di background
        backgroundVideo.load();
        bodyElement.classList.remove("player-active-bg"); // Hapus kelas warna background body
      }
    });

    songListElement.appendChild(listItem);
  });
}

// --- Player Logic ---
function loadSong(song) {
  if (!song) {
    console.error("Lagu tidak ditemukan!");
    albumArtPlayer.src =
      "https://placehold.co/100x100/3a3a4e/e0e0e0?text=Error";
    playerTrackTitle.textContent = "Lagu Tidak Tersedia";
    playerTrackArtist.textContent = "-";
    lyricsContainer.innerHTML = "<p>Lirik tidak tersedia.</p>"; // Ganti textContent dengan innerHTML
    audioPlayer.src = "";
    playerCurrentTime.textContent = "0:00";
    playerTotalDuration.textContent = "0:00";
    playerProgressBar.style.width = "0%";
    return;
  }
  albumArtPlayer.src = song.albumArtUrl;
  playerTrackTitle.textContent = song.title;
  playerTrackArtist.textContent = song.artist;

  renderLyrics(song.lyrics); // Panggil fungsi renderLyrics

  audioPlayer.src = song.audioSrc;

  audioPlayer.onloadedmetadata = () => {
    playerTotalDuration.textContent = formatTime(audioPlayer.duration);
  };
  audioPlayer.load();
  updatePlayPauseIcon();
}

// Fungsi baru untuk merender lirik
function renderLyrics(lyrics) {
  lyricsContainer.innerHTML = ""; // Bersihkan container lirik
  if (!lyrics || lyrics.length === 0) {
    lyricsContainer.innerHTML = "<p>Lirik tidak tersedia untuk lagu ini.</p>";
    return;
  }

  lyrics.forEach((line) => {
    const span = document.createElement("span");
    span.textContent = line.text;
    span.setAttribute("data-time", line.time); // Simpan timestamp di data-attribute
    span.classList.add("lyric-line"); // Tambahkan kelas untuk styling
    lyricsContainer.appendChild(span);
    // Hapus penambahan <br> secara manual, gunakan CSS display:block atau flexbox
    // lyricsContainer.appendChild(document.createElement('br'));
  });
}

function playTrack() {
  if (!audioPlayer.src || audioPlayer.src === window.location.href) {
    if (songs.length > 0) {
      loadSong(songs[currentSongIndex]);
    } else {
      console.log("Tidak ada lagu untuk dimainkan.");
      return;
    }
  }
  isPlaying = true;
  audioPlayer.play().catch((error) => console.error("Error saat play:", error));
  updatePlayPauseIcon();
}

function pauseTrack() {
  isPlaying = false;
  audioPlayer.pause();
  updatePlayPauseIcon();
}

function updatePlayPauseIcon() {
  if (isPlaying) {
    playerPlayPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
  } else {
    playerPlayPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
  }
}

function prevTrack() {
  if (songs.length === 0) return;
  if (isShuffle) {
    playRandomTrack();
  } else {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  }
  loadSong(songs[currentSongIndex]);
  playTrack();
  showPlayerPage(); // Perbarui video background
}

function nextTrackLogic() {
  if (songs.length === 0) return;
  if (isShuffle) {
    playRandomTrack();
  } else {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
  }
  loadSong(songs[currentSongIndex]);
  playTrack();
  showPlayerPage(); // Perbarui video background
}

function nextTrack() {
  if (songs.length === 0) return;

  if (repeatMode === 1 && audioPlayer.ended) {
    // Handled by audio.loop = true
  } else if (isShuffle) {
    playRandomTrack();
  } else {
    currentSongIndex++;
    if (currentSongIndex >= songs.length) {
      if (repeatMode === 2) {
        currentSongIndex = 0;
      } else {
        currentSongIndex = songs.length - 1;
        loadSong(songs[currentSongIndex]);
        pauseTrack();
        audioPlayer.currentTime = audioPlayer.duration;
        return;
      }
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
  }
  showPlayerPage(); // Perbarui video background
}

function playRandomTrack() {
  if (songs.length <= 1) {
    currentSongIndex = 0;
  } else {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * songs.length);
    } while (randomIndex === currentSongIndex);
    currentSongIndex = randomIndex;
  }
  loadSong(songs[currentSongIndex]);
  playTrack();
  showPlayerPage(); // Perbarui video background
}

audioPlayer.addEventListener("timeupdate", () => {
  if (audioPlayer.duration) {
    const progressPercent =
      (audioPlayer.currentTime / audioPlayer.duration) * 100;
    playerProgressBar.style.width = `${progressPercent}%`;
    playerCurrentTime.textContent = formatTime(audioPlayer.currentTime);

    // --- Logic highlight lirik ---
    const currentTime = audioPlayer.currentTime;
    const lyricLines = lyricsContainer.querySelectorAll(".lyric-line");
    let highlightedLine = null;

    lyricLines.forEach((line, index) => {
      const lineTime = parseFloat(line.getAttribute("data-time"));
      // Tentukan waktu berakhir baris lirik ini. Jika ini baris terakhir, anggap berakhir di akhir lagu.
      // Atau, lebih baik, anggap berakhir tepat sebelum baris berikutnya dimulai.
      let nextLineTime = Infinity;
      if (index + 1 < lyricLines.length) {
        nextLineTime = parseFloat(
          lyricLines[index + 1].getAttribute("data-time")
        );
      }

      if (currentTime >= lineTime && currentTime < nextLineTime) {
        line.classList.add("highlight");
        highlightedLine = line;
      } else {
        line.classList.remove("highlight");
      }
    });

    // --- Auto-scroll lirik hanya jika baris yang disorot tidak terlihat ---
    if (highlightedLine) {
      const containerRect = lyricsContainer.getBoundingClientRect();
      const lineRect = highlightedLine.getBoundingClientRect();

      // Periksa apakah baris di luar viewport kontainer
      const isOutsideTop = lineRect.top < containerRect.top;
      const isOutsideBottom = lineRect.bottom > containerRect.bottom;

      if (isOutsideTop || isOutsideBottom) {
        // Scroll agar baris terdekat muncul di dalam viewport, dengan animasi smooth
        highlightedLine.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }
    }
  }
});

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
}

playerProgressBarContainer.addEventListener("click", (e) => {
  if (!audioPlayer.duration || songs.length === 0) return;
  const width = playerProgressBarContainer.clientWidth;
  const clickX = e.offsetX;
  audioPlayer.currentTime = (clickX / width) * audioPlayer.duration;
});

playerVolumeSlider.addEventListener("input", (e) => {
  audioPlayer.volume = e.target.value;
});

// Event Listener untuk slider kecepatan
playerSpeedSlider.addEventListener("input", (e) => {
  audioPlayer.playbackRate = parseFloat(e.target.value);
  currentSpeedDisplay.textContent = `${audioPlayer.playbackRate.toFixed(2)}x`;
});

playerShuffleBtn.addEventListener("click", () => {
  isShuffle = !isShuffle;
  playerShuffleBtn.classList.toggle("active-feature", isShuffle);
  console.log("Shuffle: " + isShuffle);
});

playerRepeatBtn.addEventListener("click", () => {
  repeatMode = (repeatMode + 1) % 3;
  updateRepeatButtonUI();
  console.log("Repeat Mode: " + repeatMode);
});

function updateRepeatButtonUI() {
  playerRepeatBtn.classList.remove("active-feature");
  audioPlayer.loop = false;

  if (repeatMode === 0) {
    playerRepeatBtn.innerHTML = '<i class="fas fa-repeat"></i>';
  } else if (repeatMode === 1) {
    playerRepeatBtn.innerHTML = '<i class="fas fa-repeat-1"></i>';
    playerRepeatBtn.classList.add("active-feature");
    audioPlayer.loop = true;
  } else {
    playerRepeatBtn.innerHTML = '<i class="fas fa-repeat"></i>';
    playerRepeatBtn.classList.add("active-feature");
  }
}

playerPlayPauseBtn.addEventListener("click", () => {
  if (isPlaying) {
    pauseTrack();
  } else {
    playTrack();
  }
});
playerPrevBtn.addEventListener("click", prevTrack);
playerNextBtn.addEventListener("click", nextTrackLogic);

audioPlayer.addEventListener("ended", () => {
  if (repeatMode === 1) {
    // Handled by audio.loop = true
  } else {
    nextTrack();
  }
});

// Event Listeners untuk tombol navigasi
backToHomeFromDetailBtn.addEventListener("click", showHomePage); // Dari halaman detail ke home
backToHomeBtn.addEventListener("click", showHomePage); // Dari halaman player ke home

// Event Listener untuk tombol play dari halaman detail (jika Anda ingin menggunakannya)
playFromDetailBtn.addEventListener("click", () => {
  loadSong(songs[currentSongIndex]);
  playTrack();
  showPlayerPage();
});

// --- Initialization ---
function init() {
  console.log("Initializing..."); // Tambahkan log untuk inisialisasi
  console.log("Songs array length:", songs.length); // Periksa jumlah lagu
  console.log("songListElement:", songListElement); // Cek apakah songListElement ditemukan

  renderSongList(); // Ini yang merender daftar lagu

  if (songs.length > 0) {
    loadSong(songs[currentSongIndex]);
  } else {
    // Ini akan ditampilkan jika array songs kosong
    albumArtPlayer.src =
      "https://placehold.co/100x100/3a3a4e/e0e0e0?text=Musik";
    playerTrackTitle.textContent = "Tidak Ada Lagu";
    playerTrackArtist.textContent = "Tambahkan lagu";
    lyricsContainer.innerHTML = "<p>Silakan tambahkan lagu dari daftar.</p>";
  }
  audioPlayer.volume = playerVolumeSlider.value;
  audioPlayer.playbackRate = playerSpeedSlider.value; // Atur kecepatan awal
  currentSpeedDisplay.textContent = `${audioPlayer.playbackRate.toFixed(2)}x`; // Perbarui tampilan kecepatan
  updatePlayPauseIcon();
  updateRepeatButtonUI();
  showHomePage(); // Mulai dari halaman daftar lagu
  console.log("Initialization complete."); // Log selesai inisialisasi
}

init();
