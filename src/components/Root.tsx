import * as React from "react"
import { Provider } from 'react-redux'
import configureStore from '../store'
import Counter from './Counter'
import About from './About'
import { Link, Route } from 'react-router-dom'
import { Fragment } from 'react'

export interface App {
   readonly title: string;
}

const store = configureStore()

export default class Root extends React.Component<App> {
    render() {
       return(
               <Provider store={ store }>
                  <Fragment>
                      <nav>
                          <Link to="/counter"> Counter</Link>
                          <Link to="/about">About</Link>
                      </nav>
                      <div>
                          <h1>{this.props.title}</h1>
                          <img src="../assets/img/logo.svg" alt=""/>
                          <Route path="/counter" component={ Counter }/>
                          <Route path="/about" component={ About }/>
                      </div>
                  </Fragment>
               </Provider>
       )
    }
}