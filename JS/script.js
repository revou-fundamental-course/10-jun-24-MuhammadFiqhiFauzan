document
  .getElementById("converter-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const temperature = parseFloat(
      document.getElementById("temperature").value
    );
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
  });

document
  .getElementById("converter-form")
  .addEventListener("reset", function () {
    document.getElementById("result").textContent = "";
    document.getElementById("calculation-method").textContent = "";
  });
