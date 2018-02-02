import React from 'react';

class AbstractClasses extends React.Component {
    render() {
        return (
            <section id="abstract">
            Abstract Classes

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
       </section >
        );
    }
}

export default AbstractClasses;