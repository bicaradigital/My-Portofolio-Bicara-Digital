# 🌐 Bicara Digital — Portfolio Website

Website portofolio profesional untuk **Bagoes Tri Anggoro / Bicara Digital**.  
Dibangun dengan Next.js 14, Tailwind CSS, dan TypeScript. Siap deploy ke Vercel.

---

## 🚀 Quick Start

```bash
# 1. Clone / extract project ini ke folder lokal
cd bicaradigital

# 2. Install dependencies
npm install

# 3. Jalankan dev server
npm run dev

# 4. Buka di browser
# http://localhost:3000
```

---

## 📁 Struktur Project

```
bicaradigital/
├── src/
│   ├── app/
│   │   ├── page.tsx          ← Halaman utama (rakit semua section)
│   │   ├── layout.tsx        ← Root layout + metadata SEO
│   │   └── globals.css       ← Style global + CSS variables
│   ├── components/
│   │   ├── Navbar.tsx        ← Navigasi (responsive + mobile drawer)
│   │   ├── Footer.tsx        ← Footer
│   │   └── sections/
│   │       ├── HeroSection.tsx       ← Bagian atas / hero
│   │       ├── ServicesSection.tsx   ← 6 layanan utama
│   │       ├── ProjectsSection.tsx   ← 8 dev projects + filter
│   │       ├── DesignSection.tsx     ← Gallery design + lightbox
│   │       ├── SkillsSection.tsx     ← Tech stack & tools
│   │       ├── AboutSection.tsx      ← Profil & pengalaman
│   │       └── ContactSection.tsx    ← Kontak & CTA
│   └── data/
│       └── portfolio.ts      ← ⭐ SEMUA KONTEN DI SINI
├── public/
│   └── images/
│       ├── logo/             ← Taruh gambar logo design di sini
│       ├── packaging/        ← Taruh gambar packaging di sini
│       └── kaos/             ← Taruh gambar apparel design di sini
├── package.json
├── tailwind.config.js
├── next.config.js
└── vercel.json
```

---

## ✏️ Cara Update Konten

### 1. Update Info Pribadi
Edit `src/data/portfolio.ts` bagian `siteConfig`:
```typescript
export const siteConfig = {
  name: "Bicara Digital",
  owner: "Bagoes Tri Anggoro",
  email: "hello@bicaradigital.com", // ← ganti email aktif
  whatsapp: "+6282133467984",
  // ...
}
```

### 2. Tambah Gambar Design Portfolio
**Cara A — Upload ke folder public:**
```
1. Copy gambar ke: public/images/logo/logo-1.jpg
2. Edit data/portfolio.ts, cari designProjects
3. Ubah: src: null → src: "/images/logo/logo-1.jpg"
```

**Cara B — Link Canva:**
```typescript
// Di data/portfolio.ts, pada item design:
{
  id: "logo-1",
  src: null,
  canvaLink: "https://canva.link/xxxxx", // ← isi link Canva
}
```

**Cara C — Link Google Drive / Behance:**
```typescript
{
  src: "https://drive.google.com/uc?id=FILE_ID", // direct link
  canvaLink: null,
}
```

### 3. Update Info Design Project
```typescript
// Di src/data/portfolio.ts:
{
  id: "logo-1",
  title: "Brand Identity — Nama Klien",  // ← ganti judul
  client: "Nama Klien",                   // ← ganti nama klien
  year: "2024",
  desc: "Deskripsi singkat project.",
  src: "/images/logo/logo-1.jpg",
  canvaLink: null,
}
```

### 4. Update Warna Brand
Edit `tailwind.config.js` bagian `colors.brand` dan `src/app/globals.css`.

---

## 🌐 Deploy ke Vercel (Gratis)

### Langkah 1 — Push ke GitHub
```bash
git init
git add .
git commit -m "initial: bicara digital portfolio"
git branch -M main
git remote add origin https://github.com/bicaradigital/portfolio.git
git push -u origin main
```

### Langkah 2 — Deploy ke Vercel
1. Buka [vercel.com](https://vercel.com) → Login dengan GitHub
2. Klik **"Add New Project"**
3. Pilih repository `portfolio`
4. Klik **Deploy** — selesai! ✅

### Langkah 3 — Custom Domain (bicaradigital.com)
1. Di Vercel dashboard → Project → **Settings → Domains**
2. Tambahkan: `bicaradigital.com`
3. Di registrar domain (Niagahoster / Dewaweb / dll):
   - Tambahkan **A Record**: `76.76.21.21`
   - Atau **CNAME**: `cname.vercel-dns.com`
4. Tunggu propagasi DNS 5–30 menit

---

## 🛠️ Tech Stack

| Teknologi | Versi | Kegunaan |
|-----------|-------|----------|
| Next.js | 14.2 | Framework utama |
| React | 18 | UI library |
| TypeScript | 5 | Type safety |
| Tailwind CSS | 3.4 | Styling |
| Framer Motion | 11 | Animasi |
| Lucide React | 0.400 | Icons |
| Vercel | - | Hosting & deployment |

---

## 📱 Responsiveness

Website ini dioptimalkan untuk:
- ✅ Mobile (320px+)
- ✅ Tablet (768px+)
- ✅ Desktop (1024px+)
- ✅ Large Desktop (1280px+)

---

## 📦 Scripts

```bash
npm run dev      # Development server (localhost:3000)
npm run build    # Build production
npm run start    # Jalankan production build
npm run lint     # Cek ESLint
```

---

## 💬 Butuh Bantuan?

**Bicara Digital**  
WhatsApp: [+62 821-3346-7984](https://wa.me/6282133467984)  
GitHub: [github.com/bicaradigital](https://github.com/bicaradigital)

---

© 2025 Bicara Digital — Bagoes Tri Anggoro
