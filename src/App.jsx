import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import questions from "./Ques";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleclick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };
  return (
    <>
      <h1 className="text-3xl text-center">Quiz App</h1>
      {showScore ? (
        <div className=" bg-yellow-200-100 border-2 border-black rounded-sm w-[300px] text-center py-1 block m-auto my-4">
          <h2 className="text-2xl">Quiz Completed</h2>
          <p className="text-lg">Your score: {score}/5</p>
          <p className="text-lg">Your Percentage: {(score / 5) * 100}</p>
          <button
            onClick={restartQuiz}
            className=" bg-blue-500 text-white p-1 rounded-sm"
          >
            Restart quiz
          </button>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl text-center mt-3">
            {questions[currentQuestion].text}
          </h2>

          <div className="bg-blue-200 h-[300px] grid grid-cols-1 mt-8 ">
            {questions[currentQuestion].options.map((option) => (
              <button
                key={option.id}
                onClick={() => handleclick(option.isCorrect)}
                className="bg-gray-400 border-2 border-white"
              >
                {option.text}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default App;
