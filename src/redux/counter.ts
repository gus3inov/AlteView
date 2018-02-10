import { INCREMENT, DECREMENT, RESET } from '../constance'

export interface CounterState {
    count: number
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

export default function reducer(state: CounterState = initialState, action: CounterAction): number {
    switch (action.type) {
        case INCREMENT:
            return state.count + 1
        case DECREMENT:
            return state.count - 1
        case RESET:
            return 0
        default:
            return state.count;
    }
}

export const increment = (): actionIncrement => ({
    type: INCREMENT
});

export const decrement = (): actionDecrement => ({ type: DECREMENT });

export const reset = (): actionReset => ({ type: RESET });