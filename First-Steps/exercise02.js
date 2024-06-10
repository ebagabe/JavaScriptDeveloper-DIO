// IMC = weight / (height * height)

const weight = 111;
const height = 1.80;
const IMC = weight / Math.pow(height, 2);

if (IMC < 18.5) {
    console.log("Abaixo do peso");
} else if (IMC <= 25) {
    console.log("Peso normal");
} else if (IMC <= 30) {
    console.log("Acima do peso");
} else if (IMC <= 40) {
    console.log("Obeso");
} else {
    console.log("Obesidade Grave");
}