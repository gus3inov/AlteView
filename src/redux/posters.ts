import { LOAD_POSTERS } from '../constance'
import { OrderedMap, Record } from "immutable"
import { Action, ActionCreator, Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'

export interface PostersState {
    loading?: boolean;
    loaded?: boolean;
    entities?: any;
    payload: Array<object>;
    type: string;
}

export interface loadPosters {
    type: LOAD_POSTERS;
    payload: Array<object>;
}

type LoadAction = loadPosters

const initialState = Record({
    loading: false,
    loaded: false,
    entities: OrderedMap({})
})

const defaultState = new initialState()

export default function posters(posterState = defaultState, action: LoadAction): any {
    const { payload } = action
    switch (action.type){
        case LOAD_POSTERS:
            return posterState.set('entities', payload)
        default:
            return posterState;
    }
}

export const loadPosters: ActionCreator<ThunkAction<Action, LoadAction, void>> = () => {
    let response:any;
    return (dispatch: Dispatch<LoadAction>): LoadAction => {
        fetch('/api/posters')
            .then(res => {
            return res.json();
            }).then(data => {
                dispatch({
                    type: LOAD_POSTERS,
                    payload: data
                })
            }).catch(err => {
                throw new Error(err)
            })
    }
}