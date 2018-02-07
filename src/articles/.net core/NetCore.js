import React from 'react';

import ExceptionHandling from './ExceptionHandling';
import AssemblyResolution from './AssemblyResolution';
import Hosting from './Hosting';
import PublicKeyToken from './PublicKeyToken';

class NetCore extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col col-md-2 offset-1 left">
                        <nav className="nav flex-column">
                            <a className="nav-link active" href="#hosting">Hosting</a>
                            <a className="nav-link" href="#exceptions">Exception Handling</a>
                            <a className="nav-link" href="#assembly">Assembly Resolution</a>
                            <a className="nav-link" href="#publickey">Public Key Token</a>
                        </nav>
                    </div>
                    <div className="col col-md-8 offset-3">
                        <article>
                            <h1>.NET Core</h1>
                            <Hosting />
                            <ExceptionHandling />
                            <AssemblyResolution />
                            <PublicKeyToken />
                        </article>
                    </div>
                </div>
            </div>
        );
    }
}

export default NetCore;