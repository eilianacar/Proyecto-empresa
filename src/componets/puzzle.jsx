import React, { Component } from 'react';
import '../styles/Puzzle.css'
import imageUno from './jigsaw/pumajabon.png'
import Timer from './Timer';
import { Link } from 'react-router-dom';
import ColorsContext from './context/ColorsContext.jsx';
class Jigsaw extends Component {
    state = {
        pieces: [],
        shuffled: [],
        solved: []
    };

    componentDidMount() {
        const pieces = [...Array(9)]
            .map((_, i) => (
                {
                    img: `ny_${('0' + (i + 1)).substr(-2)}.jpg`,
                    order: i,
                    board: 'shuffled'
                }
            ));

        this.setState({
            pieces,
            shuffled: this.shufflePieces(pieces),
            solved: [...Array(9)]
        });
    }
    handleDrop(e, index, targetName) {
        let target = this.state[targetName];
        if (target[index]) return;

        const pieceOrder = e.dataTransfer.getData('text');
        const pieceData = this.state.pieces.find(p => p.order === +pieceOrder);
        const origin = this.state[pieceData.board];

        if (targetName === pieceData.board) target = origin;
        origin[origin.indexOf(pieceData)] = undefined;
        target[index] = pieceData;
        pieceData.board = targetName;

        this.setState({ [pieceData.board]: origin, [targetName]: target })
    }

    handleDragStart(e, order) {
        const dt = e.dataTransfer;
        dt.setData('text/plain', order);
        dt.effectAllowed = 'move';
    }
    handleOnClickAnswer = (score) => {

        score += 1;

    }

    render() {
        return (
          <ColorsContext.Consumer>
            {context => {
              return(
              <div className="jigsaw">
                <Timer></Timer>
                <ul className="jigsaw__shuffled-board">
                    {this.state.shuffled.map((piece, i) => this.renderPieceContainer(piece, i, 'shuffled'))}
                </ul>
                <ol className="jigsaw__solved-board" style={{ backgroundImage: `url(${imageUno})` }}>
                    {this.state.solved.map((piece, i) => this.renderPieceContainer(piece, i, 'solved'))}
                </ol>
                <Link to="/game/memorize">
                    <button className={context.visionProblemsMode === true ? "finish visionProblemsBlack" : "finish darkPurple"} >Terminado</button>
                </Link>
             </div>
              )
            }}
          </ColorsContext.Consumer>

            
        );
    }
    renderPieceContainer(piece, index, boardName) {
        return (
            <li key={index}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => this.handleDrop(e, index, boardName)}>
                {piece &&
                    <img draggable
                        onDragStart={(e) => this.handleDragStart(e, piece.order)}
                        src={require(`./jigsaw/${piece.img}`)} alt='fondo' />}
            </li>
        );
    }
    shufflePieces(pieces) {
        const shuffled = [...pieces];

        for (let i = shuffled.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }

        return shuffled;
    }
}

export default Jigsaw;