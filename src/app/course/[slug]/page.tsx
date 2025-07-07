'use client'

import { useParams } from 'next/navigation'

export default function CourseDetailPage() {
  const params = useParams()
  const slug = params.slug // misalnya: "html", "css", "javascript"

  return (
    <div className="min-h-screen p-10 bg-white">
      <h1 className="text-4xl font-bold text-orange-600 mb-6 capitalize">
        Materi {slug}
      </h1>

      {/* Konten khusus per materi */}
      <p className="text-gray-700 mb-4">
        Ini adalah halaman pembelajaran untuk <strong>{slug}</strong>. Tambahkan video, quiz, dan tugas di sini.
      </p>

      {/* Bisa tampilkan video atau quiz berdasarkan slug */}
      {/* Contoh: if (slug === 'html') { tampilkan konten HTML } */}
    </div>
  )
}
