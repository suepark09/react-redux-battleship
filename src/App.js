import React from 'react';
import Board from './components/Board';
import PiecesContainer from './components/PiecesContainer'
import './App.css';

import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={ store }>
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <PiecesContainer />
        </div>
      </div>
    </Provider>
  );
}

export default App;
