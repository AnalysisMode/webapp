import { combineReducers } from 'redux'
// reducers
import auth, { IAuthState } from './reducers/auth'
import affinities, { GameSet } from './reducers/affinities'

export interface IRootState {
    auth: IAuthState
    affinities: GameSet[]
}

export default combineReducers({
    auth,
    affinities,
})
