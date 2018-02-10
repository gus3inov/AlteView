import * as React from "react"
import { Provider } from 'react-redux'
import configureStore from '../store'
import Counter from './Counter'

export interface App {
   readonly title: string;
}

const store = configureStore()

export default class Root extends React.Component<App> {
    render() {
       return(
           <Provider store={ store }>
                  <div>
                      <h1>{this.props.title}</h1>
                      <img src="../assets/img/logo.svg" alt=""/>

                      <Counter/>
                  </div>
           </Provider>
       )
    }
}