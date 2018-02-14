import { INCREMENT, DECREMENT, RESET } from '../../constance'

export interface CounterState {
    count?: number;
}

const initialState: CounterState = {
    count: 0
}

export interface actionIncrement {
    type: INCREMENT;
}

export interface actionDecrement {
    type: DECREMENT;
}

export interface actionReset {
    type: RESET;
}

type CounterAction = actionIncrement | actionDecrement | actionReset

export default function reducer(state: CounterState['count'] =  initialState.count, action: CounterAction): number {
    switch (action.type) {
        case INCREMENT:
            return state + 2
        case DECREMENT:
            return state - 2
        case RESET:
            return 0
        default:
            return state;
    }
}

export const increment = (): actionIncrement => ({
    type: INCREMENT
});

export const decrement = (): actionDecrement => ({
    type: DECREMENT
});

export const reset = (): actionReset => ({
    type: RESET
});