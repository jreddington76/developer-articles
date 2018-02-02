import React from 'react';

class Variables extends React.Component {
    render() {
        return (
            <section id="variables">            
variables - space in memory to add and retrieve data

int - whole number (between +- 2 billion 147 million)
string

declare varaibles

int x;

initialize variables

x = 7;

declaration and initialisation in one line

int x = 7;

can use var to interpret the type of the variable based on the value being assigned

var x = 7;

NB var only works when you are assigning and initialising at the same time.  The following will not compile:

var x;


Scope

variable is only alive for the code block it was defined in (or child code blocks)
i.e. the variable i defined in for loop cannot be accessed outside of for loop code block
       </section >
        );
    }
}

export default Variables;