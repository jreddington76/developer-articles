import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Header from './js/components/Header';
import Footer from './js/components/Footer';
import Home from './js/components/Home';
import AspNet from './articles/asp.net/AspNet';
import NetCore from './articles/.net core/NetCore';
import JavaScript from './articles/javascript/Javascript';
import Misc from './articles/misc/Misc';
import NotFound from './js/components/NotFound';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="container-fluid">
                    <Header />
  
                     <Switch>
                         <Route exact path="/" component={Home} />
                         <Route path="/aspnet" component={AspNet} />
                         <Route path="/netcore" component={NetCore} />
                         <Route path="/javascript" component={JavaScript} />
                         <Route path="/misc" component={Misc} />
                         <Route path="*" component={NotFound} />
                     </Switch>

                    <Footer />
                </div>
            </Router>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);