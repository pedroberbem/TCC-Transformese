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