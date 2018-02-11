import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Root from './components/Root'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
    return (
        <BrowserRouter>
            <Root title='AlteView'/>
        </BrowserRouter>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);