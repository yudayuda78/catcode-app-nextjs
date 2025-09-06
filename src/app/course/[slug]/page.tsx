'use client'

import { useParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Section from '@/components/Section'
import Image from 'next/image'
import Link from 'next/link'


type Lesson = {
  id: number;
  title: string;
  videoUrl: string;
  createdAt: string;
  topicId: number;
};

type Test = {
  id: number;
  title: string;
  createdAt: string;
  topicId: number;
};

type Topic = {
  id: number;
  title: string;
  createdAt: string;
  courseId: number;
  lessons: Lesson[];
  tests: Test[];
};

type Course = {
  id: number;
  title: string;
  slug: string;
  image: string;
  description: string | null;
  createdAt: string;
  topics: Topic[];
};


export default function CourseDetailPage() {
  const params = useParams()
  const slug = params.slug
  const [course, setCourse] = useState<Course | null>(null)

  useEffect(() => {
    fetch(`/api/course/${slug}`)
      .then(res => res.json())
      .then((data: Course) => setCourse(data))
      .catch(err => console.error(err))
  }, [slug])

  return (
   <div className="min-h-screen flex flex-col">
      <Navbar />

      <Section backgroundColor="bg-white" height="min-h-[400px]">
        <div className="max-w-6xl mx-auto px-4 py-10">
          
          <div className="img flex justify-center">
            <Image src={course?.image ?? "/default-course.png"} alt={course?.title ?? "Course"} width={90} height={90} className="rounded-lg"/>
          </div>
          <div>{course?.title}</div>
          <div>{course?.description}</div>
          <div>
            {course?.topics.map(topic => (
              <div key={topic.id}>
                <h3>{topic.title}</h3>
                <div>
                  {topic.lessons.map(lesson => (
                    <div key={lesson.id}>
                      <h4>{lesson.title}</h4>
                      <video src={lesson.videoUrl} controls />
                    </div>
                  ))}
                </div>
                <div>
                  {topic.tests.map(test => (
                    <div key={test.id}>
                      <h4>{test.title}</h4>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  )
}
