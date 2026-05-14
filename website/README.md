# Trimastersolusindo Website

Website modern yang dibangun dengan Next.js, React, dan Tailwind CSS untuk Trimastersolusindo.

## 🚀 Fitur

- **Desain Modern**: UI yang bersih dan responsif
- **Animasi Halus**: Menggunakan Framer Motion untuk animasi yang menarik
- **Komponen Reusable**: Struktur komponen yang terorganisir
- **TypeScript**: Type safety untuk pengembangan yang lebih baik
- **Responsive Design**: Tampilan optimal di berbagai ukuran layar

## 🛠️ Teknologi yang Digunakan

- **Next.js 16.2.6** - React framework
- **React 19.2.4** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling
- **Framer Motion** - Animasi
- **Lucide React** - Icon library

## 📋 Prasyarat

Sebelum memulai, pastikan Anda telah menginstal:
- Node.js (versi 20 atau lebih tinggi)
- npm, yarn, pnpm, atau bun

## 📦 Instalasi

1. Install dependencies:
```bash
npm install
# atau
yarn install
# atau
pnpm install
# atau
bun install
```

## 🏃 Cara Menjalankan

Jalankan development server:

```bash
npm run dev
# atau
yarn dev
# atau
pnpm dev
# atau
bun dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser Anda untuk melihat hasilnya.

## 🏗️ Struktur Project

```
website/
├── public/              # Static assets (images, icons)
├── src/
│   ├── app/            # Next.js App Router
│   │   ├── layout.tsx  # Root layout
│   │   ├── page.tsx    # Halaman utama
│   │   └── globals.css # Global styles
│   └── components/     # Komponen React
│       ├── layout/     # Layout components (Navbar)
│       └── sections/   # Section components (Hero, Services, Trust, CTA)
├── package.json        # Dependencies dan scripts
├── tsconfig.json       # TypeScript configuration
├── next.config.ts      # Next.js configuration
└── tailwind.config.js  # Tailwind CSS configuration
```

## 🎨 Komponen Utama

### Layout Components
- **Navbar**: Komponen navigasi di bagian atas halaman

### Section Components
- **HeroSection**: Section hero dengan judul dan deskripsi utama
- **ServicesSection**: Section yang menampilkan layanan yang ditawarkan
- **TrustSection**: Section yang menampilkan kepercayaan/kredibilitas
- **CTASection**: Section call-to-action untuk mendorong aksi pengguna

## 📝 Customization

### Mengubah Konten
- Edit file di `src/app/page.tsx` untuk mengubah halaman utama
- Edit komponen di `src/components/sections/` untuk mengubah setiap section
- Edit `src/components/layout/Navbar.tsx` untuk mengubah navigasi

### Mengubah Styles
- Edit `src/app/globals.css` untuk global styles
- Gunakan Tailwind CSS classes di komponen untuk styling spesifik

## 🚀 Build untuk Production

```bash
npm run build
# atau
yarn build
# atau
pnpm build
# atau
bun build
```

## 🌐 Deploy

### Vercel (Recommended)
Cara termudah untuk deploy adalah menggunakan [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

### Lainnya
Project ini juga dapat di-deploy ke platform lain yang mendukung Next.js seperti:
- Netlify
- AWS Amplify
- Railway
- Render

## 📚 Learn More

Untuk mempelajari lebih lanjut tentang teknologi yang digunakan:

- [Next.js Documentation](https://nextjs.org/docs) - Fitur dan API Next.js
- [React Documentation](https://react.dev) - React features dan concepts
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Tailwind CSS utility classes
- [Framer Motion Documentation](https://www.framer.com/motion/) - Animasi dengan Framer Motion
- [TypeScript Documentation](https://www.typescriptlang.org/docs/) - TypeScript fundamentals

## 🤝 Kontribusi

Kontribusi sangat diterima! Jika Anda ingin berkontribusi:
1. Fork repository ini
2. Buat branch baru (`git checkout -b feature/AmazingFeature`)
3. Commit changes Anda (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buka Pull Request

## 📄 License

Project ini adalah private property dari Trimastersolusindo.
