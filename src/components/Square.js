import React from 'react'
import '../App.css'
import { connect } from 'react-redux';

class Square extends React.Component {
    // state.squares[x].find(square => square.key === `${x}${y}`)
  checkSquare = (e) => { console.log(e.target.value)}
  render () {
    const state = this.props.state.squares.squares
    const btn_class = this.props.color ? 'grey-square' : 'square' // square is white background
    // const hitShipClass = this.state.ship && this.state.clicked ? 'red' : 'square'
    
    
    
    return (
      <button className={btn_class} value={this.props.coordinate} onClick={this.checkSquare}>
        {this.props.coordinate}
      </button>
    )
  }
}

const mapStateToProps = state => {
    return { state }
}

const mapDispatchToProps = dispatch => {
    return {
        clickSquare: (squareKey) => dispatch({type: 'CLICKED', key: squareKey}), 
      
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Square)


// export default Square


