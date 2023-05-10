const cerrarMenu = document.querySelector('.cerrar-menu');
const abrirMenu = document.querySelector('.menu-hamburguesa');
const mobileMenu = document.querySelector('.mobile-menu');


cerrarMenu.addEventListener('click',cerrarMenuFunction);
abrirMenu.addEventListener('click',abrirMenuFunction);

function cerrarMenuFunction () {
    mobileMenu.id = 'oculto';
}

function abrirMenuFunction () {
    mobileMenu.removeAttribute("id");
    console.log("hola")
}