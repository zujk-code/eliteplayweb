# ElitePlay Web

Production Next.js (App Router + TypeScript) landing page for **ElitePlay Launcher** — self-hosted assets, zero Framer runtime dependency, ready for VPS deployment.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Verify & Production Build

```bash
npm test
npm run build
npm start
```

## Konfigurasi Link & Domain

Edit satu file saja di `src/config/site.ts` untuk mengisi domain asli, link Shopee, WhatsApp CS, Discord, dan Download Launcher.

## Deploy di VPS (`nav-bot`)

### Opsi 1 — PM2 (paling ringan kalau Node.js & PM2 sudah terpasang di VPS)

```bash
git clone https://github.com/zujk-code/eliteplayweb.git
cd eliteplayweb
npm ci
npm run build
pm2 start .next/standalone/server.js --name eliteplay-web -- --port 3000
pm2 save
```

*(Pastikan `cp -r .next/static .next/standalone/.next/static && cp -r public .next/standalone/public` dijalankan sebelum `pm2 start`, atau gunakan `pm2 start npm --name eliteplay-web -- start` agar langsung memakai `next start` di port `3000`.)*

### Opsi 2 — Docker

```bash
docker build -t eliteplay-web .
docker run -d --name eliteplay-web --restart unless-stopped -p 3000:3000 eliteplay-web
```

### HTTPS Reverse Proxy (Caddy — otomatis SSL Let's Encrypt)

Tambahkan di `/etc/caddy/Caddyfile`:

```caddyfile
domainkamu.com {
    reverse_proxy 127.0.0.1:3000
}
```

Lalu reload: `sudo systemctl reload caddy`.
