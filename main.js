const cerrarMenu = document.querySelector('.cerrar-menu');
const abrirMenu = document.querySelector('.menu-hamburguesa');
const mobileMenu = document.querySelector('.mobile-menu');

const btHome = document.querySelector('.boton-home');
const btHabilidades = document.querySelector('.boton-habilidades');
const btPortfolio = document.querySelector('.boton-portfolio');
const btContacto = document.querySelector('.boton-contacto');

const Home = document.querySelector('.home');
const Habilidades = document.querySelector('.habilidades');
const Portfolio = document.querySelector('.portfolio');
const Contacto = document.querySelector('.contacto');


cerrarMenu.addEventListener('click',cerrarMenuFunction);
abrirMenu.addEventListener('click',abrirMenuFunction);

btHome.addEventListener('click',abrirSeccionHome)
btHabilidades.addEventListener('click',abrirSeccionHabilidades)
btPortfolio.addEventListener('click',abrirSeccionPortfolio)
btContacto.addEventListener('click',abrirSeccionContacto)

function cerrarMenuFunction () {
    mobileMenu.id = 'oculto';
}

function abrirMenuFunction () {
    mobileMenu.removeAttribute("id");
    console.log("hola")
}

function abrirSeccionHome(){
    Home.removeAttribute("id");
    Habilidades.id ='oculto';
    Portfolio.id ='oculto';
    Contacto.id ='oculto';
}

function abrirSeccionHabilidades(){
    Habilidades.removeAttribute("id");
    Home.id ='oculto';
    Portfolio.id ='oculto';
    Contacto.id ='oculto';
}

function abrirSeccionPortfolio(){
    Portfolio.removeAttribute("id");
    Home.id ='oculto';
    Habilidades.id ='oculto';
    Contacto.id ='oculto';
}

function abrirSeccionContacto(){
    Contacto.removeAttribute("id");
    Home.id ='oculto';
    Habilidades.id ='oculto';
    Portfolio.id ='oculto';
}