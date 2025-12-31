const btn = document.getElementById("btn");
const bmiResult = document.getElementById("bmi-result");
const conditionText = document.getElementById("weight-condition");
const heightEl = document.getElementById("height");
const weightEl = document.getElementById("weight");
const meterFill = document.getElementById("meter-fill");
const fadeText = document.querySelector(".fade");

function calculateBMI() {
    const height = heightEl.value / 100;
    const weight = weightEl.value;

    if (!height || !weight || height <= 0 || weight <= 0) {
        alert("Please enter valid height and weight");
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2);
    bmiResult.value = bmi;

    fadeText.classList.remove("show");

    let meterPercent = Math.min((bmi / 40) * 100, 100);

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

    meterFill.style.width = meterPercent + "%";

    setTimeout(() => {
        fadeText.classList.add("show");
    }, 100);
}

btn.addEventListener("click", calculateBMI);

document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") calculateBMI();
});
