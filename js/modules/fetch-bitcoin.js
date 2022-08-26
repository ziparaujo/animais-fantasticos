export default function fetchBitcoin(url, target) {
  fetch(url)
    .then((response) => response.json())
    .then((valor) => {
      const btcPreco = document.querySelector(target);
      btcPreco.innerText = (1000 / valor.BRL.sell).toFixed(4);
    }).catch((erro) => {
      console.log(Error(erro));
    });
}
