'use client'

import { useParams } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Section from '@/components/Section'
import ReactPlayer from "react-player"

export default function LessonDetailPage() {
  const params = useParams()
  const { slug, id } = params
   const handleEnded = () => {
    alert("Video sudah selesai ditonton!");
  };

  return (
    <div className="min-h-screen flex flex-col">
        <Navbar />
        <Section backgroundColor="bg-white" height="min-h-[400px]">
            <div className="w-full ">
                   <ReactPlayer
                        src="https://www.youtube.com/watch?v=bPoNnr-rjno"
                        controls
                        width="100%"
                        height="660px"
                        className="mt-4"
                        // onEnded={handleEnded} // dipanggil saat video selesai
                    />

                    <div className="navigation flex justify-between items-center mt-6">
                        <button className="prev bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium px-4 py-2 rounded-lg shadow">
                            Previous
                        </button>
                        <button className="next bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg shadow">
                            Next
                        </button>
                    </div>

            </div>
        </Section>
        <Footer />
    </div>
  )
}
