import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
const prisma = new PrismaClient();

async function main() {
  const salt = 10;
  const hash = await bcrypt.hash("@s0m`8!||OG},dtAfnX£**bNpiLA1Pr]9<6gL`eAa8X,B?gABh", salt);
  const admin = await prisma.user.upsert({
    where: { username: "koncoAdmin" },
    update: {},
    create: {
      username: "koncoAdmin",
      password: hash,
    },
  });

  const wisata1 = await prisma.wisata.upsert({
    where: { id: 1 },
    update: {},
    create: {
      title: "Candi Borobudur",
      description:
        "Candi Borobudur adalah candi Buddha terbesar di dunia yang terletak di Magelang, Jawa Tengah, sekitar 40 km dari pusat kota Yogyakarta. Dibangun pada abad ke-9 oleh Dinasti Syailendra, candi ini memiliki struktur megah dengan lebih dari 2.600 relief yang menggambarkan kehidupan Buddha dan ajaran-ajarannya. Borobudur terdiri dari tiga tingkatan utama, yaitu Kamadhatu (ranah nafsu), Rupadhatu (ranah bentuk), dan Arupadhatu (ranah tanpa bentuk), yang mencerminkan perjalanan spiritual menuju pencerahan. Di puncaknya, terdapat stupa utama yang dikelilingi oleh 72 stupa kecil berisi patung Buddha. \nSelain keindahan arsitektur dan nilai sejarahnya, Borobudur juga menjadi tempat perayaan Waisak setiap tahunnya, yang menarik umat Buddha dari seluruh dunia. Wisatawan yang berkunjung ke sini dapat menikmati panorama matahari terbit dari ketinggian, menjelajahi relief-relief bersejarah, serta merasakan ketenangan di tengah suasana candi yang sakral. Dengan latar belakang perbukitan dan persawahan hijau, Candi Borobudur menjadi destinasi wisata yang menawarkan pengalaman budaya dan spiritual yang tak terlupakan.",
      image_url:
        "https://imgs.search.brave.com/3tyH-nZxOhtVJVPQaiWumHDFgtuBDFCghiCh_IeiK_8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTgy/MTAyNDcxL3Bob3Rv/L2Jvcm9idWR1ci5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/WmlTVTcwNVVPU1Zf/U1hnTjVJN3dSNGdN/WjAzRS1ONmk1dWFF/RFVXZW9pRT0",
    },
  });

  const wisata2 = await prisma.wisata.upsert({
    where: { id: 2 },
    update: {},
    create: {
      title: "Candi Prambanan",
      description:
        "Candi Prambanan adalah kompleks candi Hindu terbesar di Indonesia yang terletak sekitar 17 km dari pusat kota Yogyakarta. Dibangun pada abad ke-9, candi ini terdiri dari tiga candi utama yang didedikasikan untuk Dewa Siwa, Wisnu, dan Brahma. Dengan arsitektur yang menjulang tinggi, Candi Prambanan menjadi salah satu mahakarya budaya Hindu yang paling megah di Asia Tenggara. Relief-relief yang terdapat di dinding candi menggambarkan kisah Ramayana, yang hingga kini masih dilestarikan dalam bentuk sendratari yang dipentaskan di malam hari. \nSelain menjadi situs sejarah, Candi Prambanan juga merupakan tempat wisata yang menawarkan pengalaman budaya yang menarik. Pengunjung dapat menjelajahi setiap sudut candi, belajar tentang sejarah kerajaan Hindu di Jawa, dan menikmati pertunjukan Sendratari Ramayana di area terbuka dengan latar belakang candi yang diterangi cahaya. Keindahan Candi Prambanan semakin terasa saat matahari terbenam, menciptakan suasana magis yang membuat pengunjung semakin terpesona.",
      image_url:
        "https://imgs.search.brave.com/b8xWe0F8EKOA-Mw0oajCwqp3hqL6wMuQsehFNlvPjFA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZXhwbG9yZXN1bmRh/LmNvbS9pbWFnZXMv/Y2FuZGktcHJhbWJh/bmFuLUgyLmpwZw",
    },
  });

  const wisata3 = await prisma.wisata.upsert({
    where: { id: 3 },
    update: {},
    create: {
      title: "Malioboro",
      description:
        "Malioboro adalah kawasan jalan ikonik di Yogyakarta yang menjadi pusat wisata belanja, kuliner, dan budaya. Jalan sepanjang sekitar 2,5 km ini dipenuhi oleh pedagang yang menjual berbagai oleh-oleh khas, seperti batik, kaos Dagadu, kerajinan perak, hingga aneka makanan khas Yogyakarta. Malioboro juga dikelilingi oleh berbagai bangunan bersejarah, seperti Benteng Vredeburg, Pasar Beringharjo, dan Istana Kepresidenan Yogyakarta. \nSelain belanja, Malioboro juga menjadi tempat favorit untuk menikmati suasana malam Yogyakarta. Para wisatawan bisa duduk di angkringan sambil menikmati hidangan khas seperti nasi kucing dan wedang ronde, atau sekadar berjalan-jalan menikmati suasana kota yang hidup. Pada malam hari, jalan ini semakin ramai dengan pertunjukan seni jalanan, seperti musik, tari, dan pantomim, yang menambah daya tarik Malioboro sebagai pusat wisata yang tak pernah sepi.",
      image_url:
        "https://imgs.search.brave.com/-CxkfFj8lv0RGNkxKr_5GwBIfuOvNfbkQFSP63XLQSY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTM5/ODc5MDcwL3Bob3Rv/L2xpdmVseS1qYWxh/bi1tYWxpb2Jvcm8t/eW9neWFrYXJ0YS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/cXpvdWtJMUlDSFNC/VXh0VnB5cl9veWsy/V2FVWGtTY0QxWDND/WWVpX2tsQT0",
    },
  });

  const wisata4 = await prisma.wisata.upsert({
    where: { id: 4 },
    update: {},
    create: {
      title: "Keraton Yogyakarta",
      description:
        "Keraton Yogyakarta adalah istana resmi Kesultanan Ngayogyakarta Hadiningrat dan merupakan pusat budaya Jawa yang masih aktif hingga kini. Kompleks keraton ini memiliki arsitektur khas Jawa dengan berbagai bangunan bersejarah yang menyimpan banyak cerita tentang kejayaan Kesultanan Yogyakarta. Di dalamnya, terdapat museum yang menyimpan berbagai koleksi pusaka, foto-foto keluarga kerajaan, hingga benda-benda bersejarah lainnya. \nSetiap harinya, pengunjung dapat menyaksikan berbagai pertunjukan seni tradisional seperti wayang kulit, gamelan, dan tari-tarian khas Jawa yang dipentaskan di dalam area keraton. Selain itu, wisatawan juga bisa belajar lebih dalam tentang budaya Jawa melalui berbagai artefak yang dipamerkan. Dengan suasana yang masih sangat terjaga keasliannya, Keraton Yogyakarta menjadi destinasi wisata yang kaya akan nilai sejarah dan budaya.",
      image_url:
        "https://imgs.search.brave.com/aZrcQevVhnmY9hNBsEYsh4lYOS8mzKuLN7SkEf2HDnU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTkx/NTE4Mjk2L3Bob3Rv/L3lvZ3lha2FydGEt/a3JhdG9uLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1pN3Nm/SDBna2tYNThzYVVB/M2F0R0JmMVFzVWkt/UXRmQmxxRmVaQTg4/VE9JPQ",
    },
  });

  const wisata5 = await prisma.wisata.upsert({
    where: { id: 5 },
    update: {},
    create: {
      title: "Taman Sari",
      description:
        "Taman Sari merupakan kompleks bekas taman kerajaan yang dulunya digunakan sebagai tempat peristirahatan dan pemandian Sultan Yogyakarta. Dibangun pada abad ke-18, Taman Sari memiliki arsitektur yang unik dengan perpaduan gaya Jawa, Portugis, dan Belanda. Area yang paling terkenal di sini adalah kolam pemandian yang dulunya digunakan oleh Sultan dan para selirnya. \nSelain kolam, Taman Sari juga memiliki lorong-lorong bawah tanah yang dulu berfungsi sebagai jalur rahasia untuk melarikan diri jika terjadi serangan. Salah satu tempat menarik di dalam kompleks ini adalah Sumur Gumuling, sebuah masjid bawah tanah berbentuk melingkar dengan akustik yang unik. Dengan keindahan arsitekturnya, Taman Sari menjadi tempat favorit bagi wisatawan yang ingin merasakan nuansa sejarah dan berfoto di spot-spot yang Instagramable.",
      image_url:
        "https://imgs.search.brave.com/xJXk8c5CTDyT5rDpVUAKIDCYtBtoKO7RlotqA4w8n-Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9scC1j/bXMtcHJvZHVjdGlv/bi5pbWdpeC5uZXQv/MjAxOS0wNi8zZWMx/YWUzODYxOTE0ZThh/NDkzYThjNmEyYzk4/ZDAzYi1wdXJhLXRh/bWFuLWF5dW4uanBn/P2ZpdD1jcm9wJmFy/PTE6MSZ3PTEyMDAm/YXV0bz1mb3JtYXQm/cT03NQ",
    },
  });

  const tour1 = await prisma.tour.upsert({
    where: { id: 1 },
    update: {},
    create: {
      title: "Sejarah Misteri Candi",
      description:
        "Nikmati perjalanan sehari mengunjungi tiga destinasi ikonik Yogyakarta. Tur dimulai dengan eksplorasi Candi Prambanan, candi Hindu terbesar yang kaya akan sejarah dan arsitektur megah. Selanjutnya, perjalanan berlanjut ke Candi Borobudur, candi Buddha terbesar di dunia yang menawarkan pemandangan indah dan suasana spiritual. Sore hari, wisatawan diajak menyusuri Malioboro, pusat wisata belanja dan kuliner khas Yogyakarta, sebelum kembali ke hotel atau bandara.",
      image_url:
        "https://imgs.search.brave.com/nukTu8SV0nIIsm41tCqSH7JHa1ZHW7SjRjmhZeUjfNU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aW5kb25lc2lhLnRy/YXZlbC9jb250ZW50/L2RhbS9pbmR0cmF2/ZWxyZXZhbXAvZW4v/ZGVzdGluYXRpb25z/L2phdmEveW9neWFr/YXJ0YS9wcmFtYmFu/YW4vVGh1bWJfcHJh/bWJhbmFuLmpwZw",
      isGuided: true,
      isOpenGroup: true,
      minAge: 1,
      maxAge: 12,
      wisatas: {
        create: [
          {
            assignedBy: "Admin",
            assignedAt: new Date(),
            wisata: {
              connect: { id: wisata1.id },
            },
          },
          {
            assignedBy: "Admin",
            assignedAt: new Date(),
            wisata: {
              connect: { id: wisata2.id },
            },
          },
          {
            assignedBy: "Admin",
            assignedAt: new Date(),
            wisata: {
              connect: { id: wisata3.id },
            },
          },
        ],
      },
      tourPricings: {
        create: [
          { numPersons: 1, subTotalPrice: 4500000 },
          { numPersons: 2, subTotalPrice: 3000000 },
          { numPersons: 3, subTotalPrice: 2800000 },
          { numPersons: 4, subTotalPrice: 2600000 },
          { numPersons: 5, subTotalPrice: 2400000 },
          { numPersons: 6, subTotalPrice: 2200000 },
        ],
      },
      tourItineraries: {
        create: [
          {
            dayNumber: 1,
            title: "Jelajah Sejarah & Budaya",
            description:
              "Perjalanan wisata dimulai pada hari pertama dengan penjemputan di bandara, stasiun, atau hotel. Destinasi pertama adalah Candi Prambanan, kompleks candi Hindu terbesar di Indonesia dengan arsitektur yang megah dan kisah legenda Roro Jonggrang. Setelah menjelajahi Prambanan, perjalanan dilanjutkan menuju Candi Borobudur, candi Buddha terbesar di dunia yang menyimpan sejarah panjang dan keindahan relief yang memukau. Wisatawan juga akan mengunjungi Gereja Ayam dan menikmati matahari terbenam dari Bukit Rhema, yang menawarkan panorama alam yang menakjubkan. Setelah itu, peserta tur akan diantar menuju hotel untuk check-in dan beristirahat.",
          },
          {
            dayNumber: 2,
            title: "Eksplorasi Budaya & Kota Yogyakarta",
            description:
              "Pada hari kedua, wisatawan akan mengeksplorasi budaya dan sejarah kota Yogyakarta. Pagi hari diawali dengan kunjungan ke Keraton Yogyakarta, tempat tinggal Sultan yang masih aktif sebagai pusat kebudayaan. Setelah itu, perjalanan berlanjut ke Taman Sari, bekas pemandian keluarga kerajaan yang memiliki lorong bawah tanah dan arsitektur unik. Setelah menikmati makan siang, wisatawan akan diajak ke Hutan Pinus Mangunan, destinasi alam yang menawarkan suasana sejuk dengan deretan pohon pinus yang rindang. Menjelang sore, perjalanan dilanjutkan ke Pantai Parangtritis, salah satu pantai ikonik di Yogyakarta yang terkenal dengan mitos Nyi Roro Kidul dan pemandangan matahari terbenam yang spektakuler. Setelah seharian berkeliling, wisatawan kembali ke hotel untuk makan malam dan beristirahat.",
          },
          {
            dayNumber: 3,
            title: "Wisata Belanja & Kuliner",
            description:
              "Pada hari terakhir, wisatawan akan menikmati suasana kota Yogyakarta dengan mengunjungi Malioboro, pusat oleh-oleh dan wisata belanja yang ramai dengan pedagang batik, kerajinan tangan, dan kuliner khas seperti gudeg. Setelah itu, perjalanan dilanjutkan ke Kotagede, kawasan bersejarah yang terkenal dengan produksi peraknya, di mana wisatawan bisa melihat langsung proses pembuatan perhiasan dan kerajinan perak. Sebagai penutup, peserta tur akan diajak menikmati pemandangan kota dari HeHa Sky View, destinasi modern dengan berbagai spot foto menarik. Setelah itu, wisatawan akan diantar kembali ke bandara atau stasiun, mengakhiri perjalanan tiga hari yang penuh dengan pengalaman budaya, sejarah, dan keindahan alam Yogyakarta.",
          },
        ],
      },
    },
  });

  const tour2 = await prisma.tour.upsert({
    where: { id: 2 },
    update: {},
    create: {
      title: "Kota Menyala Malioboro",
      description:
        "Jelajahi keindahan sejarah dan budaya Yogyakarta dengan perjalanan yang mengunjungi candi-candi megah, kawasan budaya, serta pusat wisata belanja dan kuliner. Perjalanan ini dirancang untuk memberikan pengalaman tak terlupakan bagi wisatawan dari berbagai usia.",
      image_url:
        "https://imgs.search.brave.com/LeK_J3slICpMeGSTfTuFcjuLBRwHwPuohHGxqgFZDJE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hdmV0/YWhvdGVsbWFsaW9i/b3JvLmNvbS9pbWFn/ZXMvbWFsaW9ib3Jv/Mi5qcGc",
      isGuided: true,
      isOpenGroup: true,
      minAge: 5,
      maxAge: 65,
      wisatas: {
        create: [
          {
            assignedBy: "Admin",
            assignedAt: new Date(),
            wisata: {
              connect: { id: wisata4.id },
            },
          },
          {
            assignedBy: "Admin",
            assignedAt: new Date(),
            wisata: {
              connect: { id: wisata5.id },
            },
          },
          {
            assignedBy: "Admin",
            assignedAt: new Date(),
            wisata: {
              connect: { id: wisata1.id },
            },
          },
        ],
      },
      tourPricings: {
        create: [
          { numPersons: 1, subTotalPrice: 5000000 },
          { numPersons: 2, subTotalPrice: 3200000 },
          { numPersons: 3, subTotalPrice: 2900000 },
          { numPersons: 4, subTotalPrice: 2700000 },
          { numPersons: 5, subTotalPrice: 2500000 },
          { numPersons: 6, subTotalPrice: 2300000 },
        ],
      },
      tourItineraries: {
        create: [
          {
            dayNumber: 1,
            title: "Jelajah Kota",
            description:
              "Hari pertama diawali dengan penjemputan di bandara atau hotel, dilanjutkan dengan eksplorasi Candi Prambanan dan Candi Borobudur. Sore hari, perjalanan menuju Gereja Ayam dan menikmati sunset dari Bukit Rhema. Tur berakhir dengan check-in hotel dan istirahat.",
          },
          {
            dayNumber: 2,
            title: "Eksplorasi Alam indah",
            description:
              "Hari kedua melanjutkan perjalanan ke Keraton Yogyakarta dan Taman Sari. Siang hari, wisatawan akan menikmati Hutan Pinus Mangunan dan Pantai Parangtritis untuk menikmati pemandangan indah serta suasana sore yang menakjubkan.",
          },
          {
            dayNumber: 3,
            title: "Wisata Belanja & Kuliner",
            description:
              "Hari terakhir diisi dengan kunjungan ke Malioboro dan Kotagede, pusat kerajinan perak. Sebagai penutup, wisatawan akan menikmati pemandangan kota dari HeHa Sky View sebelum diantar kembali ke bandara atau stasiun.",
          },
        ],
      },
    },
  });

  const tour3 = await prisma.tour.upsert({
    where: { id: 3 },
    update: {},
    create: {
      title: "Eksplorasi Sejarah & Budaya Yogyakarta",
      description:
        "Nikmati pengalaman unik menjelajahi sejarah dan budaya Yogyakarta. Dari candi bersejarah hingga pusat seni dan kuliner, tur ini dirancang untuk memberikan wawasan mendalam dan kenangan tak terlupakan.",
      image_url:
        "https://imgs.search.brave.com/OBltjexInqIHzyQpmNLTS30ATj6eXZJN8pblZNQvs0E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hdXRo/ZW50aWMtaW5kb25l/c2lhLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxOC8wOS92/aXNpdC10YW1hbi1z/YXJpLXlvZ3lha2Fy/dGEuanBn",
      isGuided: true,
      isOpenGroup: true,
      minAge: 5,
      maxAge: 65,
      wisatas: {
        create: [
          {
            assignedBy: "Admin",
            assignedAt: new Date(),
            wisata: {
              connect: { id: wisata5.id },
            },
          },
          {
            assignedBy: "Admin",
            assignedAt: new Date(),
            wisata: {
              connect: { id: wisata1.id },
            },
          },
          {
            assignedBy: "Admin",
            assignedAt: new Date(),
            wisata: {
              connect: { id: wisata3.id },
            },
          },
        ],
      },
      tourPricings: {
        create: [
          { numPersons: 1, subTotalPrice: 4800000 },
          { numPersons: 2, subTotalPrice: 3100000 },
          { numPersons: 3, subTotalPrice: 2800000 },
          { numPersons: 4, subTotalPrice: 2600000 },
          { numPersons: 5, subTotalPrice: 2400000 },
          { numPersons: 6, subTotalPrice: 2200000 },
        ],
      },
      tourItineraries: {
        create: [
          {
            dayNumber: 1,
            title: "Menjelajahi Warisan Sejarah",
            description:
              "Tur dimulai dengan penjemputan dari bandara atau hotel. Destinasi pertama adalah Candi Prambanan dan Candi Borobudur, dua situs warisan dunia yang menakjubkan. Sore hari, wisatawan akan mengunjungi Gereja Ayam dan menyaksikan matahari terbenam dari Bukit Rhema sebelum check-in di hotel.",
          },
          {
            dayNumber: 2,
            title: "Menyelami Budaya dan Keindahan Alam",
            description:
              "Pagi dimulai dengan kunjungan ke Keraton Yogyakarta dan Taman Sari untuk memahami budaya Jawa. Setelah makan siang, perjalanan berlanjut ke Hutan Pinus Mangunan dan Pantai Parangtritis untuk menikmati alam dan suasana santai.",
          },
          {
            dayNumber: 3,
            title: "Wisata Kuliner dan Belanja",
            description:
              "Hari terakhir, wisatawan akan mengunjungi Malioboro untuk berbelanja oleh-oleh khas Yogyakarta. Tur berlanjut ke Kotagede, pusat kerajinan perak, sebelum ditutup dengan pemandangan indah dari HeHa Sky View. Wisatawan kemudian diantar kembali ke bandara atau stasiun.",
          },
        ],
      },
    },
  });

  const blogTravel1 = await prisma.blog.create({
    data: {
      title: "Tips and Trick Jelajah Kota Jogja",
      body: `# Menjelajahi Dunia: Petualangan yang Memperkaya Jiwa  
  
  Menjelajahi dunia bukan sekadar perjalanan fisik, tetapi juga **petualangan yang memperkaya jiwa**. Dari **pantai berpasir putih** hingga **pegunungan yang menjulang tinggi**, setiap destinasi menawarkan pengalaman unik.  
  
  ## Destinasi Wisata Menarik 🌍  
  
  Beberapa tempat yang wajib dikunjungi:  
  
  - 🏝 **Pantai Pasir Putih** – Nikmati keindahan laut yang jernih dan ombak yang tenang.  
  - ⛰ **Pegunungan Megah** – Jelajahi alam yang menakjubkan dengan udara segar.  
  - 🏙 **Kota Bersejarah** – Pelajari budaya dan sejarah yang kaya di setiap sudut kota.  
  
  ## Tips Perjalanan yang Berguna 🎒  
  
  Agar perjalanan lebih nyaman dan menyenangkan, ikuti beberapa tips berikut:  
  
  1. **Rencanakan Itinerary** – Buat daftar tempat yang ingin dikunjungi.  
  2. **Bawa Barang Secukupnya** – Jangan membawa terlalu banyak barang agar lebih fleksibel.  
  3. **Siapkan Dana Cadangan** – Untuk mengantisipasi pengeluaran tak terduga.  
  4. **Hormati Budaya Lokal** – Pelajari kebiasaan dan adat istiadat setempat.  
  
  ## Nikmati Setiap Momen ✨  
  
  Perjalanan bukan hanya tentang tempat yang dikunjungi, tetapi juga tentang **pengalaman dan kenangan** yang diciptakan. Dengan perencanaan yang tepat, perjalanan Anda akan menjadi lebih nyaman, menyenangkan, dan penuh kenangan yang tak terlupakan.  
  
  > "Dunia adalah buku, dan mereka yang tidak bepergian hanya membaca satu halaman." – Saint Augustine`,
      image_url:
        "https://imgs.search.brave.com/MkLaMPv9N7VhyDhCIrwvfIX5FfhZCfppHBLByltj9bE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9vcmRp/bmFyeXRyYXZlbGVy/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxNy8wMy9UcmF2/ZWwtUGhvdG9ncmFw/aGVyLVBhY2tpbmct/TGlzdC5qcGc",
      tag: "Travel",
      readingTime: 5,
      authorId: admin.id,
    },
  });

  const blogKuliner1 = await prisma.blog.create({
    data: {
      title: "Menjelajahi Kuliner: Sensasi Rasa dari Berbagai Penjuru Dunia",
      body: `# Menjelajahi Kuliner: Sensasi Rasa dari Berbagai Penjuru Dunia 🍽️  
  
    Makanan bukan hanya kebutuhan, tetapi juga bagian dari budaya dan identitas suatu daerah. Dari **hidangan tradisional** hingga **kuliner modern**, setiap suapan membawa cerita dan sejarah yang unik.  
  
    ## Kuliner yang Wajib Dicoba 😋  
  
    Berikut beberapa hidangan khas yang patut dicoba:  
  
    - 🍜 **Ramen Jepang** – Kuah gurih dengan mie kenyal dan aneka topping lezat.  
    - 🥖 **Baguette Prancis** – Roti ikonik dengan tekstur renyah di luar dan lembut di dalam.  
    - 🌮 **Taco Meksiko** – Perpaduan tortilla, daging, dan saus pedas yang menggugah selera.  
    - 🍛 **Rendang Indonesia** – Daging sapi dengan bumbu kaya rempah, dimasak perlahan hingga empuk.  
  
    ## Tips Menikmati Kuliner Lokal 🍴  
  
    1. **Coba Makanan Khas Daerah** – Jangan lewatkan hidangan otentik saat berkunjung ke suatu tempat.  
    2. **Cari Rekomendasi Lokal** – Penduduk setempat tahu tempat makan terbaik.  
    3. **Jangan Takut Eksperimen** – Cobalah rasa baru yang belum pernah dicicipi sebelumnya.  
    4. **Perhatikan Kebersihan** – Pastikan makanan yang dikonsumsi higienis dan aman.  
  
    ## Nikmati Setiap Gigitan! 🤤  
  
    Kuliner adalah cara terbaik untuk mengenal budaya. Setiap rasa dan aroma membawa kita lebih dekat ke asal-usul suatu tempat. Jadi, jangan ragu untuk **menjelajahi dunia melalui makanan** dan temukan kelezatan di setiap hidangan!  
  
    > "Makanan adalah satu-satunya seni yang bisa kita nikmati dengan semua indra kita."`,
      image_url:
        "https://imgs.search.brave.com/4LFSbq1ciXmLUSgGDf5FmD8nmvcH0W3Yz-PDmPyvCoU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbmRv/bmVzaWFrYXlhLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/My8wNC9nX0FydGJv/YXJkXzEuanBn",
      tag: "Kuliner",
      readingTime: 4,
      authorId: admin.id,
    },
  });

  const blogSejarah1 = await prisma.blog.create({
    data: {
      title: "Mengungkap Sejarah: Peristiwa yang Membentuk Dunia",
      body: `# Mengungkap Sejarah: Peristiwa yang Membentuk Dunia 📜  
  
  Sejarah adalah cerminan perjalanan manusia dari masa ke masa. **Peristiwa besar** di masa lalu telah membentuk dunia yang kita kenal hari ini. Dari **peradaban kuno** hingga **revolusi modern**, setiap era memiliki kisah yang menarik untuk digali.  
  
  ## Peristiwa Bersejarah yang Tak Terlupakan 🏛️  
  
  Beberapa momen penting dalam sejarah dunia:  
  
  - 🏺 **Peradaban Mesir Kuno** – Pembangunan Piramida dan kemajuan ilmu astronomi.  
  - ⚔️ **Perang Dunia II** – Konflik global yang mengubah tatanan politik dunia.  
  - 🎌 **Revolusi Industri** – Perubahan besar dalam teknologi dan ekonomi.  
  - 📜 **Proklamasi Kemerdekaan** – Momen bersejarah dalam perjuangan bangsa untuk merdeka.  
  
  ## Mengapa Sejarah Penting? 🤔  
  
  1. **Belajar dari Masa Lalu** – Sejarah mengajarkan kita untuk tidak mengulangi kesalahan yang sama.  
  2. **Memahami Identitas Bangsa** – Mengetahui asal-usul membantu kita lebih menghargai budaya sendiri.  
  3. **Menginspirasi Generasi Mendatang** – Kisah para tokoh sejarah dapat menjadi motivasi bagi kita.  
  4. **Membantu Memprediksi Masa Depan** – Tren sejarah sering berulang dalam siklus yang berbeda.  
  
  ## Sejarah sebagai Warisan Budaya 🏺  
  
  Setiap peristiwa yang terjadi meninggalkan jejak yang membentuk **identitas dan peradaban**. Menjaga dan mempelajari sejarah adalah cara kita untuk **menghormati perjuangan leluhur** serta **menata masa depan yang lebih baik**.  
  
  > "Sejarah adalah guru kehidupan." – Cicero`,
      image_url:
        "https://imgs.search.brave.com/03QKSPd-1g-2Whh1i4nCtw5hhoPGTi_WsH6p6RRmd5Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YnJpdGFubmljYS5j/b20vNjUvMjI2NzY1/LTEzOC1CREVBRUM4/NC9BbmNpZW50LUdy/ZWVrLXNwb3J0cy5q/cGc_dz00MDAmaD0y/MjUmYz1jcm9w",
      tag: "Sejarah",
      readingTime: 5,
      authorId: admin.id,
    },
  });

  const blogBudaya1 = await prisma.blog.create({
    data: {
      title: "Keanekaragaman Budaya: Warisan yang Menyatukan Dunia",
      body: `# Keanekaragaman Budaya: Warisan yang Menyatukan Dunia 🌏  
  
  Budaya adalah **identitas sebuah bangsa**. Setiap daerah memiliki tradisi, bahasa, seni, dan adat istiadat yang unik. Keanekaragaman ini menjadikan dunia lebih berwarna dan memperkaya perspektif kita tentang kehidupan.  
  
  ## Budaya Unik di Berbagai Belahan Dunia 🌍  
  
  Beberapa budaya menarik yang patut diketahui:  
  
  - 🎎 **Upacara Minum Teh di Jepang** – Ritual yang mencerminkan kesederhanaan dan keharmonisan.  
  - 🪘 **Tari Saman dari Indonesia** – Tarian khas Aceh dengan gerakan cepat yang seragam.  
  - 🎭 **Festival La Tomatina di Spanyol** – Perayaan unik dengan perang tomat terbesar di dunia.  
  - 🏮 **Perayaan Imlek di China** – Tahun Baru dengan simbol keberuntungan dan kebersamaan.  
  
  ## Mengapa Budaya Itu Penting? 🎨  
  
  1. **Menjaga Identitas** – Budaya adalah jati diri yang membedakan satu masyarakat dengan lainnya.  
  2. **Mempererat Persatuan** – Dengan memahami budaya lain, kita bisa lebih menghargai perbedaan.  
  3. **Mewariskan Nilai-Nilai Luhur** – Tradisi mengajarkan moral dan etika yang diwariskan dari generasi ke generasi.  
  4. **Menjadi Daya Tarik Wisata** – Keunikan budaya menarik wisatawan dan memperkenalkan kekayaan suatu bangsa.  
  
  ## Lestarikan Budaya Kita! 🏛  
  
  Di era globalisasi, budaya lokal sering kali tergerus oleh perkembangan zaman. Oleh karena itu, kita harus **melestarikan tradisi**, mengenalkan budaya kepada generasi muda, dan bangga dengan warisan leluhur kita.  
  
  > "Budaya adalah cara kita menjalani kehidupan." – Mahatma Gandhi`,
      image_url:
        "https://imgs.search.brave.com/WmReYajkhOjKyKDQJAz2LBZAWE7iL8ttBI5_fHcfyQU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YW1uaC5vcmcvdmFy/L2V6Zmxvd19zaXRl/L3N0b3JhZ2UvaW1h/Z2VzL21lZGlhL2Ft/bmgvaW1hZ2VzL2V4/cGxvcmUvb2xvZ3kt/aW1hZ2VzL2FyY2hh/ZW9sb2d5L3RoZS1h/bmNpZW50LWNpdHkt/b2YtcGV0cmEvMDEt/Y2FtZWxzLWF0LWNp/c3Rlcm5zLzQ3ODAy/MTctNC1lbmctVVMv/MDEtY2FtZWxzLWF0/LWNpc3Rlcm5zX2Z1/bGxfNDk1LmpwZw",
      tag: "Budaya",
      readingTime: 4,
      authorId: admin.id,
    },
  });

  const blogAlam1 = await prisma.blog.create({
    data: {
      title: "Keindahan Alam Jogjakarta: Menjelajahi Pesona Alam yang Memukau",
      body: `# Keindahan Alam Jogjakarta: Menjelajahi Pesona Alam yang Memukau 🌿  
  
  Jogjakarta bukan hanya kaya akan budaya dan sejarah, tetapi juga menyimpan **keindahan alam yang luar biasa**. Dari pantai eksotis hingga perbukitan hijau, Jogja menawarkan pengalaman alam yang tak terlupakan bagi para petualang.  
  
  ## Destinasi Alam Terbaik di Jogja 🌍  
  
  ### 🏖 **Pantai Parangtritis**  
  Pantai paling terkenal di Jogja ini menawarkan **pemandangan matahari terbenam yang spektakuler**. Selain itu, wisatawan bisa mencoba sandboarding di **Gumuk Pasir Parangkusumo** yang unik.  
  
  ### ⛰ **Bukit Panguk Kediwung**  
  Bukit ini menyajikan panorama kabut pagi yang memukau, memberikan suasana seperti berada di negeri di atas awan.  
  
  ### 🌳 **Hutan Pinus Mangunan**  
  Terletak di kawasan Dlingo, Bantul, hutan pinus ini menawarkan udara segar dan pemandangan yang menenangkan, cocok untuk bersantai atau berfoto di tengah pepohonan tinggi.  
  
  ### 💦 **Air Terjun Sri Gethuk**  
  Terletak di Gunungkidul, air terjun ini memiliki keindahan alami dengan aliran air jernih yang berpadu dengan tebing-tebing hijau.  
  
  ### 🏔 **Gunung Merapi**  
  Bagi pecinta petualangan, mendaki Gunung Merapi adalah pengalaman yang luar biasa. Selain itu, wisatawan juga bisa mengunjungi **Lava Tour Merapi** untuk menyaksikan jejak letusan gunung berapi ini.  
  
  ## Menjaga Alam Jogja untuk Masa Depan 🌱  
  
  Agar keindahan alam Jogja tetap lestari, kita harus ikut serta dalam menjaga kebersihan dan kelestarian lingkungan. Beberapa langkah sederhana yang bisa dilakukan:  
  
  - 🚯 Tidak membuang sampah sembarangan.  
  - 🌳 Menghormati ekosistem alam dan tidak merusak tanaman.  
  - 🔥 Menghindari aktivitas yang dapat memicu kebakaran hutan.  
  
  Jogjakarta bukan hanya kota yang penuh kenangan, tetapi juga rumah bagi **keindahan alam yang harus dijaga** agar tetap bisa dinikmati oleh generasi mendatang.  
  
  > "Jaga alam, maka alam akan menjagamu." 🌿✨`,
      image_url:
        "https://imgs.search.brave.com/VbaRuJ9M0Sb6in3gpJre1P8xgQM_nX02D-7TmOFhVAE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmd1/aW0uY28udWsvaW1n/L21lZGlhLzk5MWE3/ZjU4YWIyM2MzODAy/ZDdkNTc4ZDBhYmY5/ZDliODA1ZWJlMmQv/MF8xMTdfODI1Nl80/OTU0L21hc3Rlci84/MjU2LmpwZz93aWR0/aD00NjUmZHByPTEm/cz1ub25lJmNyb3A9/bm9uZQ",
      tag: "Alam",
      readingTime: 5,
      authorId: admin.id,
    },
  });

  const blogMarketplace1 = await prisma.blog.create({
    data: {
      title: "Gerabah Autentik Khas Jogja: Sentuhan Tradisi untuk Rumah Anda",
      body: `# Keindahan Gerabah Khas Jogja: Sentuhan Tradisi untuk Rumah Anda 🏺✨  
  
  Ingin menghadirkan nuansa etnik dan klasik ke dalam rumah Anda? **Gerabah khas Jogjakarta** adalah pilihan sempurna! Dibuat dengan tangan-tangan terampil para pengrajin, setiap produk memiliki **nilai seni dan keunikan tersendiri** yang tidak bisa ditemukan pada produk pabrik.  
  
  ## Mengapa Harus Memilih Gerabah? 💡  
  
  ✅ **Unik & Artistik** – Setiap gerabah dibuat secara handmade, memberikan sentuhan khas yang berbeda pada setiap produk.  
  ✅ **Tahan Lama & Ramah Lingkungan** – Dibuat dari tanah liat alami, gerabah lebih awet dan tidak mencemari lingkungan.  
  ✅ **Cocok untuk Dekorasi Rumah** – Dengan desain klasik hingga modern, gerabah bisa menjadi elemen dekorasi yang estetik dan elegan.  
  ✅ **Meningkatkan Kesan Tradisional & Natural** – Warna earthy dan tekstur khas gerabah memberi kesan alami yang menenangkan.  
  
  ## Pilihan Produk Gerabah Terbaik 🏡  
  
  ✨ **Vas Bunga Elegan** – Sempurna untuk mempercantik ruang tamu dengan nuansa alami.  
  ✨ **Tempat Lilin Estetik** – Memberikan pencahayaan hangat dengan sentuhan seni tradisional.  
  ✨ **Mangkuk & Piring Gerabah** – Cocok untuk menikmati makanan dengan cita rasa khas nusantara.  
  ✨ **Guci & Kendi Tradisional** – Ideal sebagai pajangan atau wadah air dengan kesan klasik.  
  
  ## Dukung Pengrajin Lokal! 🛍  
  
  Dengan membeli gerabah asli dari pengrajin Jogjakarta, Anda tidak hanya mendapatkan produk berkualitas, tetapi juga ikut serta dalam **melestarikan budaya dan mendukung ekonomi lokal**.  
  
  🛒 **Segera miliki koleksi gerabah eksklusif ini!**  
  📦 **Stok terbatas – Pesan sekarang dan rasakan keindahannya di rumah Anda!**  
  
  > "Setiap gerabah memiliki cerita, dan kini, giliran Anda untuk menjadikannya bagian dari kisah rumah Anda." 🏺❤️`,
      image_url:
        "https://imgs.search.brave.com/eEiA6vhlUPD5pesHRAXM1xtInEtimE_iL5wCt95aflY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWsudGVtcG8uY28v/ZGF0YS8yMDIxLzAx/LzEwL2lkXzk5MzE3/My85OTMxNzNfNzIw/LmpwZw",
      tag: "lapak",
      readingTime: 4,
      authorId: admin.id,
    },
  });

  console.log({ admin });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
