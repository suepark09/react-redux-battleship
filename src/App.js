import React from 'react'
import Board from './components/Board'
import PiecesContainer from './components/PiecesContainer'
import './App.css'

function App () {
  return (

    <div className='game'>
      <div className='game-board'>
        <Board />
      </div>
      <div className='game-info'>
        <PiecesContainer />
      </div>
    </div>

  )
}

export default App
