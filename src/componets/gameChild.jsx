import React, { useState, useEffect } from 'react'
import triviaChild from '../data/triviaChild.json'
import { Link } from 'react-router-dom';
import ColorsContext from './context/ColorsContext.jsx';
import Next from '../assests/BotonDerecha_Naveg_Sobre.jpg'
import Back from '../assests/BotonIzquierda_Naveg_Sobre.jpg'
const ChildGame = () => {
    const [currentQuestion, setCurrentQuestion] = useState({});
    const [step, setStep] = useState(0);
    const [score, setScore] = useState(0);
    const [result, setResult] = useState("");
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        setCurrentQuestion(triviaChild.questions[0]);
    }, []);

    const loadQuestion = (s) => {
        const question = triviaChild.questions[s];
        setCurrentQuestion(question);
    };

    const onNext = () => {
        setDisabled(false)
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

    const questions = triviaChild.questions || [];
    return (
        <ColorsContext.Consumer>
            {context => {
                return (
                    <div className={context.visionProblemsMode === true ? "questionContainer visionProblemsGrey" : "questionContainer visionProblemsWhite"}>
                        <h1 className={context.visionProblemsMode === true ? "titleTrivia visionProblemsBlack" : 'titleTrivia purple'}> ¡Demuetra lo aprendido!</h1>
                        <h3 className={context.visionProblemsMode === true ? "visionProblemsWhiteFont visionProblemsFontWeight" : "purpleFont"}>Tu puntuación es: {score}</h3>
                        <div className='questionChild'>
                            <p className={context.visionProblemsMode === true ? "visionProblemsWhiteFont visionProblemsFontWeight" : "purpleFont"}>{currentQuestion.question}</p>
                            <div className='answersChild'>
                                {currentQuestion.answers?.map((answer, ansindex) => {
                                    return (
                                        <button disabled={disabled}
                                            className='cardTrivia'
                                            onClick={() => handleOnClickAnswer(answer.isCorrect)}
                                            key={`answer-${ansindex}`}>
                                            <img src={answer.image} alt='img' width="70%" height="85%" />
                                        </button>
                                    )
                                })}
                            </div>
                            <h4>{result}</h4>
                            <div className='buttonSelect'>
                                <button onClick={onNext} className="buttonNext" ><img className="img-next" src={Next} alt='next' /> Siguiente</button>
                                <button onClick={onBack} className="backButton" ><img className="img-back" src={Back} alt='back' /> Atras</button>
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