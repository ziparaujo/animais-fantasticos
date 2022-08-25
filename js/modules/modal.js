export default class Modal {
  constructor(botaoAbrir, botaoFechar, container) {
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.container = document.querySelector(container);

    // bind this ao callback
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.cliqueFora = this.cliqueFora.bind(this);
  }

  // abre/fecha modal
  toggleModal() {
    this.container.classList.toggle('ativo');
  }

  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  // fecha modal
  cliqueFora(event) {
    if (event.target === this.container) {
      this.toggleModal();
    }
  }

  // add events aos elementos
  addModalEvents() {
    this.botaoAbrir.addEventListener('click', this.eventToggleModal);
    this.botaoFechar.addEventListener('click', this.eventToggleModal);
    this.container.addEventListener('click', this.cliqueFora);
  }

  init() {
    if (this.container && this.botaoAbrir && this.botaoFechar) {
      this.addModalEvents();
    }
    return this;
  }
}
