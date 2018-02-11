
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

/**
 * Стандартная сигнатура mapStateToProps, и благодаря (в очередной раз)
 * интерфейсам мы пользуемся автоподбором всех свойств аргументов
 */
const mapStateToProps = (state: IStore, ownProps: CounterProps) => ({
    value: state.count
});

/**
 * Сигнатура mapDispatchToProps:
 * (dispatch: Dispatch<IStore>, ownProps: FieldProps) => ({ ... })
 */

/**
 * connect имеет сложную сигнатура, точнее более 10 сигнатур на
 * все случаи жизни.
 * По хорошему, нужно создавать 3 интерфейса:
 * результат mapStateToProps, результат mapDispatchToProps, и
 * собственные свойства компонента.
 * На практике, достаточно указать дженерику два первых пустых объекта,
 * и в третий аргумент отправить единый интерфейс свойств компонента.
 */
export default connect<{}, {}, CounterProps>(mapStateToProps, {increment, reset, decrement})(Counter);