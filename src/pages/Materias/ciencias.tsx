import React from "react";
import Link from "next/link";

const Ciencias: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-300">
      <h1 className="mb-8 text-3xl font-bold">
        Bem-vindo à sala de jogos de Ciências
      </h1>
      <div className="flex flex-col gap-4">
        <Link href="/ciencias/jogo1" passHref>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
            Jogo 1
          </button>
        </Link>
        <Link href="/ciencias/jogo2" passHref>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
            Jogo 2
          </button>
        </Link>
        <Link href="/ciencias/jogo3" passHref>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
            Jogo 3
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Ciencias;
