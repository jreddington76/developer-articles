import React from 'react';

class Interfaces extends React.Component {
    render() {
        return (
            <section id="interfaces">
                <h2>Interfaces</h2>
                <p>
                    Defines a contract

If you have some kind of default functionality to share across classes in the hierarchy, you can use an abstract class. But if you don't have any default implementation and just need to define contracts for derived classes to follow; interface is the most preferred choice.

To add a new method to an interface that has been released, create a new interface that inherits from it.
</p>
            </section >
        );
    }
}

export default Interfaces;