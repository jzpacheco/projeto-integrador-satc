import React from "react";
import Link from "next/link";

const Matematica: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-yellow-300">
      <h1 className="mb-8 text-3xl font-bold">
        Bem-vindo à sala de jogos de Matemática
      </h1>
      <div className="flex flex-col gap-4">
        <Link href="/matematica/jogo1" passHref>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Jogo 1
          </button>
        </Link>
        <Link href="/matematica/jogo2" passHref>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Jogo 2
          </button>
        </Link>
        <Link href="/matematica/jogo3" passHref>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Jogo 3
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Matematica;
