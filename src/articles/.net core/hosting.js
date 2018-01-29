import React from 'react';

class Hosting extends React.Component {
    render() {
        return (
            <section>
                <h2>ASP.NET Core Hosting in IIS</h2>
                <p>References: <a href="https://docs.microsoft.com/en-us/aspnet/core/fundamentals/servers/aspnet-core-module?tabs=aspnetcore2x">https://docs.microsoft.com/en-us/aspnet/core/fundamentals/servers/aspnet-core-module?tabs=aspnetcore2x</a></p>

                <p>ASP.NET Core runs as a standalone, out of process Console application.
                    ASP.NET Core applications have their own self-hosted Web server and process requests internally using this self-hosted server instance - Kestrel.</p>

                <p>You can however run IIS as a front end proxy for ASP.NET Core applications, because Kestrel is a raw Web server that doesn't support all features a full server like IIS supports.
                    This is actually a recommended practice on Windows in order to provide port 80/443 forwarding which kestrel doesn't support directly.</p>

                <p>The AspNetCoreModule is a native IIS module that hooks into the IIS pipeline very early in the request cycle and immediately redirects all traffic to the backend ASP.NET Core application.
                    All requests - even those mapped to top level Handlers like ASPX bypass the IIS pipeline and are forwarded to the ASP.NET Core process.
                    This means you can't easily mix ASP.NET Core and other frameworks in the same Site/Virtual directory,
                    which feels a bit like a step back given that you could easily mix frameworks before in IIS.</p>

                <p>While the IIS Site/Virtual still needs an IIS Application Pool to run in, the Application Pool should be set to use No Managed Code.
                    Since the App Pool acts merely as a proxy to forward requests, there's no need to have it instantiate a .NET runtime.</p>

                <ul>
                    <li>Install the ASP.NET Core Service Hosting Bundle
                    <ul>
                            <li>this installs the .NET Core Runtime, .NET Core Library, and the ASP.NET Core Module</li>
                            <li>the AspNetCoreModule can be found in the IIS native module list</li>
                            <li>adds the dotnet folder to C:\Program Files which contains the dotnet.exe</li>
                        </ul>
                    </li>
                    <li>Install latest version of Web Deploy (currently 3.6)
                        <ul>
                            <li>use Microsoft Web Platform Installer (WebPI) - https://www.microsoft.com/web/downloads/platform.aspx</li>
                        </ul>
                    </li>
                    <li>Install IIS: Management Service from WebPI
                        <ul>
                            <li>this adds Web Management Service to services.msc.  change the start type to automatic and Start it</li>
                        </ul>
                    </li>
                    <li>Create a new website
                        <ul>
                            <li>set the .NET Framework version of the application pool to 'No Managed Code'</li>
                        </ul>
                    </li>
                </ul>

                <p>NB ensure IIS: Management Service is installed BEFORE Web Deploy.  If Web Deploy is already installed when you install IIS: Management Service then you need to reinstall Web Deploy</p>
            </section >
        );
    }
}

export default Hosting;