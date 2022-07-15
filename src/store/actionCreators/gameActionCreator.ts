import { Dispatch } from "react"
import {gameActionTypes, IGameAction } from '../../types/gameTypes';

export const nextStep = () => {
    return (dispatch: Dispatch<IGameAction>) => {
        try {
            dispatch({ type: gameActionTypes.NEXT_STEP})
        } catch (e) {
            console.log("oops");
        }
    }
}