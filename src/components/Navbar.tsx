    import Link from "next/link";
    import Image from "next/image";

    export default function Navbar() {
    return (
        <nav className="relative bg-white border border-black px-6 py-4 text-black">
        {/* Container */}
        <div className="max-w-6xl mx-auto flex items-center justify-between">

            {/* Left menu */}
            <div className="flex items-center gap-6 text-sm font-semibold">
            {/* Logo kiri */}
            <Link href="/" className="block w-10 h-10 relative">
                <Image
                src="/logo.png" // ganti dengan path logo kamu
                alt="CatCode Logo"
                fill
                className="object-contain"
                />
            </Link>

            <a href="#" className="hover:underline">Course</a>
            <Link href="#" className="hover:underline">About Us</Link>
            <a href="#" className="hover:underline">Roadmap</a>
            </div>

            {/* Center logo (menjorok ke bawah) */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-full -mt-6 bg-white px-4 border border-black z-10">
            <h1 className="text-2xl font-extrabold tracking-widest text-black">
                CatCode
            </h1>
            </div>

            {/* Right menu */}
            <div className="flex items-center gap-4 text-sm font-semibold">
            <a href="#" className="hover:underline">Toy Store</a>
            <div className="flex items-center gap-1">
                <span>⭐</span>
                <span>0/10</span>
            </div>
            <div className="flex items-center gap-1">
                <span>🍒</span>
                <span>0</span>
            </div>
            <button className="bg-orange-500 text-black px-4 py-2 rounded hover:bg-orange-400 transition cursor-pointer">
            Sign In
          </button>
            </div>
        </div>
        </nav>
    );
    }
