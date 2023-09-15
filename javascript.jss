const form = document.querySelector('form');
// const calculate = document.querySelector('.calcBtn');
// Below usecase wiil give you empty values.
// const height = parseInt(document.querySelector('#height').value)
// const weight = parseInt(document.querySelector('#weight').value)

form.addEventListener('submit', function (e) {
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please enter a valid height! -${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please enter a valid weight! -${weight}`;
  } else {
    const bmi = (weight / ((height * height)/10000)).toFixed(2);
    // Show the Result
    if (bmi < 18.60) {
      results.innerHTML = `<span>Your BMI is ${bmi}</span> <br/> <span> You are Underweight..! </span>`;
    } else if (bmi >= 18.61 && bmi<= 24.90) {
      results.innerHTML = `<span>Your BMI is ${bmi}</span> <br/> <span> Your BMI is in Normal Range..! </span>`;
    } else {
      results.innerHTML = `<span>Your BMI is ${bmi}</span> <br/> <span> You are Overweight..! </span>`;
      
    }
  }
});