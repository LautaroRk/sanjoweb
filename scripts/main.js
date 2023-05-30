const botonMenu = document.querySelector('.menu-btn');
const menu = document.querySelector('.lista-navegacion');
const body = document.querySelector('body');

botonMenu.addEventListener('click', () => {
  if (menu.style.display === 'none') {
    menu.style.display = 'flex';
    body.style.position = 'fixed';
  } else {
    menu.style.display = 'none';
    body.style.position = 'relative';
  }
});