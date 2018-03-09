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
    entities: new OrderedMap({})
})

const defaultState = new initialState()

export default function posters(posterState = defaultState, action: LoadAction): any {
    const { posters } = action.payload
    switch (action.type){
        case LOAD_POSTERS:
            return posterState.set('entities', posters)
        default:
            return posterState;
    }
}

export const loadPosters: ActionCreator<ThunkAction<Action, LoadAction, void>> = () => ({
    return (dispatch: Dispatch<LoadAction>): Action => {
        fetch('api/posters').then(res => {
            dispatch({
                type: LOAD_POSTERS,
                payload: res.json()
            })
        })
    }
})