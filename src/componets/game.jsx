// Para los juegos veamos
import React, { useState, useEffect } from 'react';
import triviaAdults from '../data/triviaAdults.json';
import '../styles/game.css';
import ColorsContext from './context/ColorsContext.jsx';
import Next from '../assests/BotonDerecha_Naveg_Sobre.jpg'
import Back from '../assests/BotonIzquierda_Naveg_Sobre.jpg'
import { Link } from 'react-router-dom';
const Game = () => {

  const [currentQuestion, setCurrentQuestion] = useState({});
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState("");
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    setCurrentQuestion(triviaAdults.questions[0]);
  }, []);

  const loadQuestion = (s) => {
    const question = triviaAdults.questions[s];
    setCurrentQuestion(question);
  };

  const onNext = () => {
    setDisabled(false)
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
    setDisabled(true)
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
                    <button disabled={disabled}
                      className={context.visionProblemsMode === true ? "selectAnswer visionProblemsBlack" : 'selectAnswer purple'}
                      onClick={() => handleOnClickAnswer(answer.isCorrect)}
                      key={`answer-${ansindex}`}
                    >
                      {answer.option}
                    </button>
                  )
                })}
              </div>
              <h4>{result}</h4>
              <div className='buttonSelect'>
                <button onClick={onNext} className="buttonNext" ><img className="img-next" src={Next} alt='next' /> Siguiente</button>
                <button onClick={onBack} className="backButton" ><img className="img-back" src={Back} alt='back' /> Atras</button>
              </div>
              <Link to='/game/adult/curious-fact'>
                <button className={context.visionProblemsMode === true ? "dato-button  visionProblemsDarkBlue" : "dato-button  buttonPink"}>Datos Curiosos</button>
              </Link>
            </div>
          </div>
        )
      }}
    </ColorsContext.Consumer>

  )
}

export default Game;