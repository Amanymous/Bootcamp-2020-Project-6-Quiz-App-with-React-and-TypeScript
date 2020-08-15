import React, { useState } from 'react';
import { fetchQuizQuestions } from './components/Api';
import { QuestionCard } from './components/QuestionCard';
import './App.css';
// Types
import { QuestionState, Difficulty } from './components/Api';

type AnswersObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [number, setNumber] = useState(0);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [userAnswers, setUserAnswers] = useState<AnswersObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const StartTrivia = async () => {};

  console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY));
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQuestion = () => {};
  return (
    <div className="App">
      <h1>React Quiz</h1>
      <button className="start">Start</button>
      <p className="score">Your Score:</p>
      <p>Wait Loading Question ...!</p>
      {/* <QuestionCard
        questionNr={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      /> */}
      <button className="next" onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
};
