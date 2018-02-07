import React from 'react';

import Prism from 'prismjs';

class Ninject extends React.Component {
    render() {
        return (
            <section id="ninject">
                <h2>Ninject</h2>
                <p>
                    install-package ninject

                Create class called NinjectBindings that inherits from Ninject.Modules.NinjectModule override the Load method in this method add bindings in format:
                </p>
                <figure>
                    <pre>
                        <code className="language-csharp">
                            {`Bind<interface>().To<class>();
`}
                        </code>
                    </pre>
                </figure>
                <p>
                    in Main method create and initialise ninject kernel:
                </p>
                <figure>
                    <pre>
                        <code className="language-csharp">
                            {`var kernel = new StandardKernel();
kernel.Load(Assembly.GetExecutingAssembly());
`}
                        </code>
                    </pre>
                </figure>
                <p>
                    This will search the executing assembly for the NinjectModule and will load all the bindings now get the initial class from the bindings:
                </p>
                <figure>
                    <pre>
                        <code className="language-csharp">
                            {`var controller = kernel.Get<IController>();
`}
                        </code>
                    </pre>
                </figure>
            </section >
        );
    }
}

export default Ninject;