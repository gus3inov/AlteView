
import * as React from 'react'
import { connect, Dispatch, DispatchProp } from 'react-redux'
import { IStore } from '../store'
import { increment, decrement, reset } from '../redux/counter'
import {Fragment} from "react"

interface CounterProps extends DispatchProp<IStore>, React.HTMLProps<HTMLInputElement> {
    count?: number;
}

class Counter extends React.Component<CounterProps, {}> {

    render() {
        const { dispatch } = this.props
        return (
            <Fragment>
                <h1>{this.props.count}</h1>
                <button onClick={dispatch(increment())}>increment</button>
                <button onClick={dispatch(decrement())}>decrement</button>
                <button onClick={dispatch(reset())}>reset</button>
            </Fragment>
        );
    }
}

/**
 * Стандартная сигнатура mapStateToProps, и благодаря (в очередной раз)
 * интерфейсам мы пользуемся автоподбором всех свойств аргументов
 */
const mapStateToProps = (state: IStore, ownProps: CounterProps) => ({
    value: state.count.count
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
export default connect<{}, {}, FieldProps>(mapStateToProps)(Counter);