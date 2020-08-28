//Pantalla principal con todo el contenido, modulos, ranking y juegos
import React from 'react';
import '../styles/Home.css';
import video from '../assests/HH_GanemosleAlVirus_Trailer.mp4';
import equipo from '../assests/HH_GAV_PumaEspumaYElEscuadronPrevencion.png';


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
            <p>1- ¿Que está pasando?</p>
            <p>2- ¿Que es el covid-19?</p>
          </div>

          <button className="accordion">Módulo 2</button>
          <div className="panel">
            <p>3- Amigos y familia</p>
            <p>4- ¿Cómo cuidarnos?</p>
          </div>

          <button className="accordion">Módulo 3</button>
          <div className="panel">
            <p>5- Hábitos saludables</p>
          </div>
        </div>

        <div className='contenedorDos'>
          <p className='tituloSeccionEspecial'>Juega y aprende</p>
          <div className='contenedorVideo'>
            <p>Ve este vídeo</p>
            <video className='video' src={video} width="550" height="300" controls></video>
            <button className='jugar'>Jugar</button>
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