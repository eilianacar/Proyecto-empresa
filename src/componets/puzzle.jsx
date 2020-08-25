import React from 'react';
import '../styles/Puzzle.css'
const Puzzle = () => {
    return (
        <div>
            <h1>Puzzle</h1>
            <svg width='1000' height='1000' id='entorno'>
                <g id='fondo'>
                    <image href='../img/pumajabon.png' width='700' height='500' x='200' y='100' />
                </g>
                <g>
                    <image xlinkHref='../img/fila-1-col-1.jpg' className='movil' />
                </g>
                <g>
                    <image xlinkHref='../img/fila-1-col-2.jpg' className='movil' />
                </g>
                <g>
                    <image xlinkHref='../img/fila-1-col-3.jpg' className='movil' />
                </g>
                <g>
                    <image xlinkHref='../img/fila-2-col-1.jpg' className='movil' />
                </g>
                <g>
                    <image xlinkHref='../img/fila-2-col-2.jpg' className='movil' />
                </g>
                <g>
                    <image xlinkHref='../img/fila-2-col-3.jpg' className='movil' />
                </g>
                <g>
                    <image xlinkHref='../img/fila-3-col-1.jpg' className='movil' />
                </g>
                <g>
                    <image xlinkHref='../img/fila-3-col-2.jpg' className='movil' />
                </g>
                <g>
                    <image xlinkHref='../img/fila-3-col-3.jpg' className='movil' />
                </g>

            </svg>
        </div>
    );
}

export default Puzzle;