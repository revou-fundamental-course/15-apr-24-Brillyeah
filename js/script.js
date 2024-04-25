const tempInput = document.getElementById('temp-input');
const resultInput = document.getElementById('result');
const explanationDiv = document.getElementById('explanation');
const convertBtn = document.getElementById('convert-btn');
const resetBtn = document.getElementById('reset-btn');
const reverseBtn = document.getElementById('reverse-btn');

let currentUnit = 'celsius'; // Keep track of the current unit

convertBtn.addEventListener('click', () => {
  const temperature = parseFloat(tempInput.value);

  if (!isNaN(temperature)) {
    const convertedTemp = convertTemperature(temperature, currentUnit);
    displayResult(convertedTemp, currentUnit);
    displayExplanation(temperature, currentUnit, convertedTemp);
  } else {
    resultInput.value = '';
    explanationDiv.textContent = 'Please enter a valid temperature.';
  }
});

resetBtn.addEventListener('click', () => {
  tempInput.value = '';
  resultInput.value = '';
  explanationDiv.textContent = '';
  currentUnit = 'celsius'; // Reset the current unit
});

reverseBtn.addEventListener('click', () => {
  const temperature = parseFloat(resultInput.value);

  if (!isNaN(temperature)) {
    const unit = currentUnit === 'celsius' ? 'fahrenheit' : 'celsius';
    const convertedTemp = convertTemperature(temperature, unit);
    displayResult(convertedTemp, unit);
    displayExplanation(temperature, unit, convertedTemp);
    currentUnit = unit; // Update the current unit
  } else {
    resultInput.value = '';
    explanationDiv.textContent = 'Please enter a valid temperature.';
  }
});

function convertTemperature(temp, unit) {
  if (unit === 'celsius') {
    return (temp * 9/5) + 32;
  } else {
    return (temp - 32) * 5/9;
  }
}

function displayResult(temp, unit) {
  const targetUnit = unit === 'celsius' ? 'Fahrenheit' : 'Celsius';
  resultInput.value = `${temp.toFixed(2)} °${targetUnit}`;
}

function displayExplanation(temp, unit, convertedTemp) {
  const targetUnit = unit === 'celsius' ? 'Fahrenheit' : 'Celsius';
  const formula = unit === 'celsius' ? '(°C × 9/5) + 32' : '(°F - 32) × 5/9';
  explanationDiv.textContent = `Cara Kalkulasi: ${temp} °${unit.toUpperCase()} * (${formula}) = ${convertedTemp.toFixed(2)}°${targetUnit}`;
}