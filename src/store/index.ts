import { createStore } from 'redux'
import rootReducer from '../redux'
import { CounterState } from '../components/Counter/counter'

export interface IStore {
    count: CounterState
}

const configureStore = (initialState?: IStore) => {
    return createStore(
        rootReducer,
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
};

export default configureStore;