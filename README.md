# Portfolio — William Sabasthian Hutapea

Website portofolio statis (tanpa backend) untuk posisi **Full-Stack Developer**.

**Stack:** React 19 · Vite 7 · Tailwind CSS 4 · Framer Motion 12

## Fitur

- Dua bahasa (EN / ID) dan tema terang / gelap, pilihan disimpan di browser pengunjung
- Kartu proyek dengan filter kategori (All / Full-stack / IoT / Academic)
- Popup detail proyek & sertifikat, bisa dibuka lewat link langsung (`#project-krb`, `#cert-git`)
- Slider sertifikat (geser ke samping) dengan tombol panah dan bar progres
- Animasi Framer Motion: popup, filter, menu HP, tombol bahasa, reveal saat scroll
- Responsif (HP, tablet, desktop) dan menghormati setelan "kurangi gerakan"

## Menjalankan di komputer

Butuh Node.js 20 atau lebih baru.

```bash
npm install      # sekali saja, untuk install dependensi
npm run dev      # buka http://localhost:5173
npm run build    # hasil siap upload ada di folder dist/
npm run preview  # cek hasil build secara lokal
```

## Struktur folder

```
src/
  data/            <- SEMUA ISI WEBSITE ada di sini (ubah teks cukup di folder ini)
    profile.js       nama, kontak, skill, pengalaman, pendidikan
    projects.js      daftar proyek (EN + ID)
    certificates.js  daftar sertifikat (EN + ID)
    i18n.js          teks tombol/menu dalam 2 bahasa
  components/      satu file per bagian halaman (Header, Hero, Projects, dst.)
  context/         state global: bahasa & tema, popup detail
  hooks/           useActiveSection (menandai menu yang sedang dibaca)
  index.css        Tailwind + warna tema (light/dark)
public/            file statis (favicon, screenshot)
```

## Foto proyek (bisa lebih dari satu)

Setiap proyek bisa punya banyak foto. Di popup detail tampil sebagai galeri:
panah kiri/kanan, thumbnail, caption, bisa digeser di HP, dan tombol
"lihat lebih besar" untuk layar penuh. Foto pertama otomatis jadi sampul kartu.

1. Simpan gambar di `public/screenshots/<slug-proyek>/`, misalnya
   `public/screenshots/krb/01-home.webp`, `02-judging.webp`, dst.
2. Daftarkan di field `images` proyek tersebut (`src/data/projects.js`):
   ```js
   images: [
     { src: 'screenshots/krb/01-home.webp', caption: { en: 'Public website', id: 'Website publik' } },
     { src: 'screenshots/krb/02-judging.webp', caption: { en: 'Judging page', id: 'Halaman penjurian' } },
     'screenshots/krb/03-admin.webp', // tanpa caption juga boleh
   ],
   ```
3. Simpan, browser otomatis ter-update.

Tips: lebar ideal 1600 px, format `.webp` atau `.jpg` supaya ringan. Gunakan data demo yang rapi
(tanpa data uji seperti "tes" atau "p") karena recruiter akan memperbesar screenshot.
Selama `images` kosong, kartu memakai ilustrasi bawaan.

## Deploy (gratis)

**Vercel / Netlify** (paling mudah)
1. Upload folder ini ke repo GitHub.
2. Import repo di Vercel atau Netlify.
3. Build command: `npm run build` · Output folder: `dist`.

**GitHub Pages** (sudah disiapkan workflow-nya)
1. Upload folder ini ke repo GitHub, misalnya `sabasthian.github.io`.
2. Buka **Settings → Pages → Build and deployment**, pilih **Source: GitHub Actions**.
3. Setiap push ke branch `main`, website otomatis di-build dan di-deploy
   (`.github/workflows/deploy.yml`).

Tanpa GitHub: jalankan `npm run build`, lalu upload isi folder `dist/` ke hosting statis mana pun.
