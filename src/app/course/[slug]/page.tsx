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
