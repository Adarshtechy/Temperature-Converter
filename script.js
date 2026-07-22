const temperatureInput = document.getElementById('temperature');
const fromUnit = document.getElementById('fromUnit');
const toUnit = document.getElementById('toUnit');
const convertBtn = document.getElementById('convertBtn');
const result = document.getElementById('result');

function convertTemperature(value, from, to) {
  if (from === to) return value;

  // Convert to Celsius first
  let celsius;

  switch (from) {
    case 'C':
      celsius = value;
      break;
    case 'F':
      celsius = (value - 32) * 5 / 9;
      break;
    case 'K':
      celsius = value - 273.15;
      break;
  }

  // Convert from Celsius to target
  switch (to) {
    case 'C':
      return celsius;
    case 'F':
      return (celsius * 9 / 5) + 32;
    case 'K':
      return celsius + 273.15;
  }
}

function getUnitSymbol(unit) {
  return unit === 'C' ? '°C' : unit === 'F' ? '°F' : 'K';
}

function handleConvert() {
  const value = parseFloat(temperatureInput.value);

  if (isNaN(value)) {
    result.textContent = 'Please enter a valid temperature';
    return;
  }

  const converted = convertTemperature(value, fromUnit.value, toUnit.value);

  result.innerHTML = `
    ${value} ${getUnitSymbol(fromUnit.value)}
    =
    <strong>${converted.toFixed(2)} ${getUnitSymbol(toUnit.value)}</strong>
  `;
}

convertBtn.addEventListener('click', handleConvert);

// Allow Enter key
temperatureInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    handleConvert();
  }
});
