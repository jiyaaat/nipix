import React, { useState, useEffect } from 'react';
import { quiz } from './Questions';
import './Quiz.css';

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

  useEffect(() => {
    let interval;

    if (timer > 0 && !showResult) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [timer, showResult]);

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

    if (activeQuestion !== quiz.questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
      resetTimer(); // Reset timer for the next question
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
  };

  const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(index);
    if (answer === quiz.questions[activeQuestion].correctAnswer) {
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
              <span className="total-question">/{addLeadingZero(quiz.questions.length)}</span>
            </div>
            <h2>{quiz.questions[activeQuestion].question}</h2>
            <p className="timer">Time remaining: {Math.floor(timer / 60)}:{addLeadingZero(timer % 60)}</p>
            <ul>
              {quiz.questions[activeQuestion].choices.map((answer, index) => (
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
                {activeQuestion === quiz.questions.length - 1 ? 'Finish' : 'Next'}
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
                <h3>Result</h3>
                <p>
                  Total Question: <span>{quiz.questions.length}</span>
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
