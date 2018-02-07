import React from 'react';

class StackHeap extends React.Component {
    render() {
        return (
            <section id="stackheap">
                <h2>Stack &amp; Heap</h2>
                <p>
                    There are two places the .NET framework stores items in memory as your code executes - the Stack and the Heap. Both the Stack and Heap help us run our code.
                    They reside in the operating memory on our machine and contain the pieces of information we need to make it all happen.
                </p>
                <h3 id="stack">Stack</h3>
                <p>
                    The Stack is more or less responsible for keeping track of what's executing in our code (or what's been "called").
                </p>
                <p>
                    Think of the Stack as a series of boxes stacked one on top of the next.
                    We keep track of what's going on in our application by stacking another box on top every time we call a method (called a Frame).
                    We can only use what's in the top box on the Stack.
                    When we're done with the top box (the method is done executing) we throw it away and proceed to use the stuff in the previous box on the top of the Stack.
                </p>
                <p>
                    The Stack is self-maintaining, meaning that it basically takes care of its own memory management.  When the top box is no longer used, it's thrown out.
                </p>
                <p>
                    When a method is called, .NET creates a container (a stack frame) that contains all of the data necessary to complete the call, including parameters,
                    locally declared variables and the address of the line of code to execute after the method finishes.  It also contains any pointers to objects created within the method.
                    When the method has finished executing the stack frame is disposed of, so all value type variables go out of scope and the reference count of obejcts get decreased.
                </p>
                <h3 id="heap">Heap</h3>
                <p>
                    The Heap is more or less responsible for keeping track of our objects.
                </p>
                <p>
                    The Heap is similar except that its purpose is to hold information (not keep track of execution most of the time) so anything in our Heap can be accessed at any time.
                    With the Heap, there are no constraints as to what can be accessed like in the Stack.
                    The Heap is like the heap of clean laundry on our bed that we have not taken the time to put away yet; we can grab what we need quickly.
                    The Stack is like the Stack of shoe boxes in the closet where we have to take off the top one to get to the one underneath it.
                </p>
                <p>
                    The Heap must worry about Garbage collection (GC), which deals with how to keep the Heap clean.
                </p>
                <h3>What goes on the Stack and Heap?</h3>
                <p>
                        We have four main types of things we'll be putting in the Stack and Heap as our code is executing: Value Types, Reference Types, Pointers, and Instructions.
                </p>
            </section >
        );
    }
}

export default StackHeap;