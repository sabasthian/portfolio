// Daftar proyek.
// Foto: taruh gambar di public/screenshots/<slug>/ lalu daftarkan di `images`.
//   - Foto pertama dipakai sebagai sampul kartu.
//   - Bisa berupa string ('screenshots/krb/01.webp') atau objek dengan caption 2 bahasa.
// Selama `images` kosong, kartu & popup memakai ilustrasi bawaan (`preview`).

const GH = 'https://github.com/sabasthian';
const REPO_PROCURE = 'https://github.com/sabasthian/it-procurement-request-system';
const REPO_PORTO = 'https://github.com/sabasthian/portfolio.git';

export const projects = [

  // Featured Projects
  {
    slug: 'krb',
    featured: true,
    cats: ['Featured Projects'],
    preview: 'krb',
    images: [],
    cardTags: ['Next.js 16', 'TypeScript', 'Payload CMS 3', 'PostgreSQL 16'],
    links: [{ kind: 'gh', href: GH }],
    en: {
      title: 'Komunitas Reptil Bandung',
      meta: 'Full stack',
      desc: 'Public website, admin CMS and contest judging system with blind judging, weighted scoring and live results.',
      badge: 'Featured project',
      sub: 'Community platform and contest judging system',
      facts: [['Role', 'Full Stack Developer'], ['Type', 'Non-commercial']],
      tags: ['Next.js 16', 'React 19', 'TypeScript', 'Payload CMS 3', 'PostgreSQL 16', 'Tailwind CSS 4', 'Cloudflare R2'],
      sections: [
        { h: 'overview', p: 'A non-commercial platform for the Bandung reptile community. It combines a public website, an admin content management system (CMS), a reptile catalog, educational resources, articles, galleries, event registration, membership management and a contest judging system.' },
        { h: 'stack', layers: [['Front-end', 'Next.js 16 · React 19 · TypeScript · Tailwind CSS 4'], ['Back-end', 'Payload CMS 3 · Next.js 16'], ['Database', 'PostgreSQL 16'], ['Storage', 'Cloudflare R2']] },
        { h: 'key features', list: ['Reptile catalog, educational resources, articles and galleries', 'Event registration and membership management', 'Contest judging with QR/PIN authentication and blind judging', 'Weighted scoring, live results and versioned score corrections'] },
        { h: 'security & reliability', list: ['Role-based access control (RBAC) and multi-factor authentication (MFA)', 'Maker-checker review workflows', 'Append-only audit logs and data validation', 'Privacy controls aligned with UU PDP (Indonesia’s Personal Data Protection Law)', 'Scheduled jobs and automated daily backups'] },
        { h: 'testing', figures: [['137', 'integration tests'], ['63', 'end-to-end tests']] },
      ],
    },
    id: {
      title: 'Komunitas Reptil Bandung',
      meta: 'Full stack',
      desc: 'Website publik, CMS admin, dan sistem penjurian kontes dengan blind judging, skor berbobot, dan hasil live.',
      badge: 'Proyek unggulan',
      sub: 'Platform komunitas dan sistem penjurian kontes',
      facts: [['Peran', 'Full Stack Developer'], ['Jenis', 'Non-komersial']],
      sections: [
        { h: 'ringkasan', p: 'Platform non-komersial untuk Komunitas Reptil Bandung. Platform ini menggabungkan website publik, sistem manajemen konten (CMS) admin, katalog reptil, materi edukasi, artikel, galeri, pendaftaran acara, manajemen keanggotaan, dan sistem penjurian kontes.' },
        { h: 'teknologi', layers: [['Front-end', 'Next.js 16 · React 19 · TypeScript · Tailwind CSS 4'], ['Back-end', 'Payload CMS 3 · Next.js 16'], ['Database', 'PostgreSQL 16'], ['Penyimpanan', 'Cloudflare R2']] },
        { h: 'fitur utama', list: ['Katalog reptil, materi edukasi, artikel, dan galeri', 'Pendaftaran acara dan manajemen keanggotaan', 'Penjurian kontes dengan autentikasi QR/PIN dan blind judging', 'Skor berbobot, hasil live, dan koreksi skor berversi'] },
        { h: 'keamanan & keandalan', list: ['Role-based access control (RBAC) dan multi-factor authentication (MFA)', 'Alur review maker-checker', 'Audit log append-only dan validasi data', 'Kontrol privasi sesuai UU PDP (Undang-Undang Pelindungan Data Pribadi)', 'Scheduled job dan backup harian otomatis'] },
        { h: 'pengujian', figures: [['137', 'integration test'], ['63', 'end-to-end test']] },
      ],
    },
  },


  {
    slug: 'procure',
    cats: ['Featured Projects'],
    preview: 'procure',
    images: [
      { src: 'screenshots/procure/01-employee.webp', caption: { en: 'Employee dashboard: submit and track requests', id: 'Dashboard employee: ajukan dan lacak permintaan' } },
      { src: 'screenshots/procure/02-supervisor.webp', caption: { en: 'Supervisor dashboard: review pending requests', id: 'Dashboard supervisor: review permintaan yang menunggu' } },
      { src: 'screenshots/procure/03-procurement.webp', caption: { en: 'Procurement dashboard: process approved requests', id: 'Dashboard procurement: proses permintaan yang disetujui' } },
      { src: 'screenshots/procure/04-admin.webp', caption: { en: 'Admin dashboard: users, roles and request monitoring', id: 'Dashboard admin: user, peran, dan monitoring permintaan' } },
      { src: 'screenshots/procure/05-login.webp', caption: { en: 'Login page', id: 'Halaman login' } },
    ],
    cardTags: ['React', 'Express', 'MySQL', 'Sequelize'],
    links: [ { kind: 'gh', href: REPO_PROCURE }],
    en: {
      title: 'IT Procurement Request System',
      meta: 'Personal project · Public repo',
      desc: 'Full-stack app for submitting, approving and tracking IT equipment requests across four roles, secured with JWT and RBAC.',
      badge: 'Personal project',
      sub: 'Multi-role approval workflow for IT equipment requests',
      facts: [['Role', 'Full Stack Developer'], ['Code', 'Public on GitHub']],
      tags: ['React', 'Vite', 'React Router', 'Node.js', 'Express.js', 'MySQL', 'Sequelize', 'JWT', 'bcryptjs'],
      sections: [
        { h: 'overview', p: 'A full-stack web application that centralizes requesting, reviewing, approving and tracking IT equipment procurement, with a separate dashboard for each of its four roles.' },
        { h: 'stack', layers: [['Front-end', 'React · Vite · React Router DOM'], ['Back-end', 'Node.js · Express.js · REST API'], ['Database', 'MySQL · Sequelize ORM'], ['Tools', 'Postman · Git & GitHub']] },
        { h: 'workflow', list: ['Employee submits a request: PENDING', 'Supervisor approves it, or rejects it with a reason: APPROVED or REJECTED', 'Procurement processes the approved request: PROCESSING', 'The request is closed: COMPLETED'] },
        { h: 'roles', list: ['Employee: create requests, search and filter them, track their status', 'Supervisor: review pending requests, approve or reject with a reason', 'Procurement: process approved requests and mark them completed', 'Administrator: monitor users and requests, view statistics, manage roles, activate or deactivate accounts'] },
        { h: 'security', list: ['JWT-protected REST API endpoints', 'Role-based authorization middleware (RBAC)', 'Password hashing with bcryptjs'] },
      ],
    },
    id: {
      title: 'Sistem Pengajuan Pengadaan IT',
      meta: 'Proyek pribadi · Repo publik',
      desc: 'Aplikasi full-stack untuk mengajukan, menyetujui, dan melacak permintaan perangkat IT dengan empat peran, diamankan dengan JWT dan RBAC.',
      badge: 'Proyek pribadi',
      sub: 'Alur persetujuan multi-peran untuk pengajuan perangkat IT',
      facts: [['Peran', 'Full Stack Developer'], ['Kode', 'Publik di GitHub']],
      sections: [
        { h: 'ringkasan', p: 'Aplikasi web full-stack yang memusatkan proses pengajuan, review, persetujuan, dan pelacakan pengadaan perangkat IT, dengan dashboard terpisah untuk masing-masing dari empat peran.' },
        { h: 'teknologi', layers: [['Front-end', 'React · Vite · React Router DOM'], ['Back-end', 'Node.js · Express.js · REST API'], ['Database', 'MySQL · Sequelize ORM'], ['Tools', 'Postman · Git & GitHub']] },
        { h: 'alur kerja', list: ['Employee mengajukan permintaan: PENDING', 'Supervisor menyetujui, atau menolak dengan alasan: APPROVED atau REJECTED', 'Procurement memproses permintaan yang disetujui: PROCESSING', 'Permintaan ditutup: COMPLETED'] },
        { h: 'peran', list: ['Employee: membuat pengajuan, mencari dan memfilter, melacak status', 'Supervisor: mereview pengajuan yang menunggu, menyetujui atau menolak dengan alasan', 'Procurement: memproses pengajuan yang disetujui dan menandainya selesai', 'Administrator: memantau user dan pengajuan, melihat statistik, mengatur peran, mengaktifkan atau menonaktifkan akun'] },
        { h: 'keamanan', list: ['Endpoint REST API dilindungi JWT', 'Middleware otorisasi berbasis peran (RBAC)', 'Hashing password dengan bcryptjs'] },
      ],
    },
  },


  {
    slug: 'stream',
    cats: ['Featured Projects'],
    preview: 'stream',
    images: [
      { src: 'screenshots/profil/01-hero_p.png', caption: { en: 'Employee dashboard: submit and track requests', id: 'Dashboard employee: ajukan dan lacak permintaan' } },
      { src: 'screenshots/profil/02-contect.png', caption: { en: 'Supervisor dashboard: review pending requests', id: 'Dashboard supervisor: review permintaan yang menunggu' } },
    ],
    cardTags: ['React', 'Framer Motion', 'Vite', 'Tailwind CSS'],
    links: [{ kind: 'code', href: 'https://williamsabasthianhutapea.vercel.app/', primary: true }, { kind: 'gh', href: REPO_PORTO }],
    en: {
      title: 'Personal Portfolio Website',
      meta: 'Premium, interactive developer profile and showcase portal',
      desc: 'A premium, interactive personal portfolio website that presents information in an engaging and responsive manner..',
      badge: 'Personal project',
      sub: 'Personal portfolio web application',
      facts: [['Role', 'Frontend Developer'], ['Type', 'Personal project']],
      tags: ['React', 'Framer Motion', 'Vite', 'Tailwind CSS'],
      sections: [
        { h: 'overview', p: 'An interactive, premium personal portfolio website designed to showcase expertise, work experience, projects, and professional certifications. It features responsive micro-animations, a glassmorphism design, a dynamic skills marquee, and elegant project detail sliders.' },
        { h: 'stack', layers: [['Front-end', 'React 19 · Vite · Tailwind CSS 4 · Axios']] },
        { h: 'key features', list: ['Detail pop-ups: every project and certificate opens a detail view with tech stack, key features, facts, links and previous/next navigation.',
                                    'Certificate slider: horizontal scroll with arrow buttons and a progress bar.',
                                    'Quick contact: copy the email or phone number in one click.',
                                    'Responsive & accessible: works from phone to desktop, can be used fully with the keyboard, and respects the “reduce motion” setting.'
                                  ]},
      ],
    },
    id: {
      title: 'Personal Portfolio Website',
      meta: 'Premium, interactive developer profile and showcase portal',
      desc: 'Situs portofolio personal interaktif premium yang menyajikan informasi secara menarik dan responsif.',
      badge: 'Proyek pribadi',
      sub: 'Aplikasi web portofolio pribadi',
      facts: [['Peran', 'Frontend Developer'], ['Jenis', 'Proyek pribadi']],
      sections: [
        { h: 'ringkasan', p: 'Sebuah situs portofolio personal premium interaktif yang dirancang untuk memamerkan keahlian, pengalaman kerja, proyek, dan kredensial sertifikat. Dilengkapi dengan efek animasi mikro yang responsif, desain kaca (glassmorphism), marquee keahlian dinamis, dan slider detail proyek yang elegan.' },
        { h: 'teknologi', layers: [['Front-end', 'React 19 · Vite · Tailwind CSS 4 · Axios']]},
        { h: 'fitur utama', list: ['Jendela detail (pop-up): setiap proyek dan sertifikat akan membuka tampilan detail yang mencakup teknologi yang digunakan, fitur utama, fakta, tautan, serta navigasi untuk beralih ke item sebelumnya atau berikutnya',
                                    'Slider sertifikat: tampilan gulir horizontal yang dilengkapi dengan tombol panah dan bilah progres.', 
                                    'Kontak cepat: salin alamat email atau nomor telepon hanya dengan satu klik.',
                                    'Responsif & aksesibel: dapat digunakan di berbagai perangkat—mulai dari ponsel hingga komputer desktop—mendukung navigasi penuh menggunakan papan ketik (keyboard), serta menghormati pengaturan “kurangi gerakan” (reduce motion) pada perangkat pengguna.',
                                  ]},
      ],
    },
  },


  {
    slug: 'iot',
    cats: ['Featured Projects'],
    preview: 'iot',
    images: [],
    cardTags: ['Arduino Uno', 'ESP32-CAM', 'Telegram Bot'],
    links: [{ kind: 'gh', href: GH }],
    en: {
      title: 'IoT Fish Pond Monitoring & Control System',
      meta: 'Final year project · Jan – Apr 2026',
      desc: 'Real-time monitoring of water temperature, level and clarity, with automated care and a Telegram Bot.',
      badge: 'Final year project',
      sub: 'Real-time pond monitoring with remote control over Telegram',
      facts: [['Role', 'Developer'], ['Period', 'Jan – Apr 2026']],
      tags: ['Arduino Uno', 'ESP32-CAM', 'Sensors', 'Telegram Bot'],
      sections: [
        { h: 'overview', p: 'An IoT system that monitors water temperature, water level and water clarity in real time, and automates pond care to reduce manual work.' },
        { h: 'stack', layers: [['Hardware', 'Arduino Uno · ESP32-CAM · sensors'], ['Integration', 'Telegram Bot']] },
        { h: 'key features', list: ['Real-time monitoring with Arduino Uno and ESP32-CAM', 'Integrated sensors with automated water temperature and water-quality control', 'Scheduled fish feeding', 'Telegram Bot for remote monitoring, instant notifications and feeding commands', 'Camera-based visual monitoring of pond conditions'] },
      ],
    },
    id: {
      title: 'Sistem Monitoring & Kontrol Kolam Ikan Berbasis IoT',
      meta: 'Proyek akhir · Jan – Apr 2026',
      desc: 'Monitoring suhu, ketinggian, dan kejernihan air secara real-time, dengan perawatan otomatis dan Telegram Bot.',
      badge: 'Proyek akhir',
      sub: 'Monitoring kolam real-time dengan kendali jarak jauh lewat Telegram',
      facts: [['Peran', 'Developer'], ['Periode', 'Jan – Apr 2026']],
      tags: ['Arduino Uno', 'ESP32-CAM', 'Sensor', 'Telegram Bot'],
      sections: [
        { h: 'ringkasan', p: 'Sistem IoT yang memantau suhu, ketinggian, dan kejernihan air secara real-time, serta mengotomatiskan perawatan kolam untuk mengurangi pekerjaan manual.' },
        { h: 'teknologi', layers: [['Hardware', 'Arduino Uno · ESP32-CAM · sensor'], ['Integrasi', 'Telegram Bot']] },
        { h: 'fitur utama', list: ['Monitoring real-time dengan Arduino Uno dan ESP32-CAM', 'Integrasi sensor dengan kontrol suhu dan kualitas air otomatis', 'Pemberian pakan ikan terjadwal', 'Telegram Bot untuk monitoring jarak jauh, notifikasi instan, dan perintah pemberian pakan', 'Monitoring visual kondisi kolam berbasis kamera'] },
      ],
    },
  },

  {
    slug: 'toefl-master',
    cats: ['Featured Projects'],
    preview: 'toefl-master',
    images: [
      { src: 'screenshots/projec/toefl.png', caption: { en: 'Interactive quiz interface with real-time scoring', id: 'Antarmuka kuis interaktif dengan skor real-time' } },    ],
    cardTags: ['HTML5', 'CSS3', 'Vanilla JS', 'Web App'],
    links: [{ kind: 'code', href: 'https://simulasitoefl.vercel.app/', primary: true }, { kind: 'gh', href: 'https://github.com/sabasthian/Simulasi-TOEFL' }],
    en: {
      title: 'Master TOEFL - Online Quiz',
      meta: 'Integrated TOEFL simulation platform with 234 questions',
      desc: 'An interactive web application designed to simulate the TOEFL test experience, offering 234 integrated questions complete with detailed feedback and progress tracking.',
      badge: 'Web Application',
      sub: 'TOEFL Simulation Quiz App',
      facts: [['Role', 'Frontend Developer'], ['Type', 'Educational App']],
      tags: ['HTML5', 'CSS3', 'Vanilla JS', 'DOM Manipulation'],
      sections: [
        { h: 'overview', p: 'An interactive, comprehensive web-based TOEFL simulation platform. It features 234 integrated questions covering Structure, Written Expression, Reading Comprehension, and Listening sections. The app includes a dynamic score tracker, real-time navigation panel, and a detailed feedback system for every answer.' },
        { h: 'stack', layers: [['Front-end', 'HTML5 · CSS3 · Vanilla JavaScript']] },
        { h: 'key features', list: ['Comprehensive question bank: 234 carefully curated questions divided into Structure, Reading, and Listening categories.',
                                    'Interactive navigation panel: A sticky sidebar with numbered boxes (1-234) that changes color (green/red) based on correct or incorrect answers.',
                                    'Instant feedback: Displays the correct answer and a detailed explanation immediately after the user makes a choice.',
                                    'Progress and scoring: Real-time score tracking and a top progress bar to monitor overall test completion.'
                                  ]},
      ],
    },
    id: {
      title: 'Master TOEFL - Kuis Online',
      meta: 'Platform simulasi TOEFL terintegrasi dengan 234 soal',
      desc: 'Aplikasi web interaktif yang dirancang untuk mensimulasikan pengalaman tes TOEFL, menawarkan 234 soal terintegrasi lengkap dengan umpan balik terperinci dan pelacakan kemajuan.',
      badge: 'Aplikasi Web',
      sub: 'Aplikasi Kuis Simulasi TOEFL',
      facts: [['Peran', 'Frontend Developer'], ['Jenis', 'Aplikasi Edukasi']],
      sections: [
        { h: 'ringkasan', p: 'Sebuah platform simulasi TOEFL berbasis web yang interaktif dan komprehensif. Menampilkan 234 soal terintegrasi yang mencakup bagian Structure, Written Expression, Reading Comprehension, dan Listening. Aplikasi ini dilengkapi dengan pelacak skor dinamis, panel navigasi real-time, dan sistem umpan balik terperinci untuk setiap jawaban.' },
        { h: 'teknologi', layers: [['Front-end', 'HTML5 · CSS3 · Vanilla JavaScript']]},
        { h: 'fitur utama', list: ['Bank soal komprehensif: 234 soal yang dikurasi dengan cermat, dibagi ke dalam kategori Structure, Reading, dan Listening.',
                                    'Panel navigasi interaktif: Sidebar lengket (sticky) dengan kotak bernomor (1-234) yang berubah warna (hijau/merah) berdasarkan jawaban benar atau salah.', 
                                    'Umpan balik instan: Menampilkan jawaban yang benar beserta penjelasan detail secara langsung setelah pengguna memilih opsi.',
                                    'Kemajuan dan skor: Pelacakan skor real-time dan bilah kemajuan di bagian atas untuk memantau penyelesaian tes secara keseluruhan.',
                                  ]},
      ],
    },
  },

  {
    slug: 'undangan-raka-kirana',
    cats: ['Featured Projects'],
    preview: 'undangan-raka-kirana',
    images: [
  { src: 'screenshots/projec/sampul.png', caption: {en: 'Personalized cover screen with guest name and retro envelope.',id: 'Sampul personal dengan nama tamu dan amplop retro.'}},
  { src: 'screenshots/projec/hero_w.png', caption: {en: 'Hero section featuring the main title and a live countdown.',id: 'Bagian hero dengan judul utama dan hitungan mundur.'}},
  { src: 'screenshots/projec/mempelai.png', caption: {en: 'Couple section with vintage arch-shaped photo frames.',id: 'Bagian mempelai dengan bingkai foto lengkung vintage.'}},
  { src: 'screenshots/projec/acara.png', caption: {en: 'Event details with countdown, schedule cards, and action buttons.',id: 'Detail acara dengan hitungan mundur, jadwal, dan tombol aksi.'}},
  { src: 'screenshots/projec/ucapan.png', caption: {en: 'Guest wishes form UI showing the demo mode notice.',id: 'UI formulir ucapan tamu dengan pemberitahuan mode demo.'}}
  ],
    cardTags: ['Astro', 'Tailwind CSS', 'GSAP', 'Static Site'],
    links: [{ kind: 'code', href: 'https://sampel-undangan-pernikahan-1.vercel.app/', primary: true }, { kind: 'gh', href: 'https://github.com/sabasthian/sampel-undangan-pernikahan-1' }],
    en: {
      title: 'Selamanya - Raka & Kirana Wedding Invitation',
      meta: 'Retro-themed digital wedding invitation with personalized guest links',
      desc: 'A static, retro-styled digital wedding invitation built with Astro. Every guest receives a personalized link, and the site presents the full invitation flow — cover, couple, love story, events, gallery, RSVP, wishes, gifts, and live streaming — as a polished front-end experience.',
      badge: 'Digital Invitation',
      sub: 'Retro Wedding Invitation Website',
      facts: [['Role', 'Frontend Developer'], ['Status', 'UI Showcase (demo mode)']],
      tags: ['Astro', 'Tailwind CSS', 'GSAP', 'PhotoSwipe'],
      sections: [
        { h: 'overview', p: 'A retro-themed digital wedding invitation for Raka & Kirana, built as a static Astro site and hosted for free on Cloudflare. Each guest opens the same page with a personalized link (?to= and ?id=), and the guest greeting is rendered in the browser. The whole invitation is presented as a front-end showcase: cover, hero, opening words, the couple, love story, event details, gallery, RSVP form, guest wishes, gift section, live streaming, closing, and a "Kenangan" (memories) mode. With no backend API connected yet, the RSVP and wishes forms run in demo mode and store data in the browser only.' },
        { h: 'stack', layers: [['Front-end', 'Astro 7 · Tailwind CSS 4 · GSAP 3 · Vanilla JavaScript']] },
        { h: 'key features', list: ['Personalized guest links: a single static page reads the ?to= and ?id= URL parameters to display a custom greeting for each guest, with no rebuild required.',
                                    'Retro visual identity: 3D-style headings, stickers, rainbow accents, wave dividers, and a self-hosted font pairing (Rubik Mono One + Poppins) for a warm vintage feel.',
                                    'Mode-aware presentation: the same build switches between Undangan, RSVP closed, Wedding Day, and Memories modes based on dates, plus a countdown to the ceremony.',
                                    'Rich display sections: couple profiles, a photo-based love story timeline, event cards with Maps links, a PhotoSwipe gallery that loads only when scrolled into view, background music toggle, and a lightweight YouTube embed.',
                                    'Gift and calendar extras: bank account and e-wallet cards with copy-to-clipboard, a QRIS panel, and "save the date" .ics downloads.',
                                    'Demo-mode forms: the RSVP and wishes forms are fully interactive for presentation purposes, but with no API configured they save to the browser and show a demo notice instead of sending data.',
                                  ]},
      ],
    },
    id: {
      title: 'Selamanya - Undangan Pernikahan Raka & Kirana',
      meta: 'Undangan pernikahan digital bertema retro dengan link tamu personal',
      desc: 'Undangan pernikahan digital statis bertema retro yang dibangun dengan Astro. Setiap tamu menerima link personal, dan seluruh alur undangan ditampilkan sebagai pengalaman front-end yang rapi — sampul, mempelai, love story, acara, galeri, RSVP, ucapan, hadiah, dan live streaming.',
      badge: 'Undangan Digital',
      sub: 'Website Undangan Pernikahan Retro',
      facts: [['Peran', 'Frontend Developer'], ['Status', 'Showcase Tampilan (mode demo)']],
      sections: [
        { h: 'ringkasan', p: 'Undangan pernikahan digital bertema retro untuk Raka & Kirana, dibangun sebagai situs statis Astro dan di-hosting gratis di Cloudflare. Setiap tamu membuka halaman yang sama lewat link personal (?to= dan ?id=), lalu sapaan tamu dirender di browser. Seluruh undangan disajikan sebagai showcase tampilan: sampul, hero, pembuka, mempelai, love story, detail acara, galeri, formulir RSVP, ucapan tamu, bagian hadiah, live streaming, penutup, dan mode "Kenangan". Karena API backend belum terhubung, formulir RSVP dan ucapan berjalan dalam mode demo dan hanya menyimpan data di browser.' },
        { h: 'teknologi', layers: [['Front-end', 'Astro 7 · Tailwind CSS 4 · GSAP 3 · Vanilla JavaScript']]},
        { h: 'fitur utama', list: ['Link tamu personal: satu halaman statis membaca parameter URL ?to= dan ?id= untuk menampilkan sapaan khusus tiap tamu, tanpa perlu build ulang.',
                                    'Identitas visual retro: judul bergaya 3D, stiker, aksen pelangi, pembatas ombak, dan pasangan font self-host (Rubik Mono One + Poppins) untuk nuansa vintage yang hangat.',
                                    'Tampilan sadar mode: build yang sama berpindah antara mode Undangan, RSVP ditutup, Hari H, dan Kenangan berdasarkan tanggal, plus hitungan mundur menuju acara.',
                                    'Bagian tampilan yang kaya: profil mempelai, timeline love story berbasis foto, kartu acara dengan tautan Maps, galeri PhotoSwipe yang baru dimuat saat mendekati layar, tombol musik latar, dan embed YouTube ringan.',
                                    'Ekstra hadiah dan kalender: kartu rekening bank dan e-wallet dengan salin-ke-clipboard, panel QRIS, serta unduhan .ics "simpan tanggal".',
                                    'Formulir mode demo: formulir RSVP dan ucapan sepenuhnya interaktif untuk keperluan presentasi, tetapi karena API belum dikonfigurasi, data hanya tersimpan di browser dan muncul pemberitahuan mode demo alih-alih terkirim.',
                                  ]},
      ],
    },
  },

// Pembelajaran & Latihan
{
    slug: 'weather-forecast',
    cats: ['Learning & Practice'],
    preview: 'weather',
    images: [
      {
        src: 'screenshots/latihan/cuaca.png',
        caption: {
          en: 'Weather forecast interface: search a city and view current conditions',
          id: 'Antarmuka prakiraan cuaca: cari kota dan lihat kondisi terkini'
        }
      }
    ],
    cardTags: ['Web app', 'Weather API'],
    links: [
      { kind: 'live', href: 'https://cuaca-gamma.vercel.app/' },
      { kind: 'gh', href: 'https://github.com/sabasthian/cuaca' }
    ],
    en: {
      title: 'Weather Forecast Web App',
      meta: 'Practice Project · Web app',
      desc: 'Real-time global weather tracker displaying temperature, humidity, wind speed, and current atmospheric conditions.',
      badge: 'Learning Project',
      sub: 'Real-Time Global Weather Tracker & Atmospheric Conditions',
      facts: [['Role', 'Frontend Developer'], ['Duration', 'Practice Project']],
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Weather API'],
      sections: [
        {
          h: 'overview',
          p: 'A web-based weather tracking application that provides real-time weather forecasts for cities around the world. Integrated with the OpenWeatherMap REST API to display current temperature, humidity, wind speed, and dynamic weather condition icons through a modern and responsive interface.'
        },
        {
          h: 'key features',
          p: 'Instant weather search by city name, real-time REST API integration, adaptive weather condition icons, interactive input validation with error messages, and a responsive interface with atmospheric gradient backgrounds.'
        }
      ]
    },
    id: {
      title: 'Weather Forecast Web App',
      meta: 'Proyek Latihan · Aplikasi web',
      desc: 'Aplikasi pelacak cuaca real-time yang menampilkan temperatur, kelembapan, kecepatan angin, dan kondisi atmosfer.',
      badge: 'Proyek Pembelajaran',
      sub: 'Pelacak Cuaca Global Real-Time dan Kondisi Atmosfer',
      facts: [['Peran', 'Frontend Developer'], ['Durasi', 'Proyek Latihan']],
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Weather API'],
      sections: [
        {
          h: 'ringkasan',
          p: 'Aplikasi pelacak cuaca berbasis web yang menyajikan informasi prakiraan cuaca secara real-time untuk berbagai kota di seluruh dunia. Terintegrasi dengan OpenWeatherMap REST API untuk menampilkan temperatur terkini, kelembapan udara, kecepatan angin, dan ikon visual kondisi cuaca melalui antarmuka modern dan responsif.'
        },
        {
          h: 'fitur utama',
          p: 'Pencarian cuaca instan berdasarkan nama kota, integrasi REST API cuaca real-time, ikon kondisi cuaca adaptif, validasi input interaktif dengan pesan kesalahan, serta antarmuka responsif dengan latar belakang gradien atmosferik.'
        }
      ]
    }
  },
  {
    slug: 'random-password-generator',
    cats: ['Learning & Practice'],
    preview: 'password',
    images: [
      {
        src: 'screenshots/latihan/random_pw.png',
        caption: {
          en: 'Password generator interface: create a secure random password and copy it',
          id: 'Antarmuka generator kata sandi: buat kata sandi acak yang kuat dan salin'
        }
      }
    ],
    cardTags: ['Web app', 'Security utility'],
    links: [
      { kind: 'live', href: 'https://password-generator-umber-one-72.vercel.app/' },
      { kind: 'gh', href: 'https://github.com/sabasthian/Password-Generator' }
    ],
    en: {
      title: 'Random Password Generator',
      meta: 'Practice Project · Web app',
      desc: 'Secure password generator that creates strong random credentials with a convenient one-click clipboard feature.',
      badge: 'Learning Project',
      sub: 'Secure Credential Generator & Quick Clipboard Utility',
      facts: [['Role', 'Frontend Developer'], ['Duration', 'Practice Project']],
      tags: ['HTML5', 'CSS3', 'JavaScript'],
      sections: [
        {
          h: 'overview',
          p: 'A web-based security utility designed to generate strong random passwords using combinations of uppercase letters, lowercase letters, numbers, and special characters. Includes a one-click copy-to-clipboard feature for convenient password management through a lightweight interface.'
        },
        {
          h: 'key features',
          p: 'Random password generation with configurable character combinations, one-click clipboard functionality, modern dark theme interface, lightweight Vanilla JavaScript implementation without heavy third-party dependencies, and responsive desktop and mobile layouts.'
        }
      ]
    },
    id: {
      title: 'Random Password Generator',
      meta: 'Proyek Latihan · Aplikasi web',
      desc: 'Aplikasi pembuat kata sandi acak yang kuat dengan fitur penyalinan kata sandi ke clipboard secara instan.',
      badge: 'Proyek Pembelajaran',
      sub: 'Generator Kata Sandi Aman dan Utilitas Clipboard',
      facts: [['Peran', 'Frontend Developer'], ['Durasi', 'Proyek Latihan']],
      tags: ['HTML5', 'CSS3', 'JavaScript'],
      sections: [
        {
          h: 'ringkasan',
          p: 'Aplikasi web utilitas keamanan yang dirancang untuk menghasilkan kata sandi acak yang kuat menggunakan kombinasi huruf besar, huruf kecil, angka, dan simbol khusus. Dilengkapi fitur salin ke clipboard dengan satu klik untuk memudahkan pengguna menyalin kata sandi secara instan.'
        },
        {
          h: 'fitur utama',
          p: 'Generator kata sandi acak dengan kombinasi berbagai karakter, fitur salin ke clipboard dengan satu klik, antarmuka dark theme modern, implementasi Vanilla JavaScript tanpa dependensi pihak ketiga yang berat, serta tampilan responsif untuk desktop dan perangkat mobile.'
        }
      ]
    }
  },
  {
    slug: 'qr-code-generator',
    cats: ['Learning & Practice'],
    preview: 'qrcode',
    images: [
      {
        src: 'screenshots/latihan/qr.png',
        caption: {
          en: 'QR code generator interface: convert text or URL into a QR code',
          id: 'Antarmuka generator QR code: ubah teks atau URL menjadi kode QR'
        }
      }
    ],
    cardTags: ['Web app', 'QR Code'],
    links: [
      { kind: 'live', href: 'https://qr-code-generator-two-umber.vercel.app/' },
      { kind: 'gh', href: 'https://github.com/sabasthian/QR-Code-Generator' }
    ],
    en: {
      title: 'QR Code Generator',
      meta: 'Practice Project · Web app',
      desc: 'Lightweight JavaScript application for instantly converting text and URLs into QR codes.',
      badge: 'Learning Project',
      sub: 'Instant Text & URL to QR Code Converter',
      facts: [['Role', 'Frontend Developer'], ['Duration', 'Practice Project']],
      tags: ['HTML5', 'CSS3', 'JavaScript', 'QR Code API'],
      sections: [
        {
          h: 'overview',
          p: 'A lightweight web utility built with Vanilla JavaScript to convert text and URL links into QR codes instantly. Features smooth QR code rendering animations, interactive input validation, and a clean modern interface designed for a simple user experience.'
        },
        {
          h: 'key features',
          p: 'Instant text and URL conversion into high-resolution QR codes, dynamic rendering animations, interactive input validation, minimal and clean interface design, and lightweight responsive performance across desktop and smartphone devices.'
        }
      ]
    },
    id: {
      title: 'QR Code Generator',
      meta: 'Proyek Latihan · Aplikasi web',
      desc: 'Aplikasi JavaScript ringan untuk mengonversi teks dan tautan URL menjadi kode QR secara instan.',
      badge: 'Proyek Pembelajaran',
      sub: 'Konverter Teks dan URL Menjadi QR Code Secara Instan',
      facts: [['Peran', 'Frontend Developer'], ['Durasi', 'Proyek Latihan']],
      tags: ['HTML5', 'CSS3', 'JavaScript', 'QR Code API'],
      sections: [
        {
          h: 'ringkasan',
          p: 'Aplikasi web utilitas berbasis JavaScript murni untuk mengonversi teks atau tautan URL menjadi kode QR secara instan. Dilengkapi animasi rendering kode QR, validasi input interaktif, serta antarmuka minimalis modern yang dirancang untuk memberikan kemudahan penggunaan.'
        },
        {
          h: 'fitur utama',
          p: 'Konversi instan teks dan tautan URL menjadi kode QR, animasi rendering dinamis, validasi input interaktif, desain antarmuka minimalis dan bersih, serta performa ringan dan responsif pada perangkat desktop maupun smartphone.'
        }
      ]
    }
  },
  {
    slug: 'toast-notification-system',
    cats: ['Learning & Practice'],
    preview: 'notification',
    images: [
      {
        src: 'screenshots/latihan/notif.png',
        caption: {
          en: 'Toast notification demo: success, warning, and error alerts',
          id: 'Demo notifikasi toast: alert sukses, peringatan, dan error'
        }
      }
    ],
    cardTags: ['UI component', 'JavaScript'],
    links: [
      { kind: 'live', href: 'https://toast-notification-system-nu.vercel.app/' },
      { kind: 'gh', href: 'https://github.com/sabasthian/Toast-Notification-System' }
    ],
    en: {
      title: 'Toast Notification System',
      meta: 'Practice Project · UI Component',
      desc: 'Interactive notification component featuring contextual alerts, smooth animations, and automatic dismissal.',
      badge: 'Learning Project',
      sub: 'Interactive Alert System & Micro-Animation UI Kit',
      facts: [['Role', 'Frontend Developer'], ['Duration', 'Practice Project']],
      tags: ['HTML5', 'CSS3', 'JavaScript', 'FontAwesome'],
      sections: [
        {
          h: 'overview',
          p: 'An interactive web UI component designed to display dynamic toast notifications for Success, Warning, and Error messages. Features smooth slide-in and slide-out animations, automatic dismissal with a progress bar, FontAwesome icon integration, and a lightweight modular Vanilla JavaScript structure.'
        },
        {
          h: 'key features',
          p: 'Three contextual notification types, smooth slide-in and slide-out transitions, automatic dismissal timer with a visual progress bar, stacked multiple-toast handling, and lightweight modular Vanilla JavaScript architecture.'
        }
      ]
    },
    id: {
      title: 'Toast Notification System',
      meta: 'Proyek Latihan · Komponen UI',
      desc: 'Komponen notifikasi interaktif dengan pesan kontekstual, animasi transisi, dan penghapusan otomatis.',
      badge: 'Proyek Pembelajaran',
      sub: 'Sistem Notifikasi Interaktif dan Animasi Antarmuka',
      facts: [['Peran', 'Frontend Developer'], ['Durasi', 'Proyek Latihan']],
      tags: ['HTML5', 'CSS3', 'JavaScript', 'FontAwesome'],
      sections: [
        {
          h: 'ringkasan',
          p: 'Komponen antarmuka web interaktif untuk menampilkan pesan notifikasi toast dinamis dengan status Success, Warning, dan Error. Dilengkapi animasi slide-in dan slide-out, penghapusan otomatis dengan progress bar, integrasi ikon FontAwesome, serta struktur Vanilla JavaScript modular yang ringan.'
        },
        {
          h: 'fitur utama',
          p: 'Tiga jenis notifikasi kontekstual, animasi transisi slide-in dan slide-out, penghitung waktu penghapusan otomatis dengan progress bar, penanganan antrean beberapa notifikasi bertumpuk, serta arsitektur modular berbasis Vanilla JavaScript.'
        }
      ]
    }
  },
  {
    slug: 'kalkulator-usia',
    cats: ['Learning & Practice'],
    preview: 'calculator',
    images: [
      {
        src: 'screenshots/latihan/umur.png',
        caption: {
          en: 'Age calculator interface: enter date of birth and view age in years, months, and days',
          id: 'Antarmuka kalkulator usia: masukkan tanggal lahir dan lihat usia dalam tahun, bulan, dan hari'
        }
      }
    ],
    cardTags: ['Web app', 'Date calculator'],
    links: [
      { kind: 'live', href: 'https://kalkulator-usia-mauve.vercel.app/' },
      { kind: 'gh', href: 'https://github.com/sabasthian/Kalkulator-Usia' }
    ],
    en: {
      title: 'Age Calculator Web App',
      meta: 'Practice Project · Web app',
      desc: 'Precise age calculator that determines a user’s age in years, months, and days using dynamic date calculations.',
      badge: 'Learning Project',
      sub: 'Precise Age Calculator & Date Difference Tracker',
      facts: [['Role', 'Frontend Developer'], ['Duration', 'Practice Project']],
      tags: ['HTML5', 'CSS3', 'JavaScript'],
      sections: [
        {
          h: 'overview',
          p: 'A web-based age calculator that accurately calculates a user’s age in years, months, and days based on their date of birth. Implements dynamic calendar calculations to account for varying month lengths and leap years, presented through a clean and responsive interface.'
        },
        {
          h: 'key features',
          p: 'Detailed age calculation in years, months, and days, JavaScript calendar logic supporting different month lengths and leap years, interactive date input restricted to the current date, minimal result card interface, and lightweight Vanilla JavaScript performance.'
        }
      ]
    },
    id: {
      title: 'Kalkulator Usia Web App',
      meta: 'Proyek Latihan · Aplikasi web',
      desc: 'Kalkulator usia presisi yang menghitung umur dalam tahun, bulan, dan hari berdasarkan tanggal lahir.',
      badge: 'Proyek Pembelajaran',
      sub: 'Kalkulator Usia Presisi dan Penghitung Selisih Tanggal',
      facts: [['Peran', 'Frontend Developer'], ['Durasi', 'Proyek Latihan']],
      tags: ['HTML5', 'CSS3', 'JavaScript'],
      sections: [
        {
          h: 'ringkasan',
          p: 'Aplikasi kalkulator usia berbasis web yang menghitung umur pengguna secara akurat hingga rincian tahun, bulan, dan hari berdasarkan tanggal lahir yang dimasukkan. Mengimplementasikan logika kalkulasi kalender dinamis untuk memperhitungkan jumlah hari setiap bulan dan tahun kabisat melalui antarmuka yang minimalis dan responsif.'
        },
        {
          h: 'fitur utama',
          p: 'Kalkulasi usia secara detail dalam tahun, bulan, dan hari, logika penanggalan JavaScript yang memperhitungkan variasi hari setiap bulan dan tahun kabisat, input tanggal interaktif dengan batas maksimal hari ini, tampilan hasil berbentuk kartu minimalis, serta performa ringan tanpa dependensi eksternal.'
        }
      ]
    }
  },
  {
    slug: 'precision-stopwatch',
    cats: ['Learning & Practice'],
    preview: 'stopwatch',
    images: [
      {
        src: 'screenshots/latihan/sw.png',
        caption: {
          en: 'Digital stopwatch interface: start, pause, and reset interval timing',
          id: 'Antarmuka stopwatch digital: mulai, jeda, dan reset pengukuran waktu'
        }
      }
    ],
    cardTags: ['Web app', 'Time utility'],
    links: [
      { kind: 'live', href: 'https://stopwatch-sepia-seven.vercel.app/' },
      { kind: 'gh', href: 'https://github.com/sabasthian/Stopwatch' }
    ],
    en: {
      title: 'Precision Digital Stopwatch',
      meta: 'Practice Project · Web app',
      desc: 'Real-time digital stopwatch for measuring time intervals with interactive controls and precise state management.',
      badge: 'Learning Project',
      sub: 'Accurate Interval Timer & Digital Stopwatch Web App',
      facts: [['Role', 'Frontend Developer'], ['Duration', 'Practice Project']],
      tags: ['React', 'JavaScript', 'CSS3', 'Vite'],
      sections: [
        {
          h: 'overview',
          p: 'A digital stopwatch application built to measure time intervals in real time. Features interactive Start, Stop/Pause, and Reset controls, a clear digital display, and optimized rendering to provide a smooth and reliable timing experience.'
        },
        {
          h: 'key features',
          p: 'Real-time interval measurement, integrated Start, Stop/Pause, and Reset controls, clear digital display, precise state management for stable interval counting, and a lightweight responsive interface for desktop and mobile devices.'
        }
      ]
    },
    id: {
      title: 'Precision Digital Stopwatch',
      meta: 'Proyek Latihan · Aplikasi web',
      desc: 'Aplikasi stopwatch digital untuk mengukur interval waktu secara real-time dengan kontrol interaktif.',
      badge: 'Proyek Pembelajaran',
      sub: 'Pengukur Interval Waktu dan Stopwatch Digital Presisi',
      facts: [['Peran', 'Frontend Developer'], ['Durasi', 'Proyek Latihan']],
      tags: ['React', 'JavaScript', 'CSS3', 'Vite'],
      sections: [
        {
          h: 'ringkasan',
          p: 'Aplikasi stopwatch digital berbasis web yang dibangun untuk mengukur interval waktu secara real-time. Dilengkapi kontrol Start, Stop/Pause, dan Reset yang interaktif, tampilan digital yang jelas, serta optimalisasi rendering untuk memberikan pengalaman pengukuran waktu yang lancar dan stabil.'
        },
        {
          h: 'fitur utama',
          p: 'Pengukuran interval waktu secara real-time, kontrol Start, Stop/Pause, dan Reset, tampilan layar digital yang mudah dibaca, pengelolaan state untuk menjaga kestabilan penghitungan waktu, serta antarmuka ringan dan responsif untuk desktop maupun perangkat mobile.'
        }
      ]
    }
  }
];



