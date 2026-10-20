/*=============== MOSTRAR MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
   navToggle = document.getElementById('nav-toggle'),
   navClose = document.getElementById('nav-close')

/* Show menu */
if (navToggle) {
   navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu')
   })
}

/* Hide menu */
if (navClose) {
   navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu')
   })
}

/*=============== REMOVER MENU  ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
   const navMenu = document.getElementById('nav-menu')
   
   navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))



/*=============== CARROSSEL DE FUNDO AO CLICAR NO BANNER ===============*/
const homeSection = document.querySelector('.home');
const homeBg = document.querySelector('.home__bg');


const bgImages = [
   '../Imagens/Fundos Gradiente/gradiente1.png',
   '../Imagens/Fundos Gradiente/gradiente2.png',
   '../Imagens/Fundos Gradiente/gradiente3.png',
   '../Imagens/Fundos Gradiente/gradiente4.png',
   '../Imagens/Fundos Gradiente/gradiente5.png',
   '../Imagens/Fundos Gradiente/gradiente6.png',
   '../Imagens/Fundos Gradiente/gradiente7.png',
   '../Imagens/Fundos Gradiente/gradiente8.png',
   '../Imagens/Fundos Gradiente/gradiente9.png',
   '../Imagens/Fundos Gradiente/gradiente10.png',
   '../Imagens/Fundos Gradiente/gradiente11.png',
   '../Imagens/Fundos Gradiente/gradiente12.png',
   '../Imagens/Fundos Gradiente/gradiente13.png',
   '../Imagens/Fundos Gradiente/gradiente14.png',
   '../Imagens/Fundos Gradiente/gradiente15.png',
   '../Imagens/Fundos Gradiente/gradiente16.png'
];


let currentBgIndex = 2;

if (homeSection && homeBg) {

   homeSection.style.cursor = 'pointer';

   homeSection.addEventListener('click', (event) => {

      if (event.target.closest('a, button, .home__button')) {
         return;
      }


      currentBgIndex = (currentBgIndex + 1) % bgImages.length;


      homeBg.style.opacity = '0.2';

      setTimeout(() => {
         homeBg.src = bgImages[currentBgIndex];
         homeBg.style.opacity = '1';
      }, 200);
   });
}

/*Sumir clicar na tela */
const homeHint = document.getElementById('home-hint');
const homesection = document.querySelector('.home');

if (homeHint && homesection){
   const removeHint = () => {
      homeHint.classList.add('fade-out');
      homesection.removeEventListener('click', removeHint);
   };

   homesection.addEventListener('click', removeHint);
}