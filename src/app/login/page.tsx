'use client'

import { useState } from "react"
import { useRouter } from "next/navigation";


export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")
  
  const handleSubmit =async (e: React.FormEvent) => {
    e.preventDefault()
    setMessage("")

    try{
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      })

      const data = await res.json()
      if(!res.ok) {
        setMessage(data.message || "Login gagal")
      }else{
        router.push("/")
      }
    }catch(err){
      console.log(err)
      setMessage("Login gagal")
    }

  }

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

        {/* KANAN - Form Login */}
        <div className="bg-white p-10">
          <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
            Masuk ke Akun Anda
          </h1>

          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Email */}
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />

            {/* Password */}
            <input
              type="password"
              id="password"
              placeholder="Kata sandi"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />

            {/* Tombol Login */}
            <button
              type="submit"
              className="w-full bg-orange-500 text-white font-bold py-3 rounded-lg shadow-md hover:bg-orange-400 transition"
            >
              Masuk
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500 my-6">
            <hr className="flex-grow border-t border-gray-300" />
            atau
            <hr className="flex-grow border-t border-gray-300" />
          </div>

          {/* Tombol Login dengan Gmail */}
          <button
            type="button"
            onClick={() => alert('Login dengan Gmail')}
            className="w-full flex items-center justify-center gap-3 border border-gray-300 text-gray-700 font-semibold py-3 rounded-lg hover:bg-gray-100 transition"
          >
            <img src="/google-icon.svg" alt="Google" className="w-5 h-5" />
            Login dengan Gmail
          </button>

          {/* Link ke Register */}
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
