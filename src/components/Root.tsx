import * as React from "react";
import { Provider } from 'react-redux';
import configureStore from '../store';
import PosterList from '../components/Poster/PosterList';
import About from '../ui/templates/About';
import { Route } from 'react-router-dom';
import { Fragment } from 'react';
import MenuHeader from '../ui/organisms/Header/index';

export interface App {
   readonly title: string;
}

const store = configureStore();

export default class Root extends React.Component<App> {

    state = {
        isOpen: false
    };

    render() {
       return(
               <Provider store={ store }>
                  <Fragment>
                          <MenuHeader isOpen={this.state.isOpen}/>
                            <main style={{ marginLeft: '100px' }}>
                                <div className="container wrapper">
                                    <Route path="/posters" component={ PosterList }/>
                                    <Route path="/about" component={ About }/>
                                </div>
                            </main>
                  </Fragment>
               </Provider>
       )
    }
}