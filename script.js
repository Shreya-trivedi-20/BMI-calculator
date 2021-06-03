const height = document.getElementById("h");
const weight = document.getElementById("w");
const output = document.getElementById("firstoutput");
const output2 = document.getElementById("secondoutput");
const btn = document.getElementById("btn");

function bmi() {
  let m = height.value / 100;
  let kg = weight.value;
  let bmi = parseInt(kg / m / m);
  let bmiOutput = function () {
    if (bmi > 0) {
      firstoutput.textContent = bmi;
    } else {
      firstoutput.textContent = "Inputs Are wrong";
    }
  };
  bmiOutput();

  if (bmi < 18.5) {
    secondoutput.textContent = "Eat properly you are underweight :(";
  } else if (bmi < 25) {
    secondoutput.textContent = "You have a normal weight, you are healthy :)";
  } else if (bmi < 30) {
    secondoutput.textContent = "Have some control you are overweight:(";
  } else if (bmi >= 30) {
    secondoutput.textContent = "OH NO YOU ARE OBESE!!";
  } else {
    secondoutput.textContent = "Please check your Height and Weight";
  }
}

btn.addEventListener("click", bmi);
