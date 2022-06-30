import { combineReducers } from "redux"
import { gameReducer } from './gameReducer'

export const  rootReducer = combineReducers({
    game: gameReducer
})

export type rootState = ReturnType<typeof rootReducer>