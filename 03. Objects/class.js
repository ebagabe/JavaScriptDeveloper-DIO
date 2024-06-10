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

function comparePeoples(p1, p2) {
    if (p1.age > p2.age) {
        return `The ${p1.name} is older than ${p2.name}`
    }

    if (p2.age > p1.age) {
        return `The ${p2.name} is older than ${p1.name}`
    }

    return `Both have the same age`
}

const people1 = new People("Gabe", 22);
const people2 = new People("Joy", 18);

console.log(comparePeoples(people1, people2));