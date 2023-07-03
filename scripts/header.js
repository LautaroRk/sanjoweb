const botonMenu = document.querySelector('.menu-btn');
const menu = document.querySelector('.lista-navegacion');
const subMenuHover = document.querySelector('#sub-nav-hover');
const subMenuFundacion = document.querySelector('.sub-nav');
const contenedorPrincipal = document.querySelector('.contenedor-principal');

function toggleMenu() {
  menu.classList.toggle('ocultar');
}

function mostrarSubMenu() {
  subMenuFundacion.classList.remove('ocultar');
}

function ocultarSubMenu() {
  subMenuFundacion.classList.add('ocultar');
}

function ocultarHeaderEnPantallaChica() {
  if (window.innerWidth < 800) {
    menu.classList.add("ocultar");
    mostrarSubMenu();
  } else {
    menu.classList.remove("ocultar");
    ocultarSubMenu();
  }
}

// Ejecutar la función al cargar la página y cuando se redimensione la ventana
window.addEventListener("DOMContentLoaded", ocultarHeaderEnPantallaChica);
window.addEventListener("resize", ocultarHeaderEnPantallaChica);

// Mostrar u ocultar el menú cuando se haga clic en el botón
botonMenu.addEventListener('click', toggleMenu);
subMenuHover.addEventListener('mouseover', mostrarSubMenu);
subMenuFundacion.addEventListener('mouseout', ocultarSubMenu);
contenedorPrincipal.addEventListener('mouseover', ocultarSubMenu);
