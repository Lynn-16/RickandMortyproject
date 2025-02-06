"use client";
import Image from "next/image";
import Link from "next/link";

const HomeContent = () => {
  return (
    <main className="bg-slate-100 min-h-screen py-10">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-800 mb-6">
          Bienvenido a la App de Rick & Morty
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Explora los personajes de esta icónica serie y descubre sus historias.
        </p>

        {/* Call to Action */}
        <Link href="/characters">
          <button className="bg-slate-800 text-white py-3 px-6 rounded-full text-lg hover:bg-slate-700 transition">
            Ver Personajes
          </button>
        </Link>

        {/* Responsive Image Section */}
        <div className="mt-10">
          <Image
            src="/image.jpg"
            alt="Rick and Morty Landing"
            width={800}
            height={400}
            className="mx-auto rounded-lg shadow-lg max-w-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
          <div className="bg-white p-6 shadow rounded-lg">
            <h2 className="text-2xl font-bold text-slate-800 mb-2">
              Explora Personajes
            </h2>
            <p className="text-gray-600">
              Accede a una lista completa de personajes de Rick & Morty.
            </p>
          </div>
          <div className="bg-white p-6 shadow rounded-lg">
            <h2 className="text-2xl font-bold text-slate-800 mb-2">
              Información Detallada
            </h2>
            <p className="text-gray-600">
              Descubre datos interesantes de cada personaje.
            </p>
          </div>
          <div className="bg-white p-6 shadow rounded-lg">
            <h2 className="text-2xl font-bold text-slate-800 mb-2">
              Diseño Responsivo
            </h2>
            <p className="text-gray-600">
              La aplicación está diseñada para ajustarse a cualquier
              dispositivo.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomeContent;
