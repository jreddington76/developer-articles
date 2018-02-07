import React from 'react';

class Basics extends React.Component {
    render() {
        return (
            <section id="basics">
                <h2 id="valuetypes">Basics</h2>
                <h3>Value Types</h3>
                <p>
                    In C#, all the "things" declared with the following list of type declarations are Value types (because they are from System.ValueType):
                </p>
                <ul>
                    <li>bool</li>
                    <li>byte</li>
                    <li>char</li>
                    <li>decimal</li>
                    <li>double</li>
                    <li>enum</li>
                    <li>float</li>
                    <li>int</li>
                    <li>long</li>
                    <li>sbyte</li>
                    <li>short</li>
                    <li>struct</li>
                    <li>uint</li>
                    <li>ulong</li>
                    <li>ushort</li>
                </ul>
                <h3>Reference Types</h3>
                <p>
                    All the "things" declared with the types in this list are Reference types (and inherit from System.Object, except, of course, for object which is the System.Object object):
                </p>
                <ul>
                    <li>class</li>
                    <li>interface</li>
                    <li>delegate</li>
                    <li>object</li>
                    <li>string</li>
                </ul>
                <h3>Casing</h3>
                <p>
                    camelCase [aka lower camelcase] - lowercase first letter then uppercase for the first letter of each subsequent word
                    upper camel case - as above but first letter is uppercase
                </p>
                <h3>Comments</h3>
                <figure>
                    <pre>
                        <code className="language-csharp">
                            {`// one line comment
`}
                        </code>
                    </pre>
                </figure>
                <figure>
                    <pre>
                        <code className="language-csharp">
                            {`/*
                multiline comment
            */
`}
                        </code>
                    </pre>
                </figure>
       </section >
        );
    }
}

export default Basics;