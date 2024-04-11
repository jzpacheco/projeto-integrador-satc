import React from "react";
import Image from "next/image";
import Link from "next/link";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col bg-[#ffa742] items-center justify-center h-screen font-sans ">
      <h1 className="mb-4 pt-20 text-3xl  font-bold text-white">
        Escolha sua matéria
      </h1>
      <div className="relative flex flex-wrap justify-center w-full h-full">
        <Link href="/Materias/matematica" passHref>
          <button className="m-4 p-4 bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition duration-300">
            <Image
              src="/images/numero.png"
              alt="Matéria 1"
              width={150}
              height={100}
              className="rounded-lg" 
            />
            <span className="block text-[#ffa742] mt-2">Matemática</span>
          </button>
        </Link>
        <Link href="/Materias/ciencias" passHref>
          <button className="m-4 p-4 bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition duration-300">
            <Image
              src="/images/natureza.png"
              alt="Matéria 2"
              width={150}
              height={150}
              className="rounded-lg"
            />
            <span className="block text-[#ffa742] mt-2">Ciências</span>
          </button>
        </Link>
        <Link href="/Materias/linguas" passHref>
          <button className="m-4 p-4 bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition duration-300">
            <Image
              src="/images/letra.png"
              alt="Matéria 3"
              width={150}
              height={150}
              className="rounded-lg"
            />
            <span className="block text-[#ffa742] mt-2">Línguas</span>
          </button>
        </Link>
        <Link href="/materias/outros" passHref>
          <button className="m-4 p-4 bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition duration-300">
            <Image
              src="/images/english.png"
              alt="Matéria 4"
              width={150}
              height={150}
              className="rounded-lg"
            />
            <span className="block text-[#ffa742] mt-2">Inglês</span>
          </button>
        </Link>
        {/* <Link href="/materias/quimica" passHref>
          <button className="m-4 p-4 bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition duration-300">
            <Image
              src="/images/imagem.jpg"
              alt="Matéria 5"
              width={150}
              height={150}
              className="rounded-lg"
            />
            <span className="block text-[#ffa742] mt-2">Química</span>
          </button>
        </Link> */}
      </div>
    </div>
  );
};

export default Home;
