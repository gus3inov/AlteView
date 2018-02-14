
import { combineReducers } from 'redux'
import counterReducer from '../components/Counter/counter'

export default combineReducers({
    count: counterReducer
})