import React, { Component } from 'react'
import { connect } from 'react-redux';

class P2counter extends Component {

    counter = () =>{
        let ships = 0
        for(let row in this.props.state.squares.squares) { 
            for (let col in this.props.state.squares.squares[row]){
                const square = this.props.state.squares.squares[row][col]
                if(square.ship && square.color){
                    ships++
                }
            }
            // this.props.state.squares.squares2[row].map((square) => {
            //     if(square.ship && square.color){
            //         ships++
            //     }
        }
        return 17 - ships

    } 
    render() {
        console.log(this.props.state, '*******')
       
        return (
            
            <div>
                  <div className="opponent-ship-count-container">
                    <h5>Opponent Ship Count</h5>
                    <h5 className="opponent-ship-count">{this.counter()}</h5>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { state }
}



export default connect(
    mapStateToProps
)(P2counter)

