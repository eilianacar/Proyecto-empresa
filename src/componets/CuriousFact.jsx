import React from 'react';
import { Link } from 'react-router-dom';
import ColorsContext from "./context/ColorsContext.jsx";
import '../styles/CuriousFact.css';
import OwlImg from "../assests/GAV_Personaje21.png";

function CuriousFact(props) {
  return (
    <ColorsContext.Consumer>
      {context => {
        return (
          <main>
            <div
              className={
                context.visionProblemsMode === true
                  ? "ranking-heading-container visionProblemsBlack visionProblemsFontWeight"
                  : "ranking-heading-container purple"
              }
            >
              <h1>¡Felicitaciones, desbloqueste un dato curioso!</h1>
            </div>
            <article
              className={
                context.visionProblemsMode === true
                  ? "ranking-view-container visionProblemsGrey"
                  : "ranking-view-container lightPurple"
              }
            >
              <section className="fact-content-container">
                <section className="owl-image-container">
                  <img src={OwlImg} alt="buho" />
                </section>
                <section className="content-rightSide">
                  <section className={context.visionProblemsMode === true ? "fact-heading-container visionProblemsBlack" : "fact-heading-container purple"}>
                    <h2 className="fact-heading">
                      Obtén 10 consejos y serás un buho sabio
                    </h2>
                  </section>
                  <section className={context.visionProblemsMode === true ? "actual-fact visionProblemsBlack" : "actual-fact lightBlue"}>
                    <div className="subheading-container">
                      <h3>¿Sabías que...?</h3>
                    </div>
                    <p> Si una superficie está sucia, lo primero que se debe hacer es limpiarla con jabón o con detergente y agua. Se debe usar un producto desinfectante que contenga alcohol (aproximadamente un 70%) o lejía. No es recomendable usar vinagre u otros productos naturales.</p>
                  </section>
                </section>
              </section>
              <Link to="/home"><button className={context.visionProblemsMode === true ? "back-btn visionProblemsBlack visionProblemsFontWeight" : "back-btn purple"}>Volver</button></Link>
            </article>
          </main>
        );
      }}
    </ColorsContext.Consumer>
      
  );
}

export default CuriousFact;