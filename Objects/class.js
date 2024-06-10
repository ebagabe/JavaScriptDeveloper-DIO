class People {
    name;
    age;
    yearOfBirth;


    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.yearOfBirth = 2024 - age;
    }

    description() {
        console.log(`My name is ${this.name} and i'm ${this.age} years old, I was born in ${this.yearOfBirth}`);
    }
}

const gabe = new People('Gabe', 22);
const joy = new People('Joy', 18);

gabe.description();
joy.description();