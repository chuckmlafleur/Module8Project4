window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   document.getElementById("convertButton").addEventListener("click", convertTemperature);
   document.getElementById("cInput").addEventListener("input", () => clearInput("fInput"));
   document.getElementById("fInput").addEventListener("input", () => clearInput("cInput"));
}

function clearInput(otherInputId) {
   document.getElementById(otherInputId).value = "";
   document.getElementById("errorMessage").textContent = "";
   document.getElementById("weatherImage").src = ""; // Reset or set to a default image if necessary.
}

function convertCtoF(celsius) {
   return celsius * 9 / 5 + 32;
}

function convertFtoC(fahrenheit) {
   return (fahrenheit - 32) * 5 / 9;
}

function convertTemperature() {
   let cInput = document.getElementById("cInput").value.trim();
   let fInput = document.getElementById("fInput").value.trim();
   let errorMessage = document.getElementById("errorMessage");

   if (cInput === "" && fInput === "") {
      errorMessage.textContent = "Please enter a temperature to convert.";
      return;
   }

   if (cInput !== "" && fInput !== "") {
      errorMessage.textContent = "Please enter a temperature in only one field.";
      return;
   }

   let temp, convertedTemp;
   if (cInput !== "") {
      temp = parseFloat(cInput);
      if (isNaN(temp)) {
         errorMessage.textContent = `${cInput} is not a number`;
         return;
      }
      convertedTemp = convertCtoF(temp);
      document.getElementById("fInput").value = formatNumber(convertedTemp);
      updateWeatherImage(convertedTemp);
   } else {
      temp = parseFloat(fInput);
      if (isNaN(temp)) {
         errorMessage.textContent = `${fInput} is not a number`;
         return;
      }
      convertedTemp = convertFtoC(temp);
      document.getElementById("cInput").value = formatNumber(convertedTemp);
      updateWeatherImage(parseFloat(fInput)); // Use the original Fahrenheit input directly
   }
}

function formatNumber(number) {
   return number % 1 === 0 ? number.toFixed(0) : number.toFixed(2);
}

function updateWeatherImage(fahrenheitTemperature) {
   let weatherImage = document.getElementById("weatherImage");
   if (fahrenheitTemperature <= 32) {
      weatherImage.src = "images/cold.png";
   } else if (fahrenheitTemperature > 32 && fahrenheitTemperature <= 50) {
      weatherImage.src = "images/cool.png";
   } else {
      weatherImage.src = "images/warm.png";
   }
}
