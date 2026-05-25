import {useState} from 'react'

function Counter() {
    const [angka, ubahAngka] = useState(0)

    return (
        <div className="p-8 max-w-xl bg-slate-100">
            <h1 className="text-black/60 mb-4 font-semibold text-center text-2xl" >
                Fungsi Counter
            </h1>

            <div className="flex gap-4 justify-center items-center" >
            {/* Kurang */}
            <button onClick={() => ubahAngka(angka -1) } >
                -
            </button>

            {/* Untuk menampilkan Angka */}
            <div className="flex gap-4 text-2xl justify-center items-center">
                {angka}
            </div>

            {/* Tambah */}
            <button onClick={() => ubahAngka(angka +1) } >
                +
            </button>
            </div>
            {/* Button Reset */}
            <button onClick={() => ubahAngka(0)}>
                Reset
            </button>
        </div>
    );
}
export default Counter;
