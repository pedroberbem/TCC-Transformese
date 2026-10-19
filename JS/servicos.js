document.querySelectorAll('.scroll-center').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      history.pushState(null, '', this.getAttribute('href')); // atualiza a URL
    }
  });
});

window.addEventListener('load', function() {
  const hash = window.location.hash;
  if (hash) {
    const target = document.querySelector(hash);
    if (target) {
      // setTimeout garante que o scroll padrão do navegador já terminou
      setTimeout(function() {
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }
  }
});

/*=============== DROPDOWN MOBILE TOGGLE ===============*/
const dropdownItem = document.querySelector('.nav__dropdown');
const dropdownTitle = document.querySelector('.dropdown__title');

if (dropdownItem && dropdownTitle) {
  dropdownTitle.addEventListener('click', (e) => {
    if (window.innerWidth <= 1150) {
      e.preventDefault();
      dropdownItem.classList.toggle('show-dropdown');
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 1150 && dropdownItem.classList.contains('show-dropdown')) {
      dropdownItem.classList.remove('show-dropdown');
    }
  });
}