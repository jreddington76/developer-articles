import React from 'react';

import Nuget from './Nuget';
import Agile from './Agile';
import Ninject from './Ninject';

class Misc extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div id="left" className="col-12 col-md-2">
                        <nav className="nav flex-column">
                            <a className="nav-link active" href="#nuget">Nuget</a>
                            <a className="nav-link" href="#agile">Agile</a>
                            <a className="nav-link" href="#ninject">Ninject</a>
                        </nav>
                    </div>
                    <div className="col-12 col-md-10 offset-md-2">
                        <article>
                            <h1>Miscellaneous</h1>
                            <Nuget />
                            <Agile />
                            <Ninject />
                        </article>
                    </div>
                </div>
            </div>
        );
    }
}

export default Misc;