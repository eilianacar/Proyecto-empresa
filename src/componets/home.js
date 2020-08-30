//Pantalla principal con todo el contenido, modulos, ranking y juegos
import React from 'react';
import '../styles/Home.css';
import video from '../assests/HH_GanemosleAlVirus_Trailer.mp4';
import equipo from '../assests/HH_GAV_PumaEspumaYElEscuadronPrevencion.png';
import { Link } from 'react-router-dom';


const Home = (props) => {
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }

  return (
    <div className='home'>
      <div className='contenidoHome'>
        <div className='contenedorUno'>
          <p className='tituloSeccion'>Módulos</p>
          <button className="accordion">Módulo 1</button>
          <div className="panel">
            <p><Link to={`${props.match.url}/1/topic1`}>1- ¿Qué es el coronavirus?</Link></p>
            <p><Link to={`${props.match.url}/1/topic2`}>2- ¿Cómo se originó el virus?</Link></p>
            <p><Link to={`${props.match.url}/1/topic3`}>3- ¿Qué medidas se han tomado?</Link></p>
          </div>

          <button className="accordion">Módulo 2</button>
          <div className="panel">
            <p><Link to={`${props.match.url}/2/topic1`}>1- La socialización</Link></p>
            <p><Link to={`${props.match.url}/2/topic2`}>2- ¿Cómo cambia la mente de los niños?</Link></p>
            <p><Link to={`${props.match.url}/2/topic3`}>3- Mecanismos del miedo</Link></p>
            <p><Link to={`${props.match.url}/2/topic5`}>4- Psicohigiene</Link></p>
            <p><Link to={`${props.match.url}/2/topic10`}>5- Recomendaciones prácticas</Link></p>
          </div>

          <button className="accordion">Módulo 3</button>
          <div className="panel">
            <p><Link to={`${props.match.url}/3/topic1`}>1- Hábitos saludables</Link></p>
            <p><Link to={`${props.match.url}/3/topic2`}>2- Condicionamiento operante</Link></p>
            <p> <Link to={`${props.match.url}/3/topic3`}>3- Aprendizaje observacional</Link></p>
            <p> <Link to={`${props.match.url}/3/topic6`}>4- Alimentación</Link></p>
            <p><Link to={`${props.match.url}/3/topic7`}>5- Alimentación durante el confinamiento</Link></p>
          </div>
        </div>

        <div className='contenedorDos'>
          <p className='tituloSeccionEspecial'>Juega y aprende</p>
          <div className='contenedorVideo'>
            <p>Ve este vídeo</p>
            <video className='video' src={video} width="550" height="300" controls></video>
            <Link to="/game/adult">
              <button className='jugar'>Jugar</button>
            </Link>

          </div>
        </div>

        <div className='contenedorTres'>
          <p className='tituloSeccion'>Ranking</p>
          <p className='p0'></p>
          <p className='p1'>1° Juanita</p>
          <p className='p2'>2° Pepito</p>
          <p className='p1'>3° Carmelita</p>
          <p className='p2'>Tu lugar 12°</p>
          <img className='equipo' src={equipo} alt='equipo' />
        </div>
      </div>
    </div>
  );
}

export default Home;