const botonMenu = document.querySelector('.menu-btn');
const menu = document.querySelector('.lista-navegacion');

function ocultarHeaderEnPantallaChica() {
  if (window.innerWidth < 800) {
    menu.classList.add("ocultar");
  }
}

// Ejecutar la función al cargar la página y cuando se redimensione la ventana
window.addEventListener("DOMContentLoaded", ocultarHeaderEnPantallaChica);
window.addEventListener("resize", ocultarHeaderEnPantallaChica);

function toggleMenu() {
  menu.classList.toggle('ocultar');
}

// Mostrar u ocultar el menú cuando se haga clic en el botón
botonMenu.addEventListener('click', toggleMenu);
