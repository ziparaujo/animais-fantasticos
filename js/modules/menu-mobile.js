import outsideClick from './outside-click.js';

export default class MenuMobile {
  constructor(menuButton, menuList) {
    this.menu = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    this.eventos = ['click', 'touchstart'];
    this.activeClass = 'ativo';
    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    this.menuList.classList.add(this.activeClass);
    this.menu.classList.add(this.activeClass);
    outsideClick(this.menuList, this.eventos, () => {
      this.menuList.classList.remove(this.activeClass);
      this.menu.classList.remove(this.activeClass);
    });
  }

  addMenuMobileEvents() {
    this.eventos.forEach((evento) => {
      this.menu.addEventListener(evento, this.openMenu);
    });
  }

  init() {
    if (this.menu && this.menuList) {
      this.addMenuMobileEvents();
    }
    return this;
  }
}
