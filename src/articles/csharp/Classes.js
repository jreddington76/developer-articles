import React from 'react';

class Classes extends React.Component {
    render() {
        return (
            <section id="classes">
            
Classes

Class is blueprint
Object is instantiation

Given the class Car:

public class Car
{
	public string Make { get; set; }
	public string Model { get; set; }
}


we create an instance of the class [an Object]:

var car = new Car();


set the properties

car.Make = "BMW";
car.Model = "116D Sport";


get the properties:

Console.WriteLine(car.Make + " " + car.Model);


We can set the properties when creating the object:

var car = new Car
{
	Make = "BMW",
	Model = "116D Sport"
};


Constructor

a special method that is called when the class is instantiated.  It allows you to execute code immediately when the object is created.
all classes have a constructor (even if the class does not have a construcotr defined. the .net framework will add a default constructor when class is compiled)
construcotrs can be overloaded like normal methods


Lifetime of objects

find an empty address in memory (heap) and stored any values associated with the object in this memory space
then is stores a pointer [pointing at the memory address on the heap] on the stack
when object variable [pointer] goes out of scope the reference counter to the object on the heap decreases by 1
.NET framework runtime constantly monitors the managed memory for objects with no references [objects with reference count of 0]
when this happens the object is removed from memory.  This is known as garbage collection

the .net garbage collection takes place at an indeterminate time in the future so any references that the object may hold (file handles, sql connections etc) may still be hanging around - deterministic finalization


Copying an object simply creates a new pointer that points to the same object [the same memory address]
       </section >
        );
    }
}

export default Classes;