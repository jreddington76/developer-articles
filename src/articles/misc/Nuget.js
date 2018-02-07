import React from 'react';

import Prism from 'prismjs';

class Nuget extends React.Component {
    render() {
        return (
            <section id="nuget">
                <h2>Nuget</h2>
                <p>
                    The nuspec file was generated using the csproj file.  This is done by opening a command prompt in folder containing the csproj file and running the command:
                </p>
                <figure>
                    <pre>
                        <code className="language-javascript">
                            {`nuget spec
`}
                        </code>
                    </pre>
                </figure>
                <p>
                    This adds tokens to the nuspec file that are replaced when the project is built.  The values are taken from attributes of the assembly info file.
                    See this <a href="https://docs.microsoft.com/en-us/nuget/schema/nuspec#replacement-tokens">link</a> for more info.
                </p>
                <p>
                    A post build task generates the nuget package using the csproj as the source (rather than the nuspec).
                    Also, the configuration defaults to debug so set the release config in the command line:
                </p>
                <figure>
                    <pre>
                        <code className="language-javascript">
                            {`nuget pack Mps.OneMps.Crm.csproj -properties Configuration=Release
`}
                        </code>
                    </pre>
                </figure>
                <p>
                    NB we need to move the working directory in the post build event as this defaults to bin\configuration.
                </p>
                <figure>
                    <pre>
                        <code className="language-javascript">
                            {`cd $(ProjectDir)
`}
                        </code>
                    </pre>
                </figure>
                <p>
                    To publish the solution to the VSTS feed:
                </p>
                <figure>
                    <pre>
                        <code className="language-javascript">
                            {`nuget.exe push -Source "MpsFeed" -ApiKey VSTS Mps.OneMps.Crm.<version>.nupkg
`}
                        </code>
                    </pre>
                </figure>
                <p>
                    NB need to use the Nuget Credentials Bundle version of nuget.exe
                </p>
            </section>
        );
    }
}

export default Nuget;