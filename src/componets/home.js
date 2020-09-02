//Pantalla principal con todo el contenido, modulos, ranking y juegos
import React from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';
import ColorsContext from './context/ColorsContext.jsx';
import buho from '../assests/GAV_Personaje21.png'
const Home = (props) => {
  return (
    <ColorsContext.Consumer>
      {(context) => {
        return (<div className='home'>
          <div className='contenidoHome'>
            <div className='contenedorUno'>
              <p className={context.visionProblemsMode === true ? "tituloSeccion visionProblemsBlack" : 'tituloSeccion purple'}>Módulos</p>
              <button className={context.visionProblemsMode === true ? "accordion visionProblemsBlack" : "accordion lightBlue"}>Módulo 1</button>
              <div className={context.visionProblemsMode === true ? "panel visionProblemsGrey" : 'panel lightPurple'}>
                <p className='texto'><Link to={`${props.match.url}/1/topic1`}>1- ¿Qué es el coronavirus?</Link></p>
                <p className='texto'><Link to={`${props.match.url}/1/topic2`}>2- ¿Cómo se originó el virus?</Link></p>
                <p className='texto'><Link to={`${props.match.url}/1/topic3`}>3- ¿Qué medidas se han tomado?</Link></p>
              </div>
              <button className={context.visionProblemsMode === true ? "accordion visionProblemsBlack" : "accordion lightBlue"}>Módulo 2</button>
              <div className={context.visionProblemsMode === true ? "panel visionProblemsGrey" : 'panel lightPurple'}>
                <p className='texto'><Link to={`${props.match.url}/2/topic1`}>1- La socialización</Link></p>
                <p className='texto'><Link to={`${props.match.url}/2/topic2`}>2- ¿Cómo cambia la mente de los niños?</Link></p>
                <p className='texto'><Link to={`${props.match.url}/2/topic3`}>3- Mecanismos del miedo</Link></p>
                <p className='texto'><Link to={`${props.match.url}/2/topic5`}>4- Psicohigiene</Link></p>
                <p className='texto'><Link to={`${props.match.url}/2/topic10`}>5- Recomendaciones prácticas</Link></p>
              </div>
              <button className={context.visionProblemsMode === true ? "accordion visionProblemsBlack" : "accordion lightBlue"}>Módulo 3</button>
              <div className={context.visionProblemsMode === true ? "panel visionProblemsGrey" : 'panel lightPurple'}>
                <p className='texto'><Link to={`${props.match.url}/3/topic1`}>1- Hábitos saludables</Link></p>
                <p className='texto'><Link to={`${props.match.url}/3/topic2`}>2- Condicionamiento operante</Link></p>
                <p className='texto'><Link to={`${props.match.url}/3/topic3`}>3- Aprendizaje observacional</Link></p>
                <p className='texto'><Link to={`${props.match.url}/3/topic6`}>4- Alimentación</Link></p>
                <p className='texto'><Link to={`${props.match.url}/3/topic7`}>5- Alimentación durante el confinamiento</Link></p>
              </div>
            </div>
            <div className='contenedorDos'>
              <h1 className='textoTitulo'>Revisa más información sobre el Covid-19 y resuleve la trivia</h1>
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