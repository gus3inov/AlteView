
import * as React from 'react'
import { connect, Dispatch, DispatchProp } from 'react-redux'
import { IStore } from '../store'
import { increment, decrement, reset } from '../redux/counter'
import {Fragment} from "react"

interface CounterProps extends DispatchProp<IStore>, React.HTMLProps<HTMLInputElement> {
    value?: number;
    increment?() : number;
    decrement?() : number;
    reset?()     : number;
}

class Counter extends React.Component<CounterProps, {}> {
    render() {
        const { increment, decrement, reset } = this.props
        return (
            <Fragment>
                <h1>{this.props.value}</h1>
                <button onClick={increment}>increment</button>
                <button onClick={decrement}>decrement</button>
                <button onClick={reset}>reset</button>
            </Fragment>
        );
    }
}

const mapStateToProps = (state: IStore, ownProps: CounterProps) => ({
    value: state.count
});

export default connect<{}, {}, CounterProps>(mapStateToProps, {increment, reset, decrement})(Counter);