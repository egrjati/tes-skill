import React, { useState } from "react";

// Komponen menerima data titipan (prop) berupa array bernama 'items'
function SearchableList({ items }) {
  // 1. Membuat state untuk menyimpan apa yang sedang diketik user
  const [kataKunci, setKataKunci] = useState("");

  // 2. PROSES PENYARINGAN (FILTER)
  // Kita buat variabel baru untuk menampung hasil saringan
  const hasilFilter = items.filter((item) => {
    // Ubah semua teks jadi huruf kecil (toLowerCase) agar pencarian tidak sensitif (case-insensitive)
    const namaItemKecil = item.toLowerCase();
    const kataKunciKecil = kataKunci.toLowerCase();

    // Cek apakah nama item mengandung kata kunci yang diketik
    return namaItemKecil.includes(kataKunciKecil);
  });

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow border">
      <h2 className="text-xl font-bold mb-4">Pencarian Daftar</h2>

      {/* 3. INPUT TEKS (Tempat user mengetik) */}
      <input
        type="text"
        placeholder="Cari item di sini..."
        value={kataKunci}
        onChange={(e) => setKataKunci(e.target.value)} // Setiap mengetik, update state kataKunci
        className="w-full p-2 border rounded mb-4 text-black"
      />

      {/* 4. KONDISI JIKA HASIL TIDAK DITEMUKAN */}
      {hasilFilter.length === 0 ? (
        <p className="text-gray-500 italic text-center">
          Tidak ada hasil ditemukan.
        </p>
      ) : (
        // 5. KONDISI JIKA BERHASIL: Tampilkan daftar hasil saringan
        <ul className="space-y-1">
          {hasilFilter.map((item, index) => (
            <li key={index} className="p-2 bg-gray-50 border-b">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchableList;
