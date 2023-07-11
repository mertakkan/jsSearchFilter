document.addEventListener("DOMContentLoaded", function () {
  const search = document.getElementById("search");
  const list = document.getElementById("crypto-list");
  let cryptoData = [];

  function fetchCryptoData() {
    fetch("https://api.coingecko.com/api/v3/coins/list")
      .then((response) => response.json())
      .then((data) => {
        cryptoData = data;
        displayCryptos(cryptoData);
      });
  }

  function filterCryptoData(event) {
    const searchText = event.target.value.toLowerCase();
    const filteredData = cryptoData.filter((crypto) =>
      crypto.name.toLowerCase().includes(searchText)
    );
    displayCryptos(filteredData);
  }

  function displayCryptos(data) {
    list.innerHTML = "";
    data.forEach((crypto) => {
      const cryptoElement = document.createElement("div");
      cryptoElement.classList.add("crypto-card");
      cryptoElement.innerText = crypto.name;
      list.appendChild(cryptoElement);
    });
  }

  search.addEventListener("input", filterCryptoData);

  fetchCryptoData();
});
