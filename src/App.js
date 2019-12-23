import React from 'react'
import Board from './components/Board'
import PiecesContainer from './components/PiecesContainer'
import Instructions from './components/Instructions'
import './App.css'

function App () {
  return (
    <div>
      <h1>React-Redux-Battleship Game</h1>
      <div className='game'>
          <div className='game-info'>
            <PiecesContainer />
          </div>
          <div className='game-board'>
            <Board />
          </div>
      </div>
      <div className='instructions'>
        <Instructions />
      </div>
    </div>
  )
}

export default App
