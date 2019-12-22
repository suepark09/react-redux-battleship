import React from 'react';
import '../App.css'

class Square extends React.Component { 
    render() {
        let btn_class = this.props.color ? "grey-square" : "square"; //square is white background
        return (
            <button className={btn_class} onClick={ this.props.onClick }> 
                {this.props.value}
            </button>
        );
    }
}

export default Square;