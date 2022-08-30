(()=>{"use strict";function t(t,e,s){const i=document.documentElement,n="data-outside";function o(a){t.contains(a.target)||(t.removeAttribute(n,""),e.forEach((t=>{i.removeEventListener(t,o)})),s())}t.hasAttribute(n)||(e.forEach((t=>{setTimeout((()=>{i.addEventListener(t,o)}))})),t.setAttribute(n,""))}class e{constructor(t,e,s){this.numeros=document.querySelectorAll(t),this.observerTarget=document.querySelector(e),this.obeserverClass=s,this.handleMutation=this.handleMutation.bind(this)}static incrementarNumero(t){const e=+t.innerText,s=Math.floor(e/100);let i=0;const n=setInterval((()=>{i+=s,t.innerText=i,i>e&&(clearInterval(n),t.innerText=e)}),25)}animaNumeros(){this.numeros.forEach((t=>this.constructor.incrementarNumero(t)))}handleMutation(t){t[0].target.classList.contains(this.obeserverClass)&&(this.observer.disconnect(),this.animaNumeros())}addMutationObserver(){this.observer=new MutationObserver(this.handleMutation),this.observer.observe(this.observerTarget,{attributes:!0})}init(){return this.numeros.length&&this.observerTarget&&this.addMutationObserver(),this}}new class{constructor(t,e){this.linksInternos=document.querySelectorAll(t),this.options=void 0===e?{behavior:"smooth",block:"start"}:e,this.scrollToSection=this.scrollToSection.bind(this)}scrollToSection(t){t.preventDefault();const e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView(this.options)}addLinkEvent(){this.linksInternos.forEach((t=>{t.addEventListener("click",this.scrollToSection)}))}init(){return this.linksInternos.length&&this.addLinkEvent(),this}}('[data-menu="suave"] a[href^="#"]').init(),new class{constructor(t){this.accordionList=document.querySelectorAll(t),this.activeClass="ativo"}toggleAccordion(t){t.classList.toggle(this.activeClass),t.nextElementSibling.classList.toggle(this.activeClass)}addAccordionEvent(){this.accordionList.forEach((t=>{t.addEventListener("click",(()=>this.toggleAccordion(t)))}))}init(){return this.accordionList.length&&(this.toggleAccordion(this.accordionList[0]),this.addAccordionEvent()),this}}('[data-anime="accordion"] dt').init(),new class{constructor(t,e){this.tabMenu=document.querySelectorAll(t),this.tabContent=document.querySelectorAll(e),this.activeClass="ativo"}activeTab(t){this.tabContent.forEach((t=>{t.classList.remove(this.activeClass)}));const e=this.tabContent[t].dataset.anime;this.tabContent[t].classList.add(this.activeClass,e)}addTabNavEvent(){this.tabMenu.forEach(((t,e)=>{t.addEventListener("click",(()=>this.activeTab(e)))}))}init(){return this.tabMenu.length&&this.tabContent.length&&(this.activeTab(0),this.addTabNavEvent()),this}}('[data-tab="menu"] li','[data-tab="content"] section').init(),new class{constructor(t,e,s){this.botaoAbrir=document.querySelector(t),this.botaoFechar=document.querySelector(e),this.container=document.querySelector(s),this.eventToggleModal=this.eventToggleModal.bind(this),this.cliqueFora=this.cliqueFora.bind(this)}toggleModal(){this.container.classList.toggle("ativo")}eventToggleModal(t){t.preventDefault(),this.toggleModal()}cliqueFora(t){t.target===this.container&&this.toggleModal()}addModalEvents(){this.botaoAbrir.addEventListener("click",this.eventToggleModal),this.botaoFechar.addEventListener("click",this.eventToggleModal),this.container.addEventListener("click",this.cliqueFora)}init(){return this.container&&this.botaoAbrir&&this.botaoFechar&&this.addModalEvents(),this}}('[data-modal="abrir"]','[data-modal="fechar"]','[data-modal="container"]').init(),new class{constructor(t){this.tooltips=document.querySelectorAll(t),this.onMouseLeave=this.onMouseLeave.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseOver=this.onMouseOver.bind(this)}criarTooltipBox(t){const e=document.createElement("div"),s=t.getAttribute("aria-label");e.classList.add("tooltip"),e.innerText=s,document.body.appendChild(e),this.tooltipBox=e}onMouseMove(t){this.tooltipBox.style.top=`${t.pageY+20}px`,this.tooltipBox.style.left=`${t.pageX+20}px`}onMouseLeave({currentTarget:t}){this.tooltipBox.remove(),t.removeEventListener("mouseleave",this.onMouseLeave),t.removeEventListener("mousemove",this.onMouseMove)}onMouseOver({currentTarget:t}){this.criarTooltipBox(event.currentTarget),t.addEventListener("mouseleave",this.onMouseLeave),t.addEventListener("mousemove",this.onMouseMove)}addTooltipsEvent(){this.tooltips.forEach((t=>{t.addEventListener("mouseover",this.onMouseOver)}))}init(){return this.tooltips.length&&this.addTooltipsEvent(),this}}("[data-tooltip]").init(),function(t,s){const i=document.querySelector(".numeros-grid");!async function(){const t=await fetch("../../animaisapi.json");(await t.json()).forEach((t=>function(t){const e=function(t){const e=document.createElement("div");return e.classList.add("numero-animal"),e.innerHTML=`<h3>${t.especie}</h3><span data-numero>${t.total}</span>`,e}(t);i.appendChild(e)}(t))),new e("[data-numero]",".numeros","ativo").init()}()}(),fetch("https://blockchain.info/ticker").then((t=>t.json())).then((t=>{document.querySelector(".btc-preco").innerText=(1e3/t.BRL.sell).toFixed(4)})).catch((t=>{console.log(Error(t))})),new class{constructor(t){this.sections=document.querySelectorAll(t),this.windowMetade=.6*window.innerHeight,this.checkDistance=function(t,e){let s;return(...e)=>{s&&clearTimeout(s),s=setTimeout((()=>{t(...e),s=null}),200)}}(this.checkDistance.bind(this))}getDistance(){this.distance=[...this.sections].map((t=>{const e=t.offsetTop;return{element:t,offset:Math.floor(e-this.windowMetade)}}))}checkDistance(){this.distance.forEach((t=>{window.pageYOffset>t.offset?t.element.classList.add("ativo"):t.element.classList.contains("ativo")&&t.element.classList.remove("ativo")}))}init(){return this.sections.length&&(this.getDistance(),this.checkDistance(),window.addEventListener("scroll",this.checkDistance)),this}stop(){window.removeEventListener("scroll",this.checkDistance)}}('[data-anime="scroll"]').init(),new class{constructor(t){this.dropdownMenus=document.querySelectorAll(t),this.events=["touchstart","click"],this.activeClass="ativo",this.activeDropdownMenu=this.activeDropdownMenu.bind(this)}activeDropdownMenu(e){e.preventDefault();const s=e.currentTarget;s.classList.add(this.activeClass),t(s,this.events,(()=>{s.classList.remove(this.activeClass)}))}addDropdownMenusEvent(){this.dropdownMenus.forEach((t=>{this.events.forEach((e=>{t.addEventListener(e,this.activeDropdownMenu)}))}))}init(){return this.dropdownMenus.length&&this.addDropdownMenusEvent(),this}}("[data-dropdown]").init(),new class{constructor(t,e){this.menu=document.querySelector(t),this.menuList=document.querySelector(e),this.eventos=["click","touchstart"],this.activeClass="ativo",this.openMenu=this.openMenu.bind(this)}openMenu(){this.menuList.classList.add(this.activeClass),this.menu.classList.add(this.activeClass),t(this.menuList,this.eventos,(()=>{this.menuList.classList.remove(this.activeClass),this.menu.classList.remove(this.activeClass)}))}addMenuMobileEvents(){this.eventos.forEach((t=>{this.menu.addEventListener(t,this.openMenu)}))}init(){return this.menu&&this.menuList&&this.addMenuMobileEvents(),this}}('[data-menu="button"]','[data-menu="list"]').init(),function(){const t=document.querySelector("[data-semana]"),e=t.dataset.semana.split(",").map(Number),s=t.dataset.horario.split(",").map(Number),i=new Date,n=i.getDay(),o=i.getHours(),a=e.includes(n),r=o>=s[0]&&o<s[1];a&&r?t.classList.add("aberto"):t.classList.add("fechado")}()})();