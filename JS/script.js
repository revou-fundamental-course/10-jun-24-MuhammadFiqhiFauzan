document
  .getElementById("converter-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const temperature = parseFloat(
      document.getElementById("temperature").value
    );
    const unit = document.getElementById("unit").value;
    let result;
    if (unit === "celsius") {
      result = (temperature * 9) / 5 + 32;
      document.getElementById(
        "result"
      ).textContent = `Hasil dari ${temperature}°C setelah di konversi adalah ${result.toFixed(
        2
      )}°F`;
    } else if (unit === "fahrenheit") {
      result = ((temperature - 32) * 5) / 9;
      document.getElementById(
        "result"
      ).textContent = `Hasil dari ${temperature}°F setelah di konversi adalah ${result.toFixed(
        2
      )}°C`;
    }
  });

document
  .getElementById("converter-form")
  .addEventListener("reset", function () {
    document.getElementById("result").textContent = "";
  });
