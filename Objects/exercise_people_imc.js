class People {
    name;
    weight;
    height;

    constructor(name, weight, height) {
        this.name = name;
        this.weight = weight;
        this.height = height;
    }

    sayIMC() {
        const IMC = this.weight / (this.height * this.height)
        return `my name is ${this.name} my IMC is ${IMC.toFixed(2)}`
    }
}

const jose = new People("Jose", 111, 1.80)

console.log(jose.sayIMC());