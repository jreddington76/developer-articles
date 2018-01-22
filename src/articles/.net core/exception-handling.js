import React from 'react';

class ExceptionHandling extends React.Component {
    render() {
        return (
            <section>
            <h2>Exception Handling</h2>
            <p>
                To catch unhandled exceptions we can use ExceptionFilters. Filters run within the MVC action invocation pipeline, after MVC
                has routed the request to the correct action. ExceptionFilters execute before anything has been written to
                the response body.
            </p>
            <p>
                See the official <a href="https://docs.microsoft.com/en-us/aspnet/core/mvc/controllers/filters" target="_blank">docs</a> for a full explanation.
            </p>
            <p>To add an ExceptionFilter we need to inherit from ExceptionFilterAttribute. We override the OnException method
                to set the response:</p>
            <figure>
                <figcaption>CustomExceptionFilterAttribute.cs</figcaption>
                <pre>
                    <code className="language-csharp" contenteditable spellcheck="false">
{`
public class CustomExceptionFilterAttribute : ExceptionFilterAttribute
{
    private readonly ILogger _logger;

    public CustomExceptionFilterAttribute(ILogger logger)
    {
        _logger = logger;
    }

    public override void OnException(ExceptionContext context)
    {
        var exception = context.Exception;
        var message = exception.InnerException?.Message ?? exception.Message;
        var errorMessage = $"Application error: {message}.  Error was generated from {exception.TargetSite}";
        context.Result = new ContentResult
        {
            Content = $"{exception.Message}",
            ContentType = "text/plain",
            StatusCode = (int?)HttpStatusCode.BadRequest
        };
        _logger.Error("{User} {Message} {StackTrace}", "me", exception.Message, exception.StackTrace);
    }
}
`}
                    </code>
                </pre>
            </figure>

            <p>To register the filter globally, in Startup.cs we can add the custom filter to the Filters collection, passing
                in any dependencies:</p>
            <figure>
                <figcaption>Startup.cs</figcaption>
                <pre>
<code className="language-csharp" contenteditable spellcheck="false">
{`
// Add framework services.
services.AddMvc(options =>
{
    &hellip;
    options.Filters.Add(new CustomExceptionFilterAttribute(Log.Logger));
});
`}
</code>
    </pre>
            </figure>

            <p>This can be tested by throwing an exception in an action:</p>

            <figure>
                <figcaption>MyController.cs</figcaption>
                <pre>
                <code className="language-csharp" contenteditable spellcheck="false">
{`
[HttpGet]
public IActionResult Get()
{
    throw new Exception("test");
}
`}
            </code>
        </pre>
            </figure>
        </section>
        );
    }
}

export default ExceptionHandling;