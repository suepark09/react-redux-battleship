import React from 'react';
import '../App.css'

class Square extends React.Component { 
    render() {
        // console.log('whats the color', this.props.color)
        return (
            <button style={{ backgroundColor: this.props.color}} className="square" onClick={ () => this.props.onClick() }> 
                {this.props.value}
            </button>
        );
    }
}

export default Square;