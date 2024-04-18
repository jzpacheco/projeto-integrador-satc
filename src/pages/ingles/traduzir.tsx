// jogar pra matéria de INGLÊS
import Link from "next/link";
import React, { useState } from "react";

const palavras = [
  { portugues: "Casa", ingles: "House" },
  { portugues: "Gato", ingles: "Cat" },
  { portugues: "Sol", ingles: "Sun" },
  { portugues: "Livro", ingles: "Book" },
  { portugues: "Amigo", ingles: "Friend" },
  { portugues: "Verde", ingles: "Green" },
  { portugues: "Água", ingles: "Water" },
  { portugues: "Fogo", ingles: "Fire" },
  { portugues: "Cachorro", ingles: "Dog" },
  { portugues: "Lua", ingles: "Moon" },
  { portugues: "Caneta", ingles: "Pen" },
  { portugues: "Criança", ingles: "Child" },
  { portugues: "Azul", ingles: "Blue" },
  { portugues: "Leite", ingles: "Milk" },
  { portugues: "Montanha", ingles: "Mountain" }  
];

const Jogo1: React.FC = () => {
  const [palavraAtual, setPalavraAtual] = useState(0);
  const [respostaUsuario, setRespostaUsuario] = useState("");
  const [mostrarResposta, setMostrarResposta] = useState(false);
  const [acertou, setAcertou] = useState(false);

  const avancarPalavra = () => {
    setPalavraAtual((prev) => (prev + 1) % palavras.length);
    setRespostaUsuario("");
    setMostrarResposta(false);
    setAcertou(false);
  };

  const verificarResposta = () => {
    const respostaCorreta = palavras[palavraAtual].ingles.toLowerCase();
    const respostaUsuarioLowerCase = respostaUsuario.toLowerCase();
    if (respostaCorreta === respostaUsuarioLowerCase) {
      setAcertou(true);
    } else {
      setAcertou(false);
    }
    setMostrarResposta(true);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-purple-300">
      <h1 className="mb-8 text-3xl font-bold">
        Jogo de Correspondência de Palavras
      </h1>
      <div className="mb-4">
        <p>Qual é a tradução de "{palavras[palavraAtual].portugues}"?</p>
        <div className="flex items-center">
          <input
            type="text"
            value={respostaUsuario}
            onChange={(e) => setRespostaUsuario(e.target.value)}
            className="border border-gray-400 rounded px-2 py-1 mt-2 mr-2"
            disabled={mostrarResposta}
          />
          {mostrarResposta && (
            <p>
              {acertou ? "Parabéns, você acertou!" : "Que pena, você errou."} A
              resposta correta é: {palavras[palavraAtual].ingles}
            </p>
          )}
        </div>
      </div>
      <div className="mb-4">
        <button
          onClick={verificarResposta}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2"
          disabled={mostrarResposta}
        >
          Verificar Resposta
        </button>
        <button
          onClick={avancarPalavra}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Próxima Palavra
        </button>
      </div>
      <Link href="/Materias/linguas" passHref>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-8">
          Voltar à página inicial
        </button>
      </Link>
    </div>
  );
};

export default Jogo1;
