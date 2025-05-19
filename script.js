const accessCelsius = document.getElementById("celsius");
        const accessFahrenheit = document.getElementById("fahrenheit");

        function convert() {
            if (accessCelsius.value && !accessFahrenheit.value) {
                convertToFahrenheit()
            }
            else if (!accessCelsius.value && accessFahrenheit.value) {
                convertToCelsius()
            }
            else if (!accessCelsius.value && !accessFahrenheit.value) {
                alert("Please enter a valid number.");
            }
            else {
                alert("Please enter a number in only one field.");
            }
        }
        function convertToFahrenheit() {
            // Formula to Convert Celsius/Fahrenheit
            const outputFahrenheit = (parseFloat(accessCelsius.value) * 9 / 5) + 32;
            accessFahrenheit.value = `${outputFahrenheit.toFixed(2)}`;// ℉
        }

        function convertToCelsius() {
            // Formula to Convert Fahrenheit to Celsius
            const outputCelsius = ((parseFloat(accessFahrenheit.value) - 32) * 5 / 9);
            accessCelsius.value = `${outputCelsius.toFixed(2)}`;// ℃

        }

        function reset() {
            accessCelsius.value = "";
            accessFahrenheit.value = "";
        }