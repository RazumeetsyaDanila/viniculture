import { gameInitialState } from '../initialState';
import { IGameState, IGameAction, gameActionTypes} from '../../types/gameTypes';


export const gameReducer = (state = gameInitialState, action: IGameAction): IGameState => {
    switch (action.type) {
        case gameActionTypes.NEXT_STEP:
            return {...state, year: state.year + 1}
        default:
            return state
    }
}