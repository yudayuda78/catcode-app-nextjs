'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Section from '@/components/Section'
import Image from 'next/image'

export default function EcoursePage() {
  const [searchTerm, setSearchTerm] = useState('')

  const courses = [
    {
      name: 'HTML',
      icon: '/stacklogo/html.webp',
      progress: 75,
    },
    {
      name: 'CSS',
      icon: '/stacklogo/css.webp',
      progress: 40,
    },
    {
      name: 'JavaScript',
      icon: '/stacklogo/js.webp',
      progress: 10,
    },
  ]

  // Filter berdasarkan pencarian
  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <Section backgroundColor="bg-white" height="min-h-[400px]">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-6">
            Materi E-Course
          </h1>

          {/* 🔍 Search Bar */}
          <div className="flex justify-center mb-8">
            <input
              type="text"
              placeholder="Cari materi (misal: HTML, CSS...)"
              className="w-full md:w-1/2 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Course Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-semibold">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course, idx) => (
                <div
                  key={idx}
                  className="border-2 border-orange-500 bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center hover:scale-105 transition"
                >
                  <Image
                    src={course.icon}
                    alt={course.name + ' Logo'}
                    width={60}
                    height={60}
                    className="mb-4"
                  />
                  <p className="text-black text-xl mb-2">{course.name}</p>

                  {/* Progress bar */}
                  <div className="w-full mt-4 mb-2">
                    <div className="text-sm text-gray-600 text-left mb-1">
                      Progress: {course.progress}%
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-orange-500 h-3 rounded-full transition-all duration-300"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>

                  <button className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-lg shadow hover:bg-orange-400 transition">
                    Belajar
                  </button>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 col-span-3">
                Materi tidak ditemukan.
              </p>
            )}
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  )
}
