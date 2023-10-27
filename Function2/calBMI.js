function calculateBMI(heightCM, weightKG) {

    return (weightKG / (heightCM * 0.01)**2).toFixed(2);
}

console.log(calculateBMI(180, 80));


