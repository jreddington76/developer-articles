import React from 'react';

class Classes extends React.Component {
    render() {
        return (
            <section id="classes">
                <h2>Classes</h2>
                <p>
                    Class is blueprint
Object is instantiation

Given the class Car:
</p>
                <figure>
                    <pre>
                        <code className="language-csharp">
                            {`public class Car
{
	public string Make { get; set; }
	public string Model { get; set; }
}
`}
                        </code>
                    </pre>
                </figure>
                <p>
                    we create an instance of the class [an Object]:
</p>
                <figure>
                    <pre>
                        <code className="language-csharp">
                            {`var car = new Car();
`}
                        </code>
                    </pre>
                </figure>
                <p>
                    set the properties
</p>
                <figure>
                    <pre>
                        <code className="language-csharp">
                            {`car.Make = "BMW";
car.Model = "116D Sport";
`}
                        </code>
                    </pre>
                </figure>
                <p>
                    get the properties:
</p>
                <figure>
                    <pre>
                        <code className="language-csharp">
                            {`Console.WriteLine(car.Make + " " + car.Model);
`}
                        </code>
                    </pre>
                </figure>
                <p>
                    We can set the properties when creating the object:
</p>
                <figure>
                    <pre>
                        <code className="language-csharp">
                            {`var car = new Car
                            {
                                Make = "BMW",
                            Model = "116D Sport"
            };
`}
                        </code>
                    </pre>
                </figure>
                <h3>Constructor</h3>
                <p>
                    a special method that is called when the class is instantiated.  It allows you to execute code immediately when the object is created.
all classes have a constructor (even if the class does not have a construcotr defined. the .net framework will add a default constructor when class is compiled)
construcotrs can be overloaded like normal methods
</p>
                <h3>Lifetime of objects</h3>
                <p>
                    find an empty address in memory (heap) and stored any values associated with the object in this memory space
then is stores a pointer [pointing at the memory address on the heap] on the stack
when object variable [pointer] goes out of scope the reference counter to the object on the heap decreases by 1
.NET framework runtime constantly monitors the managed memory for objects with no references [objects with reference count of 0]
when this happens the object is removed from memory.  This is known as garbage collection

the .net garbage collection takes place at an indeterminate time in the future so any references that the object may hold (file handles, sql connections etc) may still be hanging around - deterministic finalization


Copying an object simply creates a new pointer that points to the same object [the same memory address]
</p>
                <h3>Abstract Classes</h3>
                <p>
                    We cannot create an object of Abstract Class but we can create a reference of it.

An inheritance between abstract to abstract classes is possible. We don't need to implement abstract methods of the base abstract class into a derived abstract class. We can implement it later in concrete classes.

An abstract class can never be sealed or static.

An abstract class can have abstract as well as non abstract methods.

The abstract keyword can be used with class, methods, properties, indexers and events.

Abstract members can only be declared inside an abstract class.

An abstract member cannot be static or private.

An abstract method cannot be marked virtual.

A concrete class cannot inherit more than one abstract class, in other words multiple Inheritance is not possible.

Without an abstract class, we cannot implement the Template Method Pattern.


http://www.c-sharpcorner.com/UploadFile/d0e913/abstract-class-interface-two-villains-of-every-interview/
</p>
            </section >
        );
    }
}

export default Classes;