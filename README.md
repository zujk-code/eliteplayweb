# ElitePlay Web

Production Next.js (App Router + TypeScript) landing page for **ElitePlay Launcher** — self-hosted assets, zero Framer runtime dependency, ready for VPS deployment with Docker + Caddy.

## Local Development

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

## Test & Build Lokal

```bash
npm test
npm run build
```

## Konfigurasi Link & Domain

Edit `src/config/site.ts` untuk mengisi domain asli, link Shopee, WhatsApp CS, Discord, dan Download Launcher.

---

## Deploy Pertama Kali di VPS (`nav-bot`)

### 1. Pastikan Docker terpasang di VPS (Ubuntu/Debian)

```bash
curl -fsSL https://get.docker.com | sh
docker compose version
```

*(Lewati langkah ini jika `docker compose version` sudah muncul.)*

### 2. Clone repo di VPS

```bash
git clone https://github.com/zujk-code/eliteplayweb.git
cd eliteplayweb
```

### 3. Pilih mode tes IP atau langsung domain HTTPS

- **Tes cepat pakai IP VPS dulu (HTTP port 80):** tidak perlu buat `.env`, langsung jalankan:
  ```bash
  docker compose up -d --build
  ```
  Lalu buka `http://IP-VPS-KAMU`.

- **Langsung pakai Domain + HTTPS gratis otomatis (Let's Encrypt):**
  1. Arahkan DNS **A Record** domainmu (`@`) ke IP VPS `nav-bot`.
  2. Buat file `.env` di folder `eliteplayweb` pada VPS:
     ```bash
     echo "SITE_DOMAIN=domainkamu.com" > .env
     ```
  3. Jalankan:
     ```bash
     docker compose up -d --build
     ```
  Caddy otomatis mengurus sertifikat SSL HTTPS dan mengarahkan `https://domainkamu.com` ke container Next.js.

---

## Cara Update Website Nanti

1. Edit di PC lokal (`G:\eliteplay website`), lalu push ke GitHub:
   ```powershell
   git add -A
   git commit -m "update konten"
   git push
   ```
2. Masuk SSH ke VPS `nav-bot`, lalu jalankan 1 baris ini di folder `eliteplayweb`:
   ```bash
   git pull && docker compose up -d --build
   ```

## Cek Status & Log di VPS

```bash
docker compose ps
docker compose logs -f caddy
docker compose logs -f web
```
