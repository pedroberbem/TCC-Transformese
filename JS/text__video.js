const capitulos = document.querySelectorAll('.capitulo');
const distanciaTransicao = 200;

function aplicarEfeito(){
    capitulos.forEach(function(capitulo, indice){
        if(indice===0){
            return;
        }
        const posicao = capitulo.getBoundingClientRect()
        let progresso = 1 - (posicao.top /distanciaTransicao)
        progresso = Math.min(1, Math.max(0, progresso));
        const rotacao = (1 - progresso) * 8;
        const deslocamento = (1 - progresso) * 60;
        capitulo.style.transform = 'translateY(' + deslocamento + 'px) rotate(' + rotacao + 'deg)';
    });
}

window.addEventListener('scroll', aplicarEfeito);