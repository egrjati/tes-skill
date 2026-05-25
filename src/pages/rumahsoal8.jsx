import { useState } from "react";

// 1. MEMBUAT CUSTOM HOOK (Mesin Utama)
function useToggle(initialValue) {
  // Membuat state untuk menyimpan status true atau false
  const [value, setValue] = useState(initialValue);

  // Fungsi untuk membalikkan nilai
  const jalankanToggle = () => {
    if (value === true) {
      setValue(false); // Kalau tadinya true, ubah jadi false
    } else {
      setValue(true); // Kalau tadinya false, ubah jadi true
    }
  };

  // Kembalikan hasilnya berupa array agar bisa dipakai di bawah
  return [value, jalankanToggle];
}

// 2. KOMPONEN UTAMA UNTUK DITAMPILKAN
function ToggleDemo() {
  // Memanggil Custom Hook buatan kita di atas
  const [isOn, toggle] = useToggle(false);

  return (
    <div className="p-8 text-center max-w-xs mx-auto border mt-10 rounded shadow">
      {/* Tampilan Status: Pakai If-Else Bersih kesukaan kamu */}
      <h1 className="text-xl font-bold mb-4">{isOn === true ? "ON" : "OFF"}</h1>

      {/* Tombol dengan fungsi onClick yang kelihatan jelas aksinya */}
      <button
        onClick={() => toggle()}
        className={
          isOn === true
            ? "bg-green-500 text-white px-4 py-2 rounded"
            : "bg-red-500 text-white px-4 py-2 rounded"
        }
      >
        Ubah
      </button>
    </div>
  );
}

export default ToggleDemo;
