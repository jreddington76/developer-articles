import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import './index.css';

import Nav from './js/components/Nav';
import Home from './articles/Home';
import NetCore from './articles/.net core/article';
import JavaScript from './articles/javascript/article';
import NotFound from './js/components/NotFound';

class App extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <Nav />
                </header>
                <footer></footer>
            </div>
        );
    }
}

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/netcore" component={NetCore} />
            <Route path="/javascript" component={JavaScript} />
            <Route path="*" component={NotFound} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('app')
);