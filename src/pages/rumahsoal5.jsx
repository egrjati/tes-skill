import { useState } from "react";

function LoginStatus({ isLoggedIn }) {
  // 1. sebagai nilai awal state isAuth isinya x
  const [isAuth, setIsAuth] = useState(isLoggedIn); //

  return (
    <div className="p-6 max-w-xs mx-auto bg-white rounded-lg shadow border text-center mt-10">
      <p className="text-lg font-bold mb-4">
        {isAuth
          ? "Selamat datang kembali 👋"
          : "Silakan login terlebih dahulu."}
      </p>

      {/* balikkan nilai boolean kayak saklar*/}
      <button
        onClick={() => setIsAuth(!isAuth)}
        className="px-4 py-2 border text-black rounded"
      >
        {isAuth ? "Logout" : "Login"}
        {/* cuma dibalik */}
      </button>
    </div>
  );
}
export default LoginStatus;