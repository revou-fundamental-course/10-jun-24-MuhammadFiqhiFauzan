document
  .getElementById("converter-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    convertTemperature();
  });

document
  .getElementById("converter-form")
  .addEventListener("reset", function () {
    document.getElementById("result").textContent = "";
    document.getElementById("calculation-method").textContent = "";
  });

document.getElementById("reverse").addEventListener("click", function () {
  const unitSelect = document.getElementById("unit");
  const currentUnit = unitSelect.value;
  const temperatureInput = document.getElementById("temperature");
  let temperature = parseFloat(temperatureInput.value);
  if (isNaN(temperature)) {
    alert("Masukkan suhu yang valid sebelum membalik.");
    return;
  }

  if (currentUnit === "celsius") {
    unitSelect.value = "fahrenheit";
    temperature = (temperature * 9) / 5 + 32;
  } else {
    unitSelect.value = "celsius";
    temperature = ((temperature - 32) * 5) / 9;
  }

  temperatureInput.value = temperature.toFixed(2);
  convertTemperature();
});

function convertTemperature() {
  const temperature = parseFloat(document.getElementById("temperature").value);
  const unit = document.getElementById("unit").value;
  let result;
  let calculation;

  if (unit === "celsius") {
    result = (temperature * 9) / 5 + 32;
    calculation = `${temperature}°C x 9/5 + 32 = ${result.toFixed(2)}°F`;
    document.getElementById(
      "result"
    ).textContent = `Hasil dari ${temperature}°C setelah di konversi adalah ${result.toFixed(
      2
    )}°F`;
  } else if (unit === "fahrenheit") {
    result = ((temperature - 32) * 5) / 9;
    calculation = `(${temperature} - 32)°F x 5/9 = ${result.toFixed(2)}°C`;
    document.getElementById(
      "result"
    ).textContent = `Hasil dari ${temperature}°F setelah di konversi adalah ${result.toFixed(
      2
    )}°C`;
  }

  document.getElementById(
    "calculation-method"
  ).textContent = `Metode Perhitungan: ${calculation}`;
}
