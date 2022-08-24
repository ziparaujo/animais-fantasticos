export default function initModal() {
  const modalContainer = document.querySelector('[data-modal="container"]');
  const abrir = document.querySelector('[data-modal="abrir"]');
  const fechar = document.querySelector('[data-modal="fechar"]');

  function toggleModal(event) {
    event.preventDefault();
    modalContainer.classList.toggle('ativo');
  }

  function cliqueFora(event) {
    if (event.target === this) {
      toggleModal(event);
    }
  }

  if (modalContainer && abrir && fechar) {
    abrir.addEventListener('click', toggleModal);
    fechar.addEventListener('click', toggleModal);
    modalContainer.addEventListener('click', cliqueFora);
  }
}
