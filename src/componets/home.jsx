//Pantalla principal con todo el contenido, modulos, ranking y juegos
import React from 'react';
import '../styles/Home.css';
import equipo from '../assests/HH_GAV_PumaEspumaYElEscuadronPrevencion.png';
import { Link } from 'react-router-dom';
import ColorsContext from './context/ColorsContext.jsx';
import buho from '../assests/GAV_Personaje21.png';
import Collapsible from 'react-collapsible';
const Home = (props) => {
  return (
    <ColorsContext.Consumer>
      {(context) => {
        return (
          <div className='home'>
            <div className='contenidoHome'>
              <div className='contenedorUno'>
                <p className={context.visionProblemsMode === true ? "tituloSeccion visionProblemsBlack" : 'tituloSeccion purple'}>Módulos</p>
                <div className={context.visionProblemsMode === true ? "panel visionProblemsGrey" : 'panel lightPurple'}>
                  <Collapsible trigger="Módulo 1" className={context.visionProblemsMode === true ? "accordion visionProblemsBlack" : "accordion lightBlue"}>
                    <p className='texto'><Link to={`${props.match.url}/1/topic1`}>1- ¿Qué es el coronavirus?</Link></p>
                    <p className='texto'><Link to={`${props.match.url}/1/topic2`}>2- ¿Cómo se originó el virus?</Link></p>
                    <p className='texto'><Link to={`${props.match.url}/1/topic3`}>3- ¿Qué medidas se han tomado?</Link></p>
                  </Collapsible>
                </div>
                <div className={context.visionProblemsMode === true ? "panel visionProblemsGrey" : 'panel lightPurple'}>
                  <Collapsible trigger="Módulo 2" className={context.visionProblemsMode === true ? "accordion visionProblemsBlack" : "accordion lightBlue"}>
                    <p className='texto'><Link to={`${props.match.url}/2/topic1`}>1- La socialización</Link></p>
                    <p className='texto'><Link to={`${props.match.url}/2/topic2`}>2- ¿Cómo cambia la mente de los niños?</Link></p>
                    <p className='texto'><Link to={`${props.match.url}/2/topic3`}>3- Mecanismos del miedo</Link></p>
                    <p className='texto'><Link to={`${props.match.url}/2/topic5`}>4- Psicohigiene</Link></p>
                    <p className='texto'><Link to={`${props.match.url}/2/topic10`}>5- Recomendaciones prácticas</Link></p>
                  </Collapsible>
                </div>
                <div className={context.visionProblemsMode === true ? "panel visionProblemsGrey" : 'panel lightPurple'}>
                  <Collapsible trigger="Módulo 3" className={context.visionProblemsMode === true ? "accordion visionProblemsBlack" : "accordion lightBlue"}>
                    <p className='texto'><Link to={`${props.match.url}/3/topic1`}>1- Hábitos saludables</Link></p>
                    <p className='texto'><Link to={`${props.match.url}/3/topic2`}>2- Condicionamiento operante</Link></p>
                    <p className='texto'><Link to={`${props.match.url}/3/topic3`}>3- Aprendizaje observacional</Link></p>
                    <p className='texto'><Link to={`${props.match.url}/3/topic6`}>4- Alimentación</Link></p>
                    <p className='texto'><Link to={`${props.match.url}/3/topic7`}>5- Alimentación durante el confinamiento</Link></p>
                  </Collapsible>
                </div>
              </div>
              <div className='contenedorDos'>
                <h1 className='textoTitulo'>Revisa más información sobre el Covid-19</h1>
                <h1 className='textoTitulo'>y resuelve la trivia</h1>
                <img className='Buho' src={buho} alt='buho' />
                <Link to="/game/adult">
                  <button className={context.visionProblemsMode === true ? "jugar visionProblemsBlack" : 'jugar purple'}>Trivia</button>
                </Link>
              </div>
            </div>
          </div>)
      }}
    </ColorsContext.Consumer>
  );
}
export default Home;