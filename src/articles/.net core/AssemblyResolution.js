import React from 'react';

class AssemblyResolution extends React.Component {
    render() {
        return (
            <section id="assembly">
            <h2>Which assembly does my application use?</h2>
            <p>.NET will look for the assembly, with the version number against which the code was compiled, first in the GAC
                then in local files - check out
                <a href="https://stackoverflow.com/questions/981142/dll-in-both-the-bin-and-the-gac-which-one-gets-used" target="_blank">SO</a> for the full lowdown.</p>
            <p>If we want to ignore the GAC'd version then we need to increment the build number of the referenced assembly.  This new version can live in the bin folder
                and will be used in place of the GAC.
            </p>
            <p>When referencing assemblies, Forward Versioning is not allowed - an application built in .NET 4 cannot reference an assembly built in .NET 4.5.
                However, backward compatibility is allowed
            </p>
            <p>When deciding which version of an assembly to use, if the project references an assembly using the FQN (fully qualified name) then this version is the one that will be used.
                Should this not be found at runtime then an exception is thrown.  FQN is in the form "Microsoft.ReportViewer.WinForms, Version=9.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a, processorArchitecture=MSIL"
            </p>
        </section>
        );
    }
}

export default AssemblyResolution;