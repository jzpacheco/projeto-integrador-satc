import React from "react";
import Link from "next/link";

const Ingles: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-300">
      <h1 className="mb-8 text-3xl font-bold">
        Bem-vindo à sala de jogos de Inglês
      </h1>
      <div className="flex flex-col gap-4">
        <Link href="/ingles/jogo1" passHref>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded w-full">
            Jogo 1
          </button>
        </Link>
        <Link href="/ingles/jogo2" passHref>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded w-full">
            Jogo 2
          </button>
        </Link>
        <Link href="/ingles/jogo3" passHref>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded w-full">
            Jogo 3
          </button>
        </Link>
      </div>
      <Link href="/home" passHref>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mt-16">
          Voltar à página inicial
        </button>
      </Link>
    </div>
  );
};

export default Ingles;
