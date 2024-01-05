document.addEventListener("DOMContentLoaded", function () {
  const convertButton = document.querySelector(".convert-button");
  const currencySelect = document.querySelector(".currency-select");

  function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value;

    const currencyValueToConvert = document.querySelector(
      ".currency-value-to-convert"
    ); // valor em real
    const currencyValueConverted = document.querySelector(".currency-value"); // Outras moedas

    const dolarToday = 4.83;
    const euroToday = 5.33;
    const bitToday = 205158;
    const libraToday = 6.18

    if (currencySelect.value == "dolar") {
      currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(inputCurrencyValue / dolarToday.toFixed(2));
    }

    if (currencySelect.value == "euro") {
      currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
      }).format(inputCurrencyValue / euroToday.toFixed(2));
    }

    if (currencySelect.value == "bitcoin") {
      currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "BTC",
      }).format(inputCurrencyValue / bitToday.toFixed(2));
    }

    if (currencySelect.value == "libra") {
      currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP",
      }).format(inputCurrencyValue / libraToday.toFixed(2));
    }



    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrencyValue);
  }

  function changeCurrecy() {
    const currencyName = document.getElementById("currency-name");
    const currencyImage = document.querySelector(".currency-img");

    if (currencySelect.value == "dolar") {
      currencyName.innerHTML = "Dólar americano";
      currencyImage.src = "./assets/Dollar.png";
    }

    if (currencySelect.value == "euro") {
      currencyName.innerHTML = "Euro";
      currencyImage.src = "./assets/Euro.png";
    }

    if (currencySelect.value == "bitcoin") {
      currencyName.innerHTML = "Bitcoin";
      currencyImage.src = "./assets/BitCoin.png";
    }

    if (currencySelect.value == "libra") {
      currencyName.innerHTML = "Libra";
      currencyImage.src = "./assets/Libra.png";
    }

    convertValues();
  }

  currencySelect.addEventListener("change", changeCurrecy);

  convertButton.addEventListener("click", convertValues);
});
