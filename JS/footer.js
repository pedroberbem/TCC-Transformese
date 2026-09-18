let varfooter = document.querySelector(".hover-text-wrap")

let varfill = document.querySelector(".hover-text-fill")

let varContainer = document.querySelector(".container-footer")

varContainer.addEventListener('mousemove', function (parameter) {
    const rect = varfooter.getBoundingClientRect();
    const x = parameter.clientX - rect.left
    const y = parameter.clientY - rect.top
    const porcentagemX = (x / rect.width) * 100;
    const porcentagemY = (y / rect.height) * 100;
    varfill.style.setProperty('--mx', porcentagemX + '%');
    varfill.style.setProperty('--my', porcentagemY + '%');
});

const lettersR = document.querySelectorAll('.letter-r');
const lettersG = document.querySelectorAll('.letter-g');
const lettersB = document.querySelectorAll('.letter-b');

window.addEventListener('scroll', function () {
    const scrolled = window.scrollY;
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrolled / scrollable) * 100;
    lettersR.forEach(function (letra) {
        const deslocamento = -(100 - scrollPercent) * 1.5;
        letra.style.transform = 'translateX(' + deslocamento + 'px)';
    });
    lettersB.forEach(function (letra) {
        const deslocamento = (100 - scrollPercent) * 1.5;
        letra.style.transform = 'translateX(' + deslocamento + 'px)';
    });
});