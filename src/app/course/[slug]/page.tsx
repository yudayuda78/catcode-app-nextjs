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
  slug: string;
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
  const [openTopics, setOpenTopics] = useState<number[]>([])

  useEffect(() => {
    fetch(`/api/course/${slug}`)
      .then(res => res.json())
      .then((data: Course) => setCourse(data))
      .catch(err => console.error(err))
  }, [slug])

  const toggleTopic = (id: number) => {
    setOpenTopics(prev => 
      prev.includes(id) 
      ? prev.filter(tid => tid !== id) 
      : [...prev, id]                  
    )
  }

  useEffect(() => {
  console.log("Open Topics:", openTopics)
}, [openTopics])

  return (
   <div className="min-h-screen flex flex-col">
      <Navbar />

      <Section backgroundColor="bg-white" height="min-h-[400px]">
        <div className="w-full bg-amber-100">
          
          <div className="img flex mt-8 justify-center bg-amber-200">
            <Image src={course?.image ?? "/default-course.png"} alt={course?.title ?? "Course"} width={90} height={90} className="rounded-lg"/>
          </div>
          <div className="text-center">{course?.title}</div>

          <div>{course?.description}</div>
          <div className='bg-amber-600'>
            {course?.topics.map(topic => (
              <div key={topic.id}>
                   <button
                  className="w-full md:w-1/2 mt-2 lg:w-full flex justify-between items-center p-4 bg-amber-200 hover:bg-green-300 font-semibold rounded-lg transition"
                  onClick={() => toggleTopic(topic.id)}
                >
                  <span>{topic.title}</span>
                  <span>{openTopics.includes(topic.id) ? "▲" : "▼"}</span>
                </button>

               {openTopics.includes(topic.id) && (
                  <div className="bg-blue-50 p-4">
                    <div className="mb-2 font-medium">Lessons:</div>
                    {topic.lessons.length > 0 ? (
                      topic.lessons.map(lesson => (
                        <div key={lesson.id} className="ml-4 my-1">
                          <Link
                            href={`/course/${course?.slug}/${lesson.id}`}
                            className="text-blue-600 hover:underline"
                          >
                            {lesson.title}
                          </Link>
                        </div>
                      ))
                    ) : (
                      <p className="ml-4 text-gray-500">No lessons yet.</p>
                    )}

                    {topic.tests.length > 0 && (
                      <div className="mt-4">
                        <div className="font-medium">Tests:</div>
                        {topic.tests.map(test => (
                          <div key={test.id} className="ml-4 my-1">
                            <span className="text-gray-700">{test.title}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
             
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  )
}
