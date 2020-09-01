import React from 'react';
import '../styles/Cover.css'
import HeaderView from '../assests/HeaderPPTHootieHoo.jpg'
import HeaderMobil from '../assests/HH_ImagotipoParaFondoColor_SinTextoAuxiliar.png'

const Header = () => {
    return (
        <header>
            <img className='header' src={HeaderView} alt='header' height='130vh' width="100%" />
            <div className='header-container'>
                <img className='headerMobile' src={HeaderMobil} alt='header' height='130vh' width="100%" />
            </div>

        </header>
    );
}

export default Header;