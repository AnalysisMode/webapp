import { combineReducers } from 'redux'
// reducers
import auth, { IAuthState } from './reducers/auth'
import affinities, { GameSet } from './reducers/affinities'
import game, { IGameState } from './reducers/game'

export interface IRootState {
    auth: IAuthState
    affinities: GameSet[]
    game: IGameState
}

export default combineReducers({
    auth,
    affinities,
    game,
})
