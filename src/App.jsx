import { useState } from 'react';
import Player from './components/Player';
import GameBoard from './components/GameBoard';
import Log from './components/Log';
import './App.css';

function derivedActivePlayer(gameTurns){
  let currentPlayer = 'X';
  if(gameTurns.length > 0 && gameTurns[0].player === 'X'){
    currentPlayer = 'O';
  }
  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  //const [activePlayer, setActivePlayer] = useState('X'); 
  const activePlayer = derivedActivePlayer(gameTurns);
  function handleSelectSquare(rowIndex, colIndex) {
    //setActivePlayer(current => current === 'X' ? 'O' : 'X');

    setGameTurns((prevTurns) => {
      let currentPlayer = derivedActivePlayer(prevTurns);
      const updatedTurns = [
        {square: {row:rowIndex, col: colIndex}, player: currentPlayer},
        ...prevTurns,
      ]
      return updatedTurns;
    });
  }
  return (
    <main>
      <h1>Tic-Tac-Toe</h1>
      <div id="game-container">
          <ol id='players' className='highlight-player'>
            <Player initialName='Pratik' symbol='X' isActive={activePlayer === 'X'}/>
            <Player initialName='player 2' symbol='O' isActive={activePlayer === 'O'}/>
          </ol>
          <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
