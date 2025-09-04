'use client'

import { useParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Section from '@/components/Section'
import Image from 'next/image'
import Link from 'next/link'

export default function CourseDetailPage() {
  const params = useParams()
  const slug = params.slug // misalnya: "html", "css", "javascript"

  useEffect(() => {
    // Fetch detail course berdasarkan slug
    fetch(`/api/course/${slug}`)
      .then(res => res.json())
      .then(data => {
        // Simpan data course ke state jika perlu
        console.log(data)
      })
      .catch(err => console.error(err))
  }, [slug])

  return (
   <div className="min-h-screen flex flex-col">
      <Navbar />

      <Section backgroundColor="bg-white" height="min-h-[400px]">
        <div className="max-w-6xl mx-auto px-4 py-10">
          
        </div>
      </Section>

      <Footer />
    </div>
  )
}
