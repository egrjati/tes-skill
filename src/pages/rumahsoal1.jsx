// default "Tamu"
function Greeting({ name = "Tamu" }) {
  return <p className="font-medium">Halo, {name}! Selamat datang di React.</p>;
}

function Soal1() {
  return (
    <div className="p-8 max-w-xl">
      <h2 className="text-xl font-bold mb-4 border-b pb-2">
        Soal ke 1
      </h2>

      {/* bagian dengan nama */}
      <div className="border p-4 mb-3">
        <p className="text-sm text-gray-500 mb-1">Dengan nama:</p>
        <Greeting name="Adi" />
      </div>

      {/* bagian tanpa nama */}
      <div className="border p-4">
        <p className="text-sm text-gray-500 mb-1">default:</p>
        <Greeting />
      </div>
    </div>
  );
}

export default Soal1;
