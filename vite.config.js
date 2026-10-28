import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// base './' = asset path relatif, jadi hasil build bisa di-host di mana saja
// (GitHub Pages, Netlify, Vercel, atau subfolder) tanpa ubah konfigurasi.
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
});
