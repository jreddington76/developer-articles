import React from 'react';

import Prism from 'prismjs';

class Functions extends React.Component {
    render() {
        return (
            <section id="functions">
                <h2>Functions</h2>
                <h3>Function Declaration</h3>
                <p>
                    A Function Declaration defines a named function variable without requiring variable assignment.
                Function Declarations occur as standalone constructs and cannot be nested within non-function blocks:
                </p>
                <figure>
                    <pre>
                        <code className="language-javascript">
                            {`
function bar() {
    return 3;
}
`}
                        </code>
                    </pre>
                </figure>
                <p>
                    called from parent scope:
                </p>
                <figure>
                    <pre>
                        <code className="language-javascript">
                            {`
bar() //3
bar  //function
`}
                        </code>
                    </pre>
                </figure>
                <h3>Function Expressions</h3>
                <p>
                    A Function Expression defines a function as a part of a larger expression syntax (typically a variable assignment ). Functions defined via Functions Expressions can be named or anonymous.
                Function Expressions must not start with “function” (hence the parentheses around the self invoking example below):
                </p>
                <figure>
                    <pre>
                        <code className="language-javascript">
                            {`
//anonymous function expression
var a = function() {
    return 3;
}
 
//named function expression
var a = function bar() {
    return 3;
}
 
//self invoking function expression
(function sayHello() {
    alert("hello!");
})();
`}
                        </code>
                    </pre>
                </figure>
                <p>
                    The function name (if any) is not visible outside of it’s scope (contrast with Function Declarations).
                </p>
                <p>
                    As with variables, function declarations and function variables are always moved (‘hoisted’) to the top of their JavaScript scope by the JavaScript interpreter.
                </p>
                <p>
                    But…but…we were always taught that code after the return statement is unreachable.
                </p>
                <p>
                    In JavaScript execution there is Context (which ECMA 5 breaks into LexicalEnvironment, VariableEnvironment and ThisBinding) and Process
                    (a set of statements to be invoked in sequence). Declarations contribute to the VariableEnvironment when the execution scope is entered.
                    They are distinct from Statements (such as return) and are not subject to their rules of process.
                </p>
            </section>
        );
    }
}

export default Functions;