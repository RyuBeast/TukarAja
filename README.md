## Anggota Kelompok

|      Nama Lengkap      |    NIM    |                                            Pembagian Tugas                                              |
| Pande Gede Nadi Atmaja | 240040081 | Setup Proyek, Navigasi, Halaman Kurs (`Home`), Struk Booking (`Receipt`), & Profil/Cabang (`Profile`)   |
| I Kadek Agus Wirawan   | 240040083 | Kalkulator Konversi (`Calculator`), Detail Valas (`Detail`), & Dokumentasi                              |

---

# TukarAja — Aplikasi Informasi Kurs & Booking Penukaran Valas

**TukarAja** adalah prototipe aplikasi mobile cross-platform berbasis **React Native (Expo)** yang dirancang untuk memudahkan pengguna memantau kurs valuta asing (Valas), menghitung estimasi penukaran secara *real-time*, serta melakukan reservasi penguncian kurs (*lock rate*) sebelum bertransaksi tunai di gerai fisik.

---

## Fitur Utama & Arsitektur Navigasi (5 Screen)

Aplikasi ini mengombinasikan **Bottom Tab Navigation** untuk menu utama dan **Stack Navigation** untuk alur detail serta bukti reservasi :

1. **Kurs (`HomeScreen` — Bottom Tab 1)**
   - Menampilkan informasi kurs Beli dan Jual berbagai mata uang asing menggunakan `FlatList` dan komponen *reusable* `CurrencyCard`.
   - Fitur pencarian mata uang secara langsung dan filter kategori (**Semua Kurs** & **Favorit**).
2. **Detail Mata Uang (`DetailScreen` — Stack Screen 1)**
   - Menampilkan rincian kurs beli, kurs jual, selisih (*spread*), dan persentase perubahan 24 jam berdasarkan data yang dikirim melalui `route.params`.
   - Tombol pintasan untuk langsung menghitung dan memesan mata uang terkait di kalkulator.
3. **Kalkulator (`CalculatorScreen` — Bottom Tab 2)**
   - Simulasi konversi untuk mode **Beli Valas** maupun **Jual Valas** dengan pilihan mata uang dan tombol nominal cepat (`50`, `100`, `500`, `1000`).
   - Perhitungan estimasi total Rupiah otomatis dan tombol **Booking Tukar Sekarang**.
4. **Struk Booking (`ReceiptScreen` — Stack Screen 2)**
   - Menampilkan tiket reservasi digital dengan kode *booking* unik (`#TKA-XXXX`), rincian nominal penukaran, dan status masa berlaku penguncian kurs untuk ditunjukkan kepada kasir di gerai.
5. **Profil & Gerai (`ProfileScreen` — Bottom Tab 3)**
   - Formulir interaktif untuk memperbarui data profil nasabah serta informasi alamat dan jam operasional cabang gerai TukarAja.

---

## Struktur Folder Proyek

TukarAja
├── assets/                  
├── components/
│   └── currencycard.js      # Komponen kartu kurs reusable berbasis Props
├── data/
│   └── currencies.js        # Data lokal daftar kurs valuta asing
├── navigation/
│   └── navigator.js         # Konfigurasi Bottom Tab & Stack Navigator
├── screens/
│   ├── homescreen.js        # Halaman utama daftar kurs & pencarian
│   ├── detailscreen.js      # Halaman detail mata uang & info spread
│   ├── calculatorscreen.js  # Halaman kalkulator konversi & booking
│   ├── receiptscreen.js     # Halaman struk bukti booking tukar
│   └── profilescreen.js     # Halaman profil pengguna & lokasi gerai
├── App.js                   # Entry point utama aplikasi
├── app.json                 
├── package.json             
└── README.md                # Dokumentasi proyek

## Referensi Desain Antarmuka (UI)

- **Katalog Kurs & Kalkulator :** Mengadaptasi pola tampilan daftar aset dan kartu konversi dari aplikasi **Floq**.
- **Struk Booking :** Mengadaptasi tata letak tiket reservasi digital (*E-Ticket*) dari referensi desain **Dribbble**.