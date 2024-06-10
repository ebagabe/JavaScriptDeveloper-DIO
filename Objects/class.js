class People {
    name;
    age;

    description() {
        console.log(`My name is ${this.name} and i'm ${this.age} years old`);
    }
}

const gabe = new People();

gabe.name = "Gabriel";
gabe.age = 22;

gabe.description()