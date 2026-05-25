import { useState, useEffect } from "react";

function UserList() {
  // 1. Tiga State untuk mengontrol 3 kondisi di soal
  const [users, setUsers] = useState([]); //ksng
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 2. Mengambil data otomatis di awal
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    // pertama, bongkar lempar
      .then((res) => {
        if (!res.ok) throw new Error("Koneksi rmasalah");
        return res.json();
      })
      // kedua, tangkap dan namai
      .then((data) => {
        setUsers(data); //lemari
        setLoading(false); // x loading
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // kondisi
  if (loading) return <div className="text-center p-5">Loading...</div>;
  if (error)
    return <div className="text-center text-red-500 p-5">Error: {error}</div>;

  // 4. sukes
  return (
    <div className="max-w-md p-4 bg-white shadow rounded">
      <h2 className="text-lg font-bold mb-3">Daftar User</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="p-2 border-b">
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
