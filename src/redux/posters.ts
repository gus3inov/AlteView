import { LOAD_POSTERS, START, SUCCESS, FAIL } from '../constance'
import { OrderedMap, Record } from "immutable"
import { Action, ActionCreator, Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'

export interface PostersState {
    loading?: boolean;
    loaded?: boolean;
    entities?: any;
    payload: Array<object>;
    type: string;
    get(string);
}

export interface loadPosters {
    type: any;
    payload: any;
}

type LoadAction = loadPosters;

const initialState = Record({
    loading: false,
    loaded: false,
    entities: new OrderedMap({})
});

const defaultState = new initialState();

export default function posters(posterState = defaultState, action: LoadAction): any {
    const { payload } = action;
    switch (action.type){
        case LOAD_POSTERS + START:
          return posterState.set('loading', true)
        case LOAD_POSTERS + SUCCESS:
            return posterState.set('entities', payload)
                              .set('loading', false)
                              .set('loaded', true)
        default:
            return posterState;
    }
}

export const loadPosters: ActionCreator<ThunkAction<Action, LoadAction, void>> = () => {
    return (dispatch: Dispatch) => {

        dispatch({
            type: LOAD_POSTERS + START,
            payload: null
        });

        fetch('/api/poster')
            .then(res => {
            return res.json();
            }).then(data => {
                dispatch({
                    type: LOAD_POSTERS + SUCCESS,
                    payload: data
                })
            }).catch(err => {
                throw new Error(err)
            });
    };
};
