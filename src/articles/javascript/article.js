import React from 'react';

import Variables from './Variables';
import TruthyFalsy from './Truthy-Falsy';
import Closures from './Closures';
import Functions from './Functions';

class JavaScript extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>JavaScript</h1>
                <div className="row">
                    <div className="col col-md-2 order-last">
                        <nav className="nav flex-column">
                            <a className="nav-link active" href="#">Variables</a>
                            <a className="nav-link" href="#">Functions</a>
                            <a className="nav-link" href="#">Closures</a>
                            <a className="nav-link" href="#">TruthyFalsy</a>
                        </nav>
                    </div>
                    <div className="col col-md-10 order-first">
                        <article>
                            <Variables />
                            <Functions />
                            <Closures />
                            <TruthyFalsy />
                        </article>
                    </div>
                </div>
            </div>
        );
    }
}

export default JavaScript;