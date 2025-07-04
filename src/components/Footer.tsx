export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Kolom 1: Tentang */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Tentang Kami</h3>
          <p className="text-sm text-gray-400">
            Kami adalah platform edukasi digital yang menyediakan tryout, latihan soal, dan materi pembelajaran interaktif.
          </p>
        </div>

        {/* Kolom 2: Tautan */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Tautan Penting</h3>
          <ul className="text-sm space-y-1 text-gray-400">
            <li><a href="/about" className="hover:text-white">Tentang Kami</a></li>
            <li><a href="/privacy" className="hover:text-white">Kebijakan Privasi</a></li>
            <li><a href="/terms" className="hover:text-white">Syarat & Ketentuan</a></li>
            <li><a href="/contact" className="hover:text-white">Kontak</a></li>
          </ul>
        </div>

        {/* Kolom 3: Kontak */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Kontak</h3>
          <p className="text-sm text-gray-400">Email: info@websitekamu.com</p>
          <p className="text-sm text-gray-400">WhatsApp: +62 812-3456-7890</p>
        </div>
      </div>

      {/* Garis & Copyright */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-xs text-gray-500">
        © 2025 Your Website. All rights reserved.
      </div>
    </footer>
  );
}
