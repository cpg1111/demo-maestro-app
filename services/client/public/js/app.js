'use strict';

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'

import { Login, Register } from './auth/entry'
// import { Chat } from './chat/entry'

class App extends React.Component {
    render(){
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Login}/>
                <Route path="/register" component={Register}/>
                // <Route path="/chat" component={Chat}/>
            </Router>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('container'));
