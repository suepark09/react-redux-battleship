import React from 'react'
import '../App.css'

class Instructions extends React.Component {
  render() {
    return (
      <ol>
        <li>Share this link with your opponent</li>
        <li>Select your ship to place it</li>
        <li>Choose the orientation: Horizontal or Vertical</li>
        <li>Place all of your ships on the board</li>
        <li>The game starts when all of the ships are placed on the board</li>
        <li>Try to destroy all of your opponents ships!</li>
      </ol>
    )
  }
}

export default Instructions