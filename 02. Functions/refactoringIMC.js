function calculateIMC(weight, height) {
    return weight / Math.pow(height, 2)
}

function classifyBMI(imc) {
    if (imc < 18.5) return "Underweight";
    if (imc < 25) return "Normal weight";
    if (imc < 30) return "Overweight";
    if (imc < 40) return "Obese";
    else return "Severe obesity";
}

function main() {
    const imc = calculateIMC(111, 1.80);
    const classify = classifyBMI(imc)

    console.log(`The BMI value is: ` + imc.toFixed(2));
    console.log(`Its status is: ` + classify);
}

main();