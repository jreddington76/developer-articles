import React from 'react';

import Variables from './Variables';
import TruthyFalsy from './Truthy-Falsy';
import Closures from './Closures';
import Functions from './Functions';

class JavaScript extends React.Component {
    render() {
        return (
            <div>
                <h1>JavaScript</h1>
                <div className="row">
                    <div className="col col-md-2 order-last">
                        <nav className="nav flex-column">
                            <a className="nav-link active" href="#variables">Variables</a>
                            <a className="nav-link" href="#functions">Functions</a>
                            <a className="nav-link" href="#closures">Closures</a>
                            <a className="nav-link" href="#truthyfalsy">TruthyFalsy</a>
                        </nav>
                    </div>
                    <div className="col col-md-10 order-first">
                        <article>
                            <Variables />
                            <Functions />
                            <Closures />
                            <Truthy-Falsy />
                        </article>
                    </div>
                </div>
            </div>
        );
    }
}

export default JavaScript;