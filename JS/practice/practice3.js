

class Person {
    name;
    constructor(name) {
        this.name = name
    }
    greet(){
       return console.log("Hello ! my name is ",this.name)
    }
}

/*  
Polymorphism
when a method has the same name but a different implementation in different classes - is called polymorphism. When a method in a subclass replaces the superclass's implementation, we say that the subclass overrides the version in the superclass.

Encapsulation
Objects provide an interface to other code that wants to use them but maintain their own internal state. The object's internal state is kept private, meaning that it can only be accessed by the object's own methods, not from other objects. Keeping an object's internal state private, and generally making a clear division between its public interface and its private internal state, is called encapsulation.
*/

class Student extends Person{
    
    #year;
    constructor(name,year){
        super(name)
        this.#year= year
    }
    greet(){
        return `Hello! my name is ${this.name} and i am student of ${this.#year} year`
    }
    canStudyArchery(){
        return this.#year > 1;
    }
}

const obj = new Student("Charles",1)

// console.log(obj.greet())
// console.log(obj.canStudyArchery())


class Example{
    publicMethod(){
       return this.#privateMethod();
    }
    #privateMethod(){
        return "Hello! i am privateMethod."
    }
}

const myObj = new Example()

console.log(myObj.publicMethod())
// console.log(myObj.#privateMethod())