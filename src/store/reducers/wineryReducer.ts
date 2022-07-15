import { wineryInitialState } from '../initialState';
import { IWineryState, IWineryAction, wineryActionTypes} from '../../types/wineryTypes';


export const wineryReducer = (state = wineryInitialState, action: IWineryAction): IWineryState => {
    switch (action.type) {
        case wineryActionTypes.RED_GRAPE_ADD:
            return {...state, redGrapeCount: state.redGrapeCount + action.payload.count}
        default:
            return state
    }
}