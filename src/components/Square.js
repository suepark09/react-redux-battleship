import React from 'react'
import '../App.css'

class Square extends React.Component {
  render () {
    const btn_class = this.props.color ? 'grey-square' : 'square' // square is white background
    return (
      <button className={btn_class} value={this.props.coordinate} onClick={this.props.onClick}>
        {/* {this.props.coordinate} */}
      </button>
    )
  }
}

export default Square
