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

// Detecta se o arquivo HTML atual está dentro de uma subpasta (HTML/)
const isSubfolder = window.location.pathname.includes('/HTML/') || window.location.pathname.includes('/html/');
const basePath = isSubfolder ? '../Imagens/Fundos Gradiente/' : 'Imagens/Fundos Gradiente/';

const bgImages = [
   `${basePath}gradiente1.png`,
   `${basePath}gradiente2.png`,
   `${basePath}gradiente3.png`,
   `${basePath}gradiente4.png`,
   `${basePath}gradiente5.png`,
   `${basePath}gradiente6.png`,
   `${basePath}gradiente7.png`,
   `${basePath}gradiente8.png`,
   `${basePath}gradiente9.png`,
   `${basePath}gradiente10.png`,
   `${basePath}gradiente11.png`,
   `${basePath}gradiente12.png`,
   `${basePath}gradiente13.png`,
   `${basePath}gradiente14.png`,
   `${basePath}gradiente15.png`,
   `${basePath}gradiente16.png`
];

let currentBgIndex = 0;

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

/* Sumir ao clicar na tela */
const homeHint = document.getElementById('home-hint');

if (homeHint && homeSection){
   const removeHint = () => {
      homeHint.classList.add('fade-out');
      homeSection.removeEventListener('click', removeHint);
   };

   homeSection.addEventListener('click', removeHint);
}