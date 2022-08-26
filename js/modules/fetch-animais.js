import AnimaNumeros from './anima-numeros.js';

export default function fetchAnimais(url, target) {
  const numerosGrid = document.querySelector(target);

  // cria a div com o total de animais
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
    animaNumeros.init();
  }

  // puxa os animais de arquivo json
  async function criarAnimais() {
    // fetch, espera a resposta e transforma em json
    const animaisResponse = await fetch(url);
    const animaisJSON = await animaisResponse.json();

    // após transformação em json, ativa as funções
    animaisJSON.forEach((animal) => preencherAnimais(animal));
    animaAnimaisNumeros();
  }

  return criarAnimais();
}
