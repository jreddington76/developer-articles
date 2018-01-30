import React from 'react';

import Variables from './Variables';
import TruthyFalsy from './Truthy-Falsy';
import Closures from './Closures';
import Functions from './Functions';

class JavaScript extends React.Component {
    render() {
        return (
            <article>
                <h1>JavaScript</h1>
                <Variables/>
                <Functions/>
                <Closures/>
                <TruthyFalsy/>
            </article>
        );
    }
}

export default JavaScript;