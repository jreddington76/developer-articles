import React from 'react';

import Prism from 'prismjs';

class TruthyFalsy extends React.Component {
    render() {
        return (
            <section>
                <h2>What does truthy and falsy mean?</h2>
                <p>
                    Lets see what the offical docs have to say:
                </p>
                <blockquote>
                    <p>
                        In JavaScript, a truthy value is a value that is considered true when evaluated in a Boolean context.
                    All values are truthy unless they are defined as falsy (i.e., except for false, 0, "", null, undefined, and NaN).
                </p>
                    <footer>
                        <cite><a href="https://developer.mozilla.org/en-US/docs/Glossary/Truthy">MDN web docs</a></cite>
                    </footer>
                </blockquote>
                <p>
                    OK, but what does that mean?  Well it means that we can use syntax like:
                    </p>
                <figure>
                    <pre>
                        <code className="language-javascript" contenteditable spellcheck="false">
                            {`
var obj = {};

if (obj){
    // this will evaluate to true
}
`}
                        </code>
                    </pre>
                </figure>
                <p>
                    This will return true.  Why?  Well, quite simply, because this is not any of the values mentioned above that equate to falsy!
                    A good use for this is to check whether a variable is null or undefined.  Rather than having to do this:
                </p>
                <figure>
                    <pre>
                        <code className="language-javascript" contenteditable spellcheck="false">
                            {`
if (obj === undefined || obj === null){
    
}
`}
                        </code>
                    </pre>
                </figure>
                <p>
                    We can simply use the syntax in the first code snippet.
                </p>
            </section>
        );
    }
}

export default TruthyFalsy;