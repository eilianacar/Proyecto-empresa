import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ranking.css';
import TreasureChestImg from '../assests/treasure-chest2.png';
import StarImg from "../assests/Ícono_01.png";
import ColorContext from './context/ColorsContext.jsx';

const Ranking = (props) => {
  return (
    <ColorContext.Consumer>
      {context => {
        return(
          <main>
            <div className={context.visionProblemsMode === true ? "ranking-heading-container visionProblemsBlack" : "ranking-heading-container purple"}>
              <h1>Tabla de posiciones</h1>
            </div>
            <article className={context.visionProblemsMode === true ? "ranking-view-container visionProblemsGrey" : "ranking-view-container lightPurple"}>
              <section className="ranking-view-content">
                <section className="congrats-container">
                  <p className="congrats-message">¡Felicitaciones! Ganaste 15 estrellas en total. Ingresa tu nombre a continuación para guardarlas en tu cofre del tesoro.</p>
                  <div className="input-container">
                    <section className="imgs-container">
                      <div className="treasure-chest-container">
                      <img src={TreasureChestImg} alt=""/>
                    </div>
                    {/* <div className="treasure-chest-container">
                      <img src={StarImg} alt=""/>
                    </div> */}
                    </section>
                    <input placeholder="Nombre" type="text" className="enter-name-input" />
                    <button className={context.visionProblemsMode === true ? "enter-name-btn visionProblemsBlack visionProblemsFontWeight" : "enter-name-btn purple"}>Aceptar</button>
                  </div>
                </section>
                <section className="ranking-container">
                  <div className="ranking-heading2-container lightBlue">
                    <h2>Ranking</h2>
                  </div>
                  <ul className={context.visionProblemsMode === true ? "visionProblemsFontWeight" : null}>
                    <li>1° Juanita</li>
                    <li>2° Pepito</li>
                    <li>3° Fernanda</li>
                    <li>Tu posición: 10</li>
                  </ul>
                </section>
              </section>

              <Link to="/homeNiño"><button className={context.visionProblemsMode === true ? "back-btn visionProblemsBlack visionProblemsFontWeight" : "back-btn purple"}>Volver</button></Link>
            </article>
          </main>
        )
      }}
    </ColorContext.Consumer>
    
  );
}

export default Ranking;