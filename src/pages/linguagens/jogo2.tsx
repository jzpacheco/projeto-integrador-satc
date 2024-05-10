import React, { useState } from "react";
import Link from "next/link";

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

const questions: Question[] = [
  {
    question: "O ________ é um mamífero que voa à noite.",
    options: ["macaco", "elefante", "morcego", "gato"],
    correctAnswer: "morcego",
  },
  {
    question: "As ________ são grandes felinas encontradas na selva.",
    options: ["zebra", "girafa", "onça", "tartaruga"],
    correctAnswer: "onça",
  },
  {
    question: "O ________ é um réptil que se arrasta pelo chão.",
    options: ["pato", "cachorro", "cobra", "tubarão"],
    correctAnswer: "cobra",
  },
];

const PortugueseWordGame: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleCheckAnswer = () => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setIsCorrect(null);
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-300">
      <h1 className="mb-8 text-3xl font-bold">
        Jogo de Palavras em Língua Portuguesa para Séries Iniciais
      </h1>
      {currentQuestion < questions.length ? (
        <div className="mb-4">
          <p>{questions[currentQuestion].question}</p>
          <div className="flex flex-col">
            {questions[currentQuestion].options.map((option, index) => (
              <label key={index} className="inline-flex items-center mt-2">
                <input
                  type="radio"
                  value={option}
                  checked={selectedOption === option}
                  onChange={() => setSelectedOption(option)}
                  className="form-radio h-5 w-5 text-blue-600"
                />
                <span className="ml-2">{option}</span>
              </label>
            ))}
          </div>
          {isCorrect !== null && (
            <p className="mt-2">
              {isCorrect ? "Parabéns, você acertou!" : "Que pena, você errou."}{" "}
              A resposta correta é: {questions[currentQuestion].correctAnswer}
            </p>
          )}
        </div>
      ) : (
        <div>
          <p>Parabéns, você completou o jogo!</p>
        </div>
      )}
      {currentQuestion < questions.length && (
        <button
          onClick={handleCheckAnswer}
          disabled={selectedOption === null}
          className={`bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mt-4 ${
            selectedOption === null ? "cursor-not-allowed" : ""
          }`}
        >
          Verificar Resposta
        </button>
      )}
      {isCorrect !== null && (
        <button
          onClick={handleNextQuestion}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Próxima Pergunta
        </button>
      )}
      <Link href="/Materias/linguas" passHref>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-16">
          Voltar à página inicial
        </button>
      </Link>
    </div>
  );
};

export default PortugueseWordGame;
