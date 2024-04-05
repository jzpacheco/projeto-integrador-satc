import React from "react";
import Image from "next/image";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="mb-8">Escolha sua matéria</h1>
      <div className="relative flex flex-wrap justify-center w-full h-full">
        <button className="absolute top-0 left-0">
          <Image
            src="/images/materia1.jpg"
            alt="Matéria 1"
            width={150}
            height={150}
          />
        </button>
        <button className="absolute top-0 right-0">
          <Image
            src="/images/materia2.jpg"
            alt="Matéria 2"
            width={150}
            height={150}
          />
        </button>
        <button className="absolute bottom-0 right-0">
          <Image
            src="/images/materia3.jpg"
            alt="Matéria 3"
            width={150}
            height={150}
          />
        </button>
        <button className="absolute bottom-0 left-0">
          <Image
            src="/images/materia4.jpg"
            alt="Matéria 4"
            width={150}
            height={150}
          />
        </button>
        <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Image
            src="/images/materia5.jpg"
            alt="Matéria 5"
            width={150}
            height={150}
          />
        </button>
      </div>
    </div>
  );
};

export default Home;
