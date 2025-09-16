'use client'

import { useParams } from 'next/navigation'

export default function LessonDetailPage() {
  const params = useParams()
  const { slug, id } = params

  return (
    <div>
      <h1>Course: {slug}</h1>
      <h2>Lesson/Test ID: {id}</h2>
    </div>
  )
}
