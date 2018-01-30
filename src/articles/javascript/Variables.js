import React from 'react';

import Prism from 'prismjs';

class Variables extends React.Component {
    render() {
        return (
            <section id="variables">
                <h2>Variables</h2>
                <h3>Variable Scope</h3>
                <p>
                    A variable’s scope is the context in which the variable exists.
                    The scope specifies from where you can access a variable and whether you have access to the variable in that context.
                </p>
                <p>
                    Variables have either a local scope or a global scope.
                </p>
                <h4>Local Variables (Function-level scope)</h4>
                <p>
                    Unlike most programming languages, JavaScript does not have block-level scope (variables scoped to surrounding curly brackets); instead, JavaScript has function-level scope.
                    Variables declared within a function are local variables and are only accessible within that function or by functions inside that function (Closures).
                </p>
                <p>
                    As there is no block-level scope, a variable declared in a for loop (for (var 1 = 0...) is in global scope.
                </p>
                <p>
                    Local Variables Have Priority Over Global Variables in Functions.
                    If you declare a global variable and a local variable with the same name, the local variable will have priority when you attempt to use the variable inside a function
                </p>
                <h4>Global Variables</h4>
                <p>
                    All variables declared outside a function are in the global scope.
                    In the browser, which is what we are concerned with as front-end developers, the global context or scope is the window object (or the entire HTML document).
                </p>
                <p>
                    If a variable is initialized (assigned a value) without first being declared with the var keyword, it is automatically added to the global context and it is thus a global variable
                </p>
                <strong>Do not Pollute the Global Scope</strong>
                <h3>Variable Hoisting</h3>
                <p>
                    All variable declarations are hoisted (lifted and declared) to the top of the function, if defined in a function, or the top of the global context, if outside a function.
                </p>
                <p>
                    It is important to know that only variable declarations are hoisted to the top, not variable initialization or assignments (when the variable is assigned a value).
                </p>
                <p>
                    So, somewhere in a function (or outside a function) is the declaration and initialization of a variable:
                </p>
                <figure>
                    <pre>
                        <code className="language-javascript">
                            {`
var name = 'james'
`}
                        </code>
                    </pre>
                </figure>
                <p>
                    The JavaScript engine will hoist the declaration (but not the initialization):
                </p>
                <figure>
                    <pre>
                        <code className="language-javascript">
                            {`
var name;
name = 'james';
`}
                        </code>
                    </pre>
                </figure>
                <p>
                    Therefore, the following code will produce these results:
                </p>
                <figure>
                    <pre>
                        <code className="language-javascript">
                            {`
console.log(name);
var name = 'james';
console.log(name);

undefined
james
`}
                        </code>
                    </pre>
                </figure>
                <p>
                    This is because the declaration of name was hoisted to the top of the function (above the first console.log).
                    At this point name is undefined.  The actual code the engine processes is
                </p>
                <figure>
                    <pre>
                        <code className="language-javascript">
                            {`
var name;
console.log(name);
name = 'james';
console.log(name);
`}
                        </code>
                    </pre>
                </figure>
                <strong>Function Declaration Overrides Variable Declaration When Hoisted</strong>
            </section>
        );
    }
}

export default Variables;