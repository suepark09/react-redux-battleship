import React from 'react'
import '../App.css'

class Instructions extends React.Component {
  render () {
    return (
      <ol className="instruction-list">
        <h5 className="instructions-title">Instructions</h5>
        <li>Select your ship to place it</li>
        <li>Choose the orientation: Horizontal or Vertical</li>
        <li>Place all of your ships on the board</li>
        <li>Click on the start game button to get a link to share with your opponent</li>
        <li>The game starts when all of the ships are placed on the board for both players</li>
        <li>Try to destroy all of your opponents ships before they get yours!</li>
      </ol>
    )
  }
}

export default Instructions
