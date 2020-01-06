import { all, call, put, takeEvery, takeLatest, select} from 'redux-saga/effects'
import { CLICKED2, CLICKED } from '../actions/actionTypes'
import {updatePlayer2Data} from '../firebaseFunc'

export function* watchBoard () {
    yield all([
        takeEvery(CLICKED2, clicked2Saga)
        // takeEvery(CLICKED, clicked2Saga)
    ])
}

export function* clicked2Saga (action) {
    yield console.log('HELLOOOOOO')
    const state = yield select()
    yield console.log('WOOOOOOW',state)
    if (state.squares.player2Ready) {
        yield updatePlayer2Data(state.squares.gameId, state.squares)
    }
}