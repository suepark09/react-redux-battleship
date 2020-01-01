import React, { Component } from 'react'
import Square from './Square'

export default class PlayerTwoOpponent extends Component {
    state = {}

    componentDidMount() {
        if (this.props.gameData) {
            console.log('PLAYER TWO OPPONENT PROPS:', this.props)
            const { squares } = this.props.gameData
            this.setState( squares )
            console.log('STATE:', this.state)
        }
    }

    render() {

        // const mappedBoard = []
        // for (let i = 0; i < 10; i++) {
        //     squares[i].map((singleSquare, idx) => {
        //         return mappedBoard.push(<Square key={singleSquare.key + `${idx}`} coordinate={singleSquare.key} color={singleSquare.color} square={singleSquare} />)
        //     })
        // }

        return (
            <div>
                <p>PLAYER ONE BOARD</p>
                {/* { mappedBoard } */}
            </div>
        )
    }
}
