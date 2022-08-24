import outsideClick from './outside-click.js';

export default function initMenuMobile() {
  const menu = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const eventos = ['click', 'touchstart'];

  function openMenu() {
    menuList.classList.add('ativo');
    menu.classList.add('ativo');
    outsideClick(menuList, eventos, () => {
      menuList.classList.remove('ativo');
      menu.classList.remove('ativo');
    });
  }

  eventos.forEach((evento) => {
    menu.addEventListener(evento, openMenu);
  });
}
