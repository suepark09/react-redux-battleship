import React from 'react'
import '../App.css'
import { connect } from 'react-redux'

class Square extends React.Component {



  render () {
   

    let color = this.props.square.color || this.props.square.giveColor? 'grey-square' : 'square' 

    if (this.props.hovered) {
        color = 'green'
        console.log('HUR')
    }

    //HIT COLOR
    
    if (this.props.square.ship && this.props.square.color) {
      console.log('turns red')
      color = 'red'
    }

    const disabled = this.props.active ? '' : 'disabled'

    return (
      <button id="piece-btn" onMouseOut= {this.props.mouseOut} onMouseOver= {this.props.mouseOver} className={color} value={this.props.coordinate} onClick={this.props.onClick} disabled= {disabled}></button>
    )
  }
} const mapStateToProps = state => {
  return { state }
}

const mapDispatchToProps = dispatch => {
  return {
    // checkSquare: (squareKey) => dispatch({ type: 'P1ATTACK', key: squareKey })

  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Square)

// export default Square
