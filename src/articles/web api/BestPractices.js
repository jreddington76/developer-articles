import React from 'react';

import Prism from 'prismjs';

class BestPractices extends React.Component {
    render() {
        return (
            <section id="nuget">
                <h2>Best Practices</h2>
                <p>
                Use plural names for controllers if they are dealing with multiple entities
When GETting sets, return the empty set rather than 404
                </p>
            </section>
        );
    }
}

export default BestPractices;