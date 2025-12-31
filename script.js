const btn = document.getElementById("btn");
const bmiResult = document.getElementById("bmi-result");
const conditionText = document.getElementById("weight-condition");
const heightCmEl = document.getElementById("height-cm");
const heightFtEl = document.getElementById("height-ft");
const heightInEl = document.getElementById("height-in");
const weightEl = document.getElementById("weight");
const meterFill = document.getElementById("meter-fill");
const fadeText = document.querySelector(".fade");

function calculateBMI() {
    let heightCm = parseFloat(heightCmEl.value);
    const feet = parseFloat(heightFtEl.value);
    const inches = parseFloat(heightInEl.value);
    const weight = parseFloat(weightEl.value);

    // Convert feet + inches to cm if cm not provided
    if (!heightCm && feet >= 0 && inches >= 0) {
        heightCm = (feet * 30.48) + (inches * 2.54);
    }

    if (!heightCm || heightCm <= 0 || !weight || weight <= 0) {
        alert("Please enter valid height and weight");
        return;
    }

    const heightM = heightCm / 100;
    const bmi = (weight / (heightM * heightM)).toFixed(2);
    bmiResult.value = bmi;

    fadeText.classList.remove("show");

    const meterPercent = Math.min((bmi / 40) * 100, 100);
    meterFill.style.width = meterPercent + "%";

    if (bmi < 18.5) {
        conditionText.textContent = "Underweight";
        conditionText.style.color = "#f4a261";
        meterFill.style.background = "#f4a261";
    } else if (bmi <= 24.9) {
        conditionText.textContent = "Normal";
        conditionText.style.color = "#2a9d8f";
        meterFill.style.background = "#2a9d8f";
    } else if (bmi <= 29.9) {
        conditionText.textContent = "Overweight";
        conditionText.style.color = "#e76f51";
        meterFill.style.background = "#e76f51";
    } else {
        conditionText.textContent = "Obese";
        conditionText.style.color = "#e63946";
        meterFill.style.background = "#e63946";
    }

    setTimeout(() => {
        fadeText.classList.add("show");
    }, 100);
}

btn.addEventListener("click", calculateBMI);

document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") calculateBMI();
});
