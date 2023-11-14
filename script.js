function convertTemperature() {
    var celsiusInput = document.getElementById('celsius');
    var thermometer = document.getElementById('thermometer');
    var temperatureValue = document.getElementById('temperature-value');

    var celsius = parseFloat(celsiusInput.value);

    if (isNaN(celsius)) {
        alert('Please enter a valid number.');
        return;
    }

    var fahrenheit = (celsius * 9/5) + 32;

    thermometer.style.height = (celsius * 2) + 'px';
    temperatureValue.textContent = fahrenheit.toFixed(2) + '°F';
}
