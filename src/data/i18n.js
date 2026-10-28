// Teks antarmuka dalam 2 bahasa. Ambil dengan t('kunci') dari usePrefs().
export const dict = {
  // navigasi
  'nav.about': { en: 'About', id: 'Tentang' },
  'nav.skills': { en: 'Skills', id: 'Keahlian' },
  'nav.projects': { en: 'Projects', id: 'Proyek' },
  'nav.experience': { en: 'Experience', id: 'Pengalaman' },
  'nav.certs': { en: 'Certificates', id: 'Sertifikat' },
  'nav.contact': { en: 'Contact', id: 'Kontak' },

  // label aksesibilitas
  'a.logo': { en: 'wi//iam, back to top', id: 'wi//iam, kembali ke atas' },
  'a.sections': { en: 'Sections', id: 'Bagian halaman' },
  'a.lang': { en: 'Language', id: 'Bahasa' },
  'a.filter': { en: 'Filter projects by category', id: 'Filter proyek berdasarkan kategori' },
  'a.left': { en: 'Scroll certificates left', id: 'Geser sertifikat ke kiri' },
  'a.right': { en: 'Scroll certificates right', id: 'Geser sertifikat ke kanan' },

  // hero: [teks biasa, teks tebal, teks biasa]
  'hero.intro': {
    en: ['I build web applications end to end, ', 'from the interface to the API and database', ', with a focus on security, testing and maintainable code. Informatics Engineering graduate from Adventist University of Indonesia.'],
    id: ['Saya membangun aplikasi web secara menyeluruh, ', 'dari antarmuka hingga API dan database', ', dengan fokus pada keamanan, pengujian, dan kode yang mudah dirawat. Lulusan Teknik Informatika Universitas Advent Indonesia.'],
  },
  'hero.status': { en: 'Open to Full-Stack Developer roles', id: 'Terbuka untuk posisi Full-Stack Developer' },
  'hero.cta': { en: 'MY RESUME', id: 'RESUME SAYA' },
  'hero.cm': { en: '// scroll down for projects', id: '// gulir ke bawah untuk melihat proyek' },

  // label section (gaya komentar kode)
  'sec.about': { en: 'about', id: 'tentang' },
  'sec.skills': { en: 'skills', id: 'keahlian' },
  'sec.projects': { en: 'projects', id: 'proyek' },
  'sec.xp': { en: 'experience', id: 'pengalaman' },
  'sec.edu': { en: 'education', id: 'pendidikan' },
  'sec.certs': { en: 'certifications', id: 'sertifikasi' },
  'sec.contact': { en: 'contact', id: 'kontak' },

  // about
  'about.lead': {
    en: 'Full-stack developer who builds complete web applications, from the interface to the API and database.',
    id: 'Full-stack developer yang membangun aplikasi web utuh, dari antarmuka hingga API dan database.',
  },
  'about.p1': {
    en: 'My main project is the Komunitas Reptil Bandung platform: a public website, an admin CMS and a contest judging system, secured with RBAC, MFA and audit logs, and covered by 200 automated tests.',
    id: 'Proyek utama saya adalah platform Komunitas Reptil Bandung: website publik, CMS admin, dan sistem penjurian kontes yang diamankan dengan RBAC, MFA, dan audit log, serta diuji dengan 200 automated test.',
  },
  'about.p2': {
    en: "I'm proactive, detail-oriented and adaptable. I enjoy solving problems, keep learning, and want to grow in full-stack development, backend engineering and cross-functional technical projects.",
    id: 'Saya proaktif, teliti, dan mudah beradaptasi. Saya senang memecahkan masalah, terus belajar, dan ingin berkembang di full-stack development, backend engineering, serta proyek teknis lintas fungsi.',
  },

  // filter proyek
  'f.all': { en: 'All', id: 'Semua' },
  'f.fullstack': { en: 'Full-stack', id: 'Full-stack' },
  'f.iot': { en: 'IoT', id: 'IoT' },
  'f.academic': { en: 'Academic', id: 'Akademik' },
  'p.featured': { en: 'Featured', id: 'Unggulan' },
  'p.hint': { en: 'Swipe for more →', id: 'Geser untuk melihat lainnya →' },

  // tombol & label umum
  'ui.details': { en: 'View details', id: 'Lihat detail' },
  'ui.copy': { en: 'Copy', id: 'Salin' },
  'ui.copied': { en: 'Copied', id: 'Tersalin' },
  'ui.selected': { en: 'Selected', id: 'Terpilih' },
  'ui.open': { en: 'Open ↗', id: 'Buka ↗' },
  'ui.prev': { en: '← Previous', id: '← Sebelumnya' },
  'ui.next': { en: 'Next →', id: 'Berikutnya →' },
  'ui.prevL': { en: 'Previous item', id: 'Item sebelumnya' },
  'ui.nextL': { en: 'Next item', id: 'Item berikutnya' },
  'ui.close': { en: 'Close details', id: 'Tutup detail' },
  'ui.gh': { en: 'GitHub profile', id: 'Profil GitHub' },
  'ui.code': { en: 'Source code', id: 'Source code' },
  'ui.cert': { en: 'Open certificate', id: 'Buka sertifikat' },
  'ui.toDark': { en: 'Switch to dark theme', id: 'Ganti ke tema gelap' },
  'ui.toLight': { en: 'Switch to light theme', id: 'Ganti ke tema terang' },
  'ui.menuOpen': { en: 'Open menu', id: 'Buka menu' },
  'ui.menuClose': { en: 'Close menu', id: 'Tutup menu' },
  'ui.top': { en: 'Back to top', id: 'Kembali ke atas' },
  'ui.photo': { en: 'Photo', id: 'Foto' },
  'ui.photoPrev': { en: 'Previous photo', id: 'Foto sebelumnya' },
  'ui.photoNext': { en: 'Next photo', id: 'Foto berikutnya' },
  'ui.zoom': { en: 'View larger', id: 'Lihat lebih besar' },
  'ui.closePhoto': { en: 'Close photo', id: 'Tutup foto' },

  // sertifikat & kontak
  'cert.count': { en: '4 certificates', id: '4 sertifikat' },
  'c.title': { en: "Let's work together.", id: 'Mari bekerja sama.' },
  'c.sub': {
    en: 'Open to Full-Stack Developer roles. Email is the fastest way to reach me.',
    id: 'Terbuka untuk posisi Full-Stack Developer. Email adalah cara tercepat untuk menghubungi saya.',
  },
  'c.phone': { en: 'Phone / WhatsApp', id: 'Telepon / WhatsApp' },
};
