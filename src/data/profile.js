// Data pribadi, skill, pengalaman, dan pendidikan.
// Ubah isi di sini; komponen akan mengikuti otomatis.

export const profile = {
  name: 'William Sabasthian Hutapea',
  role: 'Full-Stack Developer',
  location: 'Jakarta, Indonesia',
  email: 'williamshutapea2004@gmail.com',
  phone: '+62 819-5298-7248',
  github: 'https://github.com/sabasthian',
  githubLabel: 'github.com/sabasthian',
  linkedin: 'https://www.linkedin.com/in/william-sabasthian-hutapea-277451260/',
  linkedinLabel: 'william-sabasthian-hutapea',
};

export const aboutFacts = [
  { k: { en: 'Based in', id: 'Domisili' }, v: { en: 'Jakarta, Indonesia', id: 'Jakarta, Indonesia' } },
  { k: { en: 'Focus', id: 'Fokus' }, v: { en: 'Full-stack web development', id: 'Pengembangan web full-stack' } },
  {
    k: { en: 'Strengths', id: 'Kekuatan' },
    v: {
      en: 'Problem solving, time management, attention to detail, analytical thinking, teamwork',
      id: 'Problem solving, manajemen waktu, ketelitian, berpikir analitis, kerja sama tim',
    },
  },
  {
    k: { en: 'Languages', id: 'Bahasa' },
    v: { en: 'Indonesian (native), English (beginner)', id: 'Bahasa Indonesia (native), Bahasa Inggris (pemula)' },
  },
];

export const skills = [
  { group: { en: 'front-end', id: 'front-end' }, items: ['React.js', 'Next.js', 'React Native', 'Inertia.js', 'Tailwind CSS', 'Bootstrap'] },
  { group: { en: 'back-end', id: 'back-end' }, items: ['Node.js', 'Express', 'Laravel', 'Payload CMS', 'REST APIs', 'JWT auth'] },
  { group: { en: 'database', id: 'database' }, items: ['PostgreSQL', 'MySQL', 'SQLite', 'Supabase', 'Prisma ORM', 'Sequelize'] },
  { group: { en: 'languages', id: 'bahasa pemrograman' }, items: ['JavaScript', 'TypeScript', 'PHP', 'HTML', 'CSS'] },
  { group: { en: 'tools & cloud', id: 'tools & cloud' }, items: ['Git', 'GitHub', 'Cloudflare R2', 'Alibaba Cloud'] },
  { group: { en: 'iot', id: 'iot' }, items: ['Arduino Uno', 'ESP32-CAM', 'Telegram Bot'] },
];

export const experience = [
  {
    when: { en: 'May – Aug 2025', id: 'Mei – Agu 2025' },
    type: { en: 'Internship', id: 'Magang' },
    role: 'IT Support & Web Developer Intern',
    org: { en: 'Konfederasi Serikat Buruh Seluruh Indonesia', id: 'Konfederasi Serikat Buruh Seluruh Indonesia' },
    points: {
      en: [
        'Built and maintained website sections in HTML and CSS: news, organization profile, membership information and WhatsApp contact.',
        'Helped develop and improve internal web systems for administrative workflows and daily operations.',
        'Provided IT support: hardware and software installation, troubleshooting and internal network configuration.',
      ],
      id: [
        'Membangun dan merawat bagian website dengan HTML dan CSS: berita, profil organisasi, informasi keanggotaan, dan kontak WhatsApp.',
        'Membantu mengembangkan dan menyempurnakan sistem web internal untuk alur kerja administrasi dan operasional harian.',
        'Memberikan dukungan IT: instalasi hardware dan software, troubleshooting, serta konfigurasi jaringan internal.',
      ],
    },
  },
  {
    when: { en: 'Sep 2025 – Apr 2026', id: 'Sep 2025 – Apr 2026' },
    type: { en: 'Organization', id: 'Organisasi' },
    role: 'Public Relations',
    org: {
      en: 'Disaster Response Task Force (Satgas Siaga Bencana), Adventist University of Indonesia',
      id: 'Satgas Siaga Bencana, Universitas Advent Indonesia',
    },
    points: {
      en: [
        'Coordinated information sharing and documented disaster-preparedness and humanitarian activities.',
        'Supported public communication during disaster response so updates stayed accurate.',
      ],
      id: [
        'Mengoordinasikan penyebaran informasi serta mendokumentasikan kegiatan kesiapsiagaan bencana dan kemanusiaan.',
        'Mendukung komunikasi publik saat tanggap bencana agar informasi tetap akurat.',
      ],
    },
  },
  {
    when: { en: 'Sep 2022 – Apr 2023', id: 'Sep 2022 – Apr 2023' },
    type: { en: 'Organization', id: 'Organisasi' },
    role: 'Head of Logistics',
    org: {
      en: 'Unceasing Cantica Choir, Adventist University of Indonesia',
      id: 'Paduan Suara Unceasing Cantica, Universitas Advent Indonesia',
    },
    points: {
      en: [
        'Managed logistics for 10+ events, covering procurement, distribution and setup.',
        'Kept equipment ready and events on schedule without disruptions.',
      ],
      id: [
        'Mengelola logistik untuk 10+ acara, mulai dari pengadaan, distribusi, hingga persiapan.',
        'Memastikan perlengkapan siap dan acara berjalan tepat waktu tanpa gangguan.',
      ],
    },
  },
];

export const education = {
  when: { en: 'Aug 2022 – Jun 2026', id: 'Agu 2022 – Jun 2026' },
  degree: { en: 'Bachelor of Informatics Engineering', id: 'Sarjana Teknik Informatika' },
  school: { en: 'Adventist University of Indonesia, Bandung', id: 'Universitas Advent Indonesia, Bandung' },
  gpa: { en: '3.56', id: '3,56' },
  gpaLabel: { en: 'GPA / 4.00 · Cumlaude', id: 'IPK / 4,00 · Cumlaude' },
  points: {
    en: [
      'Thesis: web-based expert system for disease diagnosis and maintenance optimization of ornamental plants in Parongpong.',
      'Coursework: Database Systems, Web Development, Systems Analysis, HTML, JavaScript.',
    ],
    id: [
      'Skripsi: sistem pakar berbasis web untuk diagnosis penyakit dan optimasi perawatan tanaman hias di Parongpong.',
      'Mata kuliah relevan: Sistem Basis Data, Pengembangan Web, Analisis Sistem, HTML, JavaScript.',
    ],
  },
};
