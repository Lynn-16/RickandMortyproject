import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["rickandmortyapi.com"], // Agrega el dominio permitido aquí
  },
};

export default nextConfig;
