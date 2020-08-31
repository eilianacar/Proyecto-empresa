import React, { useState, useEffect } from 'react'
import triviaChild from '../data/triviaChild.json'
import { Link } from 'react-router-dom';

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
        <div className='questionContainer'>
            <h1 className='titleTrivia'> ¡Demuetra lo aprendido!</h1>
            <h3>Tu puntuación es: {score}</h3>
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
                    <button className="buttonNext"
                        onClick={onNext}>Siguiente
                 </button>
                    <button className="backButton"
                        onClick={onBack}>Atras</button>
                </div>
                <Link to='/game/puzzle'>
                    <button>Puzzle</button>
                </Link>

            </div>
        </div>
    )
}

export default ChildGame;