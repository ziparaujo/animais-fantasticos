export default function initFetchBitcoin() {
  fetch('https://blockchain.info/ticker')
    .then((response) => response.json())
    .then((valor) => {
      const btcPreco = document.querySelector('.btc-preco');
      btcPreco.innerText = (1000 / valor.BRL.sell).toFixed(4);
    }).catch((erro) => {
      console.log(Error(erro));
    });
}
