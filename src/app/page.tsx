
import Footer from '../components/Footer'
import Section from '../components/Section'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <div>
      <Navbar/>
    <Section
  title="super hello"
  subtitle="A design agency...kinda"
>
  <p className="text-white text-lg mb-6">Unlimited revisions and a flat monthly fee.</p>
  <button className="bg-orange-500 text-black font-bold py-2 px-6 rounded shadow-md hover:bg-orange-400 transition">
    See Plans
  </button>
</Section>

    < Footer />
    </div>
  );
}
