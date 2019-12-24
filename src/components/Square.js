import React from 'react'
import '../App.css'
import { connect } from 'react-redux';

class Square extends React.Component {
    // state.squares[x].find(square => square.key === `${x}${y}`)
  checkSquare = (e) => { 
      console.log( '++++', this.props)
      
    }
  render () {
    
    const btn_class = this.props.color ? 'grey-square' : 'square' // square is white background
<<<<<<< HEAD
=======
    // if (this.props.active) {
    //     return
    // }
>>>>>>> master
    const disabled = this.props.active ? '' : 'disabled'
    
    // console.log(disabled, '++++++++')
    
    return (
<<<<<<< HEAD
      
      <button className={btn_class} value={this.props.coordinate} onClick={this.checkSquare} disabled= {disabled}> 
        {/* {this.props.coordinate} */}   </button>
=======

      <button className={btn_class} value={this.props.coordinate} onClick={this.props.onClick} disabled={disabled}>
        {/* {this.props.coordinate} */}
      </button>
>>>>>>> master
    )
  }
}const mapStateToProps = state => {
    return { state }
}

const mapDispatchToProps = dispatch => {
    return {
        checkSquare: (squareKey) => dispatch({type: 'CLICKED', key: squareKey}), 
      
    }
}

<<<<<<< HEAD
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Square)


// export default Square


=======
export default Square
>>>>>>> master
