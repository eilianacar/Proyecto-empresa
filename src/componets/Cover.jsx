//Pantalla principal que dice empecemos
import React from 'react';
import '../styles/Cover.css'
import Video from '../assests/HH_GanemosleAlVirus_Trailer.mp4'
import { Link } from "react-router-dom";
import Logo from '../assests/02.Imagotipo - Sin texto auxiliar.jpg'

const Cover = (props) => {
  return (
    <div className='containerCover'>
      <header className='header-logo'>
        <img className='logo' src={Logo} alt='logo' width="15%" />
      </header>
      <main className='main'>
        <div className='header-text'>
          <h1>¡Bienvenidos!</h1>
          <br></br>
          <h1>Conoce más informacion sobre como prevenir<br></br> el COVID-19 y como enfrentarlo</h1>
          <Link to="/ent">
            <button className='inicialButton'>¡Empecemos!</button>
          </Link>
        </div>
        <video className='video' src={Video} width="750" height="500" controls>
        </video>
      </main>
    </div>
  );
}

export default Cover;