    "use client"
    import Link from "next/link";
    import Image from "next/image";
    import { use, useEffect, useState } from "react";

    export default function Navbar() {
        const [user, setUser] = useState<{ id: string; email: string; username: string } | null>(null);

        useEffect(() => {
            const fetchUser = async () => {
                const response = await fetch("/api/me");
                if (response.ok) {
                    const data = await response.json();
                    setUser(data.user);
                }
            };
            fetchUser();
        }, []);

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

            <Link href="/course" className="hover:underline">Course</Link>
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
            {user ? (
            <>
              <span className="text-gray-700">Hi, {user.username || user.email}</span>
              <button
               
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-400 transition cursor-pointer"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/register">
                <button className="border-1 bg-white text-orange-500 px-4 py-2 rounded hover:bg-orange-400 hover:text-white transition cursor-pointer">
                  Register
                </button>
              </Link>
              <Link href="/login">
                <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-400 transition cursor-pointer">
                  Login
                </button>
              </Link>
            </>
          )}
            </div>
        </div>
        </nav>
    );
    }
