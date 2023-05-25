const calculateTemp = () => {
    const inputTemp = document.getElementById('temp').value;

    const tempSelected = document.getElementById('unit');
    const valueTemp = unit.options[tempSelected.selectedIndex].value;

    // Celsius to Fahrenheit
    const celToFah = (Celsius) => {
        let fahrenheit = ((Celsius * 9 / 5) + 32).toFixed(1);
        return fahrenheit;
    }

    // Fahrenheit to Celsius
    const fahToCel = (Fahrenheit) => {
        let celsius = ((Fahrenheit - 32) * 5 / 9).toFixed(1);
        return celsius;
    }

    if (valueTemp == 'Celsius') {
        document.getElementById("output").innerHTML = celToFah(inputTemp) + "&#176; Fahrenheit";
    }
    else {
        document.getElementById("output").innerHTML = fahToCel(inputTemp) + "&#176; Celsius";
    }
}