const containerForm = document.querySelector('.container-formulario');

const observerLampada = new IntersectionObserver(function(entradas){
  entradas.forEach(function(entrada){
    if (entrada.isIntersecting) {
      entrada.target.classList.add('acesa');
    }
  });
});

observerLampada.observe(containerForm);