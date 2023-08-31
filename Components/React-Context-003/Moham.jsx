import React, { useState, useEffect } from "react";

const shuffleArray = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const App = () => {
  const initialQuestions = [
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      correctAnswer: "4"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Mars"
    }
    // Add more questions...
  ];

  const [questions, setQuestions] = useState(initialQuestions);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showCorrect, setShowCorrect] = useState(false);
  const [wrongAnswers, setWrongAnswers] = useState([]);

  const shuffledQuestions = shuffleArray(questions);

  useEffect(() => {
    setQuestions(shuffledQuestions);
    setCurrentIndex(0);
    setScore(0);
    setShowCorrect(false);
    setWrongAnswers([]);
  }, []);

  const handleOptionSelect = (selectedOption) => {
    if (selectedOption === shuffledQuestions[currentIndex].correctAnswer) {
      setScore(score + 1);
    } else {
      setWrongAnswers([...wrongAnswers, shuffledQuestions[currentIndex]]);
    }

    setShowCorrect(true);

    setTimeout(() => {
      setShowCorrect(false);
      setCurrentIndex(currentIndex + 1);
    }, 2000);
  };

  return (
    <div className="App">
      {currentIndex < shuffledQuestions.length ? (
        <>
          <h1>Quiz App</h1>
          <h2>Question {currentIndex + 1}</h2>
          <Question
            question={shuffledQuestions[currentIndex].question}
            showCorrect={showCorrect}
          />
          <Options
            options={shuffledQuestions[currentIndex].options}
            onSelect={handleOptionSelect}
            showCorrect={showCorrect}
          />
        </>
      ) : (
        <div className="results">
          <h1>Quiz Results</h1>
          <h2>Final Score: {score}</h2>
          <h3>Wrong Answers:</h3>
          <ul>
            {wrongAnswers.map((wrongQuestion, index) => (
              <li key={index}>
                <strong>Question: </strong> {wrongQuestion.question}
                <br />
                <strong>Correct Answer: </strong> {wrongQuestion.correctAnswer}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const Question = ({ question, showCorrect }) => (
  <div className="question">
    <p>{question}</p>
    {showCorrect && <p>Correct Answer: {question.correctAnswer}</p>}
  </div>
);

const Options = ({ options, onSelect, showCorrect }) => (
  <div className="options">
    {options.map((option, index) => (
      <button
        key={index}
        onClick={() => onSelect(option)}
        disabled={showCorrect}
      >
        {option}
      </button>
    ))}
  </div>
);

export default App;
