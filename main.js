const cerrarMenu = document.querySelector('.cerrar-menu');
const abrirMenu = document.querySelector('.menu-hamburguesa');
const mobileMenu = document.querySelector('.mobile-menu');

const btHome = document.querySelectorAll('.boton-home');
const btHabilidades = document.querySelectorAll('.boton-habilidades');
const btPortfolio = document.querySelectorAll('.boton-portfolio');
const btContacto = document.querySelectorAll('.boton-contacto');

const Home = document.querySelector('.home');
const Habilidades = document.querySelector('.habilidades');
const Portfolio = document.querySelector('.portfolio');
const Contacto = document.querySelector('.contacto');

cerrarMenu.addEventListener('click',cerrarMenuFunction);
abrirMenu.addEventListener('click',abrirMenuFunction);


btHome.forEach(boton => {
    boton.addEventListener('click',(event) => {
        event.preventDefault();
        Home.removeAttribute("id");
        Habilidades.id ='oculto';
        Portfolio.id ='oculto';
        Contacto.id ='oculto';
        mobileMenu.id = 'oculto';
    });
  });

  btHabilidades.forEach(boton => {
    boton.addEventListener('click',(event) => {
        event.preventDefault();
        Habilidades.removeAttribute("id");
        Home.id ='oculto';
        Portfolio.id ='oculto';
        Contacto.id ='oculto';
        mobileMenu.id = 'oculto';
    });
  });

  btPortfolio.forEach(boton => {
    boton.addEventListener('click',(event) => {
        event.preventDefault();
        Portfolio.removeAttribute("id");
        Home.id ='oculto';
        Habilidades.id ='oculto';
        Contacto.id ='oculto';
        mobileMenu.id = 'oculto';
    });
  });

  btContacto.forEach(boton => {
    boton.addEventListener('click',(event) => {
        event.preventDefault();
        Contacto.removeAttribute("id");
        Home.id ='oculto';
        Habilidades.id ='oculto';
        Portfolio.id ='oculto';
        mobileMenu.id = 'oculto';
    });
  });


function cerrarMenuFunction () {
    mobileMenu.id = 'oculto';
}

function abrirMenuFunction () {
    mobileMenu.removeAttribute("id");
    console.log("hola")
}