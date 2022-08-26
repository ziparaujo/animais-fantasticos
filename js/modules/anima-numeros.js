export default class AnimaNumeros {
  constructor(numeros, observerTarget, obeserverClass) {
    this.numeros = document.querySelectorAll(numeros);
    this.observerTarget = document.querySelector(observerTarget);
    this.obeserverClass = obeserverClass;
    this.handleMutation = this.handleMutation.bind(this);
  }

  // recebe o elemento do dom, com texto no innertext
  // incrementa a partir de 0 até o total
  static incrementarNumero(numero) {
    const total = +numero.innerText;
    const incremento = Math.floor(total / 100);
    let start = 0;
    const timer = setInterval(() => {
      start += incremento;
      numero.innerText = start;
      if (start > total) {
        clearInterval(timer);
        numero.innerText = total;
      }
    }, 25);
  }

  // ativa incrementar numero para cada numero selecionado
  animaNumeros() {
    this.numeros.forEach((numero) => this.constructor.incrementarNumero(numero));
  }

  // callback da mutação
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.obeserverClass)) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }

  // add o Mutation Observer para verificar quando a classe 'ativo' é add ao target
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numeros.length && this.observerTarget) {
      this.addMutationObserver();
    }
    return this;
  }
}
