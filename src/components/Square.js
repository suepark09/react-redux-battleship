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
    const disabled = this.props.active ? '' : 'disabled'
    
    // console.log(disabled, '++++++++')
    
    return (
      
      <button className={btn_class} value={this.props.coordinate} onClick={this.checkSquare} disabled= {disabled}> 
        {/* {this.props.coordinate} */}   </button>
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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Square)


// export default Square


