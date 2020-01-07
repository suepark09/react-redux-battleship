import React, { Component } from 'react'
import { connect } from 'react-redux';

class P2counter extends Component {

    p1counter = () =>{
        let ships = 0
        for(let row in this.props.state.squares.squares) { 
            for (let col in this.props.state.squares.squares[row]){
                const square = this.props.state.squares.squares[row][col]
                if(square.ship && square.color){
                    ships++
                }
            }
        
        }
        return 17 - ships
    } 

    p2counter = () =>{
        let ships = 0
        for(let row in this.props.state.squares.squares2) { 
            for (let col in this.props.state.squares.squares2[row]){
                const square = this.props.state.squares.squares2[row][col]
                if(square.ship && square.color){
                    ships++
                }
            }
        
        }
        return 17 - ships
    } 

    render() {
        return (
            <div className="ship-count-row row">
                 <div className="opponent-ship-count-container col-sm">
                    <h5>Your Ship Count</h5>
                    <h5 className="opponent-ship-count">{this.props.state.squares.p2total}</h5>
                </div>
                  <div className="opponent-ship-count-container col-sm">
                    <h5>Opponent Ship Count</h5>
                    <h5 className="opponent-ship-count">{this.props.state.squares.p1total}</h5>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { state }
}

export default connect(mapStateToProps)(P2counter)