// Para los juegos veamos
import React, { useState, useEffect } from 'react';
import triviaAdults from '../data/triviaAdults.json';
import '../styles/game.css';
import ColorsContext from './context/ColorsContext.jsx';

const Game = () => {

  const [currentQuestion, setCurrentQuestion] = useState({});
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState("");

  useEffect(() => {
    setCurrentQuestion(triviaAdults.questions[0]);
  }, []);

  const loadQuestion = (s) => {
    const question = triviaAdults.questions[s];
    setCurrentQuestion(question);
  };

  const onNext = () => {
    const totalQuestions = triviaAdults.questions.length
    if ((step + 1) === totalQuestions) {
      return;
    }
    if (result === "") {
      return;
    }
    setResult("");
    const nextStep = step + 1
    loadQuestion(nextStep);
    setStep(nextStep);
  };

  const onBack = () => {
    const totalQuestions = triviaAdults.questions.length
    if ((step - 1) === totalQuestions) {
      return;
    }
    if (result === "") {
      return;
    }
    setResult("");
    const backStep = step - 1
    loadQuestion(backStep);
    setStep(backStep);
  };
  const handleOnClickAnswer = (isCorrect) => {
    const onOk = () => {
      setScore(score + 1)
      setResult("Respuesta Correcta")

    }
    const onError = () => {
      setScore(score - 1)
      setResult("Respuesta Incorrecta")
    }
    if (isCorrect === true) {
      onOk && onOk(); // si onOK es cierto ejecuta la funcion onOk()
    } else {
      onError && onError() // si onError es cierto ejecuta la funcion onError()
    }
  }

  const questions = triviaAdults.questions || [];

  return (
    <ColorsContext.Consumer>
      {context => {
        return (
        <div className={context.visionProblemsMode === true ? "questionContainer visionProblemsGrey" : 'questionContainer lightPurple'} style={{ border: "solid 1px #000" }}>
          <h1 className={context.visionProblemsMode === true ? "titleTrivia visionProblemsBlack" : 'titleTrivia purple'}> ¡Demuetra lo aprendido!</h1>
          <h4>Tu puntuación es: {score}</h4>
          <div className='question'>
            <p>{currentQuestion.question}</p>
            <div className='answers'>
              {currentQuestion.answers?.map((answer, ansindex) => {
                return (
                  <p className={context.visionProblemsMode === true ? "selectAnswer visionProblemsBlack" : 'selectAnswer purple'}
                    onClick={() => handleOnClickAnswer(answer.isCorrect)}
                    key={`answer-${ansindex}`}
                  >
                    {answer.option}
                  </p>
                )
              })}
            </div>
            <h4>{result}</h4>
            <div className='buttonSelect'>
              <button className={
                context.visionProblemsMode === true ? "buttonNext visionProblemsBlack" : 'buttonNext purple'}
                onClick={onNext}>Siguiente</button>
              <button className={
                context.visionProblemsMode === true ? "backButton visionProblemsBlack" : 'backButton purple'}
                onClick={onBack}>Atras</button>
            </div>

          </div>
        </div>
        )
      }}
    </ColorsContext.Consumer>
    
  )
}

export default Game;