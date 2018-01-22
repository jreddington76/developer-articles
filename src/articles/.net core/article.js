import React from 'react';

import ExceptionHandling from './exception-handling';
import AssemblyResolution from './assembly-resolution';
import PublicKeyToken from './public-key-token';

class NetCore extends React.Component {
    render() {
        return (
            <article>
                <h1>.NET Core</h1>
                <ExceptionHandling />
                <AssemblyResolution />
                <PublicKeyToken />
            </article>
        );
    }
}

export default NetCore;