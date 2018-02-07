import React from 'react';

import Basics from './Basics';
import Classes from './Classes';
import Interfaces from './Interfaces';
import StackHeap from './StackHeap';
import Variables from './Variables';

class CSharp extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-12 col-md-2 left">
                    <nav id="content" className="navbar">
                        <nav className="nav nav-pills flex-column">
                            <a className="nav-link" href="#basics">Basics</a>
                            <nav className="nav nav-pills flex-column">
                                <a className="nav-link ml-3 my-1" href="#valuetypes">Value Types</a>
                                <a className="nav-link ml-3 my-1" href="#valuetypes">Value Types</a>
                                <a className="nav-link ml-3 my-1" href="#casing">Casing</a>
                                <a className="nav-link ml-3 my-1" href="#comments">Comments</a>
                            </nav>
                            <a className="nav-link" href="#classes">Classes</a>
                            <nav className="nav nav-pills flex-column">
                                <a className="nav-link ml-3 my-1" href="#constructor">Constructor</a>
                                <a className="nav-link ml-3 my-1" href="#abstract">Abstract Class</a>
                            </nav>
                            <a className="nav-link" href="#variables">Variables</a>
                            <a className="nav-link" href="#interfaces">Interfaces</a>
                            <a className="nav-link" href="#stackheap">Stack &amp; Heap</a>
                        </nav>
                    </nav>
                </div>

                <div className="col-12 col-md-10 offset-md-2">
                    <div data-spy="scroll" data-target="#content" data-offset="0">
                        <article>
                            <h1>C#</h1>
                            <Basics />
                            <Classes />
                            <Variables />
                            <Interfaces />
                            <StackHeap />
                        </article>
                    </div>
                </div>
            </div>
        );
    }
}

export default CSharp;