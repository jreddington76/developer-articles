import React from 'react';

import ExceptionHandling from './exception-handling';
import AssemblyResolution from './assembly-resolution';
import Hosting from './hosting';
import PublicKeyToken from './public-key-token';

class NetCore extends React.Component {
    render() {
        return (
            <article>
                <h1>.NET Core</h1>
                <Hosting />
                <ExceptionHandling />
                <AssemblyResolution />
                <PublicKeyToken />
            </article>
        );
    }
}

export default NetCore;