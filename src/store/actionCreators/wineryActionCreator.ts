import { Dispatch } from "react"
import {wineryActionTypes, IWineryAction } from '../../types/wineryTypes';

export const redGrapeAdd = (count: number) => {
    return (dispatch: Dispatch<IWineryAction>) => {
        try {
            dispatch({ type: wineryActionTypes.RED_GRAPE_ADD, payload: {count: count}})
        } catch (e) {
            console.log("oops");
        }
    }
}