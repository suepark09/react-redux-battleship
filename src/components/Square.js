import React from 'react'
import '../App.css'
import { connect } from 'react-redux'

class Square extends React.Component {
  render () {
    let disabled = this.props.active ? '' : 'disabled'
   
    let color = null

    if (this.props.hovered) {
        color = 'green'
    }

    if(this.props.hidden){
      color = 'square'
      if (this.props.square.ship && this.props.square.color) {
        color = 'red'
        disabled = 'disabled'
    
        
      } else if (this.props.square.color) {
        disabled = 'disabled'
        color = 'white'
      } 
    } else {
      color = this.props.square.giveColor ? 'grey-square' : 'square' 
      if (this.props.hovered) {
        color = 'green'
    }
      if (this.props.square.ship && this.props.square.color) {
        disabled = 'disabled'
        color = 'red'
      }
      else if (this.props.square.color) {
        disabled = 'disabled'
        color = 'white'
      } 
    }
    
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