import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Fragment } from 'react'
import {BlackButton, WhiteButton} from './ui/atoms/button'

interface IAppProps {
    title: string;
}

const App = (props: IAppProps) => {
    return (
        <Fragment>
            <h1>{props.title}</h1>
            <img src="../assets/img/logo.svg" alt=""/>
            <BlackButton size={true}>ffsf</BlackButton>
            <WhiteButton size={false}>ffsf</WhiteButton>
        </Fragment>
    );

}
ReactDOM.render(
    <App title="Hello, React!" />,
    document.getElementById('root')
);