# Fahrul Tech Rescue

Landing page `Fahrul Tech Rescue` dibuat dengan Next.js App Router, Tailwind CSS, dan Docker production multi-stage.

## Stack

- Next.js 16.2.6
- React 19.2.6
- Tailwind CSS 4.3.0
- Docker + Docker Compose

## Jalankan dengan Docker

Pastikan Docker Desktop atau Docker Engine aktif, lalu dari root project jalankan:

```bash
docker compose up -d --build
```

Setelah build selesai, aplikasi bisa diakses di:

```text
http://localhost:8999
```

## Jalankan mode development tanpa build ulang terus-menerus

Kalau Anda sedang edit tampilan atau konten dan ingin perubahan langsung tampil tanpa `docker compose up -d --build` setiap kali, jalankan:

```bash
docker compose -f docker-compose.yml -f docker-compose.dev.yml up
```

Mode ini akan:

- Menjalankan Next.js development server
- Melakukan hot reload saat file berubah
- Tetap bisa diakses di `http://localhost:8999`

Untuk menghentikan:

```bash
docker compose -f docker-compose.yml -f docker-compose.dev.yml down
```

## Stop container

```bash
docker compose down
```

## Jalankan lokal tanpa Docker

```bash
npm install
npm run dev
```

Lalu buka:

```text
http://localhost:3000
```
