import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import './index.css';

import Header from './js/components/Header';
import Footer from './js/components/Footer';
import Home from './js/components/Home';
import NetCore from './articles/.net core/article';
import JavaScript from './articles/javascript/article';
import NotFound from './js/components/NotFound';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <Header />
                    <Footer />

                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/netcore" component={NetCore} />
                        <Route path="/javascript" component={JavaScript} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);