
import Footer from '../components/Footer'
import Section from '../components/Section'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <div>
    <Navbar/>
    <Section backgroundColor='bg-white' height="h-[700px]">
      <div className="max-w-6xl mx-auto px-4 text-center pt-20">
      <p className='text-3xl font-bold'>Belajar Pemograman</p>
      <p className=" text-lg mb-6">Unlimited revisions and a flat monthly fee.</p>
      <button className="bg-orange-500 text-black font-bold py-2 px-6 rounded shadow-md hover:bg-orange-400 transition">
        See Plans
      </button>
      </div>
    </Section>
   <Section backgroundColor='bg-orange-500'>
      <p>sadasdasd</p>
   </Section>

    < Footer />
    </div>
  );
}
