import Navbar from "@/components/Navbar"

export default function AboutPage() {
  return (
    <div>
    <Navbar/>
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="text-gray-700">Ini adalah halaman tentang kami.</p>
    </main>
    </div>
  );
}
