import Footer from '../components/Footer'
import Section from '../components/Section'
import Navbar from '@/components/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
   <Section backgroundColor="bg-white" height="h-[700px]">
  <div className="max-w-6xl mx-auto px-4 text-center pt-36">
    <p className="text-6xl font-extrabold text-gray-800 mb-6">
      Belajar Pemrograman
    </p>
    <p className="text-xl text-gray-600 mb-8">
      Unlimited revisions and a flat monthly fee.
    </p>
    <button className="bg-orange-500 text-white font-bold py-3 px-8 rounded shadow-md hover:bg-orange-400 transition">
      See Plans
    </button>
  </div>
</Section>



      {/* Orange Section */}
      <Section backgroundColor="bg-white">
  <div className="relative p-10 bg-orange-500 text-white h-[500px] w-full rounded-3xl flex items-center justify-center">
    
    {/* 🟡 Screw di setiap pojok */}
    <Image src="/asset/screw.webp" alt="Top Left" width={30} height={30} className="absolute top-0 left-0 m-4" />
    <Image src="/asset/screw.webp" alt="Top Right" width={30} height={30} className="absolute top-0 right-0 m-4" />
    <Image src="/asset/screw.webp" alt="Bottom Left" width={30} height={30} className="absolute bottom-0 left-0 m-4" />
    <Image src="/asset/screw.webp" alt="Bottom Right" width={30} height={30} className="absolute bottom-0 right-0 m-4" />

    {/* Konten tengah */}
    <p className="text-2xl font-semibold max-w-2xl text-center z-10">
      Dapatkan pengalaman belajar yang menyenangkan dan interaktif dengan warna dan desain yang segar. Gunakan warna-warna yang tepat untuk meningkatkan fokus dan kenyamanan mata.
    </p>
  </div>
</Section>



      <Footer />
    </div>
  )
}
