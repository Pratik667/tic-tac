import { useState } from 'react'
import Player from './components/Player'
import GameBoard from './components/GameBoard'
import './App.css'

function App() {

  return (
    <main>
      <h1>React Tic-Tac-Toe</h1>
      <div id="game-container">
          <ol id='players'>
            <Player name='player 1' symbol='X' />
            <Player name='player 2' symbol='O' />
          </ol>
          <GameBoard />
      </div>
      LOG
    </main>
  )
}

export default App
