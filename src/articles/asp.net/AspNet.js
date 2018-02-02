import React from 'react';

class AspNet extends React.Component {
    render() {
        return (
            <section id="assembly">
                <p>
                    ASP.NET

What is ASP.NET

A Web application framework developed by Microsoft to build dynamic data driven web applications and web services
A subset of the .NET framework
The successor to the classic ASP (Active Server Pages)
Introduced in .NET framework 1.0 (released in 2002)


What are advantages of web applications

installed on web server not on every machine that will access it
maintenance, support, patches esaier to provide as we are just updating the web server(s) not every client machine
only browser required on client machine
available from anywhere provided there is internet connection
cross platform

Web applications work on HTTP Protocol (HyperText Transfer Protocol) - HTTP is a stateless protocol, meaning it does not retain state between requests
when a request comes into the server (i.e. a user navigates to a website in their browser) the web application is loaded into memory (on the server).
The webform requested is created along with all its controls.  Fields will be created and any code in Page events will be run.
This code may affect the state of the webpage (i.e. update fields).  Finally the page life-cycle completes and HTML is sent to the browser.
The objects in the web server's memory are destroyed.

So every request to a webform creates a new webform so all state is lost when the request completes

When a request is received:
An instance of the requested webform is created
Events are processed
the HTML is generated and sent to the client
The webform is immediately destroyed

<h3>ViewState</h3>

The ViewState travels with every request and response in a hidden field called __VIEWSTATE - not stored on client or server.
The value of this field is the data stored in ViewState in base64-encoded string format in Page_Init event ViewState restoration occurs.
This means that the base64 value of the hidden viewstate field is decoded and the data is stored in the ViewState object.
The viewstate data is lost if the user navigates away from the page or closes the browser

ASP.NET controls use ViewState internally to maintain their state [preserve data] across postbacks.  The data is restored to the controls in Page_Init.
ViewState can be disabled for a control by setting the property EnableViewState to false.

ASP.NET server controls retain state
HTML controls do not

To convert HTML control to ASP.NET server control add runat="server" attribute to markup

to use:

ViewState["key"] = 20;
var value = (int)ViewState["key"];


<h3>Events</h3>

Events can occur at 3 levels:
Application Level (Application_Start, Session_Start, etc)
Page Level (Page_Load)
Control Level (Button click)

To send data from one form to another
Query Strings
Cookies
Session State
Application State


Sessions State available across all pages in the current session - single-user global data.
Session state variables are stored on the web server and are cleared when the users' session times-out - default is 20 minutes.
To change this, add timeout attribute to sessionState element in web.config - <sessionState mode="InProc" timeout="60"></sessionState>

Application State available across all pages and all sessions - multi-user global data.
Application state varaibles are stored on the server and cleared when the process hosting the application is restarted.

global.asax contains application level events.
In general, application events are used to initialize data that needs to be available to all the current sessions of the application.
Session events initialize data for the current session

A user session can be thought of as a new instance of a browser.  The browser instance will have a session id that is sent to the server.
Stored as a cookie so if new instance of browser is opened while another instance is open, they will share the same session cookie and be treated as the same session.

To get new session id:
close existing browser window and the open a new instance of the browser
open a new instance of a different browser
use cookie-less sessions - <sessionState mode="InProc" cookieless="true"></sessionState>
using cookieless sessions adds the session id to the url

to use:

Session State

Session["key"] = 20;
var value = (int)Session["key"];


Application State

Application["key"] = 20;
var value = (int)Application["key"];


<h3>Server Control Events</h3>

When a button is clicked, the form is posted to the server, the webpage is created, page events are triggered, control events are triggered,
html is rendered and sent back to the browser, page is destroyed

Postback events - these events submit the web page immediately to the server for processing.  Click event of a button control is an example of a PostBack event.

Cached events - these events are saved in the page's view state to be processed when a postback event occurs.
TextChanged event of text box control and SelectedIndexChanged event of a DropDownList control are examples of cached events.
When a postback event occurs (e.g. button click), any cached events are triggered before the postback event.  To convert a cached event to a postback event, set the AutoPostBack property of the control to true.

Validation events - run on the client browser.  The validation control emit javascript which is run before form posted back.
Validation controls (RangeValidator, RequiredFieldValidator, etc)


IsPostBack

A property of System.Web.UI.Page used to determine if page is being loaded for the first time (i.e. HttpGet) or is being loaded as the result of a postback (HttpPost) - perhaps as the result of a button click (which raises a postback event).

Remember that an ASP.NET Server control maintains its state across postback automatically using ViewState.  If, on Page_Load, we were to populate a dropdown list with items, every time we postback the form the items would be added again. So in Page_Init, the ViewState is restored so the items are added to the server control.  The in Page_Load the items are added again.  To solve this check IsPostBack and if false populate the list.

Other solutions to this problem is to disable view state for a control.  This causes porblems however, for example, a dropdownlist would not remember which item had been selected.  Also, any cached events would not be executed as they are contained in view state (which we have disabled)


IIS

What is a web server?

Software that is used to deliver web pages to clients (browsers) using HTTP.

What is a virtual directory?

A pointer to a physical directory on the computer.  The virtual directory is used in the url.


Validation Controls

ASP.NET ships with 6 validation controls - RequiredFieldValidator, RangeValidator, RegularExpressionValidator, CompareValidator, CustomValidator, ValidationSummary
</p>
            </section>
        );
    }
}

export default AspNet;