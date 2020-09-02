import React, { useState, useEffect } from 'react'
import triviaChild from '../data/triviaChild.json'
import { Link } from 'react-router-dom';
import ColorsContext from './context/ColorsContext.jsx';

const ChildGame = () => {
    const [currentQuestion, setCurrentQuestion] = useState({});
    const [step, setStep] = useState(0);
    const [score, setScore] = useState(0);
    const [result, setResult] = useState("");

    useEffect(() => {
        setCurrentQuestion(triviaChild.questions[0]);
    }, []);

    const loadQuestion = (s) => {
        const question = triviaChild.questions[s];
        setCurrentQuestion(question);
    };

    const onNext = () => {
        const totalQuestions = triviaChild.questions.length
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
        const totalQuestions = triviaChild.questions.length
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

    const questions = triviaChild.questions || [];
    return (
      <ColorsContext.Consumer>
        {context => {
          return(
          <div className={context.visionProblemsMode === true ? "questionContainer visionProblemsGrey" : "questionContainer lightPurple"}>
            <h1 className={context.visionProblemsMode === true ? "titleTrivia visionProblemsBlack" : 'titleTrivia purple'}> ¡Demuetra lo aprendido!</h1>
            <h3 className={context.visionProblemsMode === true ? "visionProblemsWhiteFont" : "visionProblemsBlackFont"}>Tu puntuación es: {score}</h3>
            <div className='questionChild'>
                <p>{currentQuestion.question}</p>
                <div className='answersChild'>
                    {currentQuestion.answers?.map((answer, ansindex) => {
                        return (
                            <div className='cardTrivia'
                                onClick={() => handleOnClickAnswer(answer.isCorrect)}
                                key={`answer-${ansindex}`}>
                                <img src={answer.image} alt='img' width="70%" height="85%" />
                            </div>
                        )
                    })}
                </div>
                <h4>{result}</h4>
                <div className='buttonSelect'>
                  <button className={context.visionProblemsMode === true ? "buttonNext visionProblemsBlack" : 'buttonNext purple'} onClick={onNext}>Siguiente
                 </button>
                    <button className={
                context.visionProblemsMode === true ? "backButton visionProblemsBlack" : 'backButton purple'}
                        onClick={onBack}>Atras</button>
                </div>
                <Link to='/game/puzzle'>
                    <button className={context.visionProblemsMode === true ? "puzzle-button visionProblemsDarkBlue" : "puzzle-button buttonPink"}>Puzzle</button>
                </Link>

               </div>
        </div>
          )
        }}
      </ColorsContext.Consumer>
       
    )
}

export default ChildGame;