export const projectsBySlug = Object.fromEntries(projects.map((p) => [p.slug, p]));


//contoh pembuatan jendela baru 

  // {
  //   slug: 'plant',
  //   cats: ['Learning & Practice'],
  //   preview: 'plant',
  //   images: [],
  //   cardTags: ['Web app', 'Expert system'],
  //   links: [{ kind: 'gh', href: GH }],
  //   en: {
  //     title: 'Expert System for Ornamental Plant Care',
  //     meta: 'Thesis · Web app',
  //     desc: 'Web-based expert system for diagnosing ornamental plant diseases and optimizing their maintenance.',
  //     badge: 'Thesis',
  //     sub: 'Web-based disease diagnosis and maintenance guidance',
  //     facts: [['Role', 'Developer'], ['Type', 'Thesis']],
  //     tags: ['Web app', 'Expert system'],
  //     sections: [
  //       { h: 'overview', p: 'A web-based expert system for diagnosing diseases and optimizing the maintenance of ornamental plants in Parongpong.' },
  //     ],
  //   },
  //   id: {
  //     title: 'Sistem Pakar Perawatan Tanaman Hias',
  //     meta: 'Skripsi · Aplikasi web',
  //     desc: 'Sistem pakar berbasis web untuk mendiagnosis penyakit tanaman hias dan mengoptimalkan perawatannya.',
  //     badge: 'Skripsi',
  //     sub: 'Diagnosis penyakit dan panduan perawatan berbasis web',
  //     facts: [['Peran', 'Developer'], ['Jenis', 'Skripsi']],
  //     tags: ['Aplikasi web', 'Sistem pakar'],
  //     sections: [
  //       { h: 'ringkasan', p: 'Sistem pakar berbasis web untuk mendiagnosis penyakit dan mengoptimalkan perawatan tanaman hias di Parongpong.' },
  //     ],
  //   },
  // },