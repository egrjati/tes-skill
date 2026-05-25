import { useState } from "react";

function Apps() {
  // Awalnya kosong []
  const [todos, setTodos] = useState([
   
  ]);

  // Menyimpan isi input text
  const [inputTeks, setInputTeks] = useState("");

  // Menyimpan filter aktif
  const [filter, setFilter] = useState("Semua");

  // TAMBAH TODO
  const tambahTodo = (e) => {
   
    e.preventDefault();

    // Jika input kosong
    // hentikan fungsi
    if (inputTeks.trim() === "") return;

    // Membuat object tipe todo baru
    const baru = {
      id: todos.length + 1,
      teks: inputTeks,
      selesai: false,
    };

    // Menambahkan todo baru ke array lama
    setTodos([...todos, baru]);

    setInputTeks("");
  };

  // CHECKLIST TODO
  const toggleSelesai = (id) => {
    // Membuat array baru
    const diupdate = todos.map((item) => {
      // Jika id cocok
      if (item.id === id) {
        // Salin semua data lama
        // lalu ubah selesai menjadi kebalikannya
        return {
          ...item,
          selesai: !item.selesai,
        };
      }

      // Jika bukan id yang dicari
      // biarkan tetap
      return item;
    });

    // Simpan hasil update
    setTodos(diupdate);
  };

  // HAPUS TODO
  const hapusTodo = (id) => {
    // Ambil semua item
    // kecuali id-nya sama
    const sisa = todos.filter((item) => item.id !== id);

    // Update state
    setTodos(sisa);
  };

  // FILTER DATA
  const todoYangMuncul = todos.filter((item) => {
    // Tampilkan yang belum selesai
    if (filter === "Aktif") {
      return item.selesai === false;
    }

    // Tampilkan yang sudah selesai
    if (filter === "Selesai") {
      return item.selesai === true;
    }

    // Selain itu tampilkan semua
    return true;
  });

  // HITUNG TODO TERSISA
  const totalSisa = todos.filter((item) => item.selesai === false).length;

  return (
    <div className="p-6 max-w-sm mx-auto border border-black mt-10 font-mono">
      <h2 className="text-lg font-bold mb-4">Todo List</h2>

      {/* FORM INPUT */}
      <form onSubmit={tambahTodo} className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Ketik todo baru..."
          value={inputTeks}
          onChange={(e) => setInputTeks(e.target.value)}
          className="border border-black p-1 flex-1 text-black"
        />

        <button
          type="submit"
          className="border border-black px-2 py-1 bg-gray-100"
        >
          Tambah
        </button>
      </form>

      {/* CEK ADA TODO */}
      {todos.length === 0 ? (
        <p className="text-gray-500 text-sm">
          Belum ada tugas, silakan tambahkan!
        </p>
      ) : (
        <ul className="mb-4 space-y-2">
          {todoYangMuncul.map((item) => (
            <li key={item.id} className="flex items-center justify-between">
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => toggleSelesai(item.id)}
              >
                {/* checked dari selesai */}
                <input type="checkbox" checked={item.selesai} readOnly />

                <span
                  className={
                    item.selesai ? "line-through text-gray-400" : "text-black"
                  }
                >
                  {item.teks}
                </span>
              </div>

              <button onClick={() => hapusTodo(item.id)} className="text-sm">
                [Hapus]
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* BAGIAN FILTER TODO */}
      <div className="flex gap-2 mb-2 text-sm border-t border-dashed border-black pt-2">
        {/* Tombol untuk menampilkan semua todo */}
        <button
          // Saat diklik, ubah state filter menjadi "Semua"
          onClick={() => setFilter("Semua")}
          // tanda
          className={filter === "Semua" ? "underline font-bold" : ""}
        >
          [Semua]
        </button>

        <button
          // Ubah filter menjadi "Aktif"
          onClick={() => setFilter("Aktif")}
        
          // tanda aktif
          className={filter === "Aktif" ? "underline font-bold" : ""}
        >
          [Aktif]
        </button>

        {/* Tombol untuk menampilkan todo yang sudah selesai */}
        <button
          // Ubah filter menjadi "Selesai"
          onClick={() => setFilter("Selesai")}

          className={filter === "Selesai" ? "underline font-bold" : ""}
        >
          [Selesai]
        </button>
      </div>

      <div className="text-sm">{totalSisa} todo tersisa</div>
    </div>
  );
}

export default Apps;
