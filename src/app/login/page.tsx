'use client' // <- tambahkan ini!

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 shadow-lg rounded-3xl overflow-hidden">
        
        {/* KIRI - Oranye */}
        <div className="bg-orange-500 text-white flex items-center justify-center p-10">
          <div className="text-center space-y-6">
            <h2 className="text-4xl font-extrabold">Selamat Datang!</h2>
            <p className="text-lg font-light">
              Belajar jadi lebih menyenangkan dan fokus dengan desain cerah dan nyaman.
            </p>
          </div>
        </div>

        {/* KANAN - Form */}
        <div className="bg-white p-10">
          <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
            Masuk ke Akun Anda
          </h1>

          <form className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="contoh@email.com"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Kata Sandi</label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder=""
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white font-bold py-3 rounded-lg shadow-md hover:bg-orange-400 transition"
            >
              Masuk
            </button>
          </form>

          {/* Tombol Gmail */}
          <button
            type="button"
            onClick={() => alert('Login dengan Gmail')}
            className="w-full mt-4 flex items-center justify-center gap-3 border border-gray-300 text-gray-700 font-semibold py-3 rounded-lg hover:bg-gray-100 transition"
          >
            <img src="/google-icon.svg" alt="Google" className="w-5 h-5" />
            Login dengan Gmail
          </button>

          <p className="text-sm text-center text-gray-600 mt-6">
            Belum punya akun?{' '}
            <a href="/register" className="text-orange-500 font-semibold hover:underline">
              Daftar
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
