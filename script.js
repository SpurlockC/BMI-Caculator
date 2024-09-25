function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100; // Convert cm to meters

    if (!weight || !height) {
        alert("Please enter valid values for weight and height.");
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2); // BMI formula

    let resultMessage;

    if (bmi < 18.5) {
        resultMessage = `Your BMI is ${bmi}, which means you are underweight.`;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        resultMessage = `Your BMI is ${bmi}, which is a normal weight.`;
    } else if (bmi >= 25 && bmi <= 29.9) {
        resultMessage = `Your BMI is ${bmi}, which indicates you are overweight.`;
    } else {
        resultMessage = `Your BMI is ${bmi}, which means you are obese.`;
    }

    document.getElementById("result").innerHTML = resultMessage;
}
