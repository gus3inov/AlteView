import { combineReducers } from 'redux'
import counterReducer from './counter'
import postersReducer from './posters'

export default combineReducers({
    count: counterReducer,
    posters: postersReducer
})