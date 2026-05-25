import {useState} from "react";

function SimpleForm() {
    const [input, setInput] = useState(" ")
    const [hasil, setHasil] = useState("")

    const handleSubmit = (e) => {
      e.preventDefault(); // not rst
      setHasil(input); // Mengambil teks dalam kotak input, lalu memasukkannya ke dalam state hasil
      setInput(""); // ubah ke kosong setelah submit
    }

    return (
      <div>
        <form onSubmit={handleSubmit} className="p-4 ">
          <input
            type="text"
            className="border"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ketik disini..."
          />
          <button type="submit" className="pl-2 border">
            Submit
          </button>
        </form>
        {hasil && <p className="pl-2">Anda mengirim: {hasil}</p>}
        {/*tidak langsung muncul saat halaman pertama kali dimuat */}
      </div>
    );
}
export default SimpleForm;