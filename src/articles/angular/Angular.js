import React from 'react';


class Angular extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div id="left" className="col-12 col-md-2">
                        <nav className="nav flex-column">
                            <a className="nav-link active" href="#nuget">Nuget</a>
                            <a className="nav-link" href="#agile">Agile</a>
                        </nav>
                    </div>
                    <div className="col-12 col-md-10 offset-md-2">
                        <article>
                            <h1>Angular</h1>
                            <Nuget />
                            <Agile/>
                        </article>
                    </div>
                </div>
            </div>
        );
    }
}

export default Angular;