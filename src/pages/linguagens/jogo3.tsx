import React, { useState } from "react";
import Link from "next/link";

const words = ["cachorro", "gato", "banana", "avião", "laranja", "mesa"];

const PortugueseSpellingGame: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [typedWord, setTypedWord] = useState("");
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleCheckSpelling = () => {
    const correctWord = words[currentWordIndex];
    if (typedWord.toLowerCase() === correctWord) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  const handleNextWord = () => {
    setTypedWord("");
    setIsCorrect(null);
    setCurrentWordIndex(currentWordIndex + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-300">
      <h1 className="mb-8 text-3xl font-bold">
        Jogo de Soletrar Palavras em Língua Portuguesa para Séries Iniciais
      </h1>
      {currentWordIndex < words.length ? (
        <div className="mb-4">
          <p>Escreva a palavra corretamente:</p>
          <p>{words[currentWordIndex]}</p>
          <input
            type="text"
            value={typedWord}
            onChange={(e) => setTypedWord(e.target.value)}
            className="border rounded-md p-2 mt-2"
          />
          {isCorrect !== null && (
            <p className="mt-2">
              {isCorrect ? "Parabéns, você acertou!" : "Que pena, você errou."}
            </p>
          )}
        </div>
      ) : (
        <div>
          <p>Parabéns, você completou o jogo!</p>
        </div>
      )}
      {currentWordIndex < words.length && (
        <button
          onClick={handleCheckSpelling}
          className={`bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mt-4`}
        >
          Verificar Palavra
        </button>
      )}
      {isCorrect !== null && (
        <button
          onClick={handleNextWord}
          className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4`}
        >
          Próxima Palavra
        </button>
      )}
      <Link href="/Materias/linguagens" passHref>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-16">
          Voltar à página inicial
        </button>
      </Link>
    </div>
  );
};

export default PortugueseSpellingGame;
