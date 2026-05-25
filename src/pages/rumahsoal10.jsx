import { useState } from "react";
function keCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

// rumus
function keFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

// Anak
function TemperatureInput({ scale, temperature, onTemperatureChange }) {
  return (
    <div className="mb-4">
      {/* Labelnya dinamis: bisa "Celsius" atau "Fahrenheit" */}
      <label className="block text-sm font-semibold mb-1 text-gray-700">
        Suhu dalam {scale}:
      </label>
      <input
        type="number"
        value={temperature}
        // Saat angka diubah, langsung lapor ke Parent lewat fungsi titipan
        onChange={(e) => onTemperatureChange(e.target.value)}
        placeholder="Masukkan angka..."
        className="w-full p-2 border rounded text-black"
      />
    </div>
  );
}

// 3. TemperatureConverter
function TemperatureConverter() {
  // Katrol utama: Kita cuma butuh simpan nilai angka terakhir dan jenis skalanya apa
  const [suhuSekarang, setSuhuSekarang] = useState("");
  const [skalaSekarang, setSkalaSekarang] = useState("C"); // 'C' atau 'F'

  // Logika hitung otomatis:
  // Jika skala yang sedang diketik user adalah Fahrenheit ('F'), maka nilai Celsius-nya harus dihitung pakai rumus
  const nilaiCelsius =
    skalaSekarang === "F" ? keCelsius(suhuSekarang) : suhuSekarang;

  // Jika skala yang sedang diketik user adalah Celsius ('C'), maka nilai Fahrenheit-nya harus dihitung pakai rumus
  const nilaiFahrenheit =
    skalaSekarang === "C" ? keFahrenheit(suhuSekarang) : suhuSekarang;

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow border">
      <h2 className="text-xl font-bold mb-6 text-center text-blue-600">
        Konverter Suhu Otomatis
      </h2>

      {/* Input untuk Celsius */}
      <TemperatureInput
        scale="Celsius"
        temperature={nilaiCelsius}
        onTemperatureChange={(angkaBaru) => {
          setSuhuSekarang(angkaBaru);
          setSkalaSekarang("C"); // Beritahu sistem bahwa user lagi mengetik di kotak Celsius
        }}
      />

      {/* Input untuk Fahrenheit */}
      <TemperatureInput
        scale="Fahrenheit"
        temperature={nilaiFahrenheit}
        onTemperatureChange={(angkaBaru) => {
          setSuhuSekarang(angkaBaru);
          setSkalaSekarang("F"); // Beritahu sistem bahwa user lagi mengetik di kotak Fahrenheit
        }}
      />
    </div>
  );
}

export default TemperatureConverter;
