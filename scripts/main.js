const fotoCarrucel = document.querySelector("#foto-carrucel");
const botonIzquierda = document.querySelector("#botonIzquierda");
const botonDerecha = document.querySelector("#botonDerecha");

const imagenes = [
    "../imagenes/foto-taller-1.jpg",
    "../imagenes/foto-taller-2.jpg",
    "../imagenes/foto-taller-3.jpg",
    "../imagenes/foto-taller-4.jpg"
]

let indiceActual = 0;

function proximaImagen() {
    if (indiceActual === imagenes.length - 1) {
        indiceActual = 0;
    } else {
        indiceActual += 1;
    }
    fotoCarrucel.src = imagenes[indiceActual];
}

const intervalId = setInterval(proximaImagen, 4000)

function botonProxima() {
    proximaImagen();
    clearInterval(intervalId);
}

botonDerecha = addEventListener('click', botonProxima)
