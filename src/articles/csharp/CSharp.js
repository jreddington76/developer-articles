import React from 'react';

import Basics from './Basics';
import Classes from './Classes';
import Interfaces from './Interfaces';
import StackHeap from './StackHeap';
import Variables from './Variables';

class CSharp extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div id="left" className="col col-md-2 offset-1">
                        <nav className="nav flex-column">
                            <a className="nav-link active" href="#basics">Basics</a>
                            <a className="nav-link" href="#classes">Classes</a>
                            <a className="nav-link" href="#variables">Variables</a>
                            <a className="nav-link" href="#interfaces">Interfaces</a>
                            <a className="nav-link" href="#stackheap">Stack &amp; Heap</a>
                        </nav>
                    </div>
                    <div className="col col-md-8 offset-3">
                        <article>
                            <h1>C#</h1>
                            <Basics />
                            <Classes />
                            <Variables/>
                            <Interfaces />
                            <StackHeap/>
                        </article>
                    </div>
                </div>
            </div>
        );
    }
}

export default CSharp;