import { useState } from "react";

// 1. KOMPONEN CHILD (Si Anak)
function Child({ onSend }) {
  const [text, setText] = useState("");

  const handleKirim = () => {
    if (!text.trim()) return; // Cek agar tidak kirim teks kosong
    onSend(text); // Kirim teks ke Parent lewat fungsi titipan
    setText(""); // Kosongkan input sesuai perintah soal
  };

  return (
    <div className="p-4 border mb-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Ketik pesan..."
        className="border p-2 mr-2 text-black"
      />
      <button
        onClick={handleKirim}
        className="border text-black px-4 py-2"
      >
        Kirim
      </button>
    </div>
  );
}

// 2. KOMPONEN PARENT (Si Induk)
function Parent() {
  const [messages, setMessages] = useState([]);

  // Nama fungsi sudah digabung (Bebas Eror)
  const tambahPesanBaru = (pesanBaru) => {
    setMessages([...messages, pesanBaru]); // Salin pesan lama + tambah yang baru
  };

  return (
    <div className="max-w-md mt-10 p-4 bg-white shadow rounded border">
      <h2 className="text-xl font-bold mb-4">Aplikasi Pesan</h2>

      {/* Menitipkan fungsi tambahPesanBaru ke Child melalui props onSend */}
      <Child onSend={tambahPesanBaru} />

      <h3 className="font-semibold mb-2">Daftar Pesan:</h3>
      <ul className="space-y-1">
        {messages.map((msg, index) => (
          <li key={index} className="p-2 rounded border">
            {msg}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Parent;
