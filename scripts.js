const button = document.getElementById("convert-button"); //mapeando nutton
const select = document.getElementById("currency-select"); //mapeando select

const convertValues = async () => {
  const inputReais = document.getElementById("input-real").value; //input-real capta todo valor do input .value limata a mostrar apenas o valor
  const realValueText = document.getElementById("real-value-text"); //mapear capitura valor inicial
  const currencyValueText = document.getElementById("currency-value-text"); //captura valor inicial

  const data = await fetch(
    " https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL"
  ).then((response) => response.json());

  const dolar = data.USDBRL.high;
  const euro = data.EURBRL.high;

  //realValueText.innerHTML = inputReais; //altera o valor inicial do html sem fornatar valor

  // currencyValueText.innerHTML = inputReais / dolar; altndo seu valor para era valor inicial sem formatar valor

  //altera valor inicial html formatando seu valor para moeda especifica

  realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputReais);

  if (select.value === "US$ Dólar americano") {
    currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputReais / dolar);
  }
  if (select.value === "€ Euro") {
    currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputReais / euro);
  }
};

changeCurrency = () => {
  const currencyName = document.getElementById("currency-name"); //mapear testo inicial
  const currencyImg = document.getElementById("currency-img"); //mapear imagem inicial

  if (select.value === "US$ Dólar americano") {
    currencyName.innerHTML = "Dólar americano"; //altera texto inicial
    currencyImg.src = "assets/usa.png";
  }

  if (select.value === "€ Euro") {
    currencyName.innerHTML = "Euro"; //altera texto inicial
    currencyImg.src = "assets/euro18.png";
  }

  convertValues();
};

//detecta quando botao é clicado "eventlistiner (evento, funçao)"
button.addEventListener("click", convertValues);

//detecta evento de troca de elementos no select alteraçao de modeda dolar euro eventlistiner (evento, funçao)"
select.addEventListener("change", changeCurrency);
