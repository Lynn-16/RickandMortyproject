"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-slate-800 text-white">
      <div className="container mx-auto p-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          Rick & Morty App
        </Link>

        {/* Hamburger Icon */}
        <button
          className="lg:hidden p-2 focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Menu Items */}
        <nav
          className={`lg:flex items-center space-x-4 transition-transform duration-300 ${
            menuOpen ? "block" : "hidden lg:block"
          }`}
        >
          <Link
            href="/characters"
            className="block px-4 py-2 hover:bg-slate-700"
          >
            Personajes
          </Link>
          <Link href="/about" className="block px-4 py-2 hover:bg-slate-700">
            Sobre la App
          </Link>
          <button
            onClick={() => router.push("/contact")}
            className="block px-4 py-2 hover:bg-slate-700"
          >
            Contacto
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
