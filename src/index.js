import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import NetCore from './articles/.net core/article';

class App extends React.Component {
    render() {
        return (
            <div>
                <header></header>
                <nav></nav>
                <NetCore/>
                <footer></footer>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);