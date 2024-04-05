import React from "react";
import Link from "next/link";

const Linguagens: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-purple-300">
      <h1 className="mb-8 text-3xl font-bold">
        Bem-vindo à sala de jogos de Linguagens
      </h1>
      <div className="flex flex-col gap-4">
        <Link href="/linguagens/jogo1" passHref>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            Jogo 1
          </button>
        </Link>
        <Link href="/linguagens/jogo2" passHref>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            Jogo 2
          </button>
        </Link>
        <Link href="/linguagens/jogo3" passHref>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            Jogo 3
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Linguagens;
