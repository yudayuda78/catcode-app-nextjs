'use client'

import { useState } from "react"


export default function RegisterPage() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 shadow-lg rounded-3xl overflow-hidden">
        
        {/* KIRI - Oranye */}
        <div className="bg-orange-500 text-white flex items-center justify-center p-10">
          <div className="text-center space-y-6">
            <h2 className="text-4xl font-extrabold">Gabung Sekarang!</h2>
            <p className="text-lg font-light">
              Mulai perjalanan belajarmu dengan pengalaman menyenangkan dan penuh warna.
            </p>
          </div>
        </div>

        {/* KANAN - Form Register */}
        <div className="bg-white p-10">
          <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
            Daftar Akun Baru
          </h1>

          <form className="space-y-5">
            {/* Input Nama */}
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />

            {/* Input Email */}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />

            {/* Input Password */}
            <input
              type="password"
              placeholder="Kata sandi (min. 6 karakter)"
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />

            {/* Konfirmasi Password */}
            <input
              type="password"
              placeholder="Konfirmasi kata sandi"
              minLength={6}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />

            {/* Tombol Daftar */}
            <button
              type="submit"
              onClick={() => {
                if (password !== confirmPassword) {
                  alert("Kata sandi tidak cocok");
                } else {
                  alert("Pendaftaran berhasil");
                }
              }}
              className="w-full bg-orange-500 text-white font-bold py-3 rounded-lg shadow-md hover:bg-orange-400 transition"
            >
              Daftar
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500 my-6">
            <hr className="flex-grow border-t border-gray-300" />
            atau
            <hr className="flex-grow border-t border-gray-300" />
          </div>

          {/* Tombol Gmail */}
          <button
            type="button"
            onClick={() => alert('Daftar dengan Gmail')}
            className="w-full flex items-center justify-center gap-3 border border-gray-300 text-gray-700 font-semibold py-3 rounded-lg hover:bg-gray-100 transition"
          >
            <img src="/google-icon.svg" alt="Google" className="w-5 h-5" />
            Daftar dengan Gmail
          </button>

          {/* Link Login */}
          <p className="text-sm text-center text-gray-600 mt-6">
            Sudah punya akun?{' '}
            <a href="/login" className="text-orange-500 font-semibold hover:underline">
              Masuk di sini
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
