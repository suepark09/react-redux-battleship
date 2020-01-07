import React from 'react'
import '../App.css'
import { connect } from 'react-redux'

class Square extends React.Component {
  render () {
   
    let color = null

    if (this.props.hovered) {
        color = 'green'
    }

    if(this.props.hidden){
      color = 'square'
      if (this.props.square.ship && this.props.square.color) {
        color = 'red'
      } else if (this.props.square.color) {
        color = 'white'
      } 
    } else {
      color = this.props.square.giveColor ? 'grey-square' : 'square' 
      if (this.props.hovered) {
        color = 'green'
    }
      if (this.props.square.ship && this.props.square.color) {
        color = 'red'
      }
      else if (this.props.square.color) {
        color = 'white'
      } 
    }

    //HIT COLOR
    const disabled = this.props.active ? '' : 'disabled'

    return (
      <button id="piece-btn" onMouseOut= {this.props.mouseOut} onMouseOver= {this.props.mouseOver} className={color} value={this.props.coordinate} onClick={this.props.onClick} disabled= {disabled}></button>
    )
  }
} const mapStateToProps = state => {
  return { state }
}

export default connect(
  mapStateToProps
)(Square)