let varfooter = document.querySelector(".hover-text-wrap")

let varfill = document.querySelector(".hover-text-fill")



let varContainer = document.querySelector(".container-footer")

varContainer.addEventListener('mousemove', function(parameter){
    const rect= varfooter.getBoundingClientRect();
    const x =parameter.clientX - rect.left
    const y =parameter.clientY - rect.top
    const porcentagemX =(x / rect.width) * 100;
    const porcentagemY = (y / rect.height) * 100;
    varfill.style.setProperty('--mx', porcentagemX + '%');
    varfill.style.setProperty('--my', porcentagemY + '%');
});
