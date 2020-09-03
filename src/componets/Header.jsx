// HEADER
import React from 'react';
import { Link } from "react-router-dom";
import '../styles/Cover.css'
import HeaderView from '../assests/HeaderPPTHootieHoo.jpg'
import HeaderMobil from '../assests/HH_ImagotipoParaFondoColor_SinTextoAuxiliar.png'
import '../styles/Header.css';
import ColorsContext from './context/ColorsContext.jsx';
const Header = (props) => {
  return (
    <ColorsContext.Consumer>
      {context => {
        return (
          <Link to="/ent">
            <header className="fixed-main-header">
              <img className='header' src={HeaderView} alt='header' height='130vh' width="100%" />
              <div className='header-container'>
                <img className='headerMobile' src={HeaderMobil} alt='header' height='130vh' width="100%" />
              </div>
              <button className="change-color-btn" onClick={() => props.clicked()}>{context.visionProblemsMode === true ? "Disminuir contraste" : "Aumentar contraste"}</button>
            </header>
          </Link>
        )
      }}
    </ColorsContext.Consumer>
  );
}
export default Header;