import React, { useState, useEffect } from 'react';
import { quiz } from './chemquestion9';
import '../Quiz.css';

const Quiz = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });
  const [timer, setTimer] = useState(120); // 2 minutes in seconds
  const [selectedQuestions, setSelectedQuestions] = useState([]);

  useEffect(() => {
    // Function to shuffle array
    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };

    // Select 5 random questions
    const randomQuestions = shuffleArray(quiz.questions).slice(0, 5);
    setSelectedQuestions(randomQuestions);
  }, []);

  const resetTimer = () => {
    setTimer(120);
  };

  const onClickNext = () => {
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    );

    if (activeQuestion !== selectedQuestions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
      resetTimer(); // Reset timer for the next question
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
  };

  const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(index);
    if (answer === selectedQuestions[activeQuestion]?.correctAnswer) {
      setSelectedAnswer(true);
    } else {
      setSelectedAnswer(false);
    }
  };

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);

  return (
    <div className="main-body">
      <div className="quiz-container">
        {timer > 0 && !showResult ? (
          <div>
            <div>
              <span className="active-question-no">{addLeadingZero(activeQuestion + 1)}</span>
              <span className="total-question">/{addLeadingZero(selectedQuestions.length)}</span>
            </div>
            <h2>{selectedQuestions[activeQuestion]?.question}</h2>
            <p className="timer">Time remaining: {Math.floor(timer / 60)}:{addLeadingZero(timer % 60)}</p>
            <ul>
              {selectedQuestions[activeQuestion]?.choices.map((answer, index) => (
                <li
                  onClick={() => onAnswerSelected(answer, index)}
                  key={answer}
                  className={selectedAnswerIndex === index ? 'selected-answer' : null}
                >
                  {answer}
                </li>
              ))}
            </ul>
            <div className="flex-right">
              <button onClick={onClickNext} disabled={selectedAnswerIndex === null}>
                {activeQuestion === selectedQuestions.length - 1 ? 'Finish' : 'Next'}
              </button>
            </div>
          </div>
        ) : (
          <div className="result">
            {timer === 0 && (
              <p className="timer-over-message">Time is over!!</p>
            )}
            {!showResult && timer === 0 ? null : (
              <>
                <h1>Result</h1>
                <p>
                  Total Question: <span>{selectedQuestions.length}</span>
                </p>
                <p>
                  Total Score:<span> {result.score}</span>
                </p>
                <p>
                  Correct Answers:<span> {result.correctAnswers}</span>
                </p>
                <p>
                  Wrong Answers:<span> {result.wrongAnswers}</span>
                </p>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
