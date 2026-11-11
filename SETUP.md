# Berdua — Panduan Pasang (± 15 menit)

App khusus Nain & Syalwa: beranda hitung hari, kenangan foto, chat, lokasi live. Statis (HTML/JS) + Firebase.

## 1. Buat proyek Firebase BARU
Jangan pakai proyek kasir-in, supaya aturan (rules) kasir-in tidak tertimpa.
1. https://console.firebase.google.com → Add project → nama bebas (mis. `berdua-nain-syalwa`). Google Analytics boleh dimatikan.
2. **Build → Authentication → Get started → Sign-in method → Email/Password → Enable.**
3. Tab **Users → Add user**: buat 2 akun (email + sandi) — satu untuk Nain, satu untuk Syalwa. Hanya 2 akun ini yang dipakai.
4. **Build → Realtime Database → Create database** → lokasi `asia-southeast1 (Singapore)` → mulai dalam *locked mode*.
5. **Project settings (ikon roda) → Your apps → ikon Web `</>`** → daftar app → salin objek `firebaseConfig`.

## 2. Isi konfigurasi
Buka `firebase-config.js`, ganti semua nilai `ISI_...` dengan data dari langkah 5 (pastikan `databaseURL` terisi).

## 3. Pasang aturan (rules) — WAJIB
1. Buka `database.rules.json`.
2. Ganti `EMAIL_1_DI_SINI` dan `EMAIL_2_DI_SINI` (muncul beberapa kali: gunakan Find & Replace All) dengan **dua email akun tadi, huruf kecil semua**.
3. Salin seluruh isi file → Realtime Database → tab **Rules** → tempel → **Publish**.

Aturan ini membuat hanya dua email tersebut yang bisa membaca/menulis. Tanpa langkah ini, app tidak bisa membaca data.

## 4. Upload (hosting)
Cara termudah: Vercel / Netlify / GitHub Pages — upload seluruh isi folder ini. Harus HTTPS (lokasi & PWA butuh HTTPS).
Firebase Console → Authentication → Settings → **Authorized domains** → tambahkan domain hosting kalian.

## 5. Pertama kali dipakai
- Masuk dengan email/sandi masing-masing → pilih "Kamu siapa?" (Nain / Syalwa; terkunci setelah dipilih).
- Yang pertama masuk mengisi tanggal jadian & ulang tahun.
- Di HP: buka lewat Chrome → menu ⋮ → *Tambahkan ke layar utama*.

## Catatan jujur
- **Lokasi** hanya diperbarui selama app terbuka (web app tidak bisa melacak di latar belakang seperti Find My). Untuk pelacakan penuh butuh app native.
- **Foto** disimpan terkompres di Realtime Database (Storage butuh paket Blaze). Cukup untuk ribuan foto; gratis 1 GB.
- **Notifikasi** hanya muncul saat app terbuka. Push sungguhan butuh server/Blaze.
- Aturan Firebase asli belum diuji di proyek kalian — setelah publish, coba login & kirim chat; jika "Akses ditolak", cek email di rules.
