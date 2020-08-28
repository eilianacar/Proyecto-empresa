// Para los juegos veamos
import React from 'react';
import triviaAdults from '../data/triviaAdults.json'
import '../styles/game.css'
const Game = () => {

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

  const questions = triviaAdults.questions || [];
  return (
    <div className='questionContainer'>
      <h1 className='titleTrivia'> ¡Demuetra lo aprendido!</h1>
      {questions.map((question, qindex) => {
        return (
          <div key={`question-${qindex}`} className='question'>
            <p>{question.question}</p>
            <div className='answers'>
              {question.answers.map((answer, ansindex) => {
                return (
                  <p className='ui floating message'
                    onClick={() => handleOnClickAnswer(answer.isCorrect)}
                    key={`answer-${ansindex}`}>
                    {answer.option}
                  </p>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Game;
