import React from 'react';

import Prism from 'prismjs';

class Closures extends React.Component {
    render() {
        return (
            <section id="closures">
                <h2>Closures</h2>
                <p>
                    A closure is an inner function that has access to the outer (enclosing) function’s variables—scope chain.
                    The closure has three scope chains: it has access to its own scope (variables defined between its curly brackets),
                    it has access to the outer function’s variables, and it has access to the global variables.
                </p>
                <p>
                    You create a closure by adding a function inside another function.
                </p>
                <p>
                    Closures are used extensively in Node.js; they are workhorses in Node.js’ asynchronous, non-blocking architecture.
                    Closures are also frequently used in jQuery and just about every piece of JavaScript code you read.
                </p>
                <figure>
                    <figcaption>Example of closure in jquery:</figcaption>
                    <pre>
                        <code className="language-javascript">
                            {`
$(function() {
	​var selections = []; 
	$(".niners").click(function() { // this closure has access to the selections variable​
		selections.push(this.prop("name")); // update the selections variable in the outer function's scope​
	});	​
});
`}
                        </code>
                    </pre>
                </figure>
                <p>
                    Closures have access to the outer function’s variable even after the outer function returns.
                </p>
                <p>
                    Closures store references to the outer function’s variables.
                </p>
            </section>
        );
    }
}

export default Closures;