"use client";
import Link from "next/link";
import { Github, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-6 mt-10">
      <div className="container mx-auto text-center">
        <p className="text-sm mb-4">
          &copy; {new Date().getFullYear()} Rick & Morty App. Todos los derechos
          reservados.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-4">
          <Link href="https://github.com/" target="_blank" aria-label="GitHub">
            <Github className="h-6 w-6 hover:text-gray-400" />
          </Link>
          <Link
            href="https://twitter.com/"
            target="_blank"
            aria-label="Twitter"
          >
            <Twitter className="h-6 w-6 hover:text-gray-400" />
          </Link>
          <Link href="mailto:example@example.com" aria-label="Email">
            <Mail className="h-6 w-6 hover:text-gray-400" />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex justify-center space-x-4">
          <Link href="/privacy" className="text-sm hover:text-gray-400">
            Política de Privacidad
          </Link>
          <Link href="/terms" className="text-sm hover:text-gray-400">
            Términos de Servicio
          </Link>
          <Link href="/contact" className="text-sm hover:text-gray-400">
            Contacto
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
