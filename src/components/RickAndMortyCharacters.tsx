"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";

interface Character {
  id: number;
  name: string;
  image: string;
}

const RickAndMortyCharacters = () => {
  const searchParams = useSearchParams();
  const initialPage = Number(searchParams.get("page") || 1);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const [page, setPage] = useState(initialPage);
  const router = useRouter();

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character/?page=${page}`
        );
        // Obtener solo los primeros 20 personajes
        setCharacters(response.data.results);

        //console.log(response.data.results);
        // setCharacters(response.data.results.slice(0, 20));
      } catch (error) {
        console.error("Error fetching characters:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [page]);

  if (loading) {
    return <p className="text-center">Cargando personajes...</p>;
  }

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    router.push(`?page=${newPage}`);
  }; //42 paginas

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">
        Personajes de Rick y Morty
      </h1>
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {characters.map((character) => (
          <Link href={`characters/${character.id}`} key={character.id}>
            <div
              key={character.id}
              className="border rounded-lg p-4 shadow hover:shadow-lg transition transform hover:scale-105"
            >
              <h2 className="text-lg font-bold text-center mb-4">
                {character.name}
              </h2>

              <Image
                src={character.image}
                alt={character.name}
                width={500}
                height={500}
                className="w-full h-64 object-cover"
              />
            </div>
          </Link>
        ))}
      </div>

      <Pagination className="mt-4">
        <PaginationContent className="space-x-2 flex items-center justify-center">
          {/* Botón Anterior */}
          <PaginationItem>
            <PaginationPrevious
              className={`border rounded px-3 py-1 cursor-pointer ${
                page === 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={() => page > 1 && handlePageChange(page - 1)}
            />
          </PaginationItem>

          {/* Primera Página */}
          <PaginationItem>
            <PaginationLink
              className={`px-3 py-1 border rounded cursor-pointer ${
                page === 1 ? "bg-slate-800 text-white" : ""
              }`}
              onClick={() => handlePageChange(1)}
            >
              1
            </PaginationLink>
          </PaginationItem>

          {/* Puntos suspensivos antes de la página actual si necesario */}
          {page > 4 && (
            <PaginationItem>
              <span className="px-3 py-1">...</span>
            </PaginationItem>
          )}

          {/* Páginas cercanas a la actual */}
          {Array.from({ length: 5 }, (_, i) => page - 2 + i)
            .filter((p) => p > 1 && p < 42) // Evita incluir la primera y última página
            .map((p) => (
              <PaginationItem key={p}>
                <PaginationLink
                  className={`px-3 py-1 border rounded cursor-pointer ${
                    p === page ? "bg-slate-800 text-white" : ""
                  }`}
                  onClick={() => handlePageChange(p)}
                >
                  {p}
                </PaginationLink>
              </PaginationItem>
            ))}

          {/* Puntos suspensivos después de la página actual si necesario */}
          {page < 39 && (
            <PaginationItem>
              <span className="px-3 py-1">...</span>
            </PaginationItem>
          )}

          {/* Última Página */}
          <PaginationItem>
            <PaginationLink
              className={`px-3 py-1 border rounded cursor-pointer ${
                page === 42 ? "bg-slate-800 text-white" : ""
              }`}
              onClick={() => handlePageChange(42)}
            >
              42
            </PaginationLink>
          </PaginationItem>

          {/* Botón Siguiente */}
          <PaginationItem>
            <PaginationNext
              className={`border rounded px-3 py-1 cursor-pointer ${
                page === 42 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={() => page < 42 && handlePageChange(page + 1)}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default RickAndMortyCharacters;
