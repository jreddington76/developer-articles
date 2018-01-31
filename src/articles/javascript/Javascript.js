import React from 'react';

import Variables from './Variables';
import TruthyFalsy from './Truthy-Falsy';
import Closures from './Closures';
import Functions from './Functions';

class JavaScript extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div id="left" className="col col-md-2 offset-1">
                        <nav className="nav flex-column">
                            <a className="nav-link active" href="#variables">Variables</a>
                            <a className="nav-link" href="#functions">Functions</a>
                            <a className="nav-link" href="#closures">Closures</a>
                            <a className="nav-link" href="#truthyfalsy">Truthy Falsy</a>
                        </nav>
                    </div>
                    <div className="col col-md-8 offset-3">
                        <article>
                            <h1>JavaScript</h1>
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