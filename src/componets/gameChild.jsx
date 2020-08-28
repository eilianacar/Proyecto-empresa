import React from 'react'
import triviaChild from '../data/triviaChild.json'
const ChildGame = () => {
    const handleOnClickAnswer = (isCorrect) => {
        const onOk = () => {
            alert("Respuesta Correcta")
        }
        const onError = () => {
            alert("Respuesta Incorrecta")
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
            {questions.map((question, qindex) => {
                return (
                    <div key={`question-${qindex}`} className='questionChild'>
                        <p>{question.question}</p>
                        <div className='answersChild'>
                            {question.answers.map((answer, ansindex) => {
                                return (
                                    <div className='card'
                                        onClick={() => handleOnClickAnswer(answer.isCorrect)}
                                        key={`answer-${ansindex}`}>
                                        <img src={answer.image} alt='img' width="60%" height="60%" />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ChildGame;