class Car {
    brand;
    color;
    averagePerKm;

    constructor(brand, color, averagePerKm) {
        this.brand = brand;
        this.color = color;
        this.averagePerKm = averagePerKm
    }

    valueInReaisToMileage(km, price) {
        return (km * this.averagePerKm * price).toFixed(2)
    }

}

const newCar = new Car("Golf", "White", 1 / 12);
console.log(newCar.valueInReaisToMileage(100, 5));