import React from "react";

function Buah() {

    const buah = [
        { id: 1, nama: "Apel" },
        { id: 2, nama: "Mangga"},
        { id: 3, nama: "Jeruk"},
    ]

    return (
        <ul className="p-8 max-w-xl bg-slate-100" >
            {buah.map((apa) => (
                <li key={apa.id} className="text-black/60 mb-4 font-semibold text-center text-2xl" >
                - {apa.nama}
                </li>
            ))}
        </ul>

        
    );
}
export default Buah;
//.map() ketika ingin mengubah data array menjadi elemen JSX yang ditampilkan di halaman.
//key={apa.id} harus unik