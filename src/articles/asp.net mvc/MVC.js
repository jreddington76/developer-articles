import React from 'react';

class MVC extends React.Component {
    render() {
        return (
            <section id="abstract">
            MVC

            Routing
            
            the url is mapped to a controller and an action.  By default the controller is Home and the action is Index [the id param is optional].  so all the following routes go to the same action:
            
            localhost/MVCApp
            localhost/MVCApp/Home
            localhost/MVCApp/Home/Index
            localhost/MVCApp/Home/Index/10
            
            passing a paramter will still map to the parameterless Index action.  To get the value of the id add a param to Index.
            
            URL's are mapped to controller actions
            
            Whereas in webforms, URL's are mapped to physical files
            
            You can use query string params and map them to action params of the same name
            
            NB the ignore routes call in RouteConfig for axd files is to allow access to trace file as trhis url does not match the default route
            
            
            Views
            
            By convention, Views are added to the Views root folder.  The subfolders of Views are named the same as the Controllers.  Inside the "controller" folders reside the views.  These have the same name as the actions in the Controller.  In the action when we reference View, ti will look for a cshtml file in the folder ~/Views/{controller}.
            
            returning a View returns a ViewResult.  The method signature returns an ActionResult.  ViewResult is derived from ActionResult.
            
            ViewBag can be used to store values dynamically in the action and can be accessed in the view.  To write c# code in razor file use @.  If the line starts with html, razor engine will assume everything on that line is html.  So if we are looping through a collection and adding a variable to a listitem we would need to place the @ symbol before the variable name.
            
            ViweBag and ViewData are used to pass data from a controller to a view.
            
            ViewBag allows properties to be added to it dynamically, on the fly, i.e. ViewBag.SomePropertyName = "Some Data";
            
            ViewData is similar to ViewState in that you use a key to store values, i.e. ViewData["some key"] = "Some Data";
            
            Problem with ViewBag and ViewData is that there is no compile time error checking.  So mis-spelt key names or property names would not result in compile time error but would get a runtime error.
            
            internally ViewBag properties are stored as name/value paies on the ViewData dictionary
            
            
            Models
            
            
       </section >
        );
    }
}

export default MVC;