import React, { useState } from "react";
import Link from "next/link";

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

const questions: Question[] = [
  {
    question: "Qual é o maior planeta do sistema solar?",
    options: ["Júpiter", "Saturno", "Terra", "Netuno"],
    correctAnswer: "Júpiter",
  },
  {
    question:
      "Qual é o animal que voa e é conhecido por migrar longas distâncias?",
    options: ["Pombo", "Andorinha", "Gaivota", "Ganso"],
    correctAnswer: "Ganso",
  },
  {
    question: "O que é um ano-luz?",
    options: [
      "A distância que a luz percorre em um ano",
      "A distância entre a Terra e a Lua",
      "O tempo que a luz leva para chegar à Terra",
      "A distância entre a Terra e o Sol",
    ],
    correctAnswer: "A distância que a luz percorre em um ano",
  },
];

const ScienceQuiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerSelect = (answer: string) => {
    if (!showResult) {
      setSelectedAnswer(answer);
      if (answer === questions[currentQuestion].correctAnswer) {
        setScore(score + 1);
      }
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
    } else {
      setShowResult(true);
    }
  };

  const handleResetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-300">
      <h1 className="mb-8 text-3xl font-bold">Quiz de Ciências</h1>
      {!showResult ? (
        <div className="mb-4">
          <p>{questions[currentQuestion].question}</p>
          <div className="flex flex-col">
            {questions[currentQuestion].options.map((option, index) => (
              <label
                key={index}
                className="inline-flex items-center mt-2 cursor-pointer"
              >
                <input
                  type="radio"
                  value={option}
                  checked={selectedAnswer === option}
                  onChange={() => handleAnswerSelect(option)}
                  className="form-radio h-5 w-5 text-blue-600"
                />
                <span className="ml-2">{option}</span>
              </label>
            ))}
          </div>
          {selectedAnswer !== "" && (
            <button
              onClick={handleNextQuestion}
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mt-4"
            >
              Próxima Pergunta
            </button>
          )}
        </div>
      ) : (
        <div>
          <p>
            Você acertou {score} de {questions.length} perguntas.
          </p>
          <button
            onClick={handleResetQuiz}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4"
          >
            Tentar Novamente
          </button>
        </div>
      )}
      <Link href="/Materias/ciencias" passHref>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mt-16">
          Voltar à página inicial
        </button>
      </Link>
    </div>
  );
};

export default ScienceQuiz;
