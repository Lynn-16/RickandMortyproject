"use client";
import { useParams } from "next/navigation";
import { Character } from "@/app/types/characters";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
export default function CharacterName() {
  const { characterid } = useParams();
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState<Character>({
    name: "",
    gender: "",
    species: "",
    status: "",
    image: "",
    episodes: [],
  });

  useEffect(() => {
    const getCharacter = async () => {
      try {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character/${characterid}`
        );

        //const data = response.data;
        //console.log(data);

        const info = {
          name: response.data.name,
          gender: response.data.gender,
          species: response.data.species,
          status: response.data.status,
          image: response.data.image,
          episodes: response.data.episode.length,
        };
        //console.log(info);

        setCharacter(info);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching character:", error);
        setLoading(false);
      }
    };
    getCharacter();
  }, []);

  if (loading) {
    return <p className="text-center">Cargando personajes...</p>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-sm w-full p-4 rounded-lg shadow-lg bg-white">
        <div className="flex flex-col items-center">
          <Image
            src={character.image}
            alt={character.name}
            width={500}
            height={500}
            className="w-40 h-40 rounded-full object-cover shadow-md"
          ></Image>
          <h1 className="text-2xl font-bold mt-4">{character?.name}</h1>
          <p className="text-gray-500">{character?.species}</p>
        </div>
        <div className="mt-4">
          <p>
            <strong>Estado:</strong> {character?.status}
          </p>
          <p>
            <strong>Género:</strong> {character?.gender}
          </p>
          <p>
            <strong>Episodios:</strong> {character?.episodes}
          </p>
        </div>
      </div>
    </div>
  );
}
