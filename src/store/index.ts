import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../redux'
import { CounterState } from '../redux/counter'
import { PostersState } from '../redux/posters'
import thunk from 'redux-thunk'

export interface IStore {
    count: CounterState;
    posters: PostersState;
}

const enhancer = applyMiddleware(thunk)

const configureStore = (initialState?: IStore) => {
    return createStore(
        rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        enhancer
    )
};

export default configureStore;