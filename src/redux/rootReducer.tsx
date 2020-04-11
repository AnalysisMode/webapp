import { combineReducers } from 'redux'
// reduxers
import auth from './reducers/auth'
import affinities from './reducers/affinities'

export default combineReducers({
    auth,
    affinities,
})
