import React from 'react';
import Board from './components/Board';
import PiecesContainer from './components/PiecesContainer'
import './App.css';
<<<<<<< HEAD

function App() {
=======
import { Provider } from 'react-redux'
import store from './store'

class App extends React.Component  {

  constructor(props) {
    super(props); 
    this.state = {
 
    }
  }


render() {
  console.log('wuts thisss', this.state.bleh)
// if radio button isnt clicked, boardstate is disabled/false
    // else if radio button is clicked board is active/true && switch square class button to active state
    
>>>>>>> master
  return (
 
      <div className="game">
        <div className="game-board">
          <Board boardState={ this.activeBoard }/>
        </div>
        <div className="game-info">
          <PiecesContainer />
        </div>
      </div>

  );
}
 
}

export default App;
