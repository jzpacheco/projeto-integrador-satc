import React from "react";
import Link from "next/link";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="mb-8">Escolha sua matéria</h1>
      <div>
        <Link href="src/pages/Materias/matematica.tsx">
          <a className="btn">Matemática</a>
        </Link>
        <Link href="src/pages/Materias/linguas.tsx">
          <a className="btn">Ciências</a>
        </Link>
        <Link href="src/pages/Materias/ciencias.tsx">
          <a className="btn">Línguas</a>
        </Link>
        {/* Adicione links para outras matérias, se necessário */}
      </div>
    </div>
  );
};

export default Home;
