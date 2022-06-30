import { gameInitialState } from '../initialState';
import { IGameState, IGameAction, gameActionTypes} from '../../types/gameTypes';


export const gameReducer = (state = gameInitialState, action: IGameAction): IGameState => {
    switch (action.type) {
        case gameActionTypes.NEXT_STEP:
            return {...state, step: state.step + 1}
        default:
            return state
    }
}