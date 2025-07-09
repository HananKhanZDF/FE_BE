// Basic printing
let ola: string = "Hanan";
console.log(`Hello, ${ola}!`);
let number: number = 5;
console.log(`The number is: ${number}`);
let variable:any = 42;
console.log(`The variable is: ${variable}`);
variable = "Now I'm a string!"+5;
console.log(`The variable is now: ${variable}`);

// Classes
class Person{
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet():string {
        return `Ola, my name is ${this.name} and I am ${this.age} years old.`;
    }

}

const person = new Person("Hanan", 31);
console.log(person.greet());

