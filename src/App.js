import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from '../src/pages/Home';
import Register from '../src/pages/Register';


class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/register" component={Register}/>
            </div>
        );
    }
}

export default App;