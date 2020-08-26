// Selección de niño o adulto
import React from 'react';
import '../styles/Cover.css'
import { Link } from "react-router-dom";
import Logo from '../assests/02.Imagotipo - Sin texto auxiliar.jpg'
import Puma from '../assests/GAV_Personaje09.png'
import Buho from '../assests/GAV_Personaje21.png'

const Ent = (props) => {
  return (
    <div className='containerCover'>
      <header className='header-logo'>
        <img className='logo' src={Logo} alt='logo' width="15%" />
      </header>
      <main className='main'>
        <div className='header-text'>
          <h1>¡Para comenzar elige tu perfil! </h1>
          <img className='img' src={Buho} alt='buho' width="15%" />
          <Link to="/home">
            <button className='inicialButton'>¡Empecemos!</button>
          </Link>
        </div>
        <div className='header-text'>
          <img className='img' src={Puma} alt='puma' width="15%" />
          <Link to="/puzzle">
            <button className='inicialButton'>¡Empecemos!</button>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Ent;