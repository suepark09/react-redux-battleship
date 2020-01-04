import React, { Component } from 'react'
import { connect } from 'react-redux';

class P1counter extends Component {

    
    render() {
        // console.log(this.props.state.squares.p2total, '*******')
        return (
            
            <div>
                  <div>
                <h5>Opponent Ship Count</h5> 
              
                <h5 className="opponent-ship-count">{this.props.state.squares.p2total}</h5>
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
)(P1counter)

