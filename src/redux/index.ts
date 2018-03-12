import { combineReducers } from 'redux'
import postersReducer from './posters'

export default combineReducers({
    posters: postersReducer
